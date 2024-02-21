// CalculateTotalAmountPage.js
import React, { useState } from 'react';
import { useAppState } from './AppState';

const Payment = () => {
  const { state } = useAppState();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const calculateTotalAmount = () => {
    const basePrice = 5000;
    const gstPercentage = 18;
    const discount = 200;

    const additionalCostPerPerson = state.numOfPeople * 150;
    const gstAmount = (basePrice * gstPercentage) / 100;

    const totalAmount = basePrice + additionalCostPerPerson + gstAmount - discount;

    return {
      basePrice,
      additionalCostPerPerson,
      gstAmount,
      discount,
      totalAmount,
    };
  };

  const handleConfirmPayment = () => {
    setBookingConfirmed(true);
    alert('Booking Successful!');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#F8B72B',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    box: {
      padding: '40px',
      borderRadius: '12px',
      border: '2px solid #333',
      backgroundColor: '#fff',
      width: '50%',
    },
    heading: {
      fontSize: '32px',
      marginBottom: '20px',
      color: '#333',
    },
    paragraph: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    button: {
      padding: '15px',
      fontSize: '18px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    breakdownContainer: {
      marginTop: '20px',
    },
    breakdownHeading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Thank You for Booking a Chef From -MealMagic!</h1>
        <h2 style={styles.heading}>Total Amount Calculation</h2>
        <p style={styles.paragraph}>Total Amount: {calculateTotalAmount().totalAmount}</p>

        <div style={styles.breakdownContainer}>
          <h3 style={styles.breakdownHeading}>Calculation Breakdown:</h3>
          <p style={styles.paragraph}>Base Price: {calculateTotalAmount().basePrice}</p>
          <p style={styles.paragraph}>
            Additional Cost per Person: {calculateTotalAmount().additionalCostPerPerson}
          </p>
          <p style={styles.paragraph}>GST Amount: {calculateTotalAmount().gstAmount}</p>
          <p style={styles.paragraph}>Discount: {calculateTotalAmount().discount}</p>
        </div>

        <button style={styles.button} onClick={handleConfirmPayment}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
