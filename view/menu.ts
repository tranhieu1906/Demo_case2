import * as rl from "readline-sync";
import { AccountController } from "../controllers/AccountController";
import { MachineController } from "../controllers/MachineController";
import { Machine } from "../model/Machine";
export class Menu {
  static _MyAccount: string;
  arrMachine = new Array<Machine>();
  static _MyPassword: string;
  static controller: MachineController = new MachineController();
  static AccountController: AccountController;
  constructor(_MyAccount: string, _MyPassword: string) {
    Menu._MyAccount = _MyAccount;
    Menu._MyPassword = _MyPassword;
  }
  static mainMenu() {
    let menu: string = `
    1. Hiển thị tất cả máy
    2. Thêm máy
    3. Cập nhật máy
    4. Xóa máy
    5. Thay đổi giá tiền / giờ
    6. Xuất hóa đơn
    7. Tìm máy
    8. Sắp xếp máy theo tên
    9. Đăng xuất
    `;
    console.log(menu);
    let n: number = 0;
    while (n < 1 || n > 12) {
      n = +rl.question("Vui lòng chọn số: ");
      if (n < 1 || n > 12) {
        console.log("Vui lòng chọn từ 1 đến 10 !");
      }
    }

    switch (n) {
      case 1:
        let str = `
1. Hiển thị tất cả các máy bật
2. Hiển thị tất cả các máy tắt
3. Hiển thị tất cả các máy 
            `;
        console.log(str);
        let number = +rl.question("Vui lòng chọn số:");
        switch (number) {
          case 1:
            this.controller.displayMachineEnable();
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
        this.controller.addMachine();
        break;
      case 3:
        if (this.controller.arrMachineLength() <= 0) {
          console.log("Không có máy nào để cập nhật !!");
          this.mainMenu();
        } else {
          this.controller.displayMachines2();
          let index = parseInt(rl.question("Chọn chỉ số muốn cập nhật :"));
          if (index > this.controller.arrMachineLength() - 1) {
            console.log("Không tìm thấy chỉ số !");
          } else {
            this.controller.updateMachine(index);
            console.log(
              "\n----------------------Cập nhật thành công !-----------------------"
            );
          }
        }
        break;
      case 4:
        this.controller.displayMachines2();
        let index = parseInt(rl.question("Nhập chỉ số mà bạn muốn xóa ? :"));
        if (index > this.controller.arrMachineLength() - 1) {
          console.log("Không tìm thấy chỉ số này !");
        } else {
          let str = `
                Bạn có chắc muốn xóa máy này
                1. Có
                2. Không 
            `;
          console.log(str);
          let num = +rl.question("Nhập lựa chọn của bạn :");
          if (num == 1) {
            this.controller.deleteMachine(index);
            console.log(
              "\n----------------------Xóa máy thành công !-----------------------"
            );
          }
        }
        break;
      case 5:
        let money = +rl.question("chọn số tiền bạn muốn cho mỗi giờ: ");
        this.controller.moneyPerHour = money;
        console.log(
          "\n----------------------Thay đổi giá tiền /giờ thành công!-----------------------"
        );
        Menu.mainMenu();
        break;
      case 6:
        this.controller.totalMoneyMachineEnable();
        this.controller.displayMachineEnable();
        n = +rl.question("Choose your machine you want bill: ");
        this.controller.billMachineEnable(n);
        this.controller.displayMachines();
        break;
      case 7:
        if (this.controller.arrMachineLength() > 0) {
          let findMachine = rl.question("Nhập tên máy cần tìm:");
          this.controller.findMachine(findMachine);
          Menu.mainMenu();
        } else {
          console.log("Trong hệ thống không có máy nào !");
          Menu.mainMenu();
        }
        break;
      case 8:
        this.controller.sortMachineByName();
        Menu.mainMenu();
        break;
      case 9:
        let c8 = `
Bạn có chắc muốn đăng xuất
1. Có
2. Không 
            `;
        console.log(c8);
        let que = +rl.question("Nhập lựa chọn của bạn :");
        if (que == 1) {
          console.log("Cảm ơn đã sử dụng dịch vụ");
          AccountController.init();
        } else if (que == 2) {
          this.mainMenu();
        }
        Menu.mainMenu();
        break;
    }
  }
}
