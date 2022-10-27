import * as rl from 'readline-sync'
import { Machine } from '../model/Machine';
import { Menu } from "../view/menu"
export class MachineController {
    arrMachine = new Array<Machine>()
    moneyPerHour: number = 5000;
    constructor() { }
    setMoneyPerHour(value: number) {
        this.moneyPerHour = value;
    }
    addMachine(): void {
        let inputNameMachine = rl.question("Tên máy: ");
        let inputStatusMachine = rl.question("tình trạng máy: ");
        let inputTimeUsed = parseInt(rl.question("thời gian sử dụng máy:"));
        if (this.arrMachine.some(e => e.getNameMachine() === inputNameMachine)) {
            console.log("Tên máy đã tồn tại!");
        } else {
            if (inputStatusMachine == "disable" || inputStatusMachine == "enable") {
                let newMachine = new Machine(inputNameMachine.toLowerCase(), inputStatusMachine, inputTimeUsed, 0);
                this.arrMachine.push(newMachine);
                Menu.mainMenu()
            } else {
                console.log("Nhập trạng thái máy sai !!")
                Menu.mainMenu()
            }
        }
    }
    displayMachines(): void {
        console.table(this.arrMachine);
        Menu.mainMenu()
    }
    updateMachine(value: number): void {
        let indexInput = value;

        if (this.arrMachine.findIndex((e, index) => indexInput == index) != -1) {
            let newName = rl.question("Cập nhật tên máy: ");
            let newStatus = rl.question("Cập nhật tình trạng máy: ");
            let newTimeUsed = parseInt(rl.question("Cập nhật thời gian sử dụng: "));

            if (this.arrMachine.some(e => e.getNameMachine() == newName)) {
                console.log("Tên máy đã tồn tại !")
            } else {
                if (newStatus == "enable" || newStatus == "disable") {
                    this.arrMachine[indexInput] = new Machine(newName.toLowerCase(), newStatus, newTimeUsed, 0)
                    console.log("----------------Cập nhật thành công---------------");
                    this.displayMachines()
                } else {
                    console.log("Cập nhật không thành công !! ")
                    Menu.mainMenu()
                }
            }
        } else {
            Menu.mainMenu()
            console.log("Không tìm thấy chỉ số !")
        }

    }
    deleteMachine(value: number) {
        this.arrMachine.splice(value, 1);
        console.table(this.arrMachine)
        Menu.mainMenu()
    }
    displayMachineAvailable() {
        let count = 0;
        let newArr = this.arrMachine.filter(e => {
            let str = e.getStatusMachine().toLowerCase();
            count++;
            return str == "enable"
        })
        if (count != 0) {
            console.table(newArr)
            Menu.mainMenu()
        } else {
            console.log("Không có máy nào bật !")
            Menu.mainMenu()
        }

    }
    displayMachineDisable() {
        let count = 0;
        let newArr = this.arrMachine.filter(e => {
            let str = e.getStatusMachine().toLowerCase();
            count++;
            return str == "disable"
        })

        if (count == 0) {
            console.log("Không có máy nào tắt !")
            Menu.mainMenu()
        } else {
            console.table(newArr)
            Menu.mainMenu()
        }
    }
    arrMachineLength() {
        return this.arrMachine.length
    }
}