import {message} from 'antd';
import {Link, browserHistory} from 'react-router';

// 登录
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
                    getUser();
                    message.success(json.message);
                    dispatch(setLoginSuccess(json));
                    browserHistory.push('/index');
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

// 获取验证码
export function getVercode(phone) {
    return ({dispatch, fetch}) =>
        fetch('sms', {params: {phone: phone}})
            .then(json => {
                if (json.code === 200) {
                    message.success(json.message);
                }
                else {
                    message.error(json.message);
                }
            }).catch(error => {
                console.log(error);
            });
}

// 注册登录
export function confirmRegister(object) {
    return ({dispatch, fetch}) =>
        fetch('register', {params: object})
            .then(json => {
                if (json.code === 200) {
                    message.success(json.message);
                    browserHistory.push('/index');
                }
                else {
                    message.error(json.message);
                }
            }).catch(error => {
                console.log(error);
            });
}

// 获取用户
export function getUser() {
    return ({dispatch, fetch}) =>
        fetch('user')
            .then(json => {
                if (json.code === 400) {
                    // message.error(json.message);
                    // browserHistory.push('/login');
                }
                else if (json.sid) {
                    dispatch(setUserInfo(json))
                }
            }).catch(error => {
                console.log(error);
            });
}
function setUserInfo(payload) {
    return {
        type: 'setUserInfo',
        payload: payload
    };
}
