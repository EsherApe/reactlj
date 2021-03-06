import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import {changeSelection} from '../../AC';
import 'react-select/dist/react-select.css';
import {mapToArr} from '../../helpers'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        this.props.changeSelection(selected.map(option => {
            return option.value;
        }));
    };

    render() {
        let { articles, selected } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: mapToArr(state.articles.entities)
}), { changeSelection })(SelectFilter)