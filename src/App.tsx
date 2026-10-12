
export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 p-5 text-white sm:p-10">
      <header className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Trend Pulse
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Tableau de bord
        </h1>
        <p className="mt-2 text-slate-400">
          Suivez les tendances et découvrez les sujets du moment.
        </p>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Tendances suivies", "12"],
            ["Sujets populaires", "08"],
            ["État du système", "Initialisé"],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-3 text-2xl font-bold text-cyan-400">
                {value}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Espace tendances
          </h2>
          <p className="mt-3 leading-7 text-slate-400">
            Ton espace est prêt. La prochaine étape consiste à
            connecter une source de données pour afficher les
            tendances réelles.
          </p>
          <span className="mt-5 inline-block rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
            Interface initialisée
          </span>
        </section>
        
      </header>
    </main>
  );
}
