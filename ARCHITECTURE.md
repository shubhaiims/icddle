# ICDdle Frontend/Backend Architecture

This project is now structured as a simple frontend plus file-backed backend.

## Frontend

Files:

- `index.html`
- `styles.css`
- `app.js`
- `frontend/apiClient.js`
- `assets/logo.svg`

Responsibilities:

- Render the DSMdle-like game screen.
- Ask the backend for the user's 10 free daily cases.
- Let the user play Classic or Hard mode.
- Reveal clues, validate ICD-11 guesses, show the answer, and ask one revision question.
- Send completion and revision events back to the backend.
- Fall back to embedded sample cases if opened directly as a static file.
- Keep all browser-to-server calls inside `frontend/apiClient.js`.

Important API calls:

- `GET /api/daily-cases?userId=...&mode=classic`
- `GET /api/daily-cases?userId=...&mode=exam`
- `POST /api/interactions`

## Backend

Files:

- `server.js`
- `api/` Vercel serverless function entrypoints
- `backend/api/handlers.js` shared backend route handlers
- `backend/aiCaseGenerator.js`
- `backend/data/case-templates.json`
- `backend/data/diagnosis-rules.json`
- `backend/storage/`

Responsibilities:

- Serve the frontend files.
- Generate 10 daily cases per user per day.
- Store generated daily case sets as JSON files so the same user sees the same set throughout the day.
- Store user interaction events in `backend/storage/interactions.ndjson`.
- Store user learning profiles in `backend/storage/users/*.json`.
- Adapt future generated cases based on user performance.

## Adaptive Generation

The current generator is a local explainable AI stub. It does not train a hidden model. It learns in a product sense by storing:

- completed cases
- wins and losses
- attempts per case
- weak diagnosis IDs
- missed revision questions
- Classic vs Hard mode

The generator then chooses:

- easier clues for struggling users
- harder clues for stronger users or Hard mode
- more cases from weak diagnosis areas
- unique daily wording variants per user/date/mode

## Real AI Provider Later

When adding a real LLM, keep the same boundary:

1. Backend reads `diagnosis-rules.json` and user profile.
2. Backend asks the LLM to generate a six-clue case using the rule and case authoring format.
3. Backend validates JSON shape and checks that the answer diagnosis ID is allowed.
4. Backend stores the generated case file.
5. Frontend only consumes the saved case JSON.

Do not let the frontend call the AI provider directly. Keep keys, prompts, moderation, and audit logs in the backend.

## Vercel Deployment Note

The `/api` directory exposes Vercel Functions for deployment. Vercel serverless file writes should be treated as temporary, so the deployed MVP uses deterministic daily generation and temporary storage. For real long-term personalization, move these stores to Vercel KV, Postgres, or another persistent database:

- `backend/storage/daily/`
- `backend/storage/users/`
- `backend/storage/interactions.ndjson`
