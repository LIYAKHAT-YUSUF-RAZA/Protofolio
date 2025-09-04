from django.db import models

# Create your models here.

class ProtofolioData(models.Model):
    hero_img = models.ImageField(upload_to='images/')
    aboutme_img = models.ImageField(upload_to='images/')

class ProjectsData(models.Model):
    # My Projects Section
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=100)
    project_tech = models.CharField(max_length=200)
    project_desc = models.TextField()
    project_img = models.ImageField(upload_to='images/')
    project_github = models.URLField(max_length=200)
    project_demo = models.URLField(max_length=200, blank=True)
    project_features = models.JSONField(default=list, blank=True)  # ✅ ARRAY of features

    def __str__(self):
        return self.project_name

