
import { useState } from "react";

type Page =
  | "home"
  | "trends"
  | "tips"
  | "videos"
  | "articles"
  | "ebooks"
  | "about";

type Language = "fr" | "en";
type Theme = "light" | "dark";

type Article = {
  id: number;
  category: string;
  categoryEn: string;
  title: string;
  en: string;
  summary: string;
  summaryEn: string;
  body: string[];
  bodyEn: string[];
  source: string;
};

type EbookResource = {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  organization: string;
  url: string;
};

type VideoResource = {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  url: string;
};

const articles: Article[] = [
  {
    id: 1,
    category: "Nutrition",
    categoryEn: "Nutrition",
    title: "Comment construire une alimentation équilibrée",
    en: "How to Build a Balanced Diet",
    summary:
      "Des habitudes simples pour varier les aliments et mieux organiser ses repas.",
    summaryEn:
      "Simple habits to diversify foods and plan balanced meals.",
    body: [
      "Une alimentation équilibrée repose sur la variété, la modération et des habitudes adaptées à ses besoins. Il n'est pas nécessaire d'acheter des produits coûteux pour commencer.",
      "Variez les aliments disponibles localement : légumes, fruits, céréales, légumineuses et sources de protéines. Buvez de l'eau régulièrement et adaptez les portions à votre faim et à votre activité.",
      "Conseil pratique : planifiez quelques repas à l'avance et privilégiez les aliments peu transformés lorsque cela est possible. Les besoins varient selon l'âge, l'activité et l'état de santé."
    ],
    bodyEn: [
      "A balanced diet relies on variety, moderation, and habits suited to individual needs. You do not need expensive products to get started.",
      "Choose a variety of locally available foods, including vegetables, fruit, grains, legumes, and protein sources. Drink water regularly and adapt portions to your appetite and activity.",
      "Practical tip: plan a few meals ahead and choose minimally processed foods when possible. Needs vary with age, activity, and health."
    ],
    source: "https://www.who.int/health-topics/healthy-diet"
  },
  {
    id: 2,
    category: "Sommeil",
    categoryEn: "Sleep",
    title: "7 habitudes pour améliorer son sommeil",
    en: "7 Habits for Better Sleep",
    summary:
      "Une routine régulière peut aider à créer de meilleures conditions pour dormir.",
    summaryEn:
      "A regular routine can help create better conditions for sleep.",
    body: [
      "Le sommeil participe au bien-être, à la mémoire et à la concentration. La quantité nécessaire varie selon l'âge et les personnes.",
      "Essayez de vous coucher et de vous lever à des heures régulières. Gardez votre chambre calme, sombre et confortable. Limitez la caféine en fin de journée et détendez-vous avant le coucher.",
      "Si vos difficultés de sommeil persistent ou affectent votre vie quotidienne, demandez conseil à un professionnel de santé."
    ],
    bodyEn: [
      "Sleep supports well-being, memory, and concentration. Sleep needs vary with age and from person to person.",
      "Try to go to bed and wake up at regular times. Keep your bedroom quiet, dark, and comfortable. Limit caffeine late in the day and relax before bedtime.",
      "If sleep difficulties persist or affect daily life, seek advice from a healthcare professional."
    ],
    source:
      "https://www.nhlbi.nih.gov/resources/brief-your-guide-healthy-sleep-fact-sheet"
  },
  {
    id: 3,
    category: "Activité physique",
    categoryEn: "Physical activity",
    title: "Bouger davantage au quotidien",
    en: "Move More Every Day",
    summary:
      "Marcher, danser et faire des activités quotidiennes peuvent contribuer à un mode de vie actif.",
    summaryEn:
      "Walking, dancing, and everyday activities can support an active lifestyle.",
    body: [
      "L'activité physique ne se limite pas à la salle de sport. Marcher, danser, faire du vélo ou effectuer certaines tâches quotidiennes sont différentes façons de bouger.",
      "Commencez progressivement avec une activité adaptée à votre condition. Choisissez quelque chose que vous appréciez et augmentez la durée selon vos capacités.",
      "Les recommandations dépendent notamment de l'âge et de l'état de santé. Consultez les conseils officiels de l'Organisation mondiale de la Santé."
    ],
    bodyEn: [
      "Physical activity is not limited to the gym. Walking, dancing, cycling, and some everyday tasks are all ways to move.",
      "Start gradually with an activity suited to your condition. Choose something you enjoy and increase the duration according to your abilities.",
      "Recommendations depend on factors such as age and health. Consult official World Health Organization guidance."
    ],
    source: "https://www.who.int/health-topics/physical-activity"
  },
  {
    id: 4,
    category: "Bien-être",
    categoryEn: "Well-being",
    title: "Des pauses pour mieux gérer le stress",
    en: "Simple Ways to Manage Stress",
    summary:
      "Des exercices simples pour prendre du recul pendant une journée chargée.",
    summaryEn:
      "Simple exercises to help you pause during a busy day.",
    body: [
      "Le stress fait partie de la vie, mais des moments de pause peuvent aider certaines personnes à mieux traverser les journées difficiles.",
      "Essayez de respirer lentement, de marcher quelques minutes, de parler à une personne de confiance ou de diviser une tâche difficile en petites étapes.",
      "Ces habitudes ne remplacent pas une aide professionnelle. Si le stress devient intense ou persistant, cherchez un soutien adapté."
    ],
    bodyEn: [
      "Stress is part of life, but taking breaks may help some people cope with difficult days.",
      "Try breathing slowly, walking for a few minutes, talking to someone you trust, or breaking a difficult task into smaller steps.",
      "These habits do not replace professional support. If stress becomes intense or persistent, seek appropriate help."
    ],
    source: "https://www.nimh.nih.gov/health"
  },
  {
    id: 5,
    category: "Habitudes saines",
    categoryEn: "Healthy habits",
    title: "Comment construire une routine durable",
    en: "How to Build a Sustainable Routine",
    summary:
      "Commencez petit, répétez vos habitudes et adaptez votre programme à votre quotidien.",
    summaryEn:
      "Start small, repeat your habits, and adapt your routine to everyday life.",
    body: [
      "Une routine utile doit être réaliste. Il est souvent plus facile de commencer par une petite habitude que de modifier toute sa journée d'un seul coup.",
      "Choisissez un objectif précis : marcher quelques minutes, préparer un repas ou prévoir une heure de coucher régulière. Associez cette habitude à une activité que vous faites déjà.",
      "Suivez vos progrès sans chercher la perfection. Ajustez votre routine quand votre emploi du temps change."
    ],
    bodyEn: [
      "A useful routine should be realistic. Starting with one small habit is often easier than changing your entire day at once.",
      "Choose a specific goal: walk for a few minutes, prepare a meal, or set a regular bedtime. Connect the new habit to something you already do.",
      "Track your progress without expecting perfection. Adjust your routine when your schedule changes."
    ],
    source: "https://www.who.int/health-topics"
  }
];

