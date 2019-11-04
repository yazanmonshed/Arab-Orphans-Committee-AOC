from django.shortcuts import render
from .models import Blog
from .serializers import BlogApi
from rest_framework import viewsets
# Create your views here.


# View Blog data 


# def blog_data(request):
#     date = Blog.objects.all()



# API Here ..
class Data_blog_api(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogApi

