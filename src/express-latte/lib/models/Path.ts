"use strict";

/// <reference path="../../typings/mongodb/mongodb.d.ts" />
import mongo = require('mongodb');

export class Path {
	_id: mongo.ObjectID;
	fullPath: string;
	parts: string[];
}
