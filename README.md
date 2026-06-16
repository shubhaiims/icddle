# ICDdle India

ICDdle India is an English-only, India-focused diagnostic reasoning puzzle inspired by the daily clue-and-guess loop of DSMdle, but built as an original ICD-11 educational app.

## Reference Site Analysis

DSMdle works because it keeps the loop small and repeatable:

- One daily case with progressive clues.
- Diagnosis autocomplete to keep guesses structured.
- Classic and harder play modes.
- A compact mobile-first interface.
- Archive and stats for replay value.
- Shareable results.
- Strong educational disclaimers.

## India-Focused Changes

This MVP changes the product direction for Indian psychiatry learners:

- Uses ICD-11 psychiatric diagnosis names and codes.
- Uses Indian OPD, ward, emergency, liaison, perinatal, and de-addiction contexts.
- Keeps the app English only.
- Uses original case clues and explanations rather than copied DSMdle content.
- Adds exam-style reasoning through concise differentials and teaching notes.
- Adds code-level case-writing criteria so future AI-generated clue ladders can stay anchored to the target diagnosis.
- Adds a quick revision question after each completed case.
- Avoids clinical decision support claims.

## Files

- `index.html` - app shell and dialogs.
- `styles.css` - responsive dark interface.
- `app.js` - case data, diagnosis search, game state, archive, stats, and share text.
- `assets/logo.svg` - original visual mark.
- `CASE_AUTHORING.md` - ICD-11 case-writing guide for AI-assisted case generation.
- `server.js` - dependency-free Node backend and static file server.
- `frontend/apiClient.js` - browser-side API client used by `app.js`.
- `backend/api/handlers.js` - shared backend API logic used by local Node and Vercel.
- `backend/` - file-backed daily generation, interaction storage, and adaptive case rules.
- `ARCHITECTURE.md` - frontend/backend split and AI generation boundary.

## Run

Recommended:

```bash
npm start
```

Then open `http://localhost:3000`.

You can still open `index.html` directly in a browser for a static fallback, but adaptive daily generation needs the backend.

## Backend Behaviour

- Generates 10 free daily cases per user.
- Stores the generated daily set in `backend/storage/daily/`.
- Stores user performance in `backend/storage/users/`.
- Logs interactions in `backend/storage/interactions.ndjson`.
- Adapts easy vs hard case selection from attempts, wins, and revision misses.

## Deploy To Vercel

The repo includes Vercel Functions in `api/` and a `vercel.json` config.

CLI path:

```bash
npm run check
npx vercel
npx vercel --prod
```

Dashboard path:

1. Import `https://github.com/shubhaiims/icddle` in Vercel.
2. Framework preset: Other.
3. Build command: leave empty, or use `npm run check`.
4. Output directory: leave empty.
5. Deploy.

Vercel file writes are temporary in serverless functions. For production-grade adaptive learning, connect Vercel KV or Postgres for daily cases, users, and interactions.

## ICD-11 Source Notes

- Codes and titles are based on the WHO ICD-11 MMS 2024-01 simple tabulation and ICD-11 browser.
- The app stores paraphrased educational case-writing criteria, not official diagnostic text.
- WHO ICD-11 browser: https://icd.who.int/browse/2024-01/mms/en
- WHO simple tabulation release file: https://icdcdn.who.int/static/releasefiles/2024-01/SimpleTabulation-ICD-11-MMS-en.zip

## Next Product Decisions

- Decide whether to use broad ICD-11 diagnosis codes or more specific course/severity codes for every answer.
- Decide whether daily cases should be fixed, admin-authored, or generated from a reviewed database.
- Add more diagnoses and cases for Indian exams and residency teaching.
- Add hosting through GitHub Pages, Netlify, or a small Next.js app.