const ebooks: EbookResource[] = [
  {
    title: "Guide pour un sommeil sain",
    titleEn: "Your Guide to Healthy Sleep",
    description: "Fiche et ressources officielles sur le sommeil.",
    descriptionEn: "Official sleep information and resources.",
    organization: "NHLBI",
    url: "https://www.nhlbi.nih.gov/resources/brief-your-guide-healthy-sleep-fact-sheet"
  },
  {
    title: "Activité physique",
    titleEn: "Physical Activity",
    description: "Informations et recommandations de l'OMS.",
    descriptionEn: "World Health Organization information and recommendations.",
    organization: "OMS / WHO",
    url: "https://www.who.int/health-topics/physical-activity"
  },
  {
    title: "E-books gratuits sur la santé",
    titleEn: "Free Health E-books",
    description: "Livres électroniques et ressources de santé du NIH.",
    descriptionEn: "Health e-books and resources from the NIH.",
    organization: "NIH News in Health",
    url: "https://newsinhealth.nih.gov/2017/07/free-ebooks-health"
  },
  {
    title: "Alimentation saine",
    titleEn: "Healthy Diet",
    description: "Informations pour comprendre l'alimentation équilibrée.",
    descriptionEn: "Information about healthy and balanced eating.",
    organization: "OMS / WHO",
    url: "https://www.who.int/health-topics/healthy-diet"
  },
  {
    title: "Santé mentale et bien-être",
    titleEn: "Mental Health and Well-being",
    description: "Informations et ressources sur la santé mentale.",
    descriptionEn: "Mental health information and resources.",
    organization: "NIMH",
    url: "https://www.nimh.nih.gov/health"
  },
  {
    title: "Bibliothèque de santé",
    titleEn: "Health Library",
    description: "Informations fiables et ressources médicales.",
    descriptionEn: "Reliable health information and medical resources.",
    organization: "MedlinePlus",
    url: "https://medlineplus.gov/"
  }
];

const videos: VideoResource[] = [
  {
    title: "Nutrition et alimentation saine",
    titleEn: "Nutrition and Healthy Eating",
    description: "Vidéos éducatives sur l'alimentation.",
    descriptionEn: "Educational videos about healthy eating.",
    url: "https://www.youtube.com/results?search_query=healthy+eating+official+health+education"
  },
  {
    title: "Sommeil et récupération",
    titleEn: "Sleep and Recovery",
    description: "Contenus éducatifs sur les habitudes de sommeil.",
    descriptionEn: "Educational content about healthy sleep habits.",
    url: "https://www.youtube.com/results?search_query=healthy+sleep+official+health+education"
  },
  {
    title: "Activité physique",
    titleEn: "Physical Activity",
    description: "Idées pour bouger davantage au quotidien.",
    descriptionEn: "Ideas to move more every day.",
    url: "https://www.youtube.com/results?search_query=WHO+physical+activity+health"
  },
  {
    title: "Bien-être et gestion du stress",
    titleEn: "Well-being and Stress Management",
    description: "Exercices et explications sur le bien-être.",
    descriptionEn: "Exercises and explanations about well-being.",
    url: "https://www.youtube.com/results?search_query=stress+management+health+education"
  }
];

