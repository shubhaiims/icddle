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

## Run

Open `index.html` in a browser. No build step or dependency install is required.

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
