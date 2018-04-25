import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="rw-page-header">
        <Grid>
          <Row>
            <Col md={12}>Page Header</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;
