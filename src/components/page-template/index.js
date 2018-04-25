import React, { Component } from "react";
import Header from "components/header/";
import "./page-template.css";

class PageTemplate extends Component {
  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default PageTemplate;
