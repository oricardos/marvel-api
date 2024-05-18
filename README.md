# Marvel API Project

Este projeto é uma aplicação React que consome a API da Marvel para exibir informações sobre personagens, quadrinhos, histórias, séries e criadores. Ele utiliza React Router para gerenciar a navegação e Tailwind CSS para o estilo.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Além disso, você precisará se registrar no [Marvel Developer Portal](https://developer.marvel.com/) para obter suas chaves de API (Public Key e Private Key).

## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

4. Configure suas chaves da API da Marvel. Crie um arquivo `.env` na raiz do projeto e adicione suas chaves:

    ```env
    REACT_APP_MARVEL_PUBLIC_KEY=sua-public-key
    REACT_APP_MARVEL_PRIVATE_KEY=sua-private-key
    ```

## Uso

Para iniciar a aplicação em modo de desenvolvimento, execute:

```bash
npm start
```
ou
```bash
yarn start
```

A aplicação estará disponível em http://localhost:5173/[http://localhost:5173/].
<!-- 
##Estrutura do Projeto
Aqui está uma visão da estrutura de diretórios e arquivos do projeto.

marvel-api/
├── public
│   └── vite.svg
├── package.json
├── vite.config.mjs
├── src/
│   ├── App.jsx
│   ├── Layout/
│   │   └── index.jsx
│   ├── components/
│   │   ├── CharacterList.jsx
│   │   ├── ComicList.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Characters.jsx
│   │   ├── Comics.jsx
│   │   └── ...
│   ├── services/
│   │   └── marvelApi.js
│   ├── index.css
│   └── main.jsx
├── tailwind.config.mjs
└── ... -->

##Dependências
- React: Uma biblioteca JavaScript para construir interfaces de usuário.
- React Router: Gerenciamento de rotas em aplicações React.
- Axios: Cliente HTTP para fazer requisições à API da Marvel.
- Tailwind CSS: Um framework CSS para estilização.
- MD5: Biblioteca para gerar hashes MD5 (usada na autenticação da API da Marvel).

##Contribuindo
Se você quiser contribuir com este projeto, siga estas etapas:

1.Faça um fork do repositório.
2.Crie uma branch para sua feature ou correção (git checkout -b feature/nova-feature).
3.Commit suas mudanças (git commit -am 'Adiciona nova feature').
4.Push para a branch (git push origin feature/nova-feature).
5.Abra um Pull Request.

##Licença
Este projeto está licenciado sob a MIT License.


Espero que isso ajude! Sinta-se à vontade para ajustar e adicionar mais detalhes conforme necessário para melhor atender às necessidades do seu projeto.
