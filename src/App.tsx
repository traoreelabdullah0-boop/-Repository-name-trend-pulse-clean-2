
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
  titleEn: string;
  summary: string;
  summaryEn: string;
  body: string[];
  bodyEn: string[];
  source: string;
  image: string;
};

type Resource = {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  organization: string;
  url: string;
  image: string;
};

const images = {
  hero: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=85",
  food: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
  sleep: "https://images.unsplash.com/photo-1511295742362-92c96b6d4d67?auto=format&fit=crop&w=1000&q=85",
  activity: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=85",
  wellness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85",
  habits: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=85",
  books: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=85",
  water: "https://images.unsplash.com/photo-1532634896-26909d0d4b8c?auto=format&fit=crop&w=1000&q=85"
};

const articles: Article[] = [
  {
    id: 1,
    category: "Nutrition",
    categoryEn: "Nutrition",
    title: "Comment construire une alimentation équilibrée",
    titleEn: "How to Build a Balanced Diet",
    summary: "Des habitudes simples pour varier les aliments et mieux organiser ses repas.",
    summaryEn: "Simple habits to diversify foods and plan balanced meals.",
    body: [
      "Une alimentation variée aide à apporter différents nutriments au corps.",
      "Essaie de varier les fruits, les légumes, les céréales et les sources de protéines selon tes possibilités.",
      "Boire de l’eau et organiser ses repas peut aider à installer de bonnes habitudes.",
      "Les besoins varient selon les personnes. Pour une situation médicale particulière, demande conseil à un professionnel de santé."
    ],
    bodyEn: [
      "A varied diet helps provide the body with different nutrients.",
      "Try to vary fruits, vegetables, grains, and protein sources according to what is available to you.",
      "Drinking water and planning meals can help build healthy habits.",
      "Needs vary from person to person. For a medical concern, seek advice from a qualified health professional."
    ],
    source: "https://www.who.int/health-topics/healthy-diet",
    image: images.food
  },
  {
    id: 2,
    category: "Sommeil",
    categoryEn: "Sleep",
    title: "7 habitudes pour améliorer son sommeil",
    titleEn: "7 Habits for Better Sleep",
    summary: "Une routine régulière peut aider à préparer le corps au sommeil.",
    summaryEn: "A regular routine can help prepare the body for sleep.",
    body: [
      "Essaie de garder des horaires de coucher et de réveil réguliers.",
      "Crée un environnement calme, confortable et adapté au sommeil.",
      "Réduis les activités stimulantes avant le coucher.",
      "Si tes difficultés de sommeil persistent, demande conseil à un professionnel de santé."
    ],
    bodyEn: [
      "Try to keep regular bedtimes and wake-up times.",
      "Create a calm, comfortable sleeping environment.",
      "Reduce stimulating activities before bedtime.",
      "If sleep difficulties persist, seek advice from a health professional."
    ],
    source: "https://www.nhlbi.nih.gov/health/sleep-deprivation",
    image: images.sleep
  },
  {
    id: 3,
    category: "Activité physique",
    categoryEn: "Physical activity",
    title: "Bouger davantage au quotidien",
    titleEn: "Move More Every Day",
    summary: "La marche et les activités quotidiennes peuvent aider à rester actif.",
    summaryEn: "Walking and everyday activities can help you stay active.",
    body: [
      "Marcher, danser ou faire des tâches quotidiennes sont des façons de bouger.",
      "Commence progressivement et choisis une activité adaptée à tes capacités.",
      "Des périodes courtes de mouvement peuvent s’intégrer à ta journée.",
      "Adapte toujours ton activité à ta condition physique et demande un avis médical si nécessaire."
    ],
    bodyEn: [
      "Walking, dancing, and everyday tasks are ways to move.",
      "Start gradually and choose an activity suited to your abilities.",
      "Short periods of movement can fit into your day.",
      "Adapt activity to your physical condition and seek medical advice when necessary."
    ],
    source: "https://www.who.int/health-topics/physical-activity",
    image: images.activity
  },
  {
    id: 4,
    category: "Bien-être",
    categoryEn: "Well-being",
    title: "Des pauses pour mieux gérer le stress",
    titleEn: "Simple Ways to Manage Stress",
    summary: "Quelques minutes de pause peuvent aider à retrouver son attention.",
    summaryEn: "A few minutes of rest can help you refocus.",
    body: [
      "Quand la journée est chargée, prends quelques instants pour ralentir.",
      "Respire calmement, marche un peu ou éloigne-toi brièvement de ton écran.",
      "Parler à une personne de confiance peut aussi être utile.",
      "Si le stress devient difficile à gérer, un professionnel peut t’accompagner."
    ],
    bodyEn: [
      "When the day feels busy, take a moment to slow down.",
      "Breathe calmly, take a short walk, or briefly step away from your screen.",
      "Talking to someone you trust can also help.",
      "If stress becomes difficult to manage, a professional can support you."
    ],
    source: "https://www.nimh.nih.gov/health",
    image: images.wellness
  },
  {
    id: 5,
    category: "Habitudes saines",
    categoryEn: "Healthy habits",
    title: "Comment construire une routine durable",
    titleEn: "How to Build a Sustainable Routine",
    summary: "Commence petit, répète tes habitudes et adapte-les à ton quotidien.",
    summaryEn: "Start small, repeat your habits, and adapt them to everyday life.",
    body: [
      "Choisis une petite habitude facile à répéter.",
      "Associe-la à un moment précis de ta journée.",
      "Observe ce qui fonctionne et ajuste ton organisation sans chercher la perfection.",
      "La régularité et la souplesse peuvent aider à maintenir une routine."
    ],
    bodyEn: [
      "Choose a small habit that is easy to repeat.",
      "Connect it to a specific moment in your day.",
      "Notice what works and adjust your routine without aiming for perfection.",
      "Consistency and flexibility can help you maintain a routine."
    ],
    source: "https://www.who.int/health-topics",
    image: images.habits
  }
];

