import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  const [value, setValue] = useState(storedValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
