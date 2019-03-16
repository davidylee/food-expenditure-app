/*
import React, { Component } from "react";

const foodexpenditureItems = [
  {
    id: 1,
    date: "2019-03-13",
    name: "Test Item 1",
    price: 10
  },
  {
    id: 2,
    date: "2019-03-15",
    name: "Test Item 2",
    price: 12.0
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: foodexpenditureItems
    };
  }
  renderItems = () => {
    const newItems = this.state.itemList;
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className={`foodexpenditure-title mr-2`} title={item.}>
          {item.name}
        </span>
        <span>
          <button className="btn btn-secondary mr-2"> Edit </button>
          <button className="btn btn-danger">Delete </button>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">
          Food Expenditure Tracking app
        </h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button className="btn btn-primary">Add Item</button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
*/

import React, { Component } from "react";
import NavBar from "./components/navbar";

const foodexpenditureItems = [
  {
    id: 1,
    date: "2019-03-13",
    name: "Panera Small Coffee",
    price: 2.39
  },
  {
    id: 2,
    date: "2019-03-15",
    name: "Test Item 2",
    price: 12.01
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: foodexpenditureItems
    };
  }
  renderItems = () => {
    const newItems = this.state.itemList;
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className={"col-sm"}>{item.date}</span>
        <span className={"col-sm"}>{item.name}</span>
        <span className={"col-sm"}>{item.price}</span>
        <span>
          <button className="btn btn-secondary mr-2"> Edit </button>
          <button className="btn btn-danger">Delete </button>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-center my-4">
          Food Expenditure Tracking App
        </h1>
        <NavBar />
        <div className="row">
          <div className="col-md-10 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="add-item-button">
                <button className="btn btn-primary">Add Item</button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;
