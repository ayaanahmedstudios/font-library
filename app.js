/* ==========================================================================
   Verified Open Font Collection (Zero Unconfirmed Replacements)
   ========================================================================== */
const FONTS = [
  {
    name: "Atkinson Hyperlegible",
    family: "'Atkinson Hyperlegible', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Atkinson+Hyperlegible"
  },
  {
    name: "Bricolage Grotesque",
    family: "'Bricolage Grotesque', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque"
  },
  {
    name: "Cabinet Grotesk",
    family: "'Cabinet Grotesk', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/cabinet-grotesk"
  },
  {
    name: "Clash Display",
    family: "'Clash Display', sans-serif",
    category: "display",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/clash-display"
  },
  {
    name: "Clash Grotesk",
    family: "'Clash Grotesk', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/clash-grotesk"
  },
  {
    name: "Coconat",
    family: "'Coconat', sans-serif",
    category: "display",
    source: "Collletttivo",
    cssImport: "@font-face { font-family: 'Coconat'; src: url('https://cdn.jsdelivr.net/gh/collletttivo/coconat@master/fonts/webfonts/Coconat-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://www.collletttivo.it/typefaces/coconat"
  },
  {
    name: "Departure Mono",
    family: "'Departure Mono', monospace",
    category: "mono",
    source: "Helena Zhang",
    cssImport: "@font-face { font-family: 'Departure Mono'; src: url('https://cdn.jsdelivr.net/gh/rektdeckard/departure-mono@v1.422/DepartureMono-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://departuremono.com/"
  },
  {
    name: "DM Sans",
    family: "'DM Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/DM+Sans"
  },
  {
    name: "Doto",
    family: "'Doto', monospace",
    category: "mono",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Doto"
  },
  {
    name: "Elms Sans",
    family: "'Elms Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Elms+Sans"
  },
  {
    name: "Excon",
    family: "'Excon', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=excon@100,300,400,500,700,900,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/excon"
  },
  {
    name: "Geist",
    family: "'Geist', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Geist"
  },
  {
    name: "Geist Mono",
    family: "'Geist Mono', monospace",
    category: "mono",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Geist+Mono"
  },
  {
    name: "Geist Pixel",
    family: "'Geist Pixel', monospace",
    category: "mono",
    source: "Vercel",
    cssImport: "@font-face { font-family: 'Geist Pixel'; src: url('https://cdn.jsdelivr.net/npm/geist@1.7.0/dist/fonts/geist-pixel/GeistPixel-Square.woff2') format('woff2'); }",
    downloadUrl: "https://vercel.com/font"
  },
  {
    name: "General Sans",
    family: "'General Sans', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700,1,2&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/general-sans"
  },
  {
    name: "Melodrama",
    family: "'Melodrama', serif",
    category: "serif",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=melodrama@300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/melodrama"
  },
  {
    name: "Nunito",
    family: "'Nunito', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Nunito"
  },
  {
    name: "Ojuju",
    family: "'Ojuju', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Ojuju"
  },
  {
    name: "Parkinsans",
    family: "'Parkinsans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Parkinsans"
  },
  {
    name: "Poppins",
    family: "'Poppins', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Poppins"
  },
  {
    name: "Pretendard",
    family: "'Pretendard Variable', 'Pretendard', sans-serif",
    category: "sans",
    source: "GitHub CDN",
    cssImport: "@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');",
    downloadUrl: "https://github.com/orioncactus/pretendard"
  },
  {
    name: "Public Sans",
    family: "'Public Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Public+Sans"
  },
  {
    name: "Quicksand",
    family: "'Quicksand', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Quicksand"
  },
  {
    name: "Sekuya",
    family: "'Sekuya', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Sekuya&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Sekuya"
  },
  {
    name: "Stack Sans Headline",
    family: "'Stack Sans Headline', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Headline"
  },
  {
    name: "Stack Sans Notch",
    family: "'Stack Sans Notch', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Notch"
  },
  {
    name: "Stack Sans Text",
    family: "'Stack Sans Text', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Text"
  },
  {
    name: "Switzer",
    family: "'Switzer', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,800,900,1,2&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/switzer"
  },
  {
    name: "Tiny5",
    family: "'Tiny5', monospace",
    category: "mono",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Tiny5"
  },
  {
    name: "Unbounded",
    family: "'Unbounded', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Unbounded"
  },
  {
    name: "CM Geom",
    family: "'CM Geom'",
    category: "local",
    source: "Local File Slot",
    cssImport: "@font-face { font-family: 'CM Geom'; src: url('fonts/CMGeom.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocal: true
  },
  {
    name: "DT World Tour",
    family: "'DT World Tour'",
    category: "local",
    source: "Local File Slot",
    cssImport: "@font-face { font-family: 'DT World Tour'; src: url('fonts/DTWorldTour.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocal: true
  },
  {
    name: "FTGG",
    family: "'FTGG'",
    category: "local",
    source: "Local File Slot",
    cssImport: "@font-face { font-family: 'FTGG'; src: url('fonts/FTGG.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocal: true
  },
  {
    name: "Wistteria Sans",
    family: "'Wistteria Sans'",
    category: "local",
    source: "Local File Slot",
    cssImport: "@font-face { font-family: 'Wistteria Sans'; src: url('fonts/WistteriaSans.woff2') format('woff2'); }",
    downloadUrl: "",
    isLocal: true
  }
];

