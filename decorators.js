"use strict";
// Decorator é um aanotação que pode ser declarada em uma classe, função etc.
// Deve ser precedido de @
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
//Factory
// function Logger(prefix: string) {
//   return (constructor) => {
//     console.log("debug factory", `${prefix} - ${constructor}`);
//   };
// }
// //Class decorator- roda em runtime.
// @Logger("awesome")
// class Foo {}
// Decorator que anota a versão da API
// function setApiVersion(apiVersion: string) {
//   return (constructor: any) => {
//     return class extends constructor {
//       version = apiVersion;
//     };
//   };
// }
// @setApiVersion("1.0.0")
// class API {}
// console.log(new API());
//Property Decorator
// function minLength(length: number) {
//   return (target: any, key: string) => {
//     let val = target[key];
//     const getter = () => val;
//     const setter = (value: string) => {
//       if (value.length < length) {
//         console.log(
//           `Error: O ${key} não pode ter tamanho menor que ${length}.`
//         );
//       } else {
//         val = value;
//       }
//     };
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     });
//   };
// }
// class Movie {
//   // Uso commum do Property Decorator= validações
//   // Validação - se for menor que 5 - error
//   @minLength(5)
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const movie = new Movie("Replicante");
// console.log("debug", movie.title);
//Method Decorator- roda em execution time
function delay(ms) {
  return function (target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      console.log("Esperando ".concat(ms, "..."));
      setTimeout(function () {
        originalMethod.apply(_this, args);
      }, ms);
      return descriptor;
    };
  };
}
var Greeter = /** @class */ (function () {
  function Greeter(g) {
    this.greeting = g;
  }
  // Decorator para delay. Espera um time em ms e exibe msg
  Greeter.prototype.greet = function () {
    console.log("debug", this.greeting);
  };
  __decorate([delay(1000)], Greeter.prototype, "greet", null);
  return Greeter;
})();
var pessoinha = new Greeter("Oi Pessoinha");
pessoinha.greet();
