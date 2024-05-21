import axios from 'axios'
import md5 from 'md5'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Character = () => {
    const { id } = useParams()
    const privateKey = import.meta.env.VITE_PRIVATE_KEY
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const baseUrl = import.meta.env.VITE_BASE_URL

    const [character, setCharacter] = useState([])
    const [comics, setComics] = useState([])
    const [stories, setStories] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        const ts = new Date().getTime()
        const hash = md5(ts + privateKey + publicKey)

        const fetchCharacter = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/characters/${id}`,
                    {
                        params: {
                            ts,
                            apikey: publicKey,
                            hash,
                            limit: 10,
                        },
                    }
                )
                setCharacter(response.data.data.results[0])
            } catch (error) {
                console.error('Erro ao buscar personagens: ', error)
            }
        }

        const fetchCharacterComics = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/characters/${id}/comics`,
                    {
                        params: {
                            ts,
                            apikey: publicKey,
                            hash,
                            limit: 10,
                        },
                    }
                )
                setComics(response.data.data.results)
            } catch (error) {
                console.error('Erro ao buscar comics do personagem: ', error)
            }
        }

        const fetchCharacterStories = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/characters/${id}/stories`,
                    {
                        params: {
                            ts,
                            apikey: publicKey,
                            hash,
                            limit: 10,
                        },
                    }
                )
                setStories(response.data.data.results)
            } catch (error) {
                console.error('Erro ao buscar stories do personagem: ', error)
            }
        }

        const fetchCharacterEvents = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/characters/${id}/events`,
                    {
                        params: {
                            ts,
                            apikey: publicKey,
                            hash,
                            limit: 10,
                        },
                    }
                )
                setEvents(response.data.data.results)
                console.log(response.data.data.results)
            } catch (error) {
                console.error('Erro ao buscar eventos do personagem: ', error)
            }
        }

        fetchCharacter()
        fetchCharacterComics()
        fetchCharacterStories()
        fetchCharacterEvents()
    }, [id])

    return (
        <div>
            <div className="flex gap-4">
                <img
                    className="w-48 h-48 object-cover"
                    src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
                    alt={character.name}
                />
                <h1>{character.name}</h1>
            </div>

            <div>
                <span>description</span>
                {character.description && <p>{character.description}</p>}
            </div>

            <div>
                <span>links</span>
                <div className="flex gap-4">
                    {character.urls &&
                        character.urls.map((url) => {
                            return (
                                <Link
                                    to={url.url}
                                    className="text-red-500"
                                    key={url.type}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {url.type}
                                </Link>
                            )
                        })}
                </div>
            </div>

            <div>
                <span>Comics</span>
                <div className="flex gap-4">
                    {comics.map((comic) => {
                        console.log({comic})
                        if (!comic.thumbnail) return null
                        return (
                            <div key={comic.id}>
                                <img
                                    className="w-48 h-48 object-cover"
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    alt={comic.title}
                                />
                                <h2>{comic.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <span>stories</span>
                <div className="flex gap-4">
                    {stories.map((story) => {
                        if (!story.thumbnail) return null
                        return (
                            <div key={story.id}>
                                <img
                                    className="w-48 h-48 object-cover"
                                    src={`${story.thumbnail?.path}.${story.thumbnail?.extension}`}
                                    alt={story.title}
                                />
                                <h2>{story.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <span>events</span>
                <div className="flex gap-4">
                    {events.map((event) => {
                        if (!event.thumbnail) return null
                        return (
                            <div key={event.id}>
                                <img
                                    className="w-48 h-48 object-cover"
                                    src={`${event.thumbnail?.path}.${event.thumbnail?.extension}`}
                                    alt={event.title}
                                />
                                <h2>{event.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
