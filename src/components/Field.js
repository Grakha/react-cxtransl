import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {

    static contextType = LanguageContext;

    render() {

        const text = this.context === 'english' ? 'Name' : 'Naam';

        return (
            <div className="field">
                <label className="label">{text}</label>
                <div className="control">
                    <input className="input is-primary" type="text" placeholder="Enter Text"/>
                </div>
            </div>
        );
    }
};

export default Field;