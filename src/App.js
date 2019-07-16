import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from './services/history'
import Routes from './routes'
import Style from './styles/App'
import './config/reactotron'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <Style />
      </Router>
    </Provider>
  )
}

export default App
