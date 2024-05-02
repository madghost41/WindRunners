from django.db import models
from player_app.models import Player

class Stats(models.Model):
    player_stat = models.OneToOneField(Player, on_delete=models.CASCADE, related_name="stats")