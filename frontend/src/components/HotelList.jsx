import {Component} from "react";
import axios from "axios";

const api_root = "http://localhost:8000/api/";
const hotel_api = `${api_root}hotels/`;
const booking_api = `${api_root}bookings/`;

class HotelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
        }
    }

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
        return (
            <ul className={"list-group"}>
                {this.state.hotels.map((hotel) => (
                    <li key={hotel.id}
                        className={"list-group-item d-flex justify-content-between align-items-center"}
                    >
                        <strong>{hotel.hotel_name}</strong>
                        <span>({hotel.city}, {hotel.country})</span>
                    </li>
                ))}
            </ul>
        )
    }
}

export default HotelList
