<div align="center">
    <h1> </h1>
    <h2>📚 Library API 📚</h2>
    <hr />
    <p>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/language-Node.js-green" alt="API main language" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-red" alt="Repository license" /></a>
    </p>
</div>

## 📜 Descrição

<p>
    A Library API é o projeto do PSI de projetos da EJCM. Trata-se do back-end de uma aplicação para a manipulação do banco de dados de uma <b>livraria</b>.
</p>
<p>
  A API possui a arquitetura REST e possui as seguintes entidades:
  <ul>
    <li><b>User</b></li>
    <li><b>Book</b></li>
  </ul>
</p>

---

## ✨ Funcionalidades

A API pode realizar as seguintes operações:

- [x] CRUD básico da entidade <b>User</b>
- [x] CRUD básico da entidade <b>Book</b>
- [x] Associação entre as entidades <b>User</b> e <b>Book</b>
- [x] Login do usuário utilizando <i>password encoding</i> com hash & salt
- [x] Autenticação do usuário usando JWT

---

## 🛠️ Tecnologias e ferramentas

Foram utilizadas as seguintes tecnologias e ferramentas no projeto:

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [crypto](https://nodejs.org/api/crypto.html)
- [JSON Web Token](https://jwt.io/)

---

## 📶 Modelagem ER

<br>

<div align="center">

<img src="./public/assets/er-diagram.drawio.png">

</div>

<br>

---

<br>

# 🌟 Rodando a aplicação

## Requerimentos

- [Git](https://git-scm.com/) instalado
- [Node](https://node.js.org/) instalado
- [Npm](https://www.npmjs.com/) instalado

<br>

### Siga as etapas para a aplicação funcionar corretamente:

<br>

#### 1️⃣ No terminal bash (Git), clone este repositório

```
git clone https://github.com/v-giorgio/api-restful-ejcm.git
```

<br>

#### 2️⃣ Acesse a pasta do projeto pelo terminal

```
cd api-restful-ejcm
```

<br>

#### 3️⃣ Abra o projeto no editor de texto (VSCode)

```
code .
```

<br>

#### 4️⃣ Abra o terminal e execute o comando para instalar as dependências do projeto

```
npm install
```

<br>

#### 5️⃣ Acesse o arquivo `.env.example` e copie o seu conteúdo. Crie um novo arquivo chamado `.env` e cole o conteúdo nele.

```
PORT=

DB_DIALECT=sqlite
DB_DATABASE=library
DB_STORAGE="./api/database/library.sqlite"
```

- O campo PORT altera a porta utilizada para rodar a API. Se não for definida, a API rodará normalmente na porta 3000.
- <b>Não altere os outros campos.</b>

<br>

#### 6️⃣ Execute o comando para gerar as chaves

```
npm run keys
```

<br>

#### 7️⃣ Execute o comando para criar as tabelas no banco

```
npm run migrate
```

<br>

#### 8️⃣ (Opcional) Execute o comando para popular o banco com registros iniciais

```
npm run seed
```

<br>

#### 9️⃣ Execute a aplicação

```
npm start
```

---

## 🔃 Rotas da API

### Rotas da entidade `Book`:

#### 🪧 `/books`

Rota para <b>encontrar</b> todos os livros.<br>
Método: `GET`<br>

Resposta:

```
[
	{
		"id": 1,
		"title": "My Ántonia",
		"editor": "Wildside Press, LLC",
		"author": "Willa Cather",
		"release_year": 1988,
		"createdAt": "2022-04-01T23:36:51.868Z",
		"updatedAt": "2022-04-01T23:37:52.005Z"
	},
	{
		"id": 2,
		"title": "Notes",
		"editor": "Independently Published",
		"author": "Keep My Stuff Books",
		"release_year": 2020,
		"createdAt": "2022-04-01T23:36:56.215Z",
		"updatedAt": "2022-04-01T23:36:56.215Z"
	},
	{
		"id": 3,
		"title": "My Novel",
		"editor": "Horse's Mouth",
		"author": "Edward Bulwer Lytton, Baron Lytton",
		"release_year": 1942,
		"createdAt": "2022-04-01T23:37:00.701Z",
		"updatedAt": "2022-04-01T23:37:00.701Z"
	},
	{
		"id": 4,
		"title": "MY PERSONAL LOGBOOK",
		"editor": "Independently published",
		"author": "Medical Help",
		"release_year": 2019,
		"createdAt": "2022-04-01T23:37:05.478Z",
		"updatedAt": "2022-04-01T23:37:05.478Z"
	},
	{
		"id": 5,
		"title": "My Hero Academia",
		"editor": "Independently Published",
		"author": "One For ALL",
		"release_year": 2021,
		"createdAt": "2022-04-01T23:37:10.090Z",
		"updatedAt": "2022-04-01T23:37:10.090Z"
	}
]
```

#### 🪧 `/books/:id`

Rota para <b>encontrar</b> um livro pelo id.<br>
Método: `GET`<br>
Informe o <b>id</b> do livro que deseja encontrar no parâmetro da rota<br>

Resposta:<br>

`/books/1`

```
{
	"id": 1,
	"title": "My Ántonia",
	"editor": "Wildside Press, LLC",
	"author": "Willa Cather",
	"release_year": 1988,
	"createdAt": "2022-04-01T23:36:51.868Z",
	"updatedAt": "2022-04-01T23:36:51.868Z"
}
```

#### 🪧 `/books`

Rota para <b>adicionar</b> um livro.<br>
Método: `POST`<br>
Template para enviar os dados:

```
{
	"title": "O Iluminado",
	"editor": "Suma",
	"release_year": "1986-09-12",
	"genre": "Terror",
	"user_id": 1
}
```

<br>
Resposta:

```
{
	"id": 6,
	"title": "O Iluminado",
	"editor": "Suma",
	"release_year": "1986-09-12",
	"genre": "Terror",
	"user_id": 1
	"createdAt": "2022-03-13T19:08:13.000Z",
	"updatedAt": "2022-03-14T18:43:16.000Z"
}
```

#### 🪧 `/books/:id`

Rota para <b>atualizar</b> um livro pelo id.<br>
Método: `PUT`<br>
Template para enviar os dados:

```
{
	"title": "It"
    // informe na rota o Id do livro que deseja alterar
    // você pode alterar outros campos além do `title`
}
```

<br>
Resposta:<br>

`/books/6`

```
{
	"id": 6,
	"title": "It",
	"editor": "Suma",
	"release_year": "1986-09-12",
	"genre": "Terror",
	"user_id": 1
	"createdAt": "2022-03-13T19:08:13.000Z",
	"updatedAt": "2022-03-14T18:43:16.000Z"
}
```

#### 🪧 `/books/:id`

Rota para <b>deletar</b> um livro pelo id.<br>
Método: `DELETE`<br>
Informe o <b>id</b> do livro que deseja deletar no parâmetro da rota<br>

Resposta:<br>

`books/6`

```
{
	"message": "Filme 6 deletado"
}
```

#### 🪧 `/books/user/:bookId`

Rota para <b>alterar</b> a chave estrangeira `user_id` do livro.<br>
Método: `PUT`<br>
Informe o <b>id</b> do livro do qual deseja alterar o usuário<br>

Template para enviar os dados:

```
{
	"user_id": 2
}
```

<br>
Resposta:<br>

`/books/user/1`

```
{
	"id": 1,
	"title": "My Ántonia",
	"editor": "Suma",
	"release_year": "1986-09-12",
	"genre": "Terror",
	"createdAt": "2022-03-13T19:08:13.000Z",
	"updatedAt": "2022-03-14T18:43:16.000Z"
}
```

### Rotas da entidade `User`:

#### 🪧 `/users`

Rota para <b>encontrar</b> todos os usuários.<br>
Método: `GET`<br>

Resposta:

```
[
	{
		"id": 1,
		"name": "Vitor",
		"email": "vitor@hp.com.br",
		"hash": "teste123",
		"salt": "teste345",
		"birthdate": "1980-08-21",
		"street": "Rua dos Alfeneiros",
		"neighborhood": "Alfeneiro",
		"street_number": 895,
		"zipcode": 40890300,
		"createdAt": "2022-04-01T23:36:46.631Z",
		"updatedAt": "2022-04-01T23:38:29.258Z"
	},
	{
		"id": 2,
		"name": "Laura",
		"email": "laura@hp.com.br",
		"hash": "teste123",
		"salt": "teste345",
		"birthdate": "1986-04-24",
		"street": "Rua dos Parisienses",
		"neighborhood": "Parisiense",
		"street_number": 896,
		"zipcode": 40890301,
		"createdAt": "2022-04-01T23:36:46.631Z",
		"updatedAt": "2022-04-01T23:36:46.631Z"
	},
	{
		"id": 3,
		"name": "Jorge",
		"email": "jorge@hp.com.br",
		"hash": "teste123",
		"salt": "teste345",
		"birthdate": "2005-08-20",
		"street": "Rua dos Canais",
		"neighborhood": "Canais",
		"street_number": 897,
		"zipcode": 40890302,
		"createdAt": "2022-04-01T23:36:46.631Z",
		"updatedAt": "2022-04-01T23:36:46.631Z"
	},
	{
		"id": 4,
		"name": "André",
		"email": "andre@hp.com.br",
		"hash": "teste123",
		"salt": "teste345",
		"birthdate": "1994-10-11",
		"street": "Rua dos Museus",
		"neighborhood": "Museu",
		"street_number": 898,
		"zipcode": 40890303,
		"createdAt": "2022-04-01T23:36:46.631Z",
		"updatedAt": "2022-04-01T23:36:46.631Z"
	},
	{
		"id": 5,
		"name": "Loras",
		"email": "loras@hp.com.br",
		"hash": "teste123",
		"salt": "teste345",
		"birthdate": "1980-08-25",
		"street": "Rua dos Quadros",
		"neighborhood": "Quadros",
		"street_number": 899,
		"zipcode": 40890304,
		"createdAt": "2022-04-01T23:36:46.631Z",
		"updatedAt": "2022-04-01T23:36:46.631Z"
	}
]
```

#### 🪧 `/users/:id`

Rota para <b>encontrar</b> um usuário pelo id.<br>
Método: `GET`<br>
Informe o <b>id</b> do usuário que deseja encontrar no parâmetro da rota<br>

Resposta:<br>

`/users/1`

```
{
	"id": 1,
	"name": "Vitor",
	"email": "vitor@hp.com.br",
	"hash": "teste123",
	"salt": "teste345",
	"birthdate": "1980-08-20",
	"street": "Rua dos Alfeneiros",
	"neighborhood": "Alfeneiro",
	"street_number": 895,
	"zipcode": 40890300,
	"createdAt": "2022-04-01T23:36:46.631Z",
	"updatedAt": "2022-04-01T23:36:46.631Z"
}
```

#### 🪧 `/users`

Rota para <b>registrar</b> um usuário.<br>
Método: `POST`<br>
Template para enviar os dados:

```
{
	"name": "Maria",
	"email": "maria@hp.com",
	"password": "teste123",
	"birthdate": "2000-08-23",
	"street": "Rua dos Torós",
	"neighborhood": "Madeireira",
	"street_number": 43,
	"zipcode": 40890306
}
```

<br>
Resposta:

```
{
	"id": 7,
	"name": "Maria",
	"email": "maria@hp.com",
	"hash": "5585c0e084e916964dcd65aa501c842a7c1fe609c22eaedfba0a9a1760c8873fb26baba51d05c767882c607d06c0737fbc75651561998cb5ed727ee333770478",
	"salt": "d8e1e0ac6a135c530b771eb2336f277f8c6cc1184de4390d8e7221cae36a41d8",
	"birthdate": "2000-08-23",
	"street": "Rua dos Torós",
	"neighborhood": "Madeireira",
	"street_number": 43,
	"zipcode": 40890306,
	"updatedAt": "2022-04-01T23:38:38.783Z",
	"createdAt": "2022-04-01T23:38:38.783Z"
}
```

#### 🪧 `/users/:id`

Rota para <b>atualizar</b> um usuário pelo id.<br>
Método: `PUT`<br>
Template para enviar os dados:

```
{
	"birthdate": "1980-08-21"
    // informe na rota o Id do usuário que deseja alterar
    // você pode alterar outros campos além do `birthdate`
}
```

<br>
Resposta:<br>

`/users/1`

```
{
	"id": 1,
	"name": "Vitor",
	"email": "vitor@hp.com.br",
	"hash": "teste123",
	"salt": "teste345",
	"birthdate": "1980-08-21",
	"street": "Rua dos Alfeneiros",
	"neighborhood": "Alfeneiro",
	"street_number": 895,
	"zipcode": 40890300,
	"createdAt": "2022-04-01T23:36:46.631Z",
	"updatedAt": "2022-04-01T23:38:29.258Z"
}
```

#### 🪧 `/users/:id`

Rota para <b>deletar</b> um usuário pelo id.<br>
Método: `DELETE`<br>
Informe o <b>id</b> do usuário que deseja deletar no parâmetro da rota<br>

Resposta:<br>

`users/7`

```
{
	"message": "Usuário 7 deletado"
}
```

#### 🪧 `/users/:userId/books`

Rota para <b>pegar</b> todos os livros que um usuário possui.<br>
Método: `GET`<br>
Informe o <b>id</b> do usuário cujos livros deseja encontrar<br>

Resposta:<br>

`users/1/books`

```
[
	{
		"id": 1,
		"title": "IT",
		"editor": "Suma",
		"release_year": "1986-09-15",
		"genre": "Terror",
		"createdAt": "2022-03-30T23:10:22.140Z",
		"updatedAt": "2022-03-30T23:10:22.140Z"
	},
	{
		"id": 2,
		"title": "Me chame pelo seu nome",
		"editor": "Intrinseca",
		"release_year": "2018-01-05",
		"genre": "Romance",
		"createdAt": "2022-03-30T23:10:22.140Z",
		"updatedAt": "2022-03-30T23:10:22.140Z"
	}
]
```

#### 🪧 `/users/:userId/book/:bookId`

Rota para <b>pegar</b> um livro específico que um usuário possui.<br>
Método: `GET`<br>
Informe o <b>id</b> do usuário e o <b>id</b> do livro que deseja encontrar<br>

Resposta:<br>

`users/1/book/1`

```
{
	"id": 1,
	"title": "IT",
	"editor": "Suma",
	"release_year": "1986-09-15",
	"genre": "Terror",
	"createdAt": "2022-03-30T23:10:22.140Z",
	"updatedAt": "2022-03-30T23:10:22.140Z"
}
```

#### 🪧 `/login`

Rota para <b>realizar o login</b> de um usuário já registrado<br>
Método: `POST`<br>
Template para enviar os dados:

```
{
	"email": "maria@hp.com",
	"password": "teste123"
}
```

<br>

Resposta:<br>

```
{
	"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsImlhdCI6MTY0ODg1NjMyMjAxOSwiZXhwIjoxNjQ4ODU2OTI2ODE5fQ.kWSVq1q1-DWjQB2GBD1HklpgR5AeDyOeQLDbqfZTXX7oTISC73Wv_ffRIEJRGuglwx2szhiSatLvDwJ8hXKvdEM_7k6Fq7hKmqUhFO2MUMoERRiO4AcCiNWQPmQIJwrVVd-WhrHHfMaEYStzNKo0n7t9_kmFWyybRttByBhDbzm2ooRf3_XeFA40jEDeHfwRLabSHUS_dt4KlGKHcwvduU5OrjWV9yWboaIPdFcpw0cH8f6yyXcEqDT6Ppzeq8DiCosXfzEJzh992JlGN7rlx29LoINP1AxPZ84khGhtT9k2TeNlrvHj411XOQM8WluUyPbYYgmZOoJcxMllExEe0JSBEw5EwSQ91u-AkDoM5E9BM_2dGDzgeSrK2kSQr_xAgrHIibRP972R94U4qWwD7Eb8VGW_jbwC76ksnOXa194JMeonHD_x335QcDBQkeXS1-nIQG6qLFCci9WaxNGM4inB6pyGxYwv6zDSCLR6eRZsUHbp2CdSu06IlEgzfL5VqTwY9TQtyJJEywK4V2aCUUywajpazTYfaA-TWM57AjCXDWq35WjspVrw0hRGSryPaXl64d4Mvj4xUQ5xDa3ydVHBpLhguDwiub_Y0_RmCu_MUnvbD4_enGmsuh-XzUm9ZERDk48R35tsUsKxby2YyqDeadYn2Rifpg5aPeEyOqg"
}
```

#### 🪧 `/private/getDetails`

Rota para <b>pegar todos os dados</b> de um usuário já registrado<br>
É necessário passar o <b>token</b> recebido na rota de login no <b>header</b> da requisição seguido da palavra `Bearer`:<br>

```
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsImlhdCI6MTY0ODg1NjMyMjAxOSwiZXhwIjoxNjQ4ODU2OTI2ODE5fQ.kWSVq1q1-DWjQB2GBD1HklpgR5AeDyOeQLDbqfZTXX7oTISC73Wv_ffRIEJRGuglwx2szhiSatLvDwJ8hXKvdEM_7k6Fq7hKmqUhFO2MUMoERRiO4AcCiNWQPmQIJwrVVd-WhrHHfMaEYStzNKo0n7t9_kmFWyybRttByBhDbzm2ooRf3_XeFA40jEDeHfwRLabSHUS_dt4KlGKHcwvduU5OrjWV9yWboaIPdFcpw0cH8f6yyXcEqDT6Ppzeq8DiCosXfzEJzh992JlGN7rlx29LoINP1AxPZ84khGhtT9k2TeNlrvHj411XOQM8WluUyPbYYgmZOoJcxMllExEe0JSBEw5EwSQ91u-AkDoM5E9BM_2dGDzgeSrK2kSQr_xAgrHIibRP972R94U4qWwD7Eb8VGW_jbwC76ksnOXa194JMeonHD_x335QcDBQkeXS1-nIQG6qLFCci9WaxNGM4inB6pyGxYwv6zDSCLR6eRZsUHbp2CdSu06IlEgzfL5VqTwY9TQtyJJEywK4V2aCUUywajpazTYfaA-TWM57AjCXDWq35WjspVrw0hRGSryPaXl64d4Mvj4xUQ5xDa3ydVHBpLhguDwiub_Y0_RmCu_MUnvbD4_enGmsuh-XzUm9ZERDk48R35tsUsKxby2YyqDeadYn2Rifpg5aPeEyOqg
```

Método: `GET`<br>

Resposta:<br>

```
{
	"user": {
		"id": 7,
		"name": "Maria",
		"email": "maria@hp.com",
		"hash": "5585c0e084e916964dcd65aa501c842a7c1fe609c22eaedfba0a9a1760c8873fb26baba51d05c767882c607d06c0737fbc75651561998cb5ed727ee333770478",
		"salt": "d8e1e0ac6a135c530b771eb2336f277f8c6cc1184de4390d8e7221cae36a41d8",
		"birthdate": "2000-08-23",
		"street": "Rua dos Torós",
		"neighborhood": "Madeireira",
		"street_number": 43,
		"zipcode": 40890306,
		"createdAt": "2022-04-01T23:38:38.783Z",
		"updatedAt": "2022-04-01T23:38:38.783Z"
	}
}
```

---

<br>

<div align="center">
    <sub>Copyright © 2022</sub>
    <p>MIT licensed</p>
    <h3>✨ Desenvolvido por Vitor Giorgio ✨</h3>
</div>
