/**
 * Created by home on 1/5/2018.
 */
import React, { Component } from 'react';
import KeyBinding from 'react-keybinding-component';
import './SearchBox.css';
import EachItem from './EachItem.js';


class SearchBox extends Component {

    constructor() {
        super();

        this.state = {
            searchResultState: 'init',   //values: 'init', 'loading', 'items'
            query: '',
            items: []
        };
    }
    
    add_to_cart(e) {
        var obj = this.state.items[parseInt(e.target.id, 10)];
        if(typeof obj !== 'undefined') {
            this.props.update_app_cart(obj);
        }
    }

    decide() {
        if(this.state.searchResultState==="init") {
            return (
                <div className="NoItemsInSearchBox">
                    <h2>What'll you buy today?</h2>
                </div>
            );
        }
        else if(this.state.searchResultState==='loading') {
            return (
                <div className="NoItemsInSearchBox">
                    <div className="Loading">
                        <h2><span className="glyphicon glyphicon-refresh"></span></h2>
                        <h2>Loading...</h2>
                    </div>
                </div>
            );
        }
        else if(this.state.items.length===0) {
            return (
                <div className="NoItemsInSearchBox">
                    <h2>Sorry, that thing doesn't seem to exist. Try anything else?</h2>;
                </div>
            );
        }
        else{
            return (
                <div className="SearchedItems" id="style-6">
                    {
                        this.state.items.map((xItem, index) => {
                            return (
                                <EachItem
                                    key={xItem._id}
                                    id={xItem._id}
                                    imgsrc={xItem._source.images[0]}
                                    price={xItem._source.price}
                                    title={xItem._source.title}
                                    add2cart={this.add_to_cart.bind(this)}
                                    index={index}
                                />
                            );
                        })
                    }
                </div>
            );
        }
    }

    set_query(e) {
        this.setState({
            query: e.target.value,
            searchResultState: (e.target.value==='' ? 'init': this.state.searchResultState)
        });
    }

    handle_search() {
        if(this.state.query==='') {
            return alert('Please enter something in the search box');
        }
        else {
            this.setState({searchResultState: 'loading'});

            var url = "http://es.backpackbang.com:9200/products/amazon/_search?q=title:" + this.state.query;
            fetch(url).then(res => res.json()).then(
                (result) => {
                    this.setState({
                        items: result.hits.hits,
                        searchResultState: 'items'
                    });
                }
            );
        }
    }

    render() {
        return (
            <div className="SearchBox">
                <KeyBinding onKey={ (e) => { if(e.keyCode===13) this.handle_search()} } type='keyup' elem={ window } />
                <div className="SearchField">
                    <div className="SearchFieldSpacer"></div>
                    <div className="SearchInput">
                        <button id="searchSubmit" type="button" className="btn btn-default btn-sm" onClick={this.handle_search.bind(this)}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                        <input id="searchInput" type="text" name="search" onChange={this.set_query.bind(this)} placeholder="Search..."/>
                    </div>
                </div>
                <div className="SearchResults">
                    {this.decide()}
                </div>
            </div>
        );
    }
}

export default SearchBox;
