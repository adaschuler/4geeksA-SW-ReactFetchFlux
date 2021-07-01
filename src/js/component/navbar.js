import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="logosw" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" />
				</span>
			</Link>
			<div className="ml-auto">
				{/* 				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
				<Link to="/personajes">
					<button className="btn btn-light">Personajes</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-light mx-3">Vehiculos</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-light">Planetas</button>
				</Link>
			</div>
		</nav>
	);
};
