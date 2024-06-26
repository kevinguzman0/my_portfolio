import React from "react";

function IconInfoProject({ item, visible, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`icono-container ${visible ? "mostrar" : ""}`}
      style={{
        background: item.color,
        borderRadius: "50px",
        padding: "2px 5px",
        cursor: !item.name ? "pointer" : "auto",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.name && visible && <div className="nombre">{item.name}</div>}
      {item.icon}
    </div>
  );
}

export default IconInfoProject;
