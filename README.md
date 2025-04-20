# GameStop - Board Game Rental Platform

## Project Overview
GameStop is a modern web application for renting board games. It provides a user-friendly interface for browsing, selecting, and renting various board games, both traditional and modern.

## Recent Updates
### UI/UX Improvements
- Added scroll-to-top behavior when navigating to game details
- Added game duration display on game cards with clock icon
- Updated price display to show Indian Rupee (₹) symbol
- Centered welcome message on the homepage
- Added "View All Games" button below featured games section

### Component Updates
1. **GameCard.js**
   - Added scroll-to-top functionality on "View Details" click
   - Added game duration display with clock icon
   - Improved card layout and hover effects

2. **Cart.js**
   - Updated price display to show Indian Rupee (₹) symbol
   - Added proper tax calculation (18%)
   - Improved order summary layout

3. **GameDetail.js**
   - Updated price display to show Indian Rupee (₹) symbol
   - Improved rental cost calculation
   - Enhanced date picker formatting

4. **Home.js**
   - Centered welcome message
   - Added gradient background to welcome section
   - Added "View All Games" button
   - Improved featured games section layout

## Project Structure

### Frontend (`/frontend`)

#### Components (`/frontend/src/components`)
1. **App.js**
   - Main application component
   - Sets up routing and theme provider
   - Manages authentication state

2. **Navbar.js**
   - Navigation bar component
   - Handles user authentication display
   - Provides links to different sections

3. **Footer.js**
   - Footer component with social media links
   - Contains copyright information
   - Links to Instagram and Facebook

4. **GameCard.js**
   - Displays individual game cards
   - Shows game image, title, and price
   - Handles game selection for details view

5. **GameDetail.js**
   - Detailed view of a selected game
   - Shows game description and rental options
   - Handles game rental process

6. **Cart.js**
   - Shopping cart component
   - Manages cart items and quantities
   - Handles order placement with EmailJS integration

7. **Home.js**
   - Landing page component
   - Displays featured games
   - Provides search functionality

8. **Games.js**
   - Main games listing page
   - Shows all available games
   - Implements filtering and sorting

9. **Login.js**
   - User authentication component
   - Handles login functionality
   - Manages user session

10. **Register.js**
    - User registration component
    - Handles new user signup
    - Validates user input

#### Store (`/frontend/src/store`)
1. **store.js**
   - Redux store configuration
   - Combines all reducers
   - Sets up middleware

2. **gamesSlice.js**
   - Manages game-related state
   - Handles game data fetching
   - Manages game filtering and sorting

3. **cartSlice.js**
   - Manages shopping cart state
   - Handles adding/removing items
   - Calculates cart totals

4. **authSlice.js**
   - Manages authentication state
   - Handles user login/logout
   - Stores user session information

#### Styles (`/frontend/src/styles`)
1. **theme.js**
   - Material-UI theme configuration
   - Defines color palette
   - Sets typography and component styles

#### Utils (`/frontend/src/utils`)
1. **api.js**
   - API utility functions
   - Handles API requests
   - Manages error handling

### Backend (`/backend`)

#### Server Files
1. **server.js**
   - Main server file
   - Sets up Express server
   - Configures middleware and routes

2. **routes/**
   - API route definitions
   - Handles different endpoints
   - Manages request/response

3. **models/**
   - Database models
   - Defines data schemas
   - Handles data validation

4. **controllers/**
   - Business logic handlers
   - Processes requests
   - Manages data operations

## Key Features
1. **User Authentication**
   - Login/Register functionality
   - Session management
   - Protected routes

2. **Game Management**
   - Game listing and filtering
   - Detailed game views
   - Search functionality

3. **Shopping Cart**
   - Add/remove games
   - Quantity management
   - Order placement

4. **Email Integration**
   - Order confirmation emails
   - Customer notifications
   - Admin alerts

## Dependencies
- React
- Material-UI
- Redux Toolkit
- React Router
- EmailJS
- Express
- MongoDB
- Node.js

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables
4. Start the development server:
   ```bash
   npm start
   ```

## Deployment
The application is deployed on Render:
- Frontend: [Frontend URL]
- Backend: [Backend URL]

## Environment Variables
Required environment variables:
- `REACT_APP_API_URL`
- `REACT_APP_EMAILJS_PUBLIC_KEY`
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License. 