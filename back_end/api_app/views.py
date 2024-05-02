import json
from rest_framework.views import APIView
from rest_framework.response import Response 
import requests
from requests_oauthlib import OAuth1
from wind_proj.settings import env
from pprint import PrettyPrinter

pp = PrettyPrinter(indent=2, depth=2)


class Noun(APIView):
    def get(self, request):
        api_key = env.get("API_KEY")
        headers = {
            "Ocp-Apim-Subscription-Key": api_key
        }
        limit = request.query_params.get('limit', 100)
        params = {"limit": limit}
        endpoint = "https://api.sportsdata.io/v3/nfl/scores/json/PlayersByFreeAgents"
        response = requests.get(endpoint, headers=headers, params=params)
        print("Player", response.content)
        json_response = response.json()
        print(type(json_response))
        return Response({"data":json_response})
    
class NewAPI(APIView):
    def get(self, request):
        api_key = env.get("API_KEY_TWO")
        headers = {
            "X-RapidAPI-Key": api_key,
            "X-RapidAPI-Host": "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com"
        }
        querystring = {"teamAbv": request.query_params.get('teamAbv', 'CHI'), "season": request.query_params.get('season', '2023')}
        endpoint = "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamSchedule"
        response = requests.get(endpoint, headers=headers, params=querystring)
        return Response(response.json())