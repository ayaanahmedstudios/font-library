const FONTS = [
  {
    name: "Atkinson Hyperlegible",
    family: "'Atkinson Hyperlegible', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Atkinson+Hyperlegible"
  },
  {
    name: "Bricolage Grotesque",
    family: "'Bricolage Grotesque', 'General Sans', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque"
  },
  {
    name: "Cabinet Grotesk",
    family: "'Cabinet Grotesk', 'General Sans', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/cabinet-grotesk"
  },
  {
    name: "Clash Display",
    family: "'Clash Display', 'General Sans', sans-serif",
    category: "display",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/clash-display"
  },
  {
    name: "Clash Grotesk",
    family: "'Clash Grotesk', 'General Sans', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/clash-grotesk"
  },
  {
    name: "CM Geom",
    family: "'CM Geom', 'General Sans', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'CM Geom'; src: url('fonts/CMGeom.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
  },
  {
    name: "Coconat",
    family: "'Coconat', 'General Sans', sans-serif",
    category: "display",
    source: "Collletttivo Foundry",
    cssImport: "@font-face { font-family: 'Coconat'; src: url('https://cdn.jsdelivr.net/gh/collletttivo/coconat@master/fonts/webfonts/Coconat-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://www.collletttivo.it/typefaces/coconat",
    isCustomGroup: true
  },
  {
    name: "Departure Mono",
    family: "'Departure Mono', 'Geist Mono', monospace",
    category: "mono",
    source: "Helena Zhang",
    cssImport: "@font-face { font-family: 'Departure Mono'; src: url('https://cdn.jsdelivr.net/gh/rektdeckard/departure-mono@v1.422/DepartureMono-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://departuremono.com/",
    isCustomGroup: true
  },
  {
    name: "DM Sans",
    family: "'DM Sans', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/DM+Sans"
  },
  {
    name: "Doto",
    family: "'Doto', 'Geist Mono', monospace",
    category: "mono",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Doto"
  },
  {
    name: "DT World Tour",
    family: "'DT World Tour', 'General Sans', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'DT World Tour'; src: url('fonts/DTWorldTour.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
  },
  {
    name: "Elms Sans",
    family: "'Elms Sans', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Elms+Sans"
  },
  {
    name: "Excon",
    family: "'Excon', 'General Sans', sans-serif",
    category: "sans",
    source: "Fontshare",
    cssImport: "@import url('https://api.fontshare.com/v2/css?f[]=excon@100,300,400,500,700,900,1&display=swap');",
    downloadUrl: "https://www.fontshare.com/fonts/excon"
  },
  {
    name: "FTGG",
    family: "'FTGG', 'General Sans', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'FTGG'; src: url('fonts/FTGG.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
  },
  {
    name: "Futura",
    family: "'Futura Std', 'Futura', 'General Sans', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/futura-std-4');",
    downloadUrl: "https://fonts.cdnfonts.com/futura-std-4.font",
    allowLocalUpload: true
  },
  {
    name: "Geist",
    family: "'Geist', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts / Vercel",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Geist"
  },
  {
    name: "Geist Mono",
    family: "'Geist Mono', monospace",
    category: "mono",
    source: "Google Fonts / Vercel",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Geist+Mono"
  },
  {
    name: "Geist Pixel",
    family: "'Geist Pixel', 'Geist Mono', monospace",
    category: "mono",
    source: "Vercel",
    cssImport: "@font-face { font-family: 'Geist Pixel'; src: url('https://cdn.jsdelivr.net/npm/geist@1.7.0/dist/fonts/geist-pixel/GeistPixel-Square.woff2') format('woff2'); }",
    downloadUrl: "https://vercel.com/font",
    isCustomGroup: true
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
    name: "Lemon/Milk",
    family: "'LEMON MILK', 'General Sans', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/lemonmilk');",
    downloadUrl: "https://fonts.cdnfonts.com/lemonmilk.font",
    allowLocalUpload: true
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
    family: "'Nunito', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Nunito"
  },
  {
    name: "Ojuju",
    family: "'Ojuju', 'General Sans', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Ojuju"
  },
  {
    name: "Parkinsans",
    family: "'Parkinsans', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Parkinsans"
  },
  {
    name: "Poppins",
    family: "'Poppins', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Poppins"
  },
  {
    name: "Pretendard",
    family: "'Pretendard Variable', 'Pretendard', 'General Sans', sans-serif",
    category: "sans",
    source: "GitHub CDN",
    cssImport: "@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');",
    downloadUrl: "https://github.com/orioncactus/pretendard",
    isCustomGroup: true
  },
  {
    name: "Product Sans",
    family: "'Product Sans', 'General Sans', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/google-sans');",
    downloadUrl: "https://fonts.cdnfonts.com/google-sans.font",
    allowLocalUpload: true
  },
  {
    name: "Proxima Nova",
    family: "'Proxima Nova', 'General Sans', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');",
    downloadUrl: "https://fonts.cdnfonts.com/proxima-nova-2.font",
    allowLocalUpload: true
  },
  {
    name: "Public Sans",
    family: "'Public Sans', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Public+Sans"
  },
  {
    name: "Quicksand",
    family: "'Quicksand', 'General Sans', sans-serif",
    category: "sans",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Quicksand"
  },
  {
    name: "Sekuya",
    family: "'Sekuya', 'General Sans', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Sekuya&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Sekuya"
  },
  {
    name: "Stack Sans Headline",
    family: "'Stack Sans Headline', 'General Sans', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Headline"
  },
  {
    name: "Stack Sans Notch",
    family: "'Stack Sans Notch', 'General Sans', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Stack+Sans+Notch"
  },
  {
    name: "Stack Sans Text",
    family: "'Stack Sans Text', 'General Sans', sans-serif",
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
    family: "'Tiny5', 'Geist Mono', monospace",
    category: "mono",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Tiny5"
  },
  {
    name: "Unbounded",
    family: "'Unbounded', 'General Sans', sans-serif",
    category: "display",
    source: "Google Fonts",
    cssImport: "@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');",
    downloadUrl: "https://fonts.google.com/specimen/Unbounded"
  },
  {
    name: "Wistteria Sans",
    family: "'Wistteria Sans', 'General Sans', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'Wistteria Sans'; src: url('fonts/WistteriaSans.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
  }
];

