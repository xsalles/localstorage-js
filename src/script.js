let users = JSON.parse(localStorage.getItem('users')) || [];

function save() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  users.push({email, password})

  localStorage.setItem('users', JSON.stringify(users));

  alert("Dado salvo com sucesso");
}

function getData() {
  return JSON.parse(localStorage.getItem('users'))
}

function consult() {
    const users = getData();
    const resultElement = document.getElementById('result');

    if (users.length > 0) {
        resultElement.innerHTML = '';
      
            users.forEach((user, index) => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-item');

                const data = document.createElement('p');
                data.textContent = `Email: ${user.email} Senha: ${user.password}`

                const remove = document.createElement('button')
                remove.textContent = 'Remover'
                remove.addEventListener('click', () => deleteUser(index))

                userDiv.appendChild(data, remove)
                userDiv.appendChild(remove)
                resultElement.appendChild(userDiv)
            });
    } else {
        resultElement.innerText = 'Nenhum usuário foi encontrado';
    }
} 

function deleteUser(index){
    let users = getData();

    if(users.length > index){
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuário removido com sucesso')
        consult()
    } else {
        alert('Índice invalido')
    }
}


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
    document.getElementById('modifysection').style.color = 'azure';
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    save();
  });

document.getElementById("consult").addEventListener("click", consult);

document.getElementById('modify').addEventListener('click', showModifySection);

document.getElementById('newModifications').addEventListener('click', modify);