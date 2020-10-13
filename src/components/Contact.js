import React, { useState } from 'react';
import Footer from './Footer';

// Material ui
import useStyles from '../Styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';




const Contact = ()  => {

	const classes = useStyles();

	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleNameChange = (event) => {
		setForm({
			...form,
			name: event.target.value
		})
	}

	const handleEmail = (event) => {
		setForm({
			...form,
			email: event.target.value
		})
	}

	const handleMessageChange = (event) => {
		setForm({
			...form,
			message: event.target.value
		})
	}

	const handleSubmit = (event) => {
		if (form.name === '' && form.email === '' && form.message === '') {
			alert('Please fill form');
			event.preventDefault();
		} else {
			alert(`${form.name}, ${form.email}, ${form.message}`);
		}
	}

	return (
		<div>
		<form onSubmit={handleSubmit} className={classes.formContainer}>
			<Typography className={classes.contactHeading} variant="h4" color='main'>
				Get In Touch
			</Typography>
			<Box className={classes.formBox}>
				<TextField className={classes.nameInput} id="outlined-basic" label="Your Name" variant="outlined" value={form.name} onChange={handleNameChange} size="small" />
			</Box>
			<Box className={classes.formBox}>
				<TextField className={classes.emailInput} id="outlined-basic" label="Your Email" variant="outlined" value={form.email} onChange={handleEmail} size="small" />
			</Box>
			<Box className={classes.formBox}>
				<TextField id="outlined-multiline-static" label="Message" multiline rows={4} variant="outlined" value={form.message} className={classes.messageInput} onChange={handleMessageChange}/>
			</Box>
			<Box>
				<Button className={classes.button} type="submit" variant="contained" size="large" color="primary">
					Submit
				</Button>						
			</Box>
		</form>
		<Footer />
	</div> 
	)
}

export default Contact;

