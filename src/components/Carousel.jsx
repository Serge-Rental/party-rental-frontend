import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import useFetch from '../servives/useFetch';
import Spinner from './Spinner';
import 'swiper/swiper-bundle.min.css';
import './Carousel.css'

const Carousel = ({category}) => {
    const {data: data, error, isLoading} = useFetch("products")
    
   

    if (error) throw error;
    if (isLoading) return <Spinner />
    const filterProducts = data.products.filter((product) => product.category === category)
    return (
        <div className="carousel">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={30}
                slidesPerView={6}
                centeredSlides={true}
                centerInsufficientSlides={true}
                loop={true}
                loopedSlidesLimit={false}
                pagination={{ clickable: true }}
                crollbar={{ draggable: true }}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {filterProducts.map((product) => {
                       return <SwiperSlide key={product.id}>
                            <img className="carousel-img" src={product.imageURL} alt={product.name} />

                        </SwiperSlide>
                    })}
            </Swiper>
            
        </div>
    );
};

export default Carousel;