const diagnoses = [
  {
    id: "6a20",
    code: "ICD-11 6A20",
    name: "Schizophrenia",
    category: "Schizophrenia or other primary psychotic disorders",
    aliases: ["schizophrenia", "chronic psychosis", "primary psychotic disorder"],
    criteria: {
      core: [
        "Persistent psychotic symptoms such as delusions, hallucinations, disorganized thinking, negative symptoms, or disturbed behaviour",
        "Functional decline or clear disruption in study, work, self-care, or relationships",
        "Course is not better explained by a brief acute psychotic episode, mood disorder, delirium, or substance use"
      ],
      exclusions: ["Delirium", "Substance-induced psychosis", "Bipolar disorder with psychotic symptoms"],
      clueBlueprint: [
        "Start with deterioration noticed by family, hostel, workplace, or OPD collateral",
        "Reveal psychotic symptoms and decline over time",
        "Add absence of prominent mood syndrome, intoxication, or acute medical cause"
      ]
    }
  },
  {
    id: "6a23",
    code: "ICD-11 6A23",
    name: "Acute and Transient Psychotic Disorder",
    category: "Schizophrenia or other primary psychotic disorders",
    aliases: ["atpd", "acute transient psychotic disorder", "brief psychotic disorder"],
    criteria: {
      core: [
        "Abrupt onset of psychotic symptoms such as delusions, hallucinations, or disorganized behaviour",
        "Symptoms are rapidly changing or polymorphic rather than a long-standing fixed syndrome",
        "Presentation is not primarily due to a mood episode, substance use, delirium, or another medical condition"
      ],
      exclusions: ["Schizophrenia", "Bipolar disorder with psychotic symptoms", "Delirium"],
      clueBlueprint: [
        "Use a sudden ED presentation over days",
        "Make the mental state shifting or perplexed",
        "Show good premorbid functioning and negative substance or medical screen"
      ]
    }
  },
  {
    id: "6a60-1",
    code: "ICD-11 6A60.1",
    name: "Bipolar Type I Disorder, Current Episode Manic, with Psychotic Symptoms",
    category: "Mood disorders",
    aliases: ["mania with psychotic symptoms", "bipolar mania with psychosis", "manic episode with psychotic symptoms"],
    criteria: {
      core: [
        "Current manic episode with elevated, expansive, or irritable mood and increased energy or activity",
        "Manic features such as decreased need for sleep, pressured speech, grandiosity, risk-taking, or distractibility",
        "Psychotic symptoms occur in the context of the manic syndrome"
      ],
      exclusions: ["Schizoaffective disorder", "Acute and transient psychotic disorder", "Substance-induced mood disorder"],
      clueBlueprint: [
        "Open with sleep reduction and overactivity",
        "Add disinhibition, overspending, grandiosity, or aggression",
        "Reveal mood-congruent psychosis and episodic past course"
      ]
    }
  },
  {
    id: "6a70-3",
    code: "ICD-11 6A70.3",
    name: "Single Episode Depressive Disorder, Severe, without Psychotic Symptoms",
    category: "Mood disorders",
    aliases: ["severe depression", "severe depressive episode", "major depression severe", "single episode depression severe"],
    criteria: {
      core: [
        "Depressive mood or loss of interest with multiple additional depressive symptoms",
        "Marked distress or impairment in social, occupational, academic, or family functioning",
        "No psychotic symptoms and no past manic, mixed, or hypomanic episode"
      ],
      exclusions: ["Bipolar depressive episode", "Adjustment disorder", "Depression due to medical condition"],
      clueBlueprint: [
        "Start with persistent low mood, anhedonia, and impaired role functioning",
        "Layer biological and cognitive symptoms",
        "Mention suicidality risk if appropriate, while excluding psychosis and bipolar history"
      ]
    }
  },
  {
    id: "6b20-0",
    code: "ICD-11 6B20.0",
    name: "Obsessive-Compulsive Disorder with Fair to Good Insight",
    category: "Obsessive-compulsive or related disorders",
    aliases: ["ocd", "obsessive compulsive disorder", "obsessive-compulsive disorder"],
    criteria: {
      core: [
        "Repetitive intrusive thoughts, images, urges, or repetitive behaviours/mental acts",
        "The person recognizes the beliefs are probably or definitely not true, even if anxiety is intense",
        "Symptoms are time-consuming or cause distress, avoidance, or functional impairment"
      ],
      exclusions: ["Psychotic disorder", "Body dysmorphic disorder", "Obsessive-compulsive personality traits"],
      clueBlueprint: [
        "Begin with a ritual that consumes time in study, work, or home routine",
        "Reveal intrusive ego-dystonic fear and anxiety relief after compulsion",
        "Explicitly show insight and functional cost"
      ]
    }
  },
  {
    id: "6b60-4",
    code: "ICD-11 6B60.4",
    name: "Dissociative Neurological Symptom Disorder, with Non-Epileptic Seizures",
    category: "Dissociative disorders",
    aliases: ["dissociative seizures", "psychogenic non epileptic seizures", "pnes", "conversion seizures", "non-epileptic seizures"],
    criteria: {
      core: [
        "Episodes resemble epileptic seizures but clinical features are inconsistent with a recognized neurological disease",
        "Assessment does not support epilepsy or another medical explanation for the episodes",
        "Symptoms are not intentionally produced and are associated with distress or functional disruption"
      ],
      exclusions: ["Epilepsy", "Syncope", "Panic attacks", "Malingering"],
      clueBlueprint: [
        "Use a school, family, or OPD context with clear psychosocial stress",
        "Add seizure-like events with features less typical of epilepsy",
        "Show neurological assessment and non-blaming formulation"
      ]
    }
  },
  {
    id: "6d70-0",
    code: "ICD-11 6D70.0",
    name: "Delirium",
    category: "Neurocognitive disorders",
    aliases: ["acute confusional state", "delirium due to disease classified elsewhere"],
    criteria: {
      core: [
        "Acute disturbance of attention, awareness, and orientation",
        "Fluctuating course, often worse at night or during medical deterioration",
        "Evidence that the syndrome is due to an underlying medical condition or physiological disturbance"
      ],
      exclusions: ["Dementia alone", "Primary psychotic disorder", "Mania"],
      clueBlueprint: [
        "Set the case in a medicine ward, ICU, postoperative ward, or infection admission",
        "Reveal inattention and fluctuating consciousness rather than only agitation",
        "Tie onset to systemic illness, drugs, withdrawal, or metabolic disturbance"
      ]
    }
  },
  {
    id: "6c40-2",
    code: "ICD-11 6C40.2",
    name: "Alcohol Dependence",
    category: "Disorders due to substance use or addictive behaviours",
    aliases: ["alcohol dependence", "alcohol use disorder", "ads", "alcohol dependence syndrome"],
    criteria: {
      core: [
        "Impaired control over alcohol use with craving or difficulty cutting down",
        "Alcohol use becomes a priority over responsibilities, roles, or health",
        "Physiological features such as tolerance, withdrawal, or drinking to relieve withdrawal may be present"
      ],
      exclusions: ["Hazardous alcohol use", "Single episode harmful alcohol use", "Alcohol withdrawal without dependence history"],
      clueBlueprint: [
        "Use family collateral, workplace impact, or medical admission",
        "Reveal morning drinking, tolerance, withdrawal relief, craving, and failed cut-down attempts",
        "Include continued use despite liver, family, legal, or financial harm"
      ]
    }
  },
  {
    id: "6c43-2",
    code: "ICD-11 6C43.2",
    name: "Opioid Dependence",
    category: "Disorders due to substance use or addictive behaviours",
    aliases: ["opioid dependence", "opioid use disorder", "heroin dependence", "smack dependence"],
    criteria: {
      core: [
        "Impaired control over opioid use with craving or repeated unsuccessful attempts to stop",
        "Opioid use takes priority over study, work, finances, family, or health",
        "Tolerance, opioid withdrawal, or use to avoid withdrawal supports dependence"
      ],
      exclusions: ["Harmful opioid use", "Opioid intoxication", "Antisocial behaviour without dependence syndrome"],
      clueBlueprint: [
        "Set in de-addiction clinic, emergency withdrawal, or family referral",
        "Reveal route, craving, withdrawal symptoms, tolerance, and role impairment",
        "Add infectious risk, debt, or treatment access without moralising"
      ]
    }
  },
  {
    id: "6b01",
    code: "ICD-11 6B01",
    name: "Panic Disorder",
    category: "Anxiety or fear-related disorders",
    aliases: ["panic attacks", "episodic paroxysmal anxiety"],
    criteria: {
      core: [
        "Recurrent unexpected panic attacks with abrupt surges of intense fear or discomfort",
        "Attacks include autonomic or cognitive symptoms such as palpitations, breathlessness, dizziness, or fear of dying",
        "Persistent worry about attacks or behaviour change follows the attacks"
      ],
      exclusions: ["Hyperthyroidism", "Cardiac arrhythmia", "Substance-induced anxiety"],
      clueBlueprint: [
        "Open with repeated emergency visits for chest tightness or breathlessness",
        "Show sudden peak and catastrophic fear",
        "Add anticipatory anxiety and negative medical evaluation"
      ]
    }
  },
  {
    id: "6c20",
    code: "ICD-11 6C20",
    name: "Bodily Distress Disorder",
    category: "Bodily distress or bodily experience disorders",
    aliases: ["bodily distress disorder", "somatic distress", "somatisation disorder", "somatization disorder", "multiple somatic symptoms"],
    criteria: {
      core: [
        "Persistent bodily symptoms that are distressing and receive excessive attention",
        "Preoccupation includes repeated checking, repeated consultations, health anxiety, or avoidance",
        "Distress and functional impairment are out of proportion to findings after appropriate medical assessment"
      ],
      exclusions: ["Delirium", "Hypochondriasis", "Medical disorder that fully explains symptoms"],
      clueBlueprint: [
        "Use repeated visits across medicine, gastroenterology, neurology, or OPD",
        "Reveal multiple persistent symptoms and high health-care use",
        "Show impairment and excessive symptom focus after reasonable medical assessment"
      ]
    }
  },
  {
    id: "6b43",
    code: "ICD-11 6B43",
    name: "Adjustment Disorder",
    category: "Disorders specifically associated with stress",
    aliases: ["adjustment reaction"],
    criteria: {
      core: [
        "Emotional or behavioural symptoms develop in response to an identifiable psychosocial stressor",
        "The person is preoccupied with the stressor or its consequences",
        "Symptoms cause impairment but do not meet requirements for another mental disorder"
      ],
      exclusions: ["Single episode depressive disorder", "Post traumatic stress disorder", "Normal bereavement or expected stress response"],
      clueBlueprint: [
        "Anchor the case to a clear stressor such as exam failure, breakup, migration, job loss, or illness",
        "Show rumination and difficulty adapting",
        "Keep syndrome below threshold for depression, PTSD, mania, or psychosis"
      ]
    }
  },
  {
    id: "6b04",
    code: "ICD-11 6B04",
    name: "Social Anxiety Disorder",
    category: "Anxiety or fear-related disorders",
    aliases: ["social phobia", "performance anxiety"],
    criteria: {
      core: [
        "Marked fear or anxiety about social situations where the person may be scrutinized",
        "Fear concerns negative evaluation, embarrassment, rejection, or offending others",
        "Social situations are avoided or endured with distress and impairment"
      ],
      exclusions: ["Agoraphobia", "Panic disorder", "Autism spectrum disorder"],
      clueBlueprint: [
        "Use classroom viva, ward presentation, workplace meeting, or marriage-meeting context",
        "Reveal fear of scrutiny and avoidance",
        "Show persistence and impairment beyond ordinary shyness"
      ]
    }
  },
  {
    id: "6b80",
    code: "ICD-11 6B80",
    name: "Anorexia Nervosa",
    category: "Feeding or eating disorders",
    aliases: ["anorexia", "restricting eating disorder"],
    criteria: {
      core: [
        "Significantly low body weight for age, height, developmental stage, and health context",
        "Persistent behaviours that prevent weight restoration, such as restriction, purging, or excessive exercise",
        "Overvaluation of body weight or shape, or persistent lack of recognition of seriousness"
      ],
      exclusions: ["Medical causes of weight loss", "Depression-related appetite loss", "Avoidant-restrictive food intake disorder"],
      clueBlueprint: [
        "Open with weight loss noticed by family, hostel, sports, or college setting",
        "Reveal restriction, body-image concerns, and weight-control behaviours",
        "Add medical risk markers and rule out primary medical illness"
      ]
    }
  },
  {
    id: "6b40",
    code: "ICD-11 6B40",
    name: "Post Traumatic Stress Disorder",
    category: "Disorders specifically associated with stress",
    aliases: ["ptsd", "post-traumatic stress disorder"],
    criteria: {
      core: [
        "Exposure to an extremely threatening or horrific event or series of events",
        "Re-experiencing the trauma in the present through flashbacks, nightmares, or intrusive memories",
        "Avoidance of reminders with persistent sense of current threat such as hypervigilance or exaggerated startle"
      ],
      exclusions: ["Adjustment disorder", "Complex post traumatic stress disorder", "Acute stress reaction"],
      clueBlueprint: [
        "Anchor to a severe trauma such as assault, disaster, accident, or violence",
        "Reveal present-tense re-experiencing and active avoidance",
        "Add hyperarousal and functional impairment"
      ]
    }
  }
];

