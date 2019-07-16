import React from 'react'
import { Router } from 'react-router-dom'
import history from './services/history'
import Routes from './routes'
import Style from './styles/App'
import './config/reactotron'

function App() {
  return (
    <Router history={history}>
      <Routes />
      <Style />
    </Router>
  )
}

export default App
