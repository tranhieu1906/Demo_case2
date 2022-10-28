"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        var inputTimeUsed = parseInt(rl.question("thời gian sử dụng máy(h):"));
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
        if (this.arrMachineLength() > 0) {
            console.table(this.arrMachine);
        }
        else {
            console.log("Không có máy nào !!");
        }
        menu_1.Menu.mainMenu();
    };
    MachineController.prototype.displayMachines2 = function () {
        if (this.arrMachineLength() > 0) {
            console.table(this.arrMachine);
        }
        else {
            console.log("Không có máy nào !!");
        }
    };
    MachineController.prototype.updateMachine = function (value) {
        var indexInput = value;
        try {
            if (this.arrMachine.findIndex(function (e, index) { return indexInput == index; }) != -1) {
                var newName_1 = rl.question("Cập nhật tên máy: ");
                var newStatus = rl.question("Cập nhật tình trạng máy: ");
                var newTimeUsed = parseInt(rl.question("Cập nhật thời gian sử dụng: "));
                try {
                    if (this.arrMachine.some(function (e) { return e.getNameMachine() == newName_1; })) {
                        console.log("Tên máy đã tồn tại !");
                    }
                    else {
                        if (newStatus == "available" || newStatus == "enable") {
                            this.arrMachine[indexInput] = new Machine_1.Machine(newName_1.toLowerCase(), newStatus, newTimeUsed, 0);
                            //   this.writeData();
                            console.log("----------------Cập nhật thành công---------------");
                            this.displayMachines();
                        }
                        else {
                            throw new Error("Cập nhật lỗi !! ");
                        }
                    }
                }
                catch (e) {
                    console.log(e.message);
                }
            }
            else {
                throw new Error("Lỗi chỉ mục!");
            }
        }
        catch (err) {
            console.log(err.message);
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
    MachineController.prototype.findMachine = function (nameInput) {
        if (this.arrMachine.some(function (e) { return e.getNameMachine() == nameInput; })) {
            console.table(this.arrMachine.filter(function (e) { return e.getNameMachine() == nameInput; }));
            console.log("\n----------------------Tìm thành công!-----------------------");
        }
        else {
            console.log("\n----------------------Không tìm thấy tên máy !!-----------------------");
        }
    };
    MachineController.prototype.totalMoneyMachineAvailable = function () {
        var _this = this;
        this.arrMachine.forEach(function (e) {
            var str = e.getStatusMachine().toLowerCase();
            if (str == "enable") {
                e.setTotalMoney(e.getTimeUsed() * _this.moneyPerHour);
            }
        });
    };
    MachineController.prototype.billMachineAvailable = function (index) {
        var newArr = this.arrMachine.filter(function (e) {
            var str = e.getStatusMachine().toLowerCase();
            return str == "enable";
        });
        newArr[index].setStatusMachine("disable");
        newArr[index].setTotalMoney(0);
        newArr[index].setTimeUsed(0);
    };
    return MachineController;
}());
exports.MachineController = MachineController;
