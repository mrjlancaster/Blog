import React from 'react';

// Import styles file
import useStyles from '../Styles';

// Material UI imports
import Box from '@material-ui/core/Box';


function Hero() {

	const classes = useStyles();

	return (
		<Box className={classes.hero}>
			{/* <Box>The Alien Talks</Box>
		<Typography className={classes.heroQuote} component='p'>What would the alien think?</Typography> */}
		</Box>
	)
}

export default Hero;
