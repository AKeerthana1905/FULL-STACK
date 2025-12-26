function FlightBooking() {
  const bookTicket = () => {
    // Prompt for user details
    const name = prompt("Enter passenger name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const destination = prompt("Enter destination city:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    // Confirm booking
    const confirmBooking = confirm(
      `Confirm booking?\n\nPassenger: ${name}\nDestination: ${destination}`
    );

    if (confirmBooking) {
      alert(
        `✅ Booking Successful!\n\nPassenger: ${name}\nDestination: ${destination}`
      );
    } else {
      alert("❌ Booking cancelled by user.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✈️ Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Flight</button>
    </div>
  );
}

export default FlightBooking;