const translations = {
  fr: {
    home: "Accueil",
    trends: "Tendances",
    tips: "Conseils",
    videos: "Vidéos",
    articles: "Articles",
    ebooks: "E-books",
    about: "À propos",
    eyebrow: "VOTRE ESPACE BIEN-ÊTRE",
    headline: "De meilleures habitudes, un jour à la fois.",
    intro: "Explorez des conseils pratiques sur la nutrition, le sommeil, l'activité physique et le bien-être.",
    explore: "Explorer les conseils",
    read: "Lire les articles",
    featured: "À découvrir",
    latest: "Articles à découvrir",
    resources: "Ressources gratuites",
    viewAll: "Tout découvrir",
    search: "Rechercher un article...",
    open: "Consulter la ressource",
    back: "← Retour aux articles",
    tipsTitle: "Des habitudes simples pour votre quotidien",
    tipsIntro: "Choisissez un petit objectif et progressez à votre rythme.",
    calculator: "Mon suivi d'activité",
    minutes: "Combien de minutes avez-vous bougé aujourd'hui ?",
    calculate: "Mettre à jour",
    result: "Votre activité du jour",
    minuteLabel: "minutes",
    videosTitle: "Vidéos pour apprendre",
    videosIntro: "Ces liens ouvrent des recherches YouTube. Vérifiez la qualité et la fiabilité des vidéos.",
    ebooksTitle: "E-books et ressources gratuites",
    ebooksIntro: "Accédez à des ressources d'organismes reconnus. Certains liens ouvrent une page web plutôt qu'un PDF.",
    aboutTitle: "À propos de Trend Pulse",
    aboutText: "Trend Pulse est un espace bilingue consacré à la nutrition, au sommeil, à l'activité physique et au bien-être.",
    disclaimer: "Les informations de ce site sont éducatives et ne remplacent pas un avis médical personnalisé.",
    noResults: "Aucun article trouvé.",
    readArticle: "Lire l'article",
    source: "Source d'information",
    all: "Tous",
    more: "En savoir plus",
    quickLinks: "Explorer Trend Pulse",
    footer: "Des informations pour avancer vers un mode de vie plus sain.",
    filterTopic: "Filtrer par thème",
    seeVideos: "Voir les vidéos",
    ourGoal: "Notre objectif",
    ourSources: "Nos sources",
    importantDisclaimer: "Avertissement important",
    howToUseResources: "Comment utiliser ces ressources ?",
    officialRecommendations: "Recommandations officielles"
  },
  en: {
    home: "Home",
    trends: "Trends",
    tips: "Tips",
    videos: "Videos",
    articles: "Articles",
    ebooks: "E-books",
    about: "About",
    eyebrow: "YOUR WELLNESS SPACE",
    headline: "Better habits, one day at a time.",
    intro: "Explore practical tips on nutrition, sleep, physical activity, and well-being.",
    explore: "Explore tips",
    read: "Read articles",
    featured: "Featured",
    latest: "Articles to explore",
    resources: "Free resources",
    viewAll: "Explore all",
    search: "Search articles...",
    open: "Open resource",
    back: "← Back to articles",
    tipsTitle: "Simple habits for everyday life",
    tipsIntro: "Choose one small goal and progress at your own pace.",
    calculator: "My activity tracker",
    minutes: "How many minutes did you move today?",
    calculate: "Update",
    result: "Your activity today",
    minuteLabel: "minutes",
    videosTitle: "Videos to learn",
    videosIntro: "These links open YouTube searches. Check the quality and reliability of each video.",
    ebooksTitle: "Free e-books and resources",
    ebooksIntro: "Access resources from recognized organizations. Some links open web pages rather than PDFs.",
    aboutTitle: "About Trend Pulse",
    aboutText: "Trend Pulse is a bilingual space about nutrition, sleep, physical activity, and well-being.",
    disclaimer: "The information on this website is educational and does not replace personalized medical advice.",
    noResults: "No articles found.",
    readArticle: "Read article",
    source: "Information source",
    all: "All",
    more: "Learn more",
    quickLinks: "Explore Trend Pulse",
    footer: "Information to help you move toward a healthier lifestyle.",
    filterTopic: "Filter by topic",
    seeVideos: "Watch videos",
    ourGoal: "Our goal",
    ourSources: "Our sources",
    importantDisclaimer: "Important disclaimer",
    howToUseResources: "How to use these resources",
    officialRecommendations: "Official recommendations"
  }
} as const;

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/22893328956"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/trendpulses2.0/"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/14snJ1uWFZM/"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@trendpulses2.0"
  }
];

