import React from "react";

import UnderConstruction from "../../components/under-construction/under-construction.component";
import "./collection.style.scss";

const CollectionPage = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <UnderConstruction />
      <h2>{`${match.params.collectionId.toUpperCase()}: Please check the menu tab.`}</h2>
    </div>
  );
};

export default CollectionPage;
