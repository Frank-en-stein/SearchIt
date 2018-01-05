import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox/SearchBox';
import Cart from './Cart/Cart';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SearchBox/>
                <Cart/>
            </div>
        );
    }
}

export default App;
