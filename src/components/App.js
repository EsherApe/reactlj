import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import 'react-select/dist/react-select.css';
import DayPeriod from './DayPeriod';
import Counter from './Counter';

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Counter/>
                <DayPeriod/>
                <ArticleList/>
            </div>
        )
    }
}

export default App;