import styled from 'styled-components'
import { BLACK, GREEN, PURPLE, WHITE, YELLOW } from '../../styles/colors'

export const Button = styled.button`
    && {
        margin-top: 8%;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 40px;
        background-color: ${ PURPLE };
        border-radius: 10px;
        border: none;
        transition-duration: 0.4s;
        &:hover {
            background-color: ${ GREEN };
        }
    }
`

export const Link = styled.a`
    color: ${ WHITE };
`

export const Wrapper = styled.div`
    margin: auto 0;
    max-width: 500px;
    margin-top: 24%;
`

export const HeaderImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
    alt: header-git;
`

export const Title = styled.h1``

export const TagTitle = styled.span`
    padding: 4px 8px 4px 4px;
    margin-left: 8px;
    border-radius: 30px;
    font-weight: bold;
    color: ${ BLACK };
    background-color: ${ YELLOW };
`

export const Panel = styled.div`
    display: flex;
    justify-content: center;
`

export const SignUp = styled(Panel)`
    margin-top: 4%;
    font-size: 14px;
`