const revisionPrompts = {
  "6a20": {
    question: "Which feature most helps separate schizophrenia from a brief acute psychotic episode?",
    options: ["Persistent course with functional decline", "Morning withdrawal symptoms", "Fear of social scrutiny"],
    answer: 0,
    explanation: "Schizophrenia requires a more sustained psychotic syndrome with functional decline, not only an abrupt short polymorphic episode."
  },
  "6a23": {
    question: "What is the strongest memory hook for acute and transient psychotic disorder?",
    options: ["Abrupt onset with rapidly changing psychotic symptoms", "Persistent cognitive decline over years", "Panic attacks peaking within minutes"],
    answer: 0,
    explanation: "The high-yield clue is acute onset with changing or polymorphic psychotic symptoms."
  },
  "6a60-1": {
    question: "What must be present for this bipolar type I manic code?",
    options: ["Manic syndrome plus psychotic symptoms", "Only insomnia and anxiety", "Depression without any past manic episode"],
    answer: 0,
    explanation: "This code needs a current manic episode, and the psychotic symptoms occur in that manic context."
  },
  "6a70-3": {
    question: "What is essential for single episode depressive disorder, severe, without psychotic symptoms?",
    options: ["Severe depressive syndrome with no psychosis or past mania", "Delusions with elevated mood", "Brief sadness after a clear stressor only"],
    answer: 0,
    explanation: "The memory hook is severe depression, no psychotic symptoms, and no history of mania or hypomania."
  },
  "6b20-0": {
    question: "Which detail points to OCD with fair to good insight?",
    options: ["The person recognizes the obsessional belief is probably not true", "The belief is fully fixed and delusional", "The symptom appears only during delirium"],
    answer: 0,
    explanation: "Fair to good insight means the person can see that the obsessional fear is likely excessive or untrue."
  },
  "6b60-4": {
    question: "What is the key differentiator for dissociative non-epileptic seizures?",
    options: ["Seizure-like episodes inconsistent with epilepsy after assessment", "Recurrent fever with confusion", "Craving and tolerance"],
    answer: 0,
    explanation: "The clue is a seizure-like presentation that is not explained by epilepsy or another neurological disease."
  },
  "6d70-0": {
    question: "What is the essential bedside feature of delirium?",
    options: ["Acute fluctuating disturbance of attention and awareness", "Long-standing fixed delusion with clear consciousness", "Rituals performed to reduce anxiety"],
    answer: 0,
    explanation: "Delirium is anchored by acute fluctuation plus impaired attention and awareness."
  },
  "6c40-2": {
    question: "Which cluster best supports alcohol dependence?",
    options: ["Impaired control, salience, craving, tolerance, or withdrawal", "One isolated intoxication episode", "Fear of contamination with washing rituals"],
    answer: 0,
    explanation: "Dependence is a syndrome: impaired control and priority of alcohol use, often with craving, tolerance, or withdrawal."
  },
  "6c43-2": {
    question: "Which finding is most specific for opioid dependence?",
    options: ["Craving with opioid withdrawal and continued use despite harm", "Sudden panic in crowds", "Weight loss driven by body-image fear"],
    answer: 0,
    explanation: "Opioid dependence is remembered through craving, impaired control, withdrawal/tolerance, and continued harmful use."
  },
  "6b01": {
    question: "What makes panic disorder more than a single panic attack?",
    options: ["Recurrent unexpected attacks plus ongoing worry or behaviour change", "Only fear of social performance", "Only low mood after bereavement"],
    answer: 0,
    explanation: "Panic disorder needs recurrent unexpected panic attacks and persistent concern or behavioural change."
  },
  "6c20": {
    question: "What is the main diagnostic anchor for bodily distress disorder?",
    options: ["Persistent distressing bodily symptoms with excessive attention and impairment", "Neurological signs proving epilepsy", "Psychosis with grandiosity"],
    answer: 0,
    explanation: "The recall hook is distressing bodily symptoms plus excessive health-related attention and functional cost."
  },
  "6b43": {
    question: "What must be identifiable in adjustment disorder?",
    options: ["A psychosocial stressor with preoccupation and impaired adaptation", "A manic episode with psychosis", "A primary delirium syndrome"],
    answer: 0,
    explanation: "Adjustment disorder is tied to a stressor and difficulty adapting without meeting another disorder's full requirements."
  },
  "6b04": {
    question: "What is the core fear in social anxiety disorder?",
    options: ["Negative evaluation or embarrassment during scrutiny", "Contamination causing illness", "Withdrawal body aches"],
    answer: 0,
    explanation: "Social anxiety centers on feared scrutiny and negative evaluation."
  },
  "6b80": {
    question: "What is essential for anorexia nervosa?",
    options: ["Significantly low body weight with behaviours preventing weight restoration", "Only poor appetite during depression", "Only repeated medical reassurance seeking"],
    answer: 0,
    explanation: "The memory hook is low body weight plus persistent weight-restoration prevention, often with body-weight or shape overvaluation."
  },
  "6b40": {
    question: "Which triad is central to post traumatic stress disorder?",
    options: ["Re-experiencing, avoidance, and current threat after trauma", "Tolerance, withdrawal, and craving", "Low mood, anhedonia, and psychosis"],
    answer: 0,
    explanation: "PTSD is remembered by trauma exposure followed by re-experiencing, avoidance, and persistent sense of threat."
  }
};

