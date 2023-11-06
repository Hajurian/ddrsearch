import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import SongPicker from './components/SongPicker';
import Babylon from './assets/babylon.png'
import Search from './components/Search';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <span id="anchorabout"></span>
        <div className="aboutbar">
          <About />
        </div>
        <span id="anchorsearch"></span>
          <div className="searchcontent">
            <Search />
          </div>
        <span id="anchorresource"></span>
        <div className="resourcebar">
          <Resources />
          <div className="image"><img src={Babylon}></img></div>
          
        </div>
        <span id="anchorsongpicker"></span>
        <div className="songpickerbar">
          <SongPicker />
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default App
