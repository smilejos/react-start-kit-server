import { AppContainer } from 'react-hot-loader';
import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello.jsx'

render(
    <AppContainer>
        <Hello />
    </AppContainer>
    ,
    document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./Hello.jsx', () => {
        const NextApp = require('./Hello.jsx').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}