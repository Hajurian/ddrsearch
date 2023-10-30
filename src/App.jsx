import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import SongPicker from './components/SongPicker';
import ScrapedData from './songdata.json'

function App() {
  // let data = []; //used later
  // data.push(ScrapedData);
  // console.log(data);
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="aboutbar">
          <About />
          <div className="searchcontent">
            Search cat
          </div>
        </div>
        <div className="resourcebar">
          <div className="image">image of Baby Lon</div>
          <Resources />
        </div>
        <SongPicker />
      </div>
      <Footer />
    </>
  )
}

export default App
