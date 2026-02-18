export const SKILLS = [
  {
    day: 1,
    title: "The 3-Second Pause",
    why: "Sound confident and avoid filler words.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/5MgBikgcWnY", // placeholder
    realLifeExample:
      "Instead of answering instantly, pause for 3 seconds. It makes your answer feel deliberate and confident.",
    game: {
      prompt:
        "Your friend asks: “So what do you actually do?” — choose the best response style.",
      options: [
        { text: "Answer immediately, talk fast, no pauses.", correct: false, feedback: "Fast talking often sounds insecure." },
        { text: "Pause 3 seconds, then answer in one clear sentence.", correct: true, feedback: "This signals confidence and clarity." },
        { text: "Say ‘uhm’ while thinking, then ramble.", correct: false, feedback: "Filler words reduce perceived confidence." }
      ]
    }
  },
  {
    day: 2,
    title: "Say No Without Guilt",
    why: "Protect your time without damaging relationships.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/9u8Z5s0wF2U", // placeholder
    realLifeExample:
      "Use: “I can’t commit to that right now. I can do X instead.”",
    game: {
      prompt: "Someone asks you to help on short notice. Pick the best ‘No’.",
      options: [
        { text: "No. (no explanation)", correct: false, feedback: "Too harsh unless the relationship is very direct." },
        { text: "Sorry, I can’t. (end)", correct: false, feedback: "Better, but still leaves no alternative." },
        { text: "I can’t commit today, but I can help tomorrow for 30 minutes.", correct: true, feedback: "Clear boundary + alternative." }
      ]
    }
  },
  {
    day: 3,
    title: "Stop Procrastination: The 5-Minute Start",
    why: "Break resistance by starting tiny.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/ZXsQAXx_ao0", // placeholder
    realLifeExample:
      "Tell yourself: “Only 5 minutes.” Most people continue once started.",
    game: {
      prompt: "You need to study. What’s the best first move?",
      options: [
        { text: "Wait until you feel motivated.", correct: false, feedback: "Motivation usually comes after starting." },
        { text: "Start a 5-minute timer and open the first task.", correct: true, feedback: "Small start reduces friction." },
        { text: "Plan the perfect schedule for 30 minutes.", correct: false, feedback: "Planning can become avoidance." }
      ]
    }
  },
  {
    day: 4,
    title: "Better Prompts in 1 Minute",
    why: "Get high-quality outputs from AI.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/jC4v5AS4RIM", // placeholder
    realLifeExample:
      "Use: Role + Context + Output format + Constraints + Example.",
    game: {
      prompt: "Pick the best prompt structure.",
      options: [
        { text: "Write something about my project.", correct: false, feedback: "Too vague." },
        { text: "Act as a UX writer. Rewrite this text in 80 words, friendly tone. Keep 3 bullet points.", correct: true, feedback: "Role + format + constraints." },
        { text: "Make it better.", correct: false, feedback: "No context or target." }
      ]
    }
  },
  {
    day: 5,
    title: "Give Feedback Without Attacking",
    why: "Improve outcomes while keeping trust.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/9wY7o3N9j-g", // placeholder
    realLifeExample:
      "Use: Observation → Impact → Request. No labels like ‘lazy’ or ‘bad’.",
    game: {
      prompt: "Your teammate missed a deadline. Best feedback?",
      options: [
        { text: "You’re unreliable. Fix it.", correct: false, feedback: "Labeling triggers defensiveness." },
        { text: "When the deadline was missed, I couldn’t finish my part. Can you update me earlier next time?", correct: true, feedback: "Observation + impact + request." },
        { text: "It’s fine, don’t worry. (but you’re angry)", correct: false, feedback: "Avoidance builds resentment." }
      ]
    }
  },
  {
    day: 6,
    title: "Be Visible in Meetings",
    why: "Get credit and influence without being loud.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/8jPQjjsBbIc", // placeholder
    realLifeExample:
      "Speak early once: short point + question. Visibility rises immediately.",
    game: {
      prompt: "Meeting starts. Best first move?",
      options: [
        { text: "Stay silent and wait for the perfect moment.", correct: false, feedback: "You often never get seen." },
        { text: "Speak early with one clear point + ask a question.", correct: true, feedback: "Early participation increases presence." },
        { text: "Talk a lot to dominate the room.", correct: false, feedback: "Often backfires." }
      ]
    }
  },
  {
    day: 7,
    title: "Reduce Decision Fatigue",
    why: "Stop wasting mental energy on small choices.",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/8kQ9c6dQYqA", // placeholder
    realLifeExample:
      "Pre-decide defaults: meals, outfits, routines. Save brainpower for important work.",
    game: {
      prompt: "You feel overwhelmed by choices. Best strategy?",
      options: [
        { text: "Keep options open for everything.", correct: false, feedback: "More options = more fatigue." },
        { text: "Create defaults for small decisions and focus on one priority.", correct: true, feedback: "Defaults reduce load." },
        { text: "Do nothing until you feel clear.", correct: false, feedback: "Usually increases stress." }
      ]
    }
  }
];
