from dataclasses import field, fields
from rest_framework import serializers
from teacher.models import Teacher, Class

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        # fields = ('id', 'name', 'value_hour', 'description', 'picture')
        fields = '__all__'


class RegisterClassSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'