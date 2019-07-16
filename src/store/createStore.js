import { createStore, compose, applyMiddleware } from 'redux'

export default (reducers, middlewares) => {
  const DEV = process.env.NODE_ENV === 'development'
  const enhancer = DEV
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
