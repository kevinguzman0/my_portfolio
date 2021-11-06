
const BoxProject = ({ ...props }) => {
    return (
        <div className="col-md-6 content-box-project">
            <div className="box-project" style={{ backgroundImage: `url(${props.image})` }}>
                <div className="desc">
                    <div className="con">
                        <h3><a href={`${props.link}`} target="blank">{props.title}</a></h3>
                        <span>{props.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BoxProject