const cases = [
  {
    id: "atpd-pune-ed",
    number: 1,
    setting: "Emergency psychiatry",
    focus: "Acute psychosis",
    diagnosisId: "6a23",
    clues: [
      "A 22-year-old engineering student from Pune is brought by his brother after three days of sleeplessness, fearfulness, and saying neighbours are monitoring him.",
      "He is perplexed, shifts quickly from anxiety to laughter, and reports unfamiliar voices commenting on his actions.",
      "Collateral history suggests good academic and social functioning until this week.",
      "There is no sustained elevated mood, no prominent depressive syndrome, and a urine screen is negative for common substances.",
      "The symptoms are polymorphic, rapidly changing, and began abruptly after a stressful exam result discussion at home.",
      "The presentation points to a brief non-organic psychotic episode with acute onset and changing psychotic symptoms."
    ],
    explanation: "Abrupt onset, rapidly changing psychotic symptoms, preserved prior functioning, and no clear substance, organic, or mood syndrome support ICD-11 6A23 Acute and Transient Psychotic Disorder.",
    differentials: ["Schizophrenia", "Mania with psychotic symptoms", "Substance-induced psychotic disorder"],
    learning: "Short-duration psychosis in Indian emergency settings needs careful collateral history, substance screen, medical assessment, risk review, and follow-up because the diagnosis can evolve."
  },
  {
    id: "alcohol-dependence-ward",
    number: 2,
    setting: "General hospital liaison",
    focus: "Substance use",
    diagnosisId: "6c40-2",
    clues: [
      "A 42-year-old auto-rickshaw driver from Chennai is referred after repeated admissions for gastritis and tremulousness.",
      "He says the first drink in the morning steadies his hands before work.",
      "His wife reports failed attempts to cut down, hidden bottles, and irritability when alcohol is not available.",
      "He needs larger amounts than before and continues despite a warning about liver injury.",
      "Most earnings now go toward alcohol, and he has missed several days of work after binges.",
      "Craving, withdrawal relief drinking, tolerance, salience, impaired control, and continued harmful use point to dependence."
    ],
    explanation: "The pattern includes craving, impaired control, tolerance, withdrawal, salience, and continued use despite harm, which fits ICD-11 6C40.2 Alcohol Dependence.",
    differentials: ["Harmful use of alcohol", "Depressive episode", "Alcohol withdrawal state"],
    learning: "In India, liaison psychiatry often meets alcohol dependence through gastrointestinal, hepatic, injury, or withdrawal presentations rather than a primary psychiatry complaint."
  },
  {
    id: "ocd-neet-aspirant",
    number: 3,
    setting: "Urban OPD",
    focus: "Anxiety and compulsions",
    diagnosisId: "6b20-0",
    clues: [
      "A 19-year-old NEET aspirant from Kota spends four to five hours daily washing hands and cleaning her study table.",
      "She describes repeated intrusive thoughts that her books are contaminated and that her parents may fall ill if she touches them.",
      "She recognizes the thoughts as excessive but feels intense anxiety until she performs the cleaning sequence.",
      "There are no fixed delusions, hallucinations, manic symptoms, or substance use.",
      "Her preparation has suffered because rituals delay sleep and classes.",
      "Ego-dystonic intrusive thoughts with repetitive anxiety-reducing rituals point to this diagnosis."
    ],
    explanation: "Recurrent intrusive contamination thoughts, fair to good insight, distress, and time-consuming compulsive washing support ICD-11 6B20.0 Obsessive-Compulsive Disorder with Fair to Good Insight.",
    differentials: ["Specific phobia", "Psychotic disorder", "Obsessive-compulsive personality traits"],
    learning: "Academic pressure may be the presenting context, but the diagnostic anchor is the obsession-compulsion cycle and functional impairment."
  },
  {
    id: "dissociative-convulsions-school",
    number: 4,
    setting: "Child and adolescent clinic",
    focus: "Dissociation",
    diagnosisId: "6b60-4",
    clues: [
      "A 17-year-old student from Lucknow has repeated shaking episodes at school after arguments about marriage plans at home.",
      "During episodes, her eyes are often closed and limb movements are asynchronous.",
      "There is no tongue bite, incontinence, cyanosis, or prolonged post-ictal confusion.",
      "Neurological examination and initial investigations are unremarkable.",
      "She is distressed by family conflict and feels unable to speak about it directly.",
      "Convulsion-like episodes with psychological stressors and features inconsistent with epileptic seizures suggest this dissociative diagnosis."
    ],
    explanation: "The episode pattern, preserved safety signs, stress linkage, and features inconsistent with epilepsy support ICD-11 6B60.4 Dissociative Neurological Symptom Disorder, with Non-Epileptic Seizures after medical causes are considered.",
    differentials: ["Epilepsy", "Panic attacks", "Malingering"],
    learning: "The Indian clinical frame should avoid blame. Assessment still needs medical review, risk assessment, family work, and a validating explanation."
  },
  {
    id: "mania-startup-founder",
    number: 5,
    setting: "Psychiatry emergency",
    focus: "Mood and psychosis",
    diagnosisId: "6a60-1",
    clues: [
      "A 28-year-old startup founder from Bengaluru is brought after five days of almost no sleep and nonstop calls to investors.",
      "He speaks rapidly, shifts topics, and says he has been chosen to transform mental healthcare in India within a month.",
      "He spent several lakh rupees on impulsive purchases and became aggressive when family tried to stop him.",
      "He hears a divine voice approving his mission, and the grandiose beliefs are mood congruent.",
      "There was a similar self-limited episode two years ago followed by months of normal functioning.",
      "Elevated mood, increased energy, decreased need for sleep, grandiosity, disinhibition, and psychosis indicate this current episode."
    ],
    explanation: "A manic syndrome with psychotic symptoms, marked impairment, and a past episodic course supports ICD-11 6A60.1 Bipolar Type I Disorder, Current Episode Manic, with Psychotic Symptoms.",
    differentials: ["Schizoaffective disorder", "Acute psychotic disorder", "Substance-induced mood disorder"],
    learning: "Mood congruence, episodic course, sleep change, and increased goal-directed activity help separate mania with psychosis from primary psychotic disorders."
  },
  {
    id: "delirium-dengue-ward",
    number: 6,
    setting: "Medicine ward",
    focus: "Organic psychiatry",
    diagnosisId: "6d70-0",
    clues: [
      "A 68-year-old man admitted with dengue fever becomes restless and suspicious on the third hospital night.",
      "He cannot sustain attention for serial subtraction and repeatedly asks where he is.",
      "His symptoms fluctuate, with clearer periods in the morning and worsening confusion after sunset.",
      "He misidentifies an IV stand as a person and tries to pull out the cannula.",
      "There is no prior psychotic illness, and the onset is acute during a systemic medical illness.",
      "Acute fluctuating disturbance of attention, awareness, orientation, and perception points to this organic syndrome."
    ],
    explanation: "Acute onset, fluctuation, impaired attention, disorientation, perceptual disturbance, and concurrent medical illness support ICD-11 6D70.0 Delirium due to disease classified elsewhere.",
    differentials: ["Dementia", "Brief psychotic disorder", "Mania"],
    learning: "In Indian hospitals, delirium is often first noticed as agitation. The core bedside test is attention, not just orientation."
  },
  {
    id: "opioid-dependence-punjab",
    number: 7,
    setting: "De-addiction clinic",
    focus: "Opioid use",
    diagnosisId: "6c43-2",
    clues: [
      "A 24-year-old man from rural Punjab presents with family after three years of using heroin by chasing and occasional injection.",
      "He reports strong craving and spends most afternoons arranging money or supply.",
      "When he stops, he develops body aches, loose stools, yawning, lacrimation, and insomnia.",
      "He now needs more than before to get the same effect.",
      "He has dropped out of a diploma course and continues despite debts and family conflict.",
      "Craving, withdrawal, tolerance, impaired control, salience, and continued harm point to opioid dependence."
    ],
    explanation: "The cluster of craving, withdrawal, tolerance, salience, impaired control, and continued use despite harm supports ICD-11 6C43.2 Opioid Dependence.",
    differentials: ["Harmful opioid use", "Depressive episode", "Antisocial personality traits"],
    learning: "India-focused substance cases should include route, withdrawal, infectious risk, family context, and access to evidence-based de-addiction care."
  },
  {
    id: "severe-depression-postpartum",
    number: 8,
    setting: "Perinatal psychiatry OPD",
    focus: "Depressive disorders",
    diagnosisId: "6a70-3",
    clues: [
      "A 31-year-old woman from Jaipur presents eight months after delivery with persistent low mood and loss of interest.",
      "She has early morning awakening, reduced appetite, fatigue, poor concentration, and guilt about being a bad mother.",
      "She has stopped meeting relatives and struggles with routine infant care despite family support.",
      "She denies hallucinations, delusions, elevated mood, or substance use.",
      "She has recurrent passive death wishes but no psychotic symptoms.",
      "A severe depressive syndrome with marked functional impairment and no psychosis is the best fit."
    ],
    explanation: "Multiple biological and cognitive depressive symptoms, functional impairment, and passive death wishes without psychosis support ICD-11 6A70.3 Single Episode Depressive Disorder, Severe, without Psychotic Symptoms.",
    differentials: ["Postpartum psychosis", "Adjustment disorder", "Hypothyroidism"],
    learning: "Perinatal context changes risk assessment and care planning, but the episode is still diagnosed from depressive syndrome severity and psychotic symptoms."
  },
  {
    id: "panic-metro-ed",
    number: 9,
    setting: "Emergency medicine referral",
    focus: "Panic attacks",
    diagnosisId: "6b01",
    clues: [
      "A 26-year-old software engineer from Hyderabad has visited the emergency department three times for sudden chest tightness and breathlessness.",
      "Each spell peaks within minutes with palpitations, sweating, trembling, dizziness, and fear that he is about to die.",
      "ECG, thyroid testing, and basic medical evaluation have not shown a cardiac or endocrine cause.",
      "The attacks now occur unexpectedly, including once while sitting quietly at home.",
      "He has started avoiding the metro and keeps checking the nearest hospital route before leaving home.",
      "Recurrent unexpected panic attacks followed by persistent worry and behaviour change point to this anxiety disorder."
    ],
    explanation: "Recurrent unexpected panic attacks, negative relevant medical evaluation, ongoing fear of further attacks, and avoidance support ICD-11 6B01 Panic Disorder.",
    differentials: ["Cardiac arrhythmia", "Hyperthyroidism", "Social anxiety disorder"],
    learning: "Panic disorder often presents first in emergency or medical settings. The diagnosis depends on recurrent unexpected attacks plus persistent worry or behaviour change."
  },
  {
    id: "social-anxiety-viva",
    number: 10,
    setting: "Medical college counselling clinic",
    focus: "Social fear",
    diagnosisId: "6b04",
    clues: [
      "A 21-year-old MBBS student from Kochi seeks help after repeatedly skipping bedside case presentations.",
      "Before viva sessions, he worries classmates and faculty will notice his shaking voice and think he is incompetent.",
      "He avoids asking questions in seminars, eating in the canteen, and answering phone calls in front of hostel mates.",
      "The fear has persisted since first year and is not limited to one recent stressful event.",
      "There are no unexpected panic attacks outside social scrutiny and no psychotic symptoms.",
      "Persistent fear of negative evaluation with avoidance and impairment in social-performance situations is the key diagnostic anchor."
    ],
    explanation: "Marked fear of scrutiny, negative evaluation, avoidance, persistence, and academic-social impairment support ICD-11 6B04 Social Anxiety Disorder.",
    differentials: ["Panic disorder", "Agoraphobia", "Autism spectrum disorder"],
    learning: "The core memory hook is fear of scrutiny and negative evaluation, not simply shyness or one bad performance."
  }
];

