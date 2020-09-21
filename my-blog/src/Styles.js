import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import showcase from './img/header.jpg';


const useStyles = makeStyles((theme) => ({

	appBar: {
		backgroundColor: '#fff'
	},
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
	heroQuote: {
		fontSize: 22
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
		justifyContent: 'space-between'
	},
	author: {
		display: 'flex'
	}
}));

export default useStyles;
