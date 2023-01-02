
import React from 'react';

function Homepage({ heading,message}) {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img  '>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]  ' />
            <div className='p-5 text-white z-[2] mt-6 '>
                <h2 className='text-6xl font-bold pt-20 mt-10 ml-8 '>{heading}</h2>
                
                <p className='py-8 text-xl  ml-8 text-justify '>{message}</p>
                <button className=' font-bold px-8 py-2  ml-8 bg-purple-700 hover:bg-purple-800'>Explore free Code-c</button>
            </div>
        </div>
    );
}

export default Homepage;