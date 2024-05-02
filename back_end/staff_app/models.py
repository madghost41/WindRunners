from django.db import models

class Staff(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField()
    position = models.CharField()
