const cliente = {
    nome: "André",
    idade: 32,
    CPF: "112.223.334.15",
    email: "andre@dominio.com",
  };
  
  console.log(`O nome do cliente é ${cliente["nome"]} e ele tem ${cliente["idade"]} anos de idade.`)
  
const chaves = ["nome", "idade", "CPF", "email"]

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
  