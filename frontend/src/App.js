import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/background.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const theme = createTheme({
    // ... existing theme configuration ...
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-background" />
      <div className="app-content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App; 