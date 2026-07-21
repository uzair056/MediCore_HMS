from django.shortcuts import render
from django.shortcuts import redirect


def dashboard(request):
    return render(request, "patients/dashboard.html")


def logout(request):
    if request.method == "POST":
        request.session.flush()
        return redirect("login")

    return redirect("dashboard")