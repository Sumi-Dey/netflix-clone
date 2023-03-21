import Carousel from 'nuka-carousel/lib/carousel';
import React, { useEffect, useState } from 'react';
import "./Popular.scss";
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { getPopularHome } from '../../API/Urls';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Popular = () => {
    const imgUrl = "https://image.tmdb.org/t/p/w500/";
    const [movies, setMovies] = useState([]);
    const getApi = async () => {
        const data = await getPopularHome()
        setMovies(data?.data?.results);
    }


    useEffect(() => {
        getApi();
    }, [])
    console.log(movies)

    const navigate = useNavigate()
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow:<AiOutlineRight/>
    };
    return (
        <div className='popular'>
            <Carousel
                wrapAround={true}
                slidesToShow={6}
                cellSpacing={50}
                adaptiveHeight={true}
                defaultControlsConfig={{
                    pagingDotsStyle: {
                        display: "none"
                    }
                }}
                className='banner'
                renderCenterLeftControls={({ previousSlide }) => (
                    <AiOutlineLeft onClick={previousSlide} className='product-leftIcon' />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <AiOutlineRight onClick={nextSlide} className='product-rightIcon' />
                )}

            >
                {movies.map((m, index) => (
                    <div>
                        <Link to='/login' ><img key={m.id} alt={`${imgUrl + m.backdrop_path} ${index + 1}`} src={imgUrl + m.backdrop_path} /></Link>
                    </div>
                ))}
            </Carousel>

            {/* <Slider {...settings}>
                {movies.map((m, index) => (
                    <div>
                       <Link to='/login'><img key={m.id}  src={imgUrl + m.backdrop_path} /></Link> 
                    </div>
                ))}
            </Slider> */}
        </div>
    )
}

export default Popular;
