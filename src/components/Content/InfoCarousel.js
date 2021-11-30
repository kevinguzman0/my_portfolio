import CV from '../../files/CV.pdf'

const InfoCarousel = ({children, ...props}) => {
    return (
        <div className="info-carousel" >
            <div className="title-home animate__animated animate__fadeInUp animate__slow">
                {children}
                <p>
                    <a href={CV} className="btn btn-primary download-cv" download>Download CV</a>
                </p>
            </div>
        </div>
    )
}
export default InfoCarousel