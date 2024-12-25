import React from 'react';
import BlogCard from '../components/BlogCard'; // Ensure the path and export match
// import exampleImage from '../path-to-image/image.png'; // Adjust to your actual image path

const Mega = () => {
    const posts = [
        {
            id: "1",
            title: "HTML Block of Webdevelopment",
            description: "Explore The HTML: Backbone of Every Web App",
            date: "2024-8-12",
            imageUrl: "../image.png", // Use the imported image
        },
        {
            id: "2",
            title: "HTML Block of Webdevelopment",
            description: "Explore The HTML: Backbone of Every Web App",
            date: "2024-8-12",
            imageUrl: "../image.png", // Use the imported image
        },
        {
            id: "3",
            title: "HTML Block of Webdevelopment",
            description: "Explore The HTML: Backbone of Every Web App",
            date: "2024-8-12",
            imageUrl: "../image.png", // Use the imported image
        },
        {
            id: "4",
            title: "HTML Block of Webdevelopment",
            description: "Explore The HTML: Backbone of Every Web App",
            date: "2024-8-12",
            imageUrl: "../image.png", // Use the imported image
        },
        {
            id: "5",
            title: "HTML Block of Webdevelopment",
            description: "Explore The HTML: Backbone of Every Web App",
            date: "2024-8-12",
            imageUrl: "../image.png", // Use the imported image
        },
        {
            id: "6",
            title: "HTML Block of Webdevelopment",
            description: "Explore The HTML: Backbone of Every Web App",
            date: "2024-8-12",
            imageUrl: "../image.png", // Use the imported image
        },
    ];

    return (
        <div className='my-8'>
            <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
                Explore The World Of AI
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
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
