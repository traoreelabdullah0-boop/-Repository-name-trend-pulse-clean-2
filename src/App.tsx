
import { useState } from "react";

type Page = "home" | "trends" | "tips" | "videos" | "articles" | "ebooks" | "about";

const articles = [
  {
    category: "NUTRITION",
    title: "Comprendre le jeûne intermittent 16:8",
    description: "Découvrez le principe de cette méthode, ses limites et les précautions à connaître.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
    body: "Le jeûne intermittent consiste à organiser les périodes de repas et de jeûne. La méthode 16:8 prévoit une fenêtre de repas de huit heures et une période de jeûne de seize heures. Elle ne convient pas à tout le monde. Les personnes enceintes, les personnes ayant des antécédents de troubles alimentaires ou certaines maladies doivent demander un avis médical avant de modifier leur alimentation."
  },
  {
    category: "SOMMEIL",
    title: "La lumière et la qualité du sommeil",
    description: "Quelques habitudes pour préparer le corps au repos le soir.",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b5d8f5a?auto=format&fit=crop&w=900&q=85",
    body: "Une heure de coucher régulière, une chambre calme et une lumière moins intense le soir peuvent aider à installer une routine de sommeil. Réduire l'utilisation des écrans avant le coucher peut également être utile. Les besoins varient d'une personne à l'autre."
  },
  {
    category: "FITNESS",
    title: "Bouger davantage au quotidien",
    description: "Des idées simples pour intégrer le mouvement à sa routine.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    body: "La marche, les déplacements actifs, les étirements adaptés et les activités appréciées permettent de bouger plus régulièrement. Commencez progressivement selon votre condition physique et demandez conseil à un professionnel si vous avez des préoccupations de santé."
  }
];

