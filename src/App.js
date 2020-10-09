import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {

  // state for which section of the portfolio the user is on
  const [sections] = useState(['About', 'Portfolio', 'Contact', 'Resume']);

  const [currentSection, setCurrentSection] = useState(sections[0]);


  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>

      <main>
        {currentSection === 'About' ? (
          <About></About>
        ) : currentSection === 'Portfolio' ? (
          <Project></Project>
        ) : currentSection === 'Contact' ? (
          <Contact></Contact>
        ) : (
          <Resume></Resume>
        )}
      
      
      }


      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
