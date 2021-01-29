import React from 'react';
import LanguageContext from "../contexts/LanguageContext";


class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        return (
            <div className="tile">
                <span className="content is-medium mr-3">Select Language:</span>
                <span className="icon is-medium">
                    <i onClick={() => this.context.onChangeLanguage('english')} className="flag-icon flag-icon-us"></i>
                </span>
                <span className="icon is-medium">
                    <i onClick={() => this.context.onChangeLanguage('dutch')} className="flag-icon flag-icon-nl"></i>
                </span>
            </div>
        );
    };
};

export default LanguageSelector;