import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'white',
        color: 'text.primary',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            '&:hover': {
              color: 'primary.dark',
            }
          }}
        >
          GameStop
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/games"
            sx={{
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              }
            }}
          >
            Games
          </Button>
          <IconButton
            component={Link}
            to="/cart"
            sx={{
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              }
            }}
          >
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 