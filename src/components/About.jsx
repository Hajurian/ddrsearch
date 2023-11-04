import './About.css'
import Arrow from '/src/assets/arrow.png'
function About() {
    return (
        <div className="aboutcontainer">
            <div className="aboutcontent">
                <h1>About</h1>
                <p className='text'>This site is dedicated to providing all information DDR related in one single place. Made in ReactJS, this website contains everything from song searching to a song generator to useful links for any DDR player.</p>
            </div>
            <img src={Arrow}></img>
        </div>
    );
}
export default About;