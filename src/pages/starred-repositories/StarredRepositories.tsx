import React, { useContext, useState, useEffect, ChangeEvent, FC } from 'react'
import apiDB from '../../services/apiDB'
import api from '../../services/api'

import { AuthContext } from '../../App'
import {
    AddButton,
    BackgroundModal,
    ButtonActions,
    CourseInfo,
    CoursePreview,
    CourseTitleA,
    FilterTitle,
    getSubtitle,
    getTitleName,
    IconCat,
    INITIAL_VALUES,
    IronCatPlace,
    ListGroup,
    MESSAGE_BUSINESS_ERROR,
    MESSAGE_EMPTY_ERROR,
    Modal,
    ModalButtonPlace,
    ModalTitle,
    ModalTitlePlace,
    NameTitle,
    NotFoundMessage,
    NotFoundPlace,
    PlaceAddButton,
    SearchBox,
    SearchField,
    StarredRepositoryCard,
    Subtitle,
    SubTitleDescription,
    SubtitleID,
    TagCard,
    TagField,
    TagTitle,
    TStarred,
    TStarredInitial,
    Wrapper
} from './styles'
import Header from '../../components/Header/Header'
import ironCat from '../../assets/iron-cat.png'
import { BLACK, GREEN, RED, WHITE, YELLOW } from '../../styles/colors'

