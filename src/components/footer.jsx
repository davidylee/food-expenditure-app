import React, { Component } from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
// Stateless Functional Component

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <p class="copyright text-muted text-center">
          Made by David Young Lee 2019
        </p>
      </div>
    );
  }
}

export default Footer;
