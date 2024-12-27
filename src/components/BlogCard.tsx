import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
    post: { id: string; title: string; description: string; date: string; imageUrl: string };
    isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
    return (
        <Card
            className={`overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
                isDarkBackground ? 'bg-gray-800 text-gray-100' : 'bg-gray-700 text-gray-200'
            }`}
        >
            {/* Image Section */}
            <div className="relative w-full h-56 overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Content Section */}
            <CardContent className="p-6">
                <CardTitle className="text-3xl font-semibold mb-4 text-center capitalize">
                    {post.title}
                </CardTitle>
                <p className="text-base leading-relaxed text-gray-400 line-clamp-3">
                    {post.description}
                </p>
            </CardContent>

            {/* Footer Section */}
            <div className="p-6 pt-4">
                <p className={`text-sm mb-4 text-center ${
                    isDarkBackground ? 'text-gray-500' : 'text-gray-400'
                }`}>
                    Published on: {new Date(post.date).toLocaleDateString()}
                </p>
                <a
                    href={`/posts/${post.id}`}
                    className={`block w-full px-6 py-3 text-center font-medium rounded-md transition-colors duration-300 ${
                        isDarkBackground
                            ? 'bg-blue-700 text-white hover:bg-blue-600'
                            : 'bg-gray-600 text-white hover:bg-gray-500'
                    }`}
                >
                    Read More
                </a>
            </div>
        </Card>
    );
};

export default BlogCard;
