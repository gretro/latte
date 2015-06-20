"use strict";
/// <reference path="../../typings/mongodb/mongodb.d.ts" />
/// <reference path="IItem" />
/// <reference path="Path" />
/// <reference path="LocalizedPath" />

import itemInterface = require('./IItem');
import mongo = require('mongodb');
import path = require('./path');
import localizedPath = require('./localizedPath');

export class Item implements itemInterface.IItem {
	private _id: mongo.ObjectID;
	private _name: string;
	private _templateId: mongo.ObjectID;
	private _path: path.Path;
	private _paths: localizedPath.LocalizedPath[];

	constructor(base: itemInterface.IItem) {
		if (!base) {
			this._id = new mongo.ObjectID();
		} else {
			this.copyFrom(base);
		}
	}

	get id(): mongo.ObjectID {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get templateId(): mongo.ObjectID {
		return this._templateId;
	}

	get path(): path.Path {
		return this._path;
	}

	get paths(): localizedPath.LocalizedPath[] {
		return this._paths;
	}

	private copyFrom(base: itemInterface.IItem): void {
		this._id = base.id;
		this._name = base.name;
		this._templateId = base.templateId;
		this._path = base.path;
		this._paths = base.paths;
	}
}
