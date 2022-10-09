from dataclasses import field, fields
from rest_framework import serializers
from teacher.models import Teacher

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        # fields = ('id', 'name', 'value_hour', 'description', 'picture')
        fields = '__all__'