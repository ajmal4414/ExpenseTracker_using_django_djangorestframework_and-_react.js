from django.urls import path
from .views import CustomUserCreate, HelloView, LoginView, PasswordResetView#, ResetPasswordAPI
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import PasswordResetConfirmView


urlpatterns=[
    path('register/',CustomUserCreate.as_view(),name='create-user'),
    path('login/',LoginView.as_view(),name="login"),
    path('hello/', HelloView.as_view(), name ='hello'),
    # path('password-reset/',PasswordResetView.as_view(),name='password-reset'),
    # path('reset-password-api/<str:encoded_pk>/<str:token>/',ResetPasswordAPI.as_view(),name='password-reset'),
    # path('password-reset/',PasswordResetView.as_view(),name='request-password-reset'),
    # path('api/password-reset/', PasswordResetView.as_view(), name='password_reset'),
    # path('api/password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

   
    
]