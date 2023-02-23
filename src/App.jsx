/* eslint-disable arrow-body-style */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Homepage, Slider, Navbar, About, Support } from './components';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>


  );
};

export default App;
