import './Navbar.css'
import Logo from '/src/assets/arrow.png'
function Navbar() {
    return (
        <div className="navcontainer">
            <img src={Logo} alt="logo"></img>
            <h1>DDRSearch</h1>
            <div className="buttoncontainer">
                <button type="button"><a href="#anchorabout">About</a></button>
                <button type="button"><a href="#anchorsearch">Search</a></button>
                <button type="button"><a href="#anchorresource">Resources</a></button>
                <button type="button"><a href="#anchorsongpicker">Song Picker</a></button>
            </div>
        </div>
    );
}
export default Navbar;