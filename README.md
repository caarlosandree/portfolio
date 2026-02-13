# 💼 Portfólio - Carlos André Sabino

[![GitHub](https://img.shields.io/badge/GitHub-caarlosandree-181717?style=flat-square&logo=github)](https://github.com/caarlosandree)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-caarlosandree-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/caarlosandree)
[![Email](https://img.shields.io/badge/Email-caarlosandree%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:caarlosandree@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B55%2048%2099924--4627-25D366?style=flat-square&logo=whatsapp)](https://wa.me/5548999244627)

> 🚀 **Desenvolvedor Full-Stack Senior e CTO** | Especialista em Arquitetura de Software e Sistemas de Alta Disponibilidade

---

## 📋 Sobre

Portfólio interativo e moderno de **Carlos André Sabino**, Desenvolvedor Full-Stack Senior com **15+ anos de experiência** em tecnologia.

Sou especialista em:
- **Backend**: Java, Spring Boot, APIs REST, GraphQL
- **Frontend**: React, Next.js, TypeScript
- **Cloud**: Google Cloud Platform, Microsoft Azure, AWS
- **DevOps**: Docker, Linux, infraestrutura em nuvem
- **Liderança**: CTO com expertise em arquitetura de software e gestão de projetos

### 🎯 Experiência Profissional

**Histórico de 15+ anos**, começando em **Suporte e Operações**, evoluindo para **VoIP/SaaS** e consolidando como **Arquiteto Full-Stack**.

Atualmente liderando o desenvolvimento de:
- 📊 **DocSend**: ERP contábil de alta disponibilidade
- 💅 **Aurora's Aesthetic**: Sistema de gestão para setor de estética

---

## 🛠️ Stack Tecnológico

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui)

### Backend
![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

### Dados & APIs
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=flat-square&logo=mongodb&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)

### Cloud & DevOps
![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

### Padrões & Metodologias
- **Scrum** e **Kanban**
- **LGPD** (Proteção de dados)
- **REST APIs** e **GraphQL**
- **TDD** (Test-Driven Development)

---

## 🚀 Como Começar

### Pré-requisitos
- **Node.js** >= 18.x
- **npm** ou **yarn** ou **pnpm**

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/caarlosandree/PortfolioNovo.git
cd PortfolioNovo/frontend

# Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# Acessar em http://localhost:3000
```

### Build para Produção

```bash
# Build da aplicação
npm run build

# Iniciar servidor de produção
npm start
```

### Linting e Type Checking

```bash
# Executar ESLint
npm run lint

# Verificar tipos TypeScript
npm run typecheck
```

---

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/        # Componentes reutilizáveis
│   │   └── portfolio/
│   │       ├── Card.tsx
│   │       ├── NavLink.tsx
│   │       └── SectionTitle.tsx
│   ├── data/              # Dados estáticos (JSON)
│   │   ├── personal.json
│   │   ├── skills.json
│   │   ├── experiences.json
│   │   ├── education.json
│   │   ├── projects.json
│   │   └── courses.json
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Utilitários e configurações
│   │   ├── axios.ts
│   │   └── utils.ts
│   ├── providers/         # Providers (React Query, etc.)
│   ├── schemas/           # Validação com Zod
│   ├── services/          # Camada de serviços
│   ├── stores/            # Estado global (Zustand)
│   ├── types/             # TypeScript types
│   └── styles/            # CSS e estilos
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.js
```

---

## ✨ Funcionalidades

- 🎨 **Design Responsivo** - Mobile-first, funciona em todos os dispositivos
- ⚡ **Performance Otimizada** - Next.js com Server Components
- 🎯 **Type-Safe** - 100% TypeScript
- 📱 **Modern UI** - Componentes com shadcn/ui e Tailwind CSS
- 🔄 **State Management** - Zustand para estado global
- 📊 **Integração de Dados** - Consumo via Axios e TanStack Query
- 🎓 **Conteúdo Dinâmico** - Dados em JSON, fácil de atualizar
- 🌙 **Acessibilidade** - Componentes WCAG compliant
- 📈 **SEO Otimizado** - Meta tags e estruturação semântica

---

## 📊 Dados do Portfólio

O portfólio carrega dinamicamente dados de arquivos JSON:

- **`personal.json`** - Informações pessoais e contato
- **`skills.json`** - Competências técnicas
- **`experiences.json`** - Histórico profissional
- **`education.json`** - Formação acadêmica
- **`projects.json`** - Projetos destacados
- **`courses.json`** - Cursos e certificações

✅ **Basta atualizar os JSON para refletir as mudanças no portfólio!**

---

## 🔧 Tecnologias Principais

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Next.js** | 16.1.6 | Framework React full-stack |
| **React** | 19.2.3 | Biblioteca UI |
| **TypeScript** | 5.x | Tipagem estática |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **shadcn/ui** | 3.8.4 | Componentes unstyled |
| **TanStack Query** | 5.62.0 | Gerenciamento de dados assíncronos |
| **React Hook Form** | 7.54.2 | Gerenciamento de formulários |
| **Zod** | 3.24.1 | Validação de schema |
| **Zustand** | 5.0.2 | State management |
| **Axios** | 1.7.9 | Cliente HTTP |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. **Fork** o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Padrões de Código

- Usar **TypeScript** rigorosamente
- Seguir **ESLint** e **Prettier**
- Componentes em **PascalCase**
- Hooks customizados em **camelCase**
- Sempre fazer **type checking**: `npm run typecheck`

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📞 Contato

Vamos conversar sobre oportunidades, ideias ou simplesmente trocar conhecimento!

| Canal | Link |
|-------|------|
| **GitHub** | [github.com/caarlosandree](https://github.com/caarlosandree) |
| **LinkedIn** | [linkedin.com/in/caarlosandree](https://linkedin.com/in/caarlosandree) |
| **WhatsApp** | [(48) 99924-4627](https://wa.me/5548999244627) |
| **Email** | [caarlosandree@gmail.com](mailto:caarlosandree@gmail.com) |
| **Instagram** | [@carlosasab](https://www.instagram.com/carlosasab) |

---

## 📍 Localização

📌 **São José, SC** - Brasil

---

## 🎂 About Me

- 🎉 Nascido em **6 de abril de 1993**
- 💍 Casado
- 🏢 **CTO** com 15+ anos em tecnologia
- 🎯 Focado em escalabilidade e excelência técnica
- 🌱 Aprendizado contínuo e inovação

---

<div align="center">

### ⭐ Se este portfólio te ajudou, considere dar uma estrela no GitHub!

**Feito com ❤️ por [Carlos André Sabino](https://github.com/caarlosandree)**

</div>
