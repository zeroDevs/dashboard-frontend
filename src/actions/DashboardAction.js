import { DISCORD_STATS } from './types';

export const dStats = (date, token) => dispatch => {
    const userToken = 'Bearer ' + token;
    fetch(`https://adminapi.ankuranant.dev/api/stats/${date}`, {
        method: 'POST',
        headers: {
            'Authorization': userToken,
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: DISCORD_STATS,
                payload: data
            });
        });
}
