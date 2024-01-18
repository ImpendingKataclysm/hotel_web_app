import {Component} from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input, Button,
} from "reactstrap";

// Display the booking form for a selected hotel
class BookingModal extends Component {
    render() {
        const {toggle, hotel, save} = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {hotel.hotel_name}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for={"customer_name"}>Name:</Label>
                            <Input
                                type={"text"}
                                id={"customer_name"}
                                name={"customer_name"}
                                placeholder={"Please enter your name"}
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for={"customer_email"}>Email Address:</Label>
                            <Input
                                type={"email"}
                                id={"customer_email"}
                                placeholder={"Please enter your email address"}
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for={"start_date"}>Date Arriving:</Label>
                            <Input
                                type={"date"}
                                id={"start_date"}
                                name={"start_date"}
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for={"end_date"}>Date Departing:</Label>
                            <Input
                                type={"date"}
                                id={"end_date"}
                                name={"end_date"}
                                required={true}
                            />
                        </FormGroup>
                        {hotel.has_spa ?
                            <FormGroup check>
                                <Label check for={"book_spa"}>
                                    Book Spa Package?
                                </Label>
                                <Input
                                    id={"book_spa"}
                                    name={"book_spa"}
                                    type={"checkbox"}
                                />
                            </FormGroup>
                        : null}
                        <FormGroup>
                            <Button type={"submit"}>Complete Booking</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default BookingModal;