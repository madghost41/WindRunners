from django.shortcuts import render
from user_app.views import TokenReq
from rest_framework.views import APIView
from rest_framework.response import Response 
# from rest_framework.status import s
from .serializers import PlayerSerializer


class All_Players(APIView):
    
    pass
       