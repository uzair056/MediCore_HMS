from django.shortcuts import render

def register(request):
    return render(request, "users/register.html")

def login(request):
    return render(request, "users/login.html")

def admin_dashboard(request):
    return render(request, "users/admin_dashboard.html")

def home(request):
    return render(request, "home/home.html")
