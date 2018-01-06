/**
 * Created by home on 1/6/2018.
 */
import React, { Component } from 'react';
import './EachItem.css';

class EachItem extends Component {
    constructor() {
        super();

        this.state = {
            title: ''
        };
    }

    componentWillMount() {
        this.setState({title: this.props.title.substring(0,18)+"..."});
    }

    handle_mouseover() {
        this.setState({title: this.props.title});
    }
    handle_mouseleave() {
        this.setState({title: this.props.title.substring(0,18)+"..."});
    }
    render() {
        return(
            <div className="EachItem" id={this.props.index}>
                <img className="ItemImage" alt="Item" src={this.props.imgsrc}/>
                <div className="PriceTag"><h5>{"Tk " + this.props.price}</h5></div>
                <h4 onMouseOver={this.handle_mouseover.bind(this)} onMouseLeave={this.handle_mouseleave.bind(this)}>
                    {this.state.title}
                </h4>
                <div>
                    <button className="btn btn-success AddToCart" id={"" + this.props.index} onClick={this.props.add2cart.bind(this)}>
                        +<span className="glyphicon glyphicon-shopping-cart"></span> Cart
                    </button>
                </div>
            </div>
        );
    }
}
export default EachItem;