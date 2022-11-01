export class User {
  userName: string;
  userEmail: string;
  userPassWord: string;
  userAcount: string;
  userAge: number;
  constructor(
    userAcount: string,
    userPassWord: string,
    userName: string,
    userAge: number,
    userEmail: string
  ) {
    this.userAcount = userAcount;
    this.userPassWord = userPassWord;
    this.userName = userName;
    this.userAge = userAge;
    this.userEmail = userEmail;
  }

  getUserAcount(): string {
    return this.userAcount;
  }

  setUserAcount(value: string) {
    this.userAcount = value;
  }

  getUserPassWord(): string {
    return this.userPassWord;
  }

  setUserPassWord(value: string) {
    this.userPassWord = value;
  }

  getUserName(): string {
    return this.userName;
  }

  setUserName(value: string) {
    this.userName = value;
  }

  getUserAge(): number {
    return this.userAge;
  }

  setUserAge(value: number) {
    this.userAge = value;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  setUserEmail(value: string) {
    this.userEmail = value;
  }

  toString(): string {
    return `${this.userAcount},${this.userPassWord},${this.userName},${this.userAge},${this.userEmail}`;
  }
}
