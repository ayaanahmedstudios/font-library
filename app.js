const FONT_CATALOGUE = [
  {
    name: "Aktura",
    folder: "Aktura",
    category: "display",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/aktura",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: false,
    axes: [],
    files: [["Aktura-Regular.otf", 400, "normal"]]
  },
  {
    name: "Alan Sans",
    folder: "Alan Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Alan+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 400 }],
    files: [["AlanSans-VariableFont_wght.ttf", "300 900", "normal"]]
  },
  {
    name: "Alata",
    folder: "Alata",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Alata",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["Alata-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Archivo",
    folder: "Archivo",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Archivo",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 400 },
      { tag: "wdth", name: "Width", min: 62, max: 125, default: 100 }
    ],
    files: [
      ["Archivo-VariableFont_wdth,wght.ttf", "100 900", "normal"],
      ["Archivo-Italic-VariableFont_wdth,wght.ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Atkinson Hyperlegible",
    folder: "Atkinson Hyperlegible",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Atkinson+Hyperlegible",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["AtkinsonHyperlegible-Regular.ttf", 400, "normal"],
      ["AtkinsonHyperlegible-Italic.ttf", 400, "italic"],
      ["AtkinsonHyperlegible-Bold.ttf", 700, "normal"],
      ["AtkinsonHyperlegible-BoldItalic.ttf", 700, "italic"]
    ]
  },
  {
    name: "Author",
    folder: "Author Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/author",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 400 }],
    files: [
      ["Author-Variable.ttf", "200 700", "normal"],
      ["Author-VariableItalic.ttf", "200 700", "italic"]
    ]
  },
  {
    name: "Bonny",
    folder: "Bonny Variable",
    category: "serif",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/bonny",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 700, default: 400 }],
    files: [["Bonny-Variable.ttf", "100 700", "normal"]]
  },
  {
    name: "Boska",
    folder: "Boska Variable",
    category: "serif",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/boska",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 900, default: 400 }],
    files: [
      ["Boska-Variable.ttf", "200 900", "normal"],
      ["Boska-VariableItalic.ttf", "200 900", "italic"]
    ]
  },
  {
    name: "Bricolage Grotesque",
    folder: "Bricolage Grotesque",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 200, max: 800, default: 400 },
      { tag: "wdth", name: "Width", min: 75, max: 100, default: 100 },
      { tag: "opsz", name: "Optical Size", min: 12, max: 96, default: 48 }
    ],
    files: [["BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf", "200 800", "normal"]]
  },
  {
    name: "Bricolage Grotesque 12pt Condensed",
    folder: "Bricolage Grotesque 12pt Condensed",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["BricolageGrotesque12ptCondensed-ExtraLight.otf", 200, "normal"],
      ["BricolageGrotesque12ptCondensed-Light.otf", 300, "normal"],
      ["BricolageGrotesque12ptCondensed-Regular.otf", 400, "normal"],
      ["BricolageGrotesque12ptCondensed-Medium.otf", 500, "normal"],
      ["BricolageGrotesque12ptCondensed-SemiBold.otf", 600, "normal"],
      ["BricolageGrotesque12ptCondensed-Bold.otf", 700, "normal"],
      ["BricolageGrotesque12ptCondensed-ExtraBold.otf", 800, "normal"]
    ]
  },
  {
    name: "Bricolage Grotesque 96pt Condensed",
    folder: "Bricolage Grotesque 96pt Condensed",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["BricolageGrotesque96ptCondensed-ExtraLight.otf", 200, "normal"],
      ["BricolageGrotesque96ptCondensed-Light.otf", 300, "normal"],
      ["BricolageGrotesque96ptCondensed-Regular.otf", 400, "normal"],
      ["BricolageGrotesque96ptCondensed-Medium.otf", 500, "normal"],
      ["BricolageGrotesque96ptCondensed-SemiBold.otf", 600, "normal"],
      ["BricolageGrotesque96ptCondensed-Bold.otf", 700, "normal"],
      ["BricolageGrotesque96ptCondensed-ExtraBold.otf", 800, "normal"]
    ]
  },
  {
    name: "Cabinet Grotesk",
    folder: "Cabinet Grotesk Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/cabinet-grotesk",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [["CabinetGrotesk-Variable.ttf", "100 900", "normal"]]
  },
  {
    name: "Cal Sans",
    folder: "Cal Sans",
    category: "sans",
    source: "Cal.com Open Foundry",
    sourceUrl: "https://github.com/calcom/font",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 400, max: 700, default: 600 },
      { tag: "opsz", name: "Optical Size", min: 8, max: 45, default: 32 },
      { tag: "GEOM", name: "Geometry", min: 0, max: 100, default: 0 },
      { tag: "SHRP", name: "Sharpness", min: 0, max: 100, default: 0 }
    ],
    files: [["CalSansVF.ttf", "400 700", "normal"]]
  },
  {
    name: "Clash Display",
    folder: "Clash Display Variable",
    category: "display",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/clash-display",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 500 }],
    files: [["ClashDisplay-Variable.ttf", "200 700", "normal"]]
  },
  {
    name: "Clash Grotesk",
    folder: "Clash Grotesk Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/clash-grotesk",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 400 }],
    files: [["ClashGrotesk-Variable.ttf", "200 700", "normal"]]
  },
  {
    name: "Climate Crisis",
    folder: "Climate Crisis",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Climate+Crisis",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "YEAR", name: "Year Axis", min: 1979, max: 2050, default: 1990 }],
    files: [["ClimateCrisis-Variable.ttf", "100 900", "normal"]]
  },
  {
    name: "CM Geom",
    folder: "CM Geom",
    category: "sans",
    source: "Cedric Müller",
    sourceUrl: "https://www.behance.net/gallery/183582501/CM-Geom-Free-Typeface",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["CMGeom-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Coconat",
    folder: "Coconat",
    category: "display",
    source: "Collletttivo",
    sourceUrl: "https://www.collletttivo.it/typefaces/coconat",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["Coconat-Regular.otf", 400, "normal"],
      ["Coconat-Demi.otf", 600, "normal"],
      ["Coconat-Bold.otf", 800, "normal"]
    ]
  },
  {
    name: "Coolvetica",
    folder: "Coolvetica",
    category: "display",
    source: "Typodermic Fonts",
    sourceUrl: "https://typodermicfonts.com/coolvetica/",
    licenseType: "restricted",
    licenseLabel: "Free Regular Desktop / Paid Commercial Variants",
    variable: false,
    axes: [],
    variants: [
      { label: "Regular", file: "coolvetica rg.otf" },
      { label: "Italic", file: "coolvetica rg it.otf" },
      { label: "Condensed", file: "coolvetica condensed rg.otf" },
      { label: "Crammed", file: "coolvetica crammed rg.otf" },
      { label: "Compressed Heavy", file: "coolvetica compressed hv.otf" }
    ],
    files: [["coolvetica rg.otf", 400, "normal"]]
  },
  {
    name: "Coral Pixels",
    folder: "Coral Pixels",
    category: "mono",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Coral+Pixels",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["CoralPixels-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Delight",
    folder: "Delight",
    category: "sans",
    source: "Open Variable Foundry",
    sourceUrl: "https://fonts.google.com/",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [["delight-vf.ttf", "100 900", "normal"]]
  },
  {
    name: "Departure Mono",
    folder: "Departure Mono",
    category: "mono",
    source: "Helena Zhang",
    sourceUrl: "https://departuremono.com/",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["DepartureMono-Regular.otf", 400, "normal"]]
  },
  {
    name: "DM Sans",
    folder: "DM Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/DM+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 1000, default: 400 },
      { tag: "opsz", name: "Optical Size", min: 9, max: 40, default: 24 }
    ],
    files: [
      ["DMSans-VariableFont_opsz,wght.ttf", "100 1000", "normal"],
      ["DMSans-Italic-VariableFont_opsz,wght.ttf", "100 1000", "italic"]
    ]
  },
  {
    name: "Doto",
    folder: "Doto",
    category: "mono",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Doto",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 500 },
      { tag: "ROND", name: "Roundness", min: 0, max: 100, default: 0 }
    ],
    files: [["Doto-VariableFont_ROND,wght.ttf", "100 900", "normal"]]
  },
  {
    name: "DT World Tour",
    folder: "DT World Tour",
    category: "display",
    source: "Independent Display",
    sourceUrl: "https://www.behance.net/",
    licenseType: "open",
    licenseLabel: "Free for Commercial Use",
    variable: false,
    axes: [],
    files: [["DTWorldTour-Regular.otf", 400, "normal"]]
  },
  {
    name: "Elms Sans",
    folder: "Elms Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Elms+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["ElmsSans-VariableFont_wght.ttf", "100 900", "normal"],
      ["ElmsSans-Italic-VariableFont_wght.ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Epilogue",
    folder: "Epilogue",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Epilogue",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["Epilogue-VariableFont_wght.ttf", "100 900", "normal"],
      ["Epilogue-Italic-VariableFont_wght.ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Excon",
    folder: "Excon Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/excon",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [["Excon-Variable.ttf", "100 900", "normal"]]
  },
  {
    name: "Faculty Glyphic",
    folder: "Faculty Glyphic",
    category: "serif",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Faculty+Glyphic",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["FacultyGlyphic-Regular.ttf", 400, "normal"]]
  },
  {
    name: "FT88",
    folder: "FT88",
    category: "mono",
    source: "Velvetyne Type Foundry",
    sourceUrl: "https://velvetyne.fr/fonts/ft88/",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    variants: [
      { label: "Regular", file: "FT88-Regular.ttf" },
      { label: "Bold", file: "FT88-Bold.ttf" },
      { label: "Italic", file: "FT88-Italic.ttf" },
      { label: "Expanded", file: "FT88-Expanded.ttf" },
      { label: "Gothique", file: "FT88-Gothique.ttf" },
      { label: "School", file: "FT88-School.ttf" },
      { label: "Serif", file: "FT88-Serif.ttf" }
    ],
    files: [["FT88-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Geist",
    folder: "Geist",
    category: "sans",
    source: "Google Fonts / Vercel",
    sourceUrl: "https://vercel.com/font",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["Geist[wght].ttf", "100 900", "normal"],
      ["Geist-Italic[wght].ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Geist Mono",
    folder: "Geist Mono",
    category: "mono",
    source: "Google Fonts / Vercel",
    sourceUrl: "https://vercel.com/font",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["GeistMono[wght].ttf", "100 900", "normal"],
      ["GeistMono-Italic[wght].ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Geist Pixel",
    folder: "Geist Pixel",
    category: "mono",
    source: "Vercel",
    sourceUrl: "https://vercel.com/font",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    variants: [
      { label: "Square", file: "GeistPixel-Square.otf" },
      { label: "Circle", file: "GeistPixel-Circle.otf" },
      { label: "Grid", file: "GeistPixel-Grid.otf" },
      { label: "Line", file: "GeistPixel-Line.otf" },
      { label: "Triangle", file: "GeistPixel-Triangle.otf" }
    ],
    files: [["GeistPixel-Square.otf", 400, "normal"]]
  },
  {
    name: "General Sans",
    folder: "General Sans Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/general-sans",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 400 }],
    files: [
      ["GeneralSans-Variable.ttf", "200 700", "normal"],
      ["GeneralSans-VariableItalic.ttf", "200 700", "italic"]
    ]
  },
  {
    name: "Geom",
    folder: "Geom",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Geom",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 400 }],
    files: [
      ["Geom-VariableFont_wght.ttf", "300 900", "normal"],
      ["Geom-Italic-VariableFont_wght.ttf", "300 900", "italic"]
    ]
  },
  {
    name: "Handjet",
    folder: "Handjet",
    category: "mono",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Handjet",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 400 },
      { tag: "ELGR", name: "Element Grid", min: 1, max: 2, default: 1, step: 0.1 },
      { tag: "ELSH", name: "Element Shape", min: 0, max: 16, default: 2, step: 0.5 }
    ],
    files: [["Handjet-VariableFont_ELGR,ELSH,wght.ttf", "100 900", "normal"]]
  },
  {
    name: "Host Grotesk",
    folder: "Host Grotesk",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Host+Grotesk",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 800, default: 400 }],
    files: [
      ["HostGrotesk-VariableFont_wght.ttf", "300 800", "normal"],
      ["HostGrotesk-Italic-VariableFont_wght.ttf", "300 800", "italic"]
    ]
  },
  {
    name: "Instrument Serif",
    folder: "Instrument Serif",
    category: "serif",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Instrument+Serif",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["InstrumentSerif-Regular.ttf", 400, "normal"],
      ["InstrumentSerif-Italic.ttf", 400, "italic"]
    ]
  },
  {
    name: "Inter",
    folder: "Inter",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Inter",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 400 },
      { tag: "opsz", name: "Optical Size", min: 14, max: 32, default: 24 }
    ],
    files: [["Inter-VariableFont_opsz,wght.ttf", "100 900", "normal"]]
  },
  {
    name: "Jost",
    folder: "Jost",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Jost",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [["Jost-VariableFont_wght.ttf", "100 900", "normal"]]
  },
  {
    name: "Kalnia Glaze",
    folder: "Kalnia Glaze",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Kalnia+Glaze",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 700, default: 400 },
      { tag: "wdth", name: "Width", min: 100, max: 125, default: 100 }
    ],
    files: [["KalniaGlaze-VariableFont_wdth,wght.ttf", "100 700", "normal"]]
  },
  {
    name: "Lama Sans",
    folder: "Lama Sans",
    category: "sans",
    source: "Baianat Type",
    sourceUrl: "https://www.baianat.com/books/lama-sans/",
    licenseType: "open",
    licenseLabel: "Free for Personal & Commercial Use",
    variable: false,
    axes: [],
    files: [
      ["LamaSans-Thin.ttf", 100, "normal"],
      ["LamaSans-ExtraLight.ttf", 200, "normal"],
      ["LamaSans-Light.ttf", 300, "normal"],
      ["LamaSans-Regular.ttf", 400, "normal"],
      ["LamaSans-Medium.ttf", 500, "normal"],
      ["LamaSans-SemiBold.ttf", 600, "normal"],
      ["LamaSans-Bold.ttf", 700, "normal"],
      ["LamaSans-ExtraBold.ttf", 800, "normal"],
      ["LamaSans-Black.ttf", 900, "normal"],
      ["LamaSans-RegularItalic.ttf", 400, "italic"],
      ["LamaSans-BoldItalic.ttf", 700, "italic"]
    ]
  },
  {
    name: "League Spartan",
    folder: "League Spartan",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/League+Spartan",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 500 }],
    files: [["LeagueSpartan-VariableFont_wght.ttf", "100 900", "normal"]]
  },
  {
    name: "LEMON MILK",
    folder: "LEMON MILK",
    category: "display",
    source: "Marsnev",
    sourceUrl: "https://marsnev.com/",
    licenseType: "restricted",
    licenseLabel: "Free Personal Use Only / Commercial License Required",
    variable: false,
    axes: [],
    files: [
      ["LEMONMILK-Light.otf", 300, "normal"],
      ["LEMONMILK-LightItalic.otf", 300, "italic"],
      ["LEMONMILK-Regular.otf", 400, "normal"],
      ["LEMONMILK-RegularItalic.otf", 400, "italic"],
      ["LEMONMILK-Medium.otf", 500, "normal"],
      ["LEMONMILK-MediumItalic.otf", 500, "italic"],
      ["LEMONMILK-Bold.otf", 700, "normal"],
      ["LEMONMILK-BoldItalic.otf", 700, "italic"]
    ]
  },
  {
    name: "Manrope",
    folder: "Manrope",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Manrope",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 800, default: 400 }],
    files: [["Manrope-VariableFont_wght.ttf", "200 800", "normal"]]
  },
  {
    name: "Melodrama",
    folder: "Melodrama Variable",
    category: "serif",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/melodrama",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 700, default: 400 }],
    files: [["Melodrama-Variable.ttf", "300 700", "normal"]]
  },
  {
    name: "Metropolis",
    folder: "Metropolis",
    category: "sans",
    source: "Chris Simpson",
    sourceUrl: "https://github.com/dw5/Metropolis",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL / Public Domain)",
    variable: false,
    axes: [],
    files: [
      ["Metropolis-Thin.otf", 100, "normal"],
      ["Metropolis-ExtraLight.otf", 200, "normal"],
      ["Metropolis-Light.otf", 300, "normal"],
      ["Metropolis-Regular.otf", 400, "normal"],
      ["Metropolis-RegularItalic.otf", 400, "italic"],
      ["Metropolis-Medium.otf", 500, "normal"],
      ["Metropolis-SemiBold.otf", 600, "normal"],
      ["Metropolis-Bold.otf", 700, "normal"],
      ["Metropolis-BoldItalic.otf", 700, "italic"],
      ["Metropolis-ExtraBold.otf", 800, "normal"],
      ["Metropolis-Black.otf", 900, "normal"]
    ]
  },
  {
    name: "Modestic Sans",
    folder: "Modestic Sans",
    category: "sans",
    source: "Independent Foundry",
    sourceUrl: "https://www.behance.net/",
    licenseType: "restricted",
    licenseLabel: "Free Personal Use / Commercial License Required",
    variable: false,
    axes: [],
    files: [
      ["ModesticSans-Bold-BF64a47d1515b1b.otf", 700, "normal"],
      ["ModesticSans-BoldItalic-BF64a47d15590b5.otf", 700, "italic"]
    ]
  },
  {
    name: "Momo Trust Sans",
    folder: "Momo Trust Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Momo+Trust+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 800, default: 400 }],
    files: [["MomoTrustSans-VariableFont_wght.ttf", "200 800", "normal"]]
  },
  {
    name: "Mozilla Headline",
    folder: "Mozilla Headline",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Mozilla+Headline",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 200, max: 700, default: 500 },
      { tag: "wdth", name: "Width", min: 75, max: 125, default: 100 }
    ],
    files: [["MozillaHeadline-VariableFont_wdth,wght.ttf", "200 700", "normal"]]
  },
  {
    name: "Mozilla Text",
    folder: "Mozilla Text",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Mozilla+Text",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 400 }],
    files: [["MozillaText-VariableFont_wght.ttf", "200 700", "normal"]]
  },
  {
    name: "National Park",
    folder: "National Park",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/National+Park",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 800, default: 400 }],
    files: [["NationalPark-VariableFont_wght.ttf", "200 800", "normal"]]
  },
  {
    name: "Nunito",
    folder: "Nunito Variable",
    category: "sans",
    source: "Google Fonts / Fontshare",
    sourceUrl: "https://fonts.google.com/specimen/Nunito",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 1000, default: 400 }],
    files: [
      ["Nunito-Variable.ttf", "200 1000", "normal"],
      ["Nunito-VariableItalic.ttf", "200 1000", "italic"]
    ]
  },
  {
    name: "Nunito Sans",
    folder: "Nunito Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Nunito+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 200, max: 1000, default: 400 },
      { tag: "wdth", name: "Width", min: 75, max: 125, default: 100 },
      { tag: "opsz", name: "Optical Size", min: 6, max: 12, default: 10 }
    ],
    files: [
      ["NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf", "200 1000", "normal"],
      ["NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf", "200 1000", "italic"]
    ]
  },
  {
    name: "Nyght Serif",
    folder: "Nyght Serif",
    category: "serif",
    source: "Maksym Kobuzan",
    sourceUrl: "https://nyghtserif.com/",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL / Free Commercial)",
    variable: false,
    axes: [],
    files: [
      ["NyghtSerif-Light.ttf", 300, "normal"],
      ["NyghtSerif-LightItalic.ttf", 300, "italic"],
      ["NyghtSerif-Regular.ttf", 400, "normal"],
      ["NyghtSerif-RegularItalic.ttf", 400, "italic"],
      ["NyghtSerif-Medium.ttf", 500, "normal"],
      ["NyghtSerif-MediumItalic.ttf", 500, "italic"],
      ["NyghtSerif-Bold.ttf", 700, "normal"],
      ["NyghtSerif-BoldItalic.ttf", 700, "italic"],
      ["NyghtSerif-Dark.ttf", 800, "normal"],
      ["NyghtSerif-DarkItalic.ttf", 800, "italic"]
    ]
  },
  {
    name: "Ojuju",
    folder: "Ojuju",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Ojuju",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 800, default: 400 }],
    files: [["Ojuju-VariableFont_wght.ttf", "200 800", "normal"]]
  },
  {
    name: "Ortica Angular",
    folder: "Ortica Angular",
    category: "serif",
    source: "Collletttivo",
    sourceUrl: "https://www.collletttivo.it/typefaces/ortica",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["OrticaAngular-Bold.otf", 700, "normal"]]
  },
  {
    name: "Panchang",
    folder: "Panchang Variable",
    category: "display",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/panchang",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 800, default: 500 }],
    files: [["Panchang-Variable.ttf", "200 800", "normal"]]
  },
  {
    name: "Parkinsans",
    folder: "Parkinsans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Parkinsans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 800, default: 400 }],
    files: [["Parkinsans-VariableFont_wght.ttf", "300 800", "normal"]]
  },
  {
    name: "Picaflor",
    folder: "Picaflor",
    category: "serif",
    source: "Ariel Martín Pérez",
    sourceUrl: "https://www.tunera.xyz/typefaces/picaflor/",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 40, max: 300, default: 120 }],
    files: [["PicaflorGX.ttf", "40 300", "normal"]]
  },
  {
    name: "Poppins",
    folder: "Poppins Variable",
    category: "sans",
    source: "Google Fonts / Fontshare",
    sourceUrl: "https://fonts.google.com/specimen/Poppins",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["Poppins-Variable.ttf", "100 900", "normal"],
      ["Poppins-VariableItalic.ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Pretendard",
    folder: "Pretendard",
    category: "sans",
    source: "OFL GitHub Archive",
    sourceUrl: "https://github.com/orioncactus/pretendard",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["Pretendard-Thin.otf", 100, "normal"],
      ["Pretendard-ExtraLight.otf", 200, "normal"],
      ["Pretendard-Light.otf", 300, "normal"],
      ["Pretendard-Regular.otf", 400, "normal"],
      ["Pretendard-Medium.otf", 500, "normal"],
      ["Pretendard-SemiBold.otf", 600, "normal"],
      ["Pretendard-Bold.otf", 700, "normal"],
      ["Pretendard-ExtraBold.otf", 800, "normal"],
      ["Pretendard-Black.otf", 900, "normal"]
    ]
  },
  {
    name: "Product Sans",
    folder: "Product Sans",
    category: "sans",
    source: "Google Proprietary",
    sourceUrl: "https://fonts.google.com/",
    licenseType: "restricted",
    licenseLabel: "Proprietary (Google Brand — Not Licensed for Public Use)",
    variable: false,
    axes: [],
    files: [
      ["Product Sans Regular.ttf", 400, "normal"],
      ["Product Sans Italic.ttf", 400, "italic"],
      ["Product Sans Bold.ttf", 700, "normal"],
      ["Product Sans Bold Italic.ttf", 700, "italic"]
    ]
  },
  {
    name: "Proxima Nova",
    folder: "Proxima Nova",
    category: "sans",
    source: "Mark Simonson Studio",
    sourceUrl: "https://www.marksimonson.com/fonts/view/proxima-nova",
    licenseType: "restricted",
    licenseLabel: "Commercial Font (Paid License Required)",
    variable: false,
    axes: [],
    files: [
      ["proximanova_light.otf", 300, "normal"],
      ["proximanova_regular.ttf", 400, "normal"],
      ["proximanova_bold.otf", 700, "normal"],
      ["proximanova_boldit.otf", 700, "italic"],
      ["proximanova_extrabold.otf", 800, "normal"],
      ["proximanova_black.otf", 900, "normal"],
      ["proximanova_blackit.otf", 900, "italic"]
    ]
  },
  {
    name: "Public Sans",
    folder: "Public Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Public+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["PublicSans-VariableFont_wght.ttf", "100 900", "normal"],
      ["PublicSans-Italic-VariableFont_wght.ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Quicksand",
    folder: "Quicksand Variable",
    category: "sans",
    source: "Google Fonts / Fontshare",
    sourceUrl: "https://fonts.google.com/specimen/Quicksand",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 700, default: 400 }],
    files: [["Quicksand-Variable.ttf", "300 700", "normal"]]
  },
  {
    name: "Red Hat Display",
    folder: "Red Hat Display Variable",
    category: "display",
    source: "Google Fonts / Fontshare",
    sourceUrl: "https://fonts.google.com/specimen/Red+Hat+Display",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 500 }],
    files: [
      ["RedHatDisplay-Variable.ttf", "300 900", "normal"],
      ["RedHatDisplay-VariableItalic.ttf", "300 900", "italic"]
    ]
  },
  {
    name: "Reddit Mono",
    folder: "Reddit Mono",
    category: "mono",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Reddit+Mono",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 900, default: 400 }],
    files: [["RedditMono-VariableFont_wght.ttf", "200 900", "normal"]]
  },
  {
    name: "Reddit Sans",
    folder: "Reddit Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Reddit+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 900, default: 400 }],
    files: [
      ["RedditSans-VariableFont_wght.ttf", "200 900", "normal"],
      ["RedditSans-Italic-VariableFont_wght.ttf", "200 900", "italic"]
    ]
  },
  {
    name: "Reddit Sans Condensed",
    folder: "Reddit Sans Condensed",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Reddit+Sans+Condensed",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 900, default: 400 }],
    files: [["RedditSansCondensed-VariableFont_wght.ttf", "200 900", "normal"]]
  },
  {
    name: "Rethink Sans",
    folder: "Rethink Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Rethink+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 400, max: 800, default: 400 }],
    files: [
      ["RethinkSans-VariableFont_wght.ttf", "400 800", "normal"],
      ["RethinkSans-Italic-VariableFont_wght.ttf", "400 800", "italic"]
    ]
  },
  {
    name: "Ribes",
    folder: "Ribes",
    category: "serif",
    source: "Collletttivo",
    sourceUrl: "https://www.collletttivo.it/typefaces/ribes",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["Ribes-Light.otf", 200, "normal"],
      ["Ribes-Regular.otf", 400, "normal"],
      ["Ribes-Black.otf", 900, "normal"]
    ]
  },
  {
    name: "Sansita Swashed",
    folder: "Sansita Swashed",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Sansita+Swashed",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 400 }],
    files: [["SansitaSwashed-VariableFont_wght.ttf", "300 900", "normal"]]
  },
  {
    name: "Satoshi",
    folder: "Satoshi Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/satoshi",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 400 }],
    files: [
      ["Satoshi-Variable.ttf", "300 900", "normal"],
      ["Satoshi-VariableItalic.ttf", "300 900", "italic"]
    ]
  },
  {
    name: "Science Gothic",
    folder: "Science Gothic",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Science+Gothic",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 400 },
      { tag: "wdth", name: "Width", min: 50, max: 200, default: 100 },
      { tag: "CTRS", name: "Contrast", min: 0, max: 85, default: 0 },
      { tag: "slnt", name: "Slant", min: -10, max: 0, default: 0 }
    ],
    files: [["ScienceGothic-VariableFont_CTRS,slnt,wdth,wght.ttf", "100 900", "normal"]]
  },
  {
    name: "Sekuya",
    folder: "Sekuya",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Sekuya",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["Sekuya-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Sharpie",
    folder: "Sharpie Variable",
    category: "display",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/sharpie",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 400 }],
    files: [["Sharpie-Variable.ttf", "300 900", "normal"]]
  },
  {
    name: "Sinistre",
    folder: "Sinistre",
    category: "serif",
    source: "Collletttivo",
    sourceUrl: "https://www.collletttivo.it/typefaces/sinistre",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 400, max: 900, default: 400 }],
    files: [["SinistreVF.ttf", "400 900", "normal"]]
  },
  {
    name: "Sora",
    folder: "Sora Variable",
    category: "sans",
    source: "Google Fonts / Fontshare",
    sourceUrl: "https://fonts.google.com/specimen/Sora",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 800, default: 400 }],
    files: [
      ["Sora-Variable.ttf", "100 800", "normal"],
      ["Sora-VariableItalic.ttf", "100 800", "italic"]
    ]
  },
  {
    name: "Space Grotesk",
    folder: "Space Grotesk",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Space+Grotesk",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 700, default: 400 }],
    files: [["SpaceGrotesk-VariableFont_wght.ttf", "300 700", "normal"]]
  },
  {
    name: "Spline Sans",
    folder: "Spline Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Spline+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 700, default: 400 }],
    files: [["SplineSans-Variable.ttf", "300 700", "normal"]]
  },
  {
    name: "Stack Sans Headline",
    folder: "Stack Sans Headline",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Stack+Sans+Headline",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 500 }],
    files: [["StackSansHeadline-VariableFont_wght.ttf", "200 700", "normal"]]
  },
  {
    name: "Stack Sans Notch",
    folder: "Stack Sans Notch",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Stack+Sans+Notch",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 500 }],
    files: [["StackSansNotch-VariableFont_wght.ttf", "200 700", "normal"]]
  },
  {
    name: "Stack Sans Text",
    folder: "Stack Sans Text",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Stack+Sans+Text",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 400 }],
    files: [["StackSansText-VariableFont_wght.ttf", "200 700", "normal"]]
  },
  {
    name: "Supreme",
    folder: "Supreme Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/supreme",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 800, default: 400 }],
    files: [
      ["Supreme-Variable.ttf", "100 800", "normal"],
      ["Supreme-VariableItalic.ttf", "100 800", "italic"]
    ]
  },
  {
    name: "Switzer",
    folder: "Switzer Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/switzer",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["Switzer-Variable.ttf", "100 900", "normal"],
      ["Switzer-VariableItalic.ttf", "100 900", "italic"]
    ]
  },
  {
    name: "Syne",
    folder: "Syne",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Syne",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 400, max: 800, default: 600 }],
    files: [["Syne[wght].ttf", "400 800", "normal"]]
  },
  {
    name: "Synonym",
    folder: "Synonym Variable",
    category: "sans",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/synonym",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 700, default: 400 }],
    files: [["Synonym-Variable.ttf", "200 700", "normal"]]
  },
  {
    name: "TASA Explorer",
    folder: "TASA Explorer",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/TASA+Explorer",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 400, max: 800, default: 400 }],
    files: [["TASAExplorer-VariableFont_wght.ttf", "400 800", "normal"]]
  },
  {
    name: "TASA Orbiter",
    folder: "TASA Orbiter",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/TASA+Orbiter",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 400, max: 800, default: 400 }],
    files: [["TASAOrbiter-VariableFont_wght.ttf", "400 800", "normal"]]
  },
  {
    name: "Technor",
    folder: "Technor Variable",
    category: "display",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/technor",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 900, default: 500 }],
    files: [["Technor-Variable.ttf", "200 900", "normal"]]
  },
  {
    name: "Telma",
    folder: "Telma Variable",
    category: "display",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/telma",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 900, default: 400 }],
    files: [["Telma-Variable.ttf", "300 900", "normal"]]
  },
  {
    name: "Texturina",
    folder: "Texturina",
    category: "serif",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Texturina",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 400 },
      { tag: "opsz", name: "Optical Size", min: 12, max: 72, default: 36 }
    ],
    files: [
      ["Texturina[opsz,wght].ttf", "100 900", "normal"],
      ["Texturina-Italic[opsz,wght].ttf", "100 900", "italic"]
    ]
  },
  {
    name: "TikTok Sans",
    folder: "TikTok Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/TikTok+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 300, max: 900, default: 400 },
      { tag: "wdth", name: "Width", min: 75, max: 150, default: 100 },
      { tag: "opsz", name: "Optical Size", min: 12, max: 36, default: 24 },
      { tag: "slnt", name: "Slant", min: -6, max: 0, default: 0 }
    ],
    files: [["TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf", "300 900", "normal"]]
  },
  {
    name: "Times New Roman",
    folder: "Times New Roman",
    category: "serif",
    source: "Monotype System",
    sourceUrl: "https://www.monotype.com/fonts/times-new-roman",
    licenseType: "restricted",
    licenseLabel: "Proprietary (Monotype System / Commercial License)",
    variable: false,
    axes: [],
    files: [
      ["Times New Roman.ttf", 400, "normal"],
      ["Times New Roman Italic.ttf", 400, "italic"],
      ["Times New Roman Bold.ttf", 700, "normal"],
      ["Times New Roman Bold Italic.ttf", 700, "italic"]
    ]
  },
  {
    name: "Times Newer Roman",
    folder: "Times Newer Roman",
    category: "serif",
    source: "MSCHF Open Release",
    sourceUrl: "https://timesnewerroman.com/",
    licenseType: "open",
    licenseLabel: "Open Source (GNU GPLv3 + Font Exception)",
    variable: false,
    axes: [],
    files: [
      ["TimesNewerRoman-Regular.otf", 400, "normal"],
      ["TimesNewerRoman-Italic.otf", 400, "italic"],
      ["TimesNewerRoman-Bold.otf", 700, "normal"],
      ["TimesNewerRoman-BoldItalic.otf", 700, "italic"]
    ]
  },
  {
    name: "Tiny5",
    folder: "Tiny5",
    category: "mono",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Tiny5",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["Tiny5-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Trench Slab",
    folder: "Trench Slab Variable",
    category: "serif",
    source: "Fontshare",
    sourceUrl: "https://www.fontshare.com/fonts/trench-slab",
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 300, max: 700, default: 400 }],
    files: [["TrenchSlab-Variable.ttf", "300 700", "normal"]]
  },
  {
    name: "Unbounded",
    folder: "Unbounded",
    category: "display",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Unbounded",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 200, max: 900, default: 500 }],
    files: [["Unbounded-VariableFont_wght.ttf", "200 900", "normal"]]
  },
  {
    name: "Wistteria Sans",
    folder: "Wistteria Sans",
    category: "display",
    source: "Faysal Type",
    sourceUrl: "https://www.behance.net/",
    licenseType: "open",
    licenseLabel: "Free for Personal & Commercial Use",
    variable: false,
    axes: [],
    files: [["wistteriasans-regular.otf", 400, "normal"]]
  },
  {
    name: "Work Sans",
    folder: "Work Sans",
    category: "sans",
    source: "Google Fonts",
    sourceUrl: "https://fonts.google.com/specimen/Work+Sans",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    files: [
      ["WorkSans-VariableFont_wght.ttf", "100 900", "normal"],
      ["WorkSans-Italic-VariableFont_wght.ttf", "100 900", "italic"]
    ]
  }
];

