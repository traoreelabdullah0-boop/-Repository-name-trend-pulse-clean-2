
import { useState } from "react";

type Page = "home" | "trends" | "tips" | "videos" | "articles" | "ebooks" | "about";

const articles = [
  {
    id: 1,
    category: "Nutrition",
    title: "Comment construire une alimentation équilibrée",
    en: "How to Build a Balanced Diet",
    summary: "Des habitudes simples pour varier les aliments et mieux organiser ses repas.",
    body: [
      "Une alimentation équilibrée repose sur la variété, la modération et des habitudes adaptées à ses besoins. Il n'est pas nécessaire d'acheter des produits coûteux pour commencer.",
      "Variez les aliments disponibles localement : légumes, fruits, céréales, légumineuses et sources de protéines. Buvez de l'eau régulièrement et adaptez les portions à votre faim et à votre activité.",
      "Conseil pratique : planifiez quelques repas à l'avance et privilégiez des aliments peu transformés lorsque cela est possible. Les besoins diffèrent selon l'âge, l'activité, la grossesse et l'état de santé."
    ],
    source: "https://www.who.int/health-topics/healthy-diet"
  },
  {
    id: 2,
    category: "Sommeil",
    title: "7 habitudes pour améliorer son sommeil",
    en: "7 Habits for Better Sleep",
    summary: "Une routine régulière peut aider à créer de meilleures conditions pour dormir.",
    body: [
      "Le sommeil participe au bien-être, à la mémoire et à la concentration. La quantité nécessaire varie selon l'âge et les personnes.",
      "Essayez de vous coucher et de vous lever à des heures régulières. Gardez votre chambre aussi calme, sombre et confortable que possible. Limitez la caféine en fin de journée et prenez un moment pour vous détendre avant le coucher.",
      "Si vos difficultés de sommeil persistent ou affectent votre vie quotidienne, demandez conseil à un professionnel de santé."
    ],
    source: "https://www.nhlbi.nih.gov/resources/brief-your-guide-healthy-sleep-fact-sheet"
  },
  {
    id: 3,
    category: "Activité physique",
    title: "Bouger davantage au quotidien",
    en: "Move More Every Day",
    summary: "Marcher, danser et faire des activités quotidiennes peuvent contribuer à un mode de vie actif.",
    body: [
      "L'activité physique ne se limite pas à la salle de sport. Marcher, danser, faire du vélo ou effectuer certaines tâches quotidiennes sont différentes façons de bouger.",
      "Commencez progressivement avec une activité adaptée à votre condition. Choisissez quelque chose que vous appréciez et augmentez la durée selon vos capacités.",
      "Les recommandations dépendent notamment de l'âge et de l'état de santé. Consultez les conseils officiels de l'Organisation mondiale de la Santé pour en savoir plus."
    ],
    source: "https://www.who.int/health-topics/physical-activity"
  },
  {
    id: 4,
    category: "Bien-être",
    title: "Des pauses pour mieux gérer le stress",
    en: "Simple Ways to Manage Stress",
    summary: "Des exercices simples pour prendre du recul pendant une journée chargée.",
    body: [
      "Le stress fait partie de la vie, mais des moments de pause peuvent aider certaines personnes à mieux traverser les journées difficiles.",
      "Essayez de respirer lentement, de marcher quelques minutes, de parler à une personne de confiance ou de diviser une tâche difficile en petites étapes.",
      "Ces habitudes ne remplacent pas une aide professionnelle. Si le stress devient intense ou persistant, cherchez un soutien adapté."
    ],
    source: "https://www.nimh.nih.gov/health"
  },
  {
    id: 5,
    category: "Habitudes saines",
    title: "Comment construire une routine durable",
    en: "How to Build a Sustainable Routine",
    summary: "Commencez petit, répétez vos habitudes et adaptez votre programme à votre quotidien.",
    body: [
      "Une routine utile doit être réaliste. Il est souvent plus facile de commencer par une petite habitude que de modifier toute sa journée d'un seul coup.",
      "Choisissez un objectif précis : marcher quelques minutes, préparer un repas ou prévoir une heure de coucher régulière. Associez cette habitude à une activité que vous faites déjà.",
      "Suivez vos progrès sans chercher la perfection. Ajustez votre routine quand votre emploi du temps change."
    ],
    source: "https://www.who.int/health-topics"
  }
];

