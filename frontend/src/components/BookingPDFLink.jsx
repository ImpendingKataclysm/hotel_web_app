import {PDFDownloadLink} from "@react-pdf/renderer";
import BookingPDF from "./BookingPDF.jsx";

const fileName = "hotel_booking_details.pdf";

// Link for downloading the PDF containing the hotel booking information
const BookingPDFLink = ({bookingDetails, hotel}) => (
    <PDFDownloadLink
        document={<BookingPDF bookingDetails={bookingDetails} hotel={hotel} /> }
        fileName={fileName}
    >
        {({blob, url, loading, error}) => (
            loading ? 'Loading document...' : 'Download PDF'
        )}
    </PDFDownloadLink>
);

export default BookingPDFLink;