import React, { useContext, FC } from "react"

import { Redirect } from "react-router-dom"
import { AuthContext } from "../../App"

const Home: FC = () => {
    const { state } = useContext(AuthContext)

    return state.isLoggedIn
        ? <Redirect to='/starred-repositories' />
        : <Redirect to='/login' />
}

export default Home
