import PropTypes from "prop-types";
import React from "react";

import Navbar from "./navbar/navbar";

const Header = ({ siteTitle }) => (
  <header>
    <Navbar title={siteTitle} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
