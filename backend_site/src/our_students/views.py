from django.shortcuts import render
from rest_framework import viewsets
from .models import OurStudents
from .serializers import OurStudentsAPI
# Create your views here.



class OurStudentsAPIView(viewsets.ModelViewSet):
    queryset = OurStudents.objects.all()
    serializer_class = OurStudentsAPI

