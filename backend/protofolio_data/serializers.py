from rest_framework import serializers
from .models import ProtofolioData, ProjectsData

class ProtofolioDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProtofolioData
        fields = '__all__'


class ProjectsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectsData
        fields = '__all__'
