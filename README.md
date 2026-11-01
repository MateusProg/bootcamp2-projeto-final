# bootcamp2-projeto-final

Aluno: Mateus Gomes de Oliveira

RA: 22609084

## Descrição
Busca um pokémon a partir do nome do mesmo, útil para saber informações simples e rápidas sobre um pokémon específico. Agora com capacidade de persistência de times em um banco de dados.

## API utilizada
- PokéAPI: [link da documentação](https://pokeapi.co/docs/v2)
- [Endpoint(s) consumido(s)](https://pokeapi.co/api/v2/)

## Persistência
Banco de dados PostgreSQL hosteado no SUPABASE, possui ID, data de quando foi persistido, 6 JSONs de pokémons que compoem um time e um nome para caso queiram nomear o mesmo.

## Como executar localmente
1. Clone: `git clone https://github.com/MateusProg/bootcamp2-projeto-final`
2. Abra o arquivo `index.html` no navegador

# Comando Docker Run
docker run -d -p 8080:80 mateusprog/bootcamp2-projeto-final:1.0

# Repositório DOCKER HUB
https://hub.docker.com/r/mateusprog/bootcamp2-projeto-final

# Como rodar os testes
Com o Node.js instalado, rode o comando

**fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression**

ao abrir o terminal pela primeira vez e depois rode

**npm test**


