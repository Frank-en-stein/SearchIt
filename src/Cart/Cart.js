/**
 * Created by home on 1/5/2018.
 */
import React, { Component } from 'react';
import './Cart.css'
import EachItem from './EachItem.js';

class Cart extends Component {
    
    empty_cart() {
        this.props.empty_callback();
    }

    handle_items() {
        return (
            this.props.items.length===0 ?
                <div className="NoItemsInCart">
                    <h3>You have no item in your cart</h3>
                </div>
                :
                <table className="table">
                    <tbody className="CartItemsList">
                    {
                        this.props.items.map((item, index) => {
                            return (
                                typeof item !== 'undefined' ?
                                    <EachItem
                                        key={index}
                                        index={index}
                                        title={item._source.title}
                                        price={item._source.price}
                                    />
                                    :
                                    <br/>
                            );
                        })
                    }
                    </tbody>
                </table>
        );
    }

    render() {
        return (
            <div className="Cart">
                <div className="CartTitle">
                    <div className="ClearCart"></div>
                    <div className="CartTitleText">
                        <h2><span className="glyphicon glyphicon-shopping-cart"></span><strong> Cart</strong></h2>
                    </div>
                    <div className= {this.props.items.length===0? "ClearCart ClearCartDisabled" : "ClearCart ClearCartEnabled"}>
                        <a onClick={this.empty_cart.bind(this)}><span className="glyphicon glyphicon-trash"></span><p>Clear Cart</p></a>
                    </div>
                </div>
                <div className="CartItems">
                    {this.handle_items()}
                </div>
            </div>
        );
    }
}
export default Cart;
