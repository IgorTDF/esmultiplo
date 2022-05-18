/*• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero*/

let numero1: number = Number(prompt("Ingrese el dividendo: "));
let numero2: number = Number(prompt("Ingrese el divisor: "));
let resto = numero1 % numero2;

if (resto === 0) {
  let multiplo: boolean = true;
  console.log("es multiplo", multiplo);
} else {
  let noEsMultiplo: boolean = false;
  console.log("No es Multiplo", noEsMultiplo);
}
