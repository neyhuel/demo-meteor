Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      flagged: $(e.target).find('[name=flagged]').is(":checked")
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
