from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.get_projects, name='get-projects'),
    path('projects/add/', views.add_project, name='add-project'),
]
