import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Menu from "components/menu";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="rw-page-header">
        <Grid>
          <Row>
            <Col md={12} className="rw-page-header__container">
              <div className="rw-page-logo">Page Logo</div>
              <Menu />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;
