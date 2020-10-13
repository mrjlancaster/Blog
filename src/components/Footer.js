import React from 'react';
import { Link } from 'react-router-dom';

// Material ui imports
import useStyles from '../Styles';
import { Box, Typography } from '@material-ui/core';



const Footer =() => {
	
	const classes = useStyles();


	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className={classes.footer}>
			<ul className={classes.footerNav}>
				<Link to="/Home" className={classes.footerLinks}>
					<li>Home</li>
				</Link>
				<Link to="/Episodes" className={classes.footerLinks}>
					<li>Episodes</li>
				</Link>
				<Link to="/Contact" className={classes.footerLinks}>
					<li>Contact</li>
				</Link>
			</ul>
			<Box className={classes.copyright}>
				<Typography variant="p">
					&copy;2020 The Alien Talks, All Rights Reserved
				</Typography>
			</Box>
			<div className={classes.buttonContainer}>
				<button 
				className={classes.upButton} onClick={handleScroll}>
					<i className="fas fa-arrow-up"></i>
				</button>
			</div>
		</div>
	)
}

export default Footer;
