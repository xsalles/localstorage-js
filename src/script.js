let users = JSON.parse(localStorage.getItem('users')) || [];

function save() {
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("password", document.getElementById("password").value);

  users.push({email, password})

  localStorage.setItem('users', JSON.stringify(users));

  alert("Dado salvo com sucesso");
}

function getData() {
  return JSON.parse(localStorage.getItem('users'))
}

function consult() {
  const users = getData();
  resultElement = document.getElementById('result')

  if(users.length > 0){
    resultElement.innerHTML = 'Usuários: <br>'
  
  users.forEach(user => {
    resultElement.innerHTML += `Email: ${user.email}, Senha: ${user.password} <br>`;
  });
} else {
    resultElement.innerText = 'Nenhum usuário foi encontrado'
}
};


function modify() {
  const newEmail = document.getElementById('newEmail').value;
  const newPassword = document.getElementById('newPassword').value;

  if(newEmail && newPassword){
      let users = getData();

      if (users.length > 0) {
        users[0].email = newEmail;
        users[0].password = newPassword;

        localStorage.setItem('users', JSON.stringify(users));
        alert('Dados modificados com sucesso');
        consult(); 
    } else {
        alert('Nenhum usuário encontrado para modificar');
    }
} else {
    alert('Por favor, preencha ambos os campos');
}}

function showModifySection(){
    document.getElementById('modifysection').style.display = 'flex';
    document.getElementById('modifysection').style.flexDirection = 'column';
    document.getElementById('modifysection').style.gap = '10px';
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    save();
  });

document.getElementById("consult").addEventListener("click", consult);

document.getElementById('modify').addEventListener('click', showModifySection);

document.getElementById('newModifications').addEventListener('click', modify);
