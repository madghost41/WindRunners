from django.db import models
from player_app.models import Player
from staff_app.models import Staff


class Team(models.Model):
    roster = models.OneToOneField(Player, on_delete=models.CASCADE, related_name="roster" )
    staff = models.OneToOneField(Staff, on_delete=models.CASCADE, related_name="staff")
