import {fetchData} from '../util/fetchData';

module.exports = (req, res, apiPath, params) => {
    return fetchData(req, res, `/api/sms/${params.phone}`)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
};
