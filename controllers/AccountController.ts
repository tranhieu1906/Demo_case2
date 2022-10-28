import * as rl from "readline-sync";
import { User } from "../model/User";
import { File } from "../File";
import { Menu } from "../view/menu";
export class AccountController {
  static listUser = new Array<User>();
  static PATH = "./data/admin.txt";
  static init() {
    let dataUser = File.readFile(this.PATH);
    dataUser.forEach((e) => {
      let arr = e.split(",");
      this.listUser.push(
        new User(arr[0], arr[1], arr[2], parseInt(arr[3]), arr[4])
      );
    });
    let menu: string = `
        1. Đăng nhập
        2. Đăng kí
        3. Thoát
        `;
    console.log(menu);
    let temp: number = 0;
    let regex: RegExp = /^[1-3]$/;
    while (temp < 1 || temp > 3) {
      let chooseUser = rl.question("Bạn muốn chọn số nào :");
      if (regex.test(chooseUser)) {
        temp = +chooseUser;
      } else {
        temp = -1;
      }
      if (temp < 1 || temp > 3) {
        console.log("Vui lòng nhập số từ 1 đến 3");
      }
    }
    switch (temp) {
      case 1:
        this.login();
        break;
      case 2:
        this.register();
        break;
    }
  }
  static login() {
    console.log("------------------------login--------------------");
    let inputAccount = rl.question("Account:");
    let inputPassword = rl.question("Password:");
    let isLogin = this.listUser.some(
      (e) =>
        e.getUserAcount() == inputAccount &&
        e.getUserPassWord() == inputPassword
    );
    if (isLogin) {
      Menu.mainMenu();
    } else {
      console.log("tài khoản,mật khẩu không đúng");
      this.init();
    }
  }
  static register() {
    let flag = true;
    let newAccount: string;
    let newPassword: string;
    let newName: string;
    let newAge: number;
    let newEmail: string;
    console.log("-----------------Register-----------------");
    // acount
    while (flag) {
      newAccount = rl.question("Tài khoản:");
      if (!newAccount) {
        console.log("không được để trống");
      } else if (this.listUser.some((e) => e.getUserAcount() == newAccount)) {
        console.log("tài khoản đã có trong hệ thống");
      } else {
        flag = false;
      }
    }
    //password
    while (!flag) {
      newPassword = rl.question("Mật khẩu:");
      if (!this.validatePassWord(newPassword)) {
        console.log(
          "Mật khẩu phải có tối thiểu tám ký tự, ít nhất một chữ cái và một số !\n"
        );
      } else {
        flag = true;
      }
    }
    // email
    while (flag) {
      newEmail = rl.question("Email:");
      if (!this.validateEmail(newEmail)) {
        console.log("Email không hợp lệ !\n");
      } else if (this.listUser.some((e) => e.getUserEmail() == newEmail)) {
        console.log("Email đã tồn tại !\n");
      } else {
        flag = false;
      }
    }
    while (!flag) {
      newName = rl.question("Your Name:");
      if (!newName) {
        console.log("không được để trống");
      } else {
        flag = true;
      }
    }
    while (flag) {
      newAge = parseInt(rl.question("Your Age:"));
      if (!newAge) {
        console.log("không được để trống");
      } else if (this.validateAge(newAge)) {
        console.log("Nhập tuổi hợp lệ");
      } else {
        flag = false;
      }
    }
    this.listUser.push(
      //@ts-ignore
      new User(newAccount, newPassword, newName, newAge, newEmail)
    );
    File.writeFile(this.PATH, this.listUser);
    console.log("Tạo tài khoản thành công !");
    this.init();
  }
  static validatePassWord(inputPassword: string) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(inputPassword);
  }

  static validateEmail(inputEmail: string) {
    let regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(inputEmail);
  }
  static validateAge(inputAge: any) {
    let regex = /\s[0-1]{1}[0-9]{0,2}/;
    return regex.test(inputAge);
  }
}
