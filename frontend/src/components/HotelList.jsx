import {Component} from "react";
import axios from "axios";
import {Button} from "reactstrap";
import {hotel_api} from "../api_data.jsx";

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
        const {start} = this.props;

        return (
            <ul className={"list-group"}>
                {this.state.hotels.map((hotel) => (
                    <li key={hotel.id}
                        className={"list-group-item d-flex justify-content-between align-items-center"}
                    >
                        <strong>{hotel.hotel_name}</strong>
                        <span>({hotel.city}, {hotel.country})</span>
                        <Button onClick={() => (start(hotel))}>
                            Book Now
                        </Button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default HotelList
