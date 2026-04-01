export type StrokeKey = "forehand" | "backhand" | "serve" | "volley";

export const strokeCards = [
  {
    key: "forehand",
    name: "Forehand",
    strap: "Your most natural groundstroke",
    description:
      "The forehand is usually the first shot players trust because it feels athletic and open.",
    cues: [
      "Turn early so the body starts the swing, not just the arm.",
      "Use adjustment steps to create comfortable spacing.",
      "Meet the ball slightly in front of the body.",
      "Finish high to build shape and control.",
    ],
    mistake: "Swinging only with the arm and forgetting to rotate through contact.",
    accent: "sun",
  },
  {
    key: "backhand",
    name: "Backhand",
    strap: "Compact and stable from both wings",
    description:
      "The backhand rewards early preparation and usually feels best for beginners with two hands.",
    cues: [
      "Turn the shoulders before the ball gets on top of you.",
      "Keep the hands connected if you use a two-handed backhand.",
      "Step through the shot to help your timing.",
      "Drive through first, then let the finish rise.",
    ],
    mistake: "Preparing too late and getting jammed instead of swinging freely.",
    accent: "mint",
  },
  {
    key: "serve",
    name: "Serve",
    strap: "The only shot you fully control at the start",
    description:
      "A beginner serve improves fastest when the toss and upward reach become repeatable.",
    cues: [
      "Begin sideways with the front shoulder aiming at the box.",
      "Place the toss slightly in front so you can move up to it.",
      "Reach high instead of swinging around the ball.",
      "Land forward to carry momentum into the court.",
    ],
    mistake: "Tossing too far behind the head and losing balance before contact.",
    accent: "blue",
  },
  {
    key: "volley",
    name: "Volley",
    strap: "Short, calm control near the net",
    description:
      "Volleys work best with a quiet racket face, simple footwork, and compact contact.",
    cues: [
      "Keep the racket head up in front of the chest.",
      "Use a short punch instead of a big swing.",
      "Step through the ball to guide it.",
      "Stay balanced after contact so the next volley is available.",
    ],
    mistake: "Taking a full swing and losing control of the racket face.",
    accent: "coral",
  },
] as const;

export const lessonContent: Record<
  StrokeKey,
  {
    focus: string;
    summary: string;
    cues: string[];
    checks: string[];
    drill: string;
    warning: string;
  }
> = {
  forehand: {
    focus: "Groundstroke foundation",
    summary:
      "Use the forehand to learn rhythm, spacing, and smooth rotation through the ball.",
    cues: [
      "Turn your shoulders as soon as you recognize the ball.",
      "Use small adjustment steps so contact happens comfortably in front.",
      "Finish high and balanced instead of trying to slap the ball flat.",
    ],
    checks: [
      "Did I meet the ball in front of my body?",
      "Did my chest rotate through the shot?",
      "Could I hold my finish without stumbling?",
    ],
    drill: "Shadow 8 slow forehands, then rally gently crosscourt or against a wall.",
    warning:
      "If balls are spraying long, you are likely swinging too flat or contacting too late.",
  },
  backhand: {
    focus: "Early preparation",
    summary:
      "The backhand gets easier when the shoulder turn happens early and the swing stays compact.",
    cues: [
      "Turn sideways before the ball reaches you.",
      "Keep both hands working together if you use a two-handed backhand.",
      "Step through the shot so the swing feels connected to your body.",
    ],
    checks: [
      "Did I prepare before the bounce?",
      "Did I drive through contact instead of chopping down?",
      "Was my finish smooth instead of rushed?",
    ],
    drill:
      "Practice shoulder turn plus step-in without the ball, then rally backhands at half pace.",
    warning:
      "If the ball keeps jamming you, your setup is late rather than your swing being weak.",
  },
  serve: {
    focus: "Rhythm and toss",
    summary:
      "A simple serve starts with a repeatable toss and a calm upward reach.",
    cues: [
      "Start sideways with your front shoulder aiming toward the box.",
      "Place the toss slightly in front so you can move up to it.",
      "Reach to full extension instead of swinging only with the arm.",
    ],
    checks: [
      "Could I catch my toss in the same spot several times?",
      "Did I move upward to the ball rather than leaning back?",
      "Did I finish inside the court with balance?",
    ],
    drill: "Do 10 toss-and-catch reps before hitting easy half-speed serves.",
    warning:
      "If contact feels rushed, fix the toss first. Most beginner serve problems start there.",
  },
  volley: {
    focus: "Compact net control",
    summary:
      "Volleys are about posture, racket position, and short confident contact near the net.",
    cues: [
      "Keep the racket head up in front of your chest.",
      "Use a short push instead of a full backswing.",
      "Step forward through the volley to guide the ball.",
    ],
    checks: [
      "Were my hands out in front before the ball arrived?",
      "Did I keep the racket face steady at contact?",
      "Did I move through the shot instead of falling away?",
    ],
    drill:
      "Shadow forehand and backhand volleys, then practice soft partner feeds near the service line.",
    warning:
      "If volleys are popping upward, the racket face is probably opening too much.",
  },
};

