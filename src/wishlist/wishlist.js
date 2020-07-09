import React from "react";
import "./wishlist.css";
import DataService from "../Services/dataService";
import NotificationService, {
  NOTIF_WISHLIST_CHANGED,
} from "../Services/notification-service";
import ProductCondensed from "../product condensed/product-condensed";

let ns = new NotificationService();
class WishList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [],
    };

    this.createWishList = this.createWishList.bind(this);
    this.onWishListChanged = this.onWishListChanged.bind(this);
  }

  componentDidMount() {
    ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
  }

  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishListChanged(newWishList) {
    this.setState({ wishList: newWishList });
  }

  createWishList = () => {
    const list = this.state.wishList.map((product) => (
      <ProductCondensed product={product} key={product._id} />
    ));
    return list;
  };

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">WishList</h4>
          <ul className="list-group">{this.createWishList()}</ul>
        </div>
      </div>
    );
  }
}

export default WishList;
