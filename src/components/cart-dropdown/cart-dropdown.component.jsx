import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdwon.style.scss";

const CartDropdown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		<div className="cart-itemS">
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty.</span>
			)}
		</div>
		<CustomButton onClick={() => history.push("/checkout")}>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

//createStructuredSelector passes the higher state
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
