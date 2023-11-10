from django.http import JsonResponse
from django.shortcuts import render

from rest_framework import generics
from rest_framework.response import Response

from .models import  Expense
from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import   ExpenseHistorySerializer,ExpenseEditSerializer, ExpenseSerializer
# from .serializer import ExpenseSerializer
# from django.db.models.functions import TruncMonth, TruncYear
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
from rest_framework.permissions import IsAuthenticated

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
    permission_classes=(IsAuthenticated)
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


# class ExpenseDetailView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes=[IsAuthenticated]
#     queryset = Expense.objects.all()
#     serializer_class = ExpenseSerializer

from rest_framework import viewsets
from django.shortcuts import get_object_or_404




# class CategoryList(generics.ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer    

# class ReportsView(APIView):
#     def get(self, request, format=None):
#         # Get query parameters
#         report_type = request.query_params.get('report_type', 'monthly')  # 'monthly' or 'yearly'

#         # Generate report based on the requested type
#         if report_type == 'monthly':
#             expenses = Expense.objects.annotate(month=TruncMonth('date')).values('month').annotate(total=Sum('amount')).order_by('month')
#         elif report_type == 'yearly':
#             expenses = Expense.objects.annotate(year=TruncYear('date')).values('year').annotate(total=Sum('amount')).order_by('year')
#         else:
#             return Response({'error': 'Invalid report type'}, status=400)

#         # Serialize the data
#         serializer = ExpenseSerializer(expenses, many=True)

#         return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def reports_view(request):
    report_type = request.GET.get('report_type', 'monthly')

    pipeline = []

    if report_type == 'monthly':
        pipeline.append({
            '$group': {
                '_id': {'year': {'$year': '$date'}, 'month': {'$month': '$date'}},
                'total': {'$sum': '$amount'},
            }
        })
    elif report_type == 'yearly':
        pipeline.append({
            '$group': {
                '_id': {'year': {'$year': '$date'}},
                'total': {'$sum': '$amount'},
            }
        })
    else:
        return Response({'error': 'Invalid report type'}, status=400)

    client = MongoClient('mongodb://localhost:27017')
    db = client['expensedatabase']

    expenses = list(db.expense.aggregate(pipeline))

    # Serialize the data using DRF serializer
    serializer = ExpenseSerializer(expenses, many=True)

    return Response(serializer.data)


class DashboardView(APIView):
    def get(self, request):
        # Connect to the MongoDB server
        client = MongoClient("mongodb://localhost:27017")  # Replace with your MongoDB connection string

        # Choose the database and collection
        db = client["expenedatabase"]  # Replace with your MongoDB database name
        collection = db["expensedatabasecollection"]  # Replace with your MongoDB collection name

        # Calculate the start and end dates for the current month
        today = datetime.today()
        start_date = today.replace(day=1)
        end_date = (start_date + relativedelta(months=1)).replace(day=1)

        # Calculate the total expense for the current month
        total_expense = collection.aggregate([
            {
                "$match": {
                    "date": {
                        "$gte": start_date,
                        "$lt": end_date
                    }
                }
            },
            {
                "$group": {
                    "_id": None,
                    "total": {
                        "$sum": "$amount"
                    }
                }
            }
        ])
        total_expense = list(total_expense)
        total_expense = total_expense[0]['total'] if total_expense else 0

        # List recent transactions (e.g., last 5 transactions)
        recent_transactions = collection.find({"date": {"$lt": end_date}}).sort("date", -1).limit(5)
        recent_transactions = list(recent_transactions)

        # Close the MongoDB connection
        client.close()

        dashboard_data = {
            'total_expense': total_expense,
            'recent_transactions': recent_transactions,
        }

        return Response(dashboard_data)
    


from .models import Expense
from rest_framework import viewsets
from .serializers import ExpenseSerializer


class ExpenseDetailView(viewsets.ModelViewSet):
    # permission_classes=[IsAuthenticated]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    # def get_object(self, queryset=None, **kwargs):
    #     item = self.kwargs.get('pk')
    #     return get_object_or_404(Expense, slug=item)

    # # Define Custom Queryset
    # def get_queryset(self):
    #     return Expense.objects.all()