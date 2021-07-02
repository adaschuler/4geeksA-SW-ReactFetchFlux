import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
					<button className="btn btn-light mx-3">Personajes</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-light mx-3">Vehiculos</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-light mx-3">Planetas</button>
				</Link>
				<Link className="dropdown mx-3">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos {store.favoritesList.length}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favoritesList.map((item, index) => {
							return (
								<a key={index} className="dropdown-item" href="#">
									{item}
								</a>
							);
						})}
					</div>
				</Link>
			</div>
		</nav>
	);
};
