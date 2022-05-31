import Container from "../Container/Container";
import React from "react";
import "./Navbar.css";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <nav>
      <Container className='nav-cont'>
        <div className='logo'>
          <LunchDiningIcon className='burger-icon' />
          <h1>Hungreis</h1>
        </div>
        <div className='menu-icon-cont'>
          <MenuIcon className='menu-icon' />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
