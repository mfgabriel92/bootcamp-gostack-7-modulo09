import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import createStore from './createStore'
import persistReducers from './persistReducer'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const DEV = process.env.NODE_ENV === 'development'

const sagaMonitor = DEV ? console.tron.createSagaMonitor() : null
const sagas = createSagaMiddleware({ sagaMonitor })
const middlewares = [sagas]

const store = createStore(persistReducers(rootReducer), middlewares)
const persistor = persistStore(store)

sagas.run(rootSaga)

export { store, persistor }
