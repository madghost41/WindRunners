from django.db import models
from django.contrib.auth.models import AbstractUser

class Manager(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    # class Meta:
    #       permissions = [('manager_group', 'Can access groups of managers'), ('manager_user_permissions', 'Can access user permissions of managers')]