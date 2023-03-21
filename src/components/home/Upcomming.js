import Carousel from 'nuka-carousel/lib/carousel';
import React, { useEffect, useState } from 'react';
import "./Popular.scss";
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { getUpcommingHome } from '../../API/Urls';


const Upcomming = () => {
    const imgUrl = "https://image.tmdb.org/t/p/w500/";
    const [movies, setMovies] = useState([]);
    const getApi = async () => {
        const data = await getUpcommingHome()
        setMovies(data?.data?.results);
    }

    useEffect(() => {
        getApi()
    }, [])
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
                renderCenterLeftControls={({ previousSlide }) => (
                    <AiOutlineLeft onClick={previousSlide} className='product-leftIcon' />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <AiOutlineRight onClick={nextSlide} className='product-rightIcon' />
                )}

            >
                {movies.map((img, index) => (
                    <img key={index} alt={`${imgUrl + img.backdrop_path} ${index + 1}`} src={imgUrl + img.backdrop_path} />
                ))}
            </Carousel>
        </div>
    )
}

export default Upcomming;
