import React from 'react';
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";


class App extends React.Component {

    render() {
        return (
            <div className="hero-body">
                <div className="container is-fluid">
                    <LanguageStore>

                        <LanguageSelector onChangeLanguage={this.onChangeLanguage} />

                        <ColorContext.Provider value="is-primary">
                            <UserCreate />
                        </ColorContext.Provider>

                    </LanguageStore>
                </div>
            </div>
        );
    }
};

export default App;