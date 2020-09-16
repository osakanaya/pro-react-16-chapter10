import React, { Component } from "react";

export class SimpleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasButtonBeenClicked: false
        };
    }

    render() {
        return (
            <button 
                onClick={ this.handleClick } 
                className={ this.props.className }
                disabled={ this.props.disabled === "true" || this.props.diabled === true }>
            { this.props.text } { this.props.counter }
            { this.state.hasButtonBeenClicked && <div>Button Clicked!</div> }
        </button>
        );
    }

    handleClick = () => {
        this.props.incrementCallback(5);
        this.setState({
            hasButtonBeenClicked: true
        });

        this.props.callback();
    }
}

