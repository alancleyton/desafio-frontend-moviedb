# Desafio Front-end
Desafio Front-end para a Agenda Edu usando ReactJs.

# Requisitos para rodar o projeto localmente
* ter instalado `npm` >= 8.1.2
* ter instalado `node` >= 16.13.2
* ter uma Key valida da API do [TheMovieDB](https://www.themoviedb.org/documentation/api)

# Instalando e Rodando o projeto localmente
1. Usando o `yarn` Instale todas as dependências.
```bash
  yarn install
```

2. Em seguida crie um arquivo `.env` no diretório raiz do projeto:
```dosini
REACT_APP_API_BASE_URL=https://api.themoviedb.org/3
REACT_APP_API_KEY=SUA KEY GERADA DO TMDB
```

3. Rode o projeto localmente.
```bash
  yarn start
```

# Testes
Rodar todos os testes.
```bash
  yarn tests
```

# Build
Rodar build para produção.
```bash
  yarn build
```
