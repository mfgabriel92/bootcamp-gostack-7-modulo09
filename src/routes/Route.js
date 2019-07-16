import React from 'react'
import PropTypes, { element, func } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../pages/_layout/Auth'
import Default from '../pages/_layout/Default'
import { store } from '../store'

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const { isSigned } = store.getState().auth

  if (!isSigned && isPrivate) {
    return <Redirect to="/" />
  }

  if (isSigned && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  const Layout = isSigned ? Default : Auth

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([element, func]).isRequired,
  isPrivate: PropTypes.bool,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}

export default RouteWrapper
