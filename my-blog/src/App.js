import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import showcase from './img/hero.jpg';
import virus from './img/virus.jpg';


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
		fontSize: '4rem'
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

function App() {

	const classes = useStyles();

  return (
    <div className="App">
		<AppBar className={classes.appBar} position="static">
			<Toolbar>
				<Typography variant="h6" color='primary'>
					The Alien Talks
				</Typography>
			</Toolbar>
		</AppBar>
		<Box className={classes.hero}>
			<Box>The Alien Talks</Box>
		</Box>
		<Container maxWidth="lg" className={classes.blogsContainer}>
			<Typography variant="h4" className={classes.blogTitle}>
				Articles
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
						className={classes.media} image={virus} title="Contemplative Reptile"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Coronavirus - One Virus Away From Extiction
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, doloribus? Quo ipsum quam nostrum repudiandae quidem necessitatibus, blanditiis tempora quibusdam vel repellendus expedita nemo vero.
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
				<Grid item xs={12} sm={6} md={4}>
				<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
						className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Coronavirus
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
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
				<Grid item xs={12} sm={6} md={4}>
				<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
						className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Coronavirus
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, doloribus? Quo ipsum quam nostrum repudiandae quidem necessitatibus, blanditiis tempora quibusdam vel repellendus expedita nemo vero, cum architecto asperiores! Delectus reiciendis dicta fugit optio ipsam incidunt necessitatibus laborum quasi, modi fuga.
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
				<Grid item xs={12} sm={6} md={4}>
				<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
						className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Coronavirus
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
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
				<Grid item xs={12} sm={6} md={4}>
				<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
						className={classes.media} image="../img/virus.jpg" title="Contemplative Reptile"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Coronavirus
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
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
			</Grid>
		</Container>
    </div>
  );
}

export default App;
