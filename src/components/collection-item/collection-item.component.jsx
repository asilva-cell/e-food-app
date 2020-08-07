import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price} CAD`}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to bag
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
