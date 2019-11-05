from django.db import models

# Create your models here.


class Blog(models.Model):
    image = models.ImageField(upload_to="post/")
    title =  models.CharField(max_length=100)
    # context = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title



        
