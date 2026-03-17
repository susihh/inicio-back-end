const usuarios = [
    // criando uma lista (array)
    { nome:"carlos", idade: 32 }, 
    { nome:"Ana", idade: 28 },
    { nome:"felipe", idade: 40 }
];
// encontrando um objeto-find-===
const Ana = usuarios.find(usuarios => usuarios.nome === 'Ana');
console.log(Ana);

// filtrando objetos
const usuariosAcimaDe30 = usuarios.filter(usuarios => usuarios.idade > 30);
console.log(usuariosAcimaDe30);

// ordenando obetos por idade
const usuariosOrdenadosPorIdade = usuarios.sort((a,b) => a.idade - b.idade);
console.log(usuariosOrdenadosPorIdade);


// ordenando obetos por idade b.idade - a.idade 
const usuariosOrdenadosPorIdadev = usuarios.sort((a,b) => b.idade - a.idade);
console.log(usuariosOrdenadosPorIdade);

