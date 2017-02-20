import fs from 'fs';
import path from 'path';
module.exports = (req, res, apiPath, params) => {

    function getLocalData() {
        let file = path.resolve(__dirname, '../../material/detail/' + params.name + '.json');
        let isExist = fs.existsSync(file);
        let resp, result;
        if (!isExist) {
            resp = new Promise(function (resolve) { resolve({}); })
        }
        else {
            result = require(file);
            resp = new Promise(function (resolve) { resolve(result); })
        }
        return resp;
    }
    return getLocalData().then(result => {
        return result;
    });
};
