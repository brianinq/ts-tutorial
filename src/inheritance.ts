class Person {
  constructor(public fname: string, public lname: string) {}
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
  walk() {
    console.log("walking");
  }
  talk() {
    console.log("talking");
  }
}

class Student extends Person {
  constructor(fname: string, public studentId: number, lname: string) {
    super(fname, lname);
  }
  takeTest() {
    console.log("Taking Test");
  }
}

let student = new Student("ji", 4, "ki");

class Teacher extends Person {
  override get fullName() {
    return "Prof. " + super.fullName;
  }
}
let teacher = new Teacher("bik", "huji");
