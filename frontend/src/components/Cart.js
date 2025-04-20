import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  TextField,
  Paper,
  Divider,
  Alert,
  CircularProgress
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("f3bZu90Wf9rDZv1zc"); // Replace with your actual public key

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState({ success: null, message: '' });
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + parseFloat(item.rentalCost), 0).toFixed(2);
  };

  const handlePlaceOrder = async () => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone || !customerDetails.address) {
      setOrderStatus({ success: false, message: 'Please fill in all customer details' });
      return;
    }

    setLoading(true);
    try {
      const gameList = items.map(game => `
        - ${game.title}
          Duration: ${new Date(game.startDate).toLocaleDateString()} to ${new Date(game.endDate).toLocaleDateString()}
          Rental Cost: $${game.rentalCost}
      `).join('\n');

      const templateParams = {
        to_name: 'GameStop Admin',
        from_name: customerDetails.name,
        customer_email: customerDetails.email,
        customer_phone: customerDetails.phone,
        customer_address: customerDetails.address,
        game_list: gameList,
        total_amount: calculateTotal()
      };

      const response = await emailjs.send(
        'service_xog0qvl', // Replace with your actual service ID
        'template_u094dkb', // Replace with your actual template ID
        templateParams
      );

      if (response.status === 200) {
        setOrderStatus({ success: true, message: 'Order placed successfully! You will receive a confirmation email.' });
        // Clear cart after successful order
        items.forEach(item => dispatch(removeFromCart(item.id)));
        setCustomerDetails({
          name: '',
          email: '',
          phone: '',
          address: ''
        });
      } else {
        setOrderStatus({ success: false, message: 'Failed to place order. Please try again.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setOrderStatus({ success: false, message: 'Error placing order. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          Your cart is empty
        </Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>
      
      {orderStatus.message && (
        <Alert severity={orderStatus.success ? "success" : "error"} sx={{ mb: 2 }}>
          {orderStatus.message}
        </Alert>
      )}

      <List>
        {items.map((item) => (
          <ListItem key={item.id} divider>
            <ListItemText
              primary={item.title}
              secondary={`$${item.price.toFixed(2)}`}
            />
            <TextField
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              inputProps={{ min: 1 }}
              sx={{ width: 80, mr: 2 }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Total: ${calculateTotal()}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customer Details
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Full Name"
            value={customerDetails.name}
            onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
            required
          />
          <TextField
            label="Email"
            type="email"
            value={customerDetails.email}
            onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
            required
          />
          <TextField
            label="Phone Number"
            value={customerDetails.phone}
            onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
            required
          />
          <TextField
            label="Address"
            multiline
            rows={2}
            value={customerDetails.address}
            onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
            required
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={handlePlaceOrder}
        disabled={loading}
        sx={{ mt: 3 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Place Order'}
      </Button>
    </Paper>
  );
};

export default Cart; 