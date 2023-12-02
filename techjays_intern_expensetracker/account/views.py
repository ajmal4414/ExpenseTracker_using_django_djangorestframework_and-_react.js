from django.shortcuts import render
from .serializers import RegisterUserSerializer,UserSerializer,CustomTokenObtainPairSerializer
from rest_framework import status,generics,viewsets,response
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate,login
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.mail import send_mail
from .models import CustomAccountManager
from .models import NewUser
import pymongo
from .import serializers
from django.contrib.auth.models import User
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.urls import reverse
from django.utils.http import urlsafe_base64_encode
# import logging

# Create your views here.

import logging

logger = logging.getLogger(__name__)



class CustomUserCreate(APIView):
    permission_classes = [AllowAny]
   

    def post(self, request, format='json'):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json_data = serializer.data
                return Response(json_data, status=status.HTTP_201_CREATED)
        else:
            logger.error(f"User registration failed: {serializer.errors}")
            return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response



from rest_framework_simplejwt.views import TokenObtainPairView
# from .serializers import MyTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    

from django.contrib.sites.shortcuts import get_current_site
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.tokens import default_token_generator
from .serializers import PasswordResetSerializer

User = get_user_model()

class PasswordResetView(APIView):
    serializer_class = PasswordResetSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']

            try:
                user = User.objects.get(email=email)
            except ObjectDoesNotExist:
                return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

            # Generate a password reset token
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            current_site = get_current_site(request)
            reset_link = reverse('password_reset_confirm', kwargs={'uidb64': uid, 'token': token})

            # Send a password reset email with the reset link
            subject = 'Password Reset'
            message = f'Click the following link to reset your password: {current_site.domain}{reset_link}'
            from_email = 'samp1@gmail.com'  # Update with your email
            send_mail(subject, message, from_email, [user.email])

            return Response({'detail': 'Password reset email sent'})

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)














