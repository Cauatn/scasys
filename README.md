# SCASYS

![image](https://github.com/user-attachments/assets/cf7bbe4e-ec41-4248-a546-291cee77bfb6)

> [!IMPORTANT]
> Vale ressaltar que o projeto está ainda em desenvolvimento e que muitas mudanças ainda serão feitas nele.

Trata-se de um software que, com etapas pré-definidas, permite ao usuário a obtenção de resultados a partir de cálculos matemáticos e conversões de unidades, realizadas por meio do código fonte do programa de computador (PC), fornecendo valores numéricos que são associados a impactos ambientais, com estrutura similar à de Avaliação do Ciclo de Vida de produtos químicos.

Este projeto é o frontend de um aplicativo destinado fazer esses cálculos, facilitara de maneira simples e eficiente o auxilio desse complexo processo.

## Tecnologias Utilizadas

Este frontend foi desenvolvido utilizando as seguintes tecnologias:

- [**React**](https://react.dev/): Framework JavaScript para construir interfaces de usuário.
- [**Vite**](https://vitejs.dev/guide/): Uma ferramenta de build com servidor de desenvolvimento.
- [**Tailwind CSS**](https://tailwindcss.com/docs/installation): Framework CSS baseado em classes utilitárias.
- [**Shadcn/ui**](https://ui.shadcn.com/docs): Coleção de componentes reutilizáveis, baseado em Tailwind.
- [**Zustand**](https://zustand-demo.pmnd.rs): Biblioteca para gerenciamento de estados.
- [**Wouter**](https://github.com/molefrog/wouter): Uma reimplementção mais leve do React Router, para roteamento de telas.

## Instalação

> [!CAUTION]
> Note que no exemplo estou usando PNPM, mas quando o fizer utilize o pacote que mais se sentir confortável, por exemplo YARN ou NPM.
> Abra seu terminal e execute os seguintes comandos para utilizar o projeto:

```bash
git clone https://github.com/Cauatn/scasys.git
```

```bash
cd scasys
```

```bash
pnpm install
```

```bash
pnpm dev
```

Após isso todo seu ambiente estará devidamento configurado e pronto para ser usado.

# Padrões de commits 📜

De acordo com a documentação do **[Conventional Commits](https://www.conventionalcommits.org/pt-br)**, commits semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commits explícito, o que facilita a criação de ferramentas automatizadas.

Esses commits irão auxiliar todos os contribuidores do projeto a compreender o que a alteração em determinado trecho de código do commit significa.

Mais informações em **[Mais informações](https://github.com/iuricode/padroes-de-commits)**

## Tipo e descrição 🦄

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.

- `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.

- `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- `ci` - Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (_continuous integration_).

- `raw` - Commits do tipo raw indicam mudanças relacionadas a arquivos de configurações, dados, features, parâmetros.

- `cleanup` - Commits do tipo cleanup são utilizados para remover código comentado, trechos desnecessários ou qualquer outra forma de limpeza do código-fonte, visando aprimorar sua legibilidade e manutenibilidade.

- `remove` - Commits do tipo remove indicam a exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas, reduzindo o tamanho e a complexidade do projeto e mantendo-o mais organizado.

## Contribuidores

Os contribuidores são voluntários, e podem ser encontrados
[na página de contribuidores](https://github.com/Cauatn/scasys/graphs/contributors).
