import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Container,
  Divider,
  Alert,
  CircularProgress,
  FormControl
} from '@mui/material';
import { ShoppingCart, Star, AccessTime } from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, differenceInDays } from 'date-fns';

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => 
    state.games.games.find((g) => g.id === parseInt(id))
  );
  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState({ success: null, message: '' });
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(null);

  const calculateRentalCost = (days) => {
    const basePrice = game.price;
    // Price increases by 10% for each additional day
    return basePrice + (basePrice * 0.1 * (days - 1));
  };

  const handleAddToCart = () => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone || !customerDetails.address) {
      setOrderStatus({ success: false, message: 'Please fill in all customer details' });
      return;
    }

    if (!rentalEndDate) {
      setOrderStatus({ success: false, message: 'Please select rental end date' });
      return;
    }

    const days = differenceInDays(rentalEndDate, rentalStartDate) + 1;
    if (days < 1) {
      setOrderStatus({ success: false, message: 'End date must be after start date' });
      return;
    }

    setLoading(true);
    try {
      dispatch(addToCart({
        ...game,
        customerDetails,
        rentalStartDate: format(rentalStartDate, 'yyyy-MM-dd'),
        rentalEndDate: format(rentalEndDate, 'yyyy-MM-dd'),
        rentalDuration: days,
        rentalCost: calculateRentalCost(days)
      }));
      setOrderStatus({ success: true, message: 'Game added to cart successfully!' });
      setCustomerDetails({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
      setRentalEndDate(null);
    } catch (error) {
      setOrderStatus({ success: false, message: 'Error adding game to cart. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (!game) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5">Game not found</Typography>
      </Container>
    );
  }

  const days = rentalEndDate ? differenceInDays(rentalEndDate, rentalStartDate) + 1 : 0;
  const totalCost = days > 0 ? calculateRentalCost(days) : 0;

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(game.videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 3 }}>
            <Box
              component="img"
              src={game.image}
              alt={game.name}
              sx={{ width: '100%', height: 'auto', borderRadius: 2, mb: 2 }}
            />
            {embedUrl ? (
              <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title={`${game.name} Gameplay`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px'
                  }}
                />
              </Box>
            ) : (
              <Box sx={{ 
                position: 'relative', 
                paddingTop: '56.25%',
                backgroundColor: 'grey.200',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="body1" color="text.secondary">
                  Video not available
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              {game.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Star color="primary" />
              <Typography variant="h6" color="primary" sx={{ ml: 1 }}>
                {game.rating}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTime color="primary" />
              <Typography variant="h6" color="primary" sx={{ ml: 1 }}>
                ₹{game.price} per day
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {game.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Rental Period
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <DatePicker
                      label="Start Date"
                      value={rentalStartDate}
                      onChange={(newValue) => setRentalStartDate(newValue)}
                      minDate={new Date()}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <DatePicker
                      label="End Date"
                      value={rentalEndDate}
                      onChange={(newValue) => setRentalEndDate(newValue)}
                      minDate={rentalStartDate}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </LocalizationProvider>
            {days > 0 && (
              <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                Rental Duration: {days} {days === 1 ? 'Day' : 'Days'} - Total Cost: ₹{totalCost.toFixed(2)}
              </Typography>
            )}
            <Typography variant="h6" gutterBottom>
              Customer Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  multiline
                  rows={3}
                  value={customerDetails.address}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                  required
                />
              </Grid>
            </Grid>
            {orderStatus.message && (
              <Alert severity={orderStatus.success ? "success" : "error"} sx={{ mt: 2 }}>
                {orderStatus.message}
              </Alert>
            )}
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              startIcon={<ShoppingCart />}
              onClick={handleAddToCart}
              disabled={loading}
              sx={{ mt: 3 }}
            >
              {loading ? <CircularProgress size={24} /> : `Rent for ${days} ${days === 1 ? 'Day' : 'Days'} - ₹${totalCost.toFixed(2)}`}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GameDetail; 