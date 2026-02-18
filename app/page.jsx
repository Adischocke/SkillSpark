"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SKILLS } from "../lib/skills";

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getUnlockedDays() {
  if (typeof window === "undefined") return 1;

  const start = localStorage.getItem("skillspark_start");

  if (!start) {
    localStorage.setItem("skillspark_start", todayKey());
    localStorage.setItem("skillspark_unlocked", "1");
    localStorage.setItem("skillspark_last", todayKey());
    return 1;
  }

  const unlocked = Number(localStorage.getItem("skillspark_unlocked") || "1");
  const last = localStorage.getItem("skillspark_last") || start;

  const lastDate = new Date(last);
  const now = new Date(todayKey());
  const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    const newUnlocked = Math.min(unlocked + diffDays, SKILLS.length);
    localStorage.setItem("skillspark_unlocked", String(newUnlocked));
    localStorage.setItem("skillspark_last", todayKey());
    return newUnlocked;
  }

  return Math.min(unlocked, SKILLS.length);
}

export default function Home() {
  const [unlocked, setUnlocked] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [picked, setPicked] = useState(null);

  useEffect(() => {
    const u = getUnlockedDays();
    setUnlocked(u);
    setSelectedDay(Math.min(u, SKILLS.length));
  }, []);

  const skill = useMemo(
    () => SKILLS.find((s) => s.day === selectedDay) || SKILLS[0],
    [selectedDay]
  );

  useEffect(() => {
    setPicked(null);
  }, [selectedDay]);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>SkillSpark</h1>
      <p style={styles.subtitle}>
        Daily Skill: Video → Real Example → Practice Game
      </p>

      <div style={styles.counter}>
        Freigeschaltet: {unlocked} / {SKILLS.length}
      </div>

      {/* Skill Auswahl */}
      <div style={styles.skillList}>
        {SKILLS.map((s) => {
          const locked = s.day > unlocked;
          return (
            <button
              key={s.day}
              style={{
                ...styles.skillButton,
                opacity: locked ? 0.4 : 1,
                cursor: locked ? "not-allowed" : "pointer",
              }}
              disabled={locked}
              onClick={() => !locked && setSelectedDay(s.day)}
            >
              Tag {s.day}: {s.title}
            </button>
          );
        })}
      </div>

      <hr style={styles.hr} />

      {/* Video */}
      <h2>🎬 Erklärung</h2>
      <div style={styles.videoBox}>
        <iframe
          src={skill.videoSrc}
          title="Skill Video"
          allowFullScreen
          style={styles.iframe}
        />
      </div>

      <hr style={styles.hr} />

      {/* Beispiel */}
      <h2>📌 Beispiel im echten Leben</h2>
      <p>{skill.realLifeExample}</p>

      <hr style={styles.hr} />

      {/* Spiel */}
      <h2>🎮 Mini-Übung</h2>
      <p>{skill.game.prompt}</p>

      {skill.game.options.map((o, i) => (
        <button
          key={i}
          style={styles.option}
          onClick={() => picked === null && setPicked(i)}
        >
          {o.text}
        </button>
      ))}

      {picked !== null && (
        <div
          style={{
            ...styles.result,
            backgroundColor: skill.game.options[picked].correct
              ? "#14532d"
              : "#7f1d1d",
          }}
        >
          {skill.game.options[picked].correct ? "Richtig ✅" : "Nicht ideal ❌"}
          <p>{skill.game.options[picked].feedback}</p>
        </div>
      )}

      <div style={styles.nav}>
        <button style={styles.navBtn} onClick={() => setPicked(null)}>
          Neu versuchen
        </button>

        <button
          style={styles.navBtn}
          onClick={() =>
            setSelectedDay((d) => Math.min(d + 1, unlocked))
          }
        >
          Nächster Tag →
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "system-ui",
    background: "#020617",
    color: "white",
    minHeight: "100vh",
    padding: 20,
    maxWidth: 700,
    margin: "0 auto",
  },
  title: { fontSize: 32, marginBottom: 4 },
  subtitle: { opacity: 0.7, marginBottom: 10 },
  counter: { marginBottom: 20, fontWeight: "bold" },
  skillList: { display: "flex", flexWrap: "wrap", gap: 8 },
  skillButton: {
    padding: "8px 12px",
    background: "#1e293b",
    border: "none",
    borderRadius: 8,
    color: "white",
  },
  videoBox: { width: "100%", aspectRatio: "16/9", marginBottom: 10 },
  iframe: { width: "100%", height: "100%", border: "none" },
  option: {
    display: "block",
    width: "100%",
    marginTop: 8,
    padding: 10,
    background: "#1e293b",
    border: "none",
    borderRadius: 8,
    color: "white",
    textAlign: "left",
  },
  result: {
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
  },
  nav: { marginTop: 16, display: "flex", gap: 10 },
  navBtn: {
    padding: "10px 14px",
    background: "#2563eb",
    border: "none",
    borderRadius: 8,
    color: "white",
  },
  hr: { margin: "20px 0", opacity: 0.2 },
};
