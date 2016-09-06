Template.postsList.helpers({
  posts: function() {
    return Posts.find({author: 'Tom Coleman'});
  }
});
