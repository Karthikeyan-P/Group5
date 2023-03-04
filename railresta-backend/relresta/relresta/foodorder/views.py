from django.shortcuts import render
import json

from datetime import datetime, timedelta

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone

from .models import Train, Station,FoodDetails,RestaurantDetails,TrainSchedule
# Create your views here.

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):

    username = request.data.get("username")
    password = request.data.get("password")    
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)                        
    user = authenticate(username=username, password=password)       
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)                        
                        
    token, _ = Token.objects.get_or_create(user=user)      
    return Response({'token': token.key,
                     'username':username},
                    status=HTTP_200_OK)

@csrf_exempt                    
@api_view(["POST"])
def logout(request):

    request.user.auth_token.delete()
    #logout(request)
    
    return Response({'User logged out successfully'},
                    status=HTTP_200_OK)


def request_method(request):
    """ Func that handles methods and decoding data """

    methods = ['POST', 'PUT', 'DELETE', 'GET']
    if request.method in methods:
        json_data = json.loads(request.body)
        return json_data
    
@csrf_exempt
def add_food_details(request):
    """
    >> curl -H "Content-Type: application/json" -X POST -d "{\"category_id_id\":1, \"food_name\":\"test\", \"price\":5}" http://127.0.0.1:8000/employees/add-food-details
    """

    json_data = request_method(request)
    category_id = json_data['category_id_id']
    food_name = json_data['food_name']
    price = json_data['price']
    food_details = RestaurantDetails.add_food_details(request, 
        category_id, food_name, price)
    DictObj = {
        "category_id": food_details.category_id_id,
        "food_id": food_details.id,
        "food_name": food_details.food_name,
        "food_price": food_details.price
        }
    return JsonResponse(DictObj)