function showToast(text) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2000);
}

/* ==========================================================================
   HOME PAGE (`index.html`):
   GSAP 3 Expressive Text Choreography on "Font Library" (Set in Switzer)
   ========================================================================== */
function initGsapHome() {
  const hero = document.getElementById("gsapHero");
  if (!hero || typeof gsap === "undefined") return;

  // Split "Font Library" into 3D multi-layered character stages
  const words = ["Font", "Library"];
  hero.innerHTML = "";

  const stages = [];
  const primaries = [];
  const clones = [];
  const rings = [];

  words.forEach((word) => {
    const wordEl = document.createElement("span");
    wordEl.className = "gsap-word";

    for (const ch of word) {
      const stage = document.createElement("span");
      stage.className = "char-stage";

      stage.innerHTML = `
        <span class="char-ring" aria-hidden="true">${ch}</span>
        <span class="char-mask">
          <span class="char-primary">${ch}</span>
          <span class="char-clone" aria-hidden="true">${ch}</span>
        </span>
      `;

      wordEl.appendChild(stage);
      stages.push(stage);
      primaries.push(stage.querySelector(".char-primary"));
      clones.push(stage.querySelector(".char-clone"));
      rings.push(stage.querySelector(".char-ring"));
    }

    hero.appendChild(wordEl);
  });

  // Build the Master GSAP Showcase Timeline (loops continuously with varied acts)
  let masterTl;

  function playShowreel() {
    if (masterTl) masterTl.kill();

    gsap.set(stages, { rotationX: 0, rotationY: 0, rotationZ: 0, z: 0, x: 0, y: 0, skewX: 0, scale: 1 });
    gsap.set(primaries, { yPercent: 0, rotationZ: 0, scaleX: 1, scaleY: 1, fontWeight: 700 });
    gsap.set(clones, { yPercent: 115, opacity: 1 });
    gsap.set(rings, { opacity: 0, scale: 1, x: 0, y: 0 });

    masterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.4,
      defaults: { ease: "power4.out" }
    });

    // 1. Masked Slot-Reel Slam & Elastic Squash-Stretch Entry
    masterTl
      .fromTo(
        primaries,
        {
          yPercent: (i) => (i % 2 === 0 ? 120 : -120),
          scaleY: 2.1,
          scaleX: 0.6,
          fontWeight: 100
        },
        {
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          fontWeight: 800,
          duration: 1.15,
          stagger: { each: 0.045, from: "center" },
          ease: "elastic.out(1, 0.55)"
        },
        0
      )

      // 2. GSAP Signature Per-Character Stunts
      // 'F' (0) — 3D Doorway Hinge Swing + Weight Surge
      .to(
        stages[0],
        {
          rotationY: -55,
          x: -18,
          scale: 1.18,
          duration: 0.45,
          yoyo: true,
          repeat: 1,
          ease: "back.out(2)"
        },
        1.05
      )
      // 'o' (1) — Rubber-band Wide Pill Stretch & 360 Spin
      .to(
        primaries[1],
        {
          scaleX: 1.65,
          scaleY: 0.62,
          fontWeight: 900,
          duration: 0.35,
          ease: "power3.out"
        },
        1.15
      )
      .to(
        primaries[1],
        {
          scaleX: 1,
          scaleY: 1,
          rotationZ: 360,
          duration: 0.85,
          ease: "elastic.out(1.2, 0.4)"
        },
        1.5
      )
      // 'n' (2) & 't' (3) — Dual Vertical Slot-Machine Roll with Wireframe Clones
      .to(
        [primaries[2], primaries[3]],
        {
          yPercent: -115,
          duration: 0.55,
          stagger: 0.08,
          ease: "expo.inOut"
        },
        1.35
      )
      .to(
        [clones[2], clones[3]],
        {
          yPercent: -115,
          duration: 0.55,
          stagger: 0.08,
          ease: "expo.inOut"
        },
        1.35
      )
      .to(
        [primaries[2], primaries[3], clones[2], clones[3]],
        {
          yPercent: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "elastic.out(1, 0.6)"
        },
        1.95
      )
      // 'L' (4) — Gravity Anvil Drop & Squash
      .to(
        stages[4],
        {
          y: -65,
          rotationZ: -14,
          duration: 0.35,
          ease: "power2.out"
        },
        1.6
      )
      .to(
        stages[4],
        {
          y: 0,
          rotationZ: 0,
          scaleY: 0.62,
          scaleX: 1.38,
          duration: 0.22,
          ease: "power4.in"
        },
        1.95
      )
      .to(
        stages[4],
        {
          scaleY: 1,
          scaleX: 1,
          duration: 0.85,
          ease: "elastic.out(1.4, 0.35)"
        },
        2.17
      )
      // 'i' (5) — High-Velocity Vertical Pop
      .to(
        stages[5],
        {
          y: -48,
          scaleY: 1.45,
          duration: 0.35,
          yoyo: true,
          repeat: 1,
          ease: "circ.out"
        },
        2.05
      )
      // 'b' 'r' 'a' 'r' (6, 7, 8, 9) — 3D Domino Flip Wave + Outline Ghost Rings
      .to(
        [stages[6], stages[7], stages[8], stages[9]],
        {
          rotationX: 360,
          z: 95,
          duration: 0.95,
          stagger: 0.07,
          ease: "back.out(1.6)"
        },
        2.15
      )
      .to(
        [stages[6], stages[7], stages[8], stages[9]],
        {
          z: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out"
        },
        2.85
      )
      // 'y' (10) — Descender Whip & Italic Shear Snap
      .to(
        stages[10],
        {
          skewX: -28,
          y: 28,
          scaleY: 1.32,
          duration: 0.35,
          ease: "power3.out"
        },
        2.55
      )
      .to(
        stages[10],
        {
          skewX: 0,
          y: 0,
          scaleY: 1,
          rotationZ: 360,
          duration: 0.95,
          ease: "elastic.out(1.2, 0.4)"
        },
        2.9
      )

      // 3. Full-Word Variable Weight Ripple & Ghost Ring Expansion
      .to(
        primaries,
        {
          fontWeight: 100,
          scaleY: 1.16,
          letterSpacing: "0.02em",
          duration: 0.55,
          stagger: { each: 0.04, from: "start" },
          ease: "sine.inOut"
        },
        3.5
      )
      .to(
        rings,
        {
          opacity: 0.65,
          y: (i) => (i % 2 === 0 ? -24 : 24),
          scale: 1.18,
          duration: 0.5,
          stagger: { each: 0.04, from: "start" },
          ease: "power2.out"
        },
        3.5
      )
      .to(
        primaries,
        {
          fontWeight: 700,
          scaleY: 1,
          letterSpacing: "0em",
          duration: 0.85,
          stagger: { each: 0.04, from: "start" },
          ease: "elastic.out(1, 0.5)"
        },
        4.05
      )
      .to(
        rings,
        {
          opacity: 0,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: { each: 0.04, from: "start" },
          ease: "power3.inOut"
        },
        4.05
      );
  }

  playShowreel();

  // Interactive Cursor Proximity Weight & Magnetic Physics
  window.addEventListener("pointermove", (e) => {
    stages.forEach((stage, i) => {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const maxRadius = 260;

      if (dist < maxRadius) {
        const pull = 1 - dist / maxRadius;
        const targetWeight = Math.round(700 - pull * 550); // Morphs down to hairline 150 near pointer
        gsap.to(primaries[i], {
          fontWeight: targetWeight,
          y: -pull * 18,
          scaleY: 1 + pull * 0.18,
          duration: 0.35,
          overwrite: "auto",
          ease: "power2.out"
        });
      } else {
        gsap.to(primaries[i], {
          y: 0,
          scaleY: 1,
          duration: 0.6,
          overwrite: "auto",
          ease: "elastic.out(1, 0.5)"
        });
      }
    });
  });

  // Click Hero to Replay Full GSAP Sequence
  hero.addEventListener("click", () => {
    playShowreel();
  });
}

