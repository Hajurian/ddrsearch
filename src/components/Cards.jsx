import './Cards.css'
function Cards(props) {
    return(
        <div className="cardcontainer">
            <h1 className="title">{props.title}</h1>
            <div className="topcard">
                <a href=""><img className="thumbnail" src={props.image}></img></a>
                <div className="cardtext">
                    <h1 className="artist">Artist: </h1>
                    <h1 className='version'>Version: </h1>
                </div>
            </div>
            <div className="difficulties">
                <h1><span id="beginner">Beginner: </span></h1>
                <h1><span id="basic">Basic: </span></h1>
                <h1><span id="difficult">Difficult: </span></h1>
                <h1><span id="expert">Expert: </span></h1>
                <h1><span id="challenge">Challenge: </span></h1>
            </div>

        </div>
    )
}
export default Cards;