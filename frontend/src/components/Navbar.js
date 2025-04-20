import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src="/images/logo/gamestop-logo.png"
            alt="GameStop Logo"
            sx={{
              height: 40,
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                color: 'white',
              },
            }}
          >
            GameStop
          </Typography>
        </Box>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/games"
            sx={{ mr: 2 }}
          >
            Games
          </Button>
          <IconButton
            color="inherit"
            component={RouterLink}
            to="/cart"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 