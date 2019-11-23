from django.db import models

# Create your models here.



class FormTerm(models.Model):

    upload1 = models.FileField(upload_to='uploads/')
    upload2 = models.FileField(upload_to='uploads/')
    upload3 = models.FileField(upload_to='uploads/')
    upload4 = models.IntegerField() 
    
