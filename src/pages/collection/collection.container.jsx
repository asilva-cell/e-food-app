import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import CollectionPage from "./collection.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  LoadingSpinner
)(CollectionPage);

export default CollectionPageContainer;
