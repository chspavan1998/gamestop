import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Paper,
} from '@mui/material';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';
import Carousel from './Carousel';

const Home = () => {
  const games = useSelector((state) => state.games.games);
  const featuredGames = games.slice(0, 4); // Get first 4 games as featured

  const carouselItems = [
    {
      image: '/images/banner1.jpg',
      title: 'Discover Traditional Games',
      description: 'Explore our collection of classic board games from around the world'
    },
    {
      image: '/images/banner2.jpg',
      title: 'Modern Board Games',
      description: 'Find the perfect game for your next game night'
    },
    {
      image: '/images/banner3.jpg',
      title: 'Game Rentals',
      description: 'Try before you buy with our rental program'
    }
  ];

  return (
    <Box>
      <Carousel items={carouselItems} />

      {/* Featured Games Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
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
          Featured Games
        </Typography>
        <Grid container spacing={4}>
          {featuredGames.map((game) => (
            <Grid item key={game.id} xs={12} sm={6} md={3}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/games"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '30px',
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }
            }}
          >
            View All Games
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 