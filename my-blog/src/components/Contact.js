import React from 'react';

// Material ui
import useStyles from '../Styles';
import Typography from '@material-ui/core/Typography';




class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};
	}

	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	handleEmail = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handleMessageChange = (event) => {
		this.setState({
			message: event.target.value
		})
	}

	handleSubmit = (event) => {
		alert(`${this.state.name}, ${this.state.email}, ${this.state.message}`);
	}
	
	render() {

		// const classes = useStyles();
		// const formStyles = {
		// 	formContainer: {
		// 		display: 'flex',
		// 		flexDirection: 'column',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 		height: '80vh'
		// 	}
		// }


		return (
			<div>
			{/* <Typography className={classes.contactHeading} variant="h3" color='main'>
				Contact
			</Typography> */}
			
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Full Name</label>
					<input type="text" placeholder="name" value={this.state.name} onChange={this.handleNameChange}/>
				</div>

				<div>
					<label>Email</label>
					<input type="email" value={this.state.email} onChange={this.handleEmail} />
				</div>

				<div>
					<textarea 
						value={this.state.message} 
						onChange={this.handleMessageChange}>
					</textarea>
				</div>

				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div> 

		)
	}
}

export default Contact;

