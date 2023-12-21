import useLocalStorage from "./useLocalStorage";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const CART_KEY = 'cart';

const useCartItems = () => {
  const [cartItems, setCartItems] = useLocalStorage(CART_KEY, []);

  const addToCart = (newItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const adjustQuantity = (newItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity -= 1;

      // Verificar si la cantidad es menor que 0
      if (updatedCart[existingItemIndex].quantity < 1) {
        // Mostrar alerta con SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Quantity not allowed',
          text: 'Quantity cannot be less than 1.',
        });

        // Restaurar la cantidad a 0
        updatedCart[existingItemIndex].quantity = 1;
      }

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  return { cartItems, addToCart, removeFromCart, adjustQuantity };
};

export default useCartItems;
