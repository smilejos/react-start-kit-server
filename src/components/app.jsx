import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { match, browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './common/Root'
import store from '../store/store'

const renderApp = (RootComponent) => {
    console.log('RootComponent:', RootComponent);
    render((
        <AppContainer>
            <RootComponent store={store} history={syncHistoryWithStore(browserHistory, store)} />
        </AppContainer>
    ), document.getElementById('app'));
}

renderApp(Root);

if (module.hot) {
    module.hot.accept('./common/Root', () => {
        const nextRoot = require('./common/Root').default;
        renderApp(nextRoot);
    });
}