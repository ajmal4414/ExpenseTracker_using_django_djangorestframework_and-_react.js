from django.http import JsonResponse
from django.shortcuts import render

from rest_framework import generics
from rest_framework.response import Response

from .models import  Expense
from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import   ExpenseHistorySerializer,ExpenseEditSerializer, ExpenseSerializer
from django.db.models import Sum
from django.utils.decorators import method_decorator
from bson import json_util
from django.views.decorators.csrf import csrf_exempt
from dateutil.relativedelta import relativedelta
from django.views import View
from pymongo import MongoClient
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from datetime import datetime
from dateutil.relativedelta import relativedelta


# Create your views here.







class ExpenseHistoryView(generics.ListAPIView):
    serializer_class = ExpenseHistorySerializer
    queryset = Expense.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['date', 'category', 'description']

    def get_queryset(self):
        queryset = Expense.objects.all()

        # Additional filtering logic if needed

        return queryset




class ExpenseUpdateView(generics.UpdateAPIView):   
    serializer_class = ExpenseHistorySerializer
    queryset = Expense.objects.all()
    lookup_field = 'pk'


class ExpenseDeleteView(generics.DestroyAPIView):
    serializer_class = ExpenseHistorySerializer
    queryset = Expense.objects.all()
    lookup_field = 'pk'


class ExpenseEditView(generics.RetrieveUpdateAPIView):
    serializer_class = ExpenseEditSerializer
    queryset = Expense.objects.all()
    lookup_field = 'pk'

class ExpenseCreateView(generics.ListCreateAPIView):
    serializer_class=ExpenseSerializer
    queryset=Expense.objects.all()


class ExpenseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


class ExpenseChartData(APIView):
    def get(self, request, *args, **kwargs):
        expenses = Expense.objects.all()
        serializer = ExpenseSerializer(expenses, many=True)

        # Transform the data as needed for the chart
        data_for_chart = [
            {"category": expense["category"], "amount": float(expense["amount"])}
            for expense in serializer.data
        ]

        return Response(data_for_chart)    


class YearlyReport(APIView):
    def get(self, request, year):
        expenses = Expense.objects.filter(date__year=year)
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CategoryReport(APIView):
    def get(self, request, year, month):
        try:
            # Convert year and month to integers
            year = int(year)
            month = int(month)

            # Filter expenses for the specified year and month
            start_date = f"{year:04d}-{month:02d}-01"
            end_date = f"{year:04d}-{month+1:02d}-01"  # Next month's 1st day
            expenses = Expense.objects.filter(date__gte=start_date, date__lt=end_date)

            # Group by category and calculate the total amount for each category
            category_totals = {}
            for expense in expenses:
                category = expense.category

                # Convert Decimal128 to float
                amount = float(expense.amount.to_decimal())

                if category in category_totals:
                    category_totals[category] += amount
                else:
                    category_totals[category] = amount

            # Prepare the response data
            response_data = [{'category': key, 'total': value} for key, value in category_totals.items()]

            return Response(response_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
