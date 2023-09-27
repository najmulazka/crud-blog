const fs = require("fs");
const posts = require("../database/posts");
const PostModel = require("../models/post");

function create(title, body) {
  let newPost = new PostModel(posts.id++, title, body);
  posts.data.push(newPost);

  fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));
}

function index() {}
function show(id) {
  const post = posts.data.find((post) => post.id === id);
  return post;
}
function update(id, title, body) {
  const postIndex = posts.data.findIndex(post => post.id == id);
  if (postIndex !==-1){
      posts.data[postIndex].title = title;
      posts.data[postIndex].body = body;
  }
}
function destroy(id) {
  const postIndex = posts.data.findIndex((post) => post.id === id);

  if (postIndex !== -1) {
    const deletedPost = posts.data.splice(postIndex, 1)[0];

    fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));

    return deletedPost;
  } else {
    return null;
  }
}

module.exports = { create, index, show, update, destroy };
