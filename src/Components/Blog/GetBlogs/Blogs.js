import { Box, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
        })
    },[])
    return (
       
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          
          {
              blogs.map(blog=><Blog
              blog={blog}
              ></Blog>)
          }
        </Grid>
      </Box>
    );
};

export default Blogs;