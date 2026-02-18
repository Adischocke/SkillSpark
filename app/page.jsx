"use client";

import { useState } from "react";
import { SKILLS } from "../lib/skills";

export default function Page() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const skill = SKILLS[skillIndex];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>SkillSpark</h1>
      <p style={styles.subtitle}>5-Minuten-Skills fürs echte Leben</p>

      {/* Auswahl */}
      <div style={styles.list}>
        {SKILLS.map((s, i) => (
          <button key={i} style={styles.skillBtn} onClick={() => setSkillIndex(i)}>
            Tag {s.day}: {s.title}
          </button>
        ))}
      </div>

      <hr style={styles.hr} />

      {/* Video */}
      <video src={skill.video} controls style={styles.video} />

      <hr style={styles.hr} />

      {/* Beispiel */}
      <h2>Beispiel aus dem Alltag</h2>
      <p>{skill.example}</p>

      <hr style={styles.hr} />

      {/* Quiz */}
      <h2>Mini-Übung</h2>

      {skill.questions.map((q, qi) => (
        <div key={qi} style={styles.question}>
          <p>{q.q}</p>

          {q.options.map((opt, oi) => (
            <button
              key={oi}
              style={styles.opt}
              onClick={() => setAnswers({ ...answers, [qi]: opt.c })}
            >
              {opt.t}
            </button>
          ))}

          {answers[qi] !== undefined && (
            <p style={{ color: answers[qi] ? "lightgreen" : "tomato" }}>
              {answers[qi] ? "Richtig 👍" : "Nicht ganz – probier’s nochmal."}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  page: {
    background: "#020617",
    color: "white",
    minHeight: "100vh",
    padding: 20,
    maxWidth: 700,
    margin: "0 auto",
    fontFamily: "system-ui"
  },
  title: { fontSize: 32 },
  subtitle: { opacity: 0.7 },
  list: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 },
  skillBtn: {
    background: "#1e293b",
    border: "none",
    padding: 10,
    borderRadius: 8,
    color: "white",
    cursor: "pointer"
  },
  video: { width: "100%", marginTop: 20, borderRadius: 12 },
  hr: { margin: "20px 0", opacity: 0.2 },
  question: { marginBottom: 20 },
  opt: {
    display: "block",
    marginTop: 8,
    padding: 10,
    background: "#1e293b",
    border: "none",
    borderRadius: 8,
    color: "white",
    cursor: "pointer"
  }
};
                               
