from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from .models import Team
from player_app.serializers import PlayerSerializer
from staff_app.serializers import StaffSerializer
from player_app.models import Player
from staff_app.models import Staff

class All_player(APIView):
    def get(self, request):
        return Response(PlayerSerializer(Player.objects.order_by(id), many=True).data)
    
class All_staff(APIView):
    def get(self, request):
        return Response(StaffSerializer(Staff.objects.order_by(id), many=True).data)
    
class A_player(APIView):
    def get(self, request, player_id):
        return Response(PlayerSerializer(get_object_or_404(Player, id = player_id)).data)
    
    def post(self, request, player_id):
        player = get_object_or_404(Player, id = player_id)
        Player.objects.create(player = player, team = request.user.team )
        return Response(f"{player.name} has been added", status=HTTP_201_CREATED)

    def delete(self, request, player_id):
        player = get_object_or_404(Player, player = player_id)
        player.delete()
        return Response(status=HTTP_204_NO_CONTENT)



class A_staff(APIView):
    def get(self, request, staff_id):
        return Response(StaffSerializer(get_object_or_404(Staff, id = staff_id)).data)
    
    def post(self, request, staff_id):
        player = get_object_or_404(Player, id = staff_id)
        Player.objects.create(player = player, team = request.user.team )
        return Response(f"{player.name} has been added", status=HTTP_201_CREATED)


    def delete(self, request, staff_id):
        staff = get_object_or_404(Staff, staff = staff_id)
        staff.delete()
        return Response(status=HTTP_204_NO_CONTENT)
