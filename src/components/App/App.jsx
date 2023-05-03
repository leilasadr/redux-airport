import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const [airlineInput, setAirlineInput] = useState('');
  const airlines = useSelector((store) => store.airlines);
  // console.log(airlines)
  const dispatch = useDispatch();
  const addAirline = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_AIRLINE',
      payload: airlineInput
    })

    setAirlineInput('')
  }
  
  
  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
      <input placeholder='Airline Name'
      value={airlineInput}
      onChange={(event) => setAirlineInput(event.target.value)} />
      <button>Add Airline</button>
      </form>
  <table>
    <thead>
      <tr>
        <th>Airline Name</th>
      </tr>
    </thead>
    <tbody>
    {
      airlines.map((airline) => {
        return (
          <tr key={airline}>
            <td>{airline}</td>
          </tr>
        )
      })
    }
    </tbody>
  </table>
  
  
  
  {/* <table>
    <tbody>
      <tr>Airline Names</tr>
      <tr>United</tr>
      <tr>Delta</tr>
      <tr>American Airlines</tr>
    </tbody>
  </table> */}
      
    </div>
  );
}

export default App;
