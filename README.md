# FURIA App - Know Your Fan

Protótipo navegável feito com React Native e Expo, a fim de demonstrar uma interface de usuario agradável e oferecer aos fãs da equipe FURIA uma experiência visual com perfis personalizados, placares, jogos, missões e mais.

---

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js
- Expo CLI (`npm install -g expo-cli`)

### Clonar o projeto
```bash
git clone https://github.com/seuusuario/furia-app.git
```

#### Abrir pasta
```
cd furia-fan-app
````
#### Instale as dependências
```
npm install
# ou
yarn
```

#### Rode o projeto
```
npx expo start
```

---

## 📲 Funcionalidades

### 🏠 Página Inicial
- Acesso a seções principais como Perfil, Missões, Jogos e Configurações.
- Feed visual de notícias recentes (sem funcionalidade).

### 👤 Perfil do Usuário
- Exibição do nome, nível, experiência, estatísticas e conexões.
- Lista de jogos e missões concluídas.
- Verificação do perfil via badge.
- Botão de acesso às configurações.

### 📊 Placar de Líderes (Leaderboard)
- Card fixo com a posição do usuário atual.
- Cards dos demais jogadores ranqueados manualmente.
- Design horizontal com ícone de rank no canto direito.

### 🎯 Missões
- Lista de missões em andamento ou concluídas.
- Exibição no formato de cards com título, descrição e status.
- Missões concluídas também aparecem na seção do perfil.

### 🎮 Jogos
- Página com cards interativos dos jogos (CS2, Valorant, Rocket League etc).
- Ao clicar em um card, abre a página de detalhes do jogo.

### 📄 Detalhes do Jogo (`/games/[id]`)
- Banner com imagem do jogo.
- Título do jogo.
- Lineup da equipe FURIA que joga o game.
- Lista das últimas partidas (dados vindos de `games.json`).

### ⚙️ Configurações
- Página com opções:
  - Editar perfil
  - Notificações
  - Conexões
  - Logout (redireciona para página de login)

### 🧠 Sobre
- Página com informações sobre a FURIA Esports.
- Estrutura semelhante ao restante do app.
- Dados reais retirados de fontes confiáveis (furia.gg, liquipedia etc).

---

### Tecnologias e Bibliotecas
- React Native + Expo
- TypeScript
- Tailwind CSS (nativewind)

### 🦾 Desenvolvido por
Thiago Cavichia dos Santos
