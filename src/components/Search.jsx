import { useState } from 'react';
import ScrapedData from '../songdata.json'
import './Search.css'
function Search() {
    const [search, setSearch] = useState("");
    const data = [];
    data.push({ ScrapedData });
    const songList = data[0].ScrapedData; //Song list use [][] to get version , song object and then .property you want
    


    function handleSubmit(e) {
        e.preventDefault();
        
        for (let version = 0; version < songList.length; version++) {
            for (let songIndex = 0; songIndex < songList[version].length; songIndex++) {

                if (songList[version][songIndex].title.toUpperCase().includes(search.toUpperCase())) {
                    console.log(songList[version][songIndex].title);
                    console.log(version)
                    console.log(songIndex)
                }
            }
        }
    }
    return (
        <div className="searchcontainer">
            <div className="search">
                <div className="icon" onClick={() => {
                    document.querySelector('.search').classList.toggle('active');
                }}></div>
                <div className="input"><input type="text" id='searchinput' placeholder='enter song name' onChange={(e) => {
                    setSearch(e.target.value);
                }}></input></div>
                <span className='submit' onClick={handleSubmit}></span>
            </div>
            <p>{search}</p>
        </div>
    );
}
export default Search;