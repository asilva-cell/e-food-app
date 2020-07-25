import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.style.scss";

const CollectionPage = ({ match }) => {
	console.log(match);
	return (
		<div className="collection-page">
			<h1>collection page</h1>
			<h2>{`${match.params.collectionId.toUpperCase()} PAGE FOR NOW`}</h2>
		</div>
	);
};

export default CollectionPage;
