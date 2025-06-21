import React from 'react';
import './Payment.css';

const PaymentModal = ({ isOpen, onClose, selectedPackage }) => {
  if (!isOpen || !selectedPackage) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Book: {selectedPackage.name}</h2>
        <form className="payment-form">
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Card Number" required />
          <button type="submit">Confirm Booking</button>
        </form>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default PaymentModal;
