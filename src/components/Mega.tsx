import React from 'react';
import BlogCard from '../components/BlogCard'; // Ensure the path and export match
// import exampleImage from '../path-to-image/image.png'; // Adjust to your actual image path

const Mega = () => {
    const posts = [
        {
            id: "1",
            title: "Machine Learning Mastery",
            description: "Explore The Machine Learning Mastery ",
            date: "2024-8-12",
            imageUrl: "../M1.png", // Use the imported image
        },
        {
            id: "2",
            title: "AWS Machine Learning ",
            description: "Explore The AWS Machine Learning ",
            date: "2024-8-12",
            imageUrl: "../aws.png", // Use the imported image
        },
        {
            id: "3",
            title: "Best AI Copywriting Tools",
            description: "Explore The Best AI Copywriting  ",
            date: "2024-8-12",
            imageUrl: "../copy.png", // Use the imported image
        },
        {
            id: "4",
            title: "Blockchain Technology ",
            description: "Explore The Blockchain Technology",
            date: "2024-8-12",
            imageUrl: "../blockchain.png", // Use the imported image
        },
        {
            id: "5",
            title: "ChatGPT Overview",
            description: "Explore The ChatGPT",
            date: "2024-8-12",
            imageUrl: "../chatgpt.png", // Use the imported image
        },
        {
            id: "6",
            title: "Google AI Overview",
            description: "Explore The Google AI ",
            date: "2024-8-12",
            imageUrl: "../google.png", // Use the imported image
        },
    ];

    return (
        <div className='my-2'>
            <h1 className='text-3xl font-bold text-center px-4   my-8 text-white animate-color-change'>
                Explore The World Of AI
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-4'>
                {posts.map((post, index) => (
                    <div className='fade-in' key={post.id}>
                        <div className='blog-card'>
                            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mega;
