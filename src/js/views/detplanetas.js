import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detplanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let url = {};

	let detPeople = store.planetsList.find(item => {
		if (item.name == params.id.replace("_", " ")) return (url = item);
	});

	const getUrl = () => {
		let getUrl = Object.values(url);
		return getUrl[2];
	};

	useEffect(
		() => {
			actions.setUrldetail(getUrl());
			console.log(store.planetsList[parseInt(params.id)]);
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
								src="https://starwarsblog.starwars.com/wp-content/uploads/2015/01/Coruscant.jpeg"
								alt="Card image cap"
								width="500px"
							/>
						</li>
						<li className="list-group-item">
							<h3>{store.planetsList[parseInt(params.id)].name}</h3>
						</li>
						<li className="list-group-item">
							Periodo de rotacion: {store.planetsList[parseInt(params.id)].rotation_period}
						</li>
						<li className="list-group-item">
							Periodo de orbita: {store.planetsList[parseInt(params.id)].orbital_period}
						</li>
						<li className="list-group-item">Diametro: {store.planetsList[parseInt(params.id)].diameter}</li>
						<li className="list-group-item">Clima: {store.planetsList[parseInt(params.id)].climate}</li>
						<li className="list-group-item">Gravedad: {store.planetsList[parseInt(params.id)].gravity}</li>
						<li className="list-group-item">Terreno: {store.planetsList[parseInt(params.id)].terrain}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
