import { Router } from "express";

/**
 * Placeholders MVP — branches à brancher plus tard.
 * Postgres, Stripe Connect, Sendcloud, boosts, retouche IA.
 */
export const placeholdersRouter = Router();

placeholdersRouter.get("/placeholders", (_req, res) => {
  res.json({
    postgres: {
      status: "placeholder",
      note: "Connexion Postgres à configurer (DATABASE_URL).",
    },
    stripe: {
      status: "placeholder",
      note: "Stripe Connect — encaissement marketplace, débit post-victoire.",
    },
    sendcloud: {
      status: "placeholder",
      note: "Sendcloud — étiquettes / transporteurs FR (Colissimo, Mondial Relay).",
    },
    boosts: {
      status: "placeholder",
      note: "Boosts visibilité 24 h / 48 h / 72 h (prix non fixés).",
    },
    ia: {
      status: "placeholder",
      note: "Retouche IA — fond uniquement ; original conservé.",
    },
  });
});
