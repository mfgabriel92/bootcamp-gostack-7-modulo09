import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const DEV = process.env.NODE_ENV === 'development'

const sagaMonitor = DEV ? console.tron.createSagaMonitor() : null
const sagas = createSagaMiddleware({ sagaMonitor })
const middlewares = [sagas]
const store = createStore(rootReducer, middlewares)

sagas.run(rootSaga)

export default store
