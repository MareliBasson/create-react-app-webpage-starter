import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="rw-page-header">
        <a href="#">menu item 1</a>
        <a href="#">menu item 2</a>
        <a href="#">menu item 3</a>
      </div>
    );
  }
}

export default Menu;
