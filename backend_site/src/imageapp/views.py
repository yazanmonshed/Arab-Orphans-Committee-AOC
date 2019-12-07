from django.shortcuts import render
from .serializers import ImageApi
from .models import Image
from rest_framework import viewsets
# Create your views here.



class ImageViewAPI(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class  =  ImageApi
