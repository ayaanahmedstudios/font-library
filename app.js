const FONT_CATALOGUE = [
  {
    name: "Aktura",
    folder: "Aktura",
    category: "display",
    source: "Fontshare",
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
    licenseType: "open",
    licenseLabel: "Free Commercial (Fontshare)",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 700, default: 400 }],
    files: [["Bonny-Variable.ttf", "100 700", "normal"]]
  },
  {
    name: "Borel",
    folder: "Borel",
    category: "display",
    source: "Google Fonts",
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [["Borel-Regular.ttf", 400, "normal"]]
  },
  {
    name: "Boska",
    folder: "Boska Variable",
    category: "serif",
    source: "Fontshare",
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
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: true,
    axes: [{ tag: "YEAR", name: "Year Axis", min: 1979, max: 2050, default: 1990 }],
    files: [
      ["ClimateCrisis-Variable.ttf", "100 900", "normal"],
      ["ClimateCrisis-1979.otf", 900, "normal"],
      ["ClimateCrisis-2050.otf", 100, "normal"]
    ]
  },
  {
    name: "CM Geom",
    folder: "CM Geom",
    category: "sans",
    source: "Cedric Müller",
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
    licenseType: "restricted",
    licenseLabel: "Free Regular Desktop / Paid Commercial Variants",
    variable: false,
    axes: [],
    files: [
      ["coolvetica rg.otf", 400, "normal"],
      ["coolvetica rg it.otf", 400, "italic"],
      ["coolvetica condensed rg.otf", 300, "normal"],
      ["coolvetica crammed rg.otf", 700, "normal"],
      ["coolvetica compressed hv.otf", 900, "normal"]
    ]
  },
  {
    name: "Coral Pixels",
    folder: "Coral Pixels",
    category: "mono",
    source: "Google Fonts",
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
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["FT88-Regular.ttf", 400, "normal"],
      ["FT88-Italic.ttf", 400, "italic"],
      ["FT88-Bold.ttf", 700, "normal"],
      ["FT88-Expanded.ttf", 500, "normal"],
      ["FT88-Gothique.ttf", 600, "normal"],
      ["FT88-School.ttf", 300, "normal"],
      ["FT88-Serif.ttf", 800, "normal"]
    ]
  },
  {
    name: "Geist",
    folder: "Geist",
    category: "sans",
    source: "Google Fonts / Vercel",
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
    licenseType: "open",
    licenseLabel: "Open Source (SIL OFL)",
    variable: false,
    axes: [],
    files: [
      ["GeistPixel-Square.otf", 400, "normal"],
      ["GeistPixel-Circle.otf", 300, "normal"],
      ["GeistPixel-Grid.otf", 500, "normal"],
      ["GeistPixel-Line.otf", 700, "normal"],
      ["GeistPixel-Triangle.otf", 800, "normal"]
    ]
  },
  {
    name: "General Sans",
    folder: "General Sans Variable",
    category: "sans",
    source: "Fontshare",
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
    licenseType: "open",
    licenseLabel: "Free Open Release",
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 40, max: 300, default: 120 }],
    files: [["PicaflorGX.ttf", "40 300", "normal"]]
  },
  {
    name: "Poppins",
    folder: "Poppins Variable",
    category: "sans",
    source: "Google Fonts / Fontshare",
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

function injectLocalFontFaces() {
  const rules = [];
  FONT_CATALOGUE.forEach((font) => {
    font.files.forEach(([filename, weight, style]) => {
      const ext = filename.toLowerCase().endsWith(".otf") ? "opentype" : "truetype";
      const path = `fonts/${font.folder}/${filename}`;
      rules.push(`@font-face {
  font-family: '${font.name}';
  src: url("${path}") format('${ext}');
  font-weight: ${weight};
  font-style: ${style};
  font-display: swap;
}`);
    });
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
  const guides = document.querySelectorAll(".metric-guide");

  if (!hero || typeof gsap === "undefined") return;

  hero.innerHTML = "";
  const words = ["Font", "Library"];
  const slots = [];
  const tracks = [];
  const mains = [];
  const wires = [];

  words.forEach((word) => {
    const wordEl = document.createElement("span");
    wordEl.className = "gsap-word";

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const slot = document.createElement("span");
      slot.className = "char-slot";
      slot.dataset.char = ch;

      slot.innerHTML = `
        <span class="char-track">
          <span class="char-main">${ch}</span>
          <span class="char-wire" aria-hidden="true">${ch}</span>
        </span>
      `;

      wordEl.appendChild(slot);
      slots.push(slot);
      tracks.push(slot.querySelector(".char-track"));
      mains.push(slot.querySelector(".char-main"));
      wires.push(slot.querySelector(".char-wire"));
    }

    hero.appendChild(wordEl);
  });

  function positionInspectorOnSlot(slotIndex, labelText, immediate = false) {
    if (!inspectorBox || !rig || !slots[slotIndex]) return;
    const rigRect = rig.getBoundingClientRect();
    const slotRect = slots[slotIndex].getBoundingClientRect();
    const x = slotRect.left - rigRect.left - 4;
    const y = slotRect.top - rigRect.top + slotRect.height * 0.08;
    const w = slotRect.width + 8;
    const h = slotRect.height * 0.82;

    if (inspectorTag && labelText) {
      inspectorTag.textContent = labelText;
    }

    if (immediate) {
      gsap.set(inspectorBox, { x, y, width: w, height: h });
    } else {
      gsap.to(inspectorBox, {
        x,
        y,
        width: w,
        height: h,
        duration: 0.55,
        ease: "expo.inOut"
      });
    }
  }

  let masterTl;

  function playCleanArchitecturalSequence() {
    if (masterTl) masterTl.kill();

    gsap.set(slots, { x: 0, y: 0 });
    gsap.set(tracks, { yPercent: 0, x: 0 });
    gsap.set(mains, {
      yPercent: 0,
      x: 0,
      y: 0,
      fontWeight: 800,
      color: "#F5F7FA",
      opacity: 1
    });
    gsap.set(wires, { yPercent: 0 });
    gsap.set(guides, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
    if (inspectorBox) gsap.set(inspectorBox, { opacity: 0 });

    masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 });

    masterTl
      .to(
        guides,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "expo.out"
        },
        0
      )
      .fromTo(
        tracks,
        {
          yPercent: (i) => (i % 2 === 0 ? 110 : -110)
        },
        {
          yPercent: 0,
          duration: 1.0,
          stagger: { each: 0.045, from: "start" },
          ease: "expo.out"
        },
        0.05
      )
      .add(() => {
        positionInspectorOnSlot(0, "F • wght 800", true);
      }, 0.95)
      .to(
        inspectorBox,
        {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out"
        },
        0.98
      )
      .to(
        mains[0],
        {
          fontWeight: 200,
          color: "#0AE448",
          duration: 0.45,
          ease: "power2.inOut",
          onStart: () => {
            if (inspectorTag) inspectorTag.textContent = "F • wght 200";
          }
        },
        1.2
      )
      .to(
        mains[0],
        {
          fontWeight: 800,
          color: "#F5F7FA",
          duration: 0.45,
          ease: "expo.out",
          onStart: () => {
            if (inspectorTag) inspectorTag.textContent = "F • wght 800";
          }
        },
        1.68
      )
      .add(() => {
        positionInspectorOnSlot(4, "L • slot roll", false);
      }, 2.1)
      .to(
        tracks,
        {
          yPercent: -100,
          duration: 0.65,
          stagger: { each: 0.038, from: "start" },
          ease: "expo.inOut"
        },
        2.25
      )
      .to(
        tracks,
        {
          yPercent: 0,
          duration: 0.75,
          stagger: { each: 0.038, from: "center" },
          ease: "expo.out"
        },
        3.05
      )
      .add(() => {
        positionInspectorOnSlot(10, "y • kerning +14", false);
      }, 3.65)
      .to(
        slots,
        {
          x: (i) => (i - 5) * 10,
          duration: 0.55,
          ease: "expo.out"
        },
        3.85
      )
      .to(
        mains,
        {
          fontWeight: 200,
          y: -14,
          color: "#0AE448",
          duration: 0.45,
          stagger: { each: 0.04, from: "start" },
          ease: "power2.out"
        },
        3.85
      )
      .to(
        mains,
        {
          fontWeight: 800,
          y: 0,
          color: "#F5F7FA",
          duration: 0.65,
          stagger: { each: 0.04, from: "start" },
          ease: "expo.out"
        },
        4.35
      )
      .to(
        slots,
        {
          x: 0,
          duration: 0.7,
          ease: "expo.inOut"
        },
        4.45
      )
      .to(
        [inspectorBox, guides],
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut"
        },
        5.1
      );
  }

  document.fonts.ready.then(() => {
    playCleanArchitecturalSequence();
  });

  window.addEventListener("resize", () => {
    if (inspectorBox && gsap.getProperty(inspectorBox, "opacity") > 0.1) {
      positionInspectorOnSlot(0, "F • wght 800", true);
    }
  });

  slots.forEach((slot, idx) => {
    slot.addEventListener("pointerenter", () => {
      if (inspectorBox) {
        gsap.to(inspectorBox, { opacity: 1, duration: 0.2 });
        positionInspectorOnSlot(idx, `${slot.dataset.char} • wght 300`, false);
      }
      gsap.to(mains[idx], {
        y: -14,
        fontWeight: 300,
        color: "#0AE448",
        duration: 0.35,
        overwrite: "auto",
        ease: "expo.out"
      });
    });

    slot.addEventListener("pointerleave", () => {
      gsap.to(mains[idx], {
        y: 0,
        fontWeight: 800,
        color: "#F5F7FA",
        duration: 0.45,
        overwrite: "auto",
        ease: "expo.out"
      });
    });
  });

  hero.addEventListener("click", () => {
    playCleanArchitecturalSequence();
  });
}

