const cliente = {
  nome: "André",
  idade: 32,
  CPF: "112.223.334.15",
  email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome}, ele tem ${cliente.idade} anos de idade.`)

console.log(`Os três primeiros dígitos do CPF de André são: "${cliente.CPF.substring(0, 3)}"`)
