"use client";
import { useEffect, useState } from "react";
import PixelPost from "./PixelPost.jsx";
export default function MainHome() {

    const [ pixelPosts, setPixelPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("http://localhost:3001/patterns");
                if (!res.ok) throw new Error("failed to fetch posts");
                const posts = await res.json();
                setPixelPosts(posts);
            } catch (error) {
                console.error('failed to fetch posts ', error);
            } 
        }
        fetchPosts();

    }, []);

    return(
        <>
        {pixelPosts.map((post, index) => (
            <PixelPost key={index} post={post} />
        ))}
        
        </>
    )
}