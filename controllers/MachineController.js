"use strict";
exports.__esModule = true;
exports.MachineController = void 0;
var rl = require("readline-sync");
var Machine_1 = require("../model/Machine");
var menu_1 = require("../view/menu");
var File_1 = require("../File");
var MachineController = /** @class */ (function () {
    function MachineController() {
        var _this = this;
        this.arrMachine = new Array();
        this.moneyPerHour = 5000;
        var dataMachine = File_1.File.readFile(MachineController.PATH);
        dataMachine.forEach(function (e) {
            var arr = e.split(",");
            _this.arrMachine.push(new Machine_1.Machine(arr[0], arr[1], parseInt(arr[2]), parseInt(arr[3])));
        });
    }
    MachineController.prototype.writeData = function () {
        File_1.File.writeFile(MachineController.PATH, this.arrMachine);
    };
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
                this.writeData();
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
        if (this.arrMachine.findIndex(function (e, index) { return indexInput == index; }) != -1) {
            var newName = rl.question("Cập nhật tên máy: ");
            var newStatus = rl.question("Cập nhật tình trạng máy: ");
            var newTimeUsed = parseInt(rl.question("Cập nhật thời gian sử dụng: "));
            // if (this.arrMachine.some((e) => e.getNameMachine() == newName)) {
            //   console.log("Tên máy đã tồn tại !");
            //   Menu.mainMenu();
            // } else {
            if (newStatus == "disable" || newStatus == "enable") {
                this.arrMachine[indexInput] = new Machine_1.Machine(newName.toLowerCase(), newStatus, newTimeUsed, 0);
                this.writeData();
                this.displayMachines();
            }
            else {
                console.log("-------------Cập nhật lỗi-------------");
                menu_1.Menu.mainMenu();
            }
            // }
        }
        else {
            console.log("-------------Lỗi chỉ mục-------------");
            menu_1.Menu.mainMenu();
        }
    };
    MachineController.prototype.deleteMachine = function (value) {
        this.arrMachine.splice(value, 1);
        this.writeData();
        console.table(this.arrMachine);
        menu_1.Menu.mainMenu();
    };
    MachineController.prototype.displayMachineEnable = function () {
        var count = 0;
        var newArr = this.arrMachine.filter(function (e) {
            var str = e.getStatusMachine();
            count++;
            return str == "enable";
        });
        if (count != 0) {
            console.table(newArr);
        }
        else {
            console.log("Không có máy nào bật !");
            menu_1.Menu.mainMenu();
        }
    };
    MachineController.prototype.displayMachineDisable = function () {
        var count = 0;
        var newArr = this.arrMachine.filter(function (e) {
            var str = e.getStatusMachine();
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
    MachineController.prototype.totalMoneyMachineEnable = function () {
        var _this = this;
        this.arrMachine.forEach(function (e) {
            var str = e.getStatusMachine();
            if (str == "enable") {
                e.setTotalMoney(e.getTimeUsed() * _this.moneyPerHour);
            }
        });
    };
    MachineController.prototype.billMachineEnable = function (index) {
        var newArr = this.arrMachine.filter(function (e) {
            var str = e.getStatusMachine();
            return str == "enable";
        });
        newArr[index].statusMachine = "disable";
        newArr[index].timeUsed = 0;
        this.writeData();
    };
    MachineController.prototype.sortMachineByName = function () {
        console.table(this.arrMachine.sort());
        this.writeData();
    };
    MachineController.prototype.sumRevenue = function () {
        var sum = 0;
        this.arrMachine.forEach(function (e) {
            sum += e.totalMoney;
        });
        return sum;
    };
    MachineController.PATH = "./data/computer.txt";
    return MachineController;
}());
exports.MachineController = MachineController;
