import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleToBooksmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
},[])

    return (
        <div className="w-2/3">
           <h1>Total Blogs : {blogs.length}</h1>

           {
            blogs.map(blog=><Blog key={blog.id} 
                blog={blog}
                handleToBooksmark={handleToBooksmark}
                handleMarkAsRead={handleMarkAsRead}
            ></Blog>)
           }
        </div>
    );
};

export default Blogs;