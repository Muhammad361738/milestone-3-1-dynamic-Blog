
"use client";

import React, { useEffect, useState } from "react";
import CommentSection from "@/components/Comments";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "HTML Block of Web Development",
    description: "Explore The HTML: Backbone of Every Web App",
    image: "../image.png",
  },
  {
    id: "2",
    title: "HTML Block of Web Development",
    description: "Explore The HTML: Backbone of Every Web App",
    image: "../image.png",
  },
  // Add other posts...
];

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );

  useEffect(() => {
    params.then((resolved) => setResolvedParams(resolved));
  }, [params]);

  if (!resolvedParams) {
    return <h2 className="text-2xl font-bold text-center mt-10">Loading...</h2>;
  }

  const { id } = resolvedParams;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
