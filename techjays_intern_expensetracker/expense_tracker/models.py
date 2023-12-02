from django.db import models
from djongo import models
from django.core.validators import MinValueValidator



class Expense(models.Model):
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2,validators=[MinValueValidator(0)])
    date = models.DateField()
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.description
