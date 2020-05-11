import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	itemCount: cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity,
		0
	)
});

const mapDispathToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
