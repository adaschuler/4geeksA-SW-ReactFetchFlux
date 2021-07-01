import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Personajes = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div className="container">
			<h1 className="mb-3">Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.peopleList.map((item, index) => {
					const dataPeople = [
						{
							label: "Genero",
							value: item.gender
						},
						{
							label: "Cabello",
							value: item.hair_color
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							/* gender={item.gender}
							hair_color={item.hair_color} */
							link={item.url}
							contenido={dataPeople}
						/>
					);
				})}
			</div>
		</div>
	);
};
