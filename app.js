/* ==========================================================================
   Verified Font Collection (Zero Unconfirmed Replacements, Zero Fake Fallbacks)
   30 Open Fonts + 4 Local File Slots
   ========================================================================== */
const FONTS = [
  {
    name: "Atkinson Hyperlegible",
    family: "'Atkinson Hyperlegible', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "400, 700",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Atkinson+Hyperlegible"
  },
  {
    name: "Bricolage Grotesque",
    family: "'Bricolage Grotesque', sans-serif",
    category: "display",
    source: "Google Fonts",
    weights: "Variable 200–800",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque"
  },
  {
    name: "Cabinet Grotesk",
    family: "'Cabinet Grotesk', sans-serif",
    category: "sans",
    source: "Fontshare",
    weights: "Variable 100–900",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/cabinet-grotesk"
  },
  {
    name: "Clash Display",
    family: "'Clash Display', sans-serif",
    category: "display",
    source: "Fontshare",
    weights: "Variable 200–700",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/clash-display"
  },
  {
    name: "Clash Grotesk",
    family: "'Clash Grotesk', sans-serif",
    category: "sans",
    source: "Fontshare",
    weights: "Variable 200–700",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/clash-grotesk"
  },
  {
    name: "Coconat",
    family: "'Coconat', sans-serif",
    category: "display",
    source: "Collletttivo",
    weights: "400, 700",
    cssImport: "@font-face { font-family: 'Coconat'; src: url('https://cdn.jsdelivr.net/gh/collletttivo/coconat@master/fonts/webfonts/Coconat-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://www.collletttivo.it/typefaces/coconat"
  },
  {
    name: "Departure Mono",
    family: "'Departure Mono', monospace",
    category: "mono",
    source: "Helena Zhang",
    weights: "400",
    cssImport: "@font-face { font-family: 'Departure Mono'; src: url('https://cdn.jsdelivr.net/gh/rektdeckard/departure-mono@v1.422/DepartureMono-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://departuremono.com/"
  },
  {
    name: "DM Sans",
    family: "'DM Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 100–1000",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/DM+Sans"
  },
  {
    name: "Doto",
    family: "'Doto', monospace",
    category: "mono",
    source: "Google Fonts",
    weights: "Variable 100–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Doto"
  },
  {
    name: "Elms Sans",
    family: "'Elms Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 100–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Elms+Sans"
  },
  {
    name: "Excon",
    family: "'Excon', sans-serif",
    category: "sans",
    source: "Fontshare",
    weights: "Variable 100–900",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=excon@100,300,400,500,700,900,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/excon"
  },
  {
    name: "Geist",
    family: "'Geist', sans-serif",
    category: "sans",
    source: "Google Fonts / Vercel",
    weights: "Variable 100–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Geist"
  },
  {
    name: "Geist Mono",
    family: "'Geist Mono', monospace",
    category: "mono",
    source: "Google Fonts / Vercel",
    weights: "Variable 100–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Geist+Mono"
  },
  {
    name: "Geist Pixel",
    family: "'Geist Pixel', monospace",
    category: "mono",
    source: "Vercel",
    weights: "400",
    cssImport: "@font-face { font-family: 'Geist Pixel'; src: url('https://cdn.jsdelivr.net/npm/geist@1.7.0/dist/fonts/geist-pixel/GeistPixel-Square.woff2') format('woff2'); }",
    downloadUrl: "https://vercel.com/font"
  },
  {
    name: "General Sans",
    family: "'General Sans', sans-serif",
    category: "sans",
    source: "Fontshare",
    weights: "Variable 200–700",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700,1,2&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/general-sans"
  },
  {
    name: "Melodrama",
    family: "'Melodrama', serif",
    category: "serif",
    source: "Fontshare",
    weights: "Variable 300–700",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=melodrama@300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/melodrama"
  },
  {
    name: "Nunito",
    family: "'Nunito', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 200–1000",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Nunito"
  },
  {
    name: "Ojuju",
    family: "'Ojuju', sans-serif",
    category: "display",
    source: "Google Fonts",
    weights: "Variable 200–800",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Ojuju"
  },
  {
    name: "Parkinsans",
    family: "'Parkinsans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 300–800",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Parkinsans"
  },
  {
    name: "Poppins",
    family: "'Poppins', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "100–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Poppins"
  },
  {
    name: "Pretendard",
    family: "'Pretendard Variable', 'Pretendard', sans-serif",
    category: "sans",
    source: "OFL GitHub CDN",
    weights: "Variable 100–900",
    cssImport: "@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');",
    downloadUrl: "https://github.com/orioncactus/pretendard"
  },
  {
    name: "Public Sans",
    family: "'Public Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 100–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Public+Sans"
  },
  {
    name: "Quicksand",
    family: "'Quicksand', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 300–700",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Quicksand"
  },
  {
    name: "Sekuya",
    family: "'Sekuya', sans-serif",
    category: "display",
    source: "Google Fonts",
    weights: "400",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Sekuya&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Sekuya"
  },
  {
    name: "Stack Sans Headline",
    family: "'Stack Sans Headline', sans-serif",
    category: "display",
    source: "Google Fonts",
    weights: "Variable 200–700",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Headline"
  },
  {
    name: "Stack Sans Notch",
    family: "'Stack Sans Notch', sans-serif",
    category: "display",
    source: "Google Fonts",
    weights: "Variable 200–700",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Notch"
  },
  {
    name: "Stack Sans Text",
    family: "'Stack Sans Text', sans-serif",
    category: "sans",
    source: "Google Fonts",
    weights: "Variable 200–700",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Text"
  },
  {
    name: "Switzer",
    family: "'Switzer', sans-serif",
    category: "sans",
    source: "Fontshare",
    weights: "Variable 100–900",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,800,900,1,2&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/switzer"
  },
  {
    name: "Tiny5",
    family: "'Tiny5', monospace",
    category: "mono",
    source: "Google Fonts",
    weights: "400",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Tiny5"
  },
  {
    name: "Unbounded",
    family: "'Unbounded', sans-serif",
    category: "display",
    source: "Google Fonts",
    weights: "Variable 200–900",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Unbounded"
  },
  {
    name: "CM Geom",
    family: "'CM Geom'",
    category: "local",
    source: "Local File Slot (./fonts/CMGeom.woff2)",
    weights: "Attach Local File",
    cssImport: "@font-face { font-family: 'CM Geom'; src: url('fonts/CMGeom.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocalSlot: true
  },
  {
    name: "DT World Tour",
    family: "'DT World Tour'",
    category: "local",
    source: "Local File Slot (./fonts/DTWorldTour.woff2)",
    weights: "Attach Local File",
    cssImport: "@font-face { font-family: 'DT World Tour'; src: url('fonts/DTWorldTour.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocalSlot: true
  },
  {
    name: "FTGG",
    family: "'FTGG'",
    category: "local",
    source: "Local File Slot (./fonts/FTGG.woff2)",
    weights: "Attach Local File",
    cssImport: "@font-face { font-family: 'FTGG'; src: url('fonts/FTGG.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocalSlot: true
  },
  {
    name: "Wistteria Sans",
    family: "'Wistteria Sans'",
    category: "local",
    source: "Local File Slot (./fonts/WistteriaSans.woff2)",
    weights: "Attach Local File",
    cssImport: "@font-face { font-family: 'Wistteria Sans'; src: url('fonts/WistteriaSans.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocalSlot: true
  }
];

