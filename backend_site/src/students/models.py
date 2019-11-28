from django.db import models
from django.contrib.auth.models import User 
# Create your models here.



class Students(models.Model):
    name = models.IntegerField()
    email = models.EmailField(max_length=100, unique=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
