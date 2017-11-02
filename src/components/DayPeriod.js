import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';
import 'moment';

class DayPeriod extends Component {
    static propTypes = {};

    state = {
        dateFrom: '',
        dateTo: '',
    };

    render() {
        return (
            <div>
                <h3>Select period</h3>
                <DayPickerInput placeholder="from" format="DD/MM/YYYY" value={this.state.dateFrom} onDayChange={this.onChangeDate.bind(this, 'dateFrom')}/>
                <DayPickerInput placeholder="to" format="DD/MM/YYYY" value={this.state.dateTo} onDayChange={this.onChangeDate.bind(this, 'dateTo')}/>
                {this.getDateString()}
            </div>
        );
    }

    getDateString() {
        const dateStringEmpty = this.state.dateFrom === '' || this.state.dateTo === '';
        return dateStringEmpty ? null : <div>from {this.state.dateFrom} to {this.state.dateTo}</div>;
    }

    onChangeDate = (type, date) => {
        this.setState({
            [type]: date.format('L'),
        })
    }
}

export default DayPeriod;
