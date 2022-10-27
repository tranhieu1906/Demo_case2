export class Machine{
    private _statusMachine: string;
    private _nameMachine: string;
    private _totalMoney: number;
    private _timeUsed: number;

    constructor(_nameMachine: string, _statusMachine: string,_timeUsed:number ,_totalMoney: number){
        this._nameMachine = _nameMachine;
        this._statusMachine = _statusMachine;
        this._timeUsed = _timeUsed;
        this._totalMoney = _totalMoney;
    }

    getNameMachine(){
        return this._nameMachine
    }

    setNameMachine(value: string){
        this._nameMachine = value
    }

    getStatusMachine(){
        return this._statusMachine
    }

    setStatusMachine(value: string){
        this._statusMachine = value
    }

    getTotalMoney(){
        return this._totalMoney
    }

    setTotalMoney(value: number){
        this._totalMoney = value
    }

    getTimeUsed(){
        return this._timeUsed
    }

    setTimeUsed(value: number){
        this._timeUsed = value
    }

    // public toString = (): string=>{
    //     return `${this._nameMachine},${this._statusMachine},${this._timeUsed},${this._totalMoney}`;
    // }
}