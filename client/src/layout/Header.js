import React, { Component, Fragment } from "react";
import { Row, Navbar} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar inverse collapseOnSelect>
          <Row>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand"><i className="glyphicon glyphicon-star"></i> React & Redux Başlangıç Kiti</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Row>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
