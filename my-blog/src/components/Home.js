import React from 'react';
import useStyles from '../Styles';
import Template from './Template';

// layouts
import Hero from './Hero';
import Post from './Post';
import Footer from './Footer';

// material ui imports
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


// App
function Home() {
	const classes = useStyles();

	return (
		<div className="App">
			<Hero />
			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Typography variant="h4" className={classes.blogTitle}>
					Episodes
				</Typography>
				<Grid container spacing={3}>
					<Post />
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
