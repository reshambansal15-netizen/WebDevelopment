import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/PostCard/PostCard";

import API from "../../services/api";

import "./Home.css";

import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {

  const [posts,setPosts]=useState([]);

  const fetchPosts = async()=>{

    try{

      const {data}=await API.get("/posts");

      setPosts(data);

    }catch(error){

      console.log(error);

    }

  }

  useEffect(()=>{

    fetchPosts();

  },[]);

  return (
  <>
    <Navbar />

    <div className="home">

      <Sidebar />

      <div>

        <CreatePost fetchPosts={fetchPosts} />

        {posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            fetchPosts={fetchPosts}
          />
        ))}

      </div>

    </div>
  </>
);

}

export default Home;