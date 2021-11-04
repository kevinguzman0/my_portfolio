import blanco from "../../img/blanco.jpg";

const HomeCarousel = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={blanco} className="d-block w-100" alt="No encontrado" height="950px" />
                    </div>
                    <div className="carousel-item">
                        <img src={blanco} className="d-block w-100" alt="No encontrado" height="950px" />
                    </div>
                    <div className="carousel-item">
                        <img src={blanco} className="d-block w-100" alt="No encontrado" height="950px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeCarousel