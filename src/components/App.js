import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPeriod from './DayPeriod';
import Counter from './Counter';

class App extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })).isRequired
    };

    state = {
        selection: null
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Counter/>
                <DayPeriod/>
                <ArticleList articles={articles} defaultOpenId={articles[0].id}/>
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App;