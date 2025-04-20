import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [
    {
      id: 1,
      name: 'Catan',
      description: 'A strategy board game where players collect resources and build settlements.',
      price: 49.99,
      image: '/images/games/catan.jpg',
      videoUrl: 'https://www.youtube.com/embed/d3Z2kP1JKR4',
      category: 'Strategy',
      players: '3-4',
      duration: '60-90 minutes',
      stock: 10
    },
    {
      id: 2,
      name: 'Ticket to Ride',
      description: 'A cross-country train adventure where players collect cards of various types of train cars.',
      price: 44.99,
      image: '/images/games/ticket_to_ride.jpg',
      videoUrl: 'https://www.youtube.com/embed/HW9FmdgE9jQ',
      category: 'Family',
      players: '2-5',
      duration: '30-60 minutes',
      stock: 8
    },
    {
      id: 3,
      name: 'Codenames',
      description: 'A social word game with a simple premise and challenging gameplay.',
      price: 24.99,
      image: '/images/games/codenames.jpg',
      videoUrl: 'https://www.youtube.com/embed/zQVHkl8oQEU',
      category: 'Party',
      players: '2-8',
      duration: '15 minutes',
      stock: 12
    },
    {
      id: 4,
      name: 'Pandemic',
      description: 'A cooperative board game where players work together to stop global outbreaks.',
      price: 39.99,
      image: '/images/games/pandemic.jpg',
      videoUrl: 'https://www.youtube.com/embed/zQVHkl8oQEU',
      category: 'Cooperative',
      players: '2-4',
      duration: '45 minutes',
      stock: 6
    },
    {
      id: 5,
      name: 'Azul',
      description: 'A tile-placement game where players compete to create the most beautiful tiled wall.',
      price: 34.99,
      image: '/images/games/azul.jpg',
      videoUrl: 'https://www.youtube.com/embed/zQVHkl8oQEU',
      category: 'Abstract',
      players: '2-4',
      duration: '30-45 minutes',
      stock: 9
    },
    {
      id: 6,
      name: 'Wingspan',
      description: 'A competitive bird-collection, engine-building board game.',
      price: 54.99,
      image: '/images/games/wingspan.jpg',
      videoUrl: 'https://www.youtube.com/embed/zQVHkl8oQEU',
      category: 'Strategy',
      players: '1-5',
      duration: '40-70 minutes',
      stock: 7
    },
    {
      id: 7,
      name: '7 Wonders',
      description: 'A card drafting game where players develop their ancient civilizations.',
      price: 49.99,
      image: '/images/games/seven_wonders.jpg',
      videoUrl: 'https://www.youtube.com/embed/zQVHkl8oQEU',
      category: 'Strategy',
      players: '2-7',
      duration: '30 minutes',
      stock: 5
    },
    {
      id: 8,
      name: 'Splendor',
      description: 'A game of chip-collecting and card development.',
      price: 29.99,
      image: '/images/games/splendor.jpg',
      videoUrl: 'https://www.youtube.com/embed/zQVHkl8oQEU',
      category: 'Strategy',
      players: '2-4',
      duration: '30 minutes',
      stock: 11
    }
  ],
  loading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setGames, setLoading, setError } = gamesSlice.actions;
export default gamesSlice.reducer; 