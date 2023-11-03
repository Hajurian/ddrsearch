import './Resources.css'
import Slide from './Slide';

function Resources() {

    function buttonFunction(e) {
        const direction = e.target.classList[1];
        const slides = document.querySelectorAll('.slide');
        let nextSlide;
        let index;
        let indexR;
        let indexL;
        let indexPos = [];
        let indexH;
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('left')
            slides[i].classList.remove('right')
            slides[i].classList.remove('hidden')
            if (slides[i].classList.contains('active')) {
                slides[i].classList.remove('active');
                index = i + (direction == 'next' ? 1 : -1);
                if (index > slides.length - 1) {
                    index = 0;
                } else if (index < 0) {
                    index = slides.length - 1;
                }
                indexL = index - 1;
                indexR = index + 1;
                if (indexL < 0) {
                    indexL = slides.length - 1;
                    indexR = index + 1;
                }
                if (indexR > slides.length - 1) {
                    indexR = 0;
                    indexL = index - 1;
                }
                nextSlide = slides[index];
                
            }
            indexPos.push(i);
        }
        indexPos.forEach(indice => {
            if (index != indice && indexL != indice && indexR != indice) {
                indexH = indice;
            }
        })
        slides[indexH].classList.add('hidden');
        slides[indexL].classList.add('left');
        slides[indexR].classList.add('right');
        nextSlide.classList.add('active');
    }
    return (
        <div className="resourcecontainer">
            <div className="resourcecontent">
                <h1>
                    Resources
                </h1>
                <div className="carousel">
                    <button className="carousel-button prev" onClick={(e) => {
                        buttonFunction(e)
                    }}>&#8656;</button>
                    <button className="carousel-button next" onClick={(e) => {
                        buttonFunction(e)
                    }}>&#8658;</button>
                    <ul>
                        <Slide content="cat" direction="left" />
                        <Slide content="fish" direction="active" />
                        <Slide content="dog" direction="right" />
                        <Slide content="banana" direction="hidden" />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Resources;