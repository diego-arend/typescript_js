"use strict";
// abstract class não permite criação de objetos.
// utilizada para servir de modelo para classes extendidas
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The Player ".concat(this.name, " id:").concat(this.id, " is ").concat(this.age, " year old"));
    };
    Object.defineProperty(UserAccount.prototype, "getAge", {
        get: function () {
            if (this.age <= 18) {
                return "".concat(this.name, " is under 18.");
            }
            return "".concat(this.name, " is ").concat(this.age, " years old.");
        },
        enumerable: false,
        configurable: true
    });
    return UserAccount;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, id, age, nickName, experience) {
        var _this = 
        // extende da classe superior
        _super.call(this, name, id, age) || this;
        // especificos da classe
        _this.nickName = nickName;
        _this.experience = experience;
        return _this;
    }
    Player.prototype.logPlayer = function (num1, num2) {
        return num1 + num2;
    };
    Object.defineProperty(Player.prototype, "setExperience", {
        set: function (exp) {
            this.experience = exp;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}(UserAccount));
var user = new UserAccount("Diego", 1, 40);
var player1 = new Player("Diego", 1, 40, "Zeus", 10);
console.log("Object user", user);
console.log("Props Object user", user.age);
console.log("Call method get class", user.getAge);
user.logDetails();
console.log("Object player", player1);
console.log("Call method player", player1.logPlayer(user.age, user.id));
player1.setExperience = 18;
console.log("Verify set method class player", player1.experience);
// console.clear()
