import useLocalStorage from "./useLocalStorage";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const RENTAL_KEY = 'rental';

const useRentalItems = () => {
  const [rentalItems, setRentalItems] = useLocalStorage(RENTAL_KEY, []);

  const addToRental = (newItem) => {
    const existingItemIndex = rentalItems.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedRental = [...rentalItems];
      updatedRental[existingItemIndex].days += 1;
      setRentalItems(updatedRental);
    } else {
      setRentalItems([...rentalItems, newItem]);
    }
  };

  const removeFromRental = (itemId) => {
    const updatedRental = rentalItems.filter((item) => item.id !== itemId);
    setRentalItems(updatedRental);
  };

  const adjustRentalDays = (newItem) => {
    const existingItemIndex = rentalItems.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedRental = [...rentalItems];
      updatedRental[existingItemIndex].days -= 1;

      if (updatedRental[existingItemIndex].days < 1) {
        Swal.fire({
          icon: 'error',
          title: 'Days not allowed',
          text: 'Days cannot be less than 1.',
        });

        updatedRental[existingItemIndex].days = 1;
      }

      setRentalItems(updatedRental);
    } else {
      setRentalItems([...rentalItems, newItem]);
    }
  };

  return { rentalItems, addToRental, removeFromRental, adjustRentalDays };
};

export default useRentalItems;
