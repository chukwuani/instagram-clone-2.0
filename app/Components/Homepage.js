"use client"
import React, { useState } from 'react'
import Createpost from './Createpost'
import Feed from './Feed'
import Navbar from './Navbar'
import Stories from './Stories'
import Suggested from './Suggested'

export default function Homepage() {
  const [post, setPost] = useState(false)
  return (
    <>
        <Navbar active="Home" top={true} post={setPost} setter={post}/>
        <div className="homepage">
        <div className="left-side-homepage">
         <Stories />
         <Feed />
        </div>
        <Suggested />
        </div>  

        {post && <Createpost close={setPost} closer={post}/>}
    </>

  )
}
