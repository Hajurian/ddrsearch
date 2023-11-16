import ScrapedData from '../songdata.json'
function RandomCards(props) {
    const data = [];
    data.push({ ScrapedData });
    const songList = data[0].ScrapedData;
    const songs = [];
    let count = 5;
    for (let i = 0; i < 5; i++) {
        let v = props.versions[Math.floor(Math.random() * props.versions.length)]
        songs.push(songList[v][Math.floor(Math.random() * songList[v].length)]);
    }
    
    function RandomCard(props) {
        return (
            <div className="randomcard">
                <div className="topcard">
                    <img className="thumbnail" src={props.image}></img>
                    <h1 className="title">{props.title}</h1>
                </div>
            </div>
        )
    }
    return(
        <div className="randomcardcontainer">
            <RandomCard image={songs[0].image} title={songs[0].title}/>
            <RandomCard image={songs[1].image} title={songs[1].title}/>
            <RandomCard image={songs[2].image} title={songs[2].title}/>
            <RandomCard image={songs[3].image} title={songs[3].title}/>
            <RandomCard image={songs[4].image} title={songs[4].title}/>
            
        </div>
    )
}

export default RandomCards;