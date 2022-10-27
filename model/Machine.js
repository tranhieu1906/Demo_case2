"use strict";
exports.__esModule = true;
exports.Machine = void 0;
var Machine = /** @class */ (function () {
    function Machine(_nameMachine, _statusMachine, _timeUsed, _totalMoney) {
        this._nameMachine = _nameMachine;
        this._statusMachine = _statusMachine;
        this._timeUsed = _timeUsed;
        this._totalMoney = _totalMoney;
    }
    Machine.prototype.getNameMachine = function () {
        return this._nameMachine;
    };
    Machine.prototype.setNameMachine = function (value) {
        this._nameMachine = value;
    };
    Machine.prototype.getStatusMachine = function () {
        return this._statusMachine;
    };
    Machine.prototype.setStatusMachine = function (value) {
        this._statusMachine = value;
    };
    Machine.prototype.getTotalMoney = function () {
        return this._totalMoney;
    };
    Machine.prototype.setTotalMoney = function (value) {
        this._totalMoney = value;
    };
    Machine.prototype.getTimeUsed = function () {
        return this._timeUsed;
    };
    Machine.prototype.setTimeUsed = function (value) {
        this._timeUsed = value;
    };
    return Machine;
}());
exports.Machine = Machine;
