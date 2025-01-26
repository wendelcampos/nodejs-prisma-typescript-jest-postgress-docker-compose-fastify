# API Solid

Esta é uma aplicação de exemplo utilizando a arquitetura SOLID para construção de APIs.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Prisma**: ORM para TypeScript e JavaScript.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Jest**: Framework de testes em JavaScript.
- **Tsyringe**: Biblioteca de injeção de dependência para TypeScript.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker Compose**: Ferramenta para definir e gerenciar multi-containers Docker.
- **Fastify**: Framework web rápido e de baixo overhead para Node.js.

## Utilização do SOLID

O projeto segue os princípios SOLID para garantir um código mais modular, fácil de manter e escalável. Os princípios SOLID aplicados são:

- **S**ingle Responsibility Principle (Princípio da Responsabilidade Única): Cada classe ou módulo tem uma única responsabilidade.
- **O**pen/Closed Principle (Princípio do Aberto/Fechado): Classes e módulos são abertos para extensão, mas fechados para modificação.
- **L**iskov Substitution Principle (Princípio da Substituição de Liskov): Objetos de uma classe base devem poder ser substituídos por objetos de uma classe derivada sem alterar o funcionamento do programa.
- **I**nterface Segregation Principle (Princípio da Segregação de Interface): Muitas interfaces específicas são melhores do que uma interface única e abrangente.
- **D**ependency Inversion Principle (Princípio da Inversão de Dependência): Dependa de abstrações, não de implementações.


## Instalação

1. Clone o repositório:
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
4. Configure as variáveis de ambiente no arquivo `.env`.

## Uso

1. Inicie o servidor:
    ```bash
    npm run dev
    ```
2. Acesse a aplicação em `http://localhost:3000`.

## Testes

Para rodar os testes, utilize o comando:
```bash
npm run test

```

## Estrutura do Projeto

- `src/`: Contém o código fonte da aplicação.
  - `controllers/`: Controladores da aplicação.
  - `services/`: Serviços da aplicação.
  - `repositories/`: Repositórios da aplicação.
  - `entities/`: Entidades do banco de dados.
  - `routes/`: Definição das rotas da aplicação.
  - `config/`: Configurações da aplicação.
  - `tests/`: Testes da aplicação.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.