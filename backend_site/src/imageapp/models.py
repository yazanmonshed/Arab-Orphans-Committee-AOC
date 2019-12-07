from django.db import models

# Create your models here.


class Image(models.Model):
    images = models.ImageField(upload_to="gallery/")
