const ItemsMenu = ({ children, ...props }) => {
    return (
        <a className={props.class} href={props.href}>{children}</a>
    )
}

export default ItemsMenu