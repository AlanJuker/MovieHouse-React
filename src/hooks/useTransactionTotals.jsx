// useTransactionTotals.js
import { useState, useEffect } from 'react';

const useTransactionTotals = () => {
    const { cartItems, addToCart, removeFromCart } = useCartItems(); // Asegúrate de llamar al hook correctamente
    const [rentalItems, setRentalItems] = useState([]);

  useEffect(() => {
    const rentals = JSON.parse(sessionStorage.getItem('rental')) || [];
    setRentalItems(rentals);
  }, []);

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalBeforeTax = calculateTotal([...cartItems, ...rentalItems]);
  const totalAfterTax = totalBeforeTax * 1.1; // Suponiendo un impuesto del 10%

  return { totalBeforeTax, totalAfterTax, cartItems, rentalItems };
};

export default useTransactionTotals;
