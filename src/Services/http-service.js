import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3000/product").then((res) => {
        resolve(res.json());
      });
    });

    return promise;
  };
}

export default HttpService;
