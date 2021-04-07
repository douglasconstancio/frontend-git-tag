import { TAuthContextData } from "../../App"

export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") as string),
    user: JSON.parse(localStorage.getItem("user") as string),
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
}

export const reducer = (state: TAuthContextData['state'], action: any) => {
    switch (action.type) {
        case 'LOGIN': {
            const { isLoggedIn, user } = action.payload
            localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
            localStorage.setItem('user', JSON.stringify(user))

            return { ...state, isLoggedIn, user }
        }
        case 'LOGOUT': {
            localStorage.clear()

            return { ...state, isLoggedIn: false, user: null }
        }
        default:
            return state
    }
}