/* ==========================================================================
   LIBRARY PAGE (`fonts.html`):
   Minimal Big-Name Typographic Index + GSAP Expandable "Quick Brown Fox" Studio
   ========================================================================== */
function initLibraryIndex() {
  const listEl = document.getElementById("typeIndexList");
  const searchInput = document.getElementById("fontSearch");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const localFileInput = document.getElementById("localFontFile");

  if (!listEl) return;

  let activeCat = "all";
  let openRowElement = null;

  function renderIndex() {
    const query = (searchInput.value || "").trim().toLowerCase();

    const visibleFonts = FONTS.filter((font) => {
      const catMatch =
        activeCat === "all"
          ? !font.isLocal
          : activeCat === "local"
          ? Boolean(font.isLocal)
          : font.category === activeCat;
      const queryMatch =
        font.name.toLowerCase().includes(query) ||
        font.source.toLowerCase().includes(query);
      return catMatch && queryMatch;
    });

    listEl.innerHTML = "";
    openRowElement = null;

    visibleFonts.forEach((font, idx) => {
      const row = document.createElement("div");
      row.className = "type-row";

      const indexNumber = String(idx + 1).padStart(2, "0");
      const downloadAction = font.isLocal
        ? `<button type="button" class="ghost-btn load-slot-btn">Attach .woff2/.ttf</button>`
        : `<a href="${font.downloadUrl}" target="_blank" rel="noopener noreferrer" class="ghost-btn">Download &nearr;</a>`;

      row.innerHTML = `
        <button type="button" class="row-trigger" aria-expanded="false">
          <span class="row-index">${indexNumber}</span>
          <span class="row-display-name" style="font-family: ${font.family};">${font.name}</span>
          <span class="row-meta">
            <span class="row-source">${font.source}</span>
            <span class="row-plus">+</span>
          </span>
        </button>

        <div class="row-drawer">
          <div class="drawer-inner">
            <div class="fox-specimen" contenteditable="true" spellcheck="false" style="font-family: ${font.family};">
              The quick brown fox jumps over the lazy dog
            </div>

            <div class="glyph-line" style="font-family: ${font.family};">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&amp;*()
            </div>

            <div class="drawer-toolbar">
              <div class="inline-scrubbers">
                <label class="scrubber">
                  <span class="w-label">Wght 400</span>
                  <input type="range" class="w-range" min="100" max="900" step="50" value="400">
                </label>

                <label class="scrubber">
                  <span class="s-label">Size 42px</span>
                  <input type="range" class="s-range" min="20" max="96" value="42">
                </label>

                <label class="scrubber">
                  <span class="t-label">Track 0em</span>
                  <input type="range" class="t-range" min="-0.05" max="0.12" step="0.005" value="0">
                </label>
              </div>

              <div class="drawer-actions">
                <button type="button" class="ghost-btn copy-css-btn">Copy CSS</button>
                <button type="button" class="ghost-btn copy-import-btn">Copy @import</button>
                ${downloadAction}
              </div>
            </div>
          </div>
        </div>
      `;

      const trigger = row.querySelector(".row-trigger");
      const drawer = row.querySelector(".row-drawer");
      const foxSpecimen = row.querySelector(".fox-specimen");
      const wRange = row.querySelector(".w-range");
      const sRange = row.querySelector(".s-range");
      const tRange = row.querySelector(".t-range");
      const wLabel = row.querySelector(".w-label");
      const sLabel = row.querySelector(".s-label");
      const tLabel = row.querySelector(".t-label");

      // Click Row to Smoothly Open/Close "The quick brown fox..." Preview via GSAP
      trigger.addEventListener("click", () => {
        const isOpen = row.classList.contains("is-open");

        // Close previously open row
        if (openRowElement && openRowElement !== row) {
          const prevDrawer = openRowElement.querySelector(".row-drawer");
          openRowElement.classList.remove("is-open");
          openRowElement.querySelector(".row-trigger").setAttribute("aria-expanded", "false");
          gsap.to(prevDrawer, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut"
          });
        }

        if (isOpen) {
          row.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          gsap.to(drawer, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut"
          });
          openRowElement = null;
        } else {
          row.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          gsap.set(drawer, { height: "auto" });
          const targetHeight = drawer.offsetHeight;
          gsap.fromTo(
            drawer,
            { height: 0, opacity: 0 },
            {
              height: targetHeight,
              opacity: 1,
              duration: 0.5,
              ease: "expo.out",
              onComplete: () => gsap.set(drawer, { height: "auto" })
            }
          );
          gsap.fromTo(
            foxSpecimen,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, delay: 0.08, ease: "power3.out" }
          );
          openRowElement = row;
        }
      });

      // Inline Scrubbers for this Font
      wRange.addEventListener("input", () => {
        foxSpecimen.style.fontWeight = wRange.value;
        wLabel.textContent = `Wght ${wRange.value}`;
      });

      sRange.addEventListener("input", () => {
        foxSpecimen.style.fontSize = `${sRange.value}px`;
        sLabel.textContent = `Size ${sRange.value}px`;
      });

      tRange.addEventListener("input", () => {
        foxSpecimen.style.letterSpacing = `${tRange.value}em`;
        tLabel.textContent = `Track ${tRange.value}em`;
      });

      // Copy & Local Slot Actions
      row.querySelector(".copy-css-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(`font-family: ${font.family};`);
        showToast(`Copied ${font.name} CSS`);
      });

      row.querySelector(".copy-import-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(font.cssImport);
        showToast(`Copied ${font.name} @import`);
      });

      const slotBtn = row.querySelector(".load-slot-btn");
      if (slotBtn && localFileInput) {
        slotBtn.addEventListener("click", () => {
          localFileInput.dataset.slotName = font.name;
          localFileInput.click();
        });
      }

      listEl.appendChild(row);
    });

    // Subtle GSAP Stagger Reveal on Initial Render
    gsap.fromTo(
      ".type-row",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.02, ease: "power2.out" }
    );
  }

  searchInput.addEventListener("input", renderIndex);

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCat = btn.dataset.cat;
      renderIndex();
    });
  });

  if (localFileInput) {
    localFileInput.addEventListener("change", async (e) => {
      const files = Array.from(e.target.files || []);
      const slotName = localFileInput.dataset.slotName || "";
      delete localFileInput.dataset.slotName;

      for (const file of files) {
        try {
          const buf = await file.arrayBuffer();
          const familyName = slotName || file.name.replace(/\.(woff2?|ttf|otf)$/i, "");
          const face = new FontFace(familyName, buf);
          await face.load();
          document.fonts.add(face);

          const match = FONTS.find((f) => f.name.toLowerCase() === familyName.toLowerCase());
          if (match) {
            match.isLocal = false;
            match.category = "display";
            match.source = "Local File Loaded";
          } else {
            FONTS.unshift({
              name: familyName,
              family: `'${familyName}', sans-serif`,
              category: "display",
              source: "Local File Loaded",
              cssImport: `@font-face { font-family: '${familyName}'; src: url('fonts/${file.name}'); }`,
              downloadUrl: "#"
            });
          }
          showToast(`Loaded ${familyName}`);
        } catch (err) {
          showToast(`Could not load ${file.name}`);
        }
      }
      renderIndex();
    });
  }

  renderIndex();
}

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    initGsapHome();
  } else if (page === "library") {
    initLibraryIndex();
  }
});
