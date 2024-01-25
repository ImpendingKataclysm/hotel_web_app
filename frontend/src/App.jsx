import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CitySelect from "./components/CitySelect.jsx";
import HotelList from "./components/HotelList.jsx";
import BookingModal from "./components/BookingModal.jsx";
import ConfirmModal from "./components/ConfirmModal.jsx";
import {booking_api, hotel_api} from "./api_data.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: [],
            booking: false,
            confirmed: false,
            citySelected: false,
            city: "",
            activeHotel: {
                id: 0,
                hotel_name: "",
                city: "",
                country: "",
                has_spa: false,
            },
            bookingDetails: {
                id: 0,
                customer_name: "",
                email: "",
                location: null,
                booked_spa: false,
                start_date: "",
                end_date: "",
            },
        };
    }

    // Request hotel data from the API and assign it to the current state
    refreshList  = () => {
        axios.get(hotel_api).then((res) => (
            this.setState({hotels: res.data})
        )).catch((err) => (
            console.log(err)
        ));
    };

    componentDidMount() {
        this.refreshList();
        this.getCities();
    }

    // Get a list of all cities with available hotels
    getCities = () => {
        const cities = [];
        this.state.hotels.map((hotel) => {
            if (!cities.includes(hotel.city)) cities.push(hotel.city);
        });
        return cities;
    }

    // Show available hotels for a selected city
    getHotels = (city) => {
        const availableHotels = [];

        this.state.hotels.map((hotel) => {
            if (hotel.city === city) availableHotels.push(hotel);
        });

        this.setState({
            citySelected: true,
            city: city,
            hotels: availableHotels,
        });
    };

    // Open a booking form for the selected hotel
    startBooking = (hotel) => (
        this.setState({
            activeHotel: hotel,
            booking: true,
        })
    );

    // Save the booking information and display the confirmation message
    completeBooking = (details) => {
        axios.post(booking_api, details).then((res) => (
            this.setState({
                bookingDetails: res.data,
                confirmed: true,
                booking: false,
            })
        )).catch((err) => console.log(err));
    }

    render() {
        const cities = this.getCities();

        return (
            <section>
                <h1>Book Your Hotel Today</h1>
                {
                    /*
                    If the user has selected a city, display the list of available
                    hotels, otherwise display the city selection form
                    * */
                    this.state.citySelected ?
                        <HotelList
                            hotels={this.state.hotels}
                            start={this.startBooking}
                        /> :
                        <CitySelect cities={cities} select={this.getHotels}/>
                }
                { // Display the booking form if the user has chosen to book a hotel.
                    this.state.booking ?
                        <BookingModal
                            toggle={() => (this.setState({booking: !this.state.booking}))}
                            hotel={this.state.activeHotel}
                            save={this.completeBooking}
                        /> : null
                }
                { // Display the confirmation message if the user has successfully booked a hotel.
                    this.state.confirmed ?
                        <ConfirmModal
                            toggle={() => (this.setState({confirmed: !this.state.confirmed}))}
                            bookingDetails={this.state.bookingDetails}
                            hotel={this.state.activeHotel}
                        /> : null
                }
            </section>
        );
    }
}

export default App
