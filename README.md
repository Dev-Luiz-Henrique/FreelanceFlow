# FreelanceFlow

**FreelanceFlow** é uma plataforma projetada para conectar freelancers e clientes. Atualmente, a API permite operações de GET na entidade "owner", que representa os proprietários de perfis dentro da plataforma.

## Índice

- [Visão Geral](#visão-geral)
- [Endpoints](#endpoints)
  - [Owner](#owner)
- [Erros Comuns](#erros-comuns)
- [Licença](#licença)

## Visão Geral

A **FreelanceFlow** oferece uma interface RESTful simples, focada inicialmente em operações de leitura para a entidade "owner". Este endpoint permite aos usuários recuperar informações sobre os proprietários de perfis na plataforma.

## Endpoints

### Owner

- **GET /owner**: Lista todos os proprietários cadastrados.
- **GET /owner/{id}**: Recupera informações de um proprietário específico.

## Erros Comuns

- **404 Not Found**: Recurso não encontrado. Verifique se o ID está correto.
- **400 Bad Request**: Dados inválidos ou faltando. Verifique a estrutura do corpo da requisição.
- **500 Internal Server Error**: Erro no servidor. Consulte os logs para mais detalhes.
