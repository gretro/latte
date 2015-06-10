/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

import express = require('express');

export function index(req: express.Request, res: express.Response): void {
	'use strict';

	res.status(200).send('INDEX');
};
