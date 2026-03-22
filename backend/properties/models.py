from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Property(models.Model):
    owner = models.ForeignKey(
        User,
        related_name='properties',
        on_delete=models.CASCADE, null = True, blank = True
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class PropertyImage(models.Model):
    property = models.ForeignKey(
        Property,
        related_name='images',
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to='properties/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.property.title}"


