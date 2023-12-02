# # from django import views
from django import views
from django.urls import path
# from .import views
from .views import  ExpenseCreateView, ExpenseDeleteView, ExpenseDetailView, ExpenseEditView, ExpenseHistoryView, ExpenseUpdateView,ExpenseChartData, YearlyReport, CategoryReport



urlpatterns=[

    path('expense-history/', ExpenseHistoryView.as_view(), name='expense-history'),
    path('expense-update/<int:pk>/', ExpenseUpdateView.as_view(), name='expense-update'),
    path('expense-delete/<int:pk>/', ExpenseDeleteView.as_view(), name='expense-delete'),
    path('expense-edit/<int:pk>/', ExpenseEditView.as_view(), name='expense-edit'),
    path('expense-create/',ExpenseCreateView.as_view(),name="expense-create"),
    path('expenses/<int:pk>/', ExpenseDetailView.as_view(), name='expense-detail'),
    path('expense-chart/',ExpenseChartData.as_view(),name='expense-chart'),
    path('reports/yearly/<int:year>/', YearlyReport.as_view(), name='yearly-report'),
    path('reports/category/<int:year>/<int:month>/', CategoryReport.as_view(), name='category-report'),

  

]