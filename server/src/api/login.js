/**
 * @file request example
 * @author hancong
 * @date 2016-11-16
 */

import {fetchData} from '../util/fetchData';

module.exports = (req, res, apiPath, params) => {
    return fetchData(req, res, `/api/login?phone=${params.phone}&password=${params.password}`)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
};