from django.db import models


class User(models.Model):
    ROLE_CHOICES = [
        ("user", "User"),
        ("admin", "Admin"),
        ("doctor", "Doctor"),
        ("patient", "Patient"),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="patient"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.name