# provaConcert
### Prova da Concert Technologies: avaliação desenvolvimento
#### Por: Thais Ávila Morato

## Instruções
- Abra um terminal e entre na pasta _frontend_.
- Execute o comando _npm install_.
- Execute o comando _npm start_.

- Abra outro terminal e entre na pasta _backend_.
- Execute o comando _npm install_.
- Execute o comando _npm start_.

- Abra seu navegador e vá para http://localhost:4200/ .

## Tarefas da prova e sua implementação
- [x] Crie um projeto em angular 9, escolhendo o Sass como pré-processador de CSS.

- [x] Crie uma página de Login (sem autenticação no backend), defina um login e senha estático (login: concert, senha: prova).

- [x]	Crie um CRUD (cadastrar, listar, editar e atualizar) com ao menos 6 campos, e obrigatoriamente precisa ter: “select”, “checkbox”, “radio”, “date”.

As abas _Clientes_ e _Cadastrar cliente_ se referem a esse primeiro CRUD, cujo formulário possui os quatro tipos de input pedidos.

- [x] Crie um CRUD, com quantos campos quiser, usando ReactiveForms, aplique validações em alguns dos campos. Exemplo (não permitir campo em branco; número maior que zero, etc.)

A aba _Produtos_ se refere a esse segundo CRUD. Para que o formulário de cadastro seja submetido com sucesso, todos os campos devem estar preenchidos e o campo _Quantidade_ deve ter no mínimo o valor 1.

- [x] Crie um componente para ser utilizado nos dois CRUD criado anteriormente. Esse componente precisa obrigatoriamente ter um Input e Output property.

- [x] Crie uma página OU um sidebar para navegar entre os componentes.

Para esse projeto, foi escolhido o sidebar.

- [x] Aplique “Loading” em TODAS as páginas, se preciso use o “setTimeout” para simular o tempo de carga.

- [x] Notificação de feedback (mensagem de sucesso, e de erro, nas páginas de CRUD).

As páginas de CRUD exibem mensagens quando as operações são concluidas, apresentam erros ou são canceladas. Na página de Login também são exibidas mensagens de feedback sobre a autenticação do usuário.

- [ ] Aplique “Lazy Load” nas rotas de navegação.

Pela minha pesquisa, o projeto precisaria de ser organizado de outra maneira para que a aplicação de "Lazy Load" fosse possível.

- [ ] Tarefa Bônus (Não é obrigatório fazer) : Crie um componente de mapa, plotando um marcador, linhas, polígono, e um quadrado.

Tentei seguir o tutorial do _leafletjs.com_, mas o mapa não funcionou como deveria. Pelo limite de tempo, a funcionalidade acabou não sendo implementada.

- [x] Suba o projeto para um repositório público e envie o link para acesso.
