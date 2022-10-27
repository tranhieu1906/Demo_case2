"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userAcount, userPassWord, userName, userAge, userEmail) {
        this.userAcount = userAcount;
        this.userPassWord = userPassWord;
        this.userName = userName;
        this.userAge = userAge;
        this.userEmail = userEmail;
    }
    User.prototype.getUserAcount = function () {
        return this.userAcount;
    };
    User.prototype.setUserAcount = function (value) {
        this.userAcount = value;
    };
    User.prototype.getUserPassWord = function () {
        return this.userPassWord;
    };
    User.prototype.setUserPassWord = function (value) {
        this.userPassWord = value;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.setUserName = function (value) {
        this.userName = value;
    };
    User.prototype.getUserAge = function () {
        return this.userAge;
    };
    User.prototype.setUserAge = function (value) {
        this.userAge = value;
    };
    User.prototype.getUserEmail = function () {
        return this.userEmail;
    };
    User.prototype.setUserEmail = function (value) {
        this.userEmail = value;
    };
    return User;
}());
exports.User = User;
