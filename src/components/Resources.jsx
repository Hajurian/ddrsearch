import './Resources.css'
function Resources() {
    function buttonFunction(e) {
        const direction = e.target.classList[1];
        const slides =document.querySelectorAll('.slide');
        let nextSlide;
        let index;
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('active')) {
                slides[i].classList.remove('active');
                index = i + (direction == 'next' ? 1 : -1);
                if (index < 0 || index > slides.length-1) { index = 0};
                nextSlide = slides[index]
                
            }
        }
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
                        <li className="slide active">
                            cat
                        </li>
                        <li className="slide">
                            fish
                        </li>
                        <li className="slide">
                            dog
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Resources;