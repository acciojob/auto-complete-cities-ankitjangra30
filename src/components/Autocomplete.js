import React, { useState, useEffect, useRef } from 'react';

function Autocomplete({ suggestions }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, suggestions]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const handleBlur = (e) => {
      // delay suggestion hiding, so clicks can register
      setTimeout(()=>setShowSuggestions(false), 200)
  }

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
        onBlur={handleBlur}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            border: '1px solid #ccc',
            width: '100%',
            backgroundColor: 'white',
            zIndex: 10,
          }}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              style={{ padding: '8px', cursor: 'pointer' }}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={(e)=>e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e)=>e.target.style.backgroundColor = 'white'}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;