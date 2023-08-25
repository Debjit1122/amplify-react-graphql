// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Events from './routes/Events/EventCreate/eventCreate';
import Dashboard from './routes/Dashboard/dashboard';
import EventRegister from './routes/Events/EventRegister/EventRegister';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<Events />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/events/register/:id" element={<EventRegister />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