const ebooks = [
  {
    title: "Guide pour un sommeil sain",
    description: "Fiche et ressources officielles sur le sommeil.",
    organization: "NHLBI — États-Unis",
    url: "https://www.nhlbi.nih.gov/resources/brief-your-guide-healthy-sleep-fact-sheet"
  },
  {
    title: "Activité physique",
    description: "Informations et recommandations de l'Organisation mondiale de la Santé.",
    organization: "OMS",
    url: "https://www.who.int/health-topics/physical-activity"
  },
  {
    title: "E-books gratuits sur la santé",
    description: "Découvrez des livres électroniques et ressources de santé proposés par le NIH.",
    organization: "NIH News in Health",
    url: "https://newsinhealth.nih.gov/2017/07/free-ebooks-health"
  },
  {
    title: "Alimentation saine",
    description: "Informations officielles pour mieux comprendre une alimentation équilibrée.",
    organization: "OMS",
    url: "https://www.who.int/health-topics/healthy-diet"
  },
  {
    title: "Santé mentale et bien-être",
    description: "Informations, ressources et conseils de santé mentale.",
    organization: "NIMH",
    url: "https://www.nimh.nih.gov/health"
  },
  {
    title: "Bibliothèque de santé",
    description: "Recherchez des informations fiables et des ressources médicales.",
    organization: "MedlinePlus",
    url: "https://medlineplus.gov/"
  }
];

