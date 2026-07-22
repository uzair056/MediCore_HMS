from django.shortcuts import redirect, render
from django.contrib.auth.hashers import check_password
from django.contrib import messages
from django.contrib.auth.hashers import make_password
import requests

from users.models import User

def register(request):
    return render(request, "users/register.html")

def login(request):
    return render(request, "users/login.html")

def admin_dashboard(request):
    return render(request, "users/admin_dashboard.html")


def home(request):

    weather = weather_api("Islamabad")

    context = {
        "weather": weather
    }

    return render(request, "home/home.html", context)

def store(request):
    if request.method == "POST":
        User.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            password=make_password(request.POST.get("password")),            
            role=request.POST.get("role", "patient"),
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

            return redirect("dashboard")

        messages.error(request, "Invalid email or password")
        return redirect("login")

    return redirect("login")

def weather_api(city="Islamabad"):
    try:
        # Geocoding API
        geo_url = (
            f"https://geocoding-api.open-meteo.com/v1/search"
            f"?name={city}&count=1&language=en&format=json"
        )

        geo_data = requests.get(geo_url).json()

        if "results" not in geo_data:
            return None

        location = geo_data["results"][0]

        latitude = location["latitude"]
        longitude = location["longitude"]

        # Weather API
        weather_url = (
            "https://api.open-meteo.com/v1/forecast"
            f"?latitude={latitude}"
            f"&longitude={longitude}"
            "&current="
            "temperature_2m,"
            "relative_humidity_2m,"
            "apparent_temperature,"
            "weather_code,"
            "wind_speed_10m,"
            "visibility"
        )

        current = requests.get(weather_url).json()["current"]

        return {
            "city": location["name"],
            "country": location["country"],
            "temperature": round(current["temperature_2m"]),
            "humidity": current["relative_humidity_2m"],
            "feels_like": round(current["apparent_temperature"]),
            "wind": round(current["wind_speed_10m"]),
            "visibility": round(current["visibility"] / 1000),
            "weather_code": current["weather_code"],
        }

    except Exception as e:
        print("Weather API Error:", e)
        return None