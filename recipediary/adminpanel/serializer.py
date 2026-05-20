from rest_framework import serializers
from .models import Recipe,User




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    author = UserSerializer()  # nested serializer to show author details
    class Meta:
        model = Recipe
        fields = '__all__'