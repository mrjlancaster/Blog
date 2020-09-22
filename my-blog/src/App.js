import React from 'react';
import useStyles from './Styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import pages
import Home from './components/Home';
import Contact from './components/pages/Contact'

// layouts
import Header from './components/Header';
import Hero from './components/Hero';
import Post from './components/Post';

// material ui imports
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


// App
function App() {
	const classes = useStyles();

	return (
		<Router>
			<div className="App">
				<Header />
				{/* routing to different pages */}
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/Home' exact component={Home} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
