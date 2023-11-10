import { useState } from 'react';
import './SongPicker.css'
function SongPicker() {
    const [currVersion, setCurrVersion] = useState("Any version");
    const versions = ["Any version", "DDR 1st", "DDR 2ndMIX", "DDR 3rdMIX", "DDR 4thMIX", "DDR 5thMIX", "DDRMAX", "DDRMAX2", "DDR EXTREME", "DDR SuperNOVA", "DDR SuperNOVA 2", "DDR X", "DDR X2",
        "DDR X3 VS 2ndMIX", "DanceDanceRevolution (2013)", "DanceDnaceRevolution (2014)", "DanceDanceRevolution A", "DanceDanceRevolution A20",
        "DanceDanceRevolution A20 PLUS", "DanceDanceRevolution A3"];
    return (
        <div className="songpickercontainer">
            <div className="songpickertextcontainer">
                <h1>Song Picker</h1>
                <p>Randomly generate five songs to play in your next set. Select the version and difficulties you want included in your selection below.</p>
                <div className="dropdown">
                    <button id="selectedbutton">{currVersion}</button>
                    <div className="dropdowncontent">
                        {versions.map((version) => {
                            return (
                                <button className='dropdownbutton' key={version} onClick={(e) => {
                                    e.target.classList.toggle("selected");
                                    setCurrVersion(e.target.innerText);
                                }}>{version}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SongPicker;