
export let name: string = 'Jader';

export const age: number = 35;

export const isValid: boolean = true;

name = 's';

export const templateString = ` Esto es un string
multilinea
que puede tener
"dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros: ${ age }
booleans: ${ isValid }`

console.log(templateString);
