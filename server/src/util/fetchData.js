import fetch from 'isomorphic-fetch';
import {SERVERCONFIG} from '../config';
import _ from 'lodash';

module.exports = {
    fetchData(req, res, apiPath, params) {
        let ext = {};
        params = params || {};
        // console.log(req.get('Cookie'))
        if (_.isPlainObject(params)) {
            ext = {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': req.headers.cookie
                },
                body: JSON.stringify(params)
            };
        }
        // console.log('=================request path================');
        // console.log(SERVERCONFIG.apiBackEndHost + apiPath);
        // console.log('=================request body================');
        // console.log(ext.body);

        return fetch(SERVERCONFIG.apiBackEndHost + apiPath, Object.assign({}, ext))
            .then(response => {
                // console.log('=================response success================');
                // console.log(response);
                // console.log('=================response headers================');
                // console.log(response.headers.getAll('set-cookie'));
                let cookies = response.headers.getAll('set-cookie');
                if (!cookies.length) {
                    return response.json();
                }
                // response.cookie(response.headers.getAll('set-cookie'))
                // req.setHeaders('set-cookie', response.headers.getAll('set-cookie'))
                return response;
            })
            .catch(error => {
                console.log('=================response error================');
                console.log(error);
                return Promise.resolve({
                    status: 505,
                    msg: '',
                    body: { // 字段没确定
                        error: error
                    }
                });
            });
    }
};
