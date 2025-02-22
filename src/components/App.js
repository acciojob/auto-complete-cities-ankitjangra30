
import React from "react";
import './../styles/App.css';

const App = () => {
  const citySuggestions = [
    'New York',
    'New Delhi',
    'New Orleans',
    'London',
    'Los Angeles',
    'Paris',
    'Tokyo',
    'Berlin',
    'Madrid',
    'Rome',
    'Mumbai'
  ];

  return (
    <div style={{ padding: '20px' }}>
        {/* Do not remove the main div */}
        <label>Enter City: </label>
        <Autocomplete suggestions={citySuggestions} />
    </div>
  )
}

export default App
