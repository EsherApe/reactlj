import React, {Component} from 'react';

class ValidateInput extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-group'>
                <div><label htmlFor='input'>{this.props.label}</label></div>
                <input type='text' value={this.props.value} onChange={this.validate} id='input'/>
            </div>
        )
    }

    validate = () => {
        console.log(this.props.value);
        // let min = this.props.min;
        // let max = this.props.max;
        // let valueLength = this.props.value.length;
        //
        // console.log(min, max);
        //
        // if(min || max) {
        //     if(valueLength < min || valueLength > max) {
        //         console.log('error');
        //     }
        // }
    }
}

export default ValidateInput;