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
							imagen="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/Star-Wars-1024x576.jpg"
							link={item.url}
							contenido={dataPeople}
							category={"/people/"}
							id={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
