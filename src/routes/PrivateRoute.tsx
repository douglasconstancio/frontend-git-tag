import React from 'react'

import { isAuthenticated } from '../hooks/Auth'
import { Route, Redirect, RouteProps as ReactDOMRouteProps,} from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean
    component: React.ComponentType
}

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        isAuthenticated()
        ? <Component/>
        : <Redirect to={{ pathname: '/', state: { from: props.location }}} />
    )}/>
)
