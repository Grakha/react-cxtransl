import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";


class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button type="button" className={`button ${color}`} >
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <div className="field">
                <div className="control">
                    <ColorContext.Consumer>
                        {(color) => this.renderButton(color)}
                    </ColorContext.Consumer>
                </div>
            </div>
        );
    }
}

export default Button;