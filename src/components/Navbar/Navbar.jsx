import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css"
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const {isAuth, login, logout} = useContext(AuthContext);
  const {cart} = useContext(CartContext);
  const count = cart.length;

  const handleClick = () => {
    if(isAuth) {
      logout();
    } else {
      login();
    }
  }
  return (
    <div data-cy="navbar" className={styles.navbardiv}>
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <div className={styles.subdiv}>
      <span data-cy="navbar-cart-items-count">{`Cart : (${count})`}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}> {isAuth?"Logout" : "Login"} </button>
      </div>
    </div>
  );
};

export default Navbar;