function showToast(text) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function initGsapHome() {
  const hero = document.getElementById("gsapHero");
  const rig = document.getElementById("titleCardRig");
  if (!hero || typeof gsap === "undefined") return;

  hero.innerHTML = "";
  const words = ["Font", "Library"];
  const units = [];
  const mains = [];
  const echoGreens = [];
  const echoCyans = [];
  let bezierBox = null;
  let sparkEl = null;

  words.forEach((word, wIdx) => {
    const wordEl = document.createElement("span");
    wordEl.className = "gsap-word";

    for (let cIdx = 0; cIdx < word.length; cIdx++) {
      const ch = word[cIdx];
      const globalIdx = units.length;
      const unit = document.createElement("span");
      unit.className = "char-unit";

      const isFirstF = globalIdx === 0;
      const bezierHtml = isFirstF
        ? `<span class="bezier-frame" id="bezierFrame">
             <span class="bezier-node tl"></span>
             <span class="bezier-node tr"></span>
             <span class="bezier-node bl"></span>
             <span class="bezier-node br"></span>
           </span>`
        : "";

      unit.innerHTML = `
        ${bezierHtml}
        <span class="char-echo echo-cyan" aria-hidden="true">${ch}</span>
        <span class="char-echo echo-green" aria-hidden="true">${ch}</span>
        <span class="char-main">${ch}</span>
      `;

      wordEl.appendChild(unit);
      units.push(unit);
      mains.push(unit.querySelector(".char-main"));
      echoGreens.push(unit.querySelector(".echo-green"));
      echoCyans.push(unit.querySelector(".echo-cyan"));
    }

    hero.appendChild(wordEl);

    if (wIdx === 0) {
      sparkEl = document.createElement("span");
      sparkEl.className = "kinetic-spark";
      sparkEl.innerHTML = `
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C33.8 18.2 45.8 30.2 64 32C45.8 33.8 33.8 45.8 32 64C30.2 45.8 18.2 33.8 0 32C18.2 30.2 30.2 18.2 32 0Z" fill="#0AE448"/>
        </svg>
      `;
      hero.appendChild(sparkEl);
    }
  });

  bezierBox = document.getElementById("bezierFrame");

  let masterTl;

  function playTitleCardShowpiece() {
    if (masterTl) masterTl.kill();

    gsap.set(units, { x: 0, y: 0, z: 0, rotationX: 0, rotationY: 0, rotationZ: 0, skewX: 0, scaleX: 1, scaleY: 1 });
    gsap.set(mains, { x: 0, y: 0, scaleX: 1, scaleY: 1, rotationZ: 0, fontWeight: 800, color: "#F5F7FA", opacity: 1 });
    gsap.set([echoGreens, echoCyans], { x: 0, y: 0, z: 0, scale: 1, opacity: 0 });
    if (bezierBox) gsap.set(bezierBox, { opacity: 0, scale: 0.85 });
    if (sparkEl) gsap.set(sparkEl, { scale: 0, rotation: -180, opacity: 0 });

    masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

    masterTl
      .fromTo(
        units,
        {
          z: -600,
          y: (i) => (i % 2 === 0 ? -110 : 110),
          rotationX: (i) => (i % 2 === 0 ? 90 : -90),
          rotationY: -35,
          opacity: 0
        },
        {
          z: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          duration: 1.25,
          stagger: { each: 0.048, from: "center" },
          ease: "elastic.out(1.08, 0.52)"
        },
        0
      )
      .fromTo(
        echoGreens,
        { opacity: 0.9, y: (i) => (i % 2 === 0 ? -42 : 42), scale: 1.22 },
        { opacity: 0, y: 0, scale: 1, duration: 0.9, stagger: { each: 0.048, from: "center" }, ease: "power3.out" },
        0.08
      )
      .fromTo(
        echoCyans,
        { opacity: 0.75, y: (i) => (i % 2 === 0 ? 52 : -52), scale: 1.35 },
        { opacity: 0, y: 0, scale: 1, duration: 1.05, stagger: { each: 0.048, from: "center" }, ease: "power3.out" },
        0.12
      )
      .to(
        sparkEl,
        { scale: 1.25, rotation: 0, opacity: 1, duration: 0.7, ease: "back.out(2.2)" },
        0.55
      )
      .to(
        sparkEl,
        { scale: 0.9, rotation: 90, duration: 0.5, ease: "expo.out" },
        1.25
      )
      .to(
        bezierBox,
        { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" },
        1.2
      )
      .to(
        [units[0], mains[0]],
        {
          scaleX: 1.36,
          scaleY: 0.76,
          x: -10,
          duration: 0.38,
          ease: "power3.inOut"
        },
        1.45
      )
      .to(
        [units[0], mains[0]],
        {
          scaleX: 0.84,
          scaleY: 1.32,
          x: 0,
          y: -14,
          duration: 0.34,
          ease: "power3.inOut"
        },
        1.83
      )
      .to(
        [units[0], mains[0]],
        {
          scaleX: 1,
          scaleY: 1,
          y: 0,
          duration: 0.85,
          ease: "elastic.out(1.3, 0.38)"
        },
        2.17
      )
      .to(
        bezierBox,
        { opacity: 0, scale: 1.15, duration: 0.3, ease: "power2.in" },
        2.45
      )
      .to(
        units[1],
        {
          rotationY: 360,
          scale: 1.28,
          duration: 0.9,
          ease: "expo.inOut"
        },
        1.65
      )
      .to(
        mains[1],
        { color: "#0AE448", duration: 0.3, yoyo: true, repeat: 1 },
        1.65
      )
      .to(
        units[1],
        { scale: 1, duration: 0.45, ease: "back.out(2)" },
        2.35
      )
      .to(
        [units[2], units[3]],
        {
          rotationX: -360,
          z: 80,
          duration: 0.95,
          stagger: 0.08,
          ease: "back.inOut(1.7)"
        },
        1.85
      )
      .to(
        [units[2], units[3]],
        {
          z: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out"
        },
        2.6
      )
      .to(
        sparkEl,
        {
          rotation: 450,
          scale: 1.55,
          duration: 0.55,
          ease: "expo.out"
        },
        2.35
      )
      .to(
        sparkEl,
        {
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1.2, 0.4)"
        },
        2.9
      )
      .to(
        units[4],
        {
          y: -60,
          rotationZ: -16,
          duration: 0.34,
          ease: "power2.out"
        },
        2.35
      )
      .to(
        units[4],
        {
          y: 0,
          rotationZ: 0,
          scaleY: 0.58,
          scaleX: 1.38,
          duration: 0.2,
          ease: "power4.in"
        },
        2.69
      )
      .to(
        units[4],
        {
          scaleY: 1,
          scaleX: 1,
          duration: 0.9,
          ease: "elastic.out(1.4, 0.35)"
        },
        2.89
      )
      .to(
        units[5],
        {
          scaleY: 0.5,
          scaleX: 1.35,
          y: 14,
          duration: 0.22,
          ease: "power2.in"
        },
        2.55
      )
      .to(
        units[5],
        {
          scaleY: 1.35,
          scaleX: 0.85,
          y: -54,
          rotationY: 360,
          duration: 0.55,
          ease: "expo.out"
        },
        2.77
      )
      .to(
        units[5],
        {
          scaleY: 1,
          scaleX: 1,
          y: 0,
          duration: 0.85,
          ease: "bounce.out"
        },
        3.32
      )
      .to(
        [units[6], units[7], units[8], units[9]],
        {
          y: -26,
          rotationY: 180,
          skewX: -14,
          duration: 0.48,
          stagger: 0.06,
          ease: "power3.out"
        },
        2.75
      )
      .to(
        [units[6], units[7], units[8], units[9]],
        {
          y: 0,
          rotationY: 360,
          skewX: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: "elastic.out(1.15, 0.45)"
        },
        3.23
      )
      .to(
        units[10],
        {
          rotationZ: -28,
          y: -22,
          scale: 1.24,
          duration: 0.38,
          ease: "back.out(2)"
        },
        3.05
      )
      .to(
        mains[10],
        { color: "#00E5FF", duration: 0.35, yoyo: true, repeat: 1 },
        3.05
      )
      .to(
        units[10],
        {
          rotationZ: 0,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: "elastic.out(1.3, 0.36)"
        },
        3.43
      )
      .to(
        mains,
        {
          fontWeight: 100,
          y: -18,
          scaleY: 1.15,
          color: "#0AE448",
          duration: 0.48,
          stagger: { each: 0.038, from: "start" },
          ease: "sine.inOut"
        },
        4.15
      )
      .to(
        echoGreens,
        {
          opacity: 0.8,
          y: 18,
          z: -45,
          duration: 0.48,
          stagger: { each: 0.038, from: "start" },
          ease: "sine.inOut"
        },
        4.15
      )
      .to(
        echoCyans,
        {
          opacity: 0.6,
          y: 34,
          z: -90,
          duration: 0.48,
          stagger: { each: 0.038, from: "start" },
          ease: "sine.inOut"
        },
        4.15
      )
      .to(
        mains,
        {
          fontWeight: 800,
          y: 0,
          scaleY: 1,
          color: "#F5F7FA",
          duration: 0.85,
          stagger: { each: 0.038, from: "start" },
          ease: "elastic.out(1.15, 0.45)"
        },
        4.63
      )
      .to(
        [echoGreens, echoCyans],
        {
          opacity: 0,
          y: 0,
          z: 0,
          duration: 0.55,
          stagger: { each: 0.038, from: "start" },
          ease: "power3.out"
        },
        4.63
      );
  }

  document.fonts.ready.then(() => {
    playTitleCardShowpiece();
  });

  const rigRotX = gsap.quickTo(rig, "rotationX", { duration: 0.5, ease: "power3.out" });
  const rigRotY = gsap.quickTo(rig, "rotationY", { duration: 0.5, ease: "power3.out" });

  window.addEventListener("pointermove", (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    rigRotY(nx * 12);
    rigRotX(-ny * 10);
  });

  units.forEach((unit, idx) => {
    unit.addEventListener("pointerenter", () => {
      gsap.to(mains[idx], {
        y: -22,
        scaleY: 1.24,
        scaleX: 0.9,
        color: idx % 2 === 0 ? "#0AE448" : "#00E5FF",
        duration: 0.35,
        overwrite: "auto",
        ease: "back.out(2.2)"
      });
      gsap.to(echoGreens[idx], {
        opacity: 0.85,
        y: 12,
        duration: 0.3,
        overwrite: "auto"
      });
    });

    unit.addEventListener("pointerleave", () => {
      gsap.to(mains[idx], {
        y: 0,
        scaleY: 1,
        scaleX: 1,
        color: "#F5F7FA",
        duration: 0.65,
        overwrite: "auto",
        ease: "elastic.out(1.2, 0.4)"
      });
      gsap.to(echoGreens[idx], {
        opacity: 0,
        y: 0,
        duration: 0.35,
        overwrite: "auto"
      });
    });
  });

  hero.addEventListener("click", () => {
    playTitleCardShowpiece();
  });
}

