from django.urls import path
from .views import CustomUserCreate, HelloView,  PasswordResetView,CustomTokenObtainPairView #LoginView, #ResetPasswordAPI
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import PasswordResetConfirmView


urlpatterns=[
    path('register/',CustomUserCreate.as_view(),name='create-user'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'), 
    path('hello/', HelloView.as_view(), name ='hello'),
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

   
    
]