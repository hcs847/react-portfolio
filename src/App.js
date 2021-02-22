import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import PagesContainer from './components/PagesContainer';
import Footer from './components/Footer';


function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return (
          <About />
        );
      case 'Portfolio':
        return (
          <Project />
        );
      case 'Contact':
        return (
          <ContactForm />
        );
      case 'Resume':
        return (
          <Resume />
        );
      default:
        return (
          <About />
        )
    }
  }
  return (
    <div>
      <main>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <PagesContainer currentPage={currentPage} handlePageChange={handlePageChange} renderPage={renderPage} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
