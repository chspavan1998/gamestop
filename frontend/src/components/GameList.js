import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';

const GameList = () => {
  const games = useSelector((state) => state.games.games);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Featured Games
      </Typography>
      <Grid container spacing={3}>
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
            <Box sx={{ height: '100%' }}>
              <GameCard game={game} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GameList; 