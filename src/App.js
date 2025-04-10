import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantRecommender from './RestaurantRecommender';
import RestaurantPage from './RestaurantPage';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/recommender" element={<RestaurantRecommender/>} />
          <Route path="/restaurant" element={<RestaurantPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
