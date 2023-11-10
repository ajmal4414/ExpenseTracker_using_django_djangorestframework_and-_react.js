from rest_framework import serializers
# from users.models import NewUser
# from account.models import NewUser
from django.contrib.auth.password_validation import validate_password
# from django.contrib.auth import NewUser

from django.contrib.auth import get_user_model

from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth.models import User
# import logging
# User = get_user_model()
# class CustomUserSerializer(serializers.ModelSerializer):
#     """
#     Currently unused in preference of the below.
#     """
#     email = serializers.EmailField(required=True)
#     user_name = serializers.CharField(required=True)
#     password = serializers.CharField(min_length=8, write_only=True)

#     class Meta:
#         model = NewUser
#         fields = ('email', 'user_name', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         # as long as the fields are the same, we can just use this
#         instance = self.Meta.model(**validated_data)
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance

# logger.error(f"Error during user creation: {str(e)}")
# from django.contrib.auth import get_user_model  # Import get_user_model
# import logging

# logger = logging.getLogger(__name__)

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
    #  try:
        
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
     
    #  except Exception as e:
    #     logger.error(f"Error during user creation: {str(e)}")
    #     raise




# class RegisterUserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = NewUser
#         fields = ['email', 'user_name', 'password']
#         extra_kwargs = {'password': {'write_only': True}}

#     def validate_password(self, value):
#         validate_password(value)
#         return value

#     def validate_email(self, value):
#         """
#         Validate that the email is unique and has a valid format.
#         """
#         if User.objects.filter(email=value).exists():
#             raise serializers.ValidationError("Email must be unique.")
#         return value

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance


# class PasswordResetSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     class Meta:
#         fields=['email']



# class EmailSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     class Meta:
#         model = get_user_model() 
#         fields=['email']

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

# class ResetPasswordSerializer(serializers.Serializer):
#     """
#     Reset Password Serializer.
#     """

#     password = serializers.CharField(
#         write_only=True,
#         min_length=1,
#     )

#     class Meta:
#         field = ("password")

#     def validate(self, data):
#         """
#         Verify token and encoded_pk and then set new password.
#         """
#         password = data.get("password")
#         token = self.context.get("kwargs").get("token")
#         encoded_pk = self.context.get("kwargs").get("encoded_pk")

#         if token is None or encoded_pk is None:
#             raise serializers.ValidationError("Missing data.")

#         pk = urlsafe_base64_decode(encoded_pk).encode()
#         user = User.objects.get(pk=pk)
#         if not PasswordResetTokenGenerator().check_token(user, token):
#             raise serializers.ValidationError("The reset token is invalid")

#         user.set_password(password)
#         user.save()
#         return data        