//we go and get the posts from /posts.js and import it here in /routes/postsRoute.js
//importing array of posts
  const data = require("../data/posts.js");

  function index  (req,res){
  //here we show all posts
  //creating a new array
  let filteredArray=data;
  // if (res.query.tags){
    console.log(data)
  // }
  // res.send(data);
  }
  function show  (req,res){
  // res.send(`post id ${req.params.id}`);
  console.log(`we are showing post id:${req.params.id}`) //debug
  //define variable post in wich we will put our filter result
  let post = data.find(obj => obj.id===parseInt(req.params.id))
  if(!post){

    return res.status(404).json({
      error: '404 not found',
      message:'post not found'
    })
  }
  res.send(post)
}
  function create  (req,res){
  res.send(`create new post`);
 
}
  function modify  (req,res){
  res.send(`update post ${req.params.id}`);
}
  function update (req,res){
  res.send(`modify post ${req.params.id}`);
}
  function destroy  (req,res){
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