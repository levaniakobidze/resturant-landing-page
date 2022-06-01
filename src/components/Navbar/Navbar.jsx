import Container from "../Container/Container";
import React, { useState } from "react";
import "./Navbar.css";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(() => !menu);
  };

  return (
    <nav>
      <Container className='nav-cont'>
        <div className='logo'>
          <LunchDiningIcon className='burger-icon' />
          <h1>Hungreis</h1>
        </div>
        <div className='menu-icon-cont' onClick={handleClick}>
          <MenuIcon className='menu-icon' />

          <ul className={menu ? "nav-menu active-menu" : "nav-menu"}>
            <li onClick={() => setMenu(false)}>
              <a href='#home'>Home</a>
            </li>
            <li onClick={() => setMenu(false)}>
              <a href='#featured'>Featured</a>
            </li>
            <li onClick={() => setMenu(false)}>
              <a href='#categories'>Categories</a>
            </li>
            <li onClick={() => setMenu(false)}>
              <a href='#subscribe'>Subscribe</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
