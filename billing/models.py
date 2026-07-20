from django.db import models
from doctors.models import Doctor
from patients.models import Patient


class Billing(models.Model):
    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.CASCADE
    )

    patient = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE
    )

    no_of_medicines = models.IntegerField()

    medicines_names = models.JSONField(default=list)

    doctor_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=10.00
    )

    medicine_cost = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    total_bill = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "billing"

    def __str__(self):
        return f"Bill #{self.id}"