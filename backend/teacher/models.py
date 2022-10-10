from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    value_hour = models.DecimalField(max_digits=9, decimal_places=2, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    picture = models.URLField(max_length=255, null=False, blank=False)

class Class(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    teacher = models.ForeignKey(to=Teacher, on_delete=models.CASCADE, related_name="classes", null=False, blank=False)

# >python manage.py makemigrations
# >python manage.py migrate

# python manage.py shell
# >>> from teacher.models import Teacher
# >>> teacher = Teacher(name="Luiz Mateus", value_hour=96.60, description="Professor de música e violão", picture="https://github.com/luizmateuss.png")
# >>> teacher.nome
# >>> teacher.name 
# 'Luiz Mateus'
# >>> teacher.save()