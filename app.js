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
    name: "CM Geom",
    family: "'CM Geom', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'CM Geom'; src: url('fonts/CMGeom.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
  },
  {
    name: "Coconat",
    family: "'Coconat', sans-serif",
    category: "display",
    source: "Collletttivo Foundry",
    cssImport: "@font-face { font-family: 'Coconat'; src: url('https://cdn.jsdelivr.net/gh/collletttivo/coconat@master/fonts/webfonts/Coconat-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://www.collletttivo.it/typefaces/coconat",
    isCustomGroup: true
  },
  {
    name: "Departure Mono",
    family: "'Departure Mono', monospace",
    category: "mono",
    source: "Helena Zhang",
    cssImport: "@font-face { font-family: 'Departure Mono'; src: url('https://cdn.jsdelivr.net/gh/rektdeckard/departure-mono@v1.422/DepartureMono-Regular.woff2') format('woff2'); }",
    downloadUrl: "https://departuremono.com/",
    isCustomGroup: true
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
    name: "DT World Tour",
    family: "'DT World Tour', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'DT World Tour'; src: url('fonts/DTWorldTour.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
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
    name: "FTGG",
    family: "'FTGG', sans-serif",
    category: "custom",
    source: "Custom / Local Font",
    cssImport: "@font-face { font-family: 'FTGG'; src: url('fonts/FTGG.woff2') format('woff2'); }",
    downloadUrl: "",
    allowLocalUpload: true
  },
  {
    name: "Futura",
    family: "'Futura Std', 'Futura', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/futura-std-4');",
    downloadUrl: "https://fonts.cdnfonts.com/futura-std-4.font",
    allowLocalUpload: true
  },
  {
    name: "Geist",
    family: "'Geist', sans-serif",
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
    family: "'Geist Pixel', monospace",
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
    family: "'LEMON MILK', sans-serif",
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
    downloadUrl: "https://github.com/orioncactus/pretendard",
    isCustomGroup: true
  },
  {
    name: "Product Sans",
    family: "'Product Sans', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/google-sans');",
    downloadUrl: "https://fonts.cdnfonts.com/google-sans.font",
    allowLocalUpload: true
  },
  {
    name: "Proxima Nova",
    family: "'Proxima Nova', sans-serif",
    category: "custom",
    source: "Web CDN / Local",
    cssImport: "@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');",
    downloadUrl: "https://fonts.cdnfonts.com/proxima-nova-2.font",
    allowLocalUpload: true
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
    name: "Wistteria Sans",
    family: "'Wistteria Sans', sans-serif",
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
  const readout = document.getElementById("activeFontReadout");
  if (!hero || typeof gsap === "undefined") return;

  const showcaseFonts = [
    { name: "Switzer", family: "'Switzer', sans-serif", color: "#F8F9FA" },
    { name: "Clash Display", family: "'Clash Display', sans-serif", color: "#0AE448" },
    { name: "Melodrama", family: "'Melodrama', serif", color: "#00E5FF" },
    { name: "Departure Mono", family: "'Departure Mono', monospace", color: "#A855F7" },
    { name: "Unbounded", family: "'Unbounded', sans-serif", color: "#0AE448" },
    { name: "Doto", family: "'Doto', monospace", color: "#00E5FF" },
    { name: "Bricolage Grotesque", family: "'Bricolage Grotesque', sans-serif", color: "#F8F9FA" },
    { name: "Ojuju", family: "'Ojuju', sans-serif", color: "#0AE448" },
    { name: "Tiny5", family: "'Tiny5', monospace", color: "#00E5FF" },
    { name: "Coconat", family: "'Coconat', sans-serif", color: "#A855F7" },
    { name: "Stack Sans Notch", family: "'Stack Sans Notch', sans-serif", color: "#0AE448" },
    { name: "Sekuya", family: "'Sekuya', sans-serif", color: "#00E5FF" },
    { name: "Cabinet Grotesk", family: "'Cabinet Grotesk', sans-serif", color: "#F8F9FA" }
  ];

  const words = ["Font", "Library"];
  hero.innerHTML = "";

  const cells = [];
  const glyphs = [];

  words.forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "gsap-word";

    for (const ch of word) {
      const cell = document.createElement("span");
      cell.className = "char-cell";

      const glyph = document.createElement("span");
      glyph.className = "char-glyph";
      glyph.textContent = ch;

      cell.appendChild(glyph);
      wordSpan.appendChild(cell);

      cells.push(cell);
      glyphs.push(glyph);
    }

    hero.appendChild(wordSpan);
  });

  let masterTl;

  function buildGsapChoreography() {
    if (masterTl) masterTl.kill();

    gsap.set(cells, { x: 0, y: 0, z: 0, rotationX: 0, rotationY: 0, rotationZ: 0 });
    gsap.set(glyphs, {
      fontFamily: "'Switzer', sans-serif",
      fontWeight: 700,
      color: "#F8F9FA",
      scaleX: 1,
      scaleY: 1,
      rotationZ: 0,
      y: 0
    });
    if (readout) readout.textContent = "Switzer";

    masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1.1 });

    masterTl.fromTo(
      glyphs,
      {
        y: (i) => (i % 2 === 0 ? -70 : 70),
        rotationX: -90,
        scaleY: 1.8,
        opacity: 0
      },
      {
        y: 0,
        rotationX: 0,
        scaleY: 1,
        opacity: 1,
        duration: 1.1,
        stagger: { each: 0.045, from: "center" },
        ease: "elastic.out(1.1, 0.5)"
      }
    );

    const morphRounds = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];

    morphRounds.forEach((fontIdx, step) => {
      const targetFont = showcaseFonts[fontIdx];
      const startTime = 1.25 + step * 0.42;

      masterTl.add(() => {
        if (readout) readout.textContent = targetFont.name;
      }, startTime);

      glyphs.forEach((glyph, charIdx) => {
        const individualFont = showcaseFonts[(fontIdx + charIdx) % showcaseFonts.length];
        masterTl.to(
          glyph,
          {
            y: charIdx % 2 === 0 ? -18 : 18,
            scaleY: 1.22,
            scaleX: 0.88,
            rotationZ: charIdx % 2 === 0 ? -5 : 5,
            duration: 0.16,
            ease: "power2.out",
            onComplete: () => {
              glyph.style.fontFamily = individualFont.family;
              glyph.style.color = charIdx === (step % glyphs.length) ? individualFont.color : "#F8F9FA";
            }
          },
          startTime + charIdx * 0.018
        );

        masterTl.to(
          glyph,
          {
            y: 0,
            scaleY: 1,
            scaleX: 1,
            rotationZ: 0,
            duration: 0.24,
            ease: "back.out(2)"
          },
          startTime + 0.16 + charIdx * 0.018
        );
      });
    });

    const lockTime = 1.25 + morphRounds.length * 0.42 + 0.3;

    masterTl.add(() => {
      if (readout) readout.textContent = "Switzer";
    }, lockTime);

    masterTl.to(
      cells,
      {
        rotationY: 360,
        duration: 0.85,
        stagger: { each: 0.04, from: "start" },
        ease: "expo.out"
      },
      lockTime
    );

    masterTl.to(
      glyphs,
      {
        fontWeight: 700,
        color: "#F8F9FA",
        scaleX: 1,
        scaleY: 1,
        y: 0,
        rotationZ: 0,
        duration: 0.4,
        stagger: { each: 0.04, from: "start" },
        onStart: function () {
          glyphs.forEach((g) => {
            g.style.fontFamily = "'Switzer', sans-serif";
          });
        }
      },
      lockTime + 0.15
    );

    masterTl.to(
      glyphs,
      {
        fontWeight: 200,
        scaleY: 1.12,
        duration: 0.5,
        stagger: { each: 0.035, from: "center" },
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut"
      },
      lockTime + 1.1
    );
  }

  buildGsapChoreography();

  glyphs.forEach((glyph, idx) => {
    glyph.addEventListener("pointerenter", () => {
      const randomFont = showcaseFonts[(idx + Math.floor(Math.random() * (showcaseFonts.length - 1)) + 1) % showcaseFonts.length];
      glyph.style.fontFamily = randomFont.family;
      glyph.style.color = randomFont.color;
      if (readout) readout.textContent = randomFont.name;

      gsap.fromTo(
        glyph,
        { scale: 0.8, rotationZ: -8 },
        {
          scale: 1.22,
          y: -16,
          rotationZ: 0,
          duration: 0.5,
          overwrite: "auto",
          ease: "elastic.out(1.2, 0.4)"
        }
      );
    });

    glyph.addEventListener("pointerleave", () => {
      gsap.to(glyph, {
        scale: 1,
        y: 0,
        rotationZ: 0,
        duration: 0.45,
        overwrite: "auto",
        ease: "power3.out",
        onComplete: () => {
          glyph.style.fontFamily = "'Switzer', sans-serif";
          glyph.style.color = "#F8F9FA";
          if (readout) readout.textContent = "Switzer";
        }
      });
    });
  });

  hero.addEventListener("click", () => {
    buildGsapChoreography();
  });
}

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

    visibleFonts.forEach((font) => {
      const row = document.createElement("div");
      row.className = "type-row";

      const uploadBtnHtml = font.allowLocalUpload
        ? `<button type="button" class="studio-btn load-slot-btn"><i class="ph-bold ph-upload-simple"></i> Attach Local File</button>`
        : "";

      const downloadBtnHtml = font.downloadUrl
        ? `<a href="${font.downloadUrl}" target="_blank" rel="noopener noreferrer" class="studio-btn primary-action"><i class="ph-bold ph-download-simple"></i> Download / Source</a>`
        : "";

      row.innerHTML = `
        <button type="button" class="row-trigger" aria-expanded="false">
          <span class="row-display-name" style="font-family: ${font.family};">${font.name}</span>
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
        const isOpen = row.classList.contains("is-open");

        if (openRowElement && openRowElement !== row) {
          const prevDrawer = openRowElement.querySelector(".row-drawer");
          openRowElement.classList.remove("is-open");
          openRowElement.querySelector(".row-trigger").setAttribute("aria-expanded", "false");
          gsap.to(prevDrawer, {
            height: 0,
            opacity: 0,
            duration: 0.38,
            ease: "power3.inOut"
          });
        }

        if (isOpen) {
          row.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          gsap.to(drawer, {
            height: 0,
            opacity: 0,
            duration: 0.38,
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
              duration: 0.48,
              ease: "expo.out",
              onComplete: () => gsap.set(drawer, { height: "auto" })
            }
          );
          gsap.fromTo(
            foxSpecimen,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, delay: 0.06, ease: "power3.out" }
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

    gsap.fromTo(
      ".type-row",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.015, ease: "power2.out" }
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
            match.family = `'${familyName}', sans-serif`;
            match.source = `Loaded (${file.name})`;
          } else {
            FONTS.unshift({
              name: familyName,
              family: `'${familyName}', sans-serif`,
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
      renderIndex();
    });
  }

  renderIndex();
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    initGsapHome();
  } else if (page === "library") {
    initLibraryIndex();
  }
});
