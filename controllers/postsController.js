//we go and get the posts from /posts.js and import it here in /routes/postsRoute.js
//importing array of posts
  const data = require("../data/posts.js");

  function index  (req,res){
  //here we show all posts
  //creating a new array
  let filteredArray=data;
  if (req.query.tags){
    const tag=req.query.tags.toLowerCase(); 
    console.log(tag)
    filteredArray= data.filter(post=> post.tags.includes(tag));
  }
  
 
  res.send(filteredArray);
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
  res.json(post)
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
  

   const post = data.find(post => post.id=== parseInt(req.params.id));
  //  console.log(post)
  
if(post === undefined){
    res.status(404);
    return res.json ({
      status : 404,
      error: 'not found',
      message : 'post not found'
    })
  }

  // console.log(data.indexOf(post))
  data.splice(data.indexOf(post),1)
  res.sendStatus(204);
  console.log(data);
}

module.exports={
  index,
  show,
  create,
  modify,
  update,
  destroy
}