import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import SongPicker from './components/SongPicker';
import Babylon from './assets/babylon.png'
import Search from './components/Search';
import { useEffect } from 'react';

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.invisible');
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])
  return (
    <>
      <div className="container">
        <Navbar />
        <span id="anchorabout"></span>
        <div className="aboutbar invisible">
          <About />
        </div>
        <span id="anchorsearch"></span>
          <div className="searchcontent invisible">
            <Search />
          </div>
        <span id="anchorresource"></span>
        <div className="resourcebar invisible">
          <Resources />
          <div className="image"><img src={Babylon}></img></div>
          
        </div>
        <span id="anchorsongpicker"></span>
        <div className="songpickerbar invisible">
          <SongPicker />
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default App
