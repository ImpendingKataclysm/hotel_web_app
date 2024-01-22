import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import HotelList from "./components/HotelList.jsx";
import BookingModal from "./components/BookingModal.jsx";
import ConfirmModal from "./components/ConfirmModal.jsx";
import {booking_api} from "./api_data.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booking: false,
            confirmed: false,
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

    // Toggle the booking form display
    toggleBookingModal = () => this.setState({booking: !this.state.booking});

    // Toggle the booking confirmation message display
    // toggleConfirmModal = () => this.setState({confirmed: !this.state.confirmed});

    // Open a booking form modal for the selected hotel
    startBooking = (hotel) => {
        this.setState({
            activeHotel: hotel,
            booking: true,
        });
    };

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
        return (
            <section>
                <h1>Book Your Hotel Today</h1>
                <h2>Available Hotels</h2>
                <HotelList start={this.startBooking}/>
                {this.state.booking ?
                    <BookingModal
                        toggle={this.toggleBookingModal}
                        hotel={this.state.activeHotel}
                        save={this.completeBooking}
                    /> :
                    null}
                {this.state.confirmed ?
                    <ConfirmModal
                        toggle={() => (this.setState({confirmed: !this.state.confirmed}))}
                        bookingDetails={this.state.bookingDetails}
                        hotel={this.state.activeHotel}
                    />
                    : null}
            </section>
        )
    }
}

export default App
