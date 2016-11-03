import React from 'react'
import { render } from 'react-dom'
import { Route, IndexRoute } from 'react-router'

import Hello from '../pages/Hello'
import Hero from '../pages/Hero'
import App from './Main'

const routes = (
  	<Route path="/" component={App}>
		<IndexRoute component={Hello} />
	  	<Route path="Hello" component={Hello} />
	  	<Route path="Hero" component={Hero} />
	</Route>
)

export default routes
