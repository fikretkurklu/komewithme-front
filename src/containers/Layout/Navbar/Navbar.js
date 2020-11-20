import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../actions/auth";

import { Menu, Image, Button, Icon } from "semantic-ui-react";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [activeLink, setActiveLink] = useState();

  const handleLinkClick = (e, { name }) => {
    setActiveLink(name);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const rightMenu = user ? (
    <>
      <Menu.Item>
        <p>
          Signed in as : <Link to="/profile">{user.username}</Link>
        </p>
      </Menu.Item>
      <Menu.Item name="login">
        <Button onClick={handleLogout} color="orange">
          Logout
        </Button>
      </Menu.Item>
    </>
  ) : (
    <>
      <Menu.Item name="login">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item name="register">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </>
  );

  return (
    <Menu>
      <Menu.Item
        name="home"
        active={activeLink === "home"}
        onClick={handleLinkClick}
      >
        <Link to="/">
          <Icon name="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item
        name="kome"
        active={activeLink === "kome"}
        onClick={handleLinkClick}
      >
        <Link to="/kome">
          <Icon name="add" />
          Kome
        </Link>
      </Menu.Item>
      <Menu.Item
        name="profile"
        active={activeLink === "profile"}
        onClick={handleLinkClick}
      >
        <Icon name="user" />
        Profile
      </Menu.Item>
      <Menu.Menu position="right">{rightMenu}</Menu.Menu>
    </Menu>
  );
};

export default Navbar;