const navItems: {
  id: Page;
  labelKey: keyof typeof translations.fr;
  symbol: string;
}[] = [
  { id: "home", labelKey: "home", symbol: "⌂" },
  { id: "trends", labelKey: "trends", symbol: "✦" },
  { id: "tips", labelKey: "tips", symbol: "✓" },
  { id: "videos", labelKey: "videos", symbol: "▷" },
  { id: "articles", labelKey: "articles", symbol: "▤" },
  { id: "ebooks", labelKey: "ebooks", symbol: "▣" },
  { id: "about", labelKey: "about", symbol: "ⓘ" }
];

const themeColors = {
  light: {
    background: "#f7f7f0",
    surface: "#ffffff",
    surfaceAlt: "#edf2e9",
    text: "#26382d",
    muted: "#647267",
    border: "#e0e7dd",
    primary: "#315d43",
    primaryText: "#ffffff",
    header: "rgba(255,255,255,0.96)",
    footer: "#edf2e9",
    input: "#ffffff",
    chip: "#e5efe2",
    shadow: "0 8px 24px rgba(38,56,45,0.06)"
  },
  dark: {
    background: "#101827",
    surface: "#1e293b",
    surfaceAlt: "#263449",
    text: "#f1f5f9",
    muted: "#cbd5e1",
    border: "#334155",
    primary: "#a7d7b1",
    primaryText: "#102018",
    header: "rgba(16,24,39,0.97)",
    footer: "#111827",
    input: "#1e293b",
    chip: "#334155",
    shadow: "0 8px 24px rgba(0,0,0,0.18)"
  }
} as const;

