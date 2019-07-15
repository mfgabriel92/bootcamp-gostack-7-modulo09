import React from 'react'
import PropTypes, { element, func } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const isSigned = false

  if (!isSigned && isPrivate) {
    return <Redirect to="/" />
  }

  if (isSigned && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([element, func]).isRequired,
  isPrivate: PropTypes.bool,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}

export default RouteWrapper
