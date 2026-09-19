import React from 'react';
import Post from '../components/Post';
//TODO: fetch data from an API instead of using static data
const blogsData = [
    {
        id: 1,
        title: "How to Start Learning Web Development",
        author: "Moktarul Islam",
        category: "Web Development",
        date: "2026-09-10",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description:
            "A beginner-friendly guide to starting your journey in web development with HTML, CSS, JavaScript, and React."
    },
    {
        id: 2,
        title: "Why JavaScript Is Important for Developers",
        author: "John Doe",
        category: "JavaScript",
        date: "2026-09-11",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        description:
            "Learn why JavaScript is one of the most important programming languages for modern web development."
    },
    {
        id: 3,
        title: "Understanding React Components",
        author: "Sarah Khan",
        category: "React",
        date: "2026-09-12",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        description:
            "Understand how React components work and how you can build reusable UI components for your applications."
    },
    {
        id: 4,
        title: "Getting Started with Next.js",
        author: "David Smith",
        category: "Next.js",
        date: "2026-09-14",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        description:
            "Explore the basic concepts of Next.js and learn how it can help you build modern and scalable web applications."
    },
    {
        id: 5,
        title: "Tips for Becoming a Better Programmer",
        author: "Ayesha Rahman",
        category: "Programming",
        date: "2026-09-16",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description:
            "Discover practical habits and strategies that can help you improve your programming skills step by step."
    }
];


const BlogsPage = () => {
    return (
        <div>
            <h2>Our Blogs</h2>
            {blogsData.map(post => <Post key={post.id} post={post}></Post>)}

        </div>
    );
};

export default BlogsPage;