const DAILY_FREE_CASES = 10;
const MAX_CLUES = 6;
const USER_ID_KEY = "icddle-user-id";
const fallbackCases = cases.map((item) => ({
  ...item,
  clues: [...item.clues],
  differentials: [...item.differentials]
}));
const appState = {
  mode: localStorage.getItem("icddle-mode") || "classic",
  activeIndex: getDailyCaseIndex(),
  userId: getOrCreateUserId(),
  dailyDate: getIndiaDate(),
  backendOnline: false,
  profileSummary: null,
  revealed: 1,
  guesses: [],
  completed: false,
  won: false,
  selectedDiagnosisId: null,
  statsUpdated: false,
  lastShareText: ""
};

const elements = {
  caseNumber: document.querySelector("#caseNumber"),
  caseDate: document.querySelector("#caseDate"),
  caseTitle: document.querySelector("#caseTitle"),
  caseSetting: document.querySelector("#caseSetting"),
  caseFocus: document.querySelector("#caseFocus"),
  progressBar: document.querySelector("#progressBar"),
  clueList: document.querySelector("#clueList"),
  guessForm: document.querySelector("#guessForm"),
  guessInput: document.querySelector("#guessInput"),
  suggestionList: document.querySelector("#suggestionList"),
  feedback: document.querySelector("#feedback"),
  guessHistory: document.querySelector("#guessHistory"),
  resultPanel: document.querySelector("#resultPanel"),
  resultLabel: document.querySelector("#resultLabel"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  revisionCard: document.querySelector("#revisionCard"),
  revisionQuestion: document.querySelector("#revisionQuestion"),
  revisionOptions: document.querySelector("#revisionOptions"),
  revisionFeedback: document.querySelector("#revisionFeedback"),
  shareButton: document.querySelector("#shareButton"),
  nextCaseButton: document.querySelector("#nextCaseButton"),
  archiveButton: document.querySelector("#archiveButton"),
  statsButton: document.querySelector("#statsButton"),
  todayButton: document.querySelector("#todayButton"),
  archiveModal: document.querySelector("#archiveModal"),
  statsModal: document.querySelector("#statsModal"),
  archiveGrid: document.querySelector("#archiveGrid"),
  statsList: document.querySelector("#statsList"),
  attemptCount: document.querySelector("#attemptCount"),
  clueCount: document.querySelector("#clueCount"),
  modeLabel: document.querySelector("#modeLabel"),
  learningTitle: document.querySelector("#learningTitle"),
  learningText: document.querySelector("#learningText")
};

init();

async function init() {
  bindEvents();
  await loadDailyCases();
  loadProgress();
  render();
}

function bindEvents() {
  elements.guessForm.addEventListener("submit", handleGuess);
  elements.guessInput.addEventListener("input", handleSearch);
  elements.guessInput.addEventListener("focus", handleSearch);
  elements.guessInput.addEventListener("keydown", handleInputKeys);
  document.addEventListener("click", handleDocumentClick);

  document.querySelectorAll(".mode-button").forEach((button) => {
    button.addEventListener("click", async () => {
      appState.mode = button.dataset.mode;
      localStorage.setItem("icddle-mode", appState.mode);
      appState.activeIndex = 0;
      await loadDailyCases();
      loadProgress();
      render();
    });
  });

  elements.shareButton.addEventListener("click", shareResult);
  elements.nextCaseButton.addEventListener("click", openNextPracticeCase);
  elements.archiveButton.addEventListener("click", openArchive);
  elements.statsButton.addEventListener("click", openStats);
  elements.todayButton.addEventListener("click", () => {
    appState.activeIndex = 0;
    loadProgress();
    render();
  });

  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(`#${button.dataset.close}`).close();
    });
  });
}

