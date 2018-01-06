import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox/SearchBox';
import Cart from './Cart/Cart';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: []
        }
    }
    
    update_app_cart(c) {
        var tmp = this.state.cart;
        tmp.push(c);
        this.setState({cart: tmp});
    }
    
    empty_cart() {
        var tmp = [];
        this.setState({cart: tmp});
    }

    render() {
        return (
            <div className="App">
                <SearchBox update_app_cart={this.update_app_cart.bind(this)}/>
                <Cart items={this.state.cart} empty_callback={this.empty_cart.bind(this)}/>
            </div>
        );
    }
}

export default App;
