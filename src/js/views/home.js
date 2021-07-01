import React from "react";
import { Personajes } from "../views/personajes";
import { Planetas } from "../views/planetas";
import { Vehiculos } from "../views/vehiculos";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div>
			<div className="personajespage">
				<Personajes />
			</div>
			<div className="vehiculospage">
				<Vehiculos />
			</div>
			<div className="planetaspage">
				<Planetas />
			</div>
		</div>
	);
};
