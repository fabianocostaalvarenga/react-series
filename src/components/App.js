import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã",
		data: "21/04/2017",
		horario: "19h"
	},
	casa: {
		nome: "Vasco"
	},
	visitante: {
		nome: "Flamengo"
	}
};

export default class App extends React.Component {

	render(){
		return (
			<PlacarContainer {...dados} />  // Refactor utilizando o spread operator
				//partida={dados.partida}
				//casa={dados.casa}
				//visitante={dados.visitante}/>
		);
	}
}