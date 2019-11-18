from django.shortcuts import render
from .serializers import SerializerFaq
from .models import FAQ
from rest_framework import viewsets
# Create your views here.




class ViewApiFaq(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = SerializerFaq


    