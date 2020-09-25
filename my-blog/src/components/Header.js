import React from 'react';
import { Link } from 'react-router-dom';

// Material UI imports
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles';


function Header() {

	const classes = useStyles()

   return (
	 	<div className={classes.headerContainer}>
			<Toolbar>
				<Typography variant="h1" color='main'>
					The Alien Talks
				</Typography>
			</Toolbar>
			<nav>
				<ul className={classes.ul}>
					<Link to="/Home" className={classes.navLinks}>
						<li>Home</li>
					</Link>
					<Link to="/Episodes" className={classes.navLinks}>
						<li>Episodes</li>
					</Link>
					<Link to="/Contact" className={classes.navLinks}>
						<li>Contact</li>
					</Link>
				</ul>
			</nav>
      </div>
   )
}

export default Header;