const getStyles = (theme: Theme) => {
  const c = themeColors[theme];

  return {
    page: {
      minHeight: "100vh",
      background: c.background,
      color: c.text,
      fontFamily: "Arial, sans-serif",
      transition: "background 0.2s ease, color 0.2s ease"
    } as const,

    wrap: {
      width: "min(1120px, 100% - 32px)",
      margin: "0 auto"
    } as const,

    header: {
      position: "sticky" as const,
      top: 0,
      zIndex: 20,
      background: c.header,
      borderBottom: `1px solid ${c.border}`,
      backdropFilter: "blur(12px)"
    } as const,

    headerInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "14px 0",
      flexWrap: "wrap" as const
    } as const,

    brand: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 20,
      fontWeight: 800,
      color: c.text,
      cursor: "pointer",
      border: 0,
      background: "transparent"
    } as const,

    brandMark: {
      display: "grid",
      placeItems: "center",
      width: 38,
      height: 38,
      borderRadius: 12,
      background: c.primary,
      color: c.primaryText,
      fontWeight: 900
    } as const,

    nav: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap" as const,
      gap: 6
    } as const,

    navButton: {
      padding: "9px 12px",
      border: "none",
      borderRadius: 999,
      background: "transparent",
      color: c.text,
      fontWeight: 700,
      cursor: "pointer"
    } as const,

    activeNavButton: {
      background: c.surfaceAlt,
      color: c.primary
    } as const,

    smallButton: {
      padding: "9px 12px",
      border: `1px solid ${c.border}`,
      borderRadius: 999,
      background: c.surface,
      color: c.text,
      fontWeight: 700,
      cursor: "pointer"
    } as const,

    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "12px 18px",
      border: "none",
      borderRadius: 999,
      background: c.primary,
      color: c.primaryText,
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none"
    } as const,

    secondaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "11px 16px",
      border: `1px solid ${c.border}`,
      borderRadius: 999,
      background: c.surfaceAlt,
      color: c.text,
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none"
    } as const,

    section: {
      padding: "28px 0 44px"
    } as const,

    hero: {
      padding: "clamp(24px,5vw,54px)",
      borderRadius: 28,
      border: `1px solid ${c.border}`,
      background: `linear-gradient(135deg, ${c.surfaceAlt}, ${c.surface})`,
      boxShadow: c.shadow
    } as const,

    eyebrow: {
      color: c.primary,
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: "0.12em",
      textTransform: "uppercase" as const
    } as const,

    heading: {
      color: c.text,
      lineHeight: 1.15,
      letterSpacing: "-0.03em"
    } as const,

    lead: {
      color: c.muted,
      fontSize: 17,
      lineHeight: 1.75,
      maxWidth: 760
    } as const,

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
      gap: 18,
      marginTop: 20
    } as const,

    card: {
      padding: 22,
      border: `1px solid ${c.border}`,
      borderRadius: 20,
      background: c.surface,
      color: c.text,
      boxShadow: c.shadow,
      minWidth: 0
    } as const,

    chip: {
      display: "inline-block",
      padding: "6px 10px",
      borderRadius: 999,
      background: c.chip,
      color: c.primary,
      fontSize: 12,
      fontWeight: 700
    } as const,

    muted: {
      color: c.muted,
      lineHeight: 1.75
    } as const,

    textButton: {
      padding: 0,
      border: "none",
      background: "transparent",
      color: c.primary,
      fontWeight: 800,
      cursor: "pointer",
      textAlign: "left" as const
    } as const,

    input: {
      display: "block",
      width: "100%",
      padding: "12px 14px",
      margin: "8px 0 18px",
      border: `1px solid ${c.border}`,
      borderRadius: 12,
      background: c.input,
      color: c.text,
      fontSize: 16
    } as const,

    footer: {
      padding: "34px 0 100px",
      background: c.footer,
      color: c.text,
      borderTop: `1px solid ${c.border}`
    } as const,

    mobileNav: {
      display: "none" as const,
      position: "fixed" as const,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 30,
      justifyContent: "space-around",
      gap: 2,
      padding: "8px 4px calc(8px + env(safe-area-inset-bottom))",
      background: c.header,
      borderTop: `1px solid ${c.border}`,
      backdropFilter: "blur(12px)"
    } as const,

    mobileNavButton: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      gap: 4,
      padding: "6px 4px",
      border: "none",
      borderRadius: 10,
      background: "transparent",
      color: c.muted,
      fontSize: 10,
      fontWeight: 700,
      cursor: "pointer",
      flex: 1
    } as const,

    mobileNavActive: {
      color: c.primary,
      background: c.surfaceAlt
    } as const
  };
};
    
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minutes, setMinutes] = useState("20");

  const t = translations[language];
  const styles = getStyles(theme);

  const categories = [
    "all",
    ...Array.from(
      new Set(articles.map((article) => article.category))
    )
  ];

  const filteredArticles = articles.filter((article) => {
    const title =
      language === "fr" ? article.title : article.en;
    const summary =
      language === "fr" ? article.summary : article.summaryEn;
    const categoryName =
      language === "fr" ? article.category : article.categoryEn;

    const matchesSearch =
      `${title} ${summary} ${categoryName}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      article.category === category;

    return matchesSearch && matchesCategory;
  });

  const activeArticle = articles.find(
    (article) => article.id === selectedArticle
  );

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (id: number) => {
    setSelectedArticle(id);
    setPage("articles");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const displayTitle = (article: Article) =>
    language === "fr" ? article.title : article.en;

  const displaySummary = (article: Article) =>
    language === "fr" ? article.summary : article.summaryEn;

  const displayCategory = (article: Article) =>
    language === "fr" ? article.category : article.categoryEn;

  const displayBody = (article: Article) =>
    language === "fr" ? article.body : article.bodyEn;

  const displayVideoTitle = (video: VideoResource) =>
    language === "fr" ? video.title : video.titleEn;

  const displayVideoDescription = (video: VideoResource) =>
    language === "fr"
      ? video.description
      : video.descriptionEn;

  const displayEbookTitle = (book: EbookResource) =>
    language === "fr" ? book.title : book.titleEn;

  const displayEbookDescription = (book: EbookResource) =>
    language === "fr"
      ? book.description
      : book.descriptionEn;

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        button, input, select { font: inherit; }
        button:focus-visible, a:focus-visible,
        input:focus-visible, select:focus-visible {
          outline: 3px solid #86b7fe;
          outline-offset: 3px;
        }
        a { color: ${themeColors[theme].primary}; }
        .tp-wrap {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }
        .tp-nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px;
        }
        .tp-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: 18px;
          margin-top: 20px;
        }
        .tp-section { padding: 28px 0 44px; }
        .tp-muted {
          color: ${themeColors[theme].muted};
          line-height: 1.75;
        }
        .tp-lead {
          color: ${themeColors[theme].muted};
          font-size: 17px;
          line-height: 1.75;
          max-width: 760px;
        }
        .tp-eyebrow {
          color: ${themeColors[theme].primary};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .tp-card {
          padding: 22px;
          border: 1px solid ${themeColors[theme].border};
          border-radius: 20px;
          background: ${themeColors[theme].surface};
          color: ${themeColors[theme].text};
          box-shadow: ${themeColors[theme].shadow};
          min-width: 0;
        }
        .tp-hero {
          padding: clamp(24px, 5vw, 54px);
          border-radius: 28px;
          border: 1px solid ${themeColors[theme].border};
          background: linear-gradient(
            135deg,
            ${themeColors[theme].surfaceAlt},
            ${themeColors[theme].surface}
          );
        }
        .tp-chip {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          background: ${themeColors[theme].chip};
          color: ${themeColors[theme].primary};
          font-size: 12px;
          font-weight: 700;
        }
        .tp-input {
          display: block;
          width: 100%;
          padding: 12px 14px;
          margin: 8px 0 18px;
          border: 1px solid ${themeColors[theme].border};
          border-radius: 12px;
          background: ${themeColors[theme].input};
          color: ${themeColors[theme].text};
        }
        .tp-bottom {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 30;
          justify-content: space-around;
          gap: 2px;
          padding: 8px 4px
            calc(8px + env(safe-area-inset-bottom));
          background: ${themeColors[theme].header};
          border-top: 1px solid ${themeColors[theme].border};
          backdrop-filter: blur(12px);
        }
        .tp-bottom button {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 6px 2px;
          border: none;
          border-radius: 10px;
          background: transparent;
          color: ${themeColors[theme].muted};
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }
        .tp-bottom button.active {
          color: ${themeColors[theme].primary};
          background: ${themeColors[theme].surfaceAlt};
        }
        @media (max-width: 760px) {
          .tp-desktop-nav { display: none !important; }
          .tp-bottom { display: flex; }
          .tp-footer { padding-bottom: 110px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>

      <header style={styles.header}>
        <div className="tp-wrap">
          <div style={styles.headerInner}>
            <button
              style={styles.brand}
              onClick={() => navigate("home")}
              aria-label="Trend Pulse - Home"
            >
              <span style={styles.brandMark}>T</span>
              <span>Trend Pulse</span>
            </button>

            <nav
              className="tp-nav tp-desktop-nav"
              aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  style={{
                    ...styles.navButton,
                    ...(page === item.id
                      ? styles.activeNavButton
                      : {})
                  }}
                  onClick={() => navigate(item.id)}
                >
                  {t[item.labelKey]}
                </button>
              ))}
            </nav>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                style={styles.smallButton}
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                aria-label={
                  theme === "dark"
                    ? "Activer le mode clair"
                    : "Activer le mode sombre"
                }
                title={
                  theme === "dark" ? "Light mode" : "Dark mode"
                }
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

              <button
                style={styles.smallButton}
                onClick={() =>
                  setLanguage(language === "fr" ? "en" : "fr")
                }
                aria-label="Change language"
              >
                {language === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="tp-wrap">
        {page === "home" && (
          <section className="tp-section">
            <div className="tp-hero">
              <div className="tp-eyebrow">{t.eyebrow}</div>
              <h1
                style={{
                  ...styles.heading,
                  fontSize: "clamp(34px, 6vw, 60px)",
                  margin: "18px 0"
                }}
              >
                {t.headline}
              </h1>
              <p className="tp-lead">{t.intro}</p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                <button
                  style={styles.primaryButton}
                  onClick={() => navigate("tips")}
                >
                  {t.explore} →
                </button>
                <button
                  style={styles.secondaryButton}
                  onClick={() => navigate("articles")}
                >
                  {t.read}
                </button>
              </div>
            </div>

            <section style={{ paddingTop: 36 }}>
              <div className="tp-eyebrow">{t.quickLinks}</div>
              <h2>{t.featured}</h2>
              <div className="tp-grid">
                {[
                  { icon: "🥗", title: language === "fr" ? "Nutrition" : "Nutrition", id: 1 },
                  { icon: "🌙", title: language === "fr" ? "Sommeil" : "Sleep", id: 2 },
                  { icon: "🚶", title: language === "fr" ? "Activité physique" : "Physical activity", id: 3 },
                  { icon: "🌿", title: language === "fr" ? "Bien-être" : "Well-being", id: 4 }
                ].map((item) => (
                  <article className="tp-card" key={item.id}>
                    <div style={{ fontSize: 30 }}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <button
                      style={styles.textButton}
                      onClick={() => openArticle(item.id)}
                    >
                      {t.readArticle} →
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section style={{ paddingTop: 36 }}>
              <div className="tp-eyebrow">{t.latest}</div>
              <h2>{t.articles}</h2>
              <div className="tp-grid">
                {articles.slice(0, 3).map((article) => (
                  <article className="tp-card" key={article.id}>
                    <span className="tp-chip">
                      {displayCategory(article)}
                    </span>
                    <h3>{displayTitle(article)}</h3>
                    <p className="tp-muted">
                      {displaySummary(article)}
                    </p>
                    <button
                      style={styles.textButton}
                      onClick={() => openArticle(article.id)}
                    >
                      {t.readArticle} →
                    </button>
                  </article>
                ))}
              </div>
              <button
                style={{ ...styles.secondaryButton, marginTop: 18 }}
                onClick={() => navigate("articles")}
              >
                {t.viewAll} →
              </button>
            </section>
          </section>
        )}

        {page === "trends" && (
          <section className="tp-section">
            <div className="tp-eyebrow">{t.featured}</div>
            <h2>{t.trends}</h2>
            <p className="tp-lead">
              {language === "fr"
                ? "Explorez nos grands thèmes pour découvrir des informations pratiques et des ressources fiables."
                : "Explore our main topics for practical information and reliable resources."}
            </p>

            <div className="tp-grid">
              {articles.map((article) => (
                <article className="tp-card" key={article.id}>
                  <span className="tp-chip">
                    {displayCategory(article)}
                  </span>
                  <h3>{displayTitle(article)}</h3>
                  <p className="tp-muted">
                    {displaySummary(article)}
                  </p>
                  <button
                    style={styles.textButton}
                    onClick={() => openArticle(article.id)}
                  >
                    {t.readArticle} →
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "tips" && (
          <section className="tp-section">
            <div className="tp-eyebrow">{t.featured}</div>
            <h2>{t.tipsTitle}</h2>
            <p className="tp-lead">{t.tipsIntro}</p>

            <div className="tp-grid">
              {[
                {
                  icon: "🥗",
                  title: language === "fr" ? "Variez vos repas" : "Vary your meals",
                  text: language === "fr"
                    ? "Associez différents aliments disponibles localement et buvez de l'eau régulièrement."
                    : "Combine locally available foods and drink water regularly."
                },
                {
                  icon: "🌙",
                  title: language === "fr" ? "Gardez une routine de sommeil" : "Keep a sleep routine",
                  text: language === "fr"
                    ? "Essayez de vous coucher et de vous lever à des heures régulières."
                    : "Try to go to bed and wake up at regular times."
                },
                {
                  icon: "🚶",
                  title: language === "fr" ? "Bougez à votre rythme" : "Move at your own pace",
                  text: language === "fr"
                    ? "Marchez, dansez ou choisissez une activité adaptée à vos capacités."
                    : "Walk, dance, or choose an activity suited to your abilities."
                },
                {
                  icon: "🌿",
                  title: language === "fr" ? "Faites une pause" : "Take a break",
                  text: language === "fr"
                    ? "Accordez-vous quelques minutes pour respirer et vous détendre."
                    : "Take a few minutes to breathe and relax."
                },
                {
                  icon: "📌",
                  title: language === "fr" ? "Commencez petit" : "Start small",
                  text: language === "fr"
                    ? "Choisissez une seule habitude et répétez-la régulièrement."
                    : "Choose one habit and practice it regularly."
                },
                {
                  icon: "🤝",
                  title: language === "fr" ? "Demandez du soutien" : "Ask for support",
                  text: language === "fr"
                    ? "Parlez à une personne de confiance si vous traversez une période difficile."
                    : "Talk to someone you trust during difficult times."
                }
              ].map((item) => (
                <article className="tp-card" key={item.title}>
                  <div style={{ fontSize: 28 }}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="tp-muted">{item.text}</p>
                </article>
              ))}
            </div>

            <article className="tp-card" style={{ marginTop: 22 }}>
              <h2>{t.calculator}</h2>
              <p className="tp-muted">{t.minutes}</p>
              <label htmlFor="activity-minutes">
                {t.minuteLabel}
              </label>
              <input
                id="activity-minutes"
                className="tp-input"
                type="number"
                min="0"
                max="1440"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
              />
              <button
                style={styles.primaryButton}
                onClick={() =>
                  setMinutes(
                    String(
                      Math.max(
                        0,
                        Math.min(1440, Number(minutes) || 0)
                      )
                    )
                  )
                }
              >
                {t.calculate}
              </button>

              <div
                style={{
                  background: themeColors[theme].surfaceAlt,
                  color: themeColors[theme].text,
                  borderRadius: 14,
                  padding: 18,
                  marginTop: 18
                }}
              >
                <strong>{t.result}</strong>
                <div style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>
                  {Math.max(0, Math.min(1440, Number(minutes) || 0))}{" "}
                  {t.minuteLabel}
                </div>
                <p className="tp-muted">
                  {language === "fr"
                    ? "Chaque mouvement compte. Adaptez votre activité à vos capacités."
                    : "Every movement counts. Adapt your activity to your abilities."}
                </p>
              </div>

              <p className="tp-muted">
                {t.officialRecommendations}:{" "}
                <a
                  href="https://www.who.int/health-topics/physical-activity"
                  target="_blank"
                  rel="noreferrer"
                >
                  OMS / WHO
                </a>
              </p>
            </article>
          </section>
        )}
      
        {page === "videos" && (
          <section className="tp-section">
            <p className="tp-eyebrow">{t.videos}</p>
            <h1>{t.videosTitle}</h1>
            <p className="tp-lead">{t.videosText}</p>
            <div className="tp-grid">
              {videos.map((video, index) => (
                <article className="tp-card" key={video.title}>
                  <div className="tp-icon">
                    {["🥗", "🌙", "🚶", "🌿"][index % 4]}
                  </div>
                  <h3>{displayVideoTitle(video)}</h3>
                  <p>{displayVideoDescription(video)}</p>
                  <button
                    className="tp-button"
                    onClick={() => openExternal(video.url)}
                  >
                    {t.seeVideos} →
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "articles" && (
          <section className="tp-section">
            {!selectedArticle ? (
              <>
                <p className="tp-eyebrow">{t.articles}</p>
                <h1>{t.articlesTitle}</h1>
                <p className="tp-lead">{t.articlesText}</p>

                <input
                  className="tp-input"
                  type="search"
                  placeholder={t.searchPlaceholder}
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <select
                  className="tp-input"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item === "all"
                        ? t.all
                        : language === "fr"
                          ? item
                          : articles.find((a) => a.category === item)
                              ?.categoryEn ?? item}
                    </option>
                  ))}
                </select>

                <div className="tp-grid">
                  {filteredArticles.map((article) => (
                    <article className="tp-card" key={article.title}>
                      <span className="tp-chip">
                        {displayCategory(article)}
                      </span>
                      <h3>{displayTitle(article)}</h3>
                      <p>{displaySummary(article)}</p>
                      <button
                        className="tp-button"
                        onClick={() => openArticle(article)}
                      >
                        {t.readArticle} →
                      </button>
                    </article>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <p>{t.noResults}</p>
                )}
              </>
            ) : (
              <article className="tp-card">
                <button
                  className="tp-button tp-secondary"
                  onClick={() => setSelectedArticle(null)}
                >
                  ← {t.backToArticles}
                </button>
                <p className="tp-eyebrow">
                  {displayCategory(selectedArticle)}
                </p>
                <h1>{displayTitle(selectedArticle)}</h1>
                <p className="tp-lead">
                  {displaySummary(selectedArticle)}
                </p>
                <div className="tp-article-body">
                  {displayBody(selectedArticle).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <p className="tp-muted">{t.disclaimer}</p>
                <a
                  className="tp-link"
                  href={selectedArticle.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.readSource} ↗
                </a>
              </article>
            )}
          </section>
        )}

        {page === "ebooks" && (
          <section className="tp-section">
            <p className="tp-eyebrow">{t.ebooks}</p>
            <h1>{t.ebooksTitle}</h1>
            <p className="tp-lead">{t.ebooksText}</p>

            <div className="tp-grid">
              {ebooks.map((book) => (
                <article className="tp-card" key={book.title}>
                  <div className="tp-icon">📘</div>
                  <p className="tp-eyebrow">{book.organization}</p>
                  <h3>{displayEbookTitle(book)}</h3>
                  <p>{displayEbookDescription(book)}</p>
                  <button
                    className="tp-button"
                    onClick={() => openExternal(book.url)}
                  >
                    {t.openResource} ↗
                  </button>
                </article>
              ))}
            </div>

            <article className="tp-card tp-info">
              <h2>{t.howToUseResources}</h2>
              <p>{t.officialRecommendations}</p>
            </article>
          </section>
        )}

        {page === "about" && (
          <section className="tp-section">
            <p className="tp-eyebrow">{t.about}</p>
            <h1>{t.aboutTitle}</h1>
            <p className="tp-lead">{t.aboutText}</p>

            <div className="tp-grid">
              <article className="tp-card">
                <div className="tp-icon">🎯</div>
                <h2>{t.ourGoal}</h2>
                <p>{t.goalText}</p>
              </article>

              <article className="tp-card">
                <div className="tp-icon">🔎</div>
                <h2>{t.ourSources}</h2>
                <p>{t.sourcesText}</p>
                <p>
                  <a
                    className="tp-link"
                    href="https://www.who.int/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Organisation mondiale de la Santé / WHO ↗
                  </a>
                </p>
                <p>
                  <a
                    className="tp-link"
                    href="https://www.nih.gov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    National Institutes of Health ↗
                  </a>
                </p>
                <p>
                  <a
                    className="tp-link"
                    href="https://medlineplus.gov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MedlinePlus ↗
                  </a>
                </p>
              </article>

              <article className="tp-card">
                <div className="tp-icon">⚠️</div>
                <h2>{t.importantDisclaimer}</h2>
                <p>{t.disclaimer}</p>
              </article>
            </div>
          </section>
        )}
      </main>

      <footer className="tp-footer">
        <div className="tp-footer-brand">
          <span className="tp-logo">T</span>
          <div>
            <strong>Trend Pulse</strong>
            <p>{t.footer}</p>
          </div>
        </div>

        <div className="tp-footer-links">
          <button onClick={() => navigate("about")}>{t.about}</button>
          <button onClick={() => navigate("articles")}>{t.articles}</button>
          <button onClick={() => navigate("ebooks")}>{t.ebooks}</button>
        </div>

        <div className="tp-socials">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.name} ↗
            </a>
          ))}
        </div>

        <p className="tp-muted">
          © {new Date().getFullYear()} Trend Pulse. {t.disclaimer}
        </p>
      </footer>

      <nav className="tp-bottom" aria-label="Navigation mobile">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "active" : ""}
            onClick={() => navigate(item.id)}
          >
            <span>{item.symbol}</span>
            <small>{t[item.labelKey]}</small>
          </button>
        ))}
      </nav>
    </div>
  );
                  }
                
