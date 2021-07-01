import React, { useState, useEffect } from "react";
import { Card } from "../component/card";

export const Personajes = () => {
	let [dataPersonajes, setDataPersonajes] = useState([]);

	const listadoPersonajes = () => {
		fetch("https://swapi.dev/api/people/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPersonajes(data.results));
	};

	useEffect(() => {
		listadoPersonajes();
	}, []);
	/* const labels=[
    {
        label:'titulo', 
        valor:'valor'
    },
    {
        label:'titulo', 
        valor:'valor'
    }
]; */
	//ver el ejercicio todo para ver como usar un arreglo para filtrar
	return (
		<div className="container">
			<h1 className="mb-3">Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataPersonajes.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							gender={item.gender}
							hair_color={item.hair_color}
							link={item.url}
						/>
					);
				})}
			</div>
		</div>
	);
};
