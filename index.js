"use strict";

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('docker express init proj for testing...');
});

let port = process.env.HTTP_PORT || 9000
app.listen(port, () => {
    console.log('service listening on port %s', port);
});
