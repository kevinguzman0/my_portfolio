import InfoCarousel from './InfoCarousel'

const CarouselItem = ({ children, ...props }) => {
    return (
        <div className={`carousel-item ${props.active}`}>
            <InfoCarousel>
                {children}
            </InfoCarousel>

            <img src={props.src} className="d-block w-100" alt="No encontrado" height="950px" />
        </div>
    )
}
export default CarouselItem