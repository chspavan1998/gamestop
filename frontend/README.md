# GameStop - Board Game Store

A modern React-based e-commerce platform for board games, featuring user authentication, shopping cart functionality, and game management.

## Features

- User authentication with Google and Facebook
- Game browsing and searching
- Shopping cart functionality
- Responsive design with Material-UI
- Game tutorials with YouTube integration

## Deployment

This application is deployed on Render using Docker. The deployment process is automated through the `render.yaml` configuration file.

### Environment Variables

The following environment variables need to be set in your Render dashboard:

- `NODE_ENV=production`
- `PORT=10000`
- Firebase configuration variables (if using Firebase)

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run server
   ```

## Docker Deployment

The application is containerized using Docker. The `Dockerfile` includes:

- Multi-stage build for optimized image size
- Node.js 18 Alpine base image
- Production-ready configuration

## Technologies Used

- React
- Redux Toolkit
- Material-UI
- Firebase
- Express.js
- Docker 