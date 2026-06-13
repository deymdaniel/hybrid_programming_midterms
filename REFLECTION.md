Routing Mapping

├── README.md
├── REFLECTION.md
├── app
│   ├── components
│   │   └── nav.tsx
│   ├── dashboard
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   ├── posts
│   │   └── page.tsx
│   ├── products
│   │   ├── [id]
│   │   └── page.tsx
│   └── todos
│       └── page.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json

Rendering Justification Matrix

Route               Strategy        Justification
/products           SSG             Product catalog data can be generated at build time for maximum performance.
/products[id]       SSG             Individual product pages are pre-rendered during build.
/dashboard          SSR             User and cart data should always be fresh and generated on each request.
/posts              ISR             Posts benefit from caching while still receiving periodic updates.
/todos              CSR             Filtering and user interactions require browser-side state management.

Caching and Optimization Defense

SSR Dashboard
app/dashboard/page.tsx
at line 1 
"export const dynamic = 'force-dynamic';"
and lines 19 and 20 
"fetch('https://dummyjson.com/users?limit=5', { cache: 'no-store' }),"
These configurations dissable casching and force request-time rendering




Server vs. Client Boundaries
app/todos/page.tsx
This page use the "use client" directive at the top of the file. This design choice was because server component cannot store interactive mutable reactive state instances. Moving this component in the browser guarantees that can see immediate UI reactivity when using the filters without forcing full page renders.