import React from "react";
import "./products-condensed.css";
import DataService from "../Services/dataService";

let ds = new DataService();
class ProductCondensed extends React.Component {
  constructor(props) {
    super(props);

    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct() {
    ds.removeWishListItem(this.props.product);
  }

  render() {
    return (
      <li className="list-group-item">
        <a
          href="#"
          className="btn btn-outline-danger"
          onClick={() => this.removeProduct()}
        >
          X
        </a>
        {` ${this.props.product.title}`} | ${this.props.product.price}
      </li>
    );
  }
}

export default ProductCondensed;
