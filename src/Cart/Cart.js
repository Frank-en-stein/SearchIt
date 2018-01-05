/**
 * Created by home on 1/5/2018.
 */
import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    empty_cart() {
        this.setState({items:[]});
    }

    handle_items() {
        if(this.state.items.length===0) {
            return (
                <div className="NoItemsInCart">
                    <h3>You have no item in your cart</h3>
                </div>
            );
        }
        else {

        }
    }

    render() {
        return (
            <div className="Cart">
                <div className="CartTitle">
                    <div className="ClearCart"></div>
                    <div className="CartTitleText">
                        <h2><span className="glyphicon glyphicon-shopping-cart"></span><strong> Cart</strong></h2>
                    </div>
                    <div className= {this.state.items.length===0? "ClearCart ClearCartDisabled" : "ClearCart ClearCartEnabled"}>
                        <a onClick={this.empty_cart.bind(this)}><span className="glyphicon glyphicon-trash"></span><p>Clear Cart</p></a>
                    </div>
                </div>
                <div className="CartItems">
                    {
                        (this.handle_items())
                    }
                </div>
            </div>
        );
    }
}
export default Cart;
