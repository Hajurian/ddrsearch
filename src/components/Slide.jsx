function Slide(props) {
    let classes = `slide ${props.direction}`
    return (
        <div className={classes}>
            <img src="" alt="image"></img>
            <h1>
                {props.content}
            </h1>
        </div>
    );
}
export default Slide;