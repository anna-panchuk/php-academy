import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TestInput extends Component {

    constructor(props, context) {
        super(props, context);

        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    }

    onBtnClickHandler() {
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }

    render() {
        return (
            <div>
                <input
                    className='test-input'
                    defaultValue=''
                    placeholder='введите значение'
                    ref='myTestInput'
                />
                <button onClick={this.onBtnClickHandler}>Показать alert</button>
            </div>
        );
    }
};

export default TestInput;