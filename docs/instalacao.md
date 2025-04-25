# Guia de Instalação e Configuração - FURIA Chatbot

Este guia fornece instruções detalhadas para instalar, configurar e executar o FURIA Chatbot em seu ambiente local.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14.0.0 ou superior)
- **npm** (normalmente instalado com o Node.js)
- **Git** (para clonar o repositório)

## Passo 1: Clonar o Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/furia-chatbot.git

# Entre no diretório do projeto
cd furia-chatbot
```

## Passo 2: Instalar Dependências

```bash
# Instale todas as dependências do projeto
npm install
```

Este comando instalará todas as dependências listadas no arquivo `package.json`, incluindo:
- Express
- Socket.io
- Cors
- Vue
- Vue Router
- Axios
- Tailwind CSS

## Passo 3: Configurar o Ambiente

O projeto já vem com configurações padrão que funcionam para a maioria dos ambientes. No entanto, você pode personalizar algumas configurações:

### Porta do Servidor

Por padrão, o servidor roda na porta 3000. Se você precisar alterar isso, edite o arquivo `server/index.js`:

```javascript
// Altere esta linha
const PORT = process.env.PORT || 3000;
```

### Configurações do Socket.io

Se você estiver enfrentando problemas de CORS, verifique as configurações no arquivo `server/index.js`:

```javascript
const io = socketIo(server, {
  cors: {
    origin: '*',  // Você pode restringir para domínios específicos
    methods: ['GET', 'POST']
  }
});
```

## Passo 4: Executar o Projeto

### Modo de Desenvolvimento

```bash
# Inicie o servidor em modo de desenvolvimento
npm run dev
```

Este comando iniciará o servidor usando o Nodemon, que reiniciará automaticamente o servidor quando detectar alterações nos arquivos.

### Modo de Produção

```bash
# Inicie o servidor em modo de produção
npm start
```

## Passo 5: Acessar o Chatbot

Após iniciar o servidor, você pode acessar o chatbot em seu navegador:

```
http://localhost:3000
```

## Estrutura de Arquivos

Aqui está uma visão geral da estrutura de arquivos do projeto para ajudar na navegação:

```
furia-chatbot/
├── public/                  # Arquivos estáticos
│   ├── index.html           # Página principal do chatbot
│   └── assets/
│       └── images/          # Imagens utilizadas no projeto
│           └── furia-logo.png
├── src/                     # Código fonte
│   ├── components/          # Componentes Vue (se aplicável)
│   └── data/                # Dados estáticos
│       └── furia-info.json  # Informações sobre a FURIA
├── server/                  # Código do servidor
│   └── index.js             # Servidor Express e lógica do chatbot
├── docs/                    # Documentação
│   ├── furia_info.md        # Informações coletadas sobre a FURIA
│   └── tecnologias/         # Documentação sobre tecnologias
├── package.json             # Dependências e scripts
└── README.md                # Documentação principal
```

## Solução de Problemas

### Porta já em uso

Se você receber um erro como `EADDRINUSE: address already in use 0.0.0.0:3000`, significa que a porta 3000 já está sendo usada por outro processo. Você pode:

1. Encerrar o outro processo que está usando a porta
2. Alterar a porta no arquivo `server/index.js`

### Problemas com Socket.io

Se o chat não estiver funcionando corretamente:

1. Verifique se o servidor está rodando
2. Abra o console do navegador para ver possíveis erros
3. Verifique se o Socket.io está carregando corretamente (deve haver uma conexão WebSocket estabelecida)

## Desenvolvimento e Contribuição

### Modificando o Chatbot

Para adicionar novas funcionalidades ao chatbot:

1. **Adicionar novas intenções**: Edite o objeto `keywords` no arquivo `server/index.js`
2. **Adicionar novas respostas**: Edite o objeto `responses` no arquivo `server/index.js`
3. **Atualizar dados da FURIA**: Edite o arquivo `src/data/furia-info.json`

### Estilo e Interface

Para modificar a aparência do chatbot:

1. Edite os estilos no arquivo `public/index.html`
2. O projeto usa Tailwind CSS para estilização

## Implantação

Para implantar o chatbot em um ambiente de produção, recomendamos usar o Vercel:

```bash
# Instale a CLI do Vercel
npm install -g vercel

# Faça login
vercel login

# Implante o projeto
vercel
```

Siga as instruções na tela para completar a implantação.

## Suporte

Se você encontrar problemas ou tiver dúvidas, abra uma issue no repositório do GitHub.