const videos = [
  {
    title: "Nutrition et alimentation saine",
    description: "Découvrez des vidéos éducatives sur l'alimentation.",
    url: "https://www.youtube.com/results?search_query=healthy+eating+official+health+education"
  },
  {
    title: "Sommeil et récupération",
    description: "Explorez des contenus éducatifs sur les habitudes de sommeil.",
    url: "https://www.youtube.com/results?search_query=healthy+sleep+official+health+education"
  },
  {
    title: "Activité physique",
    description: "Trouvez des idées pour bouger davantage au quotidien.",
    url: "https://www.youtube.com/results?search_query=WHO+physical+activity+health"
  },
  {
    title: "Bien-être et gestion du stress",
    description: "Découvrez des exercices et des explications sur le bien-être.",
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
    videosIntro: "Ces liens ouvrent des recherches YouTube. Vérifiez la qualité et la fiabilité de chaque vidéo.",
    ebooksTitle: "E-books et ressources gratuites",
    ebooksIntro: "Accédez à des ressources proposées par des organismes reconnus. Certains liens ouvrent une page d'information plutôt qu'un PDF direct.",
    aboutTitle: "À propos de Trend Pulse",
    aboutText: "Trend Pulse est un espace bilingue consacré à la nutrition, au sommeil, à l'activité physique et au bien-être. Notre objectif est de rendre les informations pratiques plus faciles à explorer.",
    disclaimer: "Les informations de ce site sont éducatives et ne remplacent pas un avis médical personnalisé.",
    noResults: "Aucun article trouvé.",
    readArticle: "Lire l'article",
    source: "Source d'information",
    all: "Tous",
    more: "En savoir plus",
    quickLinks: "Explorer Trend Pulse",
    footer: "Des informations pour avancer vers un mode de vie plus sain."
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
    featured: "Explore",
    latest: "Articles to explore",
    resources: "Free resources",
    viewAll: "Explore all",
    search: "Search articles...",
    open: "Open resource",
    back: "← Back to articles",
    tipsTitle: "Simple habits for everyday life",
    tipsIntro: "Choose a small goal and progress at your own pace.",
    calculator: "My activity tracker",
    minutes: "How many minutes did you move today?",
    calculate: "Update",
    result: "Your activity today",
    minuteLabel: "minutes",
    videosTitle: "Videos to learn",
    videosIntro: "These links open YouTube searches. Check the quality and reliability of each video.",
    ebooksTitle: "Free e-books and resources",
    ebooksIntro: "Access resources from recognized organizations. Some links open information pages rather than direct PDFs.",
    aboutTitle: "About Trend Pulse",
    aboutText: "Trend Pulse is a bilingual space about nutrition, sleep, physical activity, and well-being. Our goal is to make practical information easier to explore.",
    disclaimer: "This website is educational and does not replace personalized medical advice.",
    noResults: "No articles found.",
    readArticle: "Read article",
    source: "Information source",
    all: "All",
    more: "Learn more",
    quickLinks: "Explore Trend Pulse",
    footer: "Information to help you move toward a healthier lifestyle."
  }
};

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [minutes, setMinutes] = useState("20");

  const t = translations[language];
  const categories = ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))];
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      `${article.title} ${article.en} ${article.summary} ${article.category}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesCategory = category === "Tous" || article.category === category;
    return matchesSearch && matchesCategory;
  });
  const activeArticle = articles.find((article) => article.id === selectedArticle);

  const navigate = (next: Page) => {
    setPage(next);
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

  const navItems: { id: Page; label: string; symbol: string }[] = [
    { id: "home", label: t.home, symbol: "⌂" },
    { id: "trends", label: t.trends, symbol: "↗" },
    { id: "tips", label: t.tips, symbol: "✳" },
    { id: "videos", label: t.videos, symbol: "▷" },
    { id: "articles", label: t.articles, symbol: "▤" },
    { id: "ebooks", label: t.ebooks, symbol: "▣" }
  ];

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5e8df",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 4px 18px rgba(45, 65, 48, 0.04)"
  } as const;

  const buttonStyle = {
    background: "#426b53",
    color: "#ffffff",
    border: "none",
    borderRadius: "999px",
    padding: "12px 18px",
    fontWeight: 700,
    cursor: "pointer"
  } as const;

  const secondaryButton = {
    background: "#edf2e9",
    color: "#31533e",
    border: "1px solid #dce6d7",
    borderRadius: "999px",
    padding: "11px 16px",
    fontWeight: 700,
    cursor: "pointer"
  } as const;

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f0", color: "#26382d", fontFamily: "Arial, sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        button, input, select { font: inherit; }
        button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
          outline: 3px solid #a7c4a3; outline-offset: 3px;
        }
        a { color: #315d43; }
        .tp-wrap { width: min(1100px, 100% - 32px); margin: auto; }
        .tp-header { background: rgba(255,255,255,.94); border-bottom: 1px solid #e5e8df; position: sticky; top: 0; z-index: 10; }
        .tp-header-inner { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .tp-brand { display: flex; align-items: center; gap: 10px; border: 0; background: none; color: #31533e; cursor: pointer; text-align: left; }
        .tp-logo { width: 42px; height: 42px; border-radius: 14px; background: #426b53; color: white; display: grid; place-items: center; font-size: 23px; font-weight: bold; }
        .tp-nav { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; }
        .tp-nav button { border: 0; background: transparent; color: #526355; padding: 9px 10px; border-radius: 10px; cursor: pointer; }
        .tp-nav button.active, .tp-nav button:hover { background: #edf2e9; color: #31533e; }
        .tp-lang { border: 1px solid #dce4d8; background: white; border-radius: 999px; padding: 8px 11px; cursor: pointer; color: #31533e; font-weight: bold; }
        .tp-hero { background: linear-gradient(135deg,#e9efe2,#f6f0e3); border: 1px solid #e1e7d9; border-radius: 28px; padding: clamp(24px,5vw,58px); margin: 28px 0; }
        .tp-eyebrow { color: #53765a; font-size: 12px; font-weight: 800; letter-spacing: 2px; }
        .tp-hero h1 { font-size: clamp(32px,5vw,56px); line-height: 1.08; letter-spacing: -1.5px; max-width: 680px; margin: 14px 0; }
        .tp-lead { color: #5e6b60; font-size: 17px; line-height: 1.75; max-width: 680px; }
        .tp-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .tp-section { margin: 34px 0; }
        .tp-section h2 { font-size: clamp(24px,3vw,32px); margin: 0 0 8px; letter-spacing: -.5px; }
        .tp-muted { color: #69766b; line-height: 1.7; }
        .tp-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; margin-top: 20px; }
        .tp-grid.two { grid-template-columns: repeat(2,minmax(0,1fr)); }
        .tp-card { background: white; border: 1px solid #e5e8df; border-radius: 18px; padding: 20px; min-width: 0; }
        .tp-card h3 { line-height: 1.4; margin: 10px 0; }
        .tp-chip { display: inline-block; color: #426b53; background: #edf2e9; padding: 6px 10px; border-radius: 999px; font-size: 12px; font-weight: bold; }
        .tp-text-button { background: transparent; border: 0; color: #315d43; padding: 10px 0 0; font-weight: bold; cursor: pointer; text-align: left; }
        .tp-input { width: 100%; padding: 12px 14px; border: 1px solid #dce4d8; border-radius: 12px; background: white; color: #26382d; margin: 8px 0 12px; }
        .tp-footer { margin-top: 48px; background: #e9efe5; padding: 30px 0 90px; color: #536456; }
        .tp-bottom { display: none; }
        @media(max-width:850px) {
          .tp-nav { display: none; }
          .tp-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .tp-bottom { display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 20; background: rgba(255,255,255,.97); border-top: 1px solid #dfe5da; justify-content: space-around; padding: 8px 3px max(8px,env(safe-area-inset-bottom)); }
          .tp-bottom button { flex: 1; border: 0; background: transparent; color: #657267; font-size: 10px; padding: 5px 1px; cursor: pointer; }
          .tp-bottom button span { display: block; font-size: 20px; margin-bottom: 3px; }
          .tp-bottom button.active { color: #315d43; font-weight: bold; }
        }
        @media(max-width:520px) {
          .tp-wrap { width: calc(100% - 24px); }
          .tp-header-inner { min-height: 64px; }
          .tp-logo { width: 38px; height: 38px; }
          .tp-grid, .tp-grid.two { grid-template-columns: 1fr; }
          .tp-hero { margin: 16px 0 26px; border-radius: 22px; }
          .tp-lead { font-size: 15px; }
          .tp-card { padding: 17px; }
        }
      `}</style>

      <header className="tp-header">
        <div className="tp-wrap tp-header-inner">
          <button className="tp-brand" onClick={() => navigate("home")} aria-label="Trend Pulse home">
            <span className="tp-logo">T</span>
            <span>
              <strong style={{ display: "block", fontSize: 19 }}>Trend Pulse</strong>
              <small style={{ color: "#788478" }}>Wellness • Everyday life</small>
            </span>
          </button>
          <nav className="tp-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item.id} className={page === item.id ? "active" : ""} onClick={() => navigate(item.id)}>
                {item.label}
              </button>
            ))}
            <button className={page === "about" ? "active" : ""} onClick={() => navigate("about")}>{t.about}</button>
          </nav>
          <button className="tp-lang" onClick={() => setLanguage(language === "fr" ? "en" : "fr")} aria-label="Change language">
            {language === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </header>

      <main className="tp-wrap" style={{ paddingBottom: 24 }}>
        {page === "home" && (
          <>
            <section className="tp-hero">
              <div className="tp-eyebrow">{t.eyebrow}</div>
              <h1>{t.headline}</h1>
              <p className="tp-lead">{t.intro}</p>
              <div className="tp-actions">
                <button style={buttonStyle} onClick={() => navigate("tips")}>{t.explore} →</button>
                <button style={secondaryButton} onClick={() => navigate("articles")}>{t.read}</button>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 26 }}>
                {["🥗 Nutrition", "🌙 Sleep", "🚶 Activity", "🌿 Well-being"].map((x) => (
                  <span key={x} style={{ background: "rgba(255,255,255,.7)", padding: "9px 12px", borderRadius: 999, fontSize: 13 }}>{x}</span>
                ))}
              </div>
            </section>
            <section className="tp-section">
              <div className="tp-eyebrow">{t.featured}</div>
              <h2>{t.quickLinks}</h2>
              <p className="tp-muted">{t.intro}</p>
              <div className="tp-grid">
                {[
                  { icon: "↗", title: t.trends, text: language === "fr" ? "Explorez les thèmes et les dernières lectures." : "Explore topics and featured reading.", id: "trends" as Page },
                  { icon: "✳", title: t.tips, text: language === "fr" ? "Découvrez des conseils et suivez votre activité." : "Find practical tips and track your activity.", id: "tips" as Page },
                  { icon: "▤", title: t.articles, text: language === "fr" ? "Lisez des articles pratiques et leurs sources
." : "Read practical articles and their sources.", id: "articles" as Page },
                  { icon: "▣", title: t.ebooks, text: language === "fr" ? "Accédez à des guides et ressources gratuits." : "Access free guides and resources.", id: "ebooks" as Page }
                ].map((item) => (
                  <div className="tp-card" key={item.id}>
                    <span style={{ fontSize: 28, color: "#426b53" }}>{item.icon}</span>
                    <h3>{item.title}</h3>
                    <p className="tp-muted">{item.text}</p>
                    <button className="tp-text-button" onClick={() => navigate(item.id)}>
                      {t.more} →
                    </button>
                  </div>
                ))}
              </div>
            </section>
            <section className="tp-section">
              <div className="tp-eyebrow">{t.latest}</div>
              <h2>{t.articles}</h2>
              <div className="tp-grid">
                {articles.slice(0, 3).map((article) => (
                  <article className="tp-card" key={article.id}>
                    <span className="tp-chip">{article.category}</span>
                    <h3>{language === "fr" ? article.title : article.en}</h3>
                    <p className="tp-muted">{article.summary}</p>
                    <button className="tp-text-button" onClick={() => openArticle(article.id)}>
                      {t.readArticle} →
                    </button>
                  </article>
                ))}
              </div>
              <button style={{ ...secondaryButton, marginTop: 18 }} onClick={() => navigate("articles")}>
                {t.viewAll} →
              </button>
            </section>
          </>
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
              {[
                { icon: "🥗", title: "Nutrition", text: language === "fr" ? "Alimentation variée, repas équilibrés et habitudes simples." : "Balanced meals, food variety, and simple habits.", id: 1 },
                { icon: "🌙", title: "Sommeil", text: language === "fr" ? "Routine du soir et bonnes habitudes de sommeil." : "Bedtime routines and healthy sleep habits.", id: 2 },
                { icon: "🚶", title: "Activité physique", text: language === "fr" ? "Des idées pour bouger davantage chaque jour." : "Ideas to move more every day.", id: 3 },
                { icon: "🌿", title: "Bien-être", text: language === "fr" ? "Pauses, respiration et gestion du stress." : "Breaks, breathing, and stress management.", id: 4 },
                { icon: "📅", title: "Habitudes saines", text: language === "fr" ? "Construire une routine réaliste et durable." : "Build a realistic, sustainable routine.", id: 5 }
              ].map((item) => (
                <article className="tp-card" key={item.id}>
                  <div style={{ fontSize: 30 }}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="tp-muted">{item.text}</p>
                  <button className="tp-text-button" onClick={() => openArticle(item.id)}>
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
                { icon: "🥗", title: language === "fr" ? "Variez vos repas" : "Vary your meals", text: language === "fr" ? "Associez différents aliments disponibles localement et buvez de l'eau régulièrement." : "Combine different locally available foods and drink water regularly." },
                { icon: "🌙", title: language === "fr" ? "Gardez une routine de sommeil" : "Keep a sleep routine", text: language === "fr" ? "Essayez de vous coucher et de vous lever à des heures régulières." : "Try to go to bed and wake up at regular times." },
                { icon: "🚶", title: language === "fr" ? "Bougez à votre rythme" : "Move at your own pace", text: language === "fr" ? "Marchez, dansez ou choisissez une activité adaptée à vos capacités." : "Walk, dance, or choose an activity suited to your abilities." },
                { icon: "🌿", title: language === "fr" ? "Faites une pause" : "Take a break", text: language === "fr" ? "Accordez-vous quelques minutes pour respirer et vous détendre." : "Take a few minutes to breathe and relax." },
                { icon: "📌", title: language === "fr" ? "Commencez petit" : "Start small", text: language === "fr" ? "Choisissez une seule habitude et répétez-la régulièrement." : "Choose one habit and practice it regularly." },
                { icon: "🤝", title: language === "fr" ? "Demandez du soutien" : "Ask for support", text: language === "fr" ? "Parlez à une personne de confiance si vous traversez une période difficile." : "Talk to someone you trust if you are going through a difficult time." }
              ].map((item) => (
                <article className="tp-card" key={item.title}>
                  <div style={{ fontSize: 28 }}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="tp-muted">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="tp-card" style={{ marginTop: 22 }}>
              <h2 style={{ fontSize: 24 }}>{t.calculator}</h2>
              <p className="tp-muted">{t.minutes}</p>
              <label htmlFor="activity-minutes">{t.minuteLabel}</label>
              <input
                id="activity-minutes"
                className="tp-input"
                type="number"
                min="0"
                max="1440"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
              />
              <button style={buttonStyle} onClick={() => setMinutes(String(Math.max(0, Math.min(1440, Number(minutes) || 0))))}>
                {t.calculate}
              </button>
              <div style={{ background: "#edf2e9", borderRadius: 14, padding: 18, marginTop: 18 }}>
                <strong>{t.result}</strong>
                <div style={{ fontSize: 32, fontWeight: 800, marginTop: 6 }}>
                  {Math.max(0, Math.min(1440, Number(minutes) || 0))} {t.minuteLabel}
                </div>
                <p className="tp-muted">
                  {language === "fr" ? "Chaque mouvement compte. Adaptez votre activité à vos capacités." : "Every movement counts. Adapt your activity to your abilities."}
                </p>
              </div>
              <p className="tp-muted">
                {language === "fr" ? "Consultez les recommandations officielles :" : "Read the official recommendations:"}{" "}
                <a href="https://www.who.int/health-topics/physical-activity" target="_blank" rel="noreferrer">OMS / WHO</a>
              </p>
            </div>
          </section>
        )}

        {page === "videos" && (
          <section className="tp-section">
            <div className="tp-eyebrow">{t.featured}</div>
            <h2>{t.videosTitle}</h2>
            <p className="tp-lead">{t.videosIntro}</p>
            <div className="tp-grid two">
              {videos.map((video, index) => (
                <article className="tp-card" key={video.title}>
                  <div style={{ background: "#edf2e9", borderRadius: 14, padding: 22, fontSize: 32 }}>
                    {["🥗", "🌙", "🚶", "🌿"][index]} <span style={{ float: "right" }}>▷</span>
                  </div>
                  <h3>{video.title}</h3>
                  <p className="tp-muted">{video.description}</p>
                  <button style={buttonStyle} onClick={() => openExternal(video.url)}>
                    {language === "fr" ? "Voir les vidéos" : "Find videos"} →
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "articles" && (
          <section className="tp-section">
            {activeArticle ? (
              <article className="tp-card">
                <button className="tp-text-button" onClick={() => setSelectedArticle(null)}>
                  {t.back}
                </button>
                <div style={{ marginTop: 20 }}>
                  <span className="tp-chip">{activeArticle.category}</span>
                </div>
                <h1 style={{ fontSize: "clamp(28px,5vw,42px)", lineHeight: 1.2 }}>
                  {language === "fr" ? activeArticle.title : activeArticle.en}
                </h1>
                <p className="tp-lead">{activeArticle.summary}</p>
                {activeArticle.body.map((paragraph, index) => (
                  <p key={index} className="tp-muted" style={{ fontSize: 16, margin: "18px 0" }}>
                    {paragraph}
                  </p>
                ))}
                <div style={{ background: "#edf2e9", borderRadius: 14, padding: 18, marginTop: 24 }}>
                  <strong>{t.source}</strong>
                  <p className="tp-muted">{language === "fr" ? "Pour approfondir, consultez cette ressource officielle." : "For more information, consult this official resource."}</p>
                  <button style={buttonStyle} onClick={() => openExternal(activeArticle.source)}>
                    {t.open} ↗
                  </button>
                </div>
                <p className="tp-muted" style={{ marginTop: 22 }}>{t.disclaimer}</p>
              </article>
            ) : (
              <>
                <div className="tp-eyebrow">{t.featured}</div>
                <h2>{t.articles}</h2>
                <p className="tp-lead">
                  {language === "fr" ? "Des lectures pratiques accompagnées de liens vers des sources fiables." : "Practical reading with links to reliable sources."}
                </p>
                <label htmlFor="article-search">{t.search}</label>
                <input
                  id="article-search"
                  className="tp-input"
                  type="search"
                  value={search}
                  placeholder={t.search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <label htmlFor="article-category">{language === "fr" ? "Filtrer par thème" : "Filter by topic"}</label>
                <select
                  id="article-category"
                  className="tp-input"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item === "Tous" ? t.all : item}
                    </option>
                  ))}
                </select>
                <div className="tp-grid">
                  {filteredArticles.map((article) => (
                    <article className="tp-card" key={article.id}>
                      <span className="tp-chip">{article.category}</span>
                      <h3>{language === "fr" ? article.title : article.en}</h3>
                      <p className="tp-muted">{article.summary}</p>
                      <button className="tp-text-button" onClick={() => openArticle(article.id)}>
                        {t.readArticle} →
                      </button>
                    </article>
                  ))}
                </div>
                {filteredArticles.length === 0 && <p className="tp-muted">{t.noResults}</p>}
              </>
            )}
          </section>
        )}

        {page === "ebooks" && (
          <section className="tp-section">
            <div className="tp-eyebrow">{t.resources}</div>
            <h2>{t.ebooksTitle}</h2>
            <p className="tp-lead">{t.ebooksIntro}</p>
            <div className="tp-grid">
              {ebooks.map((book) => (
                <article className="tp-card" key={book.title}>
                  <div style={{ fontSize: 30 }}>📚</div>
                  <span className="tp-chip">{book.organization}</span>
                  <h3>{book.title}</h3>
                  <p className="tp-muted">{book.description}</p>
                  <button style={buttonStyle} onClick={() => openExternal(book.url)}>
                    {t.open} ↗
                  </button>
                </article>
              ))}
            </div>
            <div className="tp-card" style={{ marginTop: 20 }}>
              <h3>{language === "fr" ? "Comment utiliser ces ressources ?" : "How to use these resources"}</h3>
              <p className="tp-muted">
                {language === "fr"
                  ? "Ouvrez un lien, lisez les informations et vérifiez si un document PDF ou un téléchargement gratuit est proposé. Certains sites affichent uniquement des articles ou des guides en ligne."
                  : "Open a link, read the information, and check whether a PDF or free download is available. Some websites provide online articles or guides only."}
              </p>
              <p className="tp-muted">
                {language === "fr" ? "Organisations utiles :" : "Useful organizations:"}{" "}
                <a href="https://www.who.int/" target="_blank" rel="noreferrer">OMS</a>{" · "}
                <a href="https://www.nih.gov/" target="_blank" rel="noreferrer">NIH</a>{" · "}
                <a href="https://medlineplus.gov/" target="_blank" rel="noreferrer">MedlinePlus</a>
              </p>
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="tp-section">
            <div className="tp-hero">
              <div className="tp-eyebrow">TREND PULSE</div>
              <h1>{t.aboutTitle}</h1>
              <p className="tp-lead">{t.aboutText}</p>
            </div>
            <div className="tp-grid two">
              <article className="tp-card">
                <h3>{language === "fr" ? "Notre objectif" : "Our goal"}</h3>
                <p className="tp-muted">
                  {language === "fr" ? "Faciliter l'accès à des conseils pratiques et à des ressources utiles en français et en anglais." : "Make practical tips and useful resources easier to access in French and English."}
                </p>
              </article>
              <article className="tp-card">
                <h3>{language === "fr" ? "Nos sources" : "Our sources"}</h3>
                <p className="tp-muted">
                  {language === "fr" ? "Nous orientons les lecteurs vers des organismes de santé reconnus pour approfondir les sujets." : "We direct readers to recognized health organizations for further information."}
                </p>
                <p><a href="https://www.who.int/" target="_blank" rel="noreferrer">Organisation mondiale de la Santé</a></p>
                <p><a href="https://www.nih.gov/" target="_blank" rel="noreferrer">National Institutes of Health</a></p>
              </article>
            </div>
            <div className="tp-card" style={{ marginTop: 18 }}>
              <h3>{language === "fr" ? "Avertissement important" : "Important disclaimer"}</h3>
              <p className="tp-muted">{t.disclaimer}</p>
            </div>
          </section>
        )}
      </main>

      <footer className="tp-footer">
        <div className="tp-wrap">
          <strong style={{ fontSize: 20, color: "#31533e" }}>Trend Pulse</strong>
          <p>{t.footer}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <button className="tp-text-button" onClick={() => navigate("about")}>{t.about}</button>
            <button className="tp-text-button" onClick={() => navigate("articles")}>{t.articles}</button>
            <button className="tp-text-button" onClick={() => navigate("ebooks")}>{t.ebooks}</button>
          </div>
          <p style={{ fontSize: 12, marginTop: 22 }}>© {new Date().getFullYear()} Trend Pulse</p>
          <p style={{ fontSize: 12 }}>{t.disclaimer}</p>
        </div>
      </footer>

      <nav className="tp-bottom" aria-label="Mobile navigation">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "active" : ""}
            onClick={() => navigate(item.id)}
          >
            <span>{item.symbol}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
                   }
                      