function render() {
  const activeCase = getActiveCase();
  if (!activeCase) return;
  const diagnosis = getDiagnosis(activeCase.diagnosisId);

  elements.caseNumber.textContent = `Case ${activeCase.number}/${DAILY_FREE_CASES}`;
  elements.caseDate.textContent = appState.dailyDate;
  elements.caseSetting.textContent = activeCase.setting;
  elements.caseFocus.textContent = activeCase.focus;
  elements.progressBar.style.width = `${(appState.revealed / MAX_CLUES) * 100}%`;
  elements.attemptCount.textContent = String(appState.guesses.length);
  elements.clueCount.textContent = `${appState.revealed}/${MAX_CLUES}`;
  elements.modeLabel.textContent = appState.mode === "classic" ? "Classic" : "Hard";

  document.querySelectorAll(".mode-button").forEach((button) => {
    const active = button.dataset.mode === appState.mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  elements.clueList.innerHTML = activeCase.clues
    .slice(0, appState.revealed)
    .map((clue, index) => {
      const current = index === appState.revealed - 1 && !appState.completed ? " current" : "";
      return `
        <li class="clue-card${current}">
          <span class="clue-index">${index + 1}</span>
          <p><span class="clue-label">Clue ${index + 1}</span>${escapeHtml(clue)}</p>
        </li>
      `;
    })
    .join("");

  renderGuesses();
  renderResult(activeCase, diagnosis);
  saveProgress();
}

function renderGuesses() {
  elements.guessHistory.innerHTML = appState.guesses
    .map((guess) => {
      const item = getDiagnosis(guess.id);
      const correct = guess.id === getActiveCase().diagnosisId ? " correct" : "";
      return `<span class="guess-pill${correct}">${escapeHtml(item.name)}</span>`;
    })
    .join("");
}

function renderResult(activeCase, diagnosis) {
  elements.guessInput.disabled = appState.completed;
  elements.guessForm.querySelector("button").disabled = appState.completed;

  if (!appState.completed) {
    elements.resultPanel.classList.add("hidden");
    elements.learningTitle.textContent = "OPD, ward, emergency, and exam-room reasoning.";
    elements.learningText.textContent = "Cases use Indian clinical settings and original teaching clues. They are simplified for learning and play.";
    return;
  }

  const attempts = appState.guesses.length;
  elements.resultPanel.classList.remove("hidden");
  elements.resultLabel.textContent = appState.won ? `Solved in ${attempts}` : "Answer";
  elements.resultTitle.textContent = `${diagnosis.name} (${diagnosis.code})`;
  elements.resultText.textContent = activeCase.explanation;
  renderRevisionQuiz(diagnosis.id);
  elements.learningTitle.textContent = "Teaching Notes";
  elements.learningText.textContent = `${activeCase.learning} Code criteria: ${diagnosis.criteria.core.join("; ")}. Differentials: ${activeCase.differentials.join(", ")}.`;
  elements.lastShareText = buildShareText(activeCase, appState.won, attempts);
}

function renderRevisionQuiz(diagnosisId) {
  const prompt = revisionPrompts[diagnosisId];
  if (!prompt) {
    elements.revisionCard.classList.add("hidden");
    return;
  }

  elements.revisionCard.classList.remove("hidden");
  elements.revisionQuestion.textContent = prompt.question;
  elements.revisionFeedback.textContent = "";
  elements.revisionOptions.innerHTML = prompt.options
    .map((option, index) => `<button type="button" data-index="${index}">${escapeHtml(option)}</button>`)
    .join("");

  elements.revisionOptions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => handleRevisionAnswer(prompt, Number(button.dataset.index)));
  });
}

