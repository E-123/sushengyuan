import {fetchData} from '../util/fetchData';

module.exports = (req, res, apiPath, params) => {
    return fetchData(req, res, `/api/user`)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
};
