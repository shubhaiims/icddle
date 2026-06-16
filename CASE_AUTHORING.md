# ICD-11 Case Authoring Guide

This guide is for generating new ICDdle India psychiatry cases. It is an educational authoring checklist, not a clinical diagnostic manual. Verify code names against the WHO ICD-11 browser before publishing a new case set.

## Case Formula

Each puzzle should reveal six clues in this order:

1. Indian clinical setting and presenting problem.
2. Core symptom cluster.
3. Course, duration, or severity.
4. Functional impact and collateral history.
5. Exclusions or differentiators.
6. Final high-yield diagnostic anchor.

After the answer, add one quick revision question that asks about the most memorable criterion: essential feature, duration/course, key exclusion, or differentiator.

## Selected ICD-11 Psychiatry Codes

| Code | Diagnosis | Case-writing anchor |
| --- | --- | --- |
| 6A23 | Acute and Transient Psychotic Disorder | Abrupt onset, rapidly changing psychotic symptoms, no primary mood/substance/organic cause. |
| 6C40.2 | Alcohol Dependence | Impaired control, craving, salience, tolerance or withdrawal, continued use despite harm. |
| 6B20.0 | Obsessive-Compulsive Disorder with Fair to Good Insight | Intrusive obsessions, compulsions, distress/impairment, and recognition that beliefs are probably excessive. |
| 6B60.4 | Dissociative Neurological Symptom Disorder, with Non-Epileptic Seizures | Seizure-like events inconsistent with epilepsy after assessment; do not imply faking. |
| 6A60.1 | Bipolar Type I Disorder, Current Episode Manic, with Psychotic Symptoms | Manic syndrome with increased energy/activity plus psychotic symptoms in that mood context. |
| 6D70.0 | Delirium due to Disease Classified Elsewhere | Acute fluctuating disturbance of attention and awareness during medical illness. |
| 6C43.2 | Opioid Dependence | Craving, impaired control, withdrawal/tolerance, salience, and continued use despite harm. |
| 6A70.3 | Single Episode Depressive Disorder, Severe, without Psychotic Symptoms | Severe depressive syndrome with marked impairment, no psychosis, and no past mania/hypomania. |
| 6A20 | Schizophrenia | Persistent psychotic syndrome with functional decline; not brief, mood-driven, substance-driven, or delirium. |
| 6B01 | Panic Disorder | Recurrent unexpected panic attacks plus persistent worry or behaviour change. |
| 6B04 | Social Anxiety Disorder | Fear of scrutiny or negative evaluation, avoidance, persistence, and impairment. |
| 6C20 | Bodily Distress Disorder | Persistent distressing bodily symptoms with excessive attention and impairment after appropriate assessment. |
| 6B43 | Adjustment Disorder | Identifiable stressor, preoccupation, impaired adaptation, and no better-fitting disorder. |
| 6B80 | Anorexia Nervosa | Significantly low body weight plus behaviours preventing weight restoration. |
| 6B40 | Post Traumatic Stress Disorder | Trauma exposure followed by re-experiencing, avoidance, and persistent current threat. |

## AI Prompt Pattern

Use this pattern when asking an AI to draft a new case:

```text
Create one six-clue ICDdle India psychiatry case for ICD-11 [CODE] [DIAGNOSIS].
Use an Indian clinical setting. Do not copy real patient details.
Clue 1: setting and presenting problem.
Clue 2: core symptoms.
Clue 3: course, duration, severity, or insight.
Clue 4: functional impairment and collateral detail.
Clue 5: exclusions and differentials.
Clue 6: final diagnostic anchor without naming the answer.
Also provide: answer explanation, 3 differentials, teaching note, and one quick revision MCQ.
Keep it educational, non-stigmatizing, and not a treatment recommendation.
```
