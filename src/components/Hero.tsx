import React from 'react';

interface HeroProps {
    title: {
        main: string;
        highlight: string;
    };
    description: string;
    buttonText?: string;
    imageSrc?: string;
    imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    description,
}) => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Gradient Background */}
            <div
                className="absolute inset-0" 
        
            />

            {/* Main Content */}
            <div className="relative h-screen flex">
                {/* Left Content - 55% */}
                <div className=" hidden lg:block right-0 absolute md:displ w-[55%] h-full ">
                    {/* Image Container */}
                    <div className="relative w-full h-full flex justify-center items-center">

                        <img src="./hero.png" alt="" className='w-4/5 ' />

                    </div>
                </div>
                <div className="lg:w-[60%] flex items-center lg:m-auto z-20 px-6 sm:px-6 lg:px-14">
                    <div className=" border-white/10 max-w-2xl
                       backdrop-blur-3xl bg-white/60 p-10 rounded-3xl shadow-lg
                          before:absolute before:inset-0 before:bg-gradient-to-r 
                         before:to-transparent before:rounded-2xl
                          animate-glass-shine 
                        
                        ">
                        <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
                            <span className="block bg-gradient-to-r from-[#54d5d5] via-[#2e4fca] to-[#df264b] 
                             text-transparent bg-clip-text pb-3">{title.main}</span>
                            <span className="block black">
                                {title.highlight}
                            </span>
                        </h1>

                        <p className="mt-6 text-base text-gray-700 sm:text-lg md:text-xl">
                            {description}
                        </p>
                    </div>
                </div>


            </div>

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-32 h-32 bg-[#2e4fca] rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#54d5d5] rounded-full blur-3xl opacity-10"></div>
            </div>
        </div>
    );
};

export default Hero;
