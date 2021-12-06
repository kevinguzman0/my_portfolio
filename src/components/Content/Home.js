import carousel1 from "../../img/carousel-1.jpg";
import carousel2 from "../../img/carousel-2.jpg";
import CarouselItem from './CarouselItem'
const Home = () => {
    return (
        <div id="content-home">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <CarouselItem active="active" src={carousel1} >
                        <h1>Hi! <br />I'm Kevin</h1>
                    </CarouselItem>
                    <CarouselItem active="" src={carousel2} >
                        <h1>I am <br />Developer</h1>
                    </CarouselItem>
                </div>
            </div>
        </div>
    )
}
export default Home