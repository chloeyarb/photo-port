import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <About></About>
      </main>
    </div>
  );
}

export default App;
