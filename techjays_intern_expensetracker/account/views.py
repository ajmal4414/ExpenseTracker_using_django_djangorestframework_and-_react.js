from django.shortcuts import render
from .serializers import RegisterUserSerializer


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
# logger = logging.getLogger(__name__)

# class CustomUserCreate(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request, format='json'):
#         serializer = RegisterUserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json_data = serializer.data
#                 return Response(json_data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

import logging

logger = logging.getLogger(__name__)


# logger.error(f"User registration failed: {serializer.errors}")

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


# class LoginView(APIView):
#     def post(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         user = authenticate(request, email=email, password=password)

#         if user:
#             login(request, user)
#             token, created = Token.objects.get_or_create(user=user)
#             return Response({'token': token.key})
#         else:
#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



class LoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == status.HTTP_200_OK:
            # Successfully obtained the JWT token
            token = response.data['access']
            return Response({'token': token}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)





class HelloView(APIView): 
    permission_classes = (IsAuthenticated, ) 
  
    def get(self, request): 
        content = {'message': 'Hello, GeeksforGeeks'} 
        return Response(content) 
    

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














