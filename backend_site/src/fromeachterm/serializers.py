from rest_framework import serializers
from .models import FormTerm



class FromTermApi(serializers.ModelSerializer):
    class Meta:
        model = FormTerm
        fields = '__all__'
