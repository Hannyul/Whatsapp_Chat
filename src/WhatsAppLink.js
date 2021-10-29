import React, { Component } from 'react'
import MobileInput from './MobileInput';
import ChatOutput from './ChatOutput';

export default class WhatsAppLink extends Component {

    state = {
        formattedPhone: ''
    }

    phoneFormat = (phone) => {
        var formattedPhone = /^(\+?966)/.test(phone) ? phone : ("966" + phone.slice(phone.indexOf("5"), phone.length));
        this.setState({formattedPhone})
    }

    render() {
        return (
            <div>
                <MobileInput phoneFormat={this.phoneFormat} />
                {this.state.formattedPhone ? <ChatOutput formattedPhone={this.state.formattedPhone} /> : null}
            </div>
        )
    }
}
