import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "components/header/";
import { Grid, Row, Col } from "react-bootstrap";
import "./page-template.css";

class PageTemplate extends Component {
  render() {
    const { children } = this.props;
    const pageHead = this.props.pageHead;

    return (
      <div className="page">
        <Header />
        <Grid>
          <Row>
            <Col md={12} xsHidden>
              <h1>{pageHead}</h1>
              {children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

PageTemplate.propTypes = {
  children: PropTypes.any,
  pageHead: PropTypes.string
};

export default PageTemplate;
