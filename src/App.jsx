// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Modals from './components/Modal';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Exchange from './Pages/Exchange';
import Profile from './Pages/Profile';
import BookDetails from './Pages/BookDetails';
import Sell from './Pages/Sell';
import Footer from './components/Footer'; // 1. تم الاستيراد بشكل صحيح

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedBook(null);
    window.scrollTo(0, 0);
  };

  const showDetails = (book) => {
    setSelectedBook(book);
    setCurrentPage('details');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'explore': return <Explore showDetails={showDetails} showToast={showToast} />;
      case 'details': return <BookDetails book={selectedBook} goBack={() => navigateTo('explore')} showToast={showToast} />;
      case 'home': return <Home navigateTo={navigateTo} showDetails={showDetails} />;
      case 'exchange': return <Exchange showDetails={showDetails} />;
      case 'profile': return <Profile />;
      case 'sell': return <Sell showToast={showToast} />;
      default: return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      
      <main style={{paddingTop: '70px', minHeight: '80vh'}}>
        {renderPage()}
      </main>

      {/* 2. التصحيح: استخدام مكون Footer بدلاً من الكود اليدوي */}
      <Footer />

      <Modals />
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;