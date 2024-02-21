import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useAppState } from './AppState'; // Import the useAppState hook
import FaqComponent from './FaqComponents';
import { Container } from 'react-bootstrap';

const BookAChef = () => {
  const [numOfPeople, setNumOfPeople] = useState('');
  const [startDate, setStartDate] = useState('');
  const [mealType, setMealType] = useState('one-time');
  const [grocerySelected, setGrocerySelected] = useState(false);
  const [groceryBudget, setGroceryBudget] = useState('');
  const navigate = useNavigate(); // Initialize useHistory
  const { dispatch } = useAppState(); // Use the useAppState hook

  const handleMealTypeChange = (e) => {
    setMealType(e.target.value);
  };

  const handleGroceryToggle = () => {
    setGrocerySelected(!grocerySelected);
  };

  const handleNext = () => {
    dispatch({ type: 'SET_NUM_OF_PEOPLE', payload: parseInt(numOfPeople, 10) });

    navigate('/payment');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      marginBottom:'20px'
    },
    formContainer: {
      maxWidth: '400px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fff',
    },
    loginContainer: {
      marginBottom: '20px',
    },
    signInText: {
      marginBottom: '20px',
      fontSize: '18px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      width: '48%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '10px',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
    },
    checkbox: {
      marginRight: '8px',
    },
    submitButton: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    
  };
  const faqStyles = {
    maxWidth: '100%',
    margin: 'auto',
    padding: '20px',
    border: '2px solid #3498db',
    borderRadius: '8px',
    textAlign: 'left-align',
    backgroundColor: '#ecf0f1',
  };

  return (
    
    <div style={{ background: '#F8B72B' }}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <form style={styles.form} onSubmit={handleNext}>
            <label style={styles.label}>
              Number of People:
              <input
                style={styles.input}
                type="text"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(e.target.value)}
              />
            </label>

            <label style={styles.label}>
              Start Date:
              <input
                style={styles.input}
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>

            <label style={styles.label}>
              Meal Type:
              <select style={styles.input} value={mealType} onChange={handleMealTypeChange}>
                <option value="one-time">One Time</option>
                <option value="two-time">Two Time</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </label>

            <label style={styles.label}>
              <input
                style={styles.checkbox}
                type="checkbox"
                checked={grocerySelected}
                onChange={handleGroceryToggle}
              />
              Include Grocery
            </label>

            {grocerySelected && (
              <label style={styles.label}>
                Grocery Budget:
                <input
                  style={styles.input}
                  type="text"
                  value={groceryBudget}
                  onChange={(e) => setGroceryBudget(e.target.value)}
                />
              </label>
            )}

            <Button variant="dark" style={styles.submitButton} type="submit">
              Next
            </Button>
            <a href='/termsandcondition'>TermsAndCondition</a>
          </form>


    
        </div>
      </div>
      <Container>
        <div style={faqStyles}>
          <FaqComponent></FaqComponent>
          </div>
          </Container>
    </div>
  );
};

export default BookAChef;
