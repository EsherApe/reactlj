import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import ArticleChart from './ArticleChart';

class App extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })).isRequired
    };

    render() {
        return (
            <div>
                <ArticleList articles={this.props.articles}/>
                <ArticleChart articles={this.props.articles}/>
            </div>
        )
    }
}

export default App;