import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import SongPicker from './components/SongPicker';
import ScrapedData from './songdata.json'
import Babylon from './assets/babylon.png'
import Search from './components/Search';

function App() {
  // let data = []; //used later
  // data.push(ScrapedData);
  // console.log(data);
  return (
    <>
      <div className="container">
        <Navbar />
        <span id="anchorabout"></span>
        <div className="aboutbar">
          <About />
          <span id="anchorsearch"></span>
          <div className="searchcontent">
            <Search />
          </div>
        </div>
        <span id="anchorresource"></span>
        <div className="resourcebar">
          <div className="image"><img src={Babylon}></img></div>
          <Resources />
        </div>
        <span id="anchorsongpicker"></span>
        <div>
          <SongPicker />
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default App
