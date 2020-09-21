import React from 'react';

// Import styles file
import useStyles from '../Styles';

// Material UI imports
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';


function Header() {

	const classes = useStyles();

   return (
	 	<div>
			  	<AppBar className={classes.appBar} position="static">
					<Toolbar>
						<Typography variant="h6" color='primary'>
							The Alien Talks
						</Typography>
					</Toolbar>
				</AppBar>


			   {/* <div class="logo">
					<h1>The <span className="redtext">Alien</span><span className="blacktext"> Talks</span></h1>
             </div>
            <nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Episodes</li>
						<li>Contact</li>
					</ul>
					<button>Subscribe</button>
            </nav>
            <input type='text' placeholder='Search...'></input> */}
      </div>
   )
}

export default Header;
