export class Machine {
  private statusMachine: string;
  private nameMachine: string;
  private totalMoney: number;
  private timeUsed: number;

  constructor(
    nameMachine: string,
    statusMachine: string,
    timeUsed: number,
    totalMoney: number
  ) {
    this.nameMachine = nameMachine;
    this.statusMachine = statusMachine;
    this.timeUsed = timeUsed;
    this.totalMoney = totalMoney;
  }

  getNameMachine() {
    return this.nameMachine;
  }

  setNameMachine(value: string) {
    this.nameMachine = value;
  }

  getStatusMachine() {
    return this.statusMachine;
  }

  setStatusMachine(value: string) {
    this.statusMachine = value;
  }

  getTotalMoney() {
    return this.totalMoney;
  }

  setTotalMoney(value: number) {
    this.totalMoney = value;
  }

  getTimeUsed() {
    return this.timeUsed;
  }

  setTimeUsed(value: number) {
    this.timeUsed = value;
  }

  toString(): string {
    return `${this.nameMachine},${this.statusMachine},${this.timeUsed},${this.totalMoney}`;
  }
}
