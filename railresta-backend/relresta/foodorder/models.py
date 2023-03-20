from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    """User Class"""
    name = models.CharField(max_length=300) 
class Station(models.Model):
    """Class containing the station details"""
    station_code=models.CharField(max_length=5, blank=False, default='',unique=True)
    station_name=models.CharField(max_length=70, blank=False, default='')
class Train(models.Model):
    """Class containing the Train details"""
    train_no=models.IntegerField(unique=True)
    train_name=models.CharField(max_length=70, blank=False, default='')
    source_station=models.ManyToManyField(Station, through="Membership",through_fields=("station_name"),on_delete=models.CASCADE, null=True)
    destination_station=models.ManyToManyField(Station, through="Membership",through_fields=("station_name"),on_delete=models.CASCADE, null=True)      

class TrainSchedule(models.Model):
    """Class containing the Train Schedule Details"""
    train_no=models.ManyToManyField(Train,through="Membership",through_fields=("train_no"),on_delete=models.CASCADE, null=True)
    station_code=models.ManyToManyField(Station, through="Membership",through_fields=("station_code"),on_delete=models.CASCADE, null=True)      
    station_name=models.ManyToManyField(Station, through="Membership",through_fields=("station_name"),on_delete=models.CASCADE, null=True)

class FoodDetails(models.Model) :
    """Class containing the Food Details"""
    food_id = models.IntegerField(unique=True,auto_created=True)
    name = models.CharField(max_length=70, blank=False, default='')
    category = models.CharField(max_length=70, blank=False, default='')
    price= models.FloatField(blank=False)

class RestaurantDetails(models.Model):
    """Class containing the Restaurant Details"""
    restaurant_id = models.IntegerField(unique=True,auto_created=True)
    name = models.CharField(max_length=70, blank=False, default='')
    station=models.ForeignKey(Station, through="Membership",through_fields=("station_name"),on_delete=models.CASCADE, null=True)