import React from "react";

import HttpService from "../Services/http-service";

import WishList from "../wishlist/wishlist.js";
import Product from "../Product/product.js";

const http = new HttpService();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };

    //Binding functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(
      (data) => {
        // console.log(data);
        self.setState({ products: data });
      },
      (err) => {}
    );
  };

  productList = () => {
    const list = this.state.products.map((product) => (
      <div className="col-8 col-md-6" key={product._id}>
        <Product product={product} />
      </div>
    ));
    return list;
  };

  render() {
    return (
      <div>
        <div className="container App">
          <h1>Welcome to the Swag Shop.</h1>
        </div>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">{this.productList()}</div>
            </div>

            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
