import blanco from "../../img/blanco.webp";
import CarouselItem from './CarouselItem'
const HomeCarousel = () => {
    return (
        <div id="content-home">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <CarouselItem active="active" src={blanco} >
                        <h1>Hi! <br />I'm Kevin</h1>
                    </CarouselItem>
                    <CarouselItem active="" src={blanco} >
                        <h1>I am <br />Developer</h1>
                    </CarouselItem>
                </div>
            </div>
        </div>
    )
}
export default HomeCarousel