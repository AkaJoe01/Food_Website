const Hero = () => {
    return(
        <div>
            <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 min-h-[600px]">
                {/* TEXT SECTION */}
                <div className="flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10">
                <h1 className='text-3xl font-semibold'>
                    Food will be ready soon
                </h1>
                <p className='font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit optio esse cupiditate provident mollitia! Sunt, commodi praesentium! Excepturi,
                    maiores totam.
                </p>
                <div className='flex gap-4 items-center md:justify-start justify-center'>
                        <button className="primary-btn">Food Menu</button>
                        <button className='secondary-btn text-black'>Book a table</button>
                </div>
                </div>
                {/* Image section */}
                <div className="flex flex-col justify-center" >
                    <img src="/images/Veges.jpg" alt="veges" />
                </div>
            </div>
        </div>
    )
}

export default Hero