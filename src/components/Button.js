import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {

    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <div className="field">
                <div className="control">
                    <button type="button" className="button is-primary">
                        {text}
                    </button>
                </div>
            </div>
        );
    }
}

export default Button;