import React from "react";
import './menu.css';

function Menu(props) {

  
  return (
    <div className="Menu">
    <h1 style={{color:props.col, fontWeight:"bolt", fontSize:props.fs}}>Такса </h1>
    </div>
  );
}

export default Menu;
