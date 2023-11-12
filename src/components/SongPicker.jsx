import { useState } from 'react';
import ScrapedData from '../songdata.json'
import './SongPicker.css'
import RandomCards from './RandomCards';
function SongPicker() {
    let v = [];
    let chosenVersion = [];
    const [cV, setCV] = useState([]);
    const [vLength, setVLength] = useState(0);
    const versions = ["DDR 1st", "DDR 2ndMIX", "DDR 3rdMIX", "DDR 4thMIX", "DDR 5thMIX", "DDRMAX", "DDRMAX2", "DDR EXTREME", "DDR SuperNOVA", "DDR SuperNOVA 2", "DDR X", "DDR X2",
        "DDR X3 VS 2ndMIX", "DanceDanceRevolution (2013)", "DanceDnaceRevolution (2014)", "DanceDanceRevolution A", "DanceDanceRevolution A20",
        "DanceDanceRevolution A20 PLUS", "DanceDanceRevolution A3"];
    const data = [];
    data.push({ ScrapedData });
    const songList = data[0].ScrapedData; //Song list use [][] to get version , song object and then .property you want
    function generateRandom(v) {
        //figure out what versions are selcted
        chosenVersion = [];
        v.forEach((version) => {
            for (let i = 0; i < songList.length; i++) {
                if (songList[i][0].version == version) {
                    chosenVersion.push(i)
                }
            }
            setCV(chosenVersion);
        })
    }
    return (
        <div className="songpickercontainer">
            <div className="songpickertextcontainer">
                <h1>Song Picker</h1>
                <p>Randomly generate five songs to play in your next set. Select the version and difficulties you want included in your selection below.</p>
                <div className="dropdown">
                    <button id="selectedbutton">Select Versions</button>
                    <div className="dropdowncontent">
                        {versions.map((version) => {
                            return (
                                <button className='dropdownbutton' key={version} onClick={(e) => {
                                    e.target.classList.toggle("selected");
                                }}>{version}</button>
                            )
                        })}
                    </div>
                </div>
                <button onClick={() => {
                    v = [];
                    let selectedVersions = document.querySelectorAll(".selected");
                    selectedVersions.forEach((version) => {
                        v.push(version.innerText);
                    })
                    setVLength(v.length);
                    generateRandom(v);
                }}>hello</button>
            </div>
            <div className="randomcards">
                <h1>Song Selection</h1> 
                {vLength > 0 ? <RandomCards versions={cV}/> : null}
            </div>
        </div>
    )
}
export default SongPicker;