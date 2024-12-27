import React from 'react';
import Image from 'next/image';
import image from "../../public/image.png"

const AuthorCard = () => {
    return (
        <div className='bg-gray-700 shadow-lg rounded-lg p-6 mt-12 '>
            <div className='flex items-center animation-fadeIn'>
                <Image
                    className='w-20 h-20 rounded-full mr-4 object-cover border-2 border-cyan-500'
                    src={image}
                    alt='Author image'></Image>
                <div>
                    <h3 className='text-xl font-bold text-white'>Muhammad Talha</h3>
                    <p className='text-white'>Undergraduate BS Computer Science | Web Developer</p>
                </div>
            </div>


            <p className='mt-4 text-white leading-relaxed'>
                Muhammad Talha is an undergraduate in Bs computer Science with a passion for Web developer and sharing Knowledge through  articles
            </p>
            <div className=' mt-4 flex space-x-3'>
                <a href="#" className='px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-900 transition duration-300 '>Linkedin</a>
                <a href="#" className='px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-900 transition duration-300 '>Facebook</a>
                <a href="https://github.com/Muhammad361738" className='px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-900 transition duration-300 '>Github</a>

            </div>
        </div>
    );
}

export default AuthorCard;
