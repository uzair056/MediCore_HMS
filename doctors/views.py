from django.shortcuts import render

def dashboard(request):
    return render(request, "doctors/dashboard.html")
def doctor_login(request):
    return render(request, "doctors/doctor_login.html")