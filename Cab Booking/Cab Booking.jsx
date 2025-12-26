function CabBooking() {
  const bookCab = () => {
    const passengerName = prompt("Enter passenger name:");
    if (!passengerName) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Booking cancelled: Pickup location is required.");
      return;
    }

    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Booking cancelled: Drop location is required.");
      return;
    }

    const confirmRide = confirm(
      `Confirm Cab Booking?\n\nPassenger: ${passengerName}\nPickup: ${pickup}\nDrop: ${drop}`
    );

    if (confirmRide) {
      alert(
        `✅ Cab Booked Successfully!\n\nPassenger: ${passengerName}\nPickup: ${pickup}\nDrop: ${drop}`
      );
    } else {
      alert("❌ Cab booking cancelled by user.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚖 Online Cab Booking</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}

export default CabBooking;
