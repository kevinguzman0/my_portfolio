const InformationBasic = ({...props}) => {
    return (
        <div className="row">
                <div className="col-md-12">
                    <div className="desc-about">
                        <span className="title-about">{props.span}</span>
                        <h2 className="subtitle-about">{props.h2}</h2>
                        <p>{props.p}</p>
                    </div>
                </div>
            </div>
    )
}
export default InformationBasic