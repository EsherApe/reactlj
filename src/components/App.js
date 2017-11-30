import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import 'react-select/dist/react-select.css';
import Counter from './Counter';
import './Filters';
import Filters from "./Filters/index";
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <ul>
                            <li><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></li>
                            <li><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></li>
                            <li><NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink></li>
                        </ul>
                    </div>
                    <Route path="/counter" component={Counter}/>
                    <Route path="/filters" component={Filters}/>
                    <Route path="/articles" component={ArticleList}/>
                </div>
            </Router>
        )
    }
}

export default App;