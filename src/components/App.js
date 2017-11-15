import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Counter from './Counter';
import './Filters';
import Filters from "./Filters/index";

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Counter/>
                <Filters/>
                <ArticleList/>
            </div>
        )
    }
}

export default App;