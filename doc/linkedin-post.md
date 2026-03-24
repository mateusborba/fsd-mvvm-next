# Roteiro: Post LinkedIn — Feature-Sliced Design na Prática

## Formato sugerido

- **Carrossel** com 7 slides (imagens em `doc/images/`)
- Poste entre terça e quinta, das 8h às 10h (horário de Brasília)
- Primeira imagem é a capa — use `01-overview.svg`
- Não coloque links no corpo do post (penaliza alcance). Coloque o link do repo no primeiro comentário.

---

## Texto do Post

**Linha de abertura (aparece antes do "ver mais" — é o mais importante):**

> Seu projeto cresceu e o código virou uma gaveta bagunçada de `/components`? Eu resolvi isso com Feature-Sliced Design. Deixa eu mostrar como fica o código real.

---

**Corpo:**

Eu usava a estrutura padrão do Next.js:

```
/components
/hooks
/utils
/pages
```

Funciona para projetos pequenos. Mas quando o time cresceu, surgiram os problemas:

- Ninguém sabia onde colocar um arquivo novo
- Um hook de "produto" dependia de um componente de "pedido" que dependia de um util de "auth"
- Mudar qualquer coisa quebrava outra sem avisar

Ai eu aprendi sobre **Feature-Sliced Design (FSD)**.

A regra é simples: **5 camadas com responsabilidades bem definidas, e camadas superiores so importam das inferiores — nunca o contrario.**

As camadas (do mais generico ao mais especifico):

```
app/       → Rotas Next.js. Renderiza widgets. Sem logica.
widgets/   → Blocos completos de UI compostos por features
features/  → Logica de negocio: hooks React Query + UI de feature
entities/  → Tipos TypeScript + funcoes de API puras
shared/    → UI base, http-client, utils — zero dominio de negocio
```

O que me surpreendeu foi ver como a pagina do dashboard ficou:

```tsx
// app/(features)/dashboard/page.tsx
export default function DashboardPage() {
  return <ProductDashboardWidget />
}
```

So isso. Toda a logica esta nas camadas certas.

Arrasta o carrossel para ver o codigo real de cada camada.

---

**Call to action:**

> Voce usa alguma arquitetura no seu frontend? Me conta nos comentarios!
> Se curtiu, compartilha com quem ainda sofre com `/components/utils/helpers/misc.ts`

---

**Hashtags:**

```
#React #NextJS #TypeScript #FeatureSlicedDesign #ArquiteturaDeSoftware
#FrontendDevelopment #CleanCode #WebDev #Programacao #DesenvolvimentoWeb
```

---

## Roteiro do Carrossel (7 slides)

| # | Arquivo | O que mostra |
|---|---------|-------------|
| 1 | `01-overview.svg` | Visao geral das 5 camadas com responsabilidades e regra de dependencia |
| 2 | `02-shared.svg` | Shared — base reutilizavel (IHttpClient interface + componentes UI) |
| 3 | `03-entities.svg` | Entities — tipos TypeScript + funcoes de API puras sem estado React |
| 4 | `04-features.svg` | Features — React Query orquestrando a API da entity |
| 5 | `05-widgets.svg` | Widgets — composicao de multiplas features em um bloco completo |
| 6 | `06-app.svg` | App/Pages — pagina com 5 linhas que so renderiza um widget |
| 7 | `07-slices.svg` | Slices — o corte vertical: como o dominio "product" vive em cada camada |

---

## Angulos alternativos para posts futuros

1. **"Como migrar um projeto legado para FSD"** — antes e depois
2. **"Por que o `shared/` e a camada mais importante"** — explicar IHttpClient
3. **"Feature-Sliced Design vs. Domain-Driven Design"** — comparativo
4. **"Testando com FSD"** — cada camada tem seu tipo de teste natural
