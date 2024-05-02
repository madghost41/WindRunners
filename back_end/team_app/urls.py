from django.urls import path
from .views import All_player, All_staff, A_player, A_staff

urlpatterns = [
    path("", All_player.as_view(), name="all_players"),
    path("<int:item_id>/", A_player.as_view(), name="a_player"),
    path("allstaff", All_staff.as_view(), name="all_staff"),
    path("<int:staff_id>/", A_staff.as_view(), name="a_staff"),
]