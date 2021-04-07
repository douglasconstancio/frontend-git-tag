export const isAuthenticated = () => {
    const userItem = localStorage.getItem('user')

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const user = userItem ? JSON.parse(userItem) : undefined

    return isLoggedIn && user?.id && user?.login
}
