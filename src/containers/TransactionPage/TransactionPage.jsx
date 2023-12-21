import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartItems from '../../hooks/useCartItems';
import useRentalItems from '../../hooks/useRentalItems';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './TransactionPage.css'; // Importa el archivo de estilos

const TransactionPage = () => {
  const { cartItems, addToCart, removeFromCart, adjustQuantity } = useCartItems();
  const { rentalItems, addToRental, removeFromRental, adjustRentalDays } = useRentalItems();
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete "${item.title}" from cart.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item.id);
        Swal.fire('Deleted', `"${item.title}" has been deleted.`, 'success');
      }
    });
  };

  const handleRemoveFromRental = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete "${item.title}" from rentals.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromRental(item.id);
        Swal.fire('Deleted', `"${item.title}" has been deleted.`, 'success');
      }
    });
  };

  const calculateSubtotal = () => {
    const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const rentalSubtotal = rentalItems.reduce((total, item) => total + item.rentPrice * item.days, 0);
    return cartSubtotal + rentalSubtotal;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal * 1.12; // Total con un 12% de impuestos
  };

  return (
    <div>
      {cartItems.length > 0 && (
        <>
          <Typography variant="h3">Purchases</Typography>
          <br />

          <List className="card-list">
            {cartItems.map((item, index) => (
              <Card key={item.id} variant="outlined" className="card" >
                <Typography variant="h5" className="card-title">
                  {item.title}
                </Typography>
                <CardContent className="card-content">
                  {item.poster_path && (
                    <img src={item.poster_path} alt={item.title} className="card-image" />
                  )}
                  <div className="quantity-price-area">
                    <Typography variant="h6">Quantity:</Typography>
                    <IconButton onClick={() => adjustQuantity(item, -1)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6">{item.quantity}</Typography>
                    <IconButton onClick={() => addToCart(item)}>
                      <AddIcon />
                    </IconButton>
                    <div className="price">
                      <Typography variant="h6">
                        ${' '}
                        {(item.price * item.quantity)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                      </Typography>
                    </div>
                  </div>
                  <div className="delete-button">
                    <IconButton color="error" onClick={() => handleRemoveFromCart(item)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </List>
        </>
      )}

      {rentalItems.length > 0 && (
        <>
          <br />
          <br />
          <Typography variant="h3">Rentals</Typography>
          <br />

          <List className="card-list">
            {rentalItems.map((item, index) => (
              <Card key={item.id} variant="outlined" className="card" >
                <Typography variant="h5" className="card-title">
                  {item.title}
                </Typography>
                <CardContent className="card-content">
                  {item.poster_path && (
                    <img src={item.poster_path} alt={item.title} className="card-image" />
                  )}
                  <div className="quantity-price-area">
                    <Typography variant="h6">Days:</Typography>
                    <IconButton onClick={() => adjustRentalDays(item, -1)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6">{item.days}</Typography>
                    <IconButton onClick={() => addToRental(item, 1)}>
                      <AddIcon />
                    </IconButton>
                    <div className="price">
                      <Typography variant="h6">
                        ${' '}
                        {(item.rentPrice * item.days)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                      </Typography>
                    </div>
                  </div>
                  <div className="delete-button">
                    <IconButton color="error" onClick={() => handleRemoveFromRental(item)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </List>
        </>
      )}

      {cartItems.length === 0 && rentalItems.length === 0 && (
        <Typography variant="h3">Make some purchases or rentals first.</Typography>
      )}

      {cartItems.length > 0 || rentalItems.length > 0 ? (
        <div>
          <br />
          <Typography variant="h4">Subtotal: ${calculateSubtotal().toFixed(2)}</Typography>
          <Typography variant="h4">Total (12%): ${calculateTotal().toFixed(2)}</Typography>
        </div>
      ) : null}
    </div>
  );
};

export default TransactionPage;
