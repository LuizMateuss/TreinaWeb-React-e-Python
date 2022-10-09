from django.shortcuts import render
from django.http import JsonResponse

def home(request):
    # return render(request, 'app/home.html')
    return JsonResponse({"nome": "Luiz Mateus", "idade": 20})
