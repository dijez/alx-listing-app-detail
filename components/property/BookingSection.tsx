const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div >
      <h3 >${price}/night</h3>
      <div >
        <label>Check-in</label>
        <input type="date"  />
      </div>
      <div >
        <label>Check-out</label>
        <input type="date"  />
      </div>

      {/* Total payment */}
      <div >
        <p>Total payment: <strong>${price * 7}</strong></p>
      </div>

      {/* Reserve button */}
      <button >Reserve now</button>
    </div>
  );
};

export default BookingSection;
