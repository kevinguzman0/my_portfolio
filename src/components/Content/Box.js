const Box = ({children, ...props}) => {
    return (
        <div className={`col-md-4 box-one color-${props.color}`}>
            <div className="services">
                <span className={`icon font-${props.color}`}><ion-icon name={`${props.icon}`}></ion-icon></span>
                {children}
            </div>
        </div>
    )
}

export default Box