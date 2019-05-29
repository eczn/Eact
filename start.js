const Bundler = require('parcel');
const express = require('express');

const PORT = 2345;

const bundler = new Bundler('src/index.html');
const app = express();

// run
app.use(
    bundler.middleware()
);

app.listen(PORT);
