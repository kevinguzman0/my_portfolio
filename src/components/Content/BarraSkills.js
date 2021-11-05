const BarraSkills = ({...props}) => {
    return (
        <div className="col-md-6">
            <div className="progress-skills">
                <h4>{props.skill}</h4>
                <div className="progress" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${props.porcentaje}`, backgroundColor: `${props.colorbar}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}
export default BarraSkills