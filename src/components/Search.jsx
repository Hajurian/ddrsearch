import { useEffect, useState } from 'react';
import ScrapedData from '../songdata.json'
import './Search.css'
import Cards from './Cards';
function Search() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
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
    const [search, setSearch] = useState("");
    const data = [];
    data.push({ ScrapedData });
    const songList = data[0].ScrapedData; //Song list use [][] to get version , song object and then .property you want
    


    function handleSubmit(e) {
        e.preventDefault();
        
        for (let version = 0; version < songList.length; version++) {
            for (let songIndex = 0; songIndex < songList[version].length; songIndex++) {

                if (songList[version][songIndex].title.toUpperCase().includes(search.toUpperCase())) {
                    console.log(songList[version][songIndex].image);
                    console.log(version)
                    console.log(songIndex)
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
                <div className="input"><input type="text" id='searchinput' placeholder='enter song name' onChange={(e) => {
                    setSearch(e.target.value);
                }}></input></div>
                <span className='submit' onClick={handleSubmit}></span>
            </div>
            <div className="carddisplay invisible">
                <Cards image="https://p.eagate.573.jp/game/ddr/ddra3/p/images/binary_jk.html?img=9i0q91lPPiO61b9P891O1i86iOP1I08O&kind=2" title="EGOISM 440" />
                <Cards />
            </div>
        </div>
    );
}
export default Search;