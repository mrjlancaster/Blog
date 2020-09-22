import React from 'react';
import useStyles from './Styles';

// layouts
import Header from './components/Header';
import Hero from './components/Hero';

// material ui imports
import { makeStyles } from '@material-ui/core/styles';
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

// image imports
import virus from './img/virus.jpg';
import water from './img/water.jpg';


// App
function App() {

	const classes = useStyles();

  return (
    <div className="App">
		<Header />
		<Hero />
		<Container maxWidth="lg" className={classes.blogsContainer}>
			<Typography variant="h4" className={classes.blogTitle}>
				Episodes
			</Typography>
			<Grid container spacing={3}>
				{/* <Grid item xs={12} sm={6} md={4}>
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
				</Grid> */}
				
				<Grid item xs={12} sm={6} md={4}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
						className={classes.media} image={water} title="Water"/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Contaminating Their Own Water
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, doloribus? Quo ipsum quam nostrum repudiandae quidem necessitatibus, blanditiis tempora quibusdam.
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
									Littering Their Own Space and Environment
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
