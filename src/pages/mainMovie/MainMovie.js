import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./MainMovie.scss";

const MainMovie = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const [movie, setMovie] = useState([]);
    const getApi = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=87ad406424c15b5250add79381783609`)
        const data = await resp.json();
        setMovie(data);
    }
    useEffect(() => {
        getApi();
    }, [])
    console.log(movie)

  return (
    <div className='mainmovie'>
      <div className='left-mainmovie'>
        <img src={movie.backdrop_path} alt='...' />
        <div className='buttons'>
            <button type="button"></button>
            <button type="button" className="btn-outline-primary">bfsgsvafa</button>
        </div>
        <div className='icons'>

        </div>
      </div>
      <div className='right-mainmovie'>

      </div>
    </div>
  )
}

export default MainMovie
