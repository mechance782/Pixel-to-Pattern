"use client"
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Box from "@mui/material/Box";
import PixelDisplay from "@/components/PixelDisplay";
import PatternGenerator from "@/components/PatternGenerator";


export default function PatternPage({params}) {
    const { id } = useParams();
    const [post, setPost] = useState(null);

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
    }, []);

    if (!post) return <Typography>Loading...</Typography>

    return (
    <>
      <NavBar />
      <Box sx={{ p: 4,  display: "flex", justifyContent: "space-evenly"  }}>
        <PixelDisplay patternInfo={post.pattern_info} displayHeight={250} displayWidth={250}/>
        <Box>
          <Typography variant="h4">{post.pattern_name}</Typography>
          <Typography>author</Typography>
          <Typography>{post.date.slice(0,10)}</Typography>
        </Box>
        <Typography color="textSecondary" sx={{ mt: 2 }}>
          {post.description}
        </Typography>
      </Box>
      <hr />
      <PatternGenerator patternInfo={[]}/>
    </>
  );




}