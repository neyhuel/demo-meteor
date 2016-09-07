Template.postsList.helpers({
  posts: function() {
    // Con lagun filtro
    //return Posts.find({author: 'Tom Coleman'});
    return Posts.find({});
  }
});
