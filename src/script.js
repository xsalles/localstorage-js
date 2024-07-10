function save() 
  {
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('password', document.getElementById('password').value);
  
  alert("Dado salvo com sucesso");
}

function getData() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  return {email, password}
}

function consult() {
  const data = getData();

  if (data.email && data.password) {
    document.getElementById(
      "result"
    ).innerText = `Email: ${data.email}, Senha: ${data.password}`;
  } else {
    document.getElementById("result").innerText =
      "Nenhum resultado foi encontrado";
  }
}

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    save();
})

document.getElementById('consult').addEventListener('click', consult)


