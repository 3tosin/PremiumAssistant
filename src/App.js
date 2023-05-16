import React, {useState,useEffect} from 'react';
import './App.css';

import Header from "./components/Header/header";
import Hero from "./components/Design/Hero";
import Counter from "./components/Design/Counter";
import Services from "./components/Design/Services";
import About from "./components/Design/About";
import Team from "./components/Design/Team";
import Testimonial from "./components/Design/Testimonial";
import Newsletter from "./components/Design/Newsletter";
import Footer from "./components/Footer/Footer";


function App() {
    const [theme, setTheme] = useState('');

    const toggleTheme = () => {
      theme === '' ? setTheme('light-theme') : setTheme('');
    }
  
    useEffect(() => {
          document.body.className = theme},[theme]);
 

  return (
    <>
      <Header theme= {theme} toggleTheme={toggleTheme}/>
      <Hero theme={theme} />
      <Counter/>
      <Services/>
      <About/>
      <Team/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>

    </>
  );
}

export default App;
