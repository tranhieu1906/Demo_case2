"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var rl = require("readline-sync");
var MachineController_1 = require("../controllers/MachineController");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.mainMenu = function () {
        var index;
        var menu = "\n     ------------------Menu-------------\n    1. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 m\u00E1y\n    2. Th\u00EAm m\u00E1y\n    3. C\u1EADp nh\u1EADt m\u00E1y\n    4. X\u00F3a m\u00E1y\n    5. Add service\n    6. Change money/hour\n    7. Total money each machine\n    8. Account management\n    9. Total revenue\n    10. Find machine\n    11. Sorting machine by name\n    12. Exit\n    --------------------------------------\n    ";
        console.log(menu);
        var n = 0;
        while (n < 1 || n > 12) {
            n = +(rl.question("Vui lòng chọn số: "));
            if (n < 1 || n > 12) {
                console.log("Vui lòng chọn từ 1 đến 10 !");
            }
        }
        switch (n) {
            case 1:
                var str = "\n            1. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 c\u00E1c m\u00E1y b\u1EADt\n            2. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 c\u00E1c m\u00E1y t\u1EAFt\n            3. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 c\u00E1c m\u00E1y \n            ";
                console.log(str);
                var number = +(rl.question("Vui lòng chọn số:"));
                switch (number) {
                    case 1:
                        this.controller.displayMachineAvailable();
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
                this.controller.displayMachines();
                var index_1 = parseInt(rl.question("Chọn chỉ số muốn cập nhật :"));
                if (index_1 > this.controller.arrMachineLength() - 1) {
                    console.log("Không tìm thấy chỉ số !");
                }
                else {
                    this.controller.updateMachine(index_1);
                    console.log("\n----------------------Cập nhật thành công !-----------------------");
                }
                break;
            case 4:
                this.controller.displayMachines();
                var a = parseInt(rl.question("Nhập chỉ số mà bạn muốn xóa ? :"));
                if (a > this.controller.arrMachineLength() - 1) {
                    console.log("Không tìm thấy chỉ số này !");
                }
                else {
                    var a_1;
                    var str_1 = "\n                B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a m\u00E1y n\u00E0y\n                1. C\u00F3\n                2. Kh\u00F4ng \n            ";
                    console.log(str_1);
                    a_1 = +(rl.question("Nhập lựa chọn của bạn :"));
                    if (a_1 == 1) {
                        this.controller.deleteMachine(a_1);
                        console.log("\n----------------------Xóa máy thành công !-----------------------");
                    }
                }
                break;
        }
    };
    Menu.controller = new MachineController_1.MachineController;
    return Menu;
}());
exports.Menu = Menu;
