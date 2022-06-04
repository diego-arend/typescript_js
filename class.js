"use strict";
// abstract class não permite criação de objetos.
// utilizada para servir de modelo para classes extendidas
class UserAccount {
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    logDetails() {
        console.log(`The Player ${this.name} id:${this.id} is ${this.age} year old`);
    }
    get getAge() {
        if (this.age <= 18) {
            return `${this.name} is under 18.`;
        }
        return `${this.name} is ${this.age} years old.`;
    }
}
class Player extends UserAccount {
    constructor(name, id, age, nickName, experience) {
        // extende da classe superior
        super(name, id, age);
        // especificos da classe
        this.nickName = nickName;
        this.experience = experience;
    }
    logPlayer(num1, num2) {
        return num1 + num2;
    }
    set setExperience(exp) {
        this.experience = exp;
    }
}
const user = new UserAccount("Diego", 1, 40);
const player1 = new Player("Diego", 1, 40, "Zeus", 10);
console.log("Object user", user);
console.log("Props Object user", user.age);
console.log("Call method get class", user.getAge);
user.logDetails();
console.log("Object player", player1);
console.log("Call method player", player1.logPlayer(user.age, user.id));
player1.setExperience = 18;
console.log("Verify set method class player", player1.experience);
// console.clear()
