import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelList from "./components/HotelList.jsx";
import BookingModal from "./components/BookingModal.jsx";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booking: false,
            activeHotel: {
                id: 0,
                hotel_name: "",
                city: "",
                country: "",
                has_spa: false,
            },
        }
    }

    // Toggle the current booking state to display or remove the booking form modal
    toggleBookingModal = () => this.setState({booking: !this.state.booking});

    // Open a booking form modal for the selected hotel
    startBooking = (hotel) => {
        this.setState({activeHotel: hotel});
        this.toggleBookingModal();
    };

    render() {
        return (
            <section>
                <h1>Book Your Hotel Today</h1>
                <h2>Available Hotels</h2>
                <HotelList onSave={this.startBooking}/>
                {this.state.booking ?
                    <BookingModal
                        toggle={this.toggleBookingModal}
                        hotel={this.state.activeHotel}
                        save={this.startBooking}
                    /> : null
                }
            </section>
        )
    }
}

export default App