const ebooks: Resource[] = [
  {
    title: "Guide pour un sommeil sain",
    titleEn: "Your Guide to Healthy Sleep",
    description: "Informations et conseils officiels sur le sommeil.",
    descriptionEn: "Official sleep information and guidance.",
    organization: "NHLBI",
    url: "https://www.nhlbi.nih.gov/health/sleep-deprivation",
    image: images.sleep
  },
  {
    title: "Comprendre l’alimentation saine",
    titleEn: "Understanding Healthy Eating",
    description: "Découvrez les informations de l’OMS sur l’alimentation.",
    descriptionEn: "Explore WHO information about healthy diets.",
    organization: "OMS / WHO",
    url: "https://www.who.int/health-topics/healthy-diet",
    image: images.food
  },
  {
    title: "Bouger pour sa santé",
    titleEn: "Move for Your Health",
    description: "Des informations pour comprendre l’activité physique.",
    descriptionEn: "Information about physical activity and health.",
    organization: "OMS / WHO",
    url: "https://www.who.int/health-topics/physical-activity",
    image: images.activity
  },
  {
    title: "Ressources sur le bien-être",
    titleEn: "Well-being Resources",
    description: "Des informations sur la santé mentale et le bien-être.",
    descriptionEn: "Information about mental health and well-being.",
    organization: "NIMH",
    url: "https://www.nimh.nih.gov/health",
    image: images.wellness
  },
  {
    title: "Bibliothèque de santé",
    titleEn: "Health Information Library",
    description: "Consultez une bibliothèque de ressources fiables.",
    descriptionEn: "Explore a library of reliable health resources.",
    organization: "MedlinePlus",
    url: "https://medlineplus.gov/",
    image: images.books
  }
];

