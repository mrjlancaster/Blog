import React, { useState } from 'react';

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
		<Typography className={classes.contactHeading} variant="h4" color='main'>
			Get In Touch
		</Typography>
		
		<form onSubmit={handleSubmit} className={classes.formContainer}>
			<Box>
				<TextField className={classes.nameInput} id="outlined-basic" label="Full Name" variant="outlined" value={form.name} onChange={handleNameChange} />
			</Box>
			<Box>
				<TextField className={classes.emailInput} id="outlined-basic" label="Email" variant="outlined" value={form.email} onChange={handleEmail} />
			</Box>
				
			<Box>
				<TextField className={classes.messageInput} id="outlined-basic" label="Message" variant="outlined" value={form.message} onChange={handleMessageChange}/>
			</Box>
			
			<div>
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>						
			</div>
		</form>
	</div> 
	)
}

export default Contact;

