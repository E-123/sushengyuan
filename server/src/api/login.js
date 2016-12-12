import {fetchData} from '../util/fetchData';

module.exports = (req, res, apiPath, params) => {
    return fetchData(req, res, `/api/login?phone=${params.phone}&password=${params.password}`)
        .then(response => {
        	if (response.headers) {
        		let cookies = response.headers.getAll('set-cookie');
        		res.set('set-cookie', cookies[0])
            	return response.json();
        	}
        	else {
        		return response;
        	}
        })
        .catch(error => {
            return error;
        });
};
