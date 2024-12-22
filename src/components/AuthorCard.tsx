import React from 'react';
import Image from 'next/image';
import image from "../../public/image.png"

const AuthorCard = () => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-6 mt-12 '>
            <div className='flex items-center animation-fadeIn'>
                <Image
                    className='w-20 h-20 rounded-full mr-4 object-cover border-2 border-cyan-500'
                    src={image}
                    alt='Author image'></Image>
                <div>
                    <h3 className='text-xl font-bold'>Muhammad Talha</h3>
                    <p className='text-slate-500'>Undergraduate BS Computer Science | Web Developer</p>
                </div>
            </div>


<p>
Muhammad Talha is an undergraduate in Bs computer Science with a passion for Web developer and sharing Knowledge through  articles
</p>
        </div>
    );
}

export default AuthorCard;
