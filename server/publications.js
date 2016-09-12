Meteor.publish('posts', function() {
	return Posts.find({ flagged: false });
});

Meteor.publish('comments', function() {
	return Comments.find();
});