from django.shortcuts import render
from rest_framework import viewsets
from . import models, serializers


class HotelView(viewsets.ModelViewSet):
    """
    Display the serialized hotel data in JSON format.
    """
    serializer_class = serializers.HotelSerializer
    queryset = models.Hotel.objects.all()


class BookingView(viewsets.ModelViewSet):
    """
    Display the serialized booking data in JSON format.
    """
    serializer_class = serializers.BookingSerializer
    queryset = models.Booking.objects.all()
