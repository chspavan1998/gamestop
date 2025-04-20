import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  IconButton,
  Container,
  Divider,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { Delete as DeleteIcon, ShoppingCart } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("f3bZu90Wf9rDZv1zc");

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [error, setError] = useState(null);

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + (item.rentalCost || 0);
    }, 0).toFixed(2);
  };

  const handlePlaceOrder = async () => {
    if (items.length === 0) {
      setError('Your cart is empty');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Get customer details from the first item in cart
      const customerDetails = items[0]?.customerDetails || {};
      
      // Prepare email template parameters
      const templateParams = {
        from_name: customerDetails.name || 'Customer',
        customer_email: customerDetails.email || '',
        customer_phone: customerDetails.phone || '',
        customer_address: customerDetails.address || '',
        game_list: items.map(item => `
Game: ${item.name}
Rental Period: ${item.rentalStartDate} to ${item.rentalEndDate}
Duration: ${item.rentalDuration} days
Cost: ₹${item.rentalCost}
-------------------`).join('\n'),
        total_amount: `₹${calculateTotal()}`
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_xog0qvl',
        'template_u094dkb',
        templateParams
      );

      // Show success dialog
      setShowSuccessDialog(true);
      
      // Clear the cart
      dispatch(clearCart());
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Error placing order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  if (items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <ShoppingCart sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Looks like you haven't added any games to your cart yet.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {items.map((item) => (
            <Paper key={item.id} elevation={2} sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rental Period: {item.rentalStartDate} to {item.rentalEndDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {item.rentalDuration} days
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="h6" color="primary" align="right">
                    ₹{item.rentalCost}
                  </Typography>
                  <IconButton
                    color="error"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    sx={{ mt: 1 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1">₹{calculateTotal()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1">Tax (18%)</Typography>
              <Typography variant="body1">₹{(calculateTotal() * 0.18).toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">₹{(calculateTotal() * 1.18).toFixed(2)}</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Place Order'}
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Success Dialog */}
      <Dialog
        open={showSuccessDialog}
        onClose={handleCloseSuccessDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" gutterBottom>
            Thanks for your order, our team will contact you.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleCloseSuccessDialog}
            sx={{ minWidth: 120 }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Cart; 