/**
 * Created by home on 1/5/2018.
 */
import React, { Component } from 'react';
import KeyBinding from 'react-keybinding-component';
import './SearchBox.css'


class SearchBox extends Component {

    constructor() {
        super();

        this.state = {
            searchResultState: 'init',   //values: 'init', 'loading', 'items'
            query: '',
            items: []
        };
    }

    decide() {
        let whatToReturn = <h2>What'll you buy today?</h2>;
        if(this.state.searchResultState==='loading') {
            whatToReturn =
                <div className="Loading">
                    <h2><span className="glyphicon glyphicon-refresh"></span></h2>
                    <h2>Loading...</h2>
                </div>
        }
        else if(this.state.items.length===0 && this.state.searchResultState!=="init") {
            whatToReturn = <h2>Sorry, that thing doesn't seem to exist. Try anything else?</h2>;
        }

        return (
            <div className="NoItemsInSearchBox">
                {whatToReturn}
            </div>
        );
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
                    <div className="SearchedItems">
                        <div>
                            <img alt="lala" src="https://images-na.ssl-images-amazon.com/images/I/81V4qL-WfjL._UL900_.jpg"/>
                        </div>
                    </div>
                    <div className="SearchedItems">
                        <div>
                            <img alt="lala" src="https://images-na.ssl-images-amazon.com/images/I/81V4qL-WfjL._UL900_.jpg"/>
                        </div>
                    </div>
                    <div className="SearchedItems">
                        <div>
                            <img alt="lala" src="https://images-na.ssl-images-amazon.com/images/I/81V4qL-WfjL._UL900_.jpg"/>
                        </div>
                    </div>
                    <div className="SearchedItems">
                        <div>
                            <img alt="lala" src="https://images-na.ssl-images-amazon.com/images/I/81V4qL-WfjL._UL900_.jpg"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default SearchBox;
