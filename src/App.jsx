// App.js
import React, { createContext, useState } from 'react';
import { Grid } from './Grid';
import { Projects } from './Projects';
import { AboutMePopup } from './AboutMePopup';
import './App.css';

export const AppContext = createContext();

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const popUp = () => {
    setIsClicked(prevState => !prevState);
  };

  return (
    
    <main>
      <section className='main-container'>
        {/* Pasar el valor y la función al proveedor de contexto */}
        <AppContext.Provider value={{ isClicked, setIsClicked }}>
          <Grid />
          <AboutMePopup />
          <Projects />
        </AppContext.Provider>
      </section>
    </main>
  );
}

export default App;
