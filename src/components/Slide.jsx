function Slide(props) {
    let classes = `slide ${props.direction}`
    return (
        <div className={classes}>
            <div className="slidecontent">
                <a href={props.link} target="_blank"><img src={props.image}></img></a>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default Slide;