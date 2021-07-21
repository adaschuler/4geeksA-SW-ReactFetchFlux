import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchVehiculos();
	}, []);

	return (
		<div className="container">
			<h1 className="mb-3">Vehiculos</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehiclesList.map((item, index) => {
					const dataVehicles = [
						{
							label: "Model",
							value: item.model
						},
						{
							label: "Manufactura",
							value: item.manufacturer
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg"
							/* model={item.model}
							manufacturer={item.manufacturer} */
							link={item.url}
							contenido={dataVehicles}
						/>
					);
				})}
			</div>
		</div>
	);
};
