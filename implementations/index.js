/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const requireDir = require('require-dir');

const dir = requireDir('./');

module.exports = Object.values(dir);
