import './Cards.css'
function Cards(props) {
    return(
        <div className="cardcontainer">
            <h1 className="title">{props.title}</h1>
            <div className="topcard">
                <img className="thumbnail" src={props.image}></img>
                <div className="cardtext">
                    <h1 className="artist">artist</h1>
                </div>
            </div>
            

        </div>
    )
}
export default Cards;