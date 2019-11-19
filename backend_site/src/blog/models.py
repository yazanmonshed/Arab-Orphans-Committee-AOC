from django.db import models
from datetime import datetime
# Create your models here.


class Blog(models.Model):
    image = models.ImageField(upload_to="images/")
    title =  models.CharField(max_length=100)
    context = models.TextField(max_length=1000,default='foo')
    date = models.DateTimeField()   
    def __str__(self):
        return self.title



        
