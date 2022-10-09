# from django.shortcuts import render
# from django.http import JsonResponse

# def home(request):
#     # return render(request, 'app/home.html')
#     return JsonResponse({"nome": "Luiz Mateus", "idade": 20})

from rest_framework.views import APIView
from rest_framework.response import Response

class HomeApiView(APIView):
    def get(self, request, format=None):
        return Response({"nome": "Luiz Mateus", "idade": 20}, status=200)