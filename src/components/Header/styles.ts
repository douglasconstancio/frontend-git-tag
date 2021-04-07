import styled from 'styled-components'
import { Title, TagTitle } from '../../pages/login/styles'
import { BLACK, PURPLE, RED, WHITE, YELLOW } from '../../styles/colors'

export const ExitButton = styled.button`
    border-radius: 10px;
    font-weight: bold;
    color: ${ WHITE };
    background-color: ${ RED };
    border: none;
    width: 50px;
    height: 70%;
    text-transform: uppercase;
    transition-duration: 0.5s;
    cursor: pointer;
    margin: 6px;
    &:hover {
        background-color: ${ YELLOW };
        color: ${ BLACK };
    }
`

export const TopBar = styled.div`
    background-color: ${ PURPLE };
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 6%;
    display: flex;
    justify-content: space-between;
`

export const GitHubIcon = styled.img`
    width: 45px;
    cursor: pointer;
    margin: 6px;
`

export const TitleBar = styled(Title)`
    margin: auto;
`

export const TagTitleBar = styled(TagTitle)`
    padding: 0px 8px;
`

export const HeaderPanel = styled.div`
    background-color: #0000009c;
    position: fixed;
    top: 6%;
    left: 0;
    right: 0;
    height: 24%;
    display: flex;
`

export const Avatar = styled.img`
    margin: 10px;
    border-radius: 50%;
    width: 11%;
    border: outset;
`

export const InfoPanel = styled.div`
    margin-left: 10px;
    margin-top: 40px;
`

export const Name = styled.span`
    color: ${ WHITE };
    font-weight: bold;
    font-size: 30px;
`

export const User = styled.span`
    color: ${ YELLOW };
    font-size: 20px;
`

export const VerifiedIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 4px;
`

export const UserPanel = styled.div`
    display: flex;
    margin-top: 10px;
`

export const PropertiesPanel = styled.div`
    display: flex;
    width: 642px;
    justify-content: space-between;
    margin-top: 10px;
`

export const PropertyTitle = styled.p`
    font-size: 20px;
    color: ${ WHITE };
    margin: 0px;
`

export const PropertyResult = styled(PropertyTitle)`
    text-align: center;
`

export const Grouper = styled.div``

export const BiographyPanel = styled.div`
    display: flex;
    margin-left: 20px;
`

export const BallonIcon = styled.img`
    width: 25px;
    height: 25px;
`

export const Biography = styled.span`
    color: ${ WHITE };
    font-style: italic;
    font-size: 20px;
    margin-left: 4px;
`

export const BottomBar = styled.div`
    background-image: linear-gradient(#0000009c, #00000000);
    position: fixed;
    top: 30%;
    left: 0;
    right: 0;
    height: 8%;
    display: flex;
`
