import React from 'react';
import "./Cover.scss";
import Carousel from 'nuka-carousel/lib/carousel';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Cover = () => {
  const Banner = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg"
  ]

  return (
    <div className='cover'>
      <Carousel
        autoplay
        autoplayReverse
        wrapAround={true}
        edgeEasing="easeOutCirc"
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'red',
            padding: '20px',
          }
        }}
        renderCenterLeftControls={({ previousSlide }) => (
          <AiOutlineLeft onClick={previousSlide} className='leftIcon' />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <AiOutlineRight onClick={nextSlide} className='rightIcon'/>
        )}
        
      >
        {Banner.map((bannerSrc, index) => (
          <img key={index} alt={`bannerSrc ${index + 1}`} src={bannerSrc} />
        ))}
      </Carousel>
    </div>
  )
}

export default Cover
