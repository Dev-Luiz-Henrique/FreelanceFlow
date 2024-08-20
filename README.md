# FreelanceFlow

**FreelanceFlow** é uma plataforma projetada para conectar freelancers e clientes. Atualmente as manipulações de CRUD das entidades Owner (Donos de projetos) e Freelancer.

## Índice

- [Visão Geral](#visão-geral)
- [Endpoints](#endpoints)
  - [Owner](#owner)
  - [Freelancer](#Freelancer)
- [Erros Comuns](#erros-comuns)
- [Licença](#licença)

## Visão Geral

A **FreelanceFlow** oferece uma interface, focada inicialmente em operações de leitura para a entidade "owner". Este endpoint permite aos usuários recuperar informações sobre os proprietários de perfis na plataforma.

## Endpoints

### Owner

- **GET /owner**: Lista todos os proprietários cadastrados.
- **GET /owner/{id}**: Recupera informações de um proprietário específico.
- **POST /owner**: Cria um novo proprietário.
- **PUT /owner/{id}**: Atualiza informações de um proprietário existente.
- **DELETE /owner/{id}**: Remove um proprietário específico.

### Freelancer

- **GET /freelancer**: Lista todos os freelancers cadastrados.
- **GET /freelancer/{id}**: Recupera informações de um freelancer específico.
- **POST /freelancer**: Cria um novo freelancer.
- **PUT /freelancer/{id}**: Atualiza informações de um freelancer existente.
- **DELETE /freelancer/{id}**: Remove um freelancer específico.

## Erros Comuns

- **404 Not Found**: Recurso não encontrado. Verifique se o ID está correto.
- **400 Bad Request**: Dados inválidos ou faltando. Verifique a estrutura do corpo da requisição.
- **500 Internal Server Error**: Erro no servidor. Consulte os logs para mais detalhes.