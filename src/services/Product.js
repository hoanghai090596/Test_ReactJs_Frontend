import React, { Component } from "react";

export class Product extends Component {
  constructor() {
    super();
    this.productApi = "http://localhost:3004/posts";
  }

  getproduct = async () => {
    const response = await fetch(this.productApi);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
    }
  };
  render() {
    this.getproduct();
    return <div>Product</div>;
  }
}

export default Product;