function handleRevisionAnswer(prompt, selectedIndex) {
  const buttons = [...elements.revisionOptions.querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    button.classList.toggle("correct", index === prompt.answer);
    button.classList.toggle("incorrect", index === selectedIndex && selectedIndex !== prompt.answer);
  });

  const correct = selectedIndex === prompt.answer;
  elements.revisionFeedback.textContent = `${correct ? "Correct." : "Not quite."} ${prompt.explanation}`;
  logInteraction({
    event: "revision_answered",
    caseId: getActiveCase().id,
    diagnosisId: getActiveCase().diagnosisId,
    mode: appState.mode,
    correct
  });
}

function handleGuess(event) {
  event.preventDefault();

  if (appState.completed) return;

  const selected = resolveDiagnosis(elements.guessInput.value, appState.selectedDiagnosisId);
  if (!selected) {
    setFeedback("Choose a diagnosis from the ICD-11 list.", "bad");
    return;
  }

  if (appState.guesses.some((guess) => guess.id === selected.id)) {
    setFeedback("Already guessed.", "bad");
    return;
  }

  appState.guesses.push({ id: selected.id, at: Date.now() });
  elements.guessInput.value = "";
  appState.selectedDiagnosisId = null;
  hideSuggestions();

  if (selected.id === getActiveCase().diagnosisId) {
    appState.completed = true;
    appState.won = true;
    setFeedback("Correct diagnosis.", "good");
    updateStats(true);
    logCaseCompletion();
  } else if (appState.guesses.length >= MAX_CLUES) {
    appState.completed = true;
    appState.won = false;
    appState.revealed = MAX_CLUES;
    setFeedback("Case complete. Review the answer below.", "bad");
    updateStats(false);
    logCaseCompletion();
  } else {
    appState.revealed = Math.min(MAX_CLUES, appState.revealed + 1);
    setFeedback("Not the best fit. Another clue is open.", "bad");
  }

  render();
}

