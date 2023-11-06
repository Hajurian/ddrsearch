import './Resources.css'
import Slide from './Slide';
import Remywiki from '/src/assets/remywiki.png'
import A3logo from '/src/assets/A3logo.png'
import Docs from '/src/assets/docs.png'
import Youtube from '/src/assets/Youtube.png'

function Resources() {
    const slideStuff = [{
        title: "Remywiki",
        description: "A wiki site containing information for most Bemani games",
        direction: "left",
        link: "https://remywiki.com/DanceDanceRevolution_Information",
        key: "1"
    },
    {
        title: "DDR official page",
        description: "The official DDR A3 website",
        direction: "active",
        link: "https://p.eagate.573.jp/game/ddr/ddra3/p/info/index.html",
        key: "2"
    },
    {
        title: "Yuisin's Youtube",
        description: "Yuisin's YouTube channel where most DDR songs can be found",
        direction: "right",
        link: "https://www.youtube.com/@fumenity",
        key: "3"
    },
    {
        title: "Grand prix Setup Doc",
        description: "A google document with detailed instruction on setting up DDR GP",
        direction: "hidden",
        link: "https://docs.google.com/document/d/1FbZOxO50Vmxs33U44rIzEwtSMyqYGl1BJ-8GCg5s_b0/edit#",
        key: "4"
    }]
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
                        <Slide image={Remywiki} link={slideStuff[0].link} title={slideStuff[0].title} description={slideStuff[0].description} direction={slideStuff[0].direction} key={slideStuff[0].key} />
                        <Slide image={A3logo} link={slideStuff[1].link} title={slideStuff[1].title} description={slideStuff[1].description} direction={slideStuff[1].direction} key={slideStuff[1].key} />
                        <Slide image={Youtube} link={slideStuff[2].link} title={slideStuff[2].title} description={slideStuff[2].description} direction={slideStuff[2].direction} key={slideStuff[2].key} />
                        <Slide image={Docs} link={slideStuff[3].link} title={slideStuff[3].title} description={slideStuff[3].description} direction={slideStuff[3].direction} key={slideStuff[3].key} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Resources;