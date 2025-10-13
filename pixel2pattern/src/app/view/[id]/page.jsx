"use client"
import { Typography } from "@mui/material";
import { useEffect } from "react";


export default function PatternPage({params}) {
    const { id } = params;
    const [post, setPost] = useState({});

    useEffect(()=> {
        const fetchPost = async () => {
            try{
                const res = await fetch(`http://localhost:3001/patterns/${id}`);
                if(!res.ok) throw new Error(`Failed to fetch post with ID: ${id}`);
                const post = await res.json();
                setPost(post);
            } catch(err){
                console.error('Failed to fetch post, ', err);
            }
        }

        fetchPost();
    }, [])

    return(
        <>
            <Typography>Test</Typography>
            {console.log(id)}
        </>
    )




}