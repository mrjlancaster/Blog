import React from 'react';

// Import styles
import useStyles from '../Styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// Material UI imports

function Post() {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={virus} title="Coronavirus"/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Coronavirus - One Virus Away From Extiction
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
						In The Middle of A Global Crisis. They Call It Coronavirus (COVID19). Humans Dealing With a Little Crisis. nostrum repudiandae quidem necessitatibus, blanditiis tempora quibusdam vel repellendus expedita nemo vero.
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.cardActions}>
					<Box className={classes.author}>
						<Avatar src="#" />
						<Box ml={2}>
							<Typography variant="subtitle2" component="p">
								Johnny Lancaster
							</Typography>
							<Typography variant="subtitle2" color='textSecondary' component="p">
								Sept 19, 2020
							</Typography>
						</Box>
					</Box>
				</CardActions>
			</Card>
		</Grid>

	)
}
export default Post;
