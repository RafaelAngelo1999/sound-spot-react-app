# 🎵 Sound Spot React App

**Sound Spot React App** é uma aplicação estilo **Jukebox**, projetada para bares da região. Ela oferece aos clientes uma experiência interativa para selecionar músicas, visualizar playlists, e fazer pagamentos para adicionar músicas à fila do bar. 🎶🍻  

---

## 🌟 **Funcionalidades**
- 🚩 **Identificação única por bar**: Cada bar possui um ID único no caminho da aplicação (ex.: `/bar-id`) para acessar sua playlist personalizada.
- 📜 **Playlist interativa**: Os clientes podem visualizar todas as músicas disponíveis para seleção.
- 💳 **Fluxo de pagamento integrado**: Após a seleção de músicas, o cliente segue para um fluxo de pagamento seguro. Após a confirmação, a música é adicionada à fila.
- 🕒 **Atualização em tempo real**: A playlist do bar é atualizada automaticamente, refletindo as músicas em fila.

---

## 🖼️ **Capturas de Tela**
**Página inicial:**  
![Página inicial](https://raw.githubusercontent.com/RafaelAngelo1999/sound-spot-react-app/refs/heads/main/public/assets/app.jpg)

---

## 🚀 **Tecnologias Utilizadas**

### 📦 **Bibliotecas principais**
- **[ShadCN](https://shadcn.dev/)**  
  - Biblioteca de UI modular e altamente personalizável.  
  - O diferencial dessa lib é que os componentes (como inputs) são importados diretamente como código no projeto, permitindo total controle sobre o design.  

- **[Lucide React](https://lucide.dev/)**  
  - Utilizada para ícones estilizados e modernos, garantindo uma interface visualmente atraente.  

- **[Next.js](https://nextjs.org/)**  
  - Framework React para criação de aplicações web rápidas e escaláveis.  
  - Considerações:  
    - 🚀 Renderização híbrida (SSR e SSG).  
    - 🌐 Gerenciamento de rotas simplificado, essencial para os IDs dos bares.  

- **[Zustand](https://zustand-demo.pmnd.rs/)**  
  - Utilizada para gerenciamento de estado de forma leve e eficiente.  
  - Perfeita para compartilhar o estado da playlist e seleção de músicas entre componentes.  

- **[React Query](https://tanstack.com/query/latest)**  
  - Gerenciamento de requisições assíncronas com cache e revalidação automática.  
  - Otimiza chamadas à API e mantém os dados sincronizados em tempo real.  

---

## 🛠️ **Como rodar o projeto**
1. Clone o repositório:
   ```bash
   git clone https://github.com/RafaelAngelo1999/sound-spot-react-app.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd sound-spot-react-app
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 📚 **Estrutura do Projeto**
```plaintext
sound-spot-react-app/
├── public/               # Arquivos estáticos (imagens, fontes)
├── src/                  # Código-fonte da aplicação
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── store/            # Estados globais (Zustand)
│   ├── hooks/            # Hooks personalizados
│   ├── services/         # Configuração e chamadas da API
│   └── styles/           # Estilização geral
├── .env.example          # Arquivo de exemplo para variáveis de ambiente
├── README.md             # Documentação do projeto
└── package.json          # Configurações de dependências
```

---

## ✨ **Contribuição**
Contribuições são bem-vindas!  
1. Faça um fork do repositório.  
2. Crie uma nova branch para sua feature ou correção:  
   ```bash
   git checkout -b minha-feature
   ```
3. Envie seu PR após os ajustes.

---

## 📄 **Licença**
Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

💻 Desenvolvido com ❤️ por [Rafael Angelo](https://github.com/RafaelAngelo1999).
