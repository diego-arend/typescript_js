// Decorator é um aanotação que pode ser declarada em uma classe, função etc.
// Deve ser precedido de @

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
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // Decorator para delay. Espera um time em ms e exibe msg
  @delay(1000)
  greet() {
    console.log("debug", this.greeting);
  }
}

const pessoinha = new Greeter("Oi Pessoinha");
pessoinha.greet();
