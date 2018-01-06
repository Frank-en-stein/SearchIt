/**
 * Created by home on 1/6/2018.
 */
import React, { Component } from 'react';
import './EachItem.css'

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
        this.setState({title: this.props.title.substring(0, 18) + "..."});
    }

    render() {
        return (
            <tr className="CartEachItem">
                <td>{parseInt(this.props.index, 10) + 1}</td>
                <td className="CartItemTitle" onMouseOver={this.handle_mouseover.bind(this)}
                    onMouseLeave={this.handle_mouseleave.bind(this)}>{this.state.title}</td>
                <td className="CartItemPrice">{"Tk" + this.props.price}</td>
            </tr>                
        );
    }
}

export default EachItem;