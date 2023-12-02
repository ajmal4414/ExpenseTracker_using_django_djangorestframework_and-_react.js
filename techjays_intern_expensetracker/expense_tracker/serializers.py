from rest_framework import serializers
from .models import  Expense


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense       
        fields = '__all__'




class ExpenseHistorySerializer(serializers.ModelSerializer):
    edit_url = serializers.HyperlinkedIdentityField(view_name='expense-update', format='html')
    delete_url = serializers.HyperlinkedIdentityField(view_name='expense-delete', format='html')
    class Meta:
        model = Expense
        fields = '__all__'


   
class ExpenseEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'     



class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'
        # fields=['id','description', 'amount' ,'date', 'category' ]

