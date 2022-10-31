import * as rl from "readline-sync";
import { Machine } from "../model/Machine";
import { Menu } from "../view/menu";
import { File } from "../File";
export class MachineController {
  arrMachine = new Array<Machine>();
  moneyPerHour: number = 5000;

  static PATH = "./data/computer.txt";
  constructor() {
    let dataMachine = File.readFile(MachineController.PATH);
    dataMachine.forEach((e) => {
      let arr = e.split(",");
      this.arrMachine.push(
        new Machine(arr[0], arr[1], parseInt(arr[2]), parseInt(arr[3]))
      );
    });
  }
  writeData() {
    File.writeFile(MachineController.PATH, this.arrMachine);
  }
  setMoneyPerHour(value: number) {
    this.moneyPerHour = value;
  }
  addMachine(): void {
    let inputNameMachine = rl.question("Tên máy: ");
    let inputStatusMachine = rl.question("tình trạng máy: ");
    let inputTimeUsed = parseInt(rl.question("thời gian sử dụng máy(h):"));
    if (this.arrMachine.some((e) => e.getNameMachine() === inputNameMachine)) {
      console.log("Tên máy đã tồn tại!");
    } else {
      if (inputStatusMachine == "disable" || inputStatusMachine == "enable") {
        let newMachine = new Machine(
          inputNameMachine.toLowerCase(),
          inputStatusMachine,
          inputTimeUsed,
          0
        );
        this.arrMachine.push(newMachine);
        this.writeData();
        Menu.mainMenu();
      } else {
        console.log("Nhập trạng thái máy sai !!");
        Menu.mainMenu();
      }
    }
  }
  displayMachines(): void {
    if (this.arrMachineLength() > 0) {
      console.table(this.arrMachine);
    } else {
      console.log("Không có máy nào !!");
    }
    Menu.mainMenu();
  }
  displayMachines2() {
    if (this.arrMachineLength() > 0) {
      console.table(this.arrMachine);
    } else {
      console.log("Không có máy nào !!");
    }
  }
  updateMachine(value: number): void {
    let indexInput = value;

    if (this.arrMachine.findIndex((e, index) => indexInput == index) != -1) {
      let newName = rl.question("Cập nhật tên máy: ");
      let newStatus = rl.question("Cập nhật tình trạng máy: ");
      let newTimeUsed = parseInt(rl.question("Cập nhật thời gian sử dụng: "));

      if (this.arrMachine.some((e) => e.getNameMachine() == newName)) {
        console.log("Tên máy đã tồn tại !");
        Menu.mainMenu();
      } else {
        if (newStatus == "disable" || newStatus == "enable") {
          this.arrMachine[indexInput] = new Machine(
            newName.toLowerCase(),
            newStatus,
            newTimeUsed,
            0
          );
          this.writeData();
          this.displayMachines();
        } else {
          console.log("-------------Cập nhật lỗi-------------");
          Menu.mainMenu();
        }
      }
    } else {
      console.log("-------------Lỗi chỉ mục-------------");
      Menu.mainMenu();
    }
  }
  deleteMachine(value: number) {
    this.arrMachine.splice(value, 1);
    this.writeData();
    console.table(this.arrMachine);
    Menu.mainMenu();
  }
  displayMachineEnable() {
    let count = 0;
    let newArr = this.arrMachine.filter((e) => {
      let str = e.getStatusMachine();
      count++;
      return str == "enable";
    });
    if (count != 0) {
      console.table(newArr);
      // Menu.mainMenu();
    } else {
      console.log("Không có máy nào bật !");
      Menu.mainMenu();
    }
  }
  displayMachineDisable() {
    let count = 0;
    let newArr = this.arrMachine.filter((e) => {
      let str = e.getStatusMachine();
      count++;
      return str == "disable";
    });

    if (count == 0) {
      console.log("Không có máy nào tắt !");
      Menu.mainMenu();
    } else {
      console.table(newArr);
      Menu.mainMenu();
    }
  }
  arrMachineLength() {
    return this.arrMachine.length;
  }
  findMachine(nameInput: string) {
    if (this.arrMachine.some((e) => e.getNameMachine() == nameInput)) {
      console.table(
        this.arrMachine.filter((e) => e.getNameMachine() == nameInput)
      );
      console.log(
        "\n----------------------Tìm thành công!-----------------------"
      );
    } else {
      console.log(
        "\n----------------------Không tìm thấy tên máy !!-----------------------"
      );
    }
  }
  totalMoneyMachineEnable() {
    this.arrMachine.forEach((e) => {
      let str = e.getStatusMachine();
      if (str == "enable") {
        e.setTotalMoney(e.getTimeUsed() * this.moneyPerHour);
      }
    });
  }
  billMachineEnable(index: number) {
    let newArr = this.arrMachine.filter((e) => {
      let str = e.getStatusMachine();
      return str == "enable";
    });
    newArr[index].statusMachine = "disable";
    newArr[index].totalMoney = 0;
    newArr[index].setTimeUsed(0);
    this.writeData();
  }
  sortMachineByName() {
    console.table(this.arrMachine.sort());
    this.writeData();
  }
  sumRevenue(): number {
    let sum = 0;
    this.arrMachine.forEach((e) => {
      sum += e.totalMoney;
    });

    return sum;
  }
}
