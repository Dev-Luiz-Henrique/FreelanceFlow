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

## Licença

- MIT License.

Copyright (c) 2024 Diego Nicolas, Gabriel Gomes, Luiz Henrique

Permissão é concedida, sem qualquer custo, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar com o Software sem restrição, incluindo sem limitação os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software, desde que as seguintes condições sejam atendidas:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

O Software é fornecido "no estado em que se encontra", sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando às garantias implícitas de comercialização, adequação a um propósito específico e não violação. Em nenhum caso os autores ou detentores dos direitos autorais serão responsáveis por qualquer reclamação, dano ou outra responsabilidade, seja em uma ação de contrato, ato ilícito ou de outra forma, decorrente de, fora ou em conexão com o Software ou o uso ou outras negociações no Software.
