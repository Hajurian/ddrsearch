import { useState } from 'react';
import ScrapedData from '../songdata.json'
import './Search.css'
import Cards from './Cards';
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
        document.getElementById('searchinput').value = '';
    }
    return (
        <div className="searchcontainer">
            <h1>Song Search</h1>
            <div className="search">
                <div className="icon" onClick={() => {
                    document.querySelector('.search').classList.toggle('active');
                }}></div>
                <div className="input"><input type="text" id='searchinput' placeholder='enter song name' onChange={(e) => {
                    setSearch(e.target.value);
                }}></input></div>
                <span className='submit' onClick={handleSubmit}></span>
            </div>
            <Cards />
        </div>
    );
}
export default Search;