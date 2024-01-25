import {Component} from "react";
import {DatePicker} from "reactstrap-date-picker";
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input, Button,
} from "reactstrap";

/*
Display the booking form for a selected hotel, ensuring that the user may only
select valid booking dates (i.e. they cannot select a start date earlier than the
current date, and they cannot select an end date earlier than the start date)
*/
class BookingModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    // Set the booking start date and end date to the user's selected start date
    handleStartDateChange = (date) => (
        this.setState({
            startDate: date,
            endDate: date,
        })
    );

    // Set the booking end date to the user's selected end date
    handleEndDateChange = (date) => (
        this.setState({
            endDate: date,
        })
    );

    // Get the date (yyyy-mm-dd) from the datetime ISO string
    getDateFromISO = (dateString) => dateString.split('T')[0];

    render() {
        const {toggle, hotel, save} = this.props;
        const {startDate, endDate} = this.state;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {hotel.hotel_name}
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        save({
                            customer_name: e.target.customer_name.value,
                            customer_email: e.target.customer_email.value,
                            location: hotel.id,
                            booked_spa: e.target.book_spa ? e.target.book_spa.checked : false,
                            start_date: this.getDateFromISO(e.target.start_date.value),
                            end_date: this.getDateFromISO(e.target.end_date.value),
                        });
                    }}>
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
                            <DatePicker
                                type={"date"}
                                id={"start_date"}
                                name={"start_date"}
                                required={true}
                                value={startDate.toString()}
                                minDate={new Date().toString()}
                                onChange={(startDate) => this.handleStartDateChange(startDate)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for={"end_date"}>Date Departing:</Label>
                            <DatePicker
                                type={"date"}
                                id={"end_date"}
                                name={"end_date"}
                                required={true}
                                value={endDate.toString()}
                                minDate={startDate.toString()}
                                onChange={(endDate) => this.handleEndDateChange(endDate)}
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