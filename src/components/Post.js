import React from 'react';

// Import styles
import useStyles from '../Styles';

// Material UI imports
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



// Post component
function Post() {

	const classes = useStyles();

	return (
		<Box>
			<Box className={classes.blogTitle}>
				<Typography variant="h2" align="center">
					Coronavirus - One Virus Away From Extiction
				</Typography>
				<Typography variant="h6" align="center">
					In The Middle of A Global Crisis. They Call It Coronavirus (COVID19). Humans Dealing With a Little Crisis.
				</Typography>
			</Box>
		

			<Typography variant="body1">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero tenetur, esse cumque natus animi sunt perferendis veniam molestias ut quibusdam earum sequi magnam, voluptatem, impedit facilis dicta? Eius, similique consequuntur quaerat odio explicabo veritatis tenetur repudiandae quas, pariatur vel quos adipisci accusantium eos molestiae consequatur dolorem minus iusto error. Nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quia ipsa itaque aperiam nostrum, saepe explicabo tempore ex ullam, impedit nemo? Minus voluptatibus beatae modi dolorem. Beatae, quaerat. Nostrum explicabo velit impedit nam quibusdam in? Consequatur libero totam iste possimus eum illum quos modi fugiat. Labore cum dolores libero quae harum ea quod enim doloremque eveniet earum quam non, delectus maiores aut excepturi architecto atque. Quisquam vitae totam voluptatem, explicabo atque hic itaque blanditiis tempora excepturi quae, nihil eveniet alias porro dolor fuga. Quia, modi ab exercitationem dolores deleniti obcaecati provident pariatur non accusantium maxime tenetur sit enim quae ea.
			</Typography>
		</Box>
	)
}
export default Post;
