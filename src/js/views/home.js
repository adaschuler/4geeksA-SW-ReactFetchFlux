import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);
	//consultar los datos de la API
	//almacenar los datos en un array local

	return (
		<div className="text-center mt-5">
			<div className="personajespage">PERSONAJES</div>
			<div className="vehiculospage">VEHICULOS</div>
			<div className="planetaspage">PLANETAS</div>
			<span>{JSON.stringify(store.peopleList)}</span>
		</div>
	);
};
