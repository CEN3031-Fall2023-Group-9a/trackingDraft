// src/App.js
import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    // When the component mounts, check for the last visited page in localStorage
    const lastVisitedPage = localStorage.getItem('lastVisitedPage');
    if (lastVisitedPage) {
      setCurrentPage(lastVisitedPage);
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem('lastVisitedPage', page);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handlePageChange('Home')}>Home</button>
        <button onClick={() => handlePageChange('About')}>About</button>
      </nav>
      <div>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
      </div>
    </div>
  );
}

export default App;
