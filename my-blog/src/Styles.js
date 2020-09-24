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


	/* contact form styles */
	contactHeading: {
		textAlign: 'center'
	},

	/* home section styles */
	hero: {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showcase})`,
		height: 500,
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
	}
}));

export default useStyles;

