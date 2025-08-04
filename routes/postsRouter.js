// import express
const express = require('express');
const router = express.Router();
//we go and get the posts from /posts.js and import it here in /routes/postsRoute.js
//importing array of posts
  const data = require("../posts.js");
// define all routes
//index for posts

router.get('/',(req,res)=>{
  //here we show all posts
  res.send(data);
})

// show id 
router.get('/:id',(req,res)=>{
  // res.send(`post id ${req.params.id}`);
  console.log(`we are showing post id:${req.params.id}`) //debug
  //define variable post in wich we will put our filter result
  const post = data.filter(obj => obj.id===parseInt(req.params.id))
  res.send(post)
})

// insert new  id 
router.post('/',(req,res)=>{
  res.send(`create new post`);
 
})

// update post  id 
router.put('/:id',(req,res)=>{
  res.send(`update post ${req.params.id}`);
})

// modify post  id 
router.patch('/:id',(req,res)=>{
  res.send(`modify post ${req.params.id}`);
})

// delete post  id 
router.delete('/:id',(req,res)=>{
  res.send(`delete post ${req.params.id}`);
})


module.exports=router;
