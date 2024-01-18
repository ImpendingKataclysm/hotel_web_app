import {Component} from "react";
import axios from "axios";
import {Button} from "reactstrap";

const api_root = "http://localhost:8000/api/";
const hotel_api = `${api_root}hotels/`;
const booking_api = `${api_root}bookings/`;

// Display the list of hotels from the API
class HotelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
        }
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
    }

    render() {
        const {onSave} = this.props;

        return (
            <ul className={"list-group"}>
                {this.state.hotels.map((hotel) => (
                    <li key={hotel.id}
                        className={"list-group-item d-flex justify-content-between align-items-center"}
                    >
                        <strong>{hotel.hotel_name}</strong>
                        <span>({hotel.city}, {hotel.country})</span>
                        <Button onClick={() => (onSave(hotel))}>
                            Book Now
                        </Button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default HotelList
