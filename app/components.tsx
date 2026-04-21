"use client";

import { useState } from "react";
import {
  checklistMessages,
  lessonContent,
  practicePlans,
  quizQuestions,
  type StrokeKey,
} from "./data";

export function CoachPanel() {
  const [activeStroke, setActiveStroke] = useState<StrokeKey>("forehand");
  const lesson = lessonContent[activeStroke];

  return (
    <section className="coach-layout">
      <aside className="lesson-menu" aria-label="Stroke lessons">
        {(Object.keys(lessonContent) as StrokeKey[]).map((stroke) => (
          <button
            key={stroke}
            className={`lesson-tab ${activeStroke === stroke ? "is-active" : ""}`}
            onClick={() => setActiveStroke(stroke)}
            type="button"
          >
            {stroke[0].toUpperCase() + stroke.slice(1)}
          </button>
        ))}
      </aside>

      <article className="panel lesson-panel" aria-live="polite">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow lesson-label">Now Teaching</p>
            <h3>{activeStroke[0].toUpperCase() + activeStroke.slice(1)}</h3>
          </div>
          <span className="lesson-badge">{lesson.focus}</span>
        </div>

        <p className="lesson-summary">{lesson.summary}</p>

        <div className="lesson-grid">
          <div className="lesson-block">
            <h4>3 Key Features</h4>
            <ul className="bullet-list">
              {lesson.cues.map((cue) => (
                <li key={cue}>{cue}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lesson-footer">
          <div>
            <p className="mini-label">Watch for this</p>
            <p className="mini-note">{lesson.warning}</p>
          </div>
          <div>
            <p className="mini-label">Source</p>
            <p className="mini-note">{lesson.source}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export function PracticeTools() {
  const [planKey, setPlanKey] = useState<keyof typeof practicePlans>("contact");
  const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

  const plan = practicePlans[planKey];
  const checklistMessage = checklistMessages[selectedChecks.length];

  function toggleCheck(key: string) {
    setSelectedChecks((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  }

  return (
    <section className="practice-layout">
      <article className="panel practice-builder">
        <div className="practice-topline">
          <div>
            <h3>Session builder</h3>
            <p className="stat-note">Pick one focus to keep the session simple and useful.</p>
          </div>
          <label className="practice-label" htmlFor="practice-focus">
            Focus
          </label>
        </div>

        <div className="practice-select-wrap">
          <span className="select-helper">Choose your practice focus</span>
          <select
            className="practice-select"
            id="practice-focus"
            onChange={(event) => setPlanKey(event.target.value as keyof typeof practicePlans)}
            value={planKey}
          >
            <option value="contact">Clean contact</option>
            <option value="timing">Timing and spacing</option>
            <option value="serve">Serve consistency</option>
            <option value="net">Net confidence</option>
          </select>
          <span className="select-chevron" aria-hidden="true">⌄</span>
        </div>

        <div className="practice-card">
          <p className="mini-label">Suggested session</p>
          <h4>{plan.title}</h4>
          <ol className="plan-steps">
            {plan.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </article>

      <article className="panel checklist-panel">
        <h3>Quick confidence check</h3>
        <p className="stat-note">
          Tap the statements that feel true today and see what to practice next.
        </p>
        <div className="checklist">
          {[
            ["tracking", "I usually watch the ball all the way in."],
            ["balance", "I stay balanced after contact."],
            ["spacing", "I can find good spacing with small steps."],
            ["serve", "My serve toss feels repeatable."],
          ].map(([key, label]) => {
            const isSelected = selectedChecks.includes(key);

            return (
              <button
                key={key}
                className={`check-item ${isSelected ? "is-selected" : ""}`}
                onClick={() => toggleCheck(key)}
                type="button"
              >
                {label}
              </button>
            );
          })}
        </div>
        <p className="checklist-result">{checklistMessage}</p>
      </article>
    </section>
  );
}

export function QuizSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const answeredCount = Object.keys(selectedAnswers).length;
  const score = quizQuestions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  return (
    <section className="quiz-grid">
      {quizQuestions.map((question, questionIndex) => {
        const selected = selectedAnswers[questionIndex];
        const isAnswered = selected !== undefined;

        return (
          <article className="panel quiz-card" key={question.prompt}>
            <p className="quiz-step">Question {questionIndex + 1}</p>
            <h3>{question.prompt}</h3>
            <div className="quiz-options">
              {question.options.map((option, optionIndex) => {
                const isCorrect = optionIndex === question.answer;
                const isSelected = selected === optionIndex;
                const className = [
                  "quiz-option",
                  isSelected ? "is-selected" : "",
                  isAnswered && isCorrect ? "is-correct" : "",
                  isAnswered && isSelected && !isCorrect ? "is-wrong" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    className={className}
                    key={option}
                    onClick={() =>
                      setSelectedAnswers((current) => ({
                        ...current,
                        [questionIndex]: optionIndex,
                      }))
                    }
                    type="button"
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <p className="quiz-explanation">
              {isAnswered
                ? question.explanation
                : "Choose one answer to reveal the explanation."}
            </p>
          </article>
        );
      })}

      <article className="panel quiz-score-card">
        <p className="eyebrow">Quiz Score</p>
        <h3>
          {score}/{quizQuestions.length}
        </h3>
        <p className="stat-note">
          {answeredCount < quizQuestions.length
            ? "Finish the remaining questions to see your full score."
            : score === quizQuestions.length
              ? "You have the beginner fundamentals locked in."
              : "Nice progress. Review the explanations and go practice the misses."}
        </p>
      </article>
    </section>
  );
}
