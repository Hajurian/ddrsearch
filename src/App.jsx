import './App.css'
import About from './assets/About';
import Navbar from './assets/Navbar';
import Resources from './assets/Resources';
import ScrapedData from './songdata.json'

function App() {
  // let data = []; //used later
  // data.push(ScrapedData);
  // console.log(data);
  return (
    <>
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
      
      
    </>
  )
}

export default App
