import {USER_LOGIN, USER_PROFILE, PROJ_PAY_FORM} from './types';

export const fetchUserProfile = (token, handleRedirect) => dispatch => {
    const bearer = 'Bearer ' + token;
    fetch(`https://apiup.ankuranant.me/api/user/profile`, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if(data.loggedIn) {
                dispatch({
                    type: USER_PROFILE,
                    payload: data
                });
                // console.log(data);
                handleRedirect('dashboard');
            } else {
                handleRedirect('login');
            }
        })
}

export const ppform = (token, projectData, handleRedirect) => dispatch => {
    const bearer = 'Bearer ' + token;
    fetch(`https://apiup.ankuranant.me/api/user/project/projpaycheck`, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'content-type': 'application/json'
        },
        body: JSON.stringify(projectData)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: PROJ_PAY_FORM,
                payload: data
            });
        });
}
