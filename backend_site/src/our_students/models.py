from django.db import models

# Create your models here.
 


class OurStudents(models.Model):
    student_name = models.CharField(max_length=100)
    about = models.TextField()

    def __str__(self):
        return self.student_name
         