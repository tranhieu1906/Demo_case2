import * as rl from "readline-sync";
import { AccountController } from "../controllers/AccountController";
import { MachineController } from "../controllers/MachineController";
export class Menu {
  constructor() { }
  static controller: MachineController = new MachineController;
  static mainMenu() {
    let index: number;
    let menu: string = `
     ------------------Menu-------------
    1. Hiển thị tất cả máy
    2. Thêm máy
    3. Cập nhật máy
    4. Xóa máy
    5. Add service
    6. Change money/hour
    7. Total money each machine
    8. Account management
    9. Total revenue
    10. Find machine
    11. Sorting machine by name
    12. Exit
    --------------------------------------
    `
    console.log(menu)
    let n: number = 0;
    while (n < 1 || n > 12) {
      n = +(rl.question("Vui lòng chọn số: "));
      if (n < 1 || n > 12) {
        console.log("Vui lòng chọn từ 1 đến 10 !")
      }
    }

    switch (n) {
      case 1:
        let str = `
            1. Hiển thị tất cả các máy bật
            2. Hiển thị tất cả các máy tắt
            3. Hiển thị tất cả các máy 
            `
        console.log(str);
        let number = +(rl.question("Vui lòng chọn số:"))
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
        this.controller.addMachine()
        break;
      case 3:
        this.controller.displayMachines();
        let index = parseInt(rl.question("Chọn chỉ số muốn cập nhật :"));
        if (index > this.controller.arrMachineLength() - 1) {
          console.log("Không tìm thấy chỉ số !")
        } else {
          this.controller.updateMachine(index);
          console.log("\n----------------------Cập nhật thành công !-----------------------");
        }
        break;
      case 4:

    }
  }
}
