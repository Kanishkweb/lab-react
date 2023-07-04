import React, { Component } from 'react';
import {  Link } from "react-router-dom"
class Navbar extends Component {
  render() {
    const navStyle = {
      backgroundColor: 'lightgray',
      padding: '10px',
    };

    const linkStyle = {
      marginRight: '10px',
      color: 'black',
      textDecoration: 'none',
    };

    return (
      <div style={navStyle}>
        <li style={linkStyle}><Link to="/">Homepage</Link></li>
        <li style={linkStyle}><Link to="/about" >About</Link></li>
      </div>
    );
  }
}

export default Navbar;
