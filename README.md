# BETSY

Marketplace mobile de **mode de seconde main** organisée autour des **enchères**.  
Chaque annonce démarre à **1 €**. Couleur marque : `#FF245B`.

Repo : [clararbsu14/bondeal](https://github.com/clararbsu14/bondeal)

## Structure

```
apps/
  frontend/   App Expo (React Native + TypeScript) — Expo Go SDK 57
  backend/    API Node + TypeScript (route /health + placeholders)
```

## Prérequis

- Node.js 20+
- Sur ton téléphone : **Expo Go compatible SDK 57**  
  ([télécharger la bonne version](https://expo.dev/go) si le store n’est pas à jour)

## Frontend (Expo Go SDK 57)

```bash
cd apps/frontend
npm install
npm start
```

1. Un QR code s’affiche dans le terminal (ou dans le navigateur Expo).
2. **iPhone** : ouvre l’appareil photo → scanne le QR → ouvre dans Expo Go (SDK 57).
3. **Android** : ouvre Expo Go → scanne le QR.
4. Téléphone et ordi doivent être sur le **même Wi‑Fi** (ou utilise le mode tunnel : `npx expo start --tunnel`).

Onglets : **Accueil · Favoris · Vendre · Messages · Profil**.

## Backend (API)

```bash
cd apps/backend
npm install
npm run dev
```

- Santé : [http://localhost:3000/health](http://localhost:3000/health)
- Placeholders (Postgres, Stripe, Sendcloud, boosts, IA) : [http://localhost:3000/placeholders](http://localhost:3000/placeholders)

Copie `apps/backend/.env.example` vers `.env` si besoin.

## Suite prévue

- Postgres, Stripe Connect, Sendcloud
- Boosts (24 / 48 / 72 h) et retouche IA (fond uniquement)
- Parcours enchères complet