function notify(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ==========================================================================
   HOME PAGE (`index.html`):
   Complex Multi-Phase Anime.js Variable-Font Choreography on "Font Library"
   ========================================================================== */
function initHomeStage() {
  const heading = document.getElementById("heroHeading");
  if (!heading) return;

  // Build 3D multi-layered DOM structure for "Font" and "Library"
  const words = ["Font", "Library"];
  heading.innerHTML = "";

  const letterUnits = [];
  const letterProxies = [];

  words.forEach((wordText) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "word-cluster";

    for (const ch of wordText) {
      const idx = letterUnits.length;
      const unit = document.createElement("span");
      unit.className = "letter-unit";
      unit.dataset.index = idx;
      unit.dataset.char = ch;

      unit.innerHTML = `
        <span class="glyph-metric">700</span>
        <span class="glyph-echo echo-1" aria-hidden="true">${ch}</span>
        <span class="glyph-echo echo-2" aria-hidden="true">${ch}</span>
        <span class="glyph-core">${ch}</span>
      `;

      wordSpan.appendChild(unit);
      letterUnits.push(unit);

      // Per-letter state proxy for smooth variable font weight & 3D transforms
      letterProxies.push({
        index: idx,
        el: unit,
        core: unit.querySelector(".glyph-core"),
        echo1: unit.querySelector(".echo-1"),
        echo2: unit.querySelector(".echo-2"),
        metric: unit.querySelector(".glyph-metric"),
        wght: 700
      });
    }

    heading.appendChild(wordSpan);
  });

  let activeTimeline = null;
  let waveLoopFrame = null;
  let currentMode = "symphony";

  // Helper to sync proxy variable weight to DOM
  function applyWeight(proxy, weightVal) {
    const rounded = Math.round(weightVal);
    proxy.core.style.fontWeight = rounded;
    proxy.core.style.fontVariationSettings = `'wght' ${rounded}`;
    proxy.echo1.style.fontWeight = rounded;
    proxy.echo2.style.fontWeight = rounded;
    proxy.metric.textContent = rounded;
  }

  // Distinct per-letter bespoke stunts for each of the 11 letters in "Font Library"
  function triggerIndividualLetterStunts(tl, offsetTime) {
    // 0: 'F' — Architectural cantilever slam + weight surge 100 -> 900
    tl.add({
      targets: letterUnits[0],
      translateX: [0, -26, 0],
      rotateY: [0, -35, 0],
      scaleX: [1, 1.28, 1],
      duration: 950,
      easing: "easeOutElastic(1, .5)"
    }, offsetTime);

    // 1: 'o' — 360-degree 3D orbital coin spin + echo expansion
    tl.add({
      targets: letterUnits[1],
      rotateY: [0, 360],
      scale: [1, 1.32, 1],
      duration: 1050,
      easing: "easeInOutCubic"
    }, offsetTime + 70);

    // 2: 'n' — High-arch elastic spring stretch
    tl.add({
      targets: letterUnits[2],
      scaleY: [1, 1.85, 0.72, 1],
      translateY: [0, -34, 8, 0],
      duration: 1000,
      easing: "easeOutElastic(1.2, .45)"
    }, offsetTime + 140);

    // 3: 't' — Crossbar vertical 180X flip
    tl.add({
      targets: letterUnits[3],
      rotateX: [0, 360],
      translateZ: [0, 90, 0],
      duration: 950,
      easing: "easeInOutExpo"
    }, offsetTime + 210);

    // 4: 'L' — 90-degree geometric corner pivot & drop
    tl.add({
      targets: letterUnits[4],
      rotateZ: [0, -24, 6, 0],
      scale: [1, 1.35, 1],
      duration: 1000,
      easing: "easeOutElastic(1, .5)"
    }, offsetTime + 300);

    // 5: 'i' — Zero-gravity vertical levitation & snap
    tl.add({
      targets: letterUnits[5],
      translateY: [0, -52, 0],
      scaleY: [1, 0.65, 1.25, 1],
      duration: 950,
      easing: "easeOutBack(2.4)"
    }, offsetTime + 360);

    // 6: 'b' — 3D bowl pendulum flip
    tl.add({
      targets: letterUnits[6],
      rotateY: [0, -180, -360],
      skewY: [0, 14, 0],
      duration: 1050,
      easing: "easeInOutQuart"
    }, offsetTime + 420);

    // 7: 'r' — Kinetic shear & ghost slice fan
    tl.add({
      targets: letterUnits[7],
      skewX: [0, -28, 14, 0],
      translateX: [0, 14, -6, 0],
      duration: 900,
      easing: "easeOutElastic(1, .5)"
    }, offsetTime + 480);

    // 8: 'a' — Variable optical width expansion
    tl.add({
      targets: letterUnits[8],
      scaleX: [1, 1.45, 0.82, 1],
      rotateZ: [0, 10, -5, 0],
      duration: 980,
      easing: "easeOutElastic(1.1, .45)"
    }, offsetTime + 540);

    // 9: 'r' — Inverted X-axis tumble
    tl.add({
      targets: letterUnits[9],
      rotateX: [0, -360],
      scale: [1, 1.24, 1],
      duration: 980,
      easing: "easeInOutQuint"
    }, offsetTime + 600);

    // 10: 'y' — Descender whip & elastic rebound
    tl.add({
      targets: letterUnits[10],
      translateY: [0, 44, -18, 0],
      rotateZ: [0, 18, -8, 0],
      scaleY: [1, 1.38, 0.88, 1],
      duration: 1150,
      easing: "easeOutElastic(1.2, .4)"
    }, offsetTime + 660);
  }

  function runMasterChoreography() {
    if (activeTimeline) activeTimeline.pause();
    cancelAnimationFrame(waveLoopFrame);
    anime.remove([
      letterUnits,
      ".glyph-core",
      ".echo-1",
      ".echo-2",
      ".glyph-metric",
      letterProxies
    ]);

    activeTimeline = anime.timeline({
      autoplay: true,
      complete: () => {
        startContinuousHarmonicWave();
      }
    });

    // ACT I: 3D Dimensional Deconstruction & Wireframe Echo Fan-In
    activeTimeline
      .add({
        targets: letterUnits,
        translateZ: [-520, 0],
        translateY: (el, i) => [i % 2 === 0 ? -90 : 90, 0],
        rotateX: (el, i) => [i % 2 === 0 ? 88 : -88, 0],
        rotateY: [-40, 0],
        scale: [0.35, 1],
        opacity: [0, 1],
        duration: 1350,
        delay: anime.stagger(55, { from: "center" }),
        easing: "easeOutElastic(1.05, .55)"
      }, 0)
      .add({
        targets: ".echo-1",
        opacity: [0, 0.85, 0],
        translateY: [0, -32, 0],
        translateX: [0, -16, 0],
        scale: [1, 1.14, 1],
        duration: 1150,
        delay: anime.stagger(55, { from: "center" }),
        easing: "easeOutQuart"
      }, 60)
      .add({
        targets: ".echo-2",
        opacity: [0, 0.6, 0],
        translateY: [0, 36, 0],
        translateX: [0, 18, 0],
        scale: [1, 1.24, 1],
        duration: 1250,
        delay: anime.stagger(55, { from: "center" }),
        easing: "easeOutQuart"
      }, 100);

    // ACT II: Variable Weight Sweep (100 -> 900 -> 200 -> 750) with Live Metric Readouts
    activeTimeline
      .add({
        targets: ".glyph-metric",
        opacity: [0, 0.85],
        translateY: [8, 0],
        duration: 400,
        delay: anime.stagger(35),
        easing: "easeOutQuad"
      }, 950)
      .add({
        targets: letterProxies,
        wght: [100, 900, 200, 750],
        duration: 2100,
        delay: anime.stagger(75, { from: "first" }),
        easing: "easeInOutSine",
        update: () => {
          letterProxies.forEach((p) => applyWeight(p, p.wght));
        }
      }, 950);

    // ACT III: Bespoke Per-Letter Kinetic Stunts + Ghost Echo Burst
    triggerIndividualLetterStunts(activeTimeline, 1300);

    activeTimeline
      .add({
        targets: ".echo-1",
        opacity: [0, 0.7, 0],
        translateY: (el, i) => [0, i % 2 === 0 ? -24 : 24, 0],
        duration: 950,
        delay: anime.stagger(65),
        easing: "easeInOutQuad"
      }, 1350)
      .add({
        targets: ".glyph-metric",
        opacity: 0,
        duration: 500,
        easing: "easeOutQuad"
      }, 2800);
  }

  // Continuous Variable-Font & 3D Wave Loop after Intro Sequence
  function startContinuousHarmonicWave() {
    let startTime = performance.now();

    function frame(now) {
      const t = (now - startTime) * 0.0022;

      letterProxies.forEach((p, i) => {
        if (p.el.dataset.hovered === "true") return;

        if (currentMode === "symphony") {
          const wave = Math.sin(t - i * 0.48);
          const secondary = Math.cos(t * 0.7 + i * 0.35);
          const dynamicWeight = 500 + wave * 380; // Oscillates smoothly 120..880
          applyWeight(p, dynamicWeight);

          const y = wave * 10;
          const rotY = secondary * 14;
          const skew = wave * -6;

          p.el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotateY(${rotY.toFixed(2)}deg) skewX(${skew.toFixed(2)}deg)`;
          p.echo1.style.opacity = (Math.abs(wave) * 0.42).toFixed(2);
          p.echo1.style.transform = `translate3d(${(wave * -8).toFixed(1)}px, ${(wave * -14).toFixed(1)}px, -30px)`;
          p.echo2.style.opacity = (Math.abs(secondary) * 0.25).toFixed(2);
          p.echo2.style.transform = `translate3d(${(secondary * 12).toFixed(1)}px, ${(secondary * 18).toFixed(1)}px, -60px)`;
        } else if (currentMode === "variable") {
          const wave = Math.sin(t * 1.4 - i * 0.55);
          const dynamicWeight = 500 + wave * 400;
          applyWeight(p, dynamicWeight);
          const scaleX = 1 + wave * 0.16;
          p.el.style.transform = `scaleX(${scaleX.toFixed(3)})`;
          p.metric.style.opacity = "0.75";
        } else if (currentMode === "deconstruct") {
          const s1 = Math.sin(t * 1.1 + i * 0.6);
          const s2 = Math.cos(t * 0.9 - i * 0.4);
          applyWeight(p, 650 + s1 * 220);
          p.el.style.transform = `translate3d(0, ${(s1 * 16).toFixed(1)}px, ${(s2 * 60).toFixed(1)}px) rotateX(${(s1 * 28).toFixed(1)}deg) rotateZ(${(s2 * 8).toFixed(1)}deg)`;
          p.echo1.style.opacity = "0.65";
          p.echo1.style.transform = `translate3d(0, ${(s1 * -26).toFixed(1)}px, -40px)`;
          p.echo2.style.opacity = "0.45";
          p.echo2.style.transform = `translate3d(0, ${(s2 * 28).toFixed(1)}px, -80px)`;
        }
      });

      waveLoopFrame = requestAnimationFrame(frame);
    }

    waveLoopFrame = requestAnimationFrame(frame);
  }

  // Per-Letter Pointer Hover & Click Shockwave Physics
  letterProxies.forEach((p, idx) => {
    p.el.addEventListener("pointerenter", () => {
      p.el.dataset.hovered = "true";
      p.metric.style.opacity = "1";
      applyWeight(p, 900);

      anime.remove(p.el);
      anime({
        targets: p.el,
        translateY: -22,
        scale: 1.24,
        rotateZ: idx % 2 === 0 ? -6 : 6,
        duration: 420,
        easing: "easeOutElastic(1.2, .45)"
      });
    });

    p.el.addEventListener("pointerleave", () => {
      p.el.dataset.hovered = "false";
      p.metric.style.opacity = "0";
    });

    p.el.addEventListener("click", (e) => {
      e.stopPropagation();
      // Shockwave ripple radiating from the clicked character
      anime({
        targets: letterUnits,
        translateY: [0, -36, 0],
        scale: [1, 1.28, 1],
        rotateY: [0, 180, 360],
        duration: 850,
        delay: anime.stagger(55, { from: idx }),
        easing: "easeOutElastic(1, .5)"
      });
    });
  });

  // Dock Controls
  const replayBtn = document.getElementById("replayAnimBtn");
  if (replayBtn) {
    replayBtn.addEventListener("click", runMasterChoreography);
  }

  const modeBtn = document.getElementById("cycleModeBtn");
  const modes = [
    { id: "symphony", label: "Mode: Full Choreography" },
    { id: "variable", label: "Mode: Variable Axis Wave" },
    { id: "deconstruct", label: "Mode: 3D Echo Slice" }
  ];
  let modeIdx = 0;

  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      modeIdx = (modeIdx + 1) % modes.length;
      currentMode = modes[modeIdx].id;
      modeBtn.textContent = modes[modeIdx].label;

      letterProxies.forEach((p) => {
        p.metric.style.opacity = currentMode === "variable" ? "0.75" : "0";
        p.echo1.style.opacity = "0";
        p.echo2.style.opacity = "0";
      });
    });
  }

  runMasterChoreography();
}

/* ==========================================================================
   DIRECTORY PAGE (`fonts.html`):
   Live Specimen Tester, Inspector Drawer, CSS Copy & Local Font File Loader
   ========================================================================== */
function initDirectoryPage() {
  const fontGrid = document.getElementById("fontGrid");
  const searchInput = document.getElementById("searchInput");
  const previewInput = document.getElementById("globalPreviewInput");
  const sizeRange = document.getElementById("sizeRange");
  const weightRange = document.getElementById("weightRange");
  const trackingRange = document.getElementById("trackingRange");
  const sizeOutput = document.getElementById("sizeOutput");
  const weightOutput = document.getElementById("weightOutput");
  const trackingOutput = document.getElementById("trackingOutput");
  const fontCounter = document.getElementById("fontCounter");
  const filterChips = document.querySelectorAll(".filter-chip");
  const layoutBtns = document.querySelectorAll(".layout-btn");
  const localFontInput = document.getElementById("localFontInput");

  let activeCategory = "all";

  function renderDirectory() {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = FONTS.filter((f) => {
      const catMatch =
        activeCategory === "all"
          ? !f.isLocalSlot || activeCategory === "local"
          : f.category === activeCategory;
      const searchMatch =
        f.name.toLowerCase().includes(query) ||
        f.source.toLowerCase().includes(query);
      return catMatch && searchMatch;
    });

    fontGrid.innerHTML = "";
    fontCounter.textContent = `${filtered.length} ${filtered.length === 1 ? "font" : "fonts"}`;

    filtered.forEach((font) => {
      const card = document.createElement("article");
      card.className = "specimen-card";

      const actionHtml = font.isLocalSlot
        ? `<button type="button" class="util-btn attach-local-btn">Load .woff2/.ttf File</button>`
        : `<a href="${font.downloadUrl}" target="_blank" rel="noopener noreferrer" class="util-btn">Download &nearr;</a>`;

      card.innerHTML = `
        <div class="card-top">
          <div class="card-identity">
            <h2 class="card-font-title">${font.name}</h2>
            <span class="meta-pill">${font.source}</span>
            <span class="meta-pill">${font.weights}</span>
          </div>
          <div class="card-utilities">
            <button type="button" class="util-btn copy-family-btn">Copy CSS</button>
            <button type="button" class="util-btn copy-import-btn">Copy @import</button>
            <button type="button" class="util-btn inspect-btn">Inspect</button>
            ${actionHtml}
          </div>
        </div>

        <div class="specimen-editable" contenteditable="true" spellcheck="false" style="
          font-family: ${font.family};
          font-size: ${sizeRange.value}px;
          font-weight: ${weightRange.value};
          letter-spacing: ${trackingRange.value}em;
        ">${previewInput.value}</div>

        <div class="inspector-drawer" style="font-family: ${font.family};">
          <div>
            <div class="drawer-label" style="font-family: var(--font-ui);">Weight Waterfall</div>
            <div class="weight-waterfall">
              <div class="waterfall-row" style="font-weight: 300;"><span class="waterfall-tag">300</span> Pack my box with five dozen liquor jugs</div>
              <div class="waterfall-row" style="font-weight: 400;"><span class="waterfall-tag">400</span> Pack my box with five dozen liquor jugs</div>
              <div class="waterfall-row" style="font-weight: 500;"><span class="waterfall-tag">500</span> Pack my box with five dozen liquor jugs</div>
              <div class="waterfall-row" style="font-weight: 700;"><span class="waterfall-tag">700</span> Pack my box with five dozen liquor jugs</div>
              <div class="waterfall-row" style="font-weight: 800;"><span class="waterfall-tag">800</span> Pack my box with five dozen liquor jugs</div>
            </div>
          </div>
          <div>
            <div class="drawer-label" style="font-family: var(--font-ui);">Character Map</div>
            <div class="glyph-matrix">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
              abcdefghijklmnopqrstuvwxyz<br>
              0123456789 !@#$%^&amp;*()_+-=[]{}|;:'",.&lt;&gt;?
            </div>
          </div>
        </div>
      `;

      card.querySelector(".copy-family-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(`font-family: ${font.family};`);
        notify(`Copied font-family: ${font.name}`);
      });

      card.querySelector(".copy-import-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(font.cssImport);
        notify(`Copied import rule for ${font.name}`);
      });

      const drawer = card.querySelector(".inspector-drawer");
      card.querySelector(".inspect-btn").addEventListener("click", () => {
        drawer.classList.toggle("open");
      });

      const attachBtn = card.querySelector(".attach-local-btn");
      if (attachBtn) {
        attachBtn.addEventListener("click", () => {
          localFontInput.dataset.targetFont = font.name;
          localFontInput.click();
        });
      }

      fontGrid.appendChild(card);
    });
  }

  // Real-Time Sliders & Text Sync
  function updateLiveSpecimens() {
    sizeOutput.textContent = `${sizeRange.value}px`;
    weightOutput.textContent = weightRange.value;
    trackingOutput.textContent = `${trackingRange.value}em`;

    document.querySelectorAll(".specimen-editable").forEach((el) => {
      el.style.fontSize = `${sizeRange.value}px`;
      el.style.fontWeight = weightRange.value;
      el.style.letterSpacing = `${trackingRange.value}em`;
    });
  }

  previewInput.addEventListener("input", () => {
    const text = previewInput.value || " ";
    document.querySelectorAll(".specimen-editable").forEach((el) => {
      el.textContent = text;
    });
  });

  sizeRange.addEventListener("input", updateLiveSpecimens);
  weightRange.addEventListener("input", updateLiveSpecimens);
  trackingRange.addEventListener("input", updateLiveSpecimens);
  searchInput.addEventListener("input", renderDirectory);

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      renderDirectory();
    });
  });

  layoutBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      layoutBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.view;
      fontGrid.className = view === "grid" ? "font-grid-view" : "font-list-view";
    });
  });

  // Load any local .woff2 / .ttf / .otf file directly into the browser via FontFace API
  if (localFontInput) {
    localFontInput.addEventListener("change", async (e) => {
      const files = Array.from(e.target.files || []);
      const targetFontName = localFontInput.dataset.targetFont || "";
      delete localFontInput.dataset.targetFont;

      for (const file of files) {
        try {
          const buffer = await file.arrayBuffer();
          const cleanName = targetFontName || file.name.replace(/\.(woff2?|ttf|otf)$/i, "");
          const fontFace = new FontFace(cleanName, buffer);
          await fontFace.load();
          document.fonts.add(fontFace);

          const existing = FONTS.find((f) => f.name.toLowerCase() === cleanName.toLowerCase());
          if (existing) {
            existing.isLocalSlot = false;
            existing.category = "display";
            existing.source = "Loaded Local File";
            existing.weights = file.name;
          } else {
            FONTS.unshift({
              name: cleanName,
              family: `'${cleanName}', sans-serif`,
              category: "display",
              source: "Loaded Local File",
              weights: file.name,
              cssImport: `@font-face { font-family: '${cleanName}'; src: url('fonts/${file.name}'); }`,
              downloadUrl: "#"
            });
          }
          notify(`Loaded ${cleanName}`);
        } catch (err) {
          notify(`Failed to load ${file.name}`);
        }
      }
      renderDirectory();
    });
  }

  renderDirectory();
}

/* ==========================================================================
   Initialize Page
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    initHomeStage();
  } else if (page === "directory") {
    initDirectoryPage();
  }
});
