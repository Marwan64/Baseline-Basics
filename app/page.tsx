import { CoachPanel, PracticeTools, QuizSection } from "./components";
import { diagramAssets, strokeCards, videoLessons } from "./data";
import Image from "next/image";

const sources = {
  start: [
    {
      label: "Britannica tennis rules",
      href: "https://www.britannica.com/sports/tennis/Principles-of-play",
    },
    {
      label: "Tennis Canada shot playbook",
      href: "https://www.tenniscanada.com/play/tennis-101/tennis-shot-playbook",
    },
  ],
  strokes: [
    {
      label: "When Would You Use A Forehand In Tennis",
      href: "https://www.tenniscanada.com/play/tennis-101/tennis-shot-playbook",
    },
    {
      label: "How to Hit a Backhand in Tennis | USTA",
      href: "https://www.usta.com/en/home/improve/tips-and-instruction/national/learning-the-basics--backhand.html",
    },
    {
      label: "Tennis Serve Technique | My Tennis Expert",
      href: "https://mytennisexpert.com/tennis-serve-technique/",
    },
    {
      label: "What is a Volley in Tennis?",
      href: "https://www.usta.com/en/home/improve/tips-and-instruction/national/learning-the-basics--volleys.html#tab=tournaments",
    },
  ],
  footwork: [
    {
      label: "Mouratoglou footwork article",
      href: "https://www.mouratoglou.com/en/conseils-coaching/coaching-corner/tennis-technique/tennis-footwork-techniques-to-improve-your-footwork/",
    },
  ],
  practice: [
    {
      label: "Practice plan content",
      href: "https://baseline-basics.vercel.app/#plan",
    },
  ],
} as const;

