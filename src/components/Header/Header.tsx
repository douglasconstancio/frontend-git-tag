import React, { useContext, FC } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../App'

import {
    Avatar,
    BallonIcon,
    Biography,
    BiographyPanel,
    BottomBar,
    ExitButton,
    GitHubIcon,
    Grouper,
    HeaderPanel,
    InfoPanel,
    Name,
    PropertiesPanel,
    PropertyResult,
    PropertyTitle,
    TagTitleBar,
    TitleBar,
    TopBar,
    User,
    UserPanel,
    VerifiedIcon
} from './styles'

import gitHubIcon from '../../assets/ico.png'
import verified from '../../assets/verified.png'
import ballon from '../../assets/ballon.png'


export const Header: FC = () => {
    const { state, dispatch } = useContext(AuthContext)

    if (!state.isLoggedIn) {
        return <Redirect to='/login' />
    }

    const {
        avatar_url,
        bio,
        followers,
        following,
        html_url,
        login,
        name,
        public_repos,
        total_private_repos
    } = state.user

    const handleLogout = () => { dispatch({ type: 'LOGOUT' }) }

    return (
        <>
            <TopBar>
                <a href={ html_url } target='_blank' rel='noopener noreferrer'>
                    <GitHubIcon src={ gitHubIcon } alt='git-hub' title='Meu Github'/>
                </a>
                <TitleBar>
                    Github
                    <TagTitleBar> tags </TagTitleBar>
                </TitleBar>
                <ExitButton onClick={ handleLogout }>
                    Sair
                </ExitButton>
            </TopBar>
            <HeaderPanel>
                <Avatar src={ avatar_url } alt='avatar' />
                <InfoPanel>
                    <Name>{ name }</Name>
                    <UserPanel>
                        <User>@{ login }</User>
                        <VerifiedIcon title='Verificado' src={verified} alt='verified' />
                        <BiographyPanel>
                            <BallonIcon src={ ballon } alt='ballon'/>
                            <Biography>"{ bio }"</Biography>
                        </BiographyPanel>
                    </UserPanel>
                    <PropertiesPanel>
                        <Grouper>
                            <PropertyTitle> Seguidores </PropertyTitle>
                            <PropertyResult>{ followers }</PropertyResult>
                        </Grouper>
                        <Grouper>
                            <PropertyTitle> Seguindo </PropertyTitle>
                            <PropertyResult>{ following }</PropertyResult>
                        </Grouper>
                        <Grouper>
                            <PropertyTitle> Repositórios privados </PropertyTitle>
                            <PropertyResult>{ total_private_repos }</PropertyResult>
                        </Grouper>
                        <Grouper>
                            <PropertyTitle> Repositórios públicos </PropertyTitle>
                            <PropertyResult>{ public_repos }</PropertyResult>
                        </Grouper>
                    </PropertiesPanel>
                </InfoPanel>
            </HeaderPanel>
            <BottomBar />
        </>
    )
}

export default Header
