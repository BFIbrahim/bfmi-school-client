import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {

    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='bg-black w-full bg-opacity-60'>
                        <div className='p-10 md:p-28 lg:p-28 w-3/4'>
                            <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'>Learn The <span className='italic text-orange-400'>Music</span> from The Experts</h1>
                            <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt eum in, nostrum esse ullam.</p>
                            <button className='btn bg-orange-400 mt-3 border-none text-white'> View Classes</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='bg-black w-full bg-opacity-60'>
                        <div className='p-10 md:p-28 lg:p-28 w-3/4'>
                            <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'>The best <span className='italic text-orange-400'>Music</span> School For You</h1>
                            <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt eum in, nostrum esse ullam.</p>
                            <button className='btn bg-orange-400 mt-3 border-none text-white'> View Classes</button>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='bg-black w-full bg-opacity-60'>
                        <div className='p-10 md:p-28 lg:p-28 w-3/4'>
                            <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'>Lets Starts with our <span className='italic text-orange-400'>Music</span> Experts</h1>
                            <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt eum in, nostrum esse ullam.</p>
                            <button className='btn bg-orange-400 mt-3 border-none text-white'> View Classes</button>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;