import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detvehiculos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let url = {};

	let detPeople = store.vehiclesList.find(item => {
		if (item.name == params.id.replace("_", " ")) return (url = item);
	});

	const getUrl = () => {
		let getUrl = Object.values(url);
		return getUrl[2];
	};

	useEffect(
		() => {
			actions.setUrldetail(getUrl());
			console.log(store.vehiclesList[parseInt(params.id)]);
		},
		[getUrl() != undefined]
	);

	return (
		<div className="container d-flex justify-content-center">
			<div>
				<div className="d-flex justify-content-center">
					<ul className="list-group" width="400px">
						<li className="list-group-item">
							<img
								src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg"
								alt="Card image cap"
								width="500px"
							/>
						</li>
						<li className="list-group-item">
							<h3>{store.vehiclesList[parseInt(params.id)].name}</h3>
						</li>
						<li className="list-group-item">Masa: {store.vehiclesList[parseInt(params.id)].model}</li>
						<li className="list-group-item">
							Color cabello: {store.vehiclesList[parseInt(params.id)].manufacturer}
						</li>
						<li className="list-group-item">
							Color de piel: {store.vehiclesList[parseInt(params.id)].cost_in_credits}
						</li>
						<li className="list-group-item">
							Color de ojos: {store.vehiclesList[parseInt(params.id)].length}
						</li>
						<li className="list-group-item">
							Año de nacimiento: {store.vehiclesList[parseInt(params.id)].max_atmosphering_speed}
						</li>
						<li className="list-group-item">Genero: {store.vehiclesList[parseInt(params.id)].crew}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
