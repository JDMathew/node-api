// Example of Path js module
const path = require("path");
const fileLocation = path.join(__dirname, "app.js");
const filename = path.basename(fileLocation);
const fileExt = path.extname(filename);