function initLibraryIndex() {
  const listEl = document.getElementById("typeIndexList");
  const searchInput = document.getElementById("fontSearch");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const licBtns = document.querySelectorAll(".lic-btn");
  const tabGlider = document.getElementById("tabGlider");
  const footerCountMeta = document.getElementById("footerCountMeta");

  if (!listEl) return;

  let activeCat = "all";
  let activeLic = "all";
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
          const naturalKeystrokeDelay = 80 + Math.floor(Math.random() * 45);
          const timerId = setTimeout(nextKeystroke, naturalKeystrokeDelay);
          typingTimers.push(timerId);
        } else {
          const finishId = setTimeout(() => {
            cursorNode.classList.add("done");
          }, 600);
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

    if (footerCountMeta) {
      footerCountMeta.textContent = `Showing ${visibleFonts.length} of ${FONT_CATALOGUE.length} Typeface Families • Local Archive`;
    }

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
              typeTextNaturally(typedTextEl, typedCursorEl, fontName, 90 + staggerOrder * 85);
            }
          });
        },
        { threshold: 0.12 }
      );
    }

    visibleFonts.forEach((font, idx) => {
      const row = document.createElement("div");
      row.className = "type-row";
      row.dataset.fontName = font.name;
      row.dataset.order = idx;

      const familyCss = `'${font.name}', 'General Sans', sans-serif`;
      const primaryFile = font.files[0][0];
      const downloadPath = `fonts/${font.folder}/${primaryFile}`;

      const variableBadgeHtml = font.variable
        ? `<span class="row-badge badge-var">Variable</span>`
        : "";

      const licenseBadgeHtml =
        font.licenseType === "open"
          ? `<span class="row-badge badge-open">Open Source / Free</span>`
          : `<span class="row-badge badge-restricted">Restricted License</span>`;

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

      const wghtAxis = font.axes.find((a) => a.tag === "wght");
      const minW = wghtAxis ? wghtAxis.min : 100;
      const maxW = wghtAxis ? wghtAxis.max : 900;
      const stepW = font.variable ? 10 : 100;

      row.innerHTML = `
        <button type="button" class="row-trigger" aria-expanded="false">
          <span class="row-display-name" style="font-family: ${familyCss};">
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
                <span class="row-badge">${font.files.length} ${font.files.length === 1 ? "File" : "Files"} in /fonts/${font.folder}</span>
              </div>
              <div class="license-detail-banner">
                <i class="ph-bold ${font.licenseType === "open" ? "ph-check-circle" : "ph-warning-circle"}"></i>
                <span>${font.licenseLabel}</span>
              </div>
            </div>

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

              <div class="fox-specimen" contenteditable="true" spellcheck="false" style="font-family: ${familyCss};">The quick brown fox jumps over the lazy dog</div>
            </div>

            <div class="controls-grid">
              <label class="control-card">
                <div class="control-header">
                  <span class="control-name">${font.variable ? "Variable Weight (wght)" : "Weight"}</span>
                  <span class="control-val w-val">400</span>
                </div>
                <input type="range" class="w-range" min="${minW}" max="${maxW}" step="${stepW}" value="400">
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

              ${extraAxesSlidersHtml}
            </div>

            <div class="studio-bottom-grid">
              <div class="charset-box">
                <span class="box-heading">Character Set</span>
                <div class="glyph-showcase-text" style="font-family: ${familyCss};">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
                  abcdefghijklmnopqrstuvwxyz<br>
                  0123456789 !@#$%^&amp;*()_+-=[]{}|;:'",.&lt;&gt;?
                </div>
              </div>

              <div class="actions-box">
                <div>
                  <span class="box-heading">Local Repository Path &amp; CSS</span>
                  <div class="code-preview" style="margin-top: 10px;">font-family: '${font.name}', sans-serif;</div>
                </div>
                <div class="action-buttons-row">
                  <button type="button" class="studio-btn copy-css-btn"><i class="ph-bold ph-copy"></i> Copy CSS</button>
                  <button type="button" class="studio-btn copy-face-btn"><i class="ph-bold ph-code"></i> Copy @font-face</button>
                  <a href="${downloadPath}" download="${primaryFile}" class="studio-btn primary-action"><i class="ph-bold ph-download-simple"></i> Download Font</a>
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
        typeTextNaturally(typedTextEl, typedCursorEl, font.name, idx * 80);
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
      const extraAxRanges = row.querySelectorAll(".ax-range");

      function syncVariationSettings() {
        const currentWeight = Number(wRange.value);
        foxSpecimen.style.fontWeight = currentWeight;
        wVal.textContent = currentWeight;

        if (font.variable) {
          const settings = [`'wght' ${currentWeight}`];
          extraAxRanges.forEach((axInput) => {
            const tag = axInput.dataset.tag;
            const val = Number(axInput.value);
            settings.push(`'${tag}' ${val}`);
            const labelEl = row.querySelector(`.ax-val[data-tag="${tag}"]`);
            if (labelEl) labelEl.textContent = val;
          });
          foxSpecimen.style.fontVariationSettings = settings.join(", ");
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
          syncVariationSettings();
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
        syncVariationSettings();
        weightPills.forEach((p) => p.classList.toggle("active", p.dataset.w === wRange.value));
      });

      extraAxRanges.forEach((axInput) => {
        axInput.addEventListener("input", syncVariationSettings);
      });

      weightPills.forEach((pill) => {
        pill.addEventListener("click", () => {
          const weight = pill.dataset.w;
          wRange.value = weight;
          syncVariationSettings();
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
