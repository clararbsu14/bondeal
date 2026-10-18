# BETSY

Marketplace mobile de **mode de seconde main** organisée autour des **enchères**.  
Chaque annonce démarre à **1 €**. Couleur marque : `#FF245B`.

Repo : [clararbsu14/bondeal](https://github.com/clararbsu14/bondeal)

## Structure

```
apps/
  mobile/   App Expo (React Native + TypeScript) — testable avec Expo Go
  api/      API Node + TypeScript (route /health + placeholders)
```

## Prérequis

- Node.js 20+
- Sur ton téléphone : l’app **Expo Go** ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

## App mobile (Expo Go)

```bash
cd apps/mobile
npm install
npm start
```

1. Un QR code s’affiche dans le terminal (ou dans le navigateur Expo).
2. **iPhone** : ouvre l’appareil photo → scanne le QR → ouvre dans Expo Go.
3. **Android** : ouvre Expo Go → scanne le QR.
4. Téléphone et ordi doivent être sur le **même Wi‑Fi** (ou utilise le mode tunnel : `npx expo start --tunnel`).

Onglets : **Accueil · Favoris · Vendre · Messages · Profil**.

## API

```bash
cd apps/api
npm install
npm run dev
```

- Santé : [http://localhost:3000/health](http://localhost:3000/health)
- Placeholders (Postgres, Stripe, Sendcloud, boosts, IA) : [http://localhost:3000/placeholders](http://localhost:3000/placeholders)

Copie `apps/api/.env.example` vers `.env` si besoin.

## Suite prévue

- Postgres, Stripe Connect, Sendcloud
- Boosts (24 / 48 / 72 h) et retouche IA (fond uniquement)
- Parcours enchères complet
