
from django import forms
from .models import Expense

class ExpenseEditForm(forms.ModelForm):
    class Meta:
        model = Expense
        fields = '__all__'
