import React, { createContext, useReducer, FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/Login'
import Home from './pages/home/Home'
import StarredRepositories from './pages/starred-repositories/StarredRepositories'

import { initialState, reducer } from './store/reducer/reducer'
import { PrivateRoute } from './routes/PrivateRoute'

import GlobalStyle from './styles/global'

export  type TUserInfo = {
    id: number,
    login: string,
    avatar_url: string,
    html_url: string,
    url: string,
    name: string,
    bio: string,
    public_repos: number,
    total_private_repos: number,
    followers: number,
    following: number
}

export type TAuthContextData = {
    state: {
        user: TUserInfo,
        isLoggedIn: boolean,
        client_id?: string,
        redirect_uri?: string
    },
    dispatch: any
  }

export const AuthContext = createContext<TAuthContextData>({} as TAuthContextData)

const App: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={ Login }/>
                    <Route path='/' exact component={ Home }/>

                    <PrivateRoute
                        path='/starred-repositories'
                        component={ StarredRepositories }
                    />
                </Switch>
                <GlobalStyle />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
