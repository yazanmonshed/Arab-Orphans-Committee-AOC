from django.db import models

# Create your models here.



class Faq(models.Model):
    quaction = models.CharField(max_length=500)
    answer = models.CharField(max_length=500) 


    def __str__(self):
        return self.quaction

        