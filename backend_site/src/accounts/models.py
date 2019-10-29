from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class Frequent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    address = models.CharField(max_length=200)
    salary = models.DecimalField(max_digits=4, decimal_places=2)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    orphan = models.BooleanField(default=True)
    reg_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.name


class SingleTime(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    address = models.CharField(max_length=200)
    salary = models.DecimalField(max_digits=4, decimal_places=2)
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_orphan = models.BooleanField(default=True)
    reg_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.name