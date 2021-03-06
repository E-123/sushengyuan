'use strict';
import compression from 'compression';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';
import apiMap from './router/apiMap';

import {SERVERCONFIG} from './config';
const {port, nodeEnv, postLimit} = SERVERCONFIG;
let app = express();

app.use(compression({filter: shouldCompress}));
function shouldCompress (req, res) {
    return true;
}
// static files
let root = path.resolve(__dirname, '../../client/build/');
app.use(express.static(root));

// SPA refresh 404 resolution
app.use(fallback('index.html', {root}));


// map request path to api file
app.use(bodyParser.urlencoded({limit: `${postLimit}MB`, extended: true}));
app.use(bodyParser.json({limit: `${postLimit}MB`}));
// app.use(cookieParser());
app.use(apiMap);

// server start
if (!module.parent) {
    app.listen(port, function () {
        console.log('\n Express app listening on port ' + port + '.');
    });
}
