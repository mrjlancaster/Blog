import React from 'react';

// Material ui
import makeStyles from '../Styles';
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

		// const classes = makeStyles();

		const style = {
			formContainer: {
				display: 'flex',
				backgroundColor: 'blue'
			},
			name: {
				fontSize: 30
			}
		}


		return (
			<div>
			{/* <Typography 
			className={classes.contactHeading} 
			variant="h3" 
			color='main'>
				Contact
			</Typography>			 */}
			<form styles={style.formContainer} onSubmit={this.handleSubmit}>
				<div>
					<label styles={style.name}>Full Name</label>
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

				<button type="submit">Submit</button>
			</form>
		</div> 
			
		)
	}
}

export default Contact;

