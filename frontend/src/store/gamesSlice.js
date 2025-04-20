import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [
    {
      id: 1,
      title: "Catan",
      category: "Strategy",
      price: 49.99,
      image: "/images/games/catan.jpg",
      description: "A classic strategy game of resource management and trading. Build settlements, cities, and roads to become the dominant force on the island of Catan.",
      rating: 4.8,
      players: "3-4",
      duration: "60-90 min",
      stock: 5,
      videoId: "d3Z2kP1JKR4"
    },
    {
      id: 2,
      title: "Ticket to Ride",
      category: "Family",
      price: 39.99,
      image: "/images/games/ticket_to_ride.jpg",
      description: "Build your railway empire across North America. Collect train cards to claim railway routes and connect cities.",
      rating: 4.7,
      players: "2-5",
      duration: "30-60 min",
      stock: 3,
      videoId: "HW9FmdgE9jQ"
    },
    {
      id: 3,
      title: "Codenames",
      category: "Party",
      price: 19.99,
      image: "/images/games/codenames.jpg",
      description: "A word association game for teams. Give one-word clues to help your team identify their agents while avoiding the assassin.",
      rating: 4.6,
      players: "4-8+",
      duration: "15 min",
      stock: 8,
      videoId: "zQVHkl8oQEU"
    },
    {
      id: 4,
      title: "Pandemic",
      category: "Cooperative",
      price: 44.99,
      image: "/images/games/pandemic.jpg",
      description: "Work together to stop the spread of diseases and find cures before time runs out. A cooperative game where players must strategize to save the world.",
      rating: 4.8,
      players: "2-4",
      duration: "45 min",
      stock: 0,
      videoId: "YqHkXWJqh7k"
    },
    {
      id: 5,
      title: "Azul",
      category: "Abstract",
      price: 34.99,
      image: "/images/games/azul.jpg",
      description: "A beautiful tile-drafting game where players compete to create the most stunning wall of tiles in the Palace of Evora.",
      rating: 4.7,
      players: "2-4",
      duration: "30-45 min",
      stock: 4,
      videoId: "NkGX5JQ7yQ8"
    },
    {
      id: 6,
      title: "Wingspan",
      category: "Strategy",
      price: 59.99,
      image: "/images/games/wingspan.jpg",
      description: "A competitive bird-collection, engine-building game where players attract birds to their wildlife preserves.",
      rating: 4.9,
      players: "1-5",
      duration: "40-70 min",
      stock: 2,
      videoId: "XHhC8eUY0q8"
    },
    {
      id: 7,
      title: "7 Wonders",
      category: "Strategy",
      price: 49.99,
      image: "/images/games/seven_wonders.jpg",
      description: "Lead an ancient civilization as it rises from its barbaric roots to become a world power. Build your city and erect an architectural wonder.",
      rating: 4.7,
      players: "2-7",
      duration: "30 min",
      stock: 6,
      videoId: "Q3q5b7QbLqE"
    },
    {
      id: 8,
      title: "Splendor",
      category: "Strategy",
      price: 29.99,
      image: "/images/games/splendor.jpg",
      description: "A game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, transportation, and shops.",
      rating: 4.6,
      players: "2-4",
      duration: "30 min",
      stock: 7,
      videoId: "ACYXgJ1FZ9I"
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