export const practicePlans = {
  contact: {
    title: "Clean contact session",
    steps: [
      "3 minutes: shadow swings with slow balanced finishes.",
      "7 minutes: mini tennis in the service boxes to feel center contact.",
      "6 minutes: wall rally or cooperative rally at medium speed.",
      "4 minutes: finish with 10 calm forehands and 10 calm backhands.",
    ],
  },
  timing: {
    title: "Timing and spacing session",
    steps: [
      "4 minutes: split-step and adjustment-step footwork without hitting.",
      "6 minutes: partner feeds or self-drops with focus on spacing.",
      "6 minutes: rally at half speed and recover after every shot.",
      "4 minutes: repeat your hardest stroke with slower preparation.",
    ],
  },
  serve: {
    title: "Serve consistency session",
    steps: [
      "5 minutes: toss-and-catch until the release feels predictable.",
      "5 minutes: shadow serve motions with a full upward reach.",
      "6 minutes: easy serves at 60 percent pace into one target box.",
      "4 minutes: finish with second-serve rhythm instead of power.",
    ],
  },
  net: {
    title: "Net confidence session",
    steps: [
      "4 minutes: ready-position and split-step rehearsal at the net.",
      "6 minutes: shadow forehand and backhand volley punches.",
      "6 minutes: gentle partner feeds with one controlled step forward.",
      "4 minutes: combine approach shot plus first volley if possible.",
    ],
  },
} as const;

export const checklistMessages = [
  "Start with tracking and balance first. Those two habits make every stroke easier to learn.",
  "You have one dependable base skill. Build the next layer with a short focused session instead of practicing everything.",
  "Nice foundation. Spend today on the missing pieces so your strokes feel more connected.",
  "You are close to a complete beginner base. Pick your weakest area and train it on purpose.",
  "Strong start. You are ready to string these basics together in longer rallies and simple point play.",
];

export const videoLessons = [
  {
    title: "Forehand Fundamentals Demo",
    embedId: "Y7KCTjkCM40",
    note: "Watch how early preparation and contact in front make the swing look simple.",
  },
  {
    title: "Serve Basics Demo",
    embedId: "5eLNW1LgkB8",
    note: "Focus on toss height, upward reach, and balance after landing.",
  },
  {
    title: "Volley Technique Demo",
    embedId: "FDD629vbwZw",
    note: "Notice how short the swing is and how the feet move forward through contact.",
  },
] as const;

export const diagramAssets = [
  {
    title: "Forehand",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Djokovic%20forehand%202%20%2826974551121%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Djokovic_forehand_2_(26974551121).jpg",
    sourceLabel: "Wikimedia Commons",
    note: "This forehand action shot is better for studying unit turn, swing path, and how the body drives through the ball.",
    credit: "Novak Djokovic forehand photo, CC BY-SA",
  },
  {
    title: "Backhand",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Andy%20Murray%20backhand%20%288155692116%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Andy_Murray_backhand_(8155692116).jpg",
    sourceLabel: "Wikimedia Commons",
    note: "This backhand image is useful for studying early shoulder turn, racket preparation, and a strong loaded base.",
    credit: "Andy Murray backhand photo, CC BY-SA 2.0",
  },
  {
    title: "Serve",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Federer%20serving.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Federer_serving.jpg",
    sourceLabel: "Wikimedia Commons",
    note: "This serve image shows a real service motion with upward extension, shoulder reach, and classic serving posture.",
    credit: "Roger Federer serve photo, CC BY-SA 2.0",
  },
  {
    title: "Volley",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stefan%20Edberg%202011.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stefan_Edberg_2011.jpg",
    sourceLabel: "Wikimedia Commons",
    note: "This volley reference shows the compact racket path and forward body position you want near the net.",
    credit: "Stefan Edberg volley photo, CC BY 2.0",
  },
] as const;

export const quizQuestions = [
  {
    prompt: "What is the best first goal for most beginner swings?",
    options: [
      "Hit as hard as possible",
      "Make smooth, repeatable contact",
      "Add topspin before learning balance",
    ],
    answer: 1,
    explanation:
      "Beginners improve faster by building clean contact and balance before chasing power.",
  },
  {
    prompt: "If you keep feeling jammed on groundstrokes, what usually needs help first?",
    options: [
      "Spacing and footwork",
      "A heavier racket",
      "A bigger backswing",
    ],
    answer: 0,
    explanation:
      "Late feet and poor spacing cause more beginner errors than swing size does.",
  },
  {
    prompt: "What part of the serve should many beginners isolate first?",
    options: [
      "The toss",
      "The jump",
      "The wrist snap",
    ],
    answer: 0,
    explanation:
      "A consistent toss makes the rest of the serve much easier to repeat.",
  },
] as const;
