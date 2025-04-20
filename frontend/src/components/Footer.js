import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About GameStop
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your premier destination for board games. We offer a wide selection of games for all ages and interests.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/games" color="inherit" display="block" sx={{ mb: 1 }}>
                Browse Games
              </Link>
              <Link href="/cart" color="inherit" display="block" sx={{ mb: 1 }}>
                Shopping Cart
              </Link>
              <Link href="/contact" color="inherit" display="block">
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton
                component={Link}
                href="https://www.instagram.com/chspavan?igsh=ZHNmcmNlNGF0cWVu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <Instagram />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.facebook.com/share/1DpVTbHZAG/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' GameStop. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 