import React from 'react';
import Image from 'next/image'
import heroImage from '../../../public/heroImage.png'

const HeroSection = () => {
    return (
            // herosection contain an image and text
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 relative ">
                        <Image src={heroImage}
                               alt="image"
                               className="w-60 h-72 flex w-full flex-end justify-end md:w-full md:h-auto"
                               width={100}
                                 height={100}
                        />
                    </div>
                    <div className="w-full md:w-1/2 absolute z-10 md:relative px-5 flex flex-col gap-y-1">
                        <div className="w-full md:w-1/2 flex flex-col gap-y-1">
                            <h1 className="text-2xl bg-gray-100 w-max font-bold text-gray-900 shadow-xl">For every student, <br/> </h1>
                            <h1 className="text-2xl bg-gray-100 w-max font-bold text-gray-900 shadow-xl">every classroom. <br/></h1>
                            <h1 className="text-2xl bg-gray-100 w-max font-bold text-gray-900 shadow-xl">Real results.</h1>
                            <p className="text-sm bg-gray-100 w-max text-gray-700">We're a nonprofit with the mission to provide</p>
                            <p className="text-sm bg-gray-100 w-max text-gray-700">free, world-class education for anyone, anywhere.</p>
                        </div>
                        {/*     button for sm   */}
                        <div className="flex my-2 md:flex-start hidden md:flex">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-44">Start free trial</button>
                        </div>
                    </div>
                </div>
            {/*     button for start trial   */}
                <div className="flex justify-center md:flex-start md:hidden">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-44">Start free trial</button>
                </div>
            </div>

    );
}

export default HeroSection;