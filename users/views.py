from django.shortcuts import redirect, render
from django.contrib.auth.hashers import check_password
from django.contrib import messages
from django.contrib.auth.hashers import make_password


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
            password=make_password(request.POST.get("password")),            
            role=request.POST.get("role", "user"),
        )

        return redirect("login")  

    return redirect("register")

def user_login(request):
    if request.method == "POST":

        email = request.POST.get("email")
        password = request.POST.get("password")

        user = User.objects.filter(email=email).first()

        if user and check_password(password, user.password):
            request.session["user_id"] = user.id
            request.session["user_name"] = user.name
            request.session["user_role"] = user.role

            return redirect("home")

        messages.error(request, "Invalid email or password")
        return redirect("login")

    return redirect("login")