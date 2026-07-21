from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.register, name="register"),
    path("login/", views.login, name="login"),
    path("admin_dashboard/", views.admin_dashboard, name="dashboard"),
    path("", views.home, name="home"),
    
    ]