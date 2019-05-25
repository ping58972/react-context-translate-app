import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {
    //static contextType = LanguageContext;
    renderSubmit = (value) => {
        return value === "english" ? 'Submit' : 'Voorleggen';
    }
    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language) }
                    {/* {value=> this.renderSubmit(value) } */}
                </LanguageContext.Consumer>
            </button>
        );
    }
    render() {
        //const text = this.context ==="english" ? 'Submit': 'Voorleggen';
        return (
            // <button className="ui button primary">{text}</button>
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

//Button.contextType = LanguageContext;

export default Button;
