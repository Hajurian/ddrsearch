import { useEffect, useState } from 'react';
import ScrapedData from '../songdata.json'
import './Search.css'
import Cards from './Cards';
function Search() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
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
    const [searchedSongs, setSearchSongs] = useState([]);
    let ss = [];
    const [search, setSearch] = useState("");
    const data = [];
    data.push({ ScrapedData });
    const songList = data[0].ScrapedData; //Song list use [][] to get version , song object and then .property you want

    document.addEventListener("keydown", (e) => { //function to make searchbar use enter as well
        if (e.code == 'Enter' && search.length > 0) {
            handleSubmit(e);
        }
    })
    function handleSubmit(e) {
        e.preventDefault();
        ss.length = 0;
        for (let version = 0; version < songList.length; version++) {
            for (let songIndex = 0; songIndex < songList[version].length; songIndex++) {

                if (songList[version][songIndex].title.toUpperCase().includes(search.toUpperCase())) { //the search for the songs that uses the info from the scraped data
                    ss.push(songList[version][songIndex]);
                    setSearchSongs(ss);

                }
            }
        }
        document.getElementById('searchinput').value = '';
    }
    return (
        <div className="searchcontainer">
            <h1 className='invisible'>Song Search</h1>
            <div className="search invisble">
                <div className="icon" onClick={() => {
                    document.querySelector('.search').classList.toggle('active');
                }}></div>
                <div className="input"><input type="text" id='searchinput' placeholder='Enter song name' onChange={(e) => {
                    setSearch(e.target.value);
                }}></input></div>
                <span className='submit' onClick={handleSubmit}></span>
            </div>
            <div className="carddisplay invisible">
                {searchedSongs.length > 0 ? searchedSongs.map(song => {
                    return (
                        <Cards key={song.title} image={song.image} title={song.title} artist={song.artist} version={song.version}
                            beginner={song.beginner} basic={song.basic} difficult={song.difficult} expert={song.expert} challenge={song.challenge} />
                    );
                }) : <h1 id="searchtext">Click the search icon and enter a song name!</h1>}

            </div>

        </div>
    );
}
export default Search;