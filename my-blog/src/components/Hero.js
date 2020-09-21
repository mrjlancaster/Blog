import React from 'react';

// Import styles file
import useStyles from '../Styles';

// Material UI imports
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function Hero() {

	const classes = useStyles();

	return (
		<div>
			<Box className={classes.hero}>
				<Box>The Alien Talks</Box>
			<Typography className={classes.heroQuote} component='p'>What would the alien think?</Typography>
			</Box>
		</div>
	)
}

export default Hero;
