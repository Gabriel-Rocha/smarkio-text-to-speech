# Text to Speech 

Esse projeto tem como o seu objetivo a conversão de texto, para áudio.

##  1 - Você ira precisar das seguintes ferramentas para executar o projeto

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [NodeJS](https://nodejs.org/pt-br/download/package-manager/)
* Criação de uma [conta IBM Cloud](https://www.ibm.com/cloud/watson-text-to-speech)
* Instalação do [MySQL](https://www.mysql.com/)

É de suma importancia a instalação do Git, para o clone do projeto.

Ao criar sua conta na IBM Cloud, será necessário ativar o serviço [Text to Speech](https://cloud.ibm.com/apidocs/text-to-speech) e obter o token que será utilizado nas requisições enviadas pela aplicação.


## 2 - Configuração do Ambiente

Clone este repositório com o comando abaixo:

```
$ git clone https://github.com/Gabriel-Rocha/smarkio-text-to-speech.git
```

Agora navegue até o diretório do projeto e carregue as dependências do projeto:

```
$ cd smarkio-text-to-speech
$ npm install
```

## 3 - Arquivos de Configuração

Precisamos editar os arquivos de conexão com o banco e o arquivo de configuração do token, que será utilizado para consumir o serviço.

Faça a edição do arquivo config/config.json, insira as credenciais utilizadas na configuração do seu ambiente MySQL.

Este mesmo arquivo contém as três versões de ambientes development, test e production. Estamos usando apenas a configuração de desenvolvimento em nosso ambiente, edite apenas este bloco:

```
"development": {
"username": "seu_usuario",
"password": "sua_senha",
"database": "nome_do_seu_banco",
"host": "nome_do_servidor",
"dialect": "mysql",
"operatorAliases": false
}
```

Agora, configure o token fornecido para o serviço Text to Speech, faça a edição do arquivo .env, na raíz do projeto:

```
IBM_URL= url_da_api
IBM_APIKEY= seu_token_aqui
```

# 4 - Criando o Banco de Dados

Após configuração da conexão com o banco, precisamos criar a tabela onde os comentários serão registrados, execute o comando abaixo no diretório do projeto:

```
$ npx sequelize-cli db:migrate
```

# 5 - Inicializando a Aplicação

Para iniciar a aplicação, execute o comando abaixo ainda no diretório do projeto:

```
$ nodemon server.js
```

Para criar seus áudios, acesso a página [http://localhost:3000/comments](http://localhost:3000/comments).

Após inserir algum texto, pressione o botão "Salvar" e aguarde até que o serviço processe o áudio.
