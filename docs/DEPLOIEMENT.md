# Déploiement — HJ Offices

Guide pour le **front Next.js** (déjà sur Vercel) et le **Sanity Studio** standalone (`studio-hjoffice/`).

---

## 1. Git — ce qui ne doit pas être poussé

Le [`.gitignore`](.gitignore) exclut notamment :

| Dossier / fichier | Raison |
|-------------------|--------|
| `.env.local`, `.env.*` | Tokens et secrets |
| `.agents/`, `skills-lock.json` | Skills / agent IA |
| `.cursor/`, `agent-transcripts/` | Config et historique Cursor |
| `assets/` | Captures / fichiers locaux Cursor |
| `studio-hjoffice/dist`, `.sanity` | Build Studio |
| `.vercel` | Config locale Vercel |

Si des fichiers IA ont déjà été commités :

```bash
git rm -r --cached .agents skills-lock.json assets 2>nul
git commit -m "chore: retirer fichiers agent/IA du suivi git"
```

---

## 2. Architecture en production

```text
Visiteurs          →  Front Next.js (Vercel)     →  https://votre-domaine.com
Éditeurs contenu   →  Sanity Studio (Vercel)     →  https://studio.votre-domaine.com
Données            →  Sanity Content Lake        →  projet 32ehe8go / production
```

Le front **ne contient plus** le Studio (`/studio` supprimé). Les deux apps sont déployées séparément.

---

## 3. Front Next.js (déjà en ligne)

### Variables d'environnement Vercel

Dans le projet Vercel du **site** (racine du repo, pas `studio-hjoffice`) :

| Variable | Valeur | Environnement |
|----------|--------|---------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `32ehe8go` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | idem |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` | idem |
| `NEXT_PUBLIC_SANITY_STUDIO_URL` | URL publique du Studio (voir §4) | idem |

Ne **jamais** mettre `SANITY_API_WRITE_TOKEN` sur Vercel (seed local uniquement).

### CORS Sanity (obligatoire)

Le front doit être autorisé à lire l’API Sanity. Depuis `studio-hjoffice/` (après `npx sanity login`) :

```bash
npx sanity cors add https://votre-domaine.com --credentials
npx sanity cors add https://www.votre-domaine.com --credentials
```

Remplacez par votre domaine réel (ex. celui déjà configuré sur Vercel).

---

## 4. Sanity Studio sur Vercel

### Option A — Vercel + sous-domaine (recommandé si vous voulez tout sur Vercel)

#### Créer un second projet Vercel

1. [vercel.com](https://vercel.com) → **Add New Project** → même repo Git.
2. **Root Directory** : `studio-hjoffice`
3. **Framework Preset** : Other
4. **Build Command** : `npm run build`
5. **Output Directory** : `dist`
6. **Install Command** : `npm install`

Le fichier [`studio-hjoffice/vercel.json`](studio-hjoffice/vercel.json) gère le routage SPA.

#### Domaine personnalisé pour le Studio

Exemple : `studio.hjoffices.com` ou `cms.hjoffices.com`.

1. Vercel → projet **Studio** → **Settings** → **Domains** → ajouter le sous-domaine.
2. Chez votre registrar DNS, créer un enregistrement :

| Type | Nom | Valeur |
|------|-----|--------|
| `CNAME` | `studio` (ou `cms`) | `cname.vercel-dns.com` |

3. Attendre la propagation DNS (quelques minutes à 48 h).
4. Mettre à jour sur le **front** Vercel :

```env
NEXT_PUBLIC_SANITY_STUDIO_URL=https://studio.votre-domaine.com
```

5. Ajouter l’URL du Studio en CORS Sanity :

```bash
npx sanity cors add https://studio.votre-domaine.com --credentials
```

#### Premier déploiement Studio

```bash
cd studio-hjoffice
npx sanity login
pnpm studio:schema:deploy   # depuis la racine, une fois
```

Puis push sur Git → Vercel build automatiquement, ou :

```bash
cd studio-hjoffice
npx vercel --prod
```

---

### Option B — Hébergement Sanity (plus simple, sans Vercel pour le Studio)

```bash
cd studio-hjoffice
npx sanity login
npx sanity deploy
```

Vous obtenez une URL du type `https://hjoffice.sanity.studio`.

Mettre à jour le front :

```env
NEXT_PUBLIC_SANITY_STUDIO_URL=https://hjoffice.sanity.studio
```

Un domaine personnalisé sur `*.sanity.studio` est possible selon votre plan Sanity (voir [Sanity Manage](https://www.sanity.io/manage)).

---

## 5. Récapitulatif DNS (exemple)

Si votre site est `www.hjoffices.com` :

| Sous-domaine | Cible | Projet Vercel |
|--------------|-------|---------------|
| `www` ou `@` | Front Next.js | Projet 1 (racine repo) |
| `studio` | Studio Sanity | Projet 2 (`studio-hjoffice/`) |

---

## 6. Checklist après déploiement

- [ ] Front charge le contenu Sanity (pas seulement les fallbacks)
- [ ] Lien « Sanity Studio » sur `/blog` pointe vers la bonne URL
- [ ] Studio accessible et login Sanity OK
- [ ] CORS : domaine front + domaine studio ajoutés
- [ ] Schéma déployé : `pnpm studio:schema:deploy`
- [ ] Contenu seedé ou édité dans le Studio
- [ ] `.env.local` et tokens **non** commités

---

## 7. Commandes utiles

```bash
# Front (racine)
pnpm dev
pnpm build

# Studio
pnpm studio:dev
pnpm studio:schema:deploy

# Seed (local uniquement, avec token dans .env.local)
pnpm seed:site
pnpm seed:posts
```

---

## 8. Dépannage

| Problème | Solution |
|----------|----------|
| Site affiche le contenu par défaut | Vérifier `NEXT_PUBLIC_SANITY_PROJECT_ID` sur Vercel + redeploy |
| Erreur CORS dans la console | `npx sanity cors add <url-front> --credentials` |
| Studio Vercel : page blanche | Vérifier `Output Directory` = `dist` et `vercel.json` présent |
| « Missing keys » sur un tableau | `pnpm fix:amenity-keys` ou rééditer dans le Studio |
| `schema deploy` échoue | `npx sanity login` dans `studio-hjoffice/` |
