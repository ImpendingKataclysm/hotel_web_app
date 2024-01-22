import {Component} from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import BookingPDFLink from "./BookingPDFLink.jsx";

// Display confirmation message after successful booking
class ConfirmModal extends Component {
    render() {
        const {toggle, bookingDetails, hotel} = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Booking Confirmed
                </ModalHeader>
                <ModalBody>
                    <ul className={"list-group my-3"}>
                        <li className={"list-group-item"}>
                            Confirmation Number: {bookingDetails.id}
                        </li>
                        <li className={"list-group-item"}>
                            Customer Name: {bookingDetails.customer_name}
                        </li>
                        <li className={"list-group-item"}>
                            Customer Email: {bookingDetails.customer_email}
                        </li>
                        <li className={"list-group-item"}>
                            Hotel: {hotel.hotel_name} ({hotel.city}, {hotel.country})
                        </li>
                        {
                            hotel.has_spa ?
                                <li className={"list-group-item"}>
                                    {
                                        bookingDetails.booked_spa ?
                                            "Spa package booked" :
                                            "No spa package booked"
                                    }
                                </li> : null
                        }
                        <li className={"list-group-item"}>
                            Arrival Date: {bookingDetails.start_date}
                        </li>
                        <li className={"list-group-item"}>
                            Departure Date: {bookingDetails.end_date}
                        </li>
                    </ul>
                    <p className={"mx-3"}>Thanks for booking with us!</p>
                </ModalBody>
                <ModalFooter>
                    <BookingPDFLink
                        bookingDetails={bookingDetails}
                        hotel={hotel}
                    />
                </ModalFooter>
            </Modal>
        );
    }
}

export default ConfirmModal;