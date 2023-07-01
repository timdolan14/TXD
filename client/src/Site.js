import React, { useState } from 'react';
import NavTab from './components/NavTab';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Notifications from './pages/Notifications';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Notifications') {
      return <Notifications />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <NavTab currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
