from django.shortcuts import redirect, render

from users.models import User

def register(request):
    return render(request, "users/register.html")

def login(request):
    return render(request, "users/login.html")

def admin_dashboard(request):
    return render(request, "users/admin_dashboard.html")

def home(request):
    return render(request, "home/home.html")

def store(request):
    if request.method == "POST":
        User.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            password=request.POST.get("password"),  # Abhi plain text, baad me hash karenge
            role=request.POST.get("role", "user"),
        )

        return redirect("login")  

    return redirect("register")