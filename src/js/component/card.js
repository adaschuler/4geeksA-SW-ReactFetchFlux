import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-3">
			<div className="card my-2">
				<img
					className={props.url}
					src="https://lumiere-a.akamaihd.net/v1/images/cid-main_4501723a.jpeg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						{props.contenido.map((item, index) => {
							return (
								<p key={index}>
									{item.label}: {item.value}
								</p>
							);
						})}
					</p>
					{/* 

					<p className="card-text">{props.gender}</p>
					<p className="card-text">{props.hair_color}</p>

					<p className="card-text">{props.gravity}</p>
					<p className="card-text">{props.terrain}</p>

					<p className="card-text">{props.model}</p>
					<p className="card-text">{props.manufacturer}</p> */}
					<a href={props.link} className="btn btn-outline-primary">
						Ver mas
					</a>
					<button
						onClick={() => actions.setfavorites(props.title)}
						className="btn btn-outline-warning float-right">
						<i className="fa fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	gravity: PropTypes.string,
	terrain: PropTypes.string,
	model: PropTypes.string,
	manufacturer: PropTypes.string,
	link: PropTypes.string,
	contenido: PropTypes.array
};
