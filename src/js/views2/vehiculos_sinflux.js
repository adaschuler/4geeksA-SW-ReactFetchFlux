import React, { useState, useEffect } from "react";
import { Card } from "../component/card";

export const Vehiculos = () => {
	let [dataVehiculos, setDataVehiculos] = useState([]);

	const listadoVehiculos = () => {
		fetch("https://swapi.dev/api/vehicles/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataVehiculos(data.results));
	};

	useEffect(() => {
		listadoVehiculos();
	}, []);

	return (
		<div className="container">
			<h1 className="mb-3">Vehiculos</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataVehiculos.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							model={item.model}
							manufacturer={item.manufacturer}
							link={item.url}
						/>
					);
				})}
			</div>
		</div>
	);
};
