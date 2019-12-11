from rest_framework import serializers
from .models import OurStudents

class OurStudentsAPI(serializers.ModelSerializer):
    class Meta:
        model = OurStudents
        fields = '__all__'
        