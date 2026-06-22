# HJ Offices — Sanity Studio

Studio standalone pour le projet Sanity `hjoffice` (`32ehe8go`).

## Démarrage

```bash
npm install
npm run dev
```

Studio local : http://localhost:3333

## Première configuration (une fois)

```bash
npx sanity login
pnpm studio:schema:deploy
npx sanity cors add http://localhost:3000 --credentials
```

En production, voir le guide complet : [docs/DEPLOIEMENT.md](../docs/DEPLOIEMENT.md)

Résumé — Studio sur Vercel (projet séparé, root `studio-hjoffice`) ou hébergement Sanity :

```bash
npx sanity deploy   # → https://hjoffice.sanity.studio
```

## Contenu initial

Depuis la racine de l’app (`../`) :

```bash
pnpm seed:site
pnpm seed:posts
```

Nécessite `SANITY_API_WRITE_TOKEN` dans `../.env.local`.
