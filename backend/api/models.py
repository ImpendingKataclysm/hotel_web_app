from django.db import models

NAME_MAX_LEN = 100

class Hotel(models.Model):
    """
    Hotel available for booking. DB records each hotel's name, city and
    country, as well as whether or not the hotel has a spa.
    """
    hotel_name = models.CharField(max_length=NAME_MAX_LEN)
    city = models.CharField(max_length=NAME_MAX_LEN)
    country = models.CharField(max_length=NAME_MAX_LEN)
    has_spa = models.BooleanField(default=False)

    def __str__(self):
        return self.hotel_name


class Booking(models.Model):
    """
    Completed hotel booking. DB records the customer's name and email address,
    the hotel booked, the timestamp of completion, the booking start date and
    the booking end date.
    """
    customer_name = models.CharField(max_length=NAME_MAX_LEN)
    customer_email = models.EmailField()
    location = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    booked_spa = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    start_date = models.DateField()
    end_date = models.DateField()
