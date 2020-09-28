import React from 'react';

// Material ui imports
import useStyles from '../Styles';
import { Box, Typography } from '@material-ui/core';



function Footer() {

	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<Box>
				<Typography variant="p">Home</Typography>
				<Typography variant="p">Episodes</Typography>
				<Typography variant="p">Contact</Typography>
			</Box>

		
			<Box>
				<Typography>
					&copy;2020 The Alien Talks, All Rights Reserved
				</Typography>
			</Box>

			<button><i class="fas fa-arrow-up"></i></button>

		</div>
	)
}

export default Footer;
