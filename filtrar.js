const usarios =[
    { nome: 'carlos', idade: 32 }, 
    { nome: 'ana', idade: 28 },
    { nome: 'felipe', idade: 40 },
];
// encontrando um objeto
const ana = usuarios.find(usuario => usuario.nome === 'ana');
console.log(ana);

// filtrando objetos
const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);
console.log(usuariosAcimaDe30);

// ordenando obetos por idade
const usuariosOrdenadosPorIdade = usarios.sort((a,b) => a.idade - b.idade);
console.log(usuariosOrdenadosPorIdade);
