import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	let [dataPlanetas, setDataPlanetas] = useState([]);

	const listadoPlanetas = () => {
		fetch("https://swapi.dev/api/planets/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPlanetas(data.results));
	};

	useEffect(() => {
		actions.fetchPlanetas();
	}, []);

	return (
		<div className="container">
			<h1 className="mb-3">Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planetasList.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							gravity={item.gravity}
							terrain={item.terrain}
							link={item.url}
						/>
					);
				})}
			</div>
		</div>
	);
};
