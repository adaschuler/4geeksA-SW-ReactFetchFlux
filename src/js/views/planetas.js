import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanetas();
	}, []);

	return (
		<div className="container">
			<h1 className="mb-3">Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planetsList.map((item, index) => {
					const dataPlanetas = [
						{
							label: "Gravedad",
							value: item.gravity
						},
						{
							label: "Terreno",
							value: item.terrain
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen="https://starwarsblog.starwars.com/wp-content/uploads/2015/01/Coruscant.jpeg"
							/*gravity={item.gravity}
							terrain={item.terrain}*/
							link={item.url}
							contenido={dataPlanetas}
						/>
					);
				})}
			</div>
		</div>
	);
};
