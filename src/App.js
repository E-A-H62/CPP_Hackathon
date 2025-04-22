/**
 * Main application component that sets up routing and context providers.
 * @module App
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantRecommender from './RestaurantRecommender';
import RestaurantPage from './RestaurantPage';
import Login from './Login';
import { RestaurantsProvider } from './RestaurantsContext';

/**
 * App component that serves as the root of the application.
 * Sets up routing and wraps the application in necessary providers.
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <RestaurantsProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/recommender" element={<RestaurantRecommender/>} />
            <Route path="/restaurant" element={<RestaurantPage/>} />
          </Routes>
        </div>
      </Router>
    </RestaurantsProvider>
  );
}

export default App;
