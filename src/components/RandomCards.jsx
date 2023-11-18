import ScrapedData from '../songdata.json'
function RandomCards(props) {
    const data = [];
    data.push({ ScrapedData });
    const songList = data[0].ScrapedData;
    const songs = [];
    const songsDiff=[];
    let count = 1;
    let nullCheck = 0;
    while (count <= 5 && nullCheck < 100) {
        let version = props.versions[Math.floor(Math.random() * props.versions.length)];
        let potentialsong = songList[version][Math.floor(Math.random() * songList[version].length)];
        
        if (hasDifficulty(potentialsong) == null) {
            nullCheck++;
            continue;
        } else {
            songs.push(potentialsong);
            count++;
        }
    }
    function hasDifficulty(song) {
        let potentialDiffs = [];
        if (parseInt(song.beginner) >= props.min && parseInt(song.beginner) <= props.max) {
            potentialDiffs.push(`bSP-${song.beginner}`);
        }
        if (parseInt(song.basic) >= props.min && parseInt(song.basic) <= props.max) {
            potentialDiffs.push(`BSP-${song.basic}`);
        }
        if (parseInt(song.difficult) >= props.min && parseInt(song.difficult) <= props.max) {
            potentialDiffs.push(`DSP-${song.difficult}`);
        }
        if (parseInt(song.expert) >= props.min && parseInt(song.expert) <= props.max) {
            potentialDiffs.push(`ESP-${song.expert}`);
        }
        if (parseInt(song.challenge) >= props.min && parseInt(song.challenge) <= props.max) {
            potentialDiffs.push(`CSP-${song.challenge}`);
        }
        
        if (potentialDiffs.length == 0) {
            return null;
        }
        const ss = potentialDiffs[Math.floor(Math.random() * potentialDiffs.length)];
        songsDiff.push(ss);
        return ss;
        
        
        
    }
    function RandomCard(props) {
        return (
            <div className="randomcard">
                <div className="topcard">
                    <img className="thumbnail" src={props.image}></img>
                    <h1 className="title">{props.title}</h1>
                </div>
                <h1 className='difficulty'>{props.difficulty}</h1>
            </div>
        )
    }
    if (nullCheck < 100) {
        return(
            <div className="randomcardcontainer">
                <RandomCard image={songs[0].image} title={songs[0].title} difficulty={songsDiff[0]}/>
                <RandomCard image={songs[1].image} title={songs[1].title} difficulty={songsDiff[1]}/>
                <RandomCard image={songs[2].image} title={songs[2].title} difficulty={songsDiff[2]}/>
                <RandomCard image={songs[3].image} title={songs[3].title} difficulty={songsDiff[3]}/>
                <RandomCard image={songs[4].image} title={songs[4].title} difficulty={songsDiff[4]}/>
            </div>
        )
    } else {
        return (
            <div className="error">
                <h1>This version does not contain a difficulty within {props.min} and {props.max}</h1>
            </div>
        )
    }
}

export default RandomCards;