const videos: Resource[] = [
  {
    title: "Nutrition et alimentation saine",
    titleEn: "Nutrition and Healthy Eating",
    description: "Vidéos éducatives sur l’alimentation.",
    descriptionEn: "Educational videos about healthy eating.",
    organization: "YouTube",
    url: "https://www.youtube.com/results?search_query=WHO+healthy+diet",
    image: images.food
  },
  {
    title: "Sommeil et récupération",
    titleEn: "Sleep and Recovery",
    description: "Des contenus éducatifs sur le sommeil.",
    descriptionEn: "Educational content about sleep.",
    organization: "YouTube",
    url: "https://www.youtube.com/results?search_query=healthy+sleep+education",
    image: images.sleep
  },
  {
    title: "Activité physique au quotidien",
    titleEn: "Everyday Physical Activity",
    description: "Des idées pour bouger davantage.",
    descriptionEn: "Ideas to move more every day.",
    organization: "YouTube",
    url: "https://www.youtube.com/results?search_query=WHO+physical+activity",
    image: images.activity
  },
  {
    title: "Bien-être et gestion du stress",
    titleEn: "Well-being and Stress Management",
    description: "Des contenus éducatifs sur le bien-être.",
    descriptionEn: "Educational content about well-being.",
    organization: "YouTube",
    url: "https://www.youtube.com/results?search_query=stress+management+health+education",
    image: images.wellness
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
    explore: "Découvrir",
    read: "Lire l’article",
    learnMore: "En savoir plus",
    search: "Rechercher un article...",
    filter: "Filtrer par thème",
    all: "Tous les thèmes",
    latest: "Articles récents",
    featured: "À découvrir",
    heroEyebrow: "VOTRE ESPACE BIEN-ÊTRE",
    heroTitle: "De meilleures habitudes, un jour à la fois.",
    heroText:
      "Découvrez des idées pratiques pour prendre soin de vous, mieux manger, dormir et bouger au quotidien.",
    trendsTitle: "Tendances et habitudes saines",
    tipsTitle: "Des conseils pour votre quotidien",
    videosTitle: "Vidéos éducatives",
    ebooksTitle: "Guides et ressources",
    aboutTitle: "À propos de Trend Pulse",
    source: "Consulter la source",
    back: "Retour aux articles",
    disclaimer:
      "Ces contenus sont informatifs et ne remplacent pas l’avis d’un professionnel de santé.",
    footer:
      "Des informations pratiques pour un quotidien plus équilibré.",
    openResource: "Découvrir la ressource",
    searchEmpty: "Aucun article trouvé. Essaie un autre mot.",
    categories:
      "Nutrition, sommeil, activité physique et bien-être",
    activityQuestion:
      "Combien de minutes d’activité fais-tu par jour ?",
    activityDays: "Combien de jours par semaine ?",
    calculate: "Calculer",
    activityResult: "minutes d’activité par semaine",
    activityAdvice:
      "Commence progressivement et choisis une activité adaptée à tes capacités.",
    welcome: "Bienvenue sur Trend Pulse",
    discoverArticles: "Explorer les articles",
    discoverTips: "Voir les conseils",
    discoverVideos: "Regarder les vidéos",
    discoverEbooks: "Explorer les ressources",
    newsletterTitle: "Une inspiration pour chaque journée",
    newsletterText:
      "Découvre régulièrement de nouvelles idées pour ton bien-être.",
    quality: "Des informations pratiques",
    qualityText:
      "Des explications accessibles et des sources à consulter.",
    simple: "Des habitudes simples",
    simpleText:
      "Des idées réalistes à adapter à ton quotidien.",
    exploreTopics: "Explore nos thèmes",
    noDiagnosis:
      "Trend Pulse ne pose aucun diagnostic et ne remplace pas un avis médical."
  },
  en: {
    home: "Home",
    trends: "Trends",
    tips: "Tips",
    videos: "Videos",
    articles: "Articles",
    ebooks: "E-books",
    about: "About",
    explore: "Explore",
    read: "Read article",
    learnMore: "Learn more",
    search: "Search articles...",
    filter: "Filter by topic",
    all: "All topics",
    latest: "Latest articles",
    featured: "Featured",
    heroEyebrow: "YOUR WELL-BEING SPACE",
    heroTitle: "Better habits, one day at a time.",
    heroText:
      "Discover practical ideas to care for yourself, eat well, sleep better, and stay active every day.",
    trendsTitle: "Trends and healthy habits",
    tipsTitle: "Tips for everyday life",
    videosTitle: "Educational videos",
    ebooksTitle: "Guides and resources",
    aboutTitle: "About Trend Pulse",
    source: "View source",
    back: "Back to articles",
    disclaimer:
      "This content is for information only and does not replace professional medical advice.",
    footer:
      "Practical information for a more balanced everyday life.",
    openResource: "Explore resource",
    searchEmpty: "No articles found. Try another search term.",
    categories:
      "Nutrition, sleep, physical activity, and well-being",
    activityQuestion:
      "How many minutes do you exercise each day?",
    activityDays: "How many days per week?",
    calculate: "Calculate",
    activityResult: "activity minutes per week",
    activityAdvice:
      "Start gradually and choose an activity suited to your abilities.",
    welcome: "Welcome to Trend Pulse",
    discoverArticles: "Explore articles",
    discoverTips: "View tips",
    discoverVideos: "Watch videos",
    discoverEbooks: "Explore resources",
    newsletterTitle: "A little inspiration for every day",
    newsletterText:
      "Discover fresh ideas for your well-being regularly.",
    quality: "Practical information",
    qualityText:
      "Accessible explanations and sources to explore.",
    simple: "Simple habits",
    simpleText:
      "Realistic ideas you can adapt to everyday life.",
    exploreTopics: "Explore our topics",
    noDiagnosis:
      "Trend Pulse does not diagnose conditions or replace medical advice."
  }
};

const trendCards = [
  {
    title: "Mieux organiser ses repas",
    titleEn: "Plan Meals More Effectively",
    text:
      "Préparer quelques repas à l’avance peut faciliter l’organisation.",
    textEn:
      "Preparing a few meals in advance can make planning easier.",
    image: images.food,
    category: "Nutrition",
    icon: "🥗"
  },
  {
    title: "Créer une routine de sommeil",
    titleEn: "Build a Sleep Routine",
    text:
      "Des horaires réguliers peuvent favoriser de bonnes habitudes de sommeil.",
    textEn:
      "Regular schedules can support healthier sleep habits.",
    image: images.sleep,
    category: "Sommeil",
    icon: "🌙"
  },
  {
    title: "Ajouter du mouvement à sa journée",
    titleEn: "Add More Movement to Your Day",
    text:
      "La marche et les pauses actives sont des moyens simples de bouger.",
    textEn:
      "Walking and active breaks are simple ways to move more.",
    image: images.activity,
    category: "Activité physique",
    icon: "🏃"
  },
  {
    title: "Prendre le temps de respirer",
    titleEn: "Make Time to Breathe",
    text:
      "Une courte pause peut aider à retrouver son attention.",
    textEn:
      "A short pause can help you refocus your attention.",
    image: images.wellness,
    category: "Bien-être",
    icon: "🌿"
  }
];

const tipCards = [
  {
    title: "Prépare tes repas",
    titleEn: "Plan Your Meals",
    text:
      "Prévois des repas variés et garde des options simples à portée de main.",
    textEn:
      "Plan varied meals and keep simple options within reach.",
    image: images.food,
    icon: "🍎"
  },
  {
    title: "Protège ton sommeil",
    titleEn: "Protect Your Sleep",
    text:
      "Essaie de garder des horaires réguliers et une routine calme le soir.",
    textEn:
      "Try to keep regular sleep times and a calm evening routine.",
    image: images.sleep,
    icon: "😴"
  },
  {
    title: "Bouge à ton rythme",
    titleEn: "Move at Your Own Pace",
    text:
      "Choisis une activité agréable et augmente progressivement sa durée.",
    textEn:
      "Choose an enjoyable activity and gradually increase its duration.",
    image: images.activity,
    icon: "🚶"
  },
  {
    title: "Fais une pause",
    titleEn: "Take a Break",
    text:
      "Éloigne-toi quelques instants de ton écran et respire calmement.",
    textEn:
      "Step away from your screen briefly and breathe calmly.",
    image: images.wellness,
    icon: "🌼"
  }
];

