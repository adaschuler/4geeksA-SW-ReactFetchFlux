import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detpersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let url = {};

	let detPeople = store.peopleList.find(item => {
		if (item.name == params.id.replace("_", " ")) return (url = item);
	});

	const getUrl = () => {
		let getUrl = Object.values(url);
		return getUrl[2];
	};

	useEffect(
		() => {
			actions.setUrldetail(getUrl());
			console.log(store.peopleList[parseInt(params.id)]);
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
								src="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/Star-Wars-1024x576.jpg"
								alt="Card image cap"
								width="500px"
							/>
						</li>
						<li className="list-group-item">
							<h3>{store.peopleList[parseInt(params.id)].name}</h3>
						</li>
						<li className="list-group-item">Masa: {store.peopleList[parseInt(params.id)].mass}</li>
						<li className="list-group-item">
							Color cabello: {store.peopleList[parseInt(params.id)].hair_color}
						</li>
						<li className="list-group-item">
							Color de piel: {store.peopleList[parseInt(params.id)].skin_color}
						</li>
						<li className="list-group-item">
							Color de ojos: {store.peopleList[parseInt(params.id)].eye_color}
						</li>
						<li className="list-group-item">
							Año de nacimiento: {store.peopleList[parseInt(params.id)].birth_year}
						</li>
						<li className="list-group-item">Genero: {store.peopleList[parseInt(params.id)].gender}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
