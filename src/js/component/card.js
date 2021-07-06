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
					{/* <Link className="btn btn-outline-primary" to={`/detail/${props.type}/${props.id}`}>
						Detalle
					</Link> */}
					<a
						onClick={
							(() => actions.setUrldetail(props.link), history.push(`/detail/${props.type}/${props.id}`))
						}
						className="btn btn-outline-primary">
						Ver mas
					</a>
					<button
						onClick={
							() =>
								actions.setfavorites(
									props.title
								) /* ;
                        if (props.title != props.title) */
						}
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
	contenido: PropTypes.array,
	type: PropTypes.string,
	id: PropTypes.object
	/* history: PropTypes.object */
};
