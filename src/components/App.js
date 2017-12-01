import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './routes/Articles';
import CommentsPage from './routes/CommentsPage';
import NotFound from './routes/NotFound';
import 'react-select/dist/react-select.css';
import Counter from './Counter';
import './Filters';
import Filters from './Filters/index';
import {Route, NavLink, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import history from '../history';

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <ConnectedRouter history = {history}>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <ul>
                            <li><NavLink activeStyle={{color: 'red'}} to='/counter'>Counter</NavLink></li>
                            <li><NavLink activeStyle={{color: 'red'}} to='/filters'>Filters</NavLink></li>
                            <li><NavLink activeStyle={{color: 'red'}} to='/articles'>Articles</NavLink></li>
                            <li><NavLink activeStyle={{color: 'red'}} to='/comments'>Comments</NavLink></li>
                        </ul>
                    </div>
                    <Switch>
                        <Route path='/counter' component={Counter}/>
                        <Route path='/filters' component={Filters}/>
                        <Route path='/articles' component={ArticleList}/>
                        <Route path='/comments' component={CommentsPage}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}

export default App;