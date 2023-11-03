import { HashLink as Link } from "react-router-hash-link";

const ItemsMenu = ({ children, ...props }) => {
  return (
    <Link
      smooth
      to={props.to ? props.to : ""}
      onClick={props.onClick}
      className={props.class}
    >
      {children}
    </Link>
  );
};

export default ItemsMenu;
