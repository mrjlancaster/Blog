const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const Post = require('./models/Posts');

// testing route
app.get('/posts', (req, res) => {
	const post = new Post({
		title: 'Coronavirus',
		description: 'briefly talking about corona'
	});
	post.save()
		 .then(item => {
			  res.send(item)
		 })
})

// Connect to DB
mongoose.connect(process.env.DB_POSTS, { useNewUrlParser: true }, () => {
	// connection success message
	console.log('Connected to MongoDB successfully!');
	
	// Run server
	app.listen(3000, () => {
		console.log('Server running on port 3000');
	})
})
