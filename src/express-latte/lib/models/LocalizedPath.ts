"use strict";

/// <reference path="Path.ts" />
import path = require('./Path');

export class LocalizedPath extends path.Path {
	culture: string;
}
