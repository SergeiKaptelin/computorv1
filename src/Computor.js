#! /usr/bin/env node

"use strict";

const colors = require("colors/safe");
const notification = require("./Notification");

if (process.argv.length < 3 || process.argv.length > 5) {
  notification.usage();
}