Template.postsList.helpers({
  posts: function() {
    // Con algun filtro
    //return Posts.find({author: 'Tom Coleman'});
    return Posts.find({}, {sort: {submitted: -1}});
  }
});
