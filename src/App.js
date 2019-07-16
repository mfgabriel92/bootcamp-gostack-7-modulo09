import './config/reactotron'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import history from './services/history'
import Routes from './routes'
import Style from './styles/App'
import { store, persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ToastContainer autoClose={3000} />
          <Routes />
          <Style />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
