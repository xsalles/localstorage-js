# Localstorage

LocalStorage é também chamado de Web Storage ou Armazenamento local. Ele é um objeto JavaScript que usamos para armazenar dados no navegador. Ele fornece métodos para armazenar e recuperar a informação. O uso da API é bem simples, é baseada em chave-valor.

Fiz um repositório com as seguintes funções:

• Salva dados de um formulário de cadastro com email e senha e aloca no localStorage.

•  Consulta os dados inseridos no localStorage, podendo consultar vários de uma vez

• Pode modificar os dados que foram inseridos.

• Você pode excluir os dados que você quiser, caso tenha colocado o email errado ou a senha errado.


Mas afinal, qual a diferença de um banco de dados para um localStorage? 
O localStorage foi feito para armazenar pequenas quantidades de dados, sendo a capacidade máxima de 10MB, já o banco de dados a capacidade máxima é aquela que você tem disponível para alocar no seu dispositivo ou no seu servidor. O banco de dados é seguro por conta dos dados serem criptografados, já o localStorage também é seguro somente quando o contexto é estar dentro do próprio navegador. 

Se você for amarzenar uma pequena quantidade de dados, pode usar o localStorage tranquilamente, agora se for uma grande quantidade de dados, você deve usar um banco de dados (SEM DÚVIDAS!).
