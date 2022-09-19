import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParathaList } from '../data/parathas';
import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';

class App extends Component {
//state
  state = {
    order: [],
    orderTotal: 0,
    checkoutTotal: 0,
  }
  addToOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = + order[key] + 1  || 1;
    const newTotal = this.state.orderTotal + ParathaList[key].price;

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }

  addoffer = (key) => {
    const order = { ...this.state.order};
    order[key] = + order[key] + 1  || 1;
    const newTotal = this.state.orderTotal + ParathaList[key].price;

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }


  removeFromOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = order[key] - 1;
    let newTotal = this.state.orderTotal - (ParathaList[key].price);

    if(order[key] === 0) {
      newTotal = this.state.orderTotal - ParathaList[key].price;
      delete order[key];
    }

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }



 render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' render={ (props) =>
              <Home {...props}
              updatePostcode={this.updatePostcode} /> } />
            <Route exact path='/menu' render={ (props) =>
              <Menu {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                order={this.state.order} /> } />
            <Route exact path='/cart' render={ (props) =>
              <Cart {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                removeFromOrder={this.removeFromOrder}
                order={this.state.order}
                updateCheckoutTotal={this.updateCheckoutTotal} /> } />
                  </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
