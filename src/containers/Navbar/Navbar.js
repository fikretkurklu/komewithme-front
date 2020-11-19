import { React, useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState();

  const handleLinkClick = (e, { name }) => {
    setActiveLink(name);
  };

  return (
    <Menu secondary>
      <Menu.Item>
        <Link to="/">
          <img width="100" src="/kwmlogo.png" />
        </Link>
      </Menu.Item>

      <Menu.Item
        name="home"
        active={activeLink === "home"}
        onClick={handleLinkClick}
      />
      <Menu.Item
        name="posts"
        active={activeLink === "posts"}
        onClick={handleLinkClick}
      >
        Posts
      </Menu.Item>
      <Menu.Item
        name="friends"
        active={activeLink === "friends"}
        onClick={handleLinkClick}
      />
      <Menu.Menu position="right">
        <Menu.Item name="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item name="register">
          <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
