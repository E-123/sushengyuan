/**
 * @file app action
 * @author hancong
 * @date 2016-10-24
 */

import {message} from 'antd';
import {Link, browserHistory} from 'react-router';

export function login(object) {
    return ({dispatch, fetch}) =>
        fetch('login', {params: object})
            .then(json => {
                if (json.code === 400) {
                    message.error(json.message);
                    browserHistory.push('/register');
                }
                else if (json.code !== 200) {
                    message.error(json.message);
                }
                else {
                    dispatch(setLoginSuccess(json));
                }
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