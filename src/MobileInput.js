import React, { Component } from 'react';

export default class MobileInput extends Component {

    state = {
        errors: ''
    }

    handleInputChange = (e) => {

        let phone = (e.target.value).replace(/\s/g, '');
        var saudiRegexPhone = /^((\+|00)?966|0?)(5\d{8})$/;

        if (!saudiRegexPhone.test(phone)) {
            this.setState({
                errors: 'Please Enter a Valid Saudi Number'
            })
        }
        else {
            this.setState({
                errors: ''
            })
            this.props.phoneFormat(phone);
        }
    }

    render() {
        return (
            <div>
                <form className="form-design">
                    <label>Mobile: </label>
                    <input type="text" name="phone" onChange={this.handleInputChange} />
                </form>
                <p className="error">{this.state.errors}</p>
            </div>
        )
    }
}
