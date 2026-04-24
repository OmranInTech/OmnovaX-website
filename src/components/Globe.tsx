import { useEffect, useRef } from "react";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    container.innerHTML = "";

    const whoosh = new Audio("/sounds/whooshsoft.mp3");
    whoosh.volume = 0.25;

    const hit = new Audio("/sounds/whooshsoft.mp3");
    hit.volume = 0.2;

    // ============================================
    // BASE STYLES
    // ============================================
    container.style.background = "#000";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.overflow = "hidden";
    container.style.position = "relative";
    container.style.filter = "blur(10px)";
    container.style.animation = "focusIn 2.5s ease forwards";

    // ============================================
    // STYLE BLOCK
    // ============================================
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@300;400;500&display=swap');

      * {
        box-sizing: border-box;
      }

      @keyframes focusIn {
        0% {
          filter: blur(18px);
          opacity: 0;
          transform: scale(1.08);
        }
        100% {
          filter: blur(0px);
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes zoom {
        from { transform: scale(1.08); }
        to { transform: scale(1); }
      }

      @keyframes float {
        from { transform: translateY(100vh); }
        to { transform: translateY(-10vh); }
      }

      @keyframes shine {
        0% { left: -80%; }
        100% { left: 180%; }
      }

      @keyframes drift {
        from { transform: translateY(-25px); }
        to { transform: translateY(25px); }
      }

      .bgZoom {
        animation: zoom 10s ease-out forwards;
      }

      .title {
        z-index: 5;
        margin-bottom: 40px;
      }

      .letter {
        font-family: 'Montserrat', sans-serif;
        font-size: clamp(90px, 12vw, 180px);
        font-weight: 800;
        color: white;
        display: inline-block;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        letter-spacing: 0.12em;
        position: relative;
        text-shadow:
          0 0 20px rgba(255,255,255,0.15),
          0 0 60px rgba(255,255,255,0.08);
      }

      .letter.show {
        opacity: 1;
        transform: translateY(0);
      }

      .letter::after {
        content: "";
        position: absolute;
        top: 0;
        left: -80%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent,
          rgba(255,255,255,0.35),
          transparent
        );
        transform: skewX(-20deg);
      }

      .letter.show::after {
        animation: shine 2.2s ease forwards;
      }

      .line {
        font-family: 'Inter', sans-serif;
        font-size: clamp(24px, 2vw, 34px);
        font-weight: 300;
        color: rgba(255,255,255,0.8);
        text-align: center;
        letter-spacing: 0.04em;
        max-width: 900px;
        padding: 0 20px;
        z-index: 5;
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s ease;
        min-height: 50px;
      }

      .line.show {
        opacity: 1;
        transform: translateY(0);
      }

      .noise {
        position: absolute;
        inset: 0;
        background-image: url("https://grainy-gradients.vercel.app/noise.svg");
        opacity: 0.06;
        pointer-events: none;
        z-index: 2;
      }

      .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255,255,255,0.45);
        border-radius: 50%;
        animation: float linear infinite;
        z-index: 1;
      }

      .glow {
        position: absolute;
        width: 700px;
        height: 260px;
        background: radial-gradient(
          circle,
          rgba(255,255,255,0.10) 0%,
          rgba(255,255,255,0.04) 35%,
          transparent 70%
        );
        filter: blur(60px);
        animation: drift 7s ease-in-out infinite alternate;
        z-index: 3;
      }

      .fade-out {
        opacity: 0;
        transition: opacity 1.2s ease;
      }
    `;
    document.head.appendChild(style);

    container.classList.add("bgZoom");

    // ============================================
    // NOISE
    // ============================================
    const noise = document.createElement("div");
    noise.className = "noise";
    container.appendChild(noise);

    // ============================================
    // PARTICLES
    // ============================================
    for (let i = 0; i < 45; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${6 + Math.random() * 8}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(particle);
    }

    // ============================================
    // GLOW
    // ============================================
    const glow = document.createElement("div");
    glow.className = "glow";
    container.appendChild(glow);

    // ============================================
    // TITLE
    // ============================================
    const title = document.createElement("div");
    title.className = "title";

    const name = "OMNOVAX";

    name.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = char;
      title.appendChild(span);

      setTimeout(() => {
        span.classList.add("show");

        // 🔊 SOUND ADDED HERE (whoosh per letter)
        whoosh.currentTime = 0;
        whoosh.play().catch(() => {});
      }, i * 180);
    });

    container.appendChild(title);

    // ============================================
    // TAGLINES
    // ============================================
    const line = document.createElement("div");
    line.className = "line";
    container.appendChild(line);

    const messages = [
      "From Ideas to Impactful Experiences",
      "Design. Technology. Emotion.",
      "Building Digital Products That Matter",
    ];

    let current = 0;

    const showMessage = () => {
      line.classList.remove("show");

      setTimeout(() => {
        line.textContent = messages[current];
        line.classList.add("show");

        // 🔊 SOUND ADDED HERE (text switch hit)
        hit.currentTime = 0;
        hit.play().catch(() => {});

        current++;

        if (current < messages.length) {
          setTimeout(showMessage, 2400);
        }
      }, 500);
    };

    setTimeout(showMessage, 2200);

    // ============================================
    // AUTO REDIRECT
    // ============================================
    const exitTimer = setTimeout(() => {
      container.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "/home";
      }, 1200);
    }, 9000);

    // ============================================
    // CLEANUP
    // ============================================
    return () => {
      clearTimeout(exitTimer);
      document.head.removeChild(style);
    };
  }, []);

  return <div ref={ref} />;
}