"use strict";
exports.__esModule = true;
exports.Machine = void 0;
var Machine = /** @class */ (function () {
    function Machine(nameMachine, statusMachine, timeUsed, totalMoney) {
        this.nameMachine = nameMachine;
        this.statusMachine = statusMachine;
        this.timeUsed = timeUsed;
        this.totalMoney = totalMoney;
    }
    Machine.prototype.getNameMachine = function () {
        return this.nameMachine;
    };
    Machine.prototype.setNameMachine = function (value) {
        this.nameMachine = value;
    };
    Machine.prototype.getStatusMachine = function () {
        return this.statusMachine;
    };
    Machine.prototype.setStatusMachine = function (value) {
        this.statusMachine = value;
    };
    Machine.prototype.getTotalMoney = function () {
        return this.totalMoney;
    };
    Machine.prototype.setTotalMoney = function (value) {
        this.totalMoney = value;
    };
    Machine.prototype.getTimeUsed = function () {
        return this.timeUsed;
    };
    Machine.prototype.setTimeUsed = function (value) {
        this.timeUsed = value;
    };
    return Machine;
}());
exports.Machine = Machine;
