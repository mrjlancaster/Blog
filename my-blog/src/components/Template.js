import React from 'react';

import virus from '../img/virus.jpg';

// Material ui imports
import useStyles from '../Styles';


const Template = () => {

	const classes = useStyles();

	return (
		<div>
			<img src={virus} className={classes.image} />

		</div>
	)
}

export default Template;
