"use strict";
exports.__esModule = true;
exports.AccountController = void 0;
var rl = require("readline-sync");
var User_1 = require("../model/User");
var File_1 = require("../File");
var menu_1 = require("../view/menu");
var AccountController = /** @class */ (function () {
    function AccountController() {
        this.fileUser = new File_1.File();
    }
    AccountController.init = function () {
        var menu = "\n        1. \u0110\u0103ng nh\u1EADp\n        2. \u0110\u0103ng k\u00ED\n        3. Tho\u00E1t\n        ";
        console.log(menu);
        var temp = 0;
        var regex = /^[1-3]$/;
        while (temp < 1 || temp > 3) {
            var chooseUser = rl.question("Bạn muốn chọn số nào :");
            if (regex.test(chooseUser)) {
                temp = +chooseUser;
            }
            else {
                temp = -1;
            }
            if (temp < 1 || temp > 3) {
                console.log("Vui lòng nhập số từ 1 đến 3");
            }
        }
        switch (temp) {
            case 1:
                this.login();
                break;
            case 2:
                this.register();
                break;
        }
    };
    AccountController.login = function () {
        console.log("------------------------login--------------------");
        var inputAccount = rl.question("Account:");
        var inputPassword = rl.question("Password:");
        var isLogin = this.listUser.some(function (e) { return e.getUserAcount() == inputAccount && e.getUserPassWord() == inputPassword; });
        if (isLogin) {
            menu_1.Menu.mainMenu();
        }
        else {
            console.log("tài khoản,mật khẩu không đúng");
            this.init();
        }
        // try {
        //     if(isLogin){
        //         const theMenu = new Menu(inputAccount,inputPassword, this)
        //         theMenu.mainMenu()
        //     }else{
        //         throw new Error("Account or Password are wrong !");
        //     }
        // } catch (e:any) {
        //     console.log(e.message);
        //     this.init()
        // }
    };
    AccountController.register = function () {
        var flag = true;
        var newAccount;
        var newPassword;
        var newName;
        var newAge;
        var newEmail;
        console.log("-----------------Register-----------------");
        // acount
        while (flag) {
            newAccount = rl.question("Tài khoản:");
            if (!newAccount) {
                console.log("không được để trống");
            }
            else if (this.listUser.some(function (e) { return e.getUserAcount() == newAccount; })) {
                console.log("tài khoản đã có trong hệ thống");
            }
            else {
                flag = false;
            }
        }
        //password
        while (!flag) {
            newPassword = rl.question("Mật khẩu:");
            if (!this.validatePassWord(newPassword)) {
                console.log("Mật khẩu phải có tối thiểu tám ký tự, ít nhất một chữ cái và một số !\n");
            }
            else {
                flag = true;
            }
        }
        //email
        // while (flag) {
        //   newEmail = rl.question("Email:");
        //   if (!this.validateEmail(newEmail)) {
        //     console.log("Email không hợp lệ !\n");
        //   } else if (this.listUser.some(e => e.getUserEmail() == newEmail)) {
        //     console.log("Email đã tồn tại !\n")
        //   } else {
        //     flag = false;
        //   }
        // }
        // while (!flag) {
        //   newName = rl.question("Your Name:");
        //   if (!newName) {
        //     console.log("không được để trống")
        //   } else {
        //     flag = true;
        //   }
        // }
        // while (flag) {
        //   newAge = parseInt(rl.question("Your Age:"));
        //   if (!newAge) {
        //     console.log("không được để trống")
        //   } else if (this.validateAge(newAge)) {
        //     console.log("Nhập tuổi hợp lệ")
        //   } else {
        //     flag = false
        //   }
        // }
        this.listUser.push(new User_1.User(newAccount, newPassword, newName, newAge, newEmail));
        this.init();
    };
    AccountController.validatePassWord = function (inputPassword) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(inputPassword);
    };
    AccountController.validateEmail = function (inputEmail) {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(inputEmail);
    };
    AccountController.validateAge = function (inputAge) {
        var regex = /\s[0-1]{1}[0-9]{0,2}/;
        return regex.test(inputAge);
    };
    AccountController.listUser = new Array();
    return AccountController;
}());
exports.AccountController = AccountController;
