# MYIMPACT online stellen & Link weiterschicken

Mit **Vercel** bekommst du eine öffentliche Adresse (z.B. `myimpact.vercel.app`), die du per Handy, Chat oder E-Mail weiterschicken kannst.

---

## 1. Code auf GitHub pushen

Falls noch nicht geschehen, im Projektordner:

```bash
cd c:\Users\erikv\Documents\GitHub\MYIMPACT
git add .
git commit -m "Deploy"
git push origin main
```

(Bei dir heißt der Branch ggf. `master` – dann `git push origin master`.)

---

## 2. Bei Vercel anmelden & Projekt verbinden

1. Gehe zu **https://vercel.com** und melde dich an (kostenlos, z.B. mit GitHub).
2. Klicke auf **„Add New…“** → **„Project“**.
3. Wähle dein GitHub-Konto und das Repository **MYIMPACT** aus.
4. **Deploy**-Einstellungen so lassen (Framework: Next.js wird erkannt).
5. Unter **„Environment Variables“** (optional, nur wenn du Google/Apple-Login nutzt):
   - `NEXTAUTH_SECRET` = ein langer Zufallsstring
   - `NEXTAUTH_URL` = `https://deine-app.vercel.app` (steht nach dem ersten Deploy dort)
   - `GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET` (falls du Google-Login willst)
6. Klicke auf **„Deploy“**.

---

## 3. Link weiterschicken

Nach dem Deploy zeigt Vercel dir eine URL, z.B.:

- `https://myimpact-xyz.vercel.app`

Diese Adresse kannst du:
- auf dem Handy im Browser öffnen,
- per WhatsApp, E-Mail usw. weiterschicken.

Optional: Unter **Settings → Domains** kannst du eine eigene Domain eintragen (z.B. `myimpact.de`).

---

## Kurzfassung

| Schritt | Aktion |
|--------|--------|
| 1 | Code zu GitHub pushen |
| 2 | Auf vercel.com Projekt aus GitHub importieren und deployen |
| 3 | Fertige URL kopieren und weiterschicken |

Vercel-Kostenlos-Tier reicht für normale Nutzung; die App läuft dann dauerhaft unter der vercel.app-URL.
