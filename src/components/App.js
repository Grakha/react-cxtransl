import React from 'react';
import UserCreate from "./UserCreate";

class App extends React.Component {

    state = { language: 'english' };

    onChangeLanguage(language) {
        this.setState({ language: language })
    }


    render() {
        return (
            <div className="hero-body">
                <div className="container is-fluid">
                    <div className="tile">
                        <span className="content is-medium mr-3">Select Language:</span>
                        <span className="icon is-medium">
                            <i onClick={() => this.onChangeLanguage('english')} className="flag-icon flag-icon-us"></i>
                        </span>
                        <span className="icon is-medium">
                            <i onClick={() => this.onChangeLanguage('dutch')} className="flag-icon flag-icon-nl"></i>
                        </span>
                    </div>
                    <UserCreate />
                </div>
            </div>
        );
    }
};

export default App;