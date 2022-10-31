"use strict";
exports.__esModule = true;
exports.File = void 0;
var fs = require("fs");
var File = /** @class */ (function () {
    function File() {
    }
    File.readFile = function (path) {
        var data = fs.readFileSync(path);
        return data.toString().split("\r\n");
    };
    File.writeFile = function (path, data) {
        var str = "";
        data.forEach(function (e, index) {
            if (index == data.length - 1) {
                str += e.toString();
            }
            else {
                str += e.toString() + "\r\n";
            }
        });
        fs.writeFileSync(path, str);
    };
    return File;
}());
exports.File = File;
