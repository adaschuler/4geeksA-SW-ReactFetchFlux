const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [
				/* {
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				} */
			],
			detail: "",
			detailData: {},
			planetsList: [],
			vehiclesList: [],
			favoritesList: []
		},
		actions: {
			setUrldetail: url => {
				const store = getStore();
				setStore({ detail: url });
			},
			setfavorites: titulofav => {
				const store = getStore();
				if (store.favoritesList.includes(titulofav) === false) {
					setStore({ favoritesList: [...store.favoritesList, titulofav] });
				}
			},
			setEliminarFavoritos: titulofav => {
				setStore({ favoritesList: getStore().favoritesList.filter(favorites => favorites !== titulofav) });
			},
			fetchDetail: () => {
				const store = getStore();
				const URL = store.detail;
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ detailData: data })); //Obtienes los datos
			},
			fetchPeople: () => {
				const URL = "https://swapi.dev/api/people";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ peopleList: data.results })); //Obtienes los datos
			},
			fetchPlanetas: () => {
				const URL = "https://swapi.dev/api/planets/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ planetsList: data.results })); //Obtienes los datos
			},
			fetchVehiculos: () => {
				const URL = "https://swapi.dev/api/vehicles/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ vehiclesList: data.results })); //Obtienes los datos
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
