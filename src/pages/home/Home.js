import React from 'react';
import "./Home.scss";
import Popular from '../../components/home/Popular';
import Upcomming from '../../components/home/Upcomming';
import TopRated from '../../components/home/TopRated';
import Navbar from '../../components/general/navbar/Navbar';
import Cover from '../../components/general/cover/Cover';


// https://www.youtube.com/watch?v=h6hZkvrFIj0 (for video)

const Home = () => {

  return (
    <div className='home'>
      <Cover/>
      <div className='product-container'>
      <h3>Popular</h3>
      <Popular />
      <h3>Upcomming</h3>
      <Upcomming />
      <h3>Top Rated</h3>
      <TopRated />
      </div>
    </div>
  )
}

export default Home
