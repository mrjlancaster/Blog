import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import pages
import Home from './components/Home';
import Contact from './components/pages/Contact'

// layouts
import Header from './components/Header';


// App
function App() {

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