function SourceStrip({
  items,
  label = "Sources",
}: {
  items: readonly { label: string; href: string }[];
  label?: string;
}) {
  return (
    <aside className="source-strip" aria-label={label}>
      <span>{label}</span>
      {items.map((item) => (
        <a href={item.href} key={item.href} rel="noreferrer" target="_blank">
          {item.label}
        </a>
      ))}
    </aside>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <Image
              alt=""
              className="brand-logo"
              height={88}
              priority
              src="/logo.png"
              width={88}
            />
          </span>
          <span>Baseline Basics</span>
        </a>

        <nav aria-label="Primary" className="topnav">
          <a href="#strokes">Strokes</a>
          <a href="#coach">Coach Mode</a>
          <a href="#videos">Videos</a>
          <a href="#diagrams">Diagrams</a>
          <a href="#quiz">Quiz</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Tennis For Real Beginners</p>
            <h1>Learn the strokes that make tennis feel possible.</h1>
            <p className="hero-text">
              This version of Baseline Basics teaches the forehand, backhand, serve,
              and volley with coaching cues, embedded demos, diagrams, and quick self-checks.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#coach">
                Start The Lesson
              </a>
              <a className="button button-secondary" href="#videos">
                Watch Demo Videos
              </a>
            </div>

            <div className="hero-signals">
              <article>
                <span>01</span>
                <p>Simple explanations made for first-time players</p>
              </article>
              <article>
                <span>02</span>
                <p>Interactive coach mode with practice planning</p>
              </article>
              <article>
                <span>03</span>
                <p>Videos, diagrams, and a quiz to lock in the basics</p>
              </article>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-photo-card">
              <img
                alt="Novak Djokovic hitting a forehand at contact"
                className="hero-photo"
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Novak%20Djokovic%20%2825702159281%29.jpg"
              />
              <div className="hero-photo-overlay" />
              <div className="tip-chip tip-chip-top">Explosive contact point</div>
              {/* <div className="tip-chip tip-chip-bottom">The kind of image that says tennis immediately</div> */}
              <p className="hero-credit">Hero image via Wikimedia Commons, CC BY-SA</p>
            </div>
          </div>
        </section>

        <section className="intro-grid" id="start">
          <article className="panel panel-large">
            <p className="eyebrow">Start Here</p>
            <h2>The three things every new player should focus on first.</h2>
            <ul className="bullet-list">
              <li>
                <strong>Watch the ball:</strong> Most mistakes happen because players rush
                before they track the ball all the way in.
              </li>
              <li>
                <strong>Stay balanced:</strong> Tennis gets easier when your feet are under
                you and your body is not falling sideways.
              </li>
              <li>
                <strong>Swing smooth first:</strong> Clean contact beats wild power.
                Control comes before pace.
              </li>
            </ul>
          </article>

          <article className="panel">
            <p className="stat-label">Best first mindset</p>
            <p className="stat-value">
              Relaxed
              <br />
              and repeatable
            </p>
            <p className="stat-note">You do not need a huge swing. You need one you can repeat.</p>
          </article>

          <article className="panel">
            <p className="stat-label">Before every shot</p>
            <p className="stat-value">
              Turn.
              <br />
              Track. Hit.
            </p>
            <p className="stat-note">This simple sequence helps almost every stroke feel more organized.</p>
          </article>
        </section>

        <SourceStrip items={sources.start} label="Beginner guidance sources" />

        <section className="section-header" id="strokes">
          <p className="eyebrow">Core Strokes</p>
          <h2>Build the four shots most beginners meet first.</h2>
          <p>Each stroke has one purpose, a few dependable cues, and one common mistake to avoid.</p>
        </section>

        <section className="stroke-grid">
          {strokeCards.map((stroke) => (
            <article className={`stroke-card accent-${stroke.accent}`} key={stroke.key}>
              <div className="stroke-topline">
                <span>{stroke.name}</span>
                <span>{stroke.strap}</span>
              </div>
              <h3>{stroke.name}</h3>
              <p>{stroke.description}</p>
              <ul className="bullet-list">
                {stroke.cues.map((cue) => (
                  <li key={cue}>{cue}</li>
                ))}
              </ul>
              <p className="mistake">
                <strong>{stroke.source}</strong>
              </p>
            </article>
          ))}
        </section>

        <SourceStrip items={sources.strokes} label="Stroke technique sources" />

        <section className="section-header" id="diagrams">
          <p className="eyebrow">Stroke References</p>
          <h2>Study the four basic strokes with real photo references.</h2>
          <p>
            This section now stays focused on the essentials only: forehand, backhand, serve, and volley.
            Each image is there to help you study body shape, contact position, and finish.
          </p>
        </section>

        <section className="reference-grid">
          {diagramAssets.map((asset) => (
            <article className="panel reference-card" key={asset.title}>
              <div className="reference-image-wrap">
                <img
                  alt={asset.title}
                  className="reference-image"
                  loading="lazy"
                  src={asset.imageUrl}
                />
              </div>
              <h3>{asset.title}</h3>
              <p>{asset.note}</p>
              <p className="reference-credit">{asset.credit}</p>
              <a className="reference-link" href={asset.sourceUrl} rel="noreferrer" target="_blank">
                View source on {asset.sourceLabel}
              </a>
            </article>
          ))}
        </section>

        <section className="section-header" id="coach">
          <p className="eyebrow">Coach Mode</p>
          <h2>Pick a stroke and get a quick lesson you can use on court today.</h2>
          <p>This section acts like a lightweight practice coach with cues, checkpoints, and one next drill.</p>
        </section>

        <CoachPanel />

        <SourceStrip items={sources.strokes} label="Coach mode sources" />

        <section className="section-header" id="videos">
          <p className="eyebrow">Demo Videos</p>
          <h2>See the movements before you try them.</h2>
          <p>These embedded demos give beginners a simple visual reference for rhythm, contact, and finish.</p>
        </section>

        <section className="video-grid">
          {videoLessons.map((lesson) => (
            <article className="panel video-card" key={lesson.title}>
              <div className="video-frame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={`https://www.youtube-nocookie.com/embed/${lesson.embedId}?rel=0`}
                  title={lesson.title}
                />
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.note}</p>
            </article>
          ))}
        </section>

        <SourceStrip items={sources.strokes} label="Demo lesson sources" />

        <section className="section-header" id="footwork">
          <p className="eyebrow">Movement</p>
          <h2>Good footwork makes every stroke easier.</h2>
          <p>Footwork in tennis is how you move and position your body to hit the ball effectively.</p>
        </section>

        <section className="footwork-layout">
          <article className="panel panel-large">
            <h3>Footwork in tennis</h3>
            <p>
              Footwork in tennis is how you move and position your body to hit the ball effectively, and it is one
              of the most important skills for beginners to develop. Good movement helps you stay balanced, reach
              the ball on time, and play more controlled and consistent shots.
            </p>
            <p>
              Some of the key steps include the ready or waiting position (split step), where you stay on your toes
              with knees slightly bent so you can react quickly. Then come small adjustment steps, which help you
              fine-tune your position before hitting the ball instead of taking big, rushed strides.
            </p>
            <p>
              Finally, weight transfer is important when striking the ball, as shifting your weight forward gives
              you better power and control and helps you recover faster for the next shot.
            </p>
          </article>

          <article className="panel">
            <h3>Exercises and tips</h3>
            <ul className="bullet-list">
              <li>Exercises to improve tennis footwork include shadow tennis, where you practice movements without a ball to build coordination and balance.</li>
              <li>Speed ladder drills improve quickness, agility, and reaction time.</li>
              <li>Chasing side steps help you move efficiently across the court while staying balanced.</li>
              <li>Stay low to maintain balance and always be on your toes so you are ready to move.</li>
              <li>Recover quickly to the center after each shot to prepare for the next one.</li>
              <li>Learning to anticipate your opponent&apos;s shots also helps you move earlier and more efficiently.</li>
              <li>Some common mistakes beginners make in footwork include a lack of anticipation, which leads to late reactions and poor positioning.</li>
              <li>Others tend to hop around too much instead of using small, controlled steps, which wastes energy and makes movement less efficient.</li>
            </ul>
          </article>
        </section>

        <SourceStrip items={sources.footwork} label="Footwork source" />

        <section className="section-header" id="plan">
          <p className="eyebrow">Practice Plan</p>
          <h2>Build a 20-minute session based on what you need most.</h2>
          <p>Choose the area that feels hardest right now and the site will suggest a simple session structure.</p>
        </section>

        <PracticeTools />

        <SourceStrip items={sources.practice} label="Practice-plan sources" />

        <section className="section-header" id="quiz">
          <p className="eyebrow">Quiz</p>
          <h2>Check whether the key beginner ideas are sticking.</h2>
          <p>Answer a few fast questions and the page will explain the reasoning behind each one.</p>
        </section>

        <QuizSection />

        <SourceStrip items={[...sources.start, ...sources.strokes, ...sources.footwork]} label="Quiz sources" />

        <section className="closing-banner">
          <div>
            <p className="eyebrow">Keep It Simple</p>
            <h2>Clean contact, calm feet, and repeatable swings will take you a long way.</h2>
          </div>
          <a className="button button-primary" href="#top">
            Back To Top
          </a>
        </section>
      </main>
    </div>
  );
}
