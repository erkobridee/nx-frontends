import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

// this import fix the typing error during the compilation time
import * as process from 'process';

import App from './App';

// variables from the .env file
console.log(`process.env.HELLO: ${process.env.HELLO}`);
console.log(`process.env.NX_HELLO: ${process.env.NX_HELLO}`);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
