Meteor.publish('posts', function() {
	return Posts.find({ flagged: false });
});

Meteor.publish('comments', function(postId) {
	check(postId, String);
	return Comments.find({postId: postId});
});