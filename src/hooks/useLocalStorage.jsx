// useLocalStorage.js
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Obtener el valor actual del almacenamiento local o usar el valor inicial
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  // Estado para mantener el valor actual
  const [value, setValue] = useState(storedValue);

  // Función para actualizar el valor y almacenarlo en el almacenamiento local
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
