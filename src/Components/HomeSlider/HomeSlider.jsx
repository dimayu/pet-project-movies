import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_BASE_URL, API_KEY, API_LANG, URL_IMG } from '../../ServiceMovies/ServiceMovies';
import { Loader } from '../index';

import { Autoplay, Pagination, EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-creative";
import "./HomeSlider.scss";

export const HomeSlider = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&${API_LANG}&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);
    
    const swiperRefLocal = useRef()
    
    const handleMouseEnter = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.stop()
    };
    
    const handleMouseLeave = () => {
        swiperRefLocal?.current?.swiper?.autoplay?.start()
    };
    
    return (
        <>
            {loading
                ? <Loader/>
                : <Swiper
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    modules={[Pagination, Autoplay, EffectCreative]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={1000}
                    pagination={{clickable: true}}
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                >
                    {movies.results.slice(0, 6).map(movie => {
                        return (
                            <SwiperSlide key={movie.id}>
                                {movie.backdrop_path !== null
                                    ? <img
                                        src={URL_IMG + movie.backdrop_path}
                                        alt={movie.title || "no title"}
                                        width="100%" height="356px"
                                        className="slide__img"
                                    />
                                    : "Image Not Found"
                                }
                                <div className="slide__content">
                                    <div className="wrapper">
                                        <div className="slide__content--inner">
                                            <div className="slide__content__text">
                                                <h4 className="slide__content__text--title">{movie.title}</h4>
                                                <p className="slide__content__text--desc">{movie.overview}</p>
                                            </div>
                                            <div className="slide__content__bottom">
                                                <button className="slide__content__bottom--btn">Go to movie</button>
                                                <div className="slide__content__bottom--img">
                                                    {movie.poster_path !== null
                                                        ? <img
                                                            src={URL_IMG + movie.poster_path}
                                                            alt={movie.title || "no title"}
                                                            width="100%" height="356px"/>
                                                        : "Image Not Found"
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            }
        </>
    );
};