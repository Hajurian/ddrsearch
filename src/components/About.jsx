import { useEffect } from 'react'
import './About.css'
import Arrow from '/src/assets/arrow.png'
function About() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }
        })
      })
      useEffect(() => {
        const hiddenElements = document.querySelectorAll('.invisiblemove');
        hiddenElements.forEach((el) => observer.observe(el))
      }, [])
    return (
        <div className="aboutcontainer">
            <div className="aboutcontent">
                <h1 className="invisiblemove">About</h1>
                <p className='text invisiblemove'>This site is dedicated to providing all information DDR related in one single place. Made in ReactJS, this website contains everything from song searching to a song generator to useful links for any DDR player.</p>
            </div>
            <img src={Arrow}></img>
        </div>
    );
}
export default About;