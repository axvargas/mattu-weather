import React, { useState, useEffect } from 'react';
import AppPage from './AppPage.js';

//Constant
const apiId = '1d2e2995087e05cc7ecf72b6d160ce6e';

const App = () => {
	const [info, setInfo] = useState({});
	const [makeRequest, setmakeRequest] = useState(false);
	const [request, setRequest] = useState({});
	const { country, city } = request;
	useEffect(() => {
		console.log("Hi")
		if (makeRequest) {
			consultApi(country, city);
			setmakeRequest(false);
		}
		// eslint-disable-next-line
	}, [makeRequest]);

	const consultApi = async (country, city) => {

		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`
		const api = await fetch(url);
		const result = await api.json();
		setInfo(result);
		
	}

	return (
		<AppPage setRequest={setRequest} setmakeRequest={setmakeRequest} info={info} />
	);
}

export default App;

