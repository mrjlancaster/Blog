import React from 'react';
import { Link } from 'react-router-dom';

// Import styles file
import useStyles from '../Styles';

// Material UI imports
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';


function Header() {

	const classes = useStyles();
	
	const navStyle = {
		ul: {
			display: 'flex'
		},
		navLinks: {
			color: '#000',
			listStyle: 'none',
			textDecoration: 'none',
			marginRight: 60,
			fontSize: 25
		},
	}


   return (
	 	<div>
			  	{/* <AppBar className={classes.appBar} position="static">
					<Toolbar>
						<Typography variant="h6" color='main'>
							The Alien Talks
						</Typography>
					</Toolbar>
				</AppBar> */}

				<Toolbar>
					<Typography variant="h6" color='primary'>
						The Alien Talks
					</Typography>
				</Toolbar>
            <nav>
					<ul style={navStyle.ul}>
						<Link to="/Home" style={navStyle.navLinks}>
							<li>Home</li>
						</Link>
						<Link to="/About" style={navStyle.navLinks}>
							<li>About</li>
						</Link>
						<Link to="/Episodes" style={navStyle.navLinks}>
							<li>Episodes</li>
						</Link>
						<Link to="/Contact" style={navStyle.navLinks}>
							<li>Contact</li>
						</Link>
					</ul>
					<button>Subscribe</button>
            </nav>
            <input type='text' placeholder='Search'></input>
      </div>
   )
}

export default Header;
