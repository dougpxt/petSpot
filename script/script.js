// import 'F:/html_css_javascript/petSpot/script/configfirebase.js';
// import { writeUserData } from "./action.js";
// 
console.log('External script is executing');

var mudar = document.getElementById("efeito");
var t_login = document.getElementById("fazer-login");
var t_cadastrar = document.getElementById("cadastrar");

var botaoAnimacao = document.getElementById("botaoAnimacao")
// 

function menu(){
  if(document.getElementById("link-menu").style.display == "none"){
  document.getElementById("link-menu").style.display = "flex";
  } else {
  document.getElementById("link-menu").style.display = "none";
  };
};
// EXECUTA A ANIMAÇÃO DA TELA DE LOGIN E ATIVA O ZINDEX
botaoAnimacao.addEventListener('click', function(){
  animacao();
})

function animacao(){
  t_login.style.zIndex = "-1";
  mudar.style.left = "400px";
  t_cadastrar.style.zIndex = "-1";

  mudar.style.transition ="2s"

  mudar.style.zIndex = "5";
  
  mudar.addEventListener('transitionend', function() {
    t_cadastrar.style.zIndex = "1";
  });
};

    

function cadastrar(){
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  // var confirmarSenha = document.getElementById('confirmarSenha').value;
  
  writeUserData(nome, email, senha);

  nome.value = ''
  email.value = ''
  pwd.value = ''
  
  t_cadastrar.style.zIndex = "-1";
  t_login.style.zIndex = "1";
  mudar.style.left = "0px";
};

function LoginM(){
  var tela_login = document.getElementById("login-modal");
};