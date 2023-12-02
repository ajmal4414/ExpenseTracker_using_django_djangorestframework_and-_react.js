from rest_framework import serializers

from django.contrib.auth.password_validation import validate_password

from django.contrib.auth import get_user_model

from django.utils.http import urlsafe_base64_decode

from django.contrib.auth.tokens import PasswordResetTokenGenerator

from django.contrib.auth.models import User

class RegisterUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()  # Use get_user_model() for better flexibility
        fields = ['email', 'user_name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        validate_password(value)
        return value

    def validate_email(self, value):
        """
        Validate that the email is unique and has a valid format.
        """
        User = get_user_model()  # Use get_user_model() here as well
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email must be unique.")
        return value

    def create(self, validated_data):   
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
     
   


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # adding custom claims
        token['user_name'] = user.user_name
        token['email'] = user.email
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user
        data["user_name"] = user.user_name
        data["email"] = user.email
        return data






class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


from .models import NewUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ['id', 'email', 'user_name']
