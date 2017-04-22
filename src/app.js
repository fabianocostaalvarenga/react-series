import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

/*
Por boas praticas, é aconselhável mantermos 
um único arquivo deste (app.js) por onde todos
os outros componentes que criarmos em react 
serão utilizados atravẽs deste.
*/
ReactDOM.render(
	
	<App />,

	document.getElementById("app")
);