const visualCards = [
  {
    title: "La beauté de la nature",
    titleEn: "The Beauty of Nature",
    text: "Prends un instant pour apprécier les petites choses de la vie.",
    textEn: "Take a moment to appreciate the little things in life.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
    page: "tips" as Page
  },
  {
    title: "Marcher pour se sentir mieux",
    titleEn: "Walk to Feel Better",
    text: "Intègre quelques minutes de marche à ta routine quotidienne.",
    textEn: "Add a few minutes of walking to your daily routine.",
    image: images.activity,
    page: "trends" as Page
  },
  {
    title: "Préparer une nuit paisible",
    titleEn: "Prepare for a Peaceful Night",
    text: "Crée une ambiance calme avant de te coucher.",
    textEn: "Create a calm atmosphere before going to bed.",
    image: images.sleep,
    page: "tips" as Page
  },
  {
    title: "Découvrir nos vidéos",
    titleEn: "Discover Our Videos",
    text: "Retrouve des idées simples pour améliorer tes habitudes.",
    textEn: "Discover simple ideas to improve your habits.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
    page: "videos" as Page
  }
];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("light");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);
  const [minutesPerDay, setMinutesPerDay] = useState(30);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const t = translations[language];

  const isFrench = language === "fr";

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = [
      article.title,
      article.titleEn,
      article.summary,
      article.summaryEn,
      article.category,
      article.categoryEn
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      article.category === category ||
      article.categoryEn === category;

    return matchesSearch && matchesCategory;
  });

  const activityTotal = minutesPerDay * daysPerWeek;

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };
      
  const styles = `
    .tp-app {
      --tp-bg: #f6f8f4;
      --tp-card: #ffffff;
      --tp-text: #24352d;
      --tp-muted: #68776d;
      --tp-primary: #24734b;
      --tp-accent: #e6b83f;
      min-height: 100vh;
      background: var(--tp-bg);
      color: var(--tp-text);
      font-family: Arial, Helvetica, sans-serif;
      transition: background 0.3s, color 0.3s;
    }

    .tp-app.dark {
      --tp-bg: #142019;
      --tp-card: #202e25;
      --tp-text: #f1f5ef;
      --tp-muted: #bdc9bf;
      --tp-primary: #81c99b;
      --tp-accent: #f2cf69;
    }

    .tp-app * {
      box-sizing: border-box;
    }

    .tp-container {
      width: min(1180px, 92%);
      margin: 0 auto;
    }

    .tp-header {
      position: sticky;
      top: 0;
      z-index: 20;
      background: var(--tp-card);
      border-bottom: 1px solid rgba(120, 140, 120, 0.18);
    }

    .tp-header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 15px 0;
    }

    .tp-logo {
      color: var(--tp-primary);
      font-size: 25px;
      font-weight: 800;
      letter-spacing: -1px;
      cursor: pointer;
    }

    .tp-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .tp-button {
      border: 0;
      border-radius: 24px;
      padding: 10px 15px;
      background: var(--tp-primary);
      color: #ffffff;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s, opacity 0.2s;
    }

    .tp-button:hover {
      transform: translateY(-2px);
      opacity: 0.9;
    }

    .tp-button.secondary {
      background: transparent;
      color: var(--tp-text);
      border: 1px solid rgba(130, 150, 130, 0.4);
    }

    .tp-hero {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      align-items: center;
      gap: 32px;
      padding: 44px 0;
    }

    .tp-hero h1 {
      font-size: clamp(34px, 5vw, 58px);
      line-height: 1.08;
      margin: 12px 0 18px;
      letter-spacing: -1.8px;
    }

    .tp-hero p,
    .tp-description {
      color: var(--tp-muted);
      line-height: 1.8;
    }

    .tp-eyebrow {
      color: var(--tp-primary);
      font-weight: 800;
      font-size: 12px;
      letter-spacing: 2px;
    }

    .tp-hero-image {
      width: 100%;
      height: 390px;
      object-fit: cover;
      border-radius: 28px;
      box-shadow: 0 18px 45px rgba(30, 60, 35, 0.13);
    }

    .tp-section {
      padding: 32px 0 46px;
    }

    .tp-section-heading {
      margin-bottom: 22px;
    }

    .tp-section-heading h2 {
      font-size: clamp(25px, 3vw, 36px);
      margin: 0 0 8px;
    }

    .tp-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
    }

    .tp-card {
      background: var(--tp-card);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 28px rgba(35, 60, 40, 0.07);
      animation: tp-appear 0.5s ease both;
    }

    .tp-card-image {
      display: block;
      width: 100%;
      height: 220px;
      object-fit: cover;
      transition: transform 0.4s;
    }

    .tp-card:hover .tp-card-image {
      transform: scale(1.04);
    }

    .tp-card-content {
      padding: 20px;
    }

    .tp-card h3 {
      margin: 0 0 10px;
      line-height: 1.4;
    }

    .tp-card p {
      color: var(--tp-muted);
      line-height: 1.7;
    }

    .tp-tag {
      display: inline-block;
      color: var(--tp-primary);
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .tp-fields {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin: 18px 0;
    }

    .tp-input {
      width: 100%;
      min-width: 0;
      padding: 13px 15px;
      border: 1px solid rgba(130, 150, 130, 0.4);
      border-radius: 12px;
      background: var(--tp-card);
      color: var(--tp-text);
      font: inherit;
    }

    .tp-search {
      flex: 1;
      min-width: 200px;
    }

    .tp-article-body {
      max-width: 780px;
      margin: 0 auto;
      line-height: 1.9;
      font-size: 17px;
    }

    .tp-article-body p {
      margin: 20px 0;
    }

    .tp-footer {
      margin-top: 35px;
      padding: 35px 0 110px;
      background: var(--tp-card);
      color: var(--tp-muted);
      text-align: center;
      line-height: 1.8;
    }

    .tp-bottom-nav {
      display: none;
    }

    @keyframes tp-appear {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 760px) {
      .tp-container {
        width: 92%;
      }

      .tp-header-inner {
        padding: 12px 0;
      }

      .tp-logo {
        font-size: 21px;
      }

      .tp-hero {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 28px 0;
      }

      .tp-hero-image {
        height: 260px;
      }

      .tp-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 13px;
      }

      .tp-card-image {
        height: 155px;
      }

      .tp-card-content {
        padding: 14px;
      }

      .tp-card h3 {
        font-size: 16px;
      }

      .tp-card p {
        font-size: 14px;
      }

      .tp-bottom-nav {
        position: fixed;
        z-index: 30;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 2px;
        padding: 8px 3px calc(8px + env(safe-area-inset-bottom));
        background: var(--tp-card);
        border-top: 1px solid rgba(120, 140, 120, 0.22);
        box-shadow: 0 -5px 22px rgba(0, 0, 0, 0.06);
      }

      .tp-nav-item {
        border: 0;
        background: transparent;
        color: var(--tp-muted);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        min-width: 0;
        padding: 6px 0;
        font-size: 10px;
        cursor: pointer;
      }

      .tp-nav-item.active {
        color: var(--tp-primary);
        font-weight: 800;
      }

      .tp-nav-icon {
        width: 28px;
        height: 28px;
        object-fit: cover;
        border-radius: 9px;
      }
    }

    @media (max-width: 390px) {
      .tp-grid {
        grid-template-columns: 1fr;
      }

      .tp-actions .tp-button {
        padding: 8px 10px;
        font-size: 12px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .tp-app *,
      .tp-app *::before,
      .tp-app *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
      
  return (
    <div className={`tp-app ${theme}`}>
      <style>{styles}</style>

      <header className="tp-header">
        <div className="tp-container tp-header-inner">
          <div
            className="tp-logo"
            onClick={() => navigate("home")}
          >
            Trend Pulse
          </div>

          <div className="tp-actions">
            <button
              className="tp-button secondary"
              onClick={() =>
                setLanguage(isFrench ? "en" : "fr")
              }
              type="button"
            >
              {isFrench ? "EN 🇬🇧" : "FR 🇫🇷"}
            </button>

            <button
              className="tp-button secondary"
              onClick={toggleTheme}
              type="button"
              aria-label={
                isFrench
                  ? "Changer le thème"
                  : "Change theme"
              }
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>

        <div className="tp-container">
          <nav
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "12px"
            }}
          >
            {(
              [
                ["home", t.home],
                ["trends", t.trends],
                ["tips", t.tips],
                ["videos", t.videos],
                ["articles", t.articles],
                ["ebooks", t.ebooks],
                ["about", t.about]
              ] as [Page, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`tp-button ${
                  page === key
                    ? ""
                    : "secondary"
                }`}
                onClick={() => navigate(key)}
                style={{ whiteSpace: "nowrap" }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>
        
      <main className="tp-container">
        {page === "home" && (
          <>
            <section className="tp-hero">
              <div>
                <span className="tp-eyebrow">
                  {t.heroEyebrow}
                </span>

                <h1>{t.heroTitle}</h1>

                <p>{t.heroText}</p>

                <div className="tp-fields">
                  <button
                    className="tp-button"
                    onClick={() => navigate("articles")}
                    type="button"
                  >
                    {t.discoverArticles} →
                  </button>

                  <button
                    className="tp-button secondary"
                    onClick={() => navigate("tips")}
                    type="button"
                  >
                    {t.discoverTips}
                  </button>
                </div>
              </div>

              <img
                className="tp-hero-image"
                src={images.hero}
                alt={
                  isFrench
                    ? "Aliments frais et colorés pour une alimentation équilibrée"
                    : "Fresh colorful food for a balanced diet"
                }
                loading="eager"
              />
            </section>

            <section className="tp-section">
              <div className="tp-section-heading">
                <span className="tp-eyebrow">
                  TREND PULSE
                </span>

                <h2>{t.exploreTopics}</h2>

                <p className="tp-description">
                  {t.categories}
                </p>
              </div>

              <div className="tp-grid">
                {visualCards.map((item, index) => (
                  <article className="tp-card" key={item.title}>
                    <img
                      className="tp-card-image"
                      src={item.image}
                      alt={
                        isFrench
                          ? item.title
                          : item.titleEn
                      }
                      loading="lazy"
                    />

                    <div className="tp-card-content">
                      <span className="tp-tag">
                        {index === 0
                          ? isFrench
                            ? "NATURE"
                            : "NATURE"
                          : index === 1
                            ? isFrench
                              ? "ACTIVITÉ"
                              : "ACTIVITY"
                            : index === 2
                              ? isFrench
                                ? "SOMMEIL"
                                : "SLEEP"
                              : isFrench
                                ? "VIDÉOS"
                                : "VIDEOS"}
                      </span>

                      <h3>
                        {isFrench
                          ? item.title
                          : item.titleEn}
                      </h3>

                      <p>
                        {isFrench
                          ? item.text
                          : item.textEn}
                      </p>

                      <button
                        className="tp-button"
                        type="button"
                        onClick={() => navigate(item.page)}
                      >
                        {t.explore} →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="tp-section">
              <div className="tp-section-heading">
                <h2>{t.latest}</h2>
                <p className="tp-description">
                  {isFrench
                    ? "Des lectures pratiques pour prendre soin de toi au quotidien."
                    : "Practical reading to help you care for yourself every day."}
                </p>
              </div>

              <div className="tp-grid">
                {articles.slice(0, 3).map((article) => (
                  <article
                    className="tp-card"
                    key={article.id}
                  >
                    <img
                      className="tp-card-image"
                      src={article.image}
                      alt={
                        isFrench
                          ? article.title
                          : article.titleEn
                      }
                      loading="lazy"
                    />

                    <div className="tp-card-content">
                      <span className="tp-tag">
                        {isFrench
                          ? article.category
                          : article.categoryEn}
                      </span>

                      <h3>
                        {isFrench
                          ? article.title
                          : article.titleEn}
                      </h3>

                      <p>
                        {isFrench
                          ? article.summary
                          : article.summaryEn}
                      </p>

                      <button
                        className="tp-button"
                        type="button"
                        onClick={() => openArticle(article)}
                      >
                        {t.read} →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="tp-section">
              <div className="tp-card">
                <div className="tp-card-content">
                  <h2>{t.newsletterTitle}</h2>
                  <p>{t.newsletterText}</p>

                  <button
                    className="tp-button"
                    type="button"
                    onClick={() => navigate("videos")}
                  >
                    {t.discoverVideos} →
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
                          
        {page === "trends" && (
          <section className="tp-section">
            <div className="tp-section-heading">
              <span className="tp-eyebrow">
                TREND PULSE
              </span>
              <h1>{t.trendsTitle}</h1>
              <p className="tp-description">
                {isFrench
                  ? "Découvre des habitudes simples à intégrer dans ta journée."
                  : "Discover simple habits you can add to your day."}
              </p>
            </div>

            <div className="tp-grid">
              {trendCards.map((item) => (
                <article className="tp-card" key={item.title}>
                  <img
                    className="tp-card-image"
                    src={item.image}
                    alt={isFrench ? item.title : item.titleEn}
                    loading="lazy"
                  />

                  <div className="tp-card-content">
                    <span className="tp-tag">
                      {isFrench ? item.category : (
                        item.category === "Nutrition"
                          ? "Nutrition"
                          : item.category === "Sommeil"
                            ? "Sleep"
                            : item.category === "Activité physique"
                              ? "Physical activity"
                              : "Well-being"
                      )}
                    </span>

                    <h3>
                      {isFrench ? item.title : item.titleEn}
                    </h3>

                    <p>
                      {isFrench ? item.text : item.textEn}
                    </p>

                    <button
                      className="tp-button"
                      type="button"
                      onClick={() => navigate("articles")}
                    >
                      {t.discoverArticles} →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "tips" && (
          <section className="tp-section">
            <div className="tp-section-heading">
              <span className="tp-eyebrow">
                DAILY INSPIRATION
              </span>
              <h1>{t.tipsTitle}</h1>
              <p className="tp-description">
                {isFrench
                  ? "De petites actions peuvent t'aider à construire une routine plus équilibrée."
                  : "Small actions can help you build a more balanced routine."}
              </p>
            </div>

            <div className="tp-grid">
              {tipCards.map((item) => (
                <article className="tp-card" key={item.title}>
                  <img
                    className="tp-card-image"
                    src={item.image}
                    alt={isFrench ? item.title : item.titleEn}
                    loading="lazy"
                  />

                  <div className="tp-card-content">
                    <h3>
                      {isFrench ? item.title : item.titleEn}
                    </h3>

                    <p>
                      {isFrench ? item.text : item.textEn}
                    </p>

                    <button
                      className="tp-button"
                      type="button"
                      onClick={() => navigate("articles")}
                    >
                      {t.learnMore} →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="tp-card" style={{ marginTop: 24 }}>
              <div className="tp-card-content">
                <h2>
                  {isFrench
                    ? "Calcule ton activité hebdomadaire"
                    : "Calculate Your Weekly Activity"}
                </h2>

                <p>{t.activityQuestion}</p>

                <input
                  className="tp-input"
                  type="number"
                  min="0"
                  max="1440"
                  value={minutesPerDay}
                  onChange={(event) =>
                    setMinutesPerDay(
                      Math.max(
                        0,
                        Math.min(1440, Number(event.target.value) || 0)
                      )
                    )
                  }
                />

                <p>{t.activityDays}</p>

                <input
                  className="tp-input"
                  type="number"
                  min="0"
                  max="7"
                  value={daysPerWeek}
                  onChange={(event) =>
                    setDaysPerWeek(
                      Math.max(
                        0,
                        Math.min(7, Number(event.target.value) || 0)
                      )
                    )
                  }
                />

                <h3>
                  {activityTotal} {t.activityResult}
                </h3>

                <p className="tp-description">
                  {t.activityAdvice}
                </p>
              </div>
            </div>
          </section>
        )}
                    
        {page === "videos" && (
          <section className="tp-section">
            <div className="tp-section-heading">
              <span className="tp-eyebrow">
                TREND PULSE VIDEO
              </span>

              <h1>{t.videosTitle}</h1>

              <p className="tp-description">
                {isFrench
                  ? "Découvre des vidéos et des idées pratiques pour prendre soin de toi."
                  : "Discover videos and practical ideas to take care of yourself."}
              </p>
            </div>

            <div className="tp-grid">
              {videos.map((video, index) => (
                <article className="tp-card" key={video.title}>
                  <img
                    className="tp-card-image"
                    src={video.image}
                    alt={
                      isFrench
                        ? video.title
                        : video.titleEn
                    }
                    loading="lazy"
                  />

                  <div className="tp-card-content">
                    <span className="tp-tag">
                      {isFrench
                        ? `VIDÉO ${index + 1}`
                        : `VIDEO ${index + 1}`}
                    </span>

                    <h3>
                      {isFrench
                        ? video.title
                        : video.titleEn}
                    </h3>

                    <p>
                      {isFrench
                        ? video.description
                        : video.descriptionEn}
                    </p>

                    <p className="tp-description">
                      {video.organization}
                    </p>

                    <button
                      className="tp-button"
                      type="button"
                      onClick={() =>
                        window.open(
                          video.url,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      ▶ {t.discoverVideos}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="tp-card"
              style={{ marginTop: 24 }}
            >
              <div className="tp-card-content">
                <h2>
                  {isFrench
                    ? "Apprends avec des vidéos"
                    : "Learn Through Videos"}
                </h2>

                <p>
                  {isFrench
                    ? "Choisis une ressource, regarde-la à ton rythme et note une habitude que tu souhaites essayer."
                    : "Choose a resource, watch at your own pace, and note one habit you would like to try."}
                </p>

                <button
                  className="tp-button"
                  type="button"
                  onClick={() => navigate("articles")}
                >
                  {t.discoverArticles} →
                </button>
              </div>
            </div>
          </section>
        )}
        {page === "articles" && (
          <section className="tp-section">
            <div className="tp-section-heading">
              <span className="tp-eyebrow">
                TREND PULSE JOURNAL
              </span>

              <h1>{t.articles}</h1>

              <p className="tp-description">
                {isFrench
                  ? "Explore des articles sur la nutrition, le sommeil, l'activité physique et le bien-être."
                  : "Explore articles about nutrition, sleep, physical activity, and well-being."}
              </p>
            </div>

            {selectedArticle ? (
              <article className="tp-article-body">
                <button
                  type="button"
                  className="tp-button secondary"
                  onClick={() => setSelectedArticle(null)}
                >
                  ← {t.back}
                </button>

                <img
                  className="tp-hero-image"
                  src={selectedArticle.image}
                  alt={
                    isFrench
                      ? selectedArticle.title
                      : selectedArticle.titleEn
                  }
                  loading="lazy"
                  style={{ marginTop: 24 }}
                />

                <span className="tp-tag">
                  {isFrench
                    ? selectedArticle.category
                    : selectedArticle.categoryEn}
                </span>

                <h1>
                  {isFrench
                    ? selectedArticle.title
                    : selectedArticle.titleEn}
                </h1>

                <p className="tp-description">
                  {isFrench
                    ? selectedArticle.summary
                    : selectedArticle.summaryEn}
                </p>

                {(isFrench
                  ? selectedArticle.body
                  : selectedArticle.bodyEn
                ).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <p>
                  <strong>{t.source} :</strong>{" "}
                  <a
                    href={selectedArticle.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--tp-primary)" }}
                  >
                    {selectedArticle.source}
                  </a>
                </p>

                <p className="tp-description">
                  {t.disclaimer}
                </p>
              </article>
            ) : (
              <>
                <div className="tp-fields">
                  <input
                    className="tp-input tp-search"
                    type="search"
                    placeholder={t.search}
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    aria-label={t.search}
                  />

                  <select
                    className="tp-input"
                    value={category}
                    onChange={(event) =>
                      setCategory(event.target.value)
                    }
                    aria-label={t.filter}
                    style={{ maxWidth: 280 }}
                  >
                    <option value="all">{t.all}</option>

                    {[...new Set(
                      articles.map((article) => article.category)
                    )].map((item) => (
                      <option key={item} value={item}>
                        {isFrench
                          ? item
                          : articles.find(
                              (article) =>
                                article.category === item
                            )?.categoryEn ?? item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="tp-grid">
                  {filteredArticles.map((article) => (
                    <article
                      className="tp-card"
                      key={article.id}
                    >
                      <img
                        className="tp-card-image"
                        src={article.image}
                        alt={
                          isFrench
                            ? article.title
                            : article.titleEn
                        }
                        loading="lazy"
                      />

                      <div className="tp-card-content">
                        <span className="tp-tag">
                          {isFrench
                            ? article.category
                            : article.categoryEn}
                        </span>

                        <h3>
                          {isFrench
                            ? article.title
                            : article.titleEn}
                        </h3>

                        <p>
                          {isFrench
                            ? article.summary
                            : article.summaryEn}
                        </p>

                        <button
                          className="tp-button"
                          type="button"
                          onClick={() => openArticle(article)}
                        >
                          {t.read} →
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <p className="tp-description">
                    {t.searchEmpty}
                  </p>
                )}
              </>
            )}
          </section>
        )}
          
        {page === "ebooks" && (
          <section className="tp-section">
            <div className="tp-section-heading">
              <span className="tp-eyebrow">
                TREND PULSE LIBRARY
              </span>

              <h1>{t.ebooksTitle}</h1>

              <p className="tp-description">
                {isFrench
                  ? "Découvre des guides et des ressources pour approfondir tes connaissances."
                  : "Discover guides and resources to expand your knowledge."}
              </p>
            </div>

            <div className="tp-grid">
              {ebooks.map((book) => (
                <article className="tp-card" key={book.title}>
                  <img
                    className="tp-card-image"
                    src={book.image}
                    alt={isFrench ? book.title : book.titleEn}
                    loading="lazy"
                  />

                  <div className="tp-card-content">
                    <h3>
                      {isFrench ? book.title : book.titleEn}
                    </h3>

                    <p>
                      {isFrench
                        ? book.description
                        : book.descriptionEn}
                    </p>

                    <p className="tp-description">
                      {book.organization}
                    </p>

                    <a
                      className="tp-button"
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        textDecoration: "none"
                      }}
                    >
                      {t.openResource} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="tp-section">
            <div className="tp-hero">
              <div>
                <span className="tp-eyebrow">
                  ABOUT TREND PULSE
                </span>

                <h1>{t.aboutTitle}</h1>

                <p className="tp-description">
                  {isFrench
                    ? "Trend Pulse est un espace consacré aux habitudes saines, à la nutrition, au sommeil, à l'activité physique et au bien-être."
                    : "Trend Pulse is a space dedicated to healthy habits, nutrition, sleep, physical activity, and well-being."}
                </p>

                <p className="tp-description">
                  {isFrench
                    ? "Notre objectif est de rendre les informations pratiques plus faciles à découvrir et à appliquer au quotidien."
                    : "Our goal is to make practical information easier to discover and apply in everyday life."}
                </p>

                <button
                  className="tp-button"
                  type="button"
                  onClick={() => navigate("articles")}
                >
                  {t.discoverArticles} →
                </button>
              </div>

              <img
                className="tp-hero-image"
                src={images.wellness}
                alt={
                  isFrench
                    ? "Moment de calme et de bien-être"
                    : "A peaceful moment of well-being"
                }
                loading="lazy"
              />
            </div>

            <div className="tp-grid">
              <article className="tp-card">
                <img
                  className="tp-card-image"
                  src={images.food}
                  alt="Fresh food"
                  loading="lazy"
                />

                <div className="tp-card-content">
                  <h3>{t.quality}</h3>
                  <p>{t.qualityText}</p>
                </div>
              </article>

              <article className="tp-card">
                <img
                  className="tp-card-image"
                  src={images.activity}
                  alt="Walking outdoors"
                  loading="lazy"
                />

                <div className="tp-card-content">
                  <h3>{t.simple}</h3>
                  <p>{t.simpleText}</p>
                </div>
              </article>

              <article className="tp-card">
                <img
                  className="tp-card-image"
                  src={images.sleep}
                  alt="Rest and sleep"
                  loading="lazy"
                />

                <div className="tp-card-content">
                  <h3>
                    {isFrench
                      ? "Respect du bien-être"
                      : "Well-being First"}
                  </h3>

                  <p>{t.disclaimer}</p>
                </div>
              </article>
            </div>
          </section>
        )}
      </main>

      <footer className="tp-footer">
        <div className="tp-container">
          <h2>Trend Pulse</h2>

          <p>{t.footer}</p>

          <p>{t.noDiagnosis}</p>

          <div className="tp-actions" style={{ justifyContent: "center" }}>
            <button
              className="tp-button secondary"
              type="button"
              onClick={() => navigate("about")}
            >
              {t.about}
            </button>

            <button
              className="tp-button secondary"
              type="button"
              onClick={() => navigate("articles")}
            >
              {t.articles}
            </button>
          </div>

          <p style={{ fontSize: 12, marginTop: 24 }}>
            © {new Date().getFullYear()} Trend Pulse
          </p>
        </div>
      </footer>

      <nav
        className="tp-bottom-nav"
        aria-label={isFrench ? "Navigation mobile" : "Mobile navigation"}
      >
        {(
          [
            ["home", t.home, images.hero],
            ["trends", t.trends, images.food],
            ["tips", t.tips, images.wellness],
            ["videos", t.videos, images.activity],
            ["articles", t.articles, images.books]
          ] as [Page, string, string][]
        ).map(([key, label, image]) => (
          <button
            key={key}
            type="button"
            className={`tp-nav-item ${
              page === key ? "active" : ""
            }`}
            onClick={() => navigate(key)}
          >
            <img
              className="tp-nav-icon"
              src={image}
              alt=""
              loading="lazy"
            />

            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
                }
            
          
