import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import { useDispatch, useSelector } from 'react-redux'
import { getPhotosAction } from './redux/slices/photosSlice'
import { Link } from 'react-router-dom';

    function SamplePrevArrow ({onClick, currentSlide}) {
        return (
            <>
                {currentSlide !== 0 && (
                    <div  onClick={onClick} className='buttons_arrow'>
                        <button className='left_btn'>
                            left
                        </button>
                    </div>
                )}
            </>
        )
    }

    function SampleNextArrow({onClick, slideCount, currentSlide}) {
        return(
            <>
                {currentSlide !== slideCount-4 && (
                    <div  onClick={onClick} className='buttons_arrow'>
                    <button className='right_btn'>
                       right
                    </button>
                </div>
                )
                }
            </>
        )
    }
  
function SliderShow() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };  
    const dispatch = useDispatch()

    const {photos} = useSelector(state => state.book)

    useEffect(() => {
        dispatch(getPhotosAction())
    }, [])
    

    
  return (
    <div className='slider'>
            <div className='container'>
                    <div className='slider_inner'>
                        <h1 className='tours_text'>Картины</h1>
                        <div className='cards_slider'>
                                <Slider {...settings}>
                                    {
                                        photos.slice(0, 20).map((item) => (
                                            <div key={item?.id} style={{display: 'inline-block', alignItems: 'center', justifyContent: 'center'}} className='top_slider'>
                                                <Link to={`/${item?.id}`}>
                                                    <img src={item?.url} alt="" style={{width: '200px', height: '100px'}}/>
                                                </Link>                                           
                                            </div>
                                        ))
                                    }
                                </Slider>
                        </div>
                    </div>
            </div>

    </div>
  );
  
}

export default SliderShow