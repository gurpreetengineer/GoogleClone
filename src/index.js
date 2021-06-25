/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './manageContext/ContextAPI';
import reducer, { initialState } from './manageContext/reducer';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider initialState={initialState} reducer={reducer}>	
			<Router>
				<App />
			</Router>
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
