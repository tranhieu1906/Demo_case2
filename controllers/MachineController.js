"use strict";
exports.__esModule = true;
exports.MachineController = void 0;
var rl = require("readline-sync");
var Machine_1 = require("../model/Machine");
var menu_1 = require("../view/menu");
var MachineController = /** @class */ (function () {
    function MachineController() {
        this.arrMachine = new Array();
        this.moneyPerHour = 5000;
    }
    MachineController.prototype.setMoneyPerHour = function (value) {
        this.moneyPerHour = value;
    };
    MachineController.prototype.addMachine = function () {
        var inputNameMachine = rl.question("Tên máy: ");
        var inputStatusMachine = rl.question("tình trạng máy: ");
        var inputTimeUsed = parseInt(rl.question("thời gian sử dụng máy:"));
        if (this.arrMachine.some(function (e) { return e.getNameMachine() === inputNameMachine; })) {
            console.log("Tên máy đã tồn tại!");
        }
        else {
            if (inputStatusMachine == "disable" || inputStatusMachine == "enable") {
                var newMachine = new Machine_1.Machine(inputNameMachine.toLowerCase(), inputStatusMachine, inputTimeUsed, 0);
                this.arrMachine.push(newMachine);
                menu_1.Menu.mainMenu();
            }
            else {
                console.log("Nhập trạng thái máy sai !!");
                menu_1.Menu.mainMenu();
            }
        }
    };
    MachineController.prototype.displayMachines = function () {
        console.table(this.arrMachine);
        menu_1.Menu.mainMenu();
    };
    MachineController.prototype.updateMachine = function (value) {
        var indexInput = value;
        if (this.arrMachine.findIndex(function (e, index) { return indexInput == index; }) != -1) {
            var newName_1 = rl.question("Cập nhật tên máy: ");
            var newStatus = rl.question("Cập nhật tình trạng máy: ");
            var newTimeUsed = parseInt(rl.question("Cập nhật thời gian sử dụng: "));
            if (this.arrMachine.some(function (e) { return e.getNameMachine() == newName_1; })) {
                console.log("Tên máy đã tồn tại !");
            }
            else {
                if (newStatus == "enable" || newStatus == "disable") {
                    this.arrMachine[indexInput] = new Machine_1.Machine(newName_1.toLowerCase(), newStatus, newTimeUsed, 0);
                    console.log("----------------Cập nhật thành công---------------");
                    this.displayMachines();
                }
                else {
                    console.log("Cập nhật không thành công !! ");
                    menu_1.Menu.mainMenu();
                }
            }
        }
        else {
            menu_1.Menu.mainMenu();
            console.log("Không tìm thấy chỉ số !");
        }
    };
    MachineController.prototype.deleteMachine = function (value) {
        this.arrMachine.splice(value, 1);
        console.table(this.arrMachine);
        menu_1.Menu.mainMenu();
    };
    MachineController.prototype.displayMachineAvailable = function () {
        var count = 0;
        var newArr = this.arrMachine.filter(function (e) {
            var str = e.getStatusMachine().toLowerCase();
            count++;
            return str == "enable";
        });
        if (count != 0) {
            console.table(newArr);
            menu_1.Menu.mainMenu();
        }
        else {
            console.log("Không có máy nào bật !");
            menu_1.Menu.mainMenu();
        }
    };
    MachineController.prototype.displayMachineDisable = function () {
        var count = 0;
        var newArr = this.arrMachine.filter(function (e) {
            var str = e.getStatusMachine().toLowerCase();
            count++;
            return str == "disable";
        });
        if (count == 0) {
            console.log("Không có máy nào tắt !");
            menu_1.Menu.mainMenu();
        }
        else {
            console.table(newArr);
            menu_1.Menu.mainMenu();
        }
    };
    MachineController.prototype.arrMachineLength = function () {
        return this.arrMachine.length;
    };
    return MachineController;
}());
exports.MachineController = MachineController;
