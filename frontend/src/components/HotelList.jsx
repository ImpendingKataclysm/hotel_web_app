import {Component} from "react";
import {Button} from "reactstrap";

// List of available hotels
class HotelList extends Component {
    render() {
        const {hotels, start} = this.props;

        return (
            <ul className={"list-group"}>
                {hotels.map((hotel) => (
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
        );
    }
}

export default HotelList
