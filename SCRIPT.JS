const formulario = document.querySelector(".formulario");

const nome = document.querySelector("#nome");

//Input personalizado
const cpf = document.querySelector("#cpf");
const telefone = document.querySelector("#tel");

cpf.addEventListener("input", function () {
  let valor = cpf.value.replace(/\D/g, "");

  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;
});

telefone.addEventListener("input", function () {
  let valor = telefone.value.replace(/\D/g,"");

  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    telefone.value = valor;
})

//Input Calendário
const nascimento = document.querySelector("#nascimento");

const hoje = new Date();
const dataMinima = new Date(
  hoje.getFullYear() - 18,
  hoje.getMonth(),
  hoje.getDate()
);

const ano = dataMinima.getFullYear();
const mes = String(dataMinima.getMonth() + 1).padStart(2, "0");
const dia = String(dataMinima.getDate()).padStart(2, "0");

nascimento.max = `${ano}-${mes}-${dia}`;

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

  // NOME
 if(nome.value.trim() === "") {
   alert("Por favor, digite seu nome completo.");
   nome.focus();
   return;
 }

  //CPF
  const cpfValido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
  
  if(!cpfValido.test(cpf.value)) {
    alert("Digite o CPF ni formato 000.000.000-00.");
    cpf.focus();
    return;
  }

  //Telefone
  const telefoneValido = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;

  if(!telefoneValido.test(telefone.value)) {
    alert("Digite o telefone no formato (00) 00000-0000.")
    telefone.focus();
    return;
  }

  //E-mail
  if(email.value.trim() === "") {
    alert("Digite seu e-mail.");
    email.focus();
    return;
  }
  
  //Senha
  if(email.value.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.")
    senha.focus();
    return;
  }

  alert("Cadastro realizado com sucesso!");

  formulario.reset();
});