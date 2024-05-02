from django.urls import path
from .views import Noun, NewAPI

urlpatterns = [
    path('', Noun.as_view(), name="noun"),
    path('newapi/', NewAPI.as_view(), name="newAPI"),
]