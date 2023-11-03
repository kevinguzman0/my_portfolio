import carousel2 from "../../img/carousel-2.jpg";
import carousel3 from "../../img/carousel-3.jpg";

import CarouselItem from "./CarouselItem";
const Home = () => {
  return (
    <div id="content-home">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselItem active="active" src={carousel2}>
            <h1>
              Hi! <br />
              I'm Kevin
            </h1>
          </CarouselItem>
          <CarouselItem active="" src={carousel3}>
            <h1>
              Mobile
              <br />
              Developer
            </h1>
          </CarouselItem>
        </div>
      </div>
    </div>
  );
};
export default Home;
