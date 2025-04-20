import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';

const Games = () => {
  const games = useSelector((state) => state.games.games);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          color: 'primary.main',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            backgroundColor: 'primary.main',
            borderRadius: '2px'
          }
        }}
      >
        All Games
      </Typography>
      <Grid container spacing={4}>
        {games.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Games; 