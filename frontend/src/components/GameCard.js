import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out',
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={game.image}
        alt={game.name}
        onClick={() => navigate(`/games/${game.id}`)}
        sx={{ cursor: 'pointer' }}
      />
      <CardContent sx={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div"
          sx={{ 
            color: '#333',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '10px'
          }}
        >
          {game.name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          ${game.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard; 