""" from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ProtofolioData, ProjectsData
from .serializers import ProtofolioDataSerializer, ProjectsDataSerializer

@api_view(['GET'])
def get_projects(request):
    projects1 = ProtofolioData.objects.all()
    ProjectsData1 = ProjectsData.objects.all()
    serializer = ProtofolioDataSerializer(projects1, many=True, context={'request': request})
    serializer = ProjectsDataSerializer(ProjectsData1, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['POST'])
def add_project(request):
    serializer1 = ProtofolioDataSerializer(data=request.data, context={'request': request})
    serializer2 = ProjectsDataSerializer(data=request.data, context={'request': request})
    if serializer1.is_valid():
        serializer1.save()
        return Response(serializer1.data)
    
    if serializer2.is_valid():
        serializer2.save()
        return Response(serializer2.data)
    return Response(serializer1.errors,serializer2.errors, status=400) """



from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ProtofolioData, ProjectsData
from .serializers import ProtofolioDataSerializer, ProjectsDataSerializer

@api_view(['GET'])
def get_projects(request):
    protofolio_data = ProtofolioData.objects.all()
    projects_data = ProjectsData.objects.all()

    protofolio_serializer = ProtofolioDataSerializer(protofolio_data, many=True, context={'request': request})
    projects_serializer = ProjectsDataSerializer(projects_data, many=True, context={'request': request})

    return Response({
        "protofolio": protofolio_serializer.data,
        "projects": projects_serializer.data
    })


@api_view(['POST'])
def add_project(request):
    # Check which model the data belongs to (you decide based on request)
    if "some_field_of_protofolio" in request.data:  # adjust condition as per your model fields
        serializer = ProtofolioDataSerializer(data=request.data, context={'request': request})
    else:
        serializer = ProjectsDataSerializer(data=request.data, context={'request': request})

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)
