from django.db import models

class Player(models.Model):
    full_name = models.CharField()
    position = models.CharField()
    uniform_number = models.PositiveIntegerField(null=True)
    age = models.PositiveIntegerField()
    college = models.CharField()
    years_pro = models.PositiveIntegerField(null=True)
    
