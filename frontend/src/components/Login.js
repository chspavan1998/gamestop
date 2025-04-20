import React from 'react';
import { useAuth } from './AuthProvider';
import { Button, Box, Typography, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
  const { signInWithGoogle, signInWithFacebook } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to GameStop
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Sign in to rent games and manage your account
        </Typography>
        
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={signInWithGoogle}
          sx={{ mb: 2, width: '100%' }}
        >
          Sign in with Google
        </Button>
        
        <Button
          variant="contained"
          startIcon={<FacebookIcon />}
          onClick={signInWithFacebook}
          sx={{ width: '100%' }}
          color="primary"
        >
          Sign in with Facebook
        </Button>
      </Paper>
    </Box>
  );
};

export default Login; 