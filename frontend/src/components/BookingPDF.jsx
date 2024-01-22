import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
} from "@react-pdf/renderer";

// PDF Stylesheet
const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
    },
    text: {
        marginBottom: 5,
        fontSize: 14,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

// PDF that displays the hotel booking information
const BookingPDF = ({bookingDetails, hotel}) => (
    <Document>
        <Page>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Booking Details
                </Text>
                <Text style={styles.text}>
                    Confirmation Number: {bookingDetails.id}
                </Text>
                <Text style={styles.text}>
                    Customer Name: {bookingDetails.customer_name}
                </Text>
                <Text style={styles.text}>
                    Customer Email: {bookingDetails.customer_email}
                </Text>
                <Text style={styles.text}>
                    Hotel: {hotel.hotel_name} ({hotel.city}, {hotel.country})
                </Text>
                {hotel.has_spa ?
                    <Text style={styles.text}>
                        {bookingDetails.booked_spa ?
                            "Spa package booked."
                            : "No spa package booked."}
                    </Text>
                    : null}
                <Text style={styles.text}>
                    Arrival Date: {bookingDetails.start_date}
                </Text>
                <Text style={styles.text}>
                    Departure Date: {bookingDetails.end_date}
                </Text>
            </View>
        </Page>
    </Document>
);

export default BookingPDF;