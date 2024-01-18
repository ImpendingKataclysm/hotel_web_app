from django.contrib import admin
from . import models


@admin.register(models.Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('id', 'hotel_name', 'city', 'country')


@admin.register(models.Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('id', 'location', 'start_date', 'end_date')
