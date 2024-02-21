// AppState.js
import React, { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext();

const initialState = {
  numOfPeople: 0,
  startDate: 0,
  mealType: 0,
  grocerySelect: false,
  groceryBudget: 0,
};

const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUM_OF_PEOPLE':
      return { ...state, numOfPeople: action.payload };
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_MEAL_TYPE':
      return { ...state, mealType: action.payload };
    case 'SET_GROCERY_SELECT':
      return { ...state, grocerySelect: action.payload };
    case 'SET_GROCERY_BUDGET':
      return { ...state, groceryBudget: action.payload };
    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