function handleSearch() {
  if (appState.completed) return;

  const query = normalize(elements.guessInput.value);
  appState.selectedDiagnosisId = null;

  if (appState.mode === "exam" && query.length < 3) {
    hideSuggestions();
    return;
  }

  const matches = diagnoses
    .map((diagnosis) => ({
      diagnosis,
      score: scoreDiagnosis(diagnosis, query)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.diagnosis.name.localeCompare(b.diagnosis.name))
    .slice(0, 7);

  if (!query || matches.length === 0) {
    hideSuggestions();
    return;
  }

  elements.suggestionList.innerHTML = matches
    .map(({ diagnosis }, index) => `
      <li role="option">
        <button type="button" data-id="${diagnosis.id}" aria-selected="${index === 0}">
          ${escapeHtml(diagnosis.name)}
          <small>${appState.mode === "classic" ? `${diagnosis.code} - ${diagnosis.category}` : diagnosis.category}</small>
        </button>
      </li>
    `)
    .join("");
  elements.suggestionList.classList.add("show");
  elements.guessInput.setAttribute("aria-expanded", "true");

  elements.suggestionList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => chooseSuggestion(button.dataset.id));
  });
}

function handleInputKeys(event) {
  const options = [...elements.suggestionList.querySelectorAll("button")];
  if (!options.length) return;

  const activeIndex = options.findIndex((button) => button.getAttribute("aria-selected") === "true");

  if (event.key === "ArrowDown") {
    event.preventDefault();
    const next = options[Math.min(options.length - 1, activeIndex + 1)];
    setActiveOption(options, next);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    const next = options[Math.max(0, activeIndex - 1)];
    setActiveOption(options, next);
  }

  if (event.key === "Enter" && elements.suggestionList.classList.contains("show")) {
    const active = options[activeIndex] || options[0];
    chooseSuggestion(active.dataset.id);
  }

  if (event.key === "Escape") {
    hideSuggestions();
  }
}

function setActiveOption(options, next) {
  options.forEach((button) => button.setAttribute("aria-selected", "false"));
  next.setAttribute("aria-selected", "true");
  next.scrollIntoView({ block: "nearest" });
}

function handleDocumentClick(event) {
  if (!event.target.closest(".search-wrap")) {
    hideSuggestions();
  }
}

function chooseSuggestion(id) {
  const diagnosis = getDiagnosis(id);
  elements.guessInput.value = diagnosis.name;
  appState.selectedDiagnosisId = id;
  hideSuggestions();
  elements.guessInput.focus();
}

function hideSuggestions() {
  elements.suggestionList.classList.remove("show");
  elements.suggestionList.innerHTML = "";
  elements.guessInput.setAttribute("aria-expanded", "false");
}

function resolveDiagnosis(value, selectedId) {
  if (selectedId) return getDiagnosis(selectedId);

  const normalizedValue = normalize(value);
  if (!normalizedValue) return null;

  return diagnoses.find((diagnosis) => {
    const terms = [diagnosis.name, diagnosis.code, ...diagnosis.aliases].map(normalize);
    return terms.includes(normalizedValue);
  }) || null;
}

function scoreDiagnosis(diagnosis, query) {
  if (!query) return 0;

  const terms = [diagnosis.name, diagnosis.code, diagnosis.category, ...diagnosis.aliases].map(normalize);
  if (terms.some((term) => term === query)) return 100;
  if (terms.some((term) => term.startsWith(query))) return 70;
  if (terms.some((term) => term.includes(query))) return 45;
  return words(query).some((word) => terms.some((term) => term.includes(word))) ? 20 : 0;
}

function setFeedback(message, type) {
  elements.feedback.textContent = message;
  elements.feedback.className = `feedback ${type || ""}`.trim();
}

