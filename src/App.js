import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';



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



      </main>
    </div>

  );
}

export default App;
