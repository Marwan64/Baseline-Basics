export type StrokeKey = "forehand" | "backhand" | "serve" | "volley";

export const strokeCards = [
  {
    key: "forehand",
    name: "Forehand",
    strap: "Your most natural groundstroke",
    description:
      "Can be used broadly for defensive situations but can also be used to win a rally.",
    cues: [
      "Mainly used when the ball comes onto the dominant hand side of the player.",
      "Essential skill to develop early in someone's tennis career.",
      "Ball should be hit when it is a little in front of the player and in between their shoulder and knee height.",
      "Can also be used to hit balls that are low to the ground and hard to keep in play.",
      "Possible to put both topspin and backspin on the ball in order to make it harder for the opponent to return.",
    ],
    source: "Source: When Would You Use A Forehand In Tennis",
    accent: "sun",
  },
  {
    key: "backhand",
    name: "Backhand",
    strap: "Compact and stable from both wings",
    description:
      "The ball should be hit when it is a little in front of the player and off a little to their non-dominant side.",
    cues: [
      "Important to control the face of the racquet in order to be sure that the ball will land in play after contact.",
      "Can utilize a single handed or two handed grips, either works.",
      "For two handed, the dominant hand goes on the bottom while the non-dominant is on top.",
      "Both topspin and backspin can be put on the ball in a backhand.",
    ],
    source: "Source: How to Hit a Backhand in Tennis | Tennis Backhand Tips | USTA.com",
    accent: "mint",
  },
  {
    key: "serve",
    name: "Serve",
    strap: "The only shot you fully control at the start",
    description:
      "Player hits the ball from behind the baseline into the opposite box diagonally.",
    cues: [
      "Best to use a continental grip when serving.",
      "Place feet pointed to the near side post.",
      "In a platform stance, the feet do not move during the serve and there are greater stability and balance.",
      "In a pinpoint stance the backfoot glides forward during the serve. There are more momentum and power, though the stance is harder to control.",
      "Toss the ball slightly in front of yourself when you toss it upward.",
      "When going to hit the ball, jump forward at something resembling a 45 degree angle to the ground.",
      "Follow through fully after you are finished with making contact.",
    ],
    source: "Source: Tennis Serve Technique | 9-Step Guide to a Better Serve | My Tennis Expert",
    accent: "blue",
  },
  {
    key: "volley",
    name: "Volley",
    strap: "Short, calm control near the net",
    description:
      "This is where the ball is hit by the player before it bounces off the ground.",
    cues: [
      "There are three different kinds of volleys, forehand, backhand, and overhead.",
      "A forehand is used when the ball is on the dominant side, a backhand is used when the ball is on the players nondominant side, and the overhead is used when the ball is lobbed high by the other player.",
    ],
    source: "Source: What is a Volley in Tennis? Unlock the Secret to Winning at the Net",
    accent: "coral",
  },
] as const;

export const lessonContent: Record<
  StrokeKey,
  {
    focus: string;
    summary: string;
    cues: string[];
    warning: string;
    source: string;
  }
> = {
  forehand: {
    focus: "Groundstroke foundation",
    summary:
      "Use the forehand to learn rhythm, spacing, and smooth rotation through the ball.",
    cues: [
      "Try to grip the racket loosely and ensure the racket face is parallel to the ground when starting the swing.",
      "Ensure contact point is to the dominant side of your body and slightly in front. It is helpful to be completely turned to the side of your body you are making contact on.",
      "Swing slow to moderately and watch the ball as it makes contact on your racket. Follow through with your entire body.",
    ],
    warning:
      "If balls are traveling too far and landing out with little to no arc shape over the net, you are likely not brushing up enough on the ball and should try to start your swing lower and end the swing over your shoulder.",
    source: "Source used: USTA Tennis 101 Forehand",
  },
  backhand: {
    focus: "Backhand",
    summary:
      "The backhand is an important stroke for controlling the ball on your nondominant side and making contact comfortably in front of your body.",
    cues: [
      "Grip the racket with two hands, ensuring the face makes solid contact with the ball.",
      "Make contact a comfortable distance from your body on your nondominent side and slightly out in front.",
      "Step through the shot, while watching the ball hit the racket.",
    ],
    warning:
      "If the ball is not hitting your racket square, experiment with different grips until one works. Any grip is fine as long as it is comfortable and works for you.",
    source: "Source used: USTA Tennis 101 Backhand",
  },
  serve: {
    focus: "Serve",
    summary:
      "Point your body the direction you want the serve to go and use your whole body to create power and control.",
    cues: [
      "Point your body the direction you want the serve to go.",
      "Toss the ball high up slightly in front of your body, you should not feel like you are having to reach forward or fall back to hit it.",
      "Twist your body and follow through onto the court, power comes from your body more than your swing.",
    ],
    warning:
      "Most issues for beginners arise with the toss. Focus on achieving a consistent toss that is predictable for you.",
    source: "Source: https://tennispredict.com/tennis-serve/",
  },
  volley: {
    focus: "Volley",
    summary:
      "Volleys are about control, contact position, and learning to step through the ball without swatting at it.",
    cues: [
      "Contact the ball to one side of your body rather than right in front of you.",
      "Focus on holding the racket out and stepping through the volley rather than swinging or swatting at it.",
      "Hold the racket firmly and freeze momentum when contact occurs.",
    ],
    warning:
      "If your volleys tend to lack power or are consistently not making solid contact, your grip may not be firm enough to control the ball.",
    source:
      "Source: https://www.usta.com/en/home/improve/tips-and-instruction/national/learning-the-basics--volleys.html#tab=tournaments",
  },
};

export const practicePlans = {
  contact: {
    title: "Clean contact",
    steps: [
      "3 minutes: shadow swings both forehand and backhand with slow and controlled movement.",
      "7 minutes: mini tennis in the service boxes and be intentional about hitting the center of the racket.",
      "6 minutes: go back to the baseline and cooperatively rally at medium speed.",
      "4 minutes: finish by trying to hit 10 forehands and 10 backhands in a row.",
    ],
  },
  timing: {
    title: "Timing and Spacing",
    steps: [
      "4 minutes: split-step and jumping X exercises.",
      "6 minutes: have someone feed you balls or self-drop them and focus on spacing from the ball.",
      "6 minutes: rally cooperatively and focus on recovering after every shot.",
      "4 minutes: repeat your hardest stroke with slower preparation.",
    ],
  },
  serve: {
    title: "Serve Session",
    steps: [
      "3 minutes: shadow serve motions with a full upward reach.",
      "5 minutes: toss-and-catch until the release feels predictable.",
      "7 minutes: easy serves at 50 percent pace into one target box.",
      "5 minutes: finish with putting more power into your swing by bending your knees and swinging faster.",
    ],
  },
  net: {
    title: "Volley session",
    steps: [
      "6 minutes: shadow forehand and backhand volley punches as well as overhead swing path.",
      "6 minutes: gentle feeds from partner with one controlled step forward for volleys.",
      "4 minutes: easy lob feeds from partner while focusing on making clean contact.",
      "4 minutes: combine approach shot plus play the point out at the net.",
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
