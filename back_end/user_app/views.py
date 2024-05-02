from django.shortcuts import render
from django.core.exceptions import ValidationError
from django.contrib.auth import login, logout, authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import(
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from .models import Manager

class Sign_up(APIView):
    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get("username", request.data.get("email"))
        new_manager = Manager(**data)
        try:
            new_manager.full_clean()
            new_manager.set_password(data.get("password"))
            new_manager.save()
            token = Token.objects.create(user = new_manager)
            return Response({"user":new_manager.email, "token":token.key}, status= HTTP_201_CREATED)
        except ValidationError as e:
            print(e)
            return Response(e.message, status= HTTP_400_BAD_REQUEST)

class Log_in(APIView):
    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get("username", request.data.get("email"))
        manager = authenticate(username = data.get("username"), password = data.get("password"))
        if manager:
            login(request, manager)
            token, created = Token.objects.get_or_create(user = manager)
            return Response({"manager":manager.email, "token":token.key}, status= HTTP_200_OK)
        return Response("No user matching credentials", status= HTTP_400_BAD_REQUEST)
    
class TokenReq(APIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]

class Info(TokenReq):
    def get(self, request):
        return Response({"email":request.user.email})

class Log_out(TokenReq):
    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response(status= HTTP_204_NO_CONTENT)