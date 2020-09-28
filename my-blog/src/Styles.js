import { makeStyles } from '@material-ui/core/styles';
import showcase from './img/hero.jpg';


// const headerStyles = makeStyles(() => ({
// 	ul: {
// 		display: 'flex'
// 	},
// 	navLinks: {
// 		color: '#000',
// 		listStyle: 'none',
// 		textDecoration: 'none',
// 		marginRight: 60,
// 		fontSize: 25
// 	}
// }));


// Header styles
// const headerStyles = makeStyles((theme) => ({

// }))

// const contactStyles = makeStyles((theme) => ({

// }))



const useStyles = makeStyles((theme) => ({

	// header styles
	headerContainer: {
		height: '25vh',
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
	},

	// contact page style
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '65vh'
	},
	contactHeading: {
		textAlign: 'center',
		position: 'relative',
		bottom: 20
	},
	formBox: {
		marginBottom: 15
	},
	nameInput: {
		width: 400,
	},
	emailInput: {
		width: 400,
	},
	messageInput: {
		width: 400,
	},
	button: {
		width: 400
	},

	

	/* home section styles */
	hero: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showcase})`,
		height: 300,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '4rem',
		flexDirection: 'Column'
	},
	blogsContainer: {
		paddingTop: theme.spacing(3)
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3)
	},
	card: {
		maxWidth: "100%"
	},
	media: {
		height: 240, 
	},
	cardActions: {
		display: 'flex',
		margin: '0 10px',
		justifyContent: 'flex-end'
	},
	date: {
		display: 'flex'
	},
	footer: {
		minHeight: 200,
		backgroundColor: '#000',
		color: '#cacaca',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	footerNav: {
		display: 'flex',
		position: 'relative',
		top: 60,
	},
	footerLinks: {
		color: '#cacaca',
		listStyle: 'none',
		textDecoration: 'none',
		fontSize: 20,
		margin: '0 25px 0 25px'
	},
	copyright: {
		marginBottom: 5
	},
	buttonContainer: {
		display: 'flex',
		width: '100%',
		position: 'absolute',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		margin: '15px 20px 0 0'
	},
	upButton: {
		background: 'none',
		color: '#fff',
		height: 40,
		outline: 'none',
		width: 50,
		transition: 'all 400ms ease',
		border: '1px solid gray',
		cursor: 'pointer',
		'&:hover': {
			opacity: '0.5'
		}
	}
}));

export default useStyles;

