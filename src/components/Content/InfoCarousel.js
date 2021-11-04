const InfoCarousel = ({children, ...props}) => {
    return (
        <div className="info-carousel">
            <div className="title-home">
                {children}
                <p>
                    <a href="#1" className="btn btn-primary download-cv">Download CV</a>
                </p>
            </div>
        </div>
    )
}
export default InfoCarousel