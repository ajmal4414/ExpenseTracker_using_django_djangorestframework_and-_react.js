from rest_framework import serializers
from .models import  Expense


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        # fields=['id','description', 'amount' ,'date', 'category' ]

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


# class DashboardSerializer(serializers.Serializer):
#     model=Expense
#     total_expense = serializers.DecimalField(max_digits=10, decimal_places=2)
#     expenses_by_category = serializers.ListField(
#         child=serializers.DictField(
#             child=serializers.CharField(max_length=50)
#         )
#     )      


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = '__all__'

# class ExpenseSerializer(serializers.ModelSerializer):
#     category_name = serializers.ReadOnlyField(source='category.name')

#     class Meta:
#         model = Expense
#         fields = '__all__'






# from rest_framework.serializers import ModelSerializer


# class ExpenseSerializer(ModelSerializer):
#     class Meta:
#         model = Expense
#         fields = '__all__'




# class ExpenseHistorySerializer(ModelSerializer):
#     edit_url = serializers.HyperlinkedIdentityField(view_name='expense-update', format='html')
#     delete_url = serializers.HyperlinkedIdentityField(view_name='expense-delete', format='html')
#     class Meta:
#         model = Expense
#         fields = '__all__'


   
# class ExpenseEditSerializer(ModelSerializer):
#     class Meta:
#         model = Expense
#         fields = '__all__'     