function initLibraryIndex() {
  const listEl = document.getElementById("typeIndexList");
  const searchInput = document.getElementById("fontSearch");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabGlider = document.getElementById("tabGlider");
  const localFileInput = document.getElementById("localFontFile");

  if (!listEl) return;

  let activeCat = "all";
  let openRowElement = null;
  let typingTimers = [];
  let rowObserver = null;

  function moveTabGlider(targetBtn, immediate = false) {
    if (!tabGlider || !targetBtn) return;
    const x = targetBtn.offsetLeft;
    const w = targetBtn.offsetWidth;
    if (immediate) {
      gsap.set(tabGlider, { x, width: w });
    } else {
      gsap.to(tabGlider, {
        x,
        width: w,
        duration: 0.45,
        ease: "expo.out"
      });
    }
  }

  const initialActiveTab = document.querySelector(".tab-btn.active");
  if (initialActiveTab) {
    moveTabGlider(initialActiveTab, true);
  }

  window.addEventListener("resize", () => {
    const currentActive = document.querySelector(".tab-btn.active");
    if (currentActive) moveTabGlider(currentActive, true);
  });

  function clearTypingTimers() {
    typingTimers.forEach((id) => clearTimeout(id));
    typingTimers = [];
    if (rowObserver) {
      rowObserver.disconnect();
      rowObserver = null;
    }
  }

  function typeTextNaturally(textNode, cursorNode, fullText, initialWait) {
    let charIndex = 0;

    const startId = setTimeout(() => {
      function nextKeystroke() {
        charIndex++;
        textNode.textContent = fullText.slice(0, charIndex);

        if (charIndex < fullText.length) {
          const naturalKeystrokeDelay = 82 + Math.floor(Math.random() * 48);
          const timerId = setTimeout(nextKeystroke, naturalKeystrokeDelay);
          typingTimers.push(timerId);
        } else {
          const finishId = setTimeout(() => {
            cursorNode.classList.add("done");
          }, 650);
          typingTimers.push(finishId);
        }
      }
      nextKeystroke();
    }, initialWait);

    typingTimers.push(startId);
  }

  function renderIndex(animateTypewriter = true) {
    clearTypingTimers();
    const query = (searchInput.value || "").trim().toLowerCase();

    const visibleFonts = FONTS.filter((font) => {
      const catMatch =
        activeCat === "all"
          ? true
          : activeCat === "custom"
          ? font.category === "custom" || Boolean(font.isCustomGroup) || Boolean(font.allowLocalUpload)
          : font.category === activeCat;
      const queryMatch =
        font.name.toLowerCase().includes(query) ||
        font.source.toLowerCase().includes(query);
      return catMatch && queryMatch;
    });

    listEl.innerHTML = "";
    openRowElement = null;

    if (animateTypewriter && "IntersectionObserver" in window) {
      rowObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const row = entry.target;
              rowObserver.unobserve(row);
              const typedTextEl = row.querySelector(".typed-text");
              const typedCursorEl = row.querySelector(".typed-cursor");
              const fontName = row.dataset.fontName || "";
              const staggerOrder = Number(row.dataset.order || 0) % 5;
              typeTextNaturally(typedTextEl, typedCursorEl, fontName, 120 + staggerOrder * 95);
            }
          });
        },
        { threshold: 0.15 }
      );
    }

    visibleFonts.forEach((font, idx) => {
      const row = document.createElement("div");
      row.className = "type-row";
      row.dataset.fontName = font.name;
      row.dataset.order = idx;

      const uploadBtnHtml = font.allowLocalUpload
        ? `<button type="button" class="studio-btn load-slot-btn"><i class="ph-bold ph-upload-simple"></i> Attach Local File</button>`
        : "";

      const downloadBtnHtml = font.downloadUrl
        ? `<a href="${font.downloadUrl}" target="_blank" rel="noopener noreferrer" class="studio-btn primary-action"><i class="ph-bold ph-download-simple"></i> Download / Source</a>`
        : "";

      row.innerHTML = `
        <button type="button" class="row-trigger" aria-expanded="false">
          <span class="row-display-name" style="font-family: ${font.family};">
            <span class="typed-text"></span><span class="typed-cursor"></span>
          </span>
          <span class="row-meta">
            <span class="row-badge">${font.source}</span>
            <span class="row-toggle-icon"><i class="ph-bold ph-plus"></i></span>
          </span>
        </button>

        <div class="row-drawer">
          <div class="studio-panel">
            <div class="specimen-stage-box">
              <div class="stage-top-bar">
                <span class="stage-caption"><i class="ph-bold ph-pencil-simple"></i> Click specimen text below to edit live</span>
                <div class="weight-pills">
                  <button type="button" class="weight-pill" data-w="300">Light 300</button>
                  <button type="button" class="weight-pill active" data-w="400">Regular 400</button>
                  <button type="button" class="weight-pill" data-w="500">Medium 500</button>
                  <button type="button" class="weight-pill" data-w="700">Bold 700</button>
                  <button type="button" class="weight-pill" data-w="800">Heavy 800</button>
                </div>
              </div>

              <div class="fox-specimen" contenteditable="true" spellcheck="false" style="font-family: ${font.family};">The quick brown fox jumps over the lazy dog</div>
            </div>

            <div class="controls-grid">
              <label class="control-card">
                <div class="control-header">
                  <span class="control-name">Weight</span>
                  <span class="control-val w-val">400</span>
                </div>
                <input type="range" class="w-range" min="100" max="900" step="50" value="400">
              </label>

              <label class="control-card">
                <div class="control-header">
                  <span class="control-name">Font Size</span>
                  <span class="control-val s-val">48px</span>
                </div>
                <input type="range" class="s-range" min="20" max="110" value="48">
              </label>

              <label class="control-card">
                <div class="control-header">
                  <span class="control-name">Letter Spacing</span>
                  <span class="control-val t-val">0em</span>
                </div>
                <input type="range" class="t-range" min="-0.06" max="0.15" step="0.005" value="0">
              </label>
            </div>

            <div class="studio-bottom-grid">
              <div class="charset-box">
                <span class="box-heading">Character Set</span>
                <div class="glyph-showcase-text" style="font-family: ${font.family};">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
                  abcdefghijklmnopqrstuvwxyz<br>
                  0123456789 !@#$%^&amp;*()_+-=[]{}|;:'",.&lt;&gt;?
                </div>
              </div>

              <div class="actions-box">
                <div>
                  <span class="box-heading">CSS Usage</span>
                  <div class="code-preview" style="margin-top: 10px;">font-family: ${font.family};</div>
                </div>
                <div class="action-buttons-row">
                  <button type="button" class="studio-btn copy-css-btn"><i class="ph-bold ph-copy"></i> Copy CSS</button>
                  <button type="button" class="studio-btn copy-import-btn"><i class="ph-bold ph-code"></i> Copy @import</button>
                  ${uploadBtnHtml}
                  ${downloadBtnHtml}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const typedTextEl = row.querySelector(".typed-text");
      const typedCursorEl = row.querySelector(".typed-cursor");

      if (animateTypewriter && rowObserver) {
        rowObserver.observe(row);
      } else if (animateTypewriter) {
        typeTextNaturally(typedTextEl, typedCursorEl, font.name, idx * 95);
      } else {
        typedTextEl.textContent = font.name;
        typedCursorEl.classList.add("done");
      }

      const trigger = row.querySelector(".row-trigger");
      const drawer = row.querySelector(".row-drawer");
      const foxSpecimen = row.querySelector(".fox-specimen");
      const wRange = row.querySelector(".w-range");
      const sRange = row.querySelector(".s-range");
      const tRange = row.querySelector(".t-range");
      const wVal = row.querySelector(".w-val");
      const sVal = row.querySelector(".s-val");
      const tVal = row.querySelector(".t-val");
      const weightPills = row.querySelectorAll(".weight-pill");

      trigger.addEventListener("click", () => {
        typedTextEl.textContent = font.name;
        typedCursorEl.classList.add("done");

        const isOpen = row.classList.contains("is-open");

        if (openRowElement && openRowElement !== row) {
          const prevDrawer = openRowElement.querySelector(".row-drawer");
          openRowElement.classList.remove("is-open");
          openRowElement.querySelector(".row-trigger").setAttribute("aria-expanded", "false");
          gsap.to(prevDrawer, {
            height: 0,
            opacity: 0,
            duration: 0.36,
            ease: "power3.inOut"
          });
        }

        if (isOpen) {
          row.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          gsap.to(drawer, {
            height: 0,
            opacity: 0,
            duration: 0.36,
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
              duration: 0.46,
              ease: "expo.out",
              onComplete: () => gsap.set(drawer, { height: "auto" })
            }
          );
          gsap.fromTo(
            foxSpecimen,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.38, delay: 0.05, ease: "power3.out" }
          );
          openRowElement = row;
        }
      });

      wRange.addEventListener("input", () => {
        foxSpecimen.style.fontWeight = wRange.value;
        wVal.textContent = wRange.value;
        weightPills.forEach((p) => p.classList.toggle("active", p.dataset.w === wRange.value));
      });

      weightPills.forEach((pill) => {
        pill.addEventListener("click", () => {
          const weight = pill.dataset.w;
          wRange.value = weight;
          foxSpecimen.style.fontWeight = weight;
          wVal.textContent = weight;
          weightPills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
        });
      });

      sRange.addEventListener("input", () => {
        foxSpecimen.style.fontSize = `${sRange.value}px`;
        sVal.textContent = `${sRange.value}px`;
      });

      tRange.addEventListener("input", () => {
        foxSpecimen.style.letterSpacing = `${tRange.value}em`;
        tVal.textContent = `${tRange.value}em`;
      });

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
  }

  searchInput.addEventListener("input", () => renderIndex(false));

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      moveTabGlider(btn, false);
      activeCat = btn.dataset.cat;
      renderIndex(true);
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
            match.family = `'${familyName}', 'General Sans', sans-serif`;
            match.source = `Loaded (${file.name})`;
          } else {
            FONTS.unshift({
              name: familyName,
              family: `'${familyName}', 'General Sans', sans-serif`,
              category: "custom",
              source: `Loaded (${file.name})`,
              cssImport: `@font-face { font-family: '${familyName}'; src: url('fonts/${file.name}'); }`,
              downloadUrl: "",
              allowLocalUpload: true
            });
          }
          showToast(`Loaded ${familyName}`);
        } catch (err) {
          showToast(`Could not load ${file.name}`);
        }
      }
      renderIndex(false);
    });
  }

  renderIndex(true);
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    initGsapHome();
  } else if (page === "library") {
    initLibraryIndex();
  }
});
