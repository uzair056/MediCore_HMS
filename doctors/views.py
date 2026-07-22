from django.shortcuts import render
from django.shortcuts import render, redirect
from .models import Doctor



def dashboard(request):
    return render(request, "doctors/dashboard.html")
def doctor_login(request):
    return render(request, "doctors/doctor_login.html")


def doctor_login(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            doctor = Doctor.objects.get(email=email, password=password)

            # Session create
            request.session["doctor_id"] = doctor.id
            request.session["doctor_name"] = doctor.name
            request.session["doctor_email"] = doctor.email

            return redirect("doctor_dashboard")

        except Doctor.DoesNotExist:
            return render(request, "doctors/doctor_login.html", {
                "error": "Invalid Email or Password"
            })

    return render(request, "doctors/doctor_login.html")