const ebooks = [
  {
    title: "Guide pratique du sommeil réparateur",
    description: "Un guide officiel pour comprendre les habitudes favorables au sommeil.",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b5d8f5a?auto=format&fit=crop&w=700&q=80",
    source: "National Heart, Lung, and Blood Institute",
    url: "https://www.nhlbi.nih.gov/resources/brief-your-guide-healthy-sleep-fact-sheet",
    action: "Lire le PDF"
  },
  {
    title: "Ressources sur l'activité physique",
    description: "Consultez les ressources et publications de l'Organisation mondiale de la Santé.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
    source: "Organisation mondiale de la Santé",
    url: "https://www.who.int/health-topics/physical-activity",
    action: "Consulter le guide"
  },
  {
    title: "Bibliothèque de guides santé gratuits",
    description: "Découvrez des ressources gratuites sur différents sujets de santé.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    source: "NIH News in Health",
    url: "https://newsinhealth.nih.gov/2017/07/free-ebooks-health",
    action: "Explorer la bibliothèque"
  }
];

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: "home", label: "Accueil", icon: "⌂" },
  { id: "trends", label: "Tendances", icon: "↗" },
  { id: "tips", label: "Conseils", icon: "✳" },
  { id: "videos", label: "Vidéos", icon: "▷" },
  { id: "articles", label: "Articles", icon: "▤" },
  { id: "ebooks", label: "E-books", icon: "▣" }
];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  const english = language === "en";

  function navigate(nextPage: Page) {
    setPage(nextPage);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openArticle(index: number) {
    setSelectedArticle(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const currentArticle =
    selectedArticle === null ? null : articles[selectedArticle];

  return (
    <main className="site">
      <div className="notice">
        {english
          ? "Wellness information does not replace professional medical advice."
          : "Les informations de bien-être ne remplacent pas un avis médical."}
      </div>

      <header className="header">
        <button className="brand-button" onClick={() => navigate("home")}>
          <span className="brand-symbol">✳</span>
          <span className="brand-name">TREND PULSE</span>
          <span className="brand-subtitle">MODE DE VIE SAIN</span>
        </button>

        <button
          className="language-button"
          onClick={() => setLanguage(english ? "fr" : "en")}
        >
          {english ? "FR 🇫🇷" : "EN 🇬🇧"}
        </button>
      </header>

      <nav className="top-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "top-nav-link active" : "top-nav-link"}
            onClick={() => navigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-text">
              <span className="eyebrow">
                {english ? "YOUR WELLNESS GUIDE" : "VOTRE GUIDE BIEN-ÊTRE"}
              </span>
              <h1>
                {english
                  ? "Take care of yourself, one day at a time."
                  : "Prenez soin de vous, un jour à la fois."}
              </h1>
              <p>
                {english
                  ? "Explore practical ideas about nutrition, sleep, fitness and a balanced lifestyle."
                  : "Explorez des idées pratiques sur la nutrition, le sommeil, le sport et l'équilibre de vie."}
              </p>
              <button className="button" onClick={() => navigate("articles")}>
                {english ? "Explore articles ↗" : "Découvrir les articles ↗"}
              </button>
            </div>
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
              alt="Yoga et bien-être dans un cadre naturel"
            />
          </section>

          <section className="intro">
            <span className="eyebrow">EXPLOREZ NOS RUBRIQUES</span>
            <h2>Votre bien-être, en toute simplicité</h2>
            <p>Des informations accessibles pour construire une routine qui vous ressemble.</p>
            <div className="pillars">
              <button onClick={() => navigate("trends")}>
                <span>🥗</span><b>Nutrition et tendances</b><small>Découvrir les sujets populaires</small>
              </button>
              <button onClick={() => navigate("tips")}>
                <span>🌙</span><b>Conseils pratiques</b><small>Des habitudes faciles à explorer</small>
              </button>
              <button onClick={() => navigate("ebooks")}>
                <span>📚</span><b>E-books gratuits</b><small>Accéder aux guides disponibles</small>
              </button>
            </div>
          </section>

          <section className="articles">
            <div className="section-heading">
              <div><span className="eyebrow">LE MAGAZINE</span><h2>À découvrir</h2></div>
              <button className="text-link" onClick={() => navigate("articles")}>Tous les articles →</button>
            </div>
            <div className="article-grid">
              {articles.map((article, index) => (
                <article className="article-card" key={article.title}>
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <div className="article-body">
                    <span className="category">{article.category}</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <button className="text-link" onClick={() => openArticle(index)}>Lire l'article →</button>
                  </div>
                </article>
              ))}
            </div>
            <button className="button" onClick={() => navigate("ebooks")}>Explorer les e-books gratuits ↗</button>
          </section>
        </>
      )}

      {page === "trends" && (
        <section className="page-section">
          <span className="eyebrow">CE QUI VOUS INTÉRESSE</span>
          <h1>Tendances bien-être</h1>
          <p className="page-lead">Explorez nos thèmes autour de l'alimentation, du sommeil et du mouvement. Les contenus sont informatifs et ne constituent pas des recommandations médicales personnalisées.</p>
          <div className="article-grid">
            {articles.map((article, index) => (
              <article className="article-card" key={article.title}>
                <img src={article.image} alt={article.title} loading="lazy" />
                <div className="article-body">
                  <span className="category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <button className="text-link" onClick={() => openArticle(index)}>Explorer →</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {page === "tips" && (
        <section className="page-section">
          <span className="eyebrow">À APPLIQUER À VOTRE RYTHME</span>
          <h1>Conseils et habitudes</h1>
          <p className="page-lead">De petites idées pour organiser votre quotidien sans rechercher la perfection.</p>
          <div className="tips-list">
            <article><span>01</span><div><h2>Créer une routine de sommeil</h2><p>Essayez de garder des horaires réguliers et de rendre votre chambre calme et confortable.</p></div></article>
            <article><span>02</span><div><h2>Composer des repas variés</h2><p>Lorsque c'est possible, combinez légumes, fruits, sources de protéines et aliments riches en fibres.</p></div></article>
            <article><span>03</span><div><h2>Intégrer le mouvement</h2><p>Choisissez une activité adaptée à votre condition physique et commencez progressivement.</p></div></article>
            <article><span>04</span><div><h2>Faire une pause</h2><p>Accordez-vous quelques minutes pour respirer tranquillement ou vous éloigner des écrans.</p></div></article>
          </div>
          <button className="button" onClick={() => navigate("ebooks")}>Voir les guides gratuits ↗</button>
        </section>
      )}

      {page === "videos" && (
        <section className="page-section">
          <span className="eyebrow">REGARDER ET APPRENDRE</span>
          <h1>Vidéos bien-être</h1>
          <p className="page-lead">Retrouvez des vidéos et des démonstrations utiles. Cette rubrique pourra être enrichie avec tes propres vidéos ou tes liens YouTube.</p>
          <div className="video-placeholder">
            <span>▷</span>
            <h2>Votre espace vidéo</h2>
            <p>Les vidéos seront ajoutées ici au fur et à mesure de la création de tes contenus.</p>
            <a className="button" href="https://www.youtube.com/" target="_blank" rel="noreferrer">Explorer YouTube ↗</a>
          </div>
        </section>
      )}

      {page === "articles" && (
        <section className="page-section">
          {currentArticle ? (
            <article className="article-detail">
              <button className="text-link" onClick={() => setSelectedArticle(null)}>← Retour aux articles</button>
              <img src={currentArticle.image} alt={currentArticle.title} />
              <span className="category">{currentArticle.category}</span>
              <h1>{currentArticle.title}</h1>
              <p className="page-lead">{currentArticle.description}</p>
              <p className="article-full-text">{currentArticle.body}</p>
              <p className="medical-note">Information générale : cet article ne remplace pas l'avis d'un professionnel de santé.</p>
              <button className="button" onClick={() => navigate("ebooks")}>Consulter les guides gratuits ↗</button>
            </article>
          ) : (
            <>
              <span className="eyebrow">LECTURES ET DÉCOUVERTES</span>
              <h1>Articles</h1>
              <p className="page-lead">Choisissez un sujet pour ouvrir son article complet.</p>
              <div className="article-grid">
                {articles.map((article, index) => (
                  <article className="article-card" key={article.title}>
                    <img src={article.image} alt={article.title} loading="lazy" />
                    <div className="article-body">
                      <span className="category">{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <button className="text-link" onClick={() => openArticle(index)}>Lire l'article →</button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {page === "ebooks" && (
        <section className="page-section">
          <span className="eyebrow">BIBLIOTHÈQUE NUMÉRIQUE</span>
          <h1>E-books et guides gratuits</h1>
          <p className="page-lead">Consultez des ressources gratuites publiées par des organismes reconnus. Les liens ouvrent les pages ou les documents des éditeurs d'origine.</p>
          <div className="article-grid">
            {ebooks.map((ebook) => (
              <article className="article-card" key={ebook.title}>
                <img src={ebook.image} alt="" loading="lazy" />
                <div className="article-body">
                  <span className="category">RESSOURCE GRATUITE</span>
                  <h3>{ebook.title}</h3>
                  <p>{ebook.description}</p>
                  <p className="ebook-source">Source : {ebook.source}</p>
                  <a className="button" href={ebook.url} target="_blank" rel="noreferrer">{ebook.action} ↗</a>
                </div>
              </article>
            ))}
          </div>
          <p className="medical-note">Les ressources externes restent hébergées par leurs éditeurs. Vérifiez leurs conditions d'utilisation avant de redistribuer un document.</p>
        </section>
      )}

      {page === "about" && (
        <section className="page-section">
          <span className="eyebrow">À PROPOS DU PROJET</span>
          <h1>Bienvenue sur Trend Pulse</h1>
          <p className="page-lead">Trend Pulse est un magazine bilingue consacré aux habitudes de vie, à la nutrition, au sommeil, au mouvement et au bien-être.</p>
          <h2>Notre objectif</h2>
          <p>Rendre les informations pratiques plus faciles à découvrir, avec des articles accessibles et des ressources utiles.</p>
          <h2>Note importante</h2>
          <p>Le site fournit des informations générales. Il ne remplace pas une consultation, un diagnostic ou un traitement médical.</p>
        </section>
      )}

      <footer className="footer">
        <button className="footer-brand" onClick={() => navigate("home")}>✳ TREND PULSE</button>
        <p>Des idées pratiques pour un mode de vie plus équilibré.</p>
        <div className="footer-links">
          <button onClick={() => navigate("about")}>À propos</button>
          <button onClick={() => navigate("articles")}>Articles</button>
          <button onClick={() => navigate("ebooks")}>E-books gratuits</button>
        </div>
        <small>© 2026 Trend Pulse · Les contenus ne remplacent pas un avis médical.</small>
      </footer>

      <nav className="bottom-nav" aria-label="Navigation mobile">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "bottom-nav-item active" : "bottom-nav-item"}
            onClick={() => navigate(item.id)}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </main>
  );
    }
    
