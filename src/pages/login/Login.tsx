import React, { useContext, FC } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext, TUserInfo } from '../../App'
import OAuth from 'oauthio-web'

import {
    Button,
    HeaderImage,
    Link,
    Panel,
    SignUp,
    TagTitle,
    Title,
    Wrapper
} from './styles'
import headerIcon from '../../assets/Octocat.png'

export const Login: FC = () => {

    const { state, dispatch } = useContext(AuthContext)

    if (state.isLoggedIn) {
        return <Redirect to='/starred-repositories' />
    }

    const handleAuthenticate = () => {
        OAuth.OAuth.initialize(process.env.REACT_APP_OAUTH_IO)

        OAuth.OAuth.popup('github').then((github: any) => {
            github.get('/user').then((data: TUserInfo) => {
                dispatch({
                    type: 'LOGIN',
                    payload: { user: data, isLoggedIn: true }
                })
            })
        })
    }

    return (
        <Wrapper>
            <HeaderImage src={ headerIcon }/>
            <Title>
                Github
                <TagTitle> tags </TagTitle>
            </Title>
            <Panel>
                <Button onClick={ handleAuthenticate }>
                    Acesse com o GitHub
                </Button>
            </Panel>
            <SignUp>
                <Link href='https://github.com/join' target='_blank'>
                    Ainda não possui conta? Cadastre-se já
                </Link>
            </SignUp>
        </Wrapper>
    )
}

export default Login
