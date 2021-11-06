const InputForm = ({...props}) => {
    return (
        <div className="col-md-12">
            <div className="form-group">
                <input type={`${props.type ? props.type : ''}`} id={`${props.id ? props.id : ''}`} className="form-control" name={`${props.name}`} placeholder={`${props.place}`} />
            </div>
        </div>
    )
}
export default InputForm