import { CoachPanel, PracticeTools, QuizSection } from "./components";
import { diagramAssets, strokeCards, videoLessons } from "./data";
import Image from "next/image";

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
                <strong>Common mistake:</strong> {stroke.mistake}
              </p>
            </article>
          ))}
        </section>

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

        <section className="section-header" id="footwork">
          <p className="eyebrow">Movement</p>
          <h2>Good footwork makes every stroke easier.</h2>
          <p>If your feet arrive late or off balance, even a good swing will feel hard to trust.</p>
        </section>

        <section className="footwork-layout">
          <article className="panel panel-large">
            <h3>Footwork basics</h3>
            <div className="steps">
              <div>
                <span>1</span>
                <h4>Split step</h4>
                <p>Do a small hop as your opponent hits so your body is ready to move in any direction.</p>
              </div>
              <div>
                <span>2</span>
                <h4>Small adjustment steps</h4>
                <p>Use little steps near the ball to find the right spacing instead of reaching.</p>
              </div>
              <div>
                <span>3</span>
                <h4>Recover after the shot</h4>
                <p>Get back to a neutral position so you are ready for the next ball.</p>
              </div>
            </div>
          </article>

          <article className="panel">
            <h3>Easy reminder</h3>
            <p className="quote">Move first. Swing second.</p>
            <p className="stat-note">
              A lot of beginners do the opposite and then wonder why they feel jammed on every ball.
            </p>
          </article>
        </section>

        <section className="section-header" id="plan">
          <p className="eyebrow">Practice Plan</p>
          <h2>Build a 20-minute session based on what you need most.</h2>
          <p>Choose the area that feels hardest right now and the site will suggest a simple session structure.</p>
        </section>

        <PracticeTools />

        <section className="section-header" id="quiz">
          <p className="eyebrow">Quiz</p>
          <h2>Check whether the key beginner ideas are sticking.</h2>
          <p>Answer a few fast questions and the page will explain the reasoning behind each one.</p>
        </section>

        <QuizSection />

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
