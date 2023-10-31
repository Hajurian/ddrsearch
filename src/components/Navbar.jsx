import './Navbar.css'
function Navbar() {
    return (
        <div className="navcontainer">
            <img src="" alt="logo"></img>
            <button type="button"><a href="#anchorabout">About</a></button>
            <button type="button"><a href="#anchorsearch">Search</a></button>
            <button type="button"><a href="#anchorresource">Resources</a></button>
            <button type="button"><a href="#anchorsongpicker">Song Picker</a></button>
        </div>
    );
}
export default Navbar;