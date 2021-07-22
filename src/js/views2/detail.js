import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Detail = props => {
	const { store, actions } = useContext(Context);
	/* const [color, setcolor] = useState(false); */
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="superior my-2">
					<div className="col imagen">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
							alt="Card image cap"
						/>
					</div>
					<div className="col texto">
						<h5 className="card-title">{params.type}</h5>
					</div>
				</div>
				<div className="inferior my-2">
					<p className="card-text" />
					<h5 className="card-title">{params.id}</h5>
					<h5 className="card-title">name</h5>
					<div className="col">1</div>
					<div className="col">2</div>
					<div className="col">3</div>
					<div className="col">4</div>
					<div className="col">5</div>
					<div className="col">6</div>
					{/* <button
						className={` detalle ${color === "detalle" ? "light" : ""} `}
						onClick={() => setColor("detalle")}
					/> */}
				</div>
			</div>
		</div>
	);
};
/* Detail.propTypes = {
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
}; */
