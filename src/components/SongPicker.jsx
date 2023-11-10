import { useState } from 'react';
import './SongPicker.css'
function SongPicker() {
    const [selectedVersionsArr, setSelectedVersionsArr] = useState([]);
    let v = [];
    const versions = ["Any version", "DDR 1st", "DDR 2ndMIX", "DDR 3rdMIX", "DDR 4thMIX", "DDR 5thMIX", "DDRMAX", "DDRMAX2", "DDR EXTREME", "DDR SuperNOVA", "DDR SuperNOVA 2", "DDR X", "DDR X2",
        "DDR X3 VS 2ndMIX", "DanceDanceRevolution (2013)", "DanceDnaceRevolution (2014)", "DanceDanceRevolution A", "DanceDanceRevolution A20",
        "DanceDanceRevolution A20 PLUS", "DanceDanceRevolution A3"];
    function generateRandom() {
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
                    let selectedVersions = document.querySelectorAll(".selected");
                    selectedVersions.forEach((version) => {
                        console.log(version.innerText);
                        v.push(version.innerText);
                    })
                    setSelectedVersionsArr(v);
                    generateRandom();
                }}>hello</button>
            </div>
            <div className="randomcards">
                <h1>Song Selection</h1>
                <div className="randomcardcontainer">
                    {selectedVersionsArr.map((version) => {
                        return (
                            <h1 key = {`${version}${+ Math.random()*100}`}>{version}</h1>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default SongPicker;