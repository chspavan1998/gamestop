import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Rating,
  Alert,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import RentalForm from './RentalForm';
import { addToCart } from '../store/cartSlice';

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  const game = games.find((g) => g.id === parseInt(id));
  const [videoError, setVideoError] = useState(false);

  if (!game) {
    return (
      <Container>
        <Typography variant="h4">Game not found</Typography>
      </Container>
    );
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin
    },
  };

  const handleAddToCart = (rentalDetails) => {
    dispatch(addToCart({
      ...game,
      ...rentalDetails,
      type: 'rental',
    }));
    navigate('/cart');
  };

  const onVideoError = () => {
    setVideoError(true);
  };

  const onVideoReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
            src={game.image}
            alt={game.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {game.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={game.rating} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({game.rating.toFixed(1)})
            </Typography>
          </Box>
          <Typography variant="h4" color="primary" gutterBottom>
            ${game.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {game.description}
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Game Details:
            </Typography>
            <Typography variant="body2">
              • Category: {game.category}
            </Typography>
            <Typography variant="body2">
              • Players: {game.players}
            </Typography>
            <Typography variant="body2">
              • Duration: {game.duration}
            </Typography>
            <Typography variant="body2">
              • Stock: {game.stock} available
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={game.stock === 0}
            sx={{ mr: 2 }}
          >
            Add to Cart
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Add to Wishlist
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          How to Play
        </Typography>
        <Paper sx={{ p: 2, mb: 4 }}>
          {videoError ? (
            <Alert severity="error" sx={{ mb: 2 }}>
              Sorry, the tutorial video is currently unavailable. Please try again later.
            </Alert>
          ) : (
            <YouTube 
              videoId={game.videoId} 
              opts={opts} 
              onError={onVideoError}
              onReady={onVideoReady}
            />
          )}
        </Paper>
      </Box>

      <RentalForm game={game} onAddToCart={handleAddToCart} />
    </Container>
  );
};

export default GameDetail; 