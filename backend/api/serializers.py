from rest_framework import serializers
from . import models


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hotel
        fields = (
            'id',
            'hotel_name',
            'city',
            'country',
            'has_spa',
        )


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Booking
        fields = (
            'id',
            'customer_name',
            'customer_email',
            'location',
            'booked_spa',
            'timestamp',
            'start_date',
            'end_date',
        )
