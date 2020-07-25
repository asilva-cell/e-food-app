import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/crat-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/e-food-app/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/e-food-app/shop">
        MENU
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// createStructureSelect passes the higher state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
