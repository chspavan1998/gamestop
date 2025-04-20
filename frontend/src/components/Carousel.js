import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Box sx={{ 
      position: 'relative', 
      height: '400px', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2))',
            }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center',
              px: 4,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                color: '#ffffff',
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: '600px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                color: '#f5f5f5',
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {items.map((_, index) => (
          <Paper
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.7)',
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: 'primary.main',
              }
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel; 