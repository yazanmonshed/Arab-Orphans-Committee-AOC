from django.db import models

# Create your models here.


class FAQ(models.Model):
    questions = models.CharField(max_length=200)
    answers = models.CharField(max_length=200)

    def __str__(self):
        return self.questions

        