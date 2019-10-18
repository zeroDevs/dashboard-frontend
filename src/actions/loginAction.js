import { LOGIN, ADMIN_PROFILE } from './types';

export const loginUser = (lData, handleRedirect) => dispatch => {
	fetch('https://adminapi.ankuranant.dev/api/login', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(lData)
	})
		.then(res => res.json())
		.then(data => {
			console.log(data.loggedIn);
			if(data.loggedIn) {
				localStorage.setItem("token", JSON.stringify(data.token));
				dispatch({
					type: LOGIN,
					payload: data
				});
				handleRedirect('admin');
			} else {
				handleRedirect('nevada/a51/login');
			}
		});
}

export const fetchProfile = (username, token) => dispatch => {
	const bearer = 'Bearer ' + token;
	fetch(`https://apiup.ankuranant.me/api/${username}/profile`, {
		method: 'POST',
		headers: {
			'Authorization': bearer,
			'content-type': 'application/json'
		}
	})
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: ADMIN_PROFILE,
				payload: data
			})
		})
}
