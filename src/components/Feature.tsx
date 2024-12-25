import React from 'react';

const Feature = () => {
    return (
        <div>
            <section className='py-8 bg-neutral-50 mb-40'>
                <h2 className='text-center px-4 text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out 
                transform hover:translate-y-[5px] hover:text-black text-cyan-900 '>
                    Talha : Navigating the Secrets of Technology in Teach Chronicles Blogs
                </h2>
                <p className='m-4 text-center mt-4  text-sm text-black sm:text-base md:mb-12 animate-fade-in-up delay-300'>
                Talha is a student pursuing a BS in Computer Science with a focus on General AI.
                 They have a strong interest in Artificial Intelligence and possess skills in web development
                  particularly in frontend technologies.
                   Talha is passionate about integrating AI with web applications to enhance user experiences.
                </p>
                <div className='mx-auto max-w-7xl px-5'>
                    <h1 className='text-3xl font-bold text-center my-8 text-cyan-500 animate-color-change'>
                        Explore Our Catagries
                    </h1>
                    <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
                        {[
                            "Technology",
                            "Artifical Intelligrnce",
                            "HTML",
                            "Python",
                            "Next Js",
                            "Web Development"
                        ].map((catagory,index)=>(
                            <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-black transition duration-300 ease-in-out transform scale-105 cursor-pointer flex items-center justify-center text-neutral-600 '> 
                                <p className='text-center text-lg font-semibold'>{catagory}</p>
                                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white transition duration-300 ease-in-out'></div>
                             </div>
                        ))}

                    </div>
                </div>
                        <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>Dive into a diverse range of categories, where you can discover a wealth of knowledge and insights tailored to your interests. Whether you are passionate about AI, web development, or the latest tech trends, there is always something new to learn. Expand your horizons and stay ahead of the curve by exploring content that aligns with your curiosity and goals.






</p>
            </section>
        </div>
    );
}

export default Feature;
