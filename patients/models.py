from django.db import models


class Patient(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "patients"

    def __str__(self):
        return self.name