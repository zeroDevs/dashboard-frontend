import { PRESIGNUP, SIGNUP } from './types';

export const preSignup = (inpData) => dispatch => {
    fetch('https://apiup.ankuranant.me/api/signup/verify', {
        method: 'POST',
        headers: {
			'content-type': 'application/json'
		},
        body: JSON.stringify(inpData)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("signUpToken", JSON.stringify(data.token));
            dispatch({
                type: PRESIGNUP,
                payload: data
            });
        });
}

export const userSignup = (userData, signUpToken, handleRedirect) => dispatch => {
    const vToken = 'Bearer ' + signUpToken;
    console.log(vToken);
    fetch('https://apiup.ankuranant.me/api/signup', {
        method: 'POST',
        headers: {
            'Authorization': vToken,
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: SIGNUP,
                payload: data
            });
            if(data.su) {
                handleRedirect('login')
            }
        });
}
