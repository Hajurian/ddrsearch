import { useState } from 'react';
import './Cards.css'
function Cards(props) {
    const [isActive, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!isActive);
    }
    return(
        <div className={isActive ? "cardcontainer expand" : "cardcontainer"} onClick={(e) => {
            toggleActive();
        }}>
            <div className="topcard">
                <a href={`https://www.youtube.com/results?search_query=ddr+${props.title}`} target='_blank'><img className="thumbnail" src={props.image}></img></a>
                <h1 className="title">{props.title}</h1>
            </div>
            <div className="cardtext">
                <h1 className="artist">By: {props.artist}</h1>
                <h1 className='version'>In: {props.version} </h1>
            </div>
            <div className="difficulties">
                <h1><span id="beginner">Beginner: </span>{props.beginner}</h1>
                <h1><span id="basic">Basic: </span>{props.basic}</h1>
                <h1><span id="difficult">Difficult: </span>{props.difficult}</h1>
                <h1><span id="expert">Expert: </span>{props.expert}</h1>
                <h1><span id="challenge">Challenge: </span>{props.challenge}</h1>
            </div>

        </div>
    )
}
export default Cards;