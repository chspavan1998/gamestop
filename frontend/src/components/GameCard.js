import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(game));
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 3,
        }
      }}
      onClick={() => navigate(`/games/${game.id}`)}
    >
      <Box sx={{ position: 'relative', paddingTop: '75%' }}>
        <CardMedia
          component="img"
          image={game.image}
          alt={game.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {game.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          ${game.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="primary"
          onClick={handleAddToCart}
          sx={{ width: '100%' }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard; 