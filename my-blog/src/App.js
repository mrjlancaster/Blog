import React from 'react';
import useStyles from './Styles';

// layouts
import Header from './components/Header';
import Hero from './components/Hero';
import Post from './components/Post';

// material ui imports
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


// App
function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<Header />
			<Hero />
			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Typography variant="h4" className={classes.blogTitle}>
					Episodes
				</Typography>
				<Grid container spacing={3}>
					<Post />
				</Grid>
			</Container>
		</div>
	);
}

export default App;
