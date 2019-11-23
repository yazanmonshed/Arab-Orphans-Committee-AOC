from django.shortcuts import render
from  rest_framework import viewsets
from .models import FormTerm
from .serializers import FromTermApi
# Create your views here.
 


class FromView(viewsets.ModelViewSet):
    queryset = FormTerm.objects.all()
    serializer_class = FromTermApi