function openArchive() {
  elements.archiveGrid.innerHTML = cases
    .map((item, index) => {
      const diagnosis = getDiagnosis(item.diagnosisId);
      return `
        <button class="archive-card" type="button" data-index="${index}">
          <small>Case ${item.number} - ${item.setting}</small>
          <strong>${escapeHtml(item.focus)}</strong>
          <span>${escapeHtml(diagnosis.category)}</span>
        </button>
      `;
    })
    .join("");

  elements.archiveGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      appState.activeIndex = Number(button.dataset.index);
      elements.archiveModal.close();
      loadProgress();
      render();
    });
  });

  elements.archiveModal.showModal();
}

function openStats() {
  const stats = getStats();
  const winRate = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;
  elements.statsList.innerHTML = `
    <div><strong>${stats.played}</strong><span>Played</span></div>
    <div><strong>${stats.wins}</strong><span>Wins</span></div>
    <div><strong>${winRate}%</strong><span>Win Rate</span></div>
    <div><strong>${stats.streak}</strong><span>Current Streak</span></div>
    <div><strong>${stats.maxStreak}</strong><span>Best Streak</span></div>
    <div><strong>${formatDistribution(stats.distribution)}</strong><span>Guess Spread</span></div>
  `;
  elements.statsModal.showModal();
}

async function shareResult() {
  const text = elements.lastShareText || buildShareText(getActiveCase(), appState.won, appState.guesses.length);
  try {
    await navigator.clipboard.writeText(text);
    setFeedback("Share text copied.", "good");
  } catch (error) {
    setFeedback(text, "good");
  }
}

function openNextPracticeCase() {
  appState.activeIndex = (appState.activeIndex + 1) % cases.length;
  loadProgress();
  render();
}

function getActiveCase() {
  return cases[appState.activeIndex];
}

function getDiagnosis(id) {
  return diagnoses.find((diagnosis) => diagnosis.id === id);
}

function getDailyCaseIndex() {
  return 0;
}

function getIndiaDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function getProgressKey() {
  const activeCase = getActiveCase();
  return `icddle-progress:${activeCase.id}:${appState.mode}`;
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem(getProgressKey()) || "null");
  if (!saved) {
    appState.revealed = 1;
    appState.guesses = [];
    appState.completed = false;
    appState.won = false;
    appState.statsUpdated = false;
    appState.selectedDiagnosisId = null;
    setFeedback("", "");
    return;
  }

  appState.revealed = saved.revealed;
  appState.guesses = saved.guesses || [];
  appState.completed = saved.completed;
  appState.won = saved.won;
  appState.statsUpdated = saved.statsUpdated;
  appState.selectedDiagnosisId = null;
  setFeedback(saved.feedback || "", saved.feedbackType || "");
}

function saveProgress() {
  localStorage.setItem(getProgressKey(), JSON.stringify({
    revealed: appState.revealed,
    guesses: appState.guesses,
    completed: appState.completed,
    won: appState.won,
    statsUpdated: appState.statsUpdated,
    feedback: elements.feedback.textContent,
    feedbackType: elements.feedback.classList.contains("good") ? "good" : elements.feedback.classList.contains("bad") ? "bad" : ""
  }));
}

function getStats() {
  return JSON.parse(localStorage.getItem("icddle-stats") || "null") || {
    played: 0,
    wins: 0,
    streak: 0,
    maxStreak: 0,
    lastPlayed: "",
    distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, X: 0 }
  };
}

function updateStats(won) {
  if (appState.statsUpdated) return;

  const stats = getStats();
  const today = getIndiaDate();
  stats.played += 1;
  stats.lastPlayed = today;

  if (won) {
    stats.wins += 1;
    stats.streak += 1;
    stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
    stats.distribution[appState.guesses.length] += 1;
  } else {
    stats.streak = 0;
    stats.distribution.X += 1;
  }

  localStorage.setItem("icddle-stats", JSON.stringify(stats));
  appState.statsUpdated = true;
}

async function loadDailyCases() {
  try {
    const payload = await window.ICDdleApi.getDailyCases({
      userId: appState.userId,
      mode: appState.mode
    });
    if (!Array.isArray(payload.cases) || payload.cases.length === 0) {
      throw new Error("Daily case API returned no cases");
    }

    cases.splice(0, cases.length, ...payload.cases);
    appState.dailyDate = payload.date || getIndiaDate();
    appState.profileSummary = payload.profileSummary || null;
    appState.backendOnline = true;
    appState.activeIndex = Math.min(appState.activeIndex, cases.length - 1);
  } catch (error) {
    cases.splice(0, cases.length, ...fallbackCases);
    appState.dailyDate = getIndiaDate();
    appState.profileSummary = null;
    appState.backendOnline = false;
    appState.activeIndex = Math.min(appState.activeIndex, cases.length - 1);
  }
}

function logCaseCompletion() {
  const activeCase = getActiveCase();
  logInteraction({
    event: "case_completed",
    caseId: activeCase.id,
    diagnosisId: activeCase.diagnosisId,
    mode: appState.mode,
    won: appState.won,
    attempts: appState.guesses.length,
    revealed: appState.revealed,
    guesses: appState.guesses.map((guess) => guess.id)
  });
}

async function logInteraction(payload) {
  if (!appState.backendOnline) return;

  try {
    await window.ICDdleApi.recordInteraction({
      ...payload,
      userId: appState.userId,
      date: appState.dailyDate
    });
  } catch (error) {
    appState.backendOnline = false;
  }
}

function getOrCreateUserId() {
  const existing = localStorage.getItem(USER_ID_KEY);
  if (existing) return existing;

  const generated = globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : `user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(USER_ID_KEY, generated);
  return generated;
}

function buildShareText(activeCase, won, attempts) {
  const squares = Array.from({ length: MAX_CLUES }, (_, index) => {
    if (!won) return index < attempts ? "x" : "-";
    return index < attempts - 1 ? "x" : index === attempts - 1 ? "O" : "-";
  }).join("");
  const score = won ? `${attempts}/${MAX_CLUES}` : `X/${MAX_CLUES}`;
  return `ICDdle India ${activeCase.number} ${score}\n${squares}\n${activeCase.focus}`;
}

function formatDistribution(distribution) {
  return [1, 2, 3, 4, 5, 6].map((key) => distribution[key]).join("-") + ` | X ${distribution.X}`;
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/icd-11|icd 11|icd-10|icd 10/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function words(value) {
  return normalize(value).split(" ").filter(Boolean);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
