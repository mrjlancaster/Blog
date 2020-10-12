const express = require('express');

// Create express app
const app = express();

// Run server
app.listen(3000, () => {
	console.log('Server running on port 3000');
});
