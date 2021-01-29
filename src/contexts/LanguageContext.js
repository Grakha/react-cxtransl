import React from 'react';


// export default React.createContext('english');
//
// const context = React.createContext();
//
// console.log(context);
//
// export default context;

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onChangeLanguage = (language) => {
        this.setState({ language: language });
    }

    render() {
        return(
            <Context.Provider value={{ ...this.state, onChangeLanguage: this.onChangeLanguage}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;