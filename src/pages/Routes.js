import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import About from './subPages/About';
// import Store from './subPages/Store';
// import Gmail from './subPages/Gmail';
// import Images from './subPages/Images';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

/* 
** If you want to use/redirect to a Website URL to link up the Route and Link Path, you can check out this refrence link.
** Resource References: 
**	https://stackoverflow.com/questions/42914666/react-router-external-Link
**	https://stackoverflow.com/questions/31095759/react-router-redirect-to-a-different-domain-url
*/

function Routes() {
	// const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path="/" component={MainPage} />

			{/* Previous Code prior to June 25 */}
			{/* 
				<Route path="/about" component={About} />
				<Route path="/store" component={Store} />
				<Route path="/gmail" component={Gmail} />
				<Route path="/images" component={Images} /> 
			*/}

			{/* New Code */}
			{/* Way 1st */}
			<Route path="/about" component={() => window.location.assign('https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1')} />
			{/*  Way 2nd */}
			<Route path="/store" component={() => window.open('https://store.google.com/?hl=en-GB', '_self')} />

			<Route path="/gmail" component={() => window.location.assign('https://mail.google.com/')} />
			<Route path="/images" component={() => window.open('https://photos.google.com/', '_self')} />



			<Route path="/search" component={SearchPage} />


			<Route path="/all" component={SearchPage} />
			<Route path="/news" component={SearchPage} />
			<Route path="/image" component={About} />
			<Route path="/maps" component={SearchPage} />
			<Route path="/videos" component={SearchPage} />
			<Route path="/more" component={SearchPage} />

			<Redirect from='*' to='/' />
		</Switch>
	);
}

export default Routes;
