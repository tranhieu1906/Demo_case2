"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var rl = require("readline-sync");
var AccountController_1 = require("../controllers/AccountController");
var MachineController_1 = require("../controllers/MachineController");
var Menu = /** @class */ (function () {
    function Menu(_MyAccount, _MyPassword) {
        this.arrMachine = new Array();
        Menu._MyAccount = _MyAccount;
        Menu._MyPassword = _MyPassword;
    }
    Menu.mainMenu = function () {
        var menu = "\n    1. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 m\u00E1y\n    2. Th\u00EAm m\u00E1y\n    3. C\u1EADp nh\u1EADt m\u00E1y\n    4. X\u00F3a m\u00E1y\n    5. Thay \u0111\u1ED5i gi\u00E1 ti\u1EC1n / gi\u1EDD\n    6. T\u00EDnh ti\u1EC1n\n    7. T\u00ECm m\u00E1y\n    8. S\u1EAFp x\u1EBFp m\u00E1y theo t\u00EAn\n    9. T\u1ED5ng ti\u1EC1n trong 1 ng\u00E0y \n    10. \u0110\u0103ng xu\u1EA5t\n    ";
        console.log(menu);
        var n = 0;
        while (n < 1 || n > 12) {
            n = +rl.question("Vui lòng chọn số: ");
            if (n < 1 || n > 12) {
                console.log("Vui lòng chọn từ 1 đến 10 !");
            }
        }
        switch (n) {
            case 1:
                var str = "\n1. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 c\u00E1c m\u00E1y b\u1EADt\n2. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 c\u00E1c m\u00E1y t\u1EAFt\n3. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 c\u00E1c m\u00E1y \n            ";
                console.log(str);
                var number = +rl.question("Vui lòng chọn số:");
                switch (number) {
                    case 1:
                        this.controller.displayMachineEnable();
                        break;
                    case 2:
                        this.controller.displayMachineDisable();
                        break;
                    case 3:
                        this.controller.displayMachines();
                        break;
                }
                break;
            case 2:
                this.controller.addMachine();
                break;
            case 3:
                if (this.controller.arrMachineLength() <= 0) {
                    console.log("Không có máy nào để cập nhật !!");
                    this.mainMenu();
                }
                else {
                    this.controller.displayMachines2();
                    var index_1 = parseInt(rl.question("Chọn chỉ số muốn cập nhật :"));
                    if (index_1 > this.controller.arrMachineLength() - 1) {
                        console.log("Không tìm thấy chỉ số !");
                    }
                    else {
                        this.controller.updateMachine(index_1);
                        console.log("\n----------------------Cập nhật thành công !-----------------------");
                    }
                }
                break;
            case 4:
                this.controller.displayMachines2();
                var index = parseInt(rl.question("Nhập chỉ số mà bạn muốn xóa ? :"));
                if (index > this.controller.arrMachineLength() - 1) {
                    console.log("Không tìm thấy chỉ số này !");
                }
                else {
                    var str_1 = "\n                B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a m\u00E1y n\u00E0y\n                1. C\u00F3\n                2. Kh\u00F4ng \n            ";
                    console.log(str_1);
                    var num = +rl.question("Nhập lựa chọn của bạn :");
                    if (num == 1) {
                        this.controller.deleteMachine(index);
                        console.log("\n----------------------Xóa máy thành công !-----------------------");
                    }
                }
                break;
            case 5:
                var money = +rl.question("chọn số tiền bạn muốn cho mỗi giờ: ");
                this.controller.moneyPerHour = money;
                console.log("\n----------------------Thay đổi giá tiền /giờ thành công!-----------------------");
                Menu.mainMenu();
                break;
            case 6:
                this.controller.displayMachineEnable();
                n = +rl.question("Chọn máy bạn muốn tính hóa đơn: ");
                this.controller.totalMoneyMachineEnable(n);
                this.controller.billMachineEnable(n);
                this.controller.displayMachines();
                break;
            case 7:
                if (this.controller.arrMachineLength() > 0) {
                    var findMachine = rl.question("Nhập tên máy cần tìm:");
                    this.controller.findMachine(findMachine);
                    Menu.mainMenu();
                }
                else {
                    console.log("Trong hệ thống không có máy nào !");
                    Menu.mainMenu();
                }
                break;
            case 8:
                this.controller.sortMachineByName();
                Menu.mainMenu();
                break;
            case 9:
                console.log("-----------------Tổng tiền:" + this.controller.sumRevenue() + "-----------------");
                Menu.mainMenu();
                break;
            case 10:
                var c8 = "\nB\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n \u0111\u0103ng xu\u1EA5t\n1. C\u00F3\n2. Kh\u00F4ng \n            ";
                console.log(c8);
                var que = +rl.question("Nhập lựa chọn của bạn :");
                if (que == 1) {
                    console.log("Cảm ơn đã sử dụng dịch vụ");
                    AccountController_1.AccountController.init();
                }
                else if (que == 2) {
                    this.mainMenu();
                }
                Menu.mainMenu();
                break;
        }
    };
    Menu.controller = new MachineController_1.MachineController();
    return Menu;
}());
exports.Menu = Menu;