const StarredRepositories: FC = () => {
    const { state } = useContext(AuthContext)
    const [ starredRepositories, setStarredRepositories ] = useState<TStarred[]>()
    const [ updateRepositories, setUpdateRepositories ] = useState([])
    const [ repositoryWithTags, setRepositoryWithTags ] = useState([])
    const [ filter, setFilter ] = useState<string>('')
    const [ openModal, setOpenModal ] = useState<boolean>(false)
    const [ values, setValues ] = useState<TStarredInitial>(INITIAL_VALUES)
    const{ user: { login, id } } = state

    useEffect(() => {
        async function getInformationDB() {
            const { data } = filter
                ? await apiDB.get(`/starred-repositories/${id}/${filter}`)
                : await apiDB.get(`/starred-repositories/${id}`)

            const result = data.map((item: TStarred) =>
                [item.repo_id, item.tags, item.id])

            setRepositoryWithTags(result)
        }

        getInformationDB()

    }, [filter, id, login, updateRepositories])

    useEffect(() => {
        async function loadRepositories() {
            const response = filter
                ? await apiDB.get(`starred-repositories/${id}/${filter}`)
                : await api.get(`users/${login}/starred`)
                // Use mock for tests when reaches the request limit
                // : {
                //     data : [
                //         {
                //             id: '123654',
                //             name: 'ts-phaser-bomb-game',
                //             html_url: 'http://google.com',
                //             description: 'A typed, persistent store for values of '
                //                 + 'arbitrary types'
                //         },
                //         {
                //             id: '123685',
                //             name: 'vscodium',
                //             html_url: 'http://google.com',
                //             description: 'curl for GraphQL with autocomplete, '
                //                 + 'subscriptions and GraphiQL. Also a dead-simple '
                //                 + 'universal javascript GraphQL client.'
                //         },
                //         {
                //             id: '143404',
                //             name: 'graphQL',
                //             html_url: 'http://google.com',
                //             description: 'GraphQL with autocomplete is awesome, '
                //                 + 'subscriptions and GraphiQL.'
                //         },
                //         {
                //             id: '143441',
                //             name: 'NextLevelWeek',
                //             html_url: 'http://google.com',
                //             description: 'I love ReactNative ⚛️'
                //         }
                //     ]
                // }

            // XGH: I now 😭
            const uniqueByKey = filter
                ? [...new Map(response.data.map((item: TStarred) =>
                    [item['repo_id'], item])).values()]
                : response.data

            setStarredRepositories(uniqueByKey)
        }

        loadRepositories()
    }, [login, filter, id])

    async function handleAddTag() {
        try {
            if (!values.tags) {
                alert(MESSAGE_EMPTY_ERROR)

                return
            }

            const user_id = String(id)

            if (values) {
                const data = {
                    user_id,
                    repo_id: String(values.repo_id),
                    tags: values.tags.toUpperCase(),
                    description: values.description,
                    name: values.name,
                    url: values.html_url
                }

                const response = await apiDB.post('/starred-repositories', data)

                const { id, repo_id: repo, tags: tagRepo } = response.data

                const newTags = { id, repo, tagRepo }

                if (response.status === 200) {
                    handleCloseModal()
                }

                setRepositoryWithTags([ ...repositoryWithTags, newTags ] as any)
                setUpdateRepositories([ ...repositoryWithTags, newTags ] as any)
            }
        } catch (error) {
            alert(MESSAGE_BUSINESS_ERROR)
        }
    }

    async function handleEditTag() {
        try {
            if (!values.tags) {
                alert(MESSAGE_EMPTY_ERROR)

                return
            }

            const data = { id: values.id, tags: values.tags.toUpperCase() }

            const response = await apiDB.put('/starred-repositories', data )
            const { id, repo_id: repo, tags: tagRepo } = response.data

            const newTags = { id, repo, tagRepo }

            if (response.status === 200) {
                handleCloseModal()
            }

            setRepositoryWithTags([ ...repositoryWithTags, newTags ] as any)
            setUpdateRepositories([ ...repositoryWithTags, newTags ] as any)

        } catch (error) {
            alert(MESSAGE_BUSINESS_ERROR)
        }
    }

    async function handleRemoveTag() {
        const response = await apiDB.delete(`/starred-repositories/${values.id}`)

        if (response.status === 200) {
            handleCloseModal()
            setRepositoryWithTags([ ...repositoryWithTags ])
            setUpdateRepositories([ ...repositoryWithTags ])
        }
    }

    function handleEditOpenModal(item: string[]) {
        const [, tags, id] = item

        setValues({ tags, id })
        setOpenModal(true)
    }

    function handleCloseModal() { setOpenModal(false) }

    function handleOpenCreationModal(item: TStarred) {
        const { id, html_url, description, name } = item

        setValues({ repo_id: id, html_url, description, name })
        setOpenModal(true)
    }

    function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
        setFilter(event.currentTarget.value.trim())
    }

    function handleChangeTag(event: ChangeEvent<HTMLInputElement>) {
        setValues({ ...values, tags: event.currentTarget.value.trim() })
    }

    return (
        <>
            <Wrapper>
                <Header/>
                <SearchBox>
                    <FilterTitle> Filtrar Repositórios: </FilterTitle>
                    <SearchField
                        type='text'
                        name='filter'
                        placeholder='Pesquisa suas tags ex: Node...'
                        onChange={ handleChangeFilter }
                    />
                </SearchBox>
                <ListGroup>
                    { starredRepositories && starredRepositories.length > 0
                        ? starredRepositories.map((repository, index) => (
                            <StarredRepositoryCard
                                isFirst={ index === 0 }
                                key={ repository.id }
                                id={ repository.id }>
                                <CoursePreview>
                                    <Subtitle>Nome:</Subtitle>
                                    <NameTitle>{ getTitleName(repository.name) }</NameTitle>
                                    <CourseTitleA
                                        href={
                                            filter ? repository.url : repository.html_url
                                        }
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        Ver repositório
                                        <span
                                            role='img'
                                            aria-label='eyes'
                                            style={{
                                                textDecoration: 'none',
                                                textTransform: 'none'
                                            }}>
                                            👀
                                        </span>
                                    </CourseTitleA>
                                </CoursePreview>
                                <CourseInfo>
                                        <SubtitleID>ID: {
                                            filter ? repository.repo_id : repository.id
                                        } </SubtitleID>
                                        <SubTitleDescription>
                                            { getSubtitle(repository) }
                                        </SubTitleDescription>
                                        <>
                                            { filter
                                                ? repositoryWithTags.map((item: string[]) => (
                                                        item[0] === String(repository.repo_id)
                                                    ? <TagCard
                                                        isMatch={ (item[1]).includes(filter.toUpperCase()) }
                                                        id={ item[2] }
                                                        key={ item[2] }
                                                        onClick={ () => handleEditOpenModal(item) }>
                                                        { item[1] }
                                                    </TagCard>
                                                    : ''
                                                ))
                                                : repositoryWithTags.map(item => (
                                                    item[0] === String(repository.id)
                                                    ? <TagCard
                                                        id={ item[2] }
                                                        key={ item[2] }
                                                        onClick={ () => handleEditOpenModal(item) }>
                                                        { item[1] }
                                                    </TagCard>
                                                    : ''
                                                ))
                                            }
                                        </>
                                </CourseInfo>
                                <PlaceAddButton>
                                    <AddButton
                                        onClick={ () => (handleOpenCreationModal(repository)) }>
                                        +
                                        <TagTitle>Tag</TagTitle>
                                    </AddButton>
                                </PlaceAddButton>
                            </StarredRepositoryCard>
                        ))
                        : (
                            <NotFoundPlace>
                                <NotFoundMessage>
                                    Nenhum repositório encontrado :'(
                                </NotFoundMessage>
                                <IronCatPlace>
                                    <IconCat src={ ironCat } alt='avatar' />
                                </IronCatPlace>
                            </NotFoundPlace>
                        )
                    }
                </ListGroup>
                { openModal && (
                    <BackgroundModal>
                        <Modal>
                            <ModalTitlePlace>
                                <ModalTitle> Informe uma tag: </ModalTitle>
                                <span
                                    role='img'
                                    style={{
                                        fontSize: '28px',
                                        margin: '6px 0px 4px 6px',
                                        textDecoration: 'none',
                                        textTransform: 'none'
                                    }}
                                    aria-label='eyes'> 🏷️
                                </span>
                            </ModalTitlePlace>
                            <TagField
                                autoFocus
                                type='text'
                                value={ values.tags }
                                name='tag-name'
                                placeholder='Insira sua Tag'
                                onChange={ handleChangeTag }
                            />
                            <ModalButtonPlace>
                                <ButtonActions
                                    width='60px'
                                    color={ WHITE }
                                    backgroundColor={ GREEN }
                                    onClick={
                                        values.repo_id
                                            ? handleAddTag
                                            : handleEditTag
                                    }>
                                        Salvar
                                </ButtonActions>
                                { !values.repo_id && (
                                    <ButtonActions
                                        width='80px'
                                        color={ WHITE }
                                        backgroundColor={ RED }
                                        onClick={ handleRemoveTag }>
                                        Remover
                                    </ButtonActions>
                                )}
                                <ButtonActions
                                    width='80px'
                                    color={ BLACK }
                                    backgroundColor={ YELLOW }
                                    onClick={ handleCloseModal }>
                                    Cancelar
                                </ButtonActions>
                            </ModalButtonPlace>
                        </Modal>
                    </BackgroundModal>
                )}
            </Wrapper>
        </>
    )
}

export default StarredRepositories
