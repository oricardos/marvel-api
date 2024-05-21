import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import md5 from 'md5'
import { SwiperSlide } from 'swiper/react'
import { Slider } from '../../components/Slider'
import { ChangeSliderButtons } from '../../components/ChangeSliderButtons'
import { ItemDisplayCard } from '../../components/ItemDisplayCard'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    const swiperRef = useRef()
    const comicsRef = useRef()
    const privateKey = import.meta.env.VITE_PRIVATE_KEY
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const baseUrl = import.meta.env.VITE_BASE_URL

    const [characters, setCharacters] = useState([])
    const [comics, setComics] = useState([])

    const heroesSettings = {
        spaceBetween: 5,
        // slidesPerView: 6,
        loop: true,
        onSwiper: (swiper) => {
            swiperRef.current = swiper
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    }

    const comicsSettings = {
        spaceBetween: 5,
        // slidesPerView: 6,
        loop: true,
        onSwiper: (swiper) => {
            comicsRef.current = swiper
        },
        breakpoints: {
            640: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    }

    useEffect(() => {
        const ts = new Date().getTime()
        const hash = md5(ts + privateKey + publicKey)
        
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(`${baseUrl}/characters`, {
                    params: {
                        ts,
                        apikey: publicKey,
                        hash,
                        limit: 10,
                    },
                })
                setCharacters(response.data.data.results)
            } catch (error) {
                console.error('Erro ao buscar personagens: ', error)
            }
        }

        const fetchComics = async () => {
            try {
                const response = await axios.get(`${baseUrl}/comics`, {
                    params: {
                        ts,
                        apikey: publicKey,
                        hash,
                        limit: 10,
                    },
                })
                setComics(response.data.data.results)
            } catch (error) {
                console.error('Erro ao buscar Comics: ', error)
            }
        }

        fetchCharacters()
        fetchComics()
    }, [])

    useEffect(() => {
        console.log({ characters })
    }, [characters])

    return (
        <div className="space-y-20">
            <>
                <div className="w-auto">
                    <div className="flex justify-between mb-8">
                        <h1 className="text-4xl">Characters</h1>
                        <ChangeSliderButtons swiperRef={swiperRef} />
                    </div>
                    {/* Swiper NÃO PODE FICAR DENTRO DE UMA DIV COM FLEX/GRID */}
                    {/* https://github.com/nolimits4web/swiper/issues/3599 */}
                    <Slider settings={heroesSettings}>
                        {characters.map((character) => {
                            if (
                                character.thumbnail.path.includes(
                                    'image_not_available'
                                )
                            ) {
                                return null
                            }
                            return (
                                <SwiperSlide key={character.id}>
                                    <Link to={`/characters/${character.id}`}>
                                        <ItemDisplayCard
                                            item={character}
                                            type="hero"
                                            name={character.name}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Slider>
                </div>
            </>
            <div>
                <div className="flex justify-between mb-8">
                    <h1 className="text-4xl">Comics</h1>
                    <ChangeSliderButtons swiperRef={comicsRef} />
                </div>
                <Slider settings={comicsSettings}>
                    {comics.map((comic) => {
                        if (
                            comic.thumbnail.path.includes('image_not_available')
                        ) {
                            return null
                        }
                        return (
                            <SwiperSlide key={comic.id}>
                                <ItemDisplayCard
                                    item={comic}
                                    type="comic"
                                    name={comic.title}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
