import React from 'react';
import { Link } from 'react-router-dom';

// Material UI imports
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function Header() {


	const classes = {
		headerContainer: {
			display: 'flex',
			marginTop: 20,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		},
		ul: {
			display: 'flex'
		},
		navLinks: {
			color: '#000',
			listStyle: 'none',
			textDecoration: 'none',
			marginRight: 60,
			fontSize: 17
		}
	};
	
   return (
	 	<div style={classes.headerContainer}>
			<Toolbar>
				<Typography variant="h1" color='main'>
					The Alien Talks
				</Typography>
			</Toolbar>
			<nav>
				<ul style={classes.ul}>
					<Link to="/Home" style={classes.navLinks}>
						<li>Home</li>
					</Link>
					<Link to="/Episodes" style={classes.navLinks}>
						<li>Episodes</li>
					</Link>
					<Link to="/Contact" style={classes.navLinks}>
						<li>Contact</li>
					</Link>
				</ul>
			</nav>
      </div>
   )
}

export default Header;
