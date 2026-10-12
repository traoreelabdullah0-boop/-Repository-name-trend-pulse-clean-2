
const articles = [
  {
    category: "NUTRITION",
    title: "Le jeûne intermittent 16:8 : bien débuter",
    desc: "Comprendre cette méthode et adopter des habitudes alimentaires équilibrées.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "SOMMEIL",
    title: "5 habitudes pour mieux dormir",
    desc: "Créez une routine du soir pour favoriser un sommeil régulier et réparateur.",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b5d8f5a?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "FITNESS",
    title: "Bouger chaque jour à son rythme",
    desc: "Découvrez des activités simples pour intégrer davantage de mouvement à votre journée.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
];

export default function App() {
  return (
    <main className="site">
      <div className="notice">
        Votre bien-être commence par de bonnes habitudes.
        Les informations de ce site ne remplacent pas un avis médical.
      </div>

      <header className="header">
        <a className="logo" href="#accueil">
          <span>✳</span> TREND PULSE
          <small>MODE DE VIE SAIN</small>
        </a>
        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#tendances">Tendances</a>
          <a href="#conseils">Conseils</a>
          <a href="#articles">Articles</a>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-text">
          <span className="eyebrow">VOTRE GUIDE BIEN-ÊTRE</span>
          <h1>Prenez soin de vous, un jour à la fois.</h1>
          <p>
            Nutrition, sommeil, activité physique et équilibre de vie :
            découvrez des idées simples pour prendre soin de vous.
          </p>
          <a className="button" href="#articles">Découvrir les conseils ↗</a>
          <div className="hero-note">Des conseils pratiques · FR / EN</div>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
          alt="Personne pratiquant le yoga dans un environnement naturel"
        />
      </section>

      <section className="intro" id="tendances">
        <span className="eyebrow">EXPLORER ET APPRENDRE</span>
        <h2>Votre bien-être, en toute simplicité</h2>
        <p>Des informations accessibles pour construire une routine qui vous ressemble.</p>
        <div className="pillars">
          <a href="#articles"><span>🥗</span><b>Nutrition équilibrée</b><small>Mieux manger au quotidien</small></a>
          <a href="#articles"><span>🌙</span><b>Sommeil réparateur</b><small>Créer une routine apaisante</small></a>
          <a href="#articles"><span>🌿</span><b>Équilibre de vie</b><small>Prendre du temps pour soi</small></a>
        </div>
      </section>

      <section className="articles" id="articles">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LE MAGAZINE</span>
            <h2>Conseils et découvertes</h2>
          </div>
          <a href="#conseils">Explorer les thèmes →</a>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <img src={article.image} alt={article.title} loading="lazy" />
              <div className="article-body">
                <span className="category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.desc}</p>
                <a href="#conseils">Lire le conseil →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="guide" id="conseils">
        <div>
          <span className="eyebrow">VOTRE BIBLIOTHÈQUE</span>
          <h2>Apprenez à votre rythme.</h2>
          <p>Retrouvez bientôt des guides pratiques sur l'alimentation, le sommeil et les habitudes de vie.</p>
        </div>
        <a className="button" href="#articles">Découvrir le magazine ↗</a>
      </section>

      <footer className="footer">
        <a className="logo" href="#accueil"><span>✳</span> TREND PULSE</a>
        <p>Des idées simples pour un mode de vie plus équilibré.</p>
        <p>© 2026 Trend Pulse · Français | English</p>
        <small>Les contenus sont informatifs et ne remplacent pas les conseils d'un professionnel de santé.</small>
      </footer>
    </main>
  );
}
