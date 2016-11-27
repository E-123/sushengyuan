/**
 * @file app action
 * @author hancong
 * @date 2016-10-24
 */

export function login(object) {
    return ({dispatch, fetch}) =>
        fetch('login', {params: object})
            .then(json => {
                console.log(json.body)
                dispatch(setLoginSuccess(json.body));
            }).catch(error => {
                console.log(error);
            });
}

function setLoginSuccess(data) {
    return {
        type: 'setLoginSuccess',
        payload: data
    };
}