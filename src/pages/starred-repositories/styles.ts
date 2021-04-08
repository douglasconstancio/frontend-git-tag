import styled from 'styled-components'

interface IPosition {
    isFirst: boolean
}

interface IMatch {
    isMatch?: boolean
}

interface IProps {
    width: string
    backgroundColor: string
    color: string
}

export const ResultsPanel = styled.div`
    background-color: #ffffffB3;
    position: fixed;
    top: 43%;
    left: 10px;
    right: 10px;
    height: 56%;
    display: flex;
    border-radius: 10px;
`

export const Subtitle = styled.h6`
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;
`

export const NameTitle = styled.h2`
    letter-spacing: 1px;
    margin: 10px 0;
    text-align: left;
    text-overflow: ellipsis;
    width: 142px;
    overflow: hidden;
`

export const CoursePreview = styled.div`
    background-color: #2A265F;
    color: #fff;
    padding: 30px;
    border-radius: 10px 0px 0px 10px;
    width: 220px;
    max-width: 220px;
`

export const CourseInfo = styled.div`
    padding: 30px;
    position: relative;
    width: 100%;
`

export const CourseTitleA = styled.a`
    color: #fff;
    display: inline-block;
    font-size: 14px;
    opacity: 0.6;
`

export const TagTitle = styled.span`
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 10px;
    font-weight: bold;
    color: #000;
    background-color: #fae13e;
`

export const Wrapper = styled.section`
    && {
        margin-top: 25%;
        max-width: 1200px;
        position: relative;
    }
`

export const SearchBox = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
    width: 1150px;
    background-color: #ffffffde;
    border-radius: 10px;
    height: 60px;
    display: flex;
`

export const FilterTitle = styled.h2`
    color: #2A265F;
    margin: 20px;
    font-size: 18px;
`

export const SearchField = styled.input`
    height: 30px;
    max-width: 500px;
    width: 100%;
    margin-right: 0;
    padding: 4px;
    border: 2px solid #2A265F;
    border-radius: 10px;
    outline: none;
    color: #000;
    margin: 10px 20px 0 0px;
    font-size: 16px;
`

export const ListGroup = styled.div`
    overflow-y: scroll;
    max-height: 430px;
    height: 430px;
    margin-top: 10px;
    border-radius: 10px;
    width: 1150px;
    min-width: 1150px;
    background-color: #ffffffde;
`

export const StarredRepositoryCard = styled.div<IPosition>`
    margin-top: ${ props => props.isFirst
        ? '20px'
        : '10px'};
    margin-left: 16px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    width: 1100px;
    background-color: #ffffffa0;
    border-radius: 10px;
    height: 176px;
    display: flex;
    margin-bottom: 20px;
`

export const SubTitleDescription = styled.h2`
    letter-spacing: 1px;
    margin: 10px 0;
    text-align: left;
    color: #000;
`

export const MESSAGE_EMPTY_ERROR = 'Informe um conteúdo para a Tag.'

export const MESSAGE_BUSINESS_ERROR = 'Esta tag já foi informada!'

export const SubtitleID = styled(Subtitle)`
    color: #000;
`

export type TStarred = {
    tags: string,
    id: string,
    repo_id: string,
    name: string,
    html_url: string,
    description?: string
    url?: string
}

export const getSubtitle = (repository: TStarred) =>
    repository.description
        ? repository?.description?.length > 70
            ? repository?.description.substring(0, 70).concat('...')
            : repository?.description
        : repository.name?.length > 70
            ? repository?.name.substring(0, 70).concat('...')
            : repository?.name

export const TagCard = styled.span<IMatch>`
    text-align: right;
    margin-right: 8px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${ props => props.isMatch
        ? '#2A265F'
        : '#118D16'};
    color: #fff;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
`

export const PlaceAddButton = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AddButton = styled.button`
    background-color: #2A265F;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    margin-right: 8px;
    font-size: 16px;
    padding: 12px 25px 12px 20px;
    right: 10px;
    letter-spacing: 1px;
    cursor: pointer;
    width: 100px;
    max-height: 40px;
    font-weight: bold;
    margin-top: 8px;
`

export const NotFoundPlace = styled.div`
    background-color: #ffffffde;
    border-radius: 10px;
    height: 382px;
    padding: 24px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-evenly;
`

export const NotFoundMessage = styled.div`
    color: #2A265F;
    font-size: 30px;
    align-self: center;
`

export const IconCat = styled.img`
    margin-top: 10%;
    width: 380px;
`

export const IronCatPlace = styled.div``

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    z-index: 99999;
    opacity: 1;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    display: flex;
    justify-content: center;
`

export const Modal = styled.div`
    background-color: #2A265F;
    border-radius: 10px;
    margin-top: 300px;
    height: 150px;
    width: 312px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`

export const ModalTitle = styled.h3`
    text-align: left;
    padding: 16px 0px 0px 16px;
`

export const ModalTitlePlace = styled.div`
    display: flex;
`

export const TagField = styled.input`
    padding: 4px;
    width: 280px;
    border-radius: 10px;
    border: 2px solid #fff;
    outline: none;
    color: #000;
    margin: 10px 20px 0px 10px;
    text-transform: uppercase;
    font-size: 14px;
    ::-webkit-input-placeholder {
        text-transform: none;
    }
`

export const ModalButtonPlace = styled.div`
    text-align: end;
    margin-right: 10px;
    margin-top: 32px;
`

export const ButtonActions = styled.button<IProps>`
    background-color: ${ props => props.backgroundColor };
    width: ${ props => props.width };
    color: ${ props => props.color };
    font-weight: bold;
    padding: 6px 8px;
    outline: none;
    border: none;
    border-radius: 4px;
    margin: 4px 0 4px 4px;
    cursor: pointer;
`

export type TStarredInitial = {
    id?: string,
    tags?: string,
    repo_id?: string,
    description?: string,
    name?: string,
    html_url?: string
}

export const INITIAL_VALUES = {
    id: '',
    tags: '',
    repo_id: undefined,
    description: undefined,
    name: undefined,
    html_url: undefined
}

export const getTitleName = (name: string) =>
    name.length > 14
        ? name.substring(0, 14).concat('...')
        : name
