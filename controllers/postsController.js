//we go and get the posts from /posts.js and import it here in /routes/postsRoute.js
//importing array of posts
  const data = require("../data/posts.js");

  const index = (req,res)=>{
  //here we show all posts
  res.send(data);
  }
  const show = (req,res)=>{
  // res.send(`post id ${req.params.id}`);
  console.log(`we are showing post id:${req.params.id}`) //debug
  //define variable post in wich we will put our filter result
  const post = data.filter(obj => obj.id===parseInt(req.params.id))
  res.send(post)
}
  const create = (req,res)=>{
  res.send(`create new post`);
 
}
  const modify = (req,res)=>{
  res.send(`update post ${req.params.id}`);
}
  const update = (req,res)=>{
  res.send(`modify post ${req.params.id}`);
}
  const destroy = (req,res)=>{
  res.send(`delete post ${req.params.id}`);
}

module.exports={
  index,
  show,
  create,
  modify,
  update,
  destroy
}