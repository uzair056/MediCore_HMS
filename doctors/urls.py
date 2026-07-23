from django.urls import path
from . import views

urlpatterns = [
    path("dashboard/", views.dashboard, name="doctor_dashboard"),
    path("login/", views.doctor_login, name="doctor_login"),
    path("api/", views.doctor_list, name="doctor_list"),
]