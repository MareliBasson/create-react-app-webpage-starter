import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "components/header";
import Footer from "components/footer";
import { Grid, Row, Col } from "react-bootstrap";
import "./page-template.css";

class PageTemplate extends Component {
  render() {
    const { children } = this.props;
    const pageHead = this.props.pageHead;

    return (
      <div className="rw-page">
        <Header />
        <div className="rw-page-content">
          <Grid>
            <Row>
              <Col md={12}>
                <h1>{pageHead}</h1>
                {children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

PageTemplate.propTypes = {
  children: PropTypes.any,
  pageHead: PropTypes.string
};

export default PageTemplate;
