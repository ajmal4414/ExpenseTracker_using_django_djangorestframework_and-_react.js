# # from django import views
from django import views
from django.urls import path
# from .import views
from .views import DashboardView, ExpenseCreateView, ExpenseDeleteView, ExpenseDetailView, ExpenseEditView, ExpenseHistoryView, ExpenseUpdateView,reports_view

# from rest_framework.routers import DefaultRouter
# from .views import ExpenseDetailView
# # app_name='expense_tracker'
# expense_router=DefaultRouter()
# expense_router.register(r'expense',ExpenseDetailView)#,basename='expense'
# urlpatterns=router.urls


# urlpatterns=[
#     # path('product-list/',views.api_overview,name='product-list'),
#     # path('create-expense/',views.createproduct,name='create-product')
#     path('expense-history/', ExpenseHistoryView.as_view(), name='expense-history'),
#     path('expense-update/<int:pk>/', ExpenseUpdateView.as_view(), name='expense-update'),
#     path('expense-delete/<int:pk>/', ExpenseDeleteView.as_view(), name='expense-delete'),
#     path('expense-edit/<int:pk>/', ExpenseEditView.as_view(), name='expense-edit'),
#     path('expense-create/',ExpenseCreateView.as_view(),name="expense-create"),
#     # path('reports/', ReportsView.as_view(), name='reports'),
    #   path('expenses/<int:pk>/', ExpenseDetailView.as_view(), name='expense-detail'),

#     path('dashboard/',DashboardView.as_view(),name='dashboard'),
#     path('report/',reports_view,name='reports'),
    

# ]