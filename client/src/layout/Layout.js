import React from "react";
import { Grid, Row } from "react-bootstrap";

// #region Import JSX
import Header from "./Header";
import Footer from "./Footer";
// #endregion
const Layout = props => (
  <Grid fluid>
    <Row>
      <header>
        <Header />
      </header>
      <main>
        <Grid>
          <Row>{props.children}</Row>
        </Grid>
      </main>
      <footer>
        <Footer />
      </footer>
    </Row>
  </Grid>
);

export default Layout;