const WEIGHT_LABELS = {
  100: "Thin 100",
  200: "ExtraLight 200",
  300: "Light 300",
  400: "Regular 400",
  500: "Medium 500",
  600: "SemiBold 600",
  700: "Bold 700",
  800: "ExtraBold 800",
  900: "Black 900"
};

function encodeFontUrl(folder, filename) {
  const safeFolder = folder.split("/").map(encodeURIComponent).join("/");
  const safeFile = encodeURIComponent(filename);
  return `fonts/${safeFolder}/${safeFile}`;
}

function injectLocalFontFaces() {
  const rules = [];

  FONT_CATALOGUE.forEach((font) => {
    if (font.variants && font.variants.length > 0) {
      font.variants.forEach((v, idx) => {
        const ext = v.file.toLowerCase().endsWith(".otf") ? "opentype" : "truetype";
        const rawPath = `fonts/${font.folder}/${v.file}`;
        const encPath = encodeFontUrl(font.folder, v.file);
        const variantFamily = `${font.name}__${v.label}`;
        rules.push(`@font-face {
  font-family: '${variantFamily}';
  src: url("${encPath}") format('${ext}'), url("${rawPath}") format('${ext}');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}`);
        if (idx === 0) {
          rules.push(`@font-face {
  font-family: '${font.name}';
  src: url("${encPath}") format('${ext}'), url("${rawPath}") format('${ext}');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}`);
        }
      });
    } else if (!font.variable && font.files.length === 1) {
      const [filename] = font.files[0];
      const ext = filename.toLowerCase().endsWith(".otf") ? "opentype" : "truetype";
      const rawPath = `fonts/${font.folder}/${filename}`;
      const encPath = encodeFontUrl(font.folder, filename);
      rules.push(`@font-face {
  font-family: '${font.name}';
  src: url("${encPath}") format('${ext}'), url("${rawPath}") format('${ext}');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}`);
    } else {
      font.files.forEach(([filename, weight, style]) => {
        const ext = filename.toLowerCase().endsWith(".otf") ? "opentype" : "truetype";
        const rawPath = `fonts/${font.folder}/${filename}`;
        const encPath = encodeFontUrl(font.folder, filename);
        rules.push(`@font-face {
  font-family: '${font.name}';
  src: url("${encPath}") format('${ext}'), url("${rawPath}") format('${ext}');
  font-weight: ${weight};
  font-style: ${style};
  font-display: swap;
}`);
      });
    }
  });

  const styleEl = document.createElement("style");
  styleEl.id = "archive-local-font-faces";
  styleEl.textContent = rules.join("\n");
  document.head.appendChild(styleEl);
}

