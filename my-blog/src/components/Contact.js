import React from 'react';

// Material ui
import makeStyles from '../Styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



function Contact() {

	const classes = makeStyles();

	return (
		<div>
			<Typography className={classes.contactHeading} variant="h3" color='main'>
				Contact
			</Typography>			
			<form className={classes.root} noValidate autoComplete="off">
				<TextField id="outlined-basic" label="Full Name" variant="outlined" className={classes.nameInput} />
				<Box className={classes.formMessage}>
					<TextField id="outlined-basic" label="Message" variant="outlined" />
				</Box>
				<Button variant="contained" color="primary">
					Send Message
				</Button>
			</form>
		</div> 
	)
}

export default Contact;

