# 💹 Nu Finance - Gestão Financeira

O **Nu Finance** é uma aplicação de controle financeiro pessoal que permite aos usuários gerenciar suas finanças de forma simples e intuitiva. O projeto foi desenvolvido em **React** e foca em uma experiência de uso fluida, com cálculos automatizados e design totalmente responsivo.

---

## 🚀 Funcionalidades

- **Controle de Transações:** Cadastro de entradas (lucros) e despesas (gastos).
- **Cálculo de Saldo em Tempo Real:** O sistema processa os valores dinamicamente, exibindo o saldo total atualizado.
- **Exclusão de Registros:** Opção de remover itens da lista com atualização imediata do total.
- **Feedback Visual:** Cards que se diferenciam visualmente por tipo (Entrada/Despesa).
- **Design Responsivo:** Interface adaptada para dispositivos móveis, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **React.js**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build rápida para o desenvolvimento.
- **Styled Components**: CSS-in-JS para estilização moderna e escopada.
- **React Hooks (`useState`, `useMemo`)**: Gerenciamento de estado e otimização de performance.
- **Crypto API**: Uso de `crypto.randomUUID()` para geração de chaves únicas.

---

## 📁 Estrutura do Projeto

```text
src/
 ├── components/
 │    ├── Button/        # Botões reutilizáveis
 │    ├── FinanceCard/   # Card de exibição individual
 │    ├── FinanceForm/   # Formulário de entrada de dados
 │    ├── FinanceList/   # Listagem principal das transações
 │    ├── Header/        # Cabeçalho da aplicação
 │    ├── Input/         # Componente de input genérico
 │    ├── Select/        # Componente de seleção genérico
 │    └── Total/         # Componente de cálculo do saldo
 ├── styles/
 │    ├── globalStyles.js # Estilos globais e reset
 │    └── container.js   # Layout e responsividade
 └── App.jsx             # Orquestrador central da aplicação
```
🔧 Como Rodar o Projeto
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/nu-finance.git](https://github.com/seu-usuario/nu-finance.git)
Entre no diretório:

Bash
cd nu-finance
Instale as dependências:

Bash
npm install
Execute em modo de desenvolvimento:

Bash
npm run dev
Abra o link no navegador:
http://localhost:5173

🧠 Conceitos Aplicados
Lifting State Up: Elevação de estado para o componente pai para sincronizar componentes irmãos.

Controlled Components: Inputs gerenciados inteiramente pelo estado do React.

Imutabilidade: Atualização de listas e objetos utilizando o operador spread para garantir a reatividade.

Responsividade Mobile-First: Estilização que prioriza dispositivos menores e escala para telas grandes.

👤 Autor
Desenvolvido por João Marcos.