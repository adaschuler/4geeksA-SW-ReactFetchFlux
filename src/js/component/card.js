import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div className="col-3">
			<div className="card my-2">
				<img className={props.url} src={props.imagen} alt="Card image cap" />
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
					<Link to={props.category + props.id} className="btn btn-outline-primary">
						Detalle
					</Link>
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
	imagen: PropTypes.string,
	title: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	gravity: PropTypes.string,
	terrain: PropTypes.string,
	model: PropTypes.string,
	manufacturer: PropTypes.string,
	link: PropTypes.string,
	contenido: PropTypes.array,
	type: PropTypes.string,
	id: PropTypes.object,
	category: PropTypes.string
};
