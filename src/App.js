import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Desktop, Mobile } from './components/responsive/responsive';
import Home from './components/section/home';
import Header from './components/header/header';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    }
  }, [])

  useEffect(() => {
    console.log(scrollPosition)
  }, [scrollPosition])

  const handleScrollY = () => {
    setScrollPosition(window.scrollY)
  }


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Desktop>
        <Header scrollPosition={scrollPosition}/>
        <Home scrollPosition={scrollPosition}/>
      </Desktop>
      <Mobile>Mobile change</Mobile>
    </div>
  );
}

export default App;
