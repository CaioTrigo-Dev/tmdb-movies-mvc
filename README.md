🎬 CineMark - Catálogo de Filmes
O CineMark é uma aplicação React desenvolvida para listar e gerenciar filmes utilizando a API do TMDB. O projeto foi estruturado utilizando a arquitetura MVC (Model-View-Controller) para garantir uma separação clara de responsabilidades e facilitar a manutenção e testes.

🚀 Tecnologias Utilizadas
React JS: Biblioteca principal para construção da interface.

Context API: Gerenciamento de estado global para autenticação e sessão do usuário.

React Router Dom: Controle de rotas públicas e privadas.

Axios: Consumo da API REST do TMDB.

LocalStorage: Persistência de dados do usuário no navegador.

CSS Moderno: Layout responsivo com Flexbox e Grid.

🏗️ Arquitetura MVC
A estrutura de pastas reflete a preocupação com a organização do projeto:

src/context (Model): Contém o AuthContext, responsável por gerenciar o estado da verdade da aplicação (usuário logado).

src/pages (View): Telas da aplicação (Login, Dashboard) que apenas exibem os dados fornecidos pelos controllers.

src/controllers (Controller): Custom Hooks que isolam toda a lógica de negócio e validações, servindo de ponte entre o Context/Service e a View.

src/services: Configurações de API (Axios) e funções de busca de dados.

🔐 Funcionalidades Implementadas
Autenticação: Sistema de login com validação de credenciais e mensagens de erro.

Rotas Protegidas: Bloqueio de acesso ao Dashboard para usuários não autenticados.

Persistência: O usuário permanece logado mesmo após atualizar a página (Refresh) graças ao LocalStorage.

Consumo de API: Integração com a API do TMDB para listar filmes populares.

🛠️ Como rodar o projeto
Clone o repositório.

Instale as dependências: npm install.

Crie um arquivo .env na raiz do projeto e adicione sua chave do TMDB:

Plaintext

REACT_APP_TMDB_KEY=SUA_CHAVE_AQUI
Inicie a aplicação: npm start.