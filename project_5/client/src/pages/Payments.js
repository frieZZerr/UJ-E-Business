import React, { useState } from 'react';
import axios from 'axios';

const Payments = () => {
  const [paymentData, setPaymentData] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    const parsedValue = parseInt(value);
    setPaymentData({ ...paymentData, [name]: parsedValue });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/payments', JSON.stringify(paymentData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Payment successful:', response.data);
      alert('Payment made successfully!');
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className="content">
      <h2>Payments</h2>
      <form className="form">
        <label>
          Product ID:
          <input type="text" name="productId" value={paymentData.productId} onChange={handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" value={paymentData.amount} onChange={handleChange} />
        </label>
      </form>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Card Number:
          <input type="text" name="cardNumber"/>
        </label>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate"/>
        </label>
        <label>
          CVV:
          <input type="text" name="cvv"/>
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payments;
