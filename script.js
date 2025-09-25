// Script simples para simular envio do formulário
document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado por entrar em contato! Em breve retornaremos sua mensagem.");
  this.reset();
});
