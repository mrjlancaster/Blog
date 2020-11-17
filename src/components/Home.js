import React from 'react';
import useStyles from '../Styles';

// layouts
import Hero from './Hero';
import Post from './Post';
import Footer from './Footer';

// material ui imports
import { Box } from '@material-ui/core'


// App
function Home() {
	const classes = useStyles();

	return (
		<div className="App">
			<Hero />
			<Box className={classes.bodyContainer}>
				<Post />
			</Box>
			<Footer />
		</div>
	);
}

export default Home;
