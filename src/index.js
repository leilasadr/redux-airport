import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlines = (state=['United', 'Delta', 'American Airlines'], action) =>{
if (action.type === 'ADD_AIRLINE') {
  const airlineName = action.payload;

  return [...state, airlineName];
}
  return state;
}

/** TODO: Create store */
const airlineStore = createStore(
  combineReducers({
    airlines
  }),
applyMiddleware(logger)
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Provider store={airlineStore}>
        <App />
       </Provider>
    </React.StrictMode>
);