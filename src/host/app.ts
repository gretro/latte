/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./lib/index.ts" />

import express = require('express');
import indexModule = require('./lib/index');

var app = express();

app.get('/', indexModule.index);

app.get(new RegExp('^/.+'), (req: express.Request, res: express.Response) => {
	res.status(200).send('Test Express app in TS');
});

app.listen(3000, () => {
	console.log('Started listening on port 3000');
});
