from django.urls import path, include
from rest_framework import routers
from . import views

app_name = "api"
router = routers.DefaultRouter()

router.register(r'hotels', views.HotelView, 'hotel')
router.register(r'bookings', views.BookingView, 'booking')

urlpatterns = [
    path('api/', include(router.urls)),
]
