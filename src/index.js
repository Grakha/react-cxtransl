import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { debugContextDevtool } from 'react-context-devtool';


const container = document.querySelector('#hero');

ReactDOM.render(
    <App />,
    container
);

debugContextDevtool(container);