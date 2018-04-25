import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="rw-page-footer">
        <Grid>
          <Row>
            <Col md={12}>Page Footer</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
