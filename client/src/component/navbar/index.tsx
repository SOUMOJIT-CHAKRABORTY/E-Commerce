import React from "react";
import ShopSmartLogo from "../../assets/icons8-cart-64 1.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {};

const handleSignUp = () => {
  console.log("Clicked : sign up");
};
const handleSignIn = () => {
  console.log("Clicked: sign in");
};

const Navbar = (props: Props) => {
  return (
    <section className="navbar">
      {/* Icon */}
      <div className="nav-icon">
        <div>
          <img
            src={ShopSmartLogo}
            alt="shopsmart-logo"
            height="90px"
            width="100px"
          />
        </div>
        <div>ShopSmart</div>
      </div>
      {/* Search Bar */}
      <div className="nav-search-bar">
        <form className="search-from">
          <input
            type="text"
            className="search-form-input"
            placeholder="Search Product"
          />
        </form>
        <MagnifyingGlassIcon className="nav-search-icon" />
      </div>
      <div className="nav-sign-in" onClick={handleSignIn}>
        Sign In
      </div>
      <div className="nav-sign-up" onClick={handleSignUp}>
        Sign Up
      </div>
    </section>
  );
};

export default Navbar;
