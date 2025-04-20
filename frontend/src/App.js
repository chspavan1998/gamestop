import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import Cart from './components/Cart';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <Box component="main" sx={{ flexGrow: 1, mt: '64px' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/games" element={<Games />} />
                  <Route path="/games/:id" element={<GameDetail />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App; 