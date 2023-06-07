import './Banner.css'

const Banner = () => {
    
    return (
        <div className='banner'>
            <div className='bg-black bg-opacity-60'>
                <div className='p-10 md:p-24 lg:p-24  md:w-3/4'>
                    <h1 className='text-4xl font-bold text-white mt-10'>Learn The <span className='italic text-orange-400'>Music</span> From The experts</h1>
                    <p className='pt-3 mb-3 text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis veritatis deserunt unde dolorum aperiam a ea assumenda adipisci recusandae.</p>
                    <button className='btn border-none bg-orange-400 text-white font-bold'>View Classes</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;