function buildFontFaceSnippet(font) {
  const [firstFile, weight, style] = font.files[0];
  const ext = firstFile.toLowerCase().endsWith(".otf") ? "opentype" : "truetype";
  return `@font-face {\n  font-family: '${font.name}';\n  src: url('fonts/${font.folder}/${firstFile}') format('${ext}');\n  font-weight: ${weight};\n  font-style: ${style};\n}`;
}

function getFontAvailableWeights(font) {
  if (font.variable) {
    const wAxis = font.axes.find((a) => a.tag === "wght");
    if (!wAxis) return [400];
    if (wAxis.max <= 300) {
      return [40, 80, 120, 200, 300].filter((w) => w >= wAxis.min && w <= wAxis.max);
    }
    const std = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    return std.filter((w) => w >= wAxis.min && w <= wAxis.max);
  }
  const set = new Set();
  font.files.forEach(([, w]) => {
    if (typeof w === "number") set.add(w);
  });
  return Array.from(set).sort((a, b) => a - b);
}

function fontHasItalic(font) {
  return font.files.some(([, , style]) => style === "italic");
}

function getDefaultWeight(font) {
  if (font.variable) {
    const wAxis = font.axes.find((a) => a.tag === "wght");
    return wAxis ? wAxis.default : 400;
  }
  const weights = getFontAvailableWeights(font);
  if (weights.includes(400)) return 400;
  return weights[0] || 400;
}

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
  const inspectorBox = document.getElementById("inspectorBox");
  const inspectorTag = document.getElementById("inspectorTag");
  const guideCap = document.getElementById("guideCap");
  const guideXh = document.getElementById("guideXh");
  const guideBase = document.getElementById("guideBase");
  const guideDesc = document.getElementById("guideDesc");

  if (!hero || typeof gsap === "undefined") return;

  hero.innerHTML = "";
  const words = ["Font", "Library"];
  const slots = [];
  const mains = [];
  let baselineStrut = null;

  words.forEach((word, wIdx) => {
    const wordEl = document.createElement("span");
    wordEl.className = "gsap-word";

    if (wIdx === 0) {
      baselineStrut = document.createElement("span");
      baselineStrut.className = "baseline-strut";
      wordEl.appendChild(baselineStrut);
    }

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const slot = document.createElement("span");
      slot.className = "char-slot";
      slot.dataset.char = ch;

      const main = document.createElement("span");
      main.className = "char-main";
      main.textContent = ch;

      slot.appendChild(main);
      wordEl.appendChild(slot);
      slots.push(slot);
      mains.push(main);
    }

    hero.appendChild(wordEl);
  });

  function lockCharacterWidthsAndMeasureGuides() {
    slots.forEach((s) => {
      s.style.width = "auto";
    });
    mains.forEach((m) => {
      m.style.fontWeight = "800";
      m.style.fontVariationSettings = "'wght' 800";
      m.style.transform = "translate3d(0,0,0)";
    });
    slots.forEach((s) => {
      const r = s.getBoundingClientRect();
      s.style.width = `${Math.ceil(r.width + 2)}px`;
    });

    if (!rig || !baselineStrut) return;
    const rigRect = rig.getBoundingClientRect();
    const strutRect = baselineStrut.getBoundingClientRect();
    const baselineY = strutRect.top - rigRect.top;

    const computed = window.getComputedStyle(hero);
    const fontSizePx = parseFloat(computed.fontSize) || 100;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.font = `800 ${fontSizePx}px Switzer, sans-serif`;
      const capMetrics = ctx.measureText("F");
      const xhMetrics = ctx.measureText("x");
      const descMetrics = ctx.measureText("y");

      const capAscent = capMetrics.actualBoundingBoxAscent || fontSizePx * 0.72;
      const xhAscent = xhMetrics.actualBoundingBoxAscent || fontSizePx * 0.52;
      const descDescent = descMetrics.actualBoundingBoxDescent || fontSizePx * 0.21;

      if (guideCap) gsap.set(guideCap, { y: Math.round(baselineY - capAscent) });
      if (guideXh) gsap.set(guideXh, { y: Math.round(baselineY - xhAscent) });
      if (guideBase) gsap.set(guideBase, { y: Math.round(baselineY) });
      if (guideDesc) gsap.set(guideDesc, { y: Math.round(baselineY + descDescent) });
    }
  }

  let activeTargetIndex = 0;
  let hoveredIndex = -1;
  const inspectorState = { x: 0, y: 0, w: 60, h: 80 };

  const tourStops = [
    { index: 0, tag: "F · cap height" },
    { index: 1, tag: "o · x-height" },
    { index: 3, tag: "t · crossbar" },
    { index: 4, tag: "L · stem 900" },
    { index: 5, tag: "i · tittle" },
    { index: 8, tag: "a · bowl counter" },
    { index: 10, tag: "y · descender" }
  ];
  let stopPointer = 0;

  gsap.to({}, {
    duration: 1.65,
    repeat: -1,
    onRepeat: () => {
      if (hoveredIndex === -1) {
        stopPointer = (stopPointer + 1) % tourStops.length;
        activeTargetIndex = tourStops[stopPointer].index;
      }
    }
  });

  function startSeamlessLoop() {
    lockCharacterWidthsAndMeasureGuides();

    if (rig && mains[0]) {
      const rigRect = rig.getBoundingClientRect();
      const mRect = mains[0].getBoundingClientRect();
      inspectorState.x = mRect.left - rigRect.left - 5;
      inspectorState.y = mRect.top - rigRect.top - 2;
      inspectorState.w = mRect.width + 10;
      inspectorState.h = mRect.height + 4;
    }

    gsap.ticker.add((time) => {
      const total = mains.length;

      for (let i = 0; i < total; i++) {
        const phase = time * 2.35 - i * 0.52;
        const wave = Math.sin(phase);
        const secondary = Math.cos(time * 1.6 + i * 0.4);

        let targetWght = Math.round(520 + wave * 370);
        let yOffset = secondary * 9;

        if (hoveredIndex === i) {
          targetWght = 900;
          yOffset = -12;
        }

        const m = mains[i];
        m.style.fontWeight = targetWght;
        m.style.fontVariationSettings = `'wght' ${targetWght}`;
        m.style.transform = `translate3d(0, ${yOffset.toFixed(2)}px, 0)`;

        const focusIdx = hoveredIndex !== -1 ? hoveredIndex : activeTargetIndex;
        if (i === focusIdx) {
          m.style.color = "#0AE448";
        } else if (wave > 0.86) {
          m.style.color = "#00E5FF";
        } else {
          m.style.color = "#F5F7FA";
        }
      }

      const focusIdx = hoveredIndex !== -1 ? hoveredIndex : activeTargetIndex;
      const targetGlyph = mains[focusIdx];
      if (targetGlyph && rig && inspectorBox) {
        const rigRect = rig.getBoundingClientRect();
        const gRect = targetGlyph.getBoundingClientRect();

        const destX = gRect.left - rigRect.left - 6;
        const destY = gRect.top - rigRect.top - 2;
        const destW = gRect.width + 12;
        const destH = gRect.height + 4;

        inspectorState.x += (destX - inspectorState.x) * 0.18;
        inspectorState.y += (destY - inspectorState.y) * 0.18;
        inspectorState.w += (destW - inspectorState.w) * 0.18;
        inspectorState.h += (destH - inspectorState.h) * 0.18;

        inspectorBox.style.transform = `translate3d(${inspectorState.x.toFixed(1)}px, ${inspectorState.y.toFixed(1)}px, 0)`;
        inspectorBox.style.width = `${inspectorState.w.toFixed(1)}px`;
        inspectorBox.style.height = `${inspectorState.h.toFixed(1)}px`;

        if (inspectorTag) {
          const liveWght = targetGlyph.style.fontWeight || "800";
          const ch = slots[focusIdx].dataset.char;
          inspectorTag.textContent = `${ch} · wght ${liveWght}`;
        }
      }
    });
  }

  document.fonts.ready.then(() => {
    startSeamlessLoop();
  });

  window.addEventListener("resize", () => {
    lockCharacterWidthsAndMeasureGuides();
  });

  slots.forEach((slot, idx) => {
    slot.addEventListener("pointerenter", () => {
      hoveredIndex = idx;
    });
    slot.addEventListener("pointerleave", () => {
      hoveredIndex = -1;
    });
    slot.addEventListener("click", () => {
      activeTargetIndex = idx;
    });
  });
}

function initLibraryIndex() {
  const listEl = document.getElementById("typeIndexList");
  const searchInput = document.getElementById("fontSearch");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const licBtns = document.querySelectorAll(".lic-btn");
  const tabGlider = document.getElementById("tabGlider");

  const pairDockPill = document.getElementById("pairDockPill");
  const pairDockReadout = document.getElementById("pairDockReadout");
  const pairDrawer = document.getElementById("pairDrawer");
  const pairCloseBtn = document.getElementById("pairCloseBtn");
  const pairHeadSelect = document.getElementById("pairHeadSelect");
  const pairBodySelect = document.getElementById("pairBodySelect");
  const pairHeadWeight = document.getElementById("pairHeadWeight");
  const pairHeadSize = document.getElementById("pairHeadSize");
  const pairBodyWeight = document.getElementById("pairBodyWeight");
  const pairBodySize = document.getElementById("pairBodySize");
  const pairHeadWeightVal = document.getElementById("pairHeadWeightVal");
  const pairBodyWeightVal = document.getElementById("pairBodyWeightVal");
  const pairSpecimenHeading = document.getElementById("pairSpecimenHeading");
  const pairSpecimenBody = document.getElementById("pairSpecimenBody");
  const pairSwapBtn = document.getElementById("pairSwapBtn");
  const pairShuffleBtn = document.getElementById("pairShuffleBtn");
  const pairCopyCssBtn = document.getElementById("pairCopyCssBtn");

  if (!listEl) return;

  let activeCat = "all";
  let activeLic = "all";
  let openRowElement = null;
  let typingTimers = [];
  let rowObserver = null;
  let pairDrawerOpen = false;

  const allTabBtn = document.querySelector('.tab-btn[data-cat="all"]');
  if (allTabBtn) {
    allTabBtn.textContent = `All ${FONT_CATALOGUE.length}`;
  }

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

  function initPairingStudio() {
    if (!pairHeadSelect || !pairBodySelect) return;

    FONT_CATALOGUE.forEach((f, idx) => {
      pairHeadSelect.add(new Option(f.name, idx));
      pairBodySelect.add(new Option(f.name, idx));
    });

    const switzerIdx = FONT_CATALOGUE.findIndex((f) => f.name === "Switzer");
    const genSansIdx = FONT_CATALOGUE.findIndex((f) => f.name === "General Sans");
    pairHeadSelect.value = switzerIdx !== -1 ? switzerIdx : 0;
    pairBodySelect.value = genSansIdx !== -1 ? genSansIdx : 1;

    function syncPairBounds(selectEl, weightInput) {
      const font = FONT_CATALOGUE[selectEl.value];
      if (!font) return;
      const weights = getFontAvailableWeights(font);
      const minW = weights[0] || 400;
      const maxW = weights[weights.length - 1] || 400;
      weightInput.min = minW;
      weightInput.max = maxW;
      weightInput.step = font.variable ? 10 : 100;
      weightInput.disabled = minW === maxW;
      if (Number(weightInput.value) < minW || Number(weightInput.value) > maxW) {
        weightInput.value = getDefaultWeight(font);
      }
    }

    function updatePairPreview() {
      const hFont = FONT_CATALOGUE[pairHeadSelect.value];
      const bFont = FONT_CATALOGUE[pairBodySelect.value];
      if (!hFont || !bFont) return;

      const hW = Number(pairHeadWeight.value);
      const bW = Number(pairBodyWeight.value);

      pairHeadWeightVal.textContent = hW;
      pairBodyWeightVal.textContent = bW;

      pairSpecimenHeading.style.fontFamily = `'${hFont.name}', sans-serif`;
      pairSpecimenHeading.style.fontWeight = hW;
      pairSpecimenHeading.style.fontVariationSettings = hFont.variable ? `'wght' ${hW}` : "normal";
      pairSpecimenHeading.style.fontSize = `${pairHeadSize.value}px`;

      pairSpecimenBody.style.fontFamily = `'${bFont.name}', sans-serif`;
      pairSpecimenBody.style.fontWeight = bW;
      pairSpecimenBody.style.fontVariationSettings = bFont.variable ? `'wght' ${bW}` : "normal";
      pairSpecimenBody.style.fontSize = `${pairBodySize.value}px`;

      if (pairDockReadout) {
        pairDockReadout.textContent = `${hFont.name} + ${bFont.name}`;
      }
    }

    syncPairBounds(pairHeadSelect, pairHeadWeight);
    syncPairBounds(pairBodySelect, pairBodyWeight);
    updatePairPreview();

    pairHeadSelect.addEventListener("change", () => {
      syncPairBounds(pairHeadSelect, pairHeadWeight);
      updatePairPreview();
    });

    pairBodySelect.addEventListener("change", () => {
      syncPairBounds(pairBodySelect, pairBodyWeight);
      updatePairPreview();
    });

    [pairHeadWeight, pairHeadSize, pairBodyWeight, pairBodySize].forEach((inp) => {
      inp.addEventListener("input", updatePairPreview);
    });

    pairSwapBtn.addEventListener("click", () => {
      const tempIdx = pairHeadSelect.value;
      pairHeadSelect.value = pairBodySelect.value;
      pairBodySelect.value = tempIdx;
      syncPairBounds(pairHeadSelect, pairHeadWeight);
      syncPairBounds(pairBodySelect, pairBodyWeight);
      updatePairPreview();
    });

    pairShuffleBtn.addEventListener("click", () => {
      pairHeadSelect.value = Math.floor(Math.random() * FONT_CATALOGUE.length);
      pairBodySelect.value = Math.floor(Math.random() * FONT_CATALOGUE.length);
      syncPairBounds(pairHeadSelect, pairHeadWeight);
      syncPairBounds(pairBodySelect, pairBodyWeight);
      updatePairPreview();
    });

    pairCopyCssBtn.addEventListener("click", () => {
      const hFont = FONT_CATALOGUE[pairHeadSelect.value];
      const bFont = FONT_CATALOGUE[pairBodySelect.value];
      const css = `--font-heading: '${hFont.name}', sans-serif;\n--font-body: '${bFont.name}', sans-serif;`;
      navigator.clipboard.writeText(css);
      showToast(`Copied ${hFont.name} + ${bFont.name} CSS`);
    });

    window.__setPairFont = (role, fontName) => {
      const idx = FONT_CATALOGUE.findIndex((f) => f.name === fontName);
      if (idx === -1) return;
      if (role === "heading") {
        pairHeadSelect.value = idx;
        syncPairBounds(pairHeadSelect, pairHeadWeight);
      } else {
        pairBodySelect.value = idx;
        syncPairBounds(pairBodySelect, pairBodyWeight);
      }
      updatePairPreview();
      openPairDrawer();
    };
  }

  function openPairDrawer() {
    if (!pairDrawer) return;
    pairDrawerOpen = true;
    pairDrawer.style.visibility = "visible";
    pairDrawer.setAttribute("aria-hidden", "false");
    if (pairDockPill) pairDockPill.setAttribute("aria-expanded", "true");
    gsap.to(pairDrawer, {
      y: "0%",
      duration: 0.48,
      ease: "expo.out"
    });
  }

  function closePairDrawer() {
    if (!pairDrawer) return;
    pairDrawerOpen = false;
    pairDrawer.setAttribute("aria-hidden", "true");
    if (pairDockPill) pairDockPill.setAttribute("aria-expanded", "false");
    gsap.to(pairDrawer, {
      y: "105%",
      duration: 0.38,
      ease: "power3.inOut",
      onComplete: () => {
        if (!pairDrawerOpen) pairDrawer.style.visibility = "hidden";
      }
    });
  }

  if (pairDockPill) {
    pairDockPill.addEventListener("click", () => {
      if (pairDrawerOpen) closePairDrawer();
      else openPairDrawer();
    });
  }

  if (pairCloseBtn) {
    pairCloseBtn.addEventListener("click", closePairDrawer);
  }

  initPairingStudio();

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
          const naturalKeystrokeDelay = 78 + Math.floor(Math.random() * 44);
          const timerId = setTimeout(nextKeystroke, naturalKeystrokeDelay);
          typingTimers.push(timerId);
        } else {
          const finishId = setTimeout(() => {
            cursorNode.classList.add("done");
          }, 550);
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

    const visibleFonts = FONT_CATALOGUE.filter((font) => {
      const catMatch =
        activeCat === "all"
          ? true
          : activeCat === "variable"
          ? font.variable
          : font.category === activeCat;

      const licMatch =
        activeLic === "all" ? true : font.licenseType === activeLic;

      const queryMatch =
        font.name.toLowerCase().includes(query) ||
        font.source.toLowerCase().includes(query) ||
        font.licenseLabel.toLowerCase().includes(query);

      return catMatch && licMatch && queryMatch;
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
              typeTextNaturally(typedTextEl, typedCursorEl, fontName, 80 + staggerOrder * 80);
            }
          });
        },
        { threshold: 0.1 }
      );
    }

    visibleFonts.forEach((font, idx) => {
      const row = document.createElement("div");
      row.className = "type-row";
      row.dataset.fontName = font.name;
      row.dataset.order = idx;

      const defaultWeight = getDefaultWeight(font);
      const availableWeights = getFontAvailableWeights(font);
      const hasItal = fontHasItalic(font);
      const hasVariants = Boolean(font.variants && font.variants.length > 0);
      const wghtAxis = font.axes.find((a) => a.tag === "wght");
      const hasVariableWeight = Boolean(font.variable && wghtAxis);

      const familyCss = `'${font.name}', sans-serif`;
      const primaryFile = font.files[0][0];
      const downloadPath = `fonts/${font.folder}/${primaryFile}`;

      const variableBadgeHtml = font.variable
        ? `<span class="row-badge badge-var">Variable</span>`
        : "";

      const licenseBadgeHtml =
        font.licenseType === "open"
          ? `<span class="row-badge badge-open">Open Source / Free</span>`
          : `<span class="row-badge badge-restricted">Restricted</span>`;

      let topPillsHtml = "";

      if (hasVariants) {
        topPillsHtml = font.variants
          .map(
            (v, vIdx) =>
              `<button type="button" class="weight-pill variant-pill ${vIdx === 0 ? "active" : ""}" data-variant="${v.label}">${v.label}</button>`
          )
          .join("");
      } else if (font.name === "Climate Crisis") {
        topPillsHtml = [1979, 1990, 2010, 2030, 2050]
          .map(
            (yr) =>
              `<button type="button" class="weight-pill year-pill ${yr === 1990 ? "active" : ""}" data-year="${yr}">${yr}</button>`
          )
          .join("");
      } else if (availableWeights.length > 1) {
        topPillsHtml = availableWeights
          .map((w) => {
            const label = WEIGHT_LABELS[w] || `Wght ${w}`;
            return `<button type="button" class="weight-pill w-select-pill ${w === defaultWeight ? "active" : ""}" data-w="${w}">${label}</button>`;
          })
          .join("");
      } else {
        const singleW = availableWeights[0] || 400;
        const singleLabel = WEIGHT_LABELS[singleW] || `Regular ${singleW}`;
        topPillsHtml = `<span class="weight-pill static-only-badge">Single Weight · ${singleLabel}</span>`;
      }

      if (hasItal) {
        topPillsHtml += `<button type="button" class="weight-pill italic-toggle-pill" data-italic="false">Italic</button>`;
      }

      const weightSliderCardHtml = hasVariableWeight
        ? `<label class="control-card">
            <div class="control-header">
              <span class="control-name">Variable Weight (wght)</span>
              <span class="control-val w-val">${defaultWeight}</span>
            </div>
            <input type="range" class="w-range" min="${wghtAxis.min}" max="${wghtAxis.max}" step="10" value="${defaultWeight}">
          </label>`
        : "";

      const extraAxesSlidersHtml = font.axes
        .filter((ax) => ax.tag !== "wght")
        .map(
          (ax) => `
          <label class="control-card">
            <div class="control-header">
              <span class="control-name">${ax.name} (${ax.tag})</span>
              <span class="control-val ax-val" data-tag="${ax.tag}">${ax.default}</span>
            </div>
            <input type="range" class="ax-range" data-tag="${ax.tag}" min="${ax.min}" max="${ax.max}" step="${ax.step || 1}" value="${ax.default}">
          </label>
        `
        )
        .join("");

      const sourceBtnHtml = font.sourceUrl
        ? `<a href="${font.sourceUrl}" target="_blank" rel="noopener noreferrer" class="studio-btn"><i class="ph-bold ph-arrow-up-right"></i> Source</a>`
        : "";

      row.innerHTML = `
        <button type="button" class="row-trigger" aria-expanded="false">
          <span class="row-display-name" style="font-family: ${familyCss}; font-weight: ${defaultWeight};">
            <span class="typed-text"></span><span class="typed-cursor"></span>
          </span>
          <span class="row-meta">
            ${variableBadgeHtml}
            ${licenseBadgeHtml}
            <span class="row-badge">${font.source}</span>
            <span class="row-toggle-icon"><i class="ph-bold ph-plus"></i></span>
          </span>
        </button>

        <div class="row-drawer">
          <div class="studio-panel">
            <div class="studio-meta-strip">
              <div class="meta-strip-left">
                ${variableBadgeHtml}
                ${licenseBadgeHtml}
                <span class="row-badge">${font.source}</span>
                <div class="license-detail-banner">
                  <i class="ph-bold ${font.licenseType === "open" ? "ph-check-circle" : "ph-warning-circle"}"></i>
                  <span>${font.licenseLabel}</span>
                </div>
              </div>
              <div class="meta-strip-right">
                <button type="button" class="pair-assign-btn set-head-btn"><i class="ph-bold ph-text-h"></i> Set Heading</button>
                <button type="button" class="pair-assign-btn set-body-btn"><i class="ph-bold ph-article"></i> Set Body</button>
              </div>
            </div>

            <div class="specimen-stage-box">
              <div class="stage-top-bar">
                <span class="stage-caption"><i class="ph-bold ph-pencil-simple"></i> Click specimen text to edit live</span>
                <div class="weight-pills">
                  ${topPillsHtml}
                </div>
              </div>

              <div class="fox-specimen" contenteditable="true" spellcheck="false" style="font-family: ${familyCss}; font-weight: ${defaultWeight};">The quick brown fox jumps over the lazy dog</div>
            </div>

            <div class="controls-grid">
              ${weightSliderCardHtml}

              <label class="control-card">
                <div class="control-header">
                  <span class="control-name">Preview Size</span>
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

              ${extraAxesSlidersHtml}
            </div>

            <div class="studio-bottom-grid">
              <div class="charset-box">
                <span class="box-heading">Character Set</span>
                <div class="glyph-showcase-text" style="font-family: ${familyCss}; font-weight: ${defaultWeight};">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
                  abcdefghijklmnopqrstuvwxyz<br>
                  0123456789 !@#$%^&amp;*()_+-=[]{}|;:'",.&lt;&gt;?
                </div>
              </div>

              <div class="actions-box">
                <div>
                  <span class="box-heading">CSS Usage</span>
                  <div class="code-preview" style="margin-top: 10px;">font-family: '${font.name}', sans-serif;</div>
                </div>
                <div class="action-buttons-row">
                  <button type="button" class="studio-btn copy-css-btn"><i class="ph-bold ph-copy"></i> Copy CSS</button>
                  <button type="button" class="studio-btn copy-face-btn"><i class="ph-bold ph-code"></i> Copy @font-face</button>
                  ${sourceBtnHtml}
                  <a href="${downloadPath}" download="${primaryFile}" class="studio-btn primary-action"><i class="ph-bold ph-download-simple"></i> Download</a>
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
        typeTextNaturally(typedTextEl, typedCursorEl, font.name, idx * 75);
      } else {
        typedTextEl.textContent = font.name;
        typedCursorEl.classList.add("done");
      }

      const trigger = row.querySelector(".row-trigger");
      const rowDisplayName = row.querySelector(".row-display-name");
      const drawer = row.querySelector(".row-drawer");
      const foxSpecimen = row.querySelector(".fox-specimen");
      const glyphShowcase = row.querySelector(".glyph-showcase-text");
      const wRange = row.querySelector(".w-range");
      const sRange = row.querySelector(".s-range");
      const tRange = row.querySelector(".t-range");
      const wVal = row.querySelector(".w-val");
      const sVal = row.querySelector(".s-val");
      const tVal = row.querySelector(".t-val");
      const wSelectPills = row.querySelectorAll(".w-select-pill");
      const variantPills = row.querySelectorAll(".variant-pill");
      const yearPills = row.querySelectorAll(".year-pill");
      const italicTogglePill = row.querySelector(".italic-toggle-pill");
      const extraAxRanges = row.querySelectorAll(".ax-range");

      let currentWeight = defaultWeight;
      let isItalic = false;

      function applyTypographyState() {
        const fontStyleVal = isItalic ? "italic" : "normal";
        foxSpecimen.style.fontWeight = currentWeight;
        foxSpecimen.style.fontStyle = fontStyleVal;
        rowDisplayName.style.fontWeight = currentWeight;
        rowDisplayName.style.fontStyle = fontStyleVal;
        if (glyphShowcase) {
          glyphShowcase.style.fontWeight = currentWeight;
          glyphShowcase.style.fontStyle = fontStyleVal;
        }
        if (wVal) wVal.textContent = currentWeight;

        if (font.variable) {
          const settings = [];
          if (hasVariableWeight) {
            settings.push(`'wght' ${currentWeight}`);
          }
          extraAxRanges.forEach((axInput) => {
            const tag = axInput.dataset.tag;
            const val = Number(axInput.value);
            settings.push(`'${tag}' ${val}`);
            const labelEl = row.querySelector(`.ax-val[data-tag="${tag}"]`);
            if (labelEl) labelEl.textContent = val;
          });
          const varString = settings.join(", ");
          foxSpecimen.style.fontVariationSettings = varString;
          rowDisplayName.style.fontVariationSettings = varString;
          if (glyphShowcase) glyphShowcase.style.fontVariationSettings = varString;
        }
      }

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
          applyTypographyState();
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

      if (wRange) {
        wRange.addEventListener("input", () => {
          currentWeight = Number(wRange.value);
          applyTypographyState();
          wSelectPills.forEach((p) => p.classList.toggle("active", Number(p.dataset.w) === currentWeight));
        });
      }

      wSelectPills.forEach((pill) => {
        pill.addEventListener("click", () => {
          currentWeight = Number(pill.dataset.w);
          if (wRange) wRange.value = currentWeight;
          wSelectPills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          applyTypographyState();
        });
      });

      variantPills.forEach((pill) => {
        pill.addEventListener("click", () => {
          const variantLabel = pill.dataset.variant;
          const variantFam = `'${font.name}__${variantLabel}', sans-serif`;
          foxSpecimen.style.fontFamily = variantFam;
          rowDisplayName.style.fontFamily = variantFam;
          if (glyphShowcase) glyphShowcase.style.fontFamily = variantFam;
          variantPills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
        });
      });

      yearPills.forEach((pill) => {
        pill.addEventListener("click", () => {
          const yr = Number(pill.dataset.year);
          const yrInput = row.querySelector('.ax-range[data-tag="YEAR"]');
          if (yrInput) yrInput.value = yr;
          yearPills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          applyTypographyState();
        });
      });

      if (italicTogglePill) {
        italicTogglePill.addEventListener("click", () => {
          isItalic = !isItalic;
          italicTogglePill.classList.toggle("active", isItalic);
          applyTypographyState();
        });
      }

      extraAxRanges.forEach((axInput) => {
        axInput.addEventListener("input", () => {
          if (axInput.dataset.tag === "YEAR") {
            yearPills.forEach((p) => p.classList.toggle("active", Number(p.dataset.year) === Number(axInput.value)));
          }
          applyTypographyState();
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

      row.querySelector(".set-head-btn").addEventListener("click", () => {
        if (window.__setPairFont) window.__setPairFont("heading", font.name);
      });

      row.querySelector(".set-body-btn").addEventListener("click", () => {
        if (window.__setPairFont) window.__setPairFont("body", font.name);
      });

      row.querySelector(".copy-css-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(`font-family: '${font.name}', sans-serif;`);
        showToast(`Copied ${font.name} CSS`);
      });

      row.querySelector(".copy-face-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(buildFontFaceSnippet(font));
        showToast(`Copied ${font.name} @font-face`);
      });

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

  licBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      licBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeLic = btn.dataset.lic;
      renderIndex(false);
    });
  });

  renderIndex(true);
}

document.addEventListener("DOMContentLoaded", () => {
  injectLocalFontFaces();
  const page = document.body.dataset.page;
  if (page === "home") {
    initGsapHome();
  } else if (page === "library") {
    initLibraryIndex();
  }
});
