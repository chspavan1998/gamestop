import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';
import Footer from './Footer';

const Home = () => {
  const games = useSelector((state) => state.games.games);
  const featuredGames = games.slice(0, 4); // Get first 4 games as featured

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to GameStop
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Your one-stop shop for the best board games
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom>
          Featured Games
        </Typography>
        <Grid container spacing={3}>
          {featuredGames.map((game) => (
            <Grid item xs={12} sm={6} md={3} key={game.id}>
              <Box sx={{ height: '100%' }}>
                <GameCard game={game} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home; 