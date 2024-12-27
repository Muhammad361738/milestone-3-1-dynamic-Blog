"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            setCurrentDateTime(now.toLocaleDateString("en-US", options));
        };

        updateDateTime(); // Initial call to set the time immediately
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <header className="bg-gray-900 mt-0 text-gray-100 body-font shadow-lg">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row gap-3 items-center">
                {/* Date and Time */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-sm text-gray-400">{currentDateTime}</p>
                </div>

                {/* Navbar Links */}
                <nav className="md:ml-auto flex flex-wrap items-center gap-4 text-gray-100 justify-center space-x-4">
                    <Link href="/" className="text-lg hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                        Home
                    </Link>
                    <Link href="/about" className="text-lg hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                        About
                    </Link>
                    <Link href="/blog" className="text-lg hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-lg hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                        Contact
                    </Link>
                </nav>

                {/* Github Button */}
                <button className="inline-flex items-center bg-blue-700 hover:bg-blue-600 py-2 px-2 rounded text-gray-100 mt-4 md:mt-0 transition-colors duration-300">
                    <span>Github</span>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5 ml-1 "
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" /> {/* Valid SVG path for arrow */}
                    </svg>
                </button>
            </div>
        </header>
    );
}
