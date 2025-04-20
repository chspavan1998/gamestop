import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const featuredGames = [
    {
      id: 1,
      title: 'Catan',
      price: '₹249',
      image: 'https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Catan',
    },
    {
      id: 2,
      title: 'Ticket to Ride',
      price: '₹299',
      image: 'https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Ticket+to+Ride',
    },
    {
      id: 3,
      title: 'Codenames',
      price: '₹199',
      image: 'https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Codenames',
    },
    {
      id: 4,
      title: 'Pandemic',
      price: '₹349',
      image: 'https://placehold.co/600x400/FF6B00/FFFFFF/png?text=Pandemic',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Rent Board Games
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Choose from our wide collection of board games for your next game night
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/rent')}
                sx={{ px: 4, py: 1.5 }}
              >
                Browse Games
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/600x400/FFFFFF/FF6B00/png?text=Board+Games"
                alt="Board Games"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Categories
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {['Adult Games', 'Family Games', 'Strategy Games'].map((category) => (
            <Grid item xs={12} md={4} key={category}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardActionArea
                  component="div"
                  onClick={() => navigate(`/rent/${category.toLowerCase().replace(' ', '-')}`)}
                  sx={{ height: '100%' }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={`https://placehold.co/600x400/FF6B00/FFFFFF/png?text=${category}`}
                    alt={category}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category === 'Adult Games'
                        ? 'Perfect for game nights with friends'
                        : category === 'Family Games'
                        ? 'Fun for the whole family'
                        : 'Challenge your mind'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Games Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Featured Games
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {featuredGames.map((game) => (
              <Grid item xs={12} sm={6} md={3} key={game.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <CardActionArea
                    component="div"
                    onClick={() => navigate(`/game/${game.id}`)}
                    sx={{ height: '100%' }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={game.image}
                      alt={game.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h3">
                        {game.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        From {game.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 