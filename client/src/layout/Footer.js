import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";

const Footer = () => (
  <Fragment>
    <Grid fluid>
      <Row>
        <Col md={12} xs={12} className="footer">
          <a href="https://github.com/aykutyilmaz37">Aykut Yılmaz</a>
        </Col>
      </Row>
    </Grid>
  </Fragment>
);

export default Footer;
