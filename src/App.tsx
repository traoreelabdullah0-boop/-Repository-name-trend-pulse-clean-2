
import { useMemo, useState } from "react";

type Language = "fr" | "en";
type Page = "home" | "trends" | "tips" | "videos" | "articles" | "resources" | "about";

type Article = {
  id: number;
  category: string;
  image: string;
  date: string;
  readTime: number;
  featured?: boolean;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  content: { fr: string[]; en: string[] };
  tags: string[];
};

const SITE_NAME = "Trend Pulse";

const CATEGORIES = [
  { id: "all", fr: "Tout", en: "All" },
  { id: "wellness", fr: "Bien-être", en: "Wellness" },
  { id: "nutrition", fr: "Alimentation", en: "Nutrition" },
  { id: "fitness", fr: "Sport", en: "Fitness" },
  { id: "sleep", fr: "Sommeil", en: "Sleep" },
  { id: "mindfulness", fr: "Esprit", en: "Mindfulness" },
  { id: "lifestyle", fr: "Mode de vie", en: "Lifestyle" },
  { id: "habits", fr: "Habitudes", en: "Habits" },
  { id: "motivation", fr: "Motivation", en: "Motivation" },
];

const ARTICLES: Article[] = [
  {
    id: 1,
    category: "wellness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-12",
    readTime: 5,
    featured: true,
    title: {
      fr: "7 petites habitudes pour se sentir mieux chaque jour",
      en: "7 Small Habits to Feel Better Every Day",
    },
    excerpt: {
      fr: "Des gestes simples pour prendre soin de soi sans bouleverser toute sa routine.",
      en: "Simple actions to care for yourself without changing your whole routine.",
    },
    content: {
      fr: [
        "Le bien-être se construit souvent grâce à de petits gestes répétés. Tu n'as pas besoin de transformer toute ta vie en une journée.",
        "Commence par boire de l'eau au réveil, prendre quelques minutes pour respirer, marcher un peu et préparer une journée réaliste.",
        "Choisis une seule habitude à tester pendant une semaine. Observe comment tu te sens et adapte-la à ton quotidien.",
      ],
      en: [
        "Wellness often grows from small actions repeated consistently. You do not need to change your entire life in one day.",
        "Start by drinking water after waking up, taking a few minutes to breathe, walking a little, and planning a realistic day.",
        "Choose one habit to try for a week. Notice how you feel and adapt it to your routine.",
      ],
    },
    tags: ["routine", "wellness", "habits"],
  },
  {
    id: 2,
    category: "nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-11",
    readTime: 4,
    title: {
      fr: "Composer une assiette colorée et équilibrée",
      en: "How to Build a Colorful, Balanced Plate",
    },
    excerpt: {
      fr: "Une méthode visuelle et simple pour varier les aliments au quotidien.",
      en: "A simple visual approach to adding variety to everyday meals.",
    },
    content: {
      fr: [
        "Une assiette variée peut associer des légumes ou des fruits, des aliments riches en protéines et des sources de féculents.",
        "Pense aussi aux aliments disponibles dans ta région : haricots, œufs, céréales, légumes locaux et fruits de saison peuvent contribuer à des repas variés.",
        "Il n'existe pas une assiette parfaite pour tout le monde. Les besoins dépendent notamment de l'âge, de l'activité et de la santé.",
      ],
      en: [
        "A varied plate can include vegetables or fruit, protein-rich foods, and sources of carbohydrates.",
        "Consider foods available in your area. Beans, eggs, grains, local vegetables, and seasonal fruit can help create varied meals.",
        "There is no single perfect plate for everyone. Needs depend on age, activity, and health.",
      ],
    },
    tags: ["food", "nutrition", "daily life"],
  },
  {
    id: 3,
    category: "sleep",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b8f7f0a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-10",
    readTime: 5,
    title: {
      fr: "Une routine du soir pour mieux préparer son sommeil",
      en: "An Evening Routine to Prepare for Better Sleep",
    },
    excerpt: {
      fr: "Des idées simples pour ralentir et rendre la fin de journée plus calme.",
      en: "Simple ideas to slow down and make evenings more peaceful.",
    },
    content: {
      fr: [
        "Une routine régulière peut aider ton corps à reconnaître que la journée se termine.",
        "Essaie de réduire les activités stimulantes, de préparer tes affaires pour le lendemain et de choisir une activité calme, comme la lecture.",
        "Garde des horaires aussi réguliers que possible. Si les problèmes de sommeil persistent ou affectent fortement tes journées, demande conseil à un professionnel de santé.",
      ],
      en: [
        "A regular routine can help your body recognize that the day is ending.",
        "Try reducing stimulating activities, preparing things for tomorrow, and choosing a calm activity such as reading.",
        "Keep your schedule as consistent as possible. If sleep problems persist or seriously affect daily life, seek advice from a health professional.",
      ],
    },
    tags: ["sleep", "evening", "routine"],
  },
  
  {
    id: 4,
    category: "fitness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-09",
    readTime: 4,
    title: {
      fr: "Bouger davantage même quand on manque de temps",
      en: "Move More Even When You Are Short on Time",
    },
    excerpt: {
      fr: "Intègre de petits moments d'activité dans une journée bien remplie.",
      en: "Fit small moments of movement into a busy day.",
    },
    content: {
      fr: [
        "L'activité physique ne doit pas toujours prendre la forme d'une longue séance de sport.",
        "Tu peux marcher, prendre les escaliers, danser sur une chanson ou faire quelques mouvements doux pendant une pause.",
        "Commence à ton rythme et augmente progressivement. Choisis une activité adaptée à tes capacités.",
      ],
      en: [
        "Physical activity does not always have to mean a long workout.",
        "You can walk, take the stairs, dance to a song, or do gentle movements during a break.",
        "Start at your own pace and build up gradually. Choose an activity that suits your abilities.",
      ],
    },
    tags: ["movement", "fitness", "routine"],
  },
  {
    id: 5,
    category: "mindfulness",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-08",
    readTime: 3,
    title: {
      fr: "Prendre cinq minutes pour retrouver son calme",
      en: "Take Five Minutes to Find Your Calm",
    },
    excerpt: {
      fr: "Une courte pause pour ralentir et revenir à ce que tu fais.",
      en: "A short pause to slow down and return to the present moment.",
    },
    content: {
      fr: [
        "Trouve un endroit où tu peux faire une courte pause sans danger ni distraction importante.",
        "Pose les pieds au sol, relâche les épaules et remarque lentement ta respiration, sans chercher à la forcer.",
        "Si cet exercice te met mal à l'aise, arrête et choisis plutôt une activité apaisante, comme marcher tranquillement.",
      ],
      en: [
        "Find a place where you can take a short break without danger or major distractions.",
        "Place your feet on the floor, relax your shoulders, and gently notice your breathing without forcing it.",
        "If this exercise feels uncomfortable, stop and choose another calming activity, such as a gentle walk.",
      ],
    },
    tags: ["calm", "mindfulness", "pause"],
  },
  {
    id: 6,
    category: "lifestyle",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-07",
    readTime: 4,
    title: {
      fr: "Créer un espace plus agréable avec ce que l'on possède",
      en: "Create a More Pleasant Space with What You Have",
    },
    excerpt: {
      fr: "Quelques idées accessibles pour rendre son environnement plus accueillant.",
      en: "Affordable ideas to make your surroundings feel more welcoming.",
    },
    content: {
      fr: [
        "Un espace agréable n'a pas besoin d'être cher ou parfaitement décoré.",
        "Range une petite surface, laisse entrer la lumière si possible et garde à portée de main les objets que tu utilises souvent.",
        "Avance par petites zones pour éviter de transformer le rangement en tâche décourageante.",
      ],
      en: [
        "A pleasant space does not have to be expensive or perfectly decorated.",
        "Clear one small surface, let in natural light if possible, and keep frequently used items within reach.",
        "Work in small areas so that organizing does not become overwhelming.",
      ],
    },
    tags: ["home", "lifestyle", "organization"],
  },
  
  {
    id: 7,
    category: "habits",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-06",
    readTime: 4,
    title: {
      fr: "Comment construire une habitude sans se décourager",
      en: "How to Build a Habit Without Getting Discouraged",
    },
    excerpt: {
      fr: "Rends tes objectifs plus petits, plus précis et plus faciles à commencer.",
      en: "Make your goals smaller, clearer, and easier to start.",
    },
    content: {
      fr: [
        "Une habitude est plus facile à commencer lorsqu'elle demande peu d'efforts au départ.",
        "Au lieu de viser une heure d'activité immédiatement, commence par cinq minutes. Associe ensuite cette action à un moment précis de ta journée.",
        "Si tu rates un jour, reprends simplement le lendemain. La progression compte davantage que la perfection.",
      ],
      en: [
        "A habit is easier to start when it requires little effort at first.",
        "Instead of aiming for an hour of activity immediately, start with five minutes. Link the action to a specific part of your day.",
        "If you miss a day, simply start again tomorrow. Progress matters more than perfection.",
      ],
    },
    tags: ["habits", "goals", "consistency"],
  },
  {
    id: 8,
    category: "motivation",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-05",
    readTime: 3,
    title: {
      fr: "Avancer même quand la motivation diminue",
      en: "Keep Moving When Motivation Fades",
    },
    excerpt: {
      fr: "Des stratégies réalistes pour continuer sans attendre le moment parfait.",
      en: "Realistic strategies to keep going without waiting for the perfect moment.",
    },
    content: {
      fr: [
        "La motivation change naturellement. C'est pourquoi il est utile de préparer une version simple de ses objectifs.",
        "Découpe une grande tâche en étapes courtes et choisis la prochaine action concrète à accomplir.",
        "Reconnais les efforts déjà réalisés. Le repos et l'ajustement des objectifs peuvent aussi faire partie du progrès.",
      ],
      en: [
        "Motivation naturally changes. That is why it helps to prepare a simple version of your goals.",
        "Break a large task into short steps and choose the next concrete action.",
        "Recognize the effort you have already made. Rest and adjusting your goals can also be part of progress.",
      ],
    },
    tags: ["motivation", "progress", "goals"],
  },
  {
    id: 9,
    category: "nutrition",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-04",
    readTime: 4,
    title: {
      fr: "Mieux s'hydrater pendant la journée",
      en: "How to Stay Hydrated Throughout the Day",
    },
    excerpt: {
      fr: "Des repères simples pour penser à boire régulièrement.",
      en: "Simple reminders to help you drink regularly.",
    },
    content: {
      fr: [
        "Les besoins en eau varient selon la chaleur, l'activité physique, l'alimentation et la situation personnelle.",
        "Garder de l'eau à proximité et boire à différents moments de la journée peut aider à développer une routine.",
        "En cas de maladie ou de consignes médicales particulières concernant les liquides, suis les recommandations de ton professionnel de santé.",
      ],
      en: [
        "Water needs vary with heat, physical activity, diet, and individual circumstances.",
        "Keeping water nearby and drinking at different times of the day can help you build a routine.",
        "If you have an illness or specific medical advice about fluids, follow your health professional's guidance.",
      ],
    },
    tags: ["water", "nutrition", "daily habits"],
  },
];

const EXTRA_ARTICLES: Article[] = [
  {
    id: 10,
    category: "wellness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-13",
    readTime: 5,
    title: {
      fr: "Tu prends soin de tout le monde : pense aussi à toi",
      en: "You Care for Everyone—Remember Yourself Too",
    },
    excerpt: {
      fr: "Des gestes concrets pour prendre soin de toi sans culpabiliser.",
      en: "Practical ways to care for yourself without feeling guilty.",
    },
    content: {
      fr: [
        "Tu réponds aux messages, tu aides les autres et tu essaies de tenir toutes tes promesses. Mais as-tu pris un moment pour vérifier comment tu te sens, toi ? Tes besoins comptent aussi.",
        "Aujourd'hui, demande-toi ce qui t'aiderait le plus : du repos, un repas, une petite marche, une conversation ou dix minutes de calme. Choisis une seule chose et réserve-lui un moment réaliste.",
        "Tu peux aider les autres tout en posant des limites respectueuses. Commence par dix minutes pour toi et observe ce qui change. Si ton mal-être persiste, cherche du soutien auprès d'une personne de confiance ou d'un professionnel."
      ],
      en: [
        "You answer messages, help others, and try to keep every promise. But have you taken a moment to check how you feel? Your needs matter too.",
        "Ask yourself what would help most today: rest, a meal, a short walk, a conversation, or ten quiet minutes. Choose one thing and make realistic time for it.",
        "You can support others while setting respectful boundaries. Start with ten minutes for yourself and notice how you feel. If distress persists, seek support from someone you trust or a professional."
      ]
    },
    tags: ["self-care", "wellness", "boundaries"]
  },
  {
    id: 11,
    category: "nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-03",
    readTime: 5,
    title: {
      fr: "Manger varié sans vider son portefeuille",
      en: "How to Eat Varied Meals on a Budget",
    },
    excerpt: {
      fr: "Planifie des repas simples avec des ingrédients accessibles.",
      en: "Plan simple meals with affordable ingredients.",
    },
    content: {
      fr: [
        "Manger varié ne signifie pas acheter des produits coûteux. Les aliments locaux et de saison peuvent être de bons choix lorsqu'ils sont disponibles et abordables.",
        "Pense à combiner une source de protéines, comme les haricots ou les œufs, avec des céréales ou des tubercules et des légumes disponibles. Varie les assaisonnements pour ne pas manger toujours la même chose.",
        "Avant les courses, regarde ce que tu as déjà et prépare une liste de trois repas. Cela peut réduire les achats inutiles et le gaspillage. Adapte toujours ces idées à tes besoins et aux aliments accessibles chez toi."
      ],
      en: [
        "Eating a varied diet does not mean buying expensive products. Local and seasonal foods can be good choices when available and affordable.",
        "Combine a protein source, such as beans or eggs, with grains or starchy foods and available vegetables. Vary the seasoning to keep meals interesting.",
        "Before shopping, check what you already have and plan three meals. This may reduce unnecessary purchases and waste. Adapt these ideas to your needs and local food options."
      ]
    },
    tags: ["budget", "nutrition", "meal-planning"]
  },
  {
    id: 12,
    category: "habits",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-02",
    readTime: 5,
    title: {
      fr: "La méthode des dix minutes contre la procrastination",
      en: "The Ten-Minute Method for Procrastination",
    },
    excerpt: {
      fr: "Commence petit au lieu d'attendre d'être parfaitement motivé.",
      en: "Start small instead of waiting for perfect motivation.",
    },
    content: {
      fr: [
        "Quand une tâche paraît énorme, tu peux être tenté de la repousser. Parfois, le vrai problème est que tu ne sais pas précisément par où commencer.",
        "Transforme la tâche en un geste simple : ouvrir le document, écrire un titre ou ranger une petite surface. Lance un minuteur de dix minutes. Tu n'as pas besoin de tout terminer, seulement de commencer.",
        "Quand le temps est écoulé, continue si tu le souhaites ou décide quand reprendre. Essaie cette méthode sur une tâche que tu repousses aujourd'hui et note si le premier pas devient plus facile."
      ],
      en: [
        "When a task feels huge, you may be tempted to delay it. Sometimes the real problem is not knowing exactly where to begin.",
        "Turn the task into one simple action: open the document, write a title, or clear a small surface. Set a ten-minute timer. You do not need to finish everything; you only need to start.",
        "When time is up, continue if you want or decide when to return. Try this with one task you have been postponing and notice whether starting feels easier."
      ]
    },
    tags: ["habits", "focus", "productivity"]
  },
  {
    id: 13,
    category: "sleep",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b8f7f0a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-10-01",
    readTime: 5,
    title: {
      fr: "Une routine du soir simple que tu peux vraiment suivre",
      en: "A Simple Evening Routine You Can Actually Follow",
    },
    excerpt: {
      fr: "Trois petits repères plutôt qu'un programme compliqué.",
      en: "Three small anchors instead of a complicated plan.",
    },
    content: {
      fr: [
        "Une routine du soir ne doit pas durer une heure pour être utile. Quelques gestes faciles à répéter peuvent être plus réalistes qu'une longue liste de règles.",
        "Essaie de préparer une chose pour demain, de réduire les activités stimulantes avant le coucher et de choisir une activité calme. Prévois une version encore plus courte pour les journées chargées.",
        "Garde des horaires aussi réguliers que possible, sans te reprocher les soirées imparfaites. Si les difficultés de sommeil persistent ou perturbent fortement tes journées, demande conseil à un professionnel de santé."
      ],
      en: [
        "An evening routine does not need to last an hour to be useful. A few easy actions may be more realistic than a long list of rules.",
        "Prepare one thing for tomorrow, reduce stimulating activities before bed, and choose something calming. Keep an even shorter version for busy days.",
        "Keep your schedule reasonably consistent without blaming yourself for imperfect evenings. If sleep problems persist or seriously affect your days, seek advice from a health professional."
      ]
    },
    tags: ["sleep", "evening", "routine"]
  },
  {
    id: 14,
    category: "fitness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-30",
    readTime: 5,
    title: {
      fr: "Bouger à la maison sans équipement compliqué",
      en: "Move at Home Without Complicated Equipment",
    },
    excerpt: {
      fr: "Des mouvements simples pour ajouter de l'activité à ta journée.",
      en: "Simple movements to add activity to your day.",
    },
    content: {
      fr: [
        "Tu n'as pas forcément besoin d'une salle de sport ou d'équipements spécialisés pour bouger. L'essentiel est de choisir des mouvements adaptés à tes capacités et à l'espace disponible.",
        "Tu peux marcher doucement sur place, bouger les épaules, danser sur une chanson ou faire quelques levers de chaise contrôlés si cela te convient. Commence lentement et prends des pauses.",
        "Choisis une durée réaliste, même cinq minutes. Arrête si tu ressens une douleur inhabituelle, des vertiges ou un malaise. Si tu as des restrictions médicales, demande conseil sur les activités adaptées."
      ],
      en: [
        "You do not necessarily need a gym or specialist equipment to move. Choose movements that suit your abilities and available space.",
        "Try gentle marching in place, shoulder movements, dancing to one song, or controlled chair stands if suitable. Start slowly and take breaks.",
        "Choose a realistic duration, even five minutes. Stop if you experience unusual pain, dizziness, or feel unwell. If you have medical restrictions, ask which activities are suitable."
      ]
    },
    tags: ["movement", "fitness", "home-workout"]
  },
  {
    id: 15,
    category: "mindfulness",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-29",
    readTime: 4,
    title: {
      fr: "Quand tout va trop vite, fais cette pause",
      en: "When Everything Feels Rushed, Take This Pause",
    },
    excerpt: {
      fr: "Un exercice concret pour choisir ta prochaine action.",
      en: "A practical exercise to choose your next action.",
    },
    content: {
      fr: [
        "Quand plusieurs tâches réclament ton attention, vouloir tout résoudre en même temps peut augmenter la pression. Une courte pause peut t'aider à retrouver un peu de clarté.",
        "Pose les pieds au sol et remarque trois choses que tu vois autour de toi. Demande-toi ensuite : quelle est la prochaine action utile, et qu'est-ce qui peut attendre ?",
        "Écris cette action en une phrase et choisis un moment réaliste pour la faire. Si cet exercice te met mal à l'aise, regarde simplement autour de toi ou marche doucement. Si le stress devient difficile à gérer, demande du soutien."
      ],
      en: [
        "When several tasks demand your attention, trying to solve everything at once can increase pressure. A short pause may help you regain clarity.",
        "Place your feet on the floor and notice three things around you. Then ask: what is the next useful action, and what can wait?",
        "Write that action in one sentence and choose a realistic time to do it. If this exercise feels uncomfortable, simply look around or take a gentle walk. Seek support if stress becomes difficult to manage."
      ]
    },
    tags: ["mindfulness", "stress", "focus"]
  },
  {
    id: 16,
    category: "lifestyle",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-28",
    readTime: 5,
    title: {
      fr: "Ranger en quinze minutes sans tout bouleverser",
      en: "Tidy Up in Fifteen Minutes Without Doing Everything",
    },
    excerpt: {
      fr: "Une méthode par petites zones pour retrouver un espace pratique.",
      en: "A small-area method for making your space more practical.",
    },
    content: {
      fr: [
        "Vouloir ranger toute une pièce d'un seul coup peut décourager. Choisis plutôt une seule zone : une table, une étagère ou le contenu d'un sac.",
        "Pendant quinze minutes, regroupe les objets similaires et remets à leur place ceux dont tu connais l'emplacement. Mets de côté les objets qui demandent une décision au lieu de t'arrêter sur chacun d'eux.",
        "Le but n'est pas d'obtenir une pièce parfaite, mais de rendre un endroit plus facile à utiliser. Si tu n'as que cinq minutes, commence par la surface qui te gêne le plus."
      ],
      en: [
        "Trying to tidy an entire room at once can feel discouraging. Choose one area instead: a table, shelf, or bag.",
        "For fifteen minutes, group similar items and return things whose place you know. Set aside items that need a decision instead of getting stuck on each one.",
        "The goal is not a perfect room but a space that is easier to use. If you only have five minutes, start with the surface that bothers you most."
      ]
    },
    tags: ["lifestyle", "organization", "home"]
  },
  {
    id: 17,
    category: "motivation",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-27",
    readTime: 5,
    title: {
      fr: "Tu as raté une journée ? Reprends sans te punir",
      en: "Missed a Day? Start Again Without Punishing Yourself",
    },
    excerpt: {
      fr: "Remplace la culpabilité par une reprise simple et précise.",
      en: "Replace guilt with a simple, specific restart.",
    },
    content: {
      fr: [
        "Une journée manquée n'efface pas les efforts précédents. Les imprévus, la fatigue et les changements de programme font partie de la vie.",
        "Au lieu d'essayer de compenser en faisant deux fois plus, reprends la plus petite version de ton habitude. Lis une page, range un objet ou marche quelques minutes selon tes capacités.",
        "Demande-toi ce qui a rendu l'habitude difficile et ajuste une seule chose. La constance ne signifie pas réussir parfaitement chaque jour ; elle consiste aussi à reprendre après une interruption."
      ],
      en: [
        "Missing one day does not erase your previous effort. Unexpected events, tiredness, and changing schedules are part of life.",
        "Instead of compensating by doing twice as much, return to the smallest version of your habit. Read one page, put one item away, or walk for a few minutes if appropriate.",
        "Ask what made the habit difficult and adjust one thing. Consistency does not mean being perfect every day; it also means returning after a break."
      ]
    },
    tags: ["motivation", "habits", "progress"]
  },
  {
    id: 18,
    category: "nutrition",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-26",
    readTime: 5,
    title: {
      fr: "Préparer quelques repas à l'avance pour gagner du temps",
      en: "Prepare a Few Meals Ahead to Save Time",
    },
    excerpt: {
      fr: "Prépare quelques bases polyvalentes au lieu de cuisiner toute la semaine.",
      en: "Prepare a few versatile basics instead of cooking everything at once.",
    },
    content: {
      fr: [
        "Préparer ses repas à l'avance ne signifie pas devoir cuisiner sept plats différents. Quelques ingrédients de base peuvent faciliter plusieurs repas.",
        "Choisis des aliments que tu sais conserver correctement : céréales ou tubercules cuits, légumineuses et légumes préparés, par exemple. Combine-les différemment au fil des jours.",
        "Respecte les règles de sécurité alimentaire : conserve rapidement les aliments périssables au froid, utilise des contenants propres et réchauffe correctement les portions. Commence par préparer seulement deux repas, puis ajuste selon ce qui t'aide vraiment."
      ],
      en: [
        "Preparing meals ahead does not mean cooking seven different dishes. A few basic ingredients can make several meals easier.",
        "Choose foods you can store safely, such as cooked grains or starchy foods, legumes, and prepared vegetables. Combine them differently across the week.",
        "Follow food-safety practices: refrigerate perishable foods promptly, use clean containers, and reheat portions properly. Start with just two meals and adjust based on what genuinely helps."
      ]
    },
    tags: ["meal-prep", "nutrition", "planning"]
  },
  {
    id: 19,
    category: "habits",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    date: "2026-09-25",
    readTime: 5,
    title: {
      fr: "Faire le bilan de sa semaine en dix minutes",
      en: "Review Your Week in Ten Minutes",
    },
    excerpt: {
      fr: "Repère ce qui fonctionne et choisis une priorité réaliste.",
      en: "Notice what works and choose one realistic priority.",
    },
    content: {
      fr: [
        "Un bilan hebdomadaire n'est pas un examen. C'est un moyen de comprendre ce qui t'a aidé et ce qui mérite d'être ajusté.",
        "Note une chose dont tu es satisfait, une difficulté rencontrée et une priorité pour la semaine prochaine. Tu n'as pas besoin de tout analyser ni de remplir ton agenda.",
        "Transforme ta priorité en action précise : quoi faire, quand le faire et ce qu'il faut préparer. Relis tes notes la semaine suivante et ajuste ton plan si nécessaire."
      ],
      en: [
        "A weekly review is not an exam. It helps you understand what worked and what might need adjusting.",
        "Write down one thing you are pleased with, one difficulty, and one priority for next week. You do not need to analyze everything or fill your calendar.",
        "Turn your priority into a specific action: what to do, when to do it, and what to prepare. Review your notes next week and adjust your plan if needed."
      ]
    },
    tags: ["planning", "habits", "weekly-review"]
  }
];

ARTICLES.push(...EXTRA_ARTICLES);

const TEXT = {
  fr: {
    tagline: "De petites idées pour une vie plus équilibrée.",
    home: "Accueil",
    trends: "Tendances",
    tips: "Conseils",
    videos: "Vidéos",
    articles: "Articles",
    resources: "Ressources",
    about: "À propos",
    search: "Rechercher un article...",
    explore: "Explorer les articles",
    latest: "Dernières publications",
    featured: "À la une",
    read: "Lire l'article",
    minutes: "min de lecture",
    all: "Toutes les catégories",
    noResults: "Aucun article trouvé. Essaie un autre mot.",
    newsletter: "Une dose d'inspiration dans ta boîte mail",
    newsletterText: "Des idées utiles pour nourrir ton quotidien.",
    email: "Ton adresse e-mail",
    subscribe: "S'inscrire",
    footer: "Des idées pratiques pour avancer à son rythme.",
    back: "Retour aux articles",
    related: "À lire aussi",
    discover: "Découvrir",
    tipsTitle: "Des conseils faciles à mettre en pratique",
    videosTitle: "Apprendre en quelques minutes",
    resourcesTitle: "Des ressources pour mieux s'organiser",
    aboutTitle: "Bienvenue sur Trend Pulse",
    aboutText: "Trend Pulse partage des idées accessibles autour du bien-être, de l'alimentation, du mouvement et des habitudes quotidiennes.",
    contact: "Contact",
    allArticles: "Tous les articles",
    close: "Fermer",
    readMore: "En savoir plus",
    videoNote: "Sélectionne une vidéo pour découvrir des contenus utiles.",
    resourceNote: "Utilise ces pistes comme point de départ et adapte-les à tes besoins.",
    disclaimer: "Les articles sont informatifs et ne remplacent pas les conseils personnalisés d'un professionnel de santé.",
    success: "Merci ! Ton inscription est prête à être connectée à un service de newsletter.",
    noEmail: "Saisis une adresse e-mail valide.",
  },
  en: {
    tagline: "Small ideas for a more balanced life.",
    home: "Home",
    trends: "Trends",
    tips: "Tips",
    videos: "Videos",
    articles: "Articles",
    resources: "Resources",
    about: "About",
    search: "Search articles...",
    explore: "Explore articles",
    latest: "Latest stories",
    featured: "Featured",
    read: "Read article",
    minutes: "min read",
    all: "All categories",
    noResults: "No articles found. Try another keyword.",
    newsletter: "A little inspiration in your inbox",
    newsletterText: "Useful ideas to enrich your everyday life.",
    email: "Your email address",
    subscribe: "Subscribe",
    footer: "Practical ideas to help you move at your own pace.",
    back: "Back to articles",
    related: "You may also like",
    discover: "Discover",
    tipsTitle: "Simple tips you can put into practice",
    videosTitle: "Learn something in a few minutes",
    resourcesTitle: "Resources to help you get organized",
    aboutTitle: "Welcome to Trend Pulse",
    aboutText: "Trend Pulse shares accessible ideas about wellness, nutrition, movement, and everyday habits.",
    contact: "Contact",
    allArticles: "All articles",
    close: "Close",
    readMore: "Learn more",
    videoNote: "Choose a video to explore useful content.",
    resourceNote: "Use these ideas as a starting point and adapt them to your needs.",
    disclaimer: "Articles are for information only and do not replace personalized advice from a health professional.",
    success: "Thank you! Your signup is ready to be connected to a newsletter service.",
    noEmail: "Enter a valid email address.",
  },
};

const NAV_ITEMS: { id: Page; key: keyof typeof TEXT.fr }[] = [
  { id: "home", key: "home" },
  { id: "trends", key: "trends" },
  { id: "tips", key: "tips" },
  { id: "videos", key: "videos" },
  { id: "articles", key: "articles" },
  { id: "resources", key: "resources" },
  { id: "about", key: "about" },
];

const VIDEO_CARDS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85",
    fr: "Étirements doux pour commencer la journée",
    en: "Gentle stretches to start your day",
    category: "fitness",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    fr: "Des repas colorés et faciles à préparer",
    en: "Colorful meals that are easy to prepare",
    category: "nutrition",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    fr: "Une pause pour respirer et ralentir",
    en: "A mindful break to breathe and slow down",
    category: "mindfulness",
  },
];

const RESOURCES = [
  {
    icon: "🗓️",
    fr: "Planifier sa semaine",
    en: "Plan Your Week",
    descFr: "Choisis trois priorités réalistes et répartis-les sur la semaine.",
    descEn: "Choose three realistic priorities and spread them across the week.",
  },
  {
    icon: "🥗",
    fr: "Préparer ses repas",
    en: "Plan Your Meals",
    descFr: "Note les repas que tu souhaites préparer et les ingrédients nécessaires.",
    descEn: "Write down the meals you want to prepare and the ingredients you need.",
  },
  {
    icon: "🌙",
    fr: "Créer une routine du soir",
    en: "Build an Evening Routine",
    descFr: "Prévois une activité calme et une heure de coucher régulière.",
    descEn: "Plan a calming activity and a consistent bedtime.",
  },
  {
    icon: "🚶",
    fr: "Ajouter du mouvement",
    en: "Add More Movement",
    descFr: "Repère des occasions simples de marcher ou de bouger chaque jour.",
    descEn: "Find simple opportunities to walk or move each day.",
  },
];

export default function App() {
  const [language, setLanguage] = useState<Language>("fr");
  const [page, setPage] = useState<Page>("home");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const t = TEXT[language];

  const changePage = (nextPage: Page) => {
    setPage(nextPage);
    setSelectedArticle(null);
    setMobileMenu(false);
    setSearch("");
    setCategory("all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categoryName = (id: string) => {
    const item = CATEGORIES.find((entry) => entry.id === id);
    return item ? item[language] : id;
  };
  
  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();

    return ARTICLES.filter((article) => {
      const matchesCategory =
        category === "all" || article.category === category;

      const searchableText = [
        article.title[language],
        article.excerpt[language],
        ...article.tags,
        ...article.content[language],
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!term || searchableText.includes(term));
    });
  }, [search, category, language]);

  const featuredArticle =
    ARTICLES.find((article) => article.featured) ?? ARTICLES[0];

  const latestArticles = [...ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  const relatedArticles = selectedArticle
    ? ARTICLES.filter(
        (article) =>
          article.id !== selectedArticle.id &&
          article.category === selectedArticle.category,
      ).slice(0, 3)
    : [];

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNotice(t.noEmail);
      return;
    }

    setNotice(t.success);
    setEmail("");
  };
  
  const articleCard = (article: Article) => (
    <article className="tp-card" key={article.id}>
      <button
        className="tp-image-button"
        onClick={() => openArticle(article)}
        aria-label={article.title[language]}
      >
        <img
          className="tp-card-image"
          src={article.image}
          alt={article.title[language]}
          loading="lazy"
        />
        <span className="tp-image-badge">
          {categoryName(article.category)}
        </span>
      </button>

      <div className="tp-card-body">
        <div className="tp-meta">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} {t.minutes}</span>
        </div>

        <h3>{article.title[language]}</h3>
        <p>{article.excerpt[language]}</p>

        <button
          className="tp-text-link"
          onClick={() => openArticle(article)}
        >
          {t.read} <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );

  const sectionHeading = (eyebrow: string, title: string, description?: string) => (
    <div className="tp-section-heading">
      <span className="tp-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
  
  return (
    <div className={`tp-app ${darkMode ? "tp-dark" : ""}`}>
      <div className="tp-announcement">
        <span className="tp-pulse-dot" />
        {language === "fr"
          ? "De nouvelles idées pour prendre soin de soi"
          : "Fresh ideas to help you care for yourself"}
      </div>

      <header className="tp-header">
        <button className="tp-brand" onClick={() => changePage("home")}>
          <span className="tp-brand-mark">T</span>
          <span>
            <strong>Trend Pulse</strong>
            <small>{language === "fr" ? "Vivre mieux, simplement" : "Better living, simply"}</small>
          </span>
        </button>

        <button
          className="tp-menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? "✕" : "☰"}
        </button>

        <nav className={`tp-nav ${mobileMenu ? "tp-nav-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? "tp-nav-link active" : "tp-nav-link"}
              onClick={() => changePage(item.id)}
            >
              {t[item.key]}
            </button>
          ))}
        </nav>

        <div className="tp-header-actions">
          <button
            className="tp-icon-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className="tp-language-button"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
          >
            {language === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </header>
      
      <main>
        {!selectedArticle && page === "home" && (
          <>
            <section className="tp-hero">
              <div className="tp-hero-content">
                <span className="tp-eyebrow">
                  {language === "fr" ? "TON ESPACE D'INSPIRATION" : "YOUR SPACE FOR INSPIRATION"}
                </span>
                <h1>
                  {language === "fr"
                    ? <>Une vie plus équilibrée commence par <em>de petits gestes.</em></>
                    : <>A more balanced life starts with <em>small steps.</em></>}
                </h1>
                <p>{t.tagline} {language === "fr"
                  ? "Découvre des idées pratiques pour nourrir ton corps, ton esprit et tes habitudes."
                  : "Discover practical ideas for your body, mind, and everyday habits."}</p>

                <div className="tp-hero-actions">
                  <button className="tp-primary-button" onClick={() => changePage("articles")}>
                    {t.explore} <span>→</span>
                  </button>
                  <button className="tp-secondary-button" onClick={() => changePage("about")}>
                    {t.about} <span>↗</span>
                  </button>
                </div>

                <div className="tp-hero-note">
                  <span>✦</span>
                  {language === "fr" ? "Des idées accessibles, à ton rythme." : "Accessible ideas, at your own pace."}
                </div>
              </div>

              <div className="tp-hero-visual">
                <img
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=90"
                  alt={language === "fr" ? "Moment calme en pleine nature" : "A peaceful moment in nature"}
                />
                <div className="tp-floating-note tp-floating-top">
                  <span>🌿</span>
                  <div><strong>{language === "fr" ? "Prends une pause" : "Take a pause"}</strong><small>{language === "fr" ? "Respire. Recommence." : "Breathe. Begin again."}</small></div>
                </div>
                <div className="tp-floating-note tp-floating-bottom">
                  <span>✦</span>
                  <div><strong>{language === "fr" ? "Un jour à la fois" : "One day at a time"}</strong><small>Trend Pulse</small></div>
                </div>
              </div>
              <div className="tp-hero-orb" />
            </section>

            <section className="tp-section tp-featured-section">
              {sectionHeading(
                t.featured,
                language === "fr" ? "Une idée à découvrir aujourd'hui" : "An idea to discover today",
                language === "fr" ? "Prends quelques minutes pour trouver ton prochain petit changement." : "Take a few minutes to find your next small change.",
              )}
              <div className="tp-featured-card">
                <img src={featuredArticle.image} alt={featuredArticle.title[language]} loading="lazy" />
                <div className="tp-featured-copy">
                  <span className="tp-pill">{categoryName(featuredArticle.category)}</span>
                  <h3>{featuredArticle.title[language]}</h3>
                  <p>{featuredArticle.excerpt[language]}</p>
                  <button className="tp-primary-button" onClick={() => openArticle(featuredArticle)}>
                    {t.read} →
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
        
        {!selectedArticle && page === "home" && (
          <section className="tp-section">
            {sectionHeading(
              language === "fr" ? "Explore par thème" : "Explore by topic",
              language === "fr" ? "Qu'est-ce qui t'intéresse ?" : "What interests you?",
            )}

            <div className="tp-category-grid">
              {CATEGORIES.filter((item) => item.id !== "all").map((item, index) => (
                <button
                  className="tp-category-card"
                  key={item.id}
                  onClick={() => {
                    setCategory(item.id);
                    changePage("articles");
                    setCategory(item.id);
                  }}
                >
                  <span className="tp-category-icon">
                    {["🌿", "🥗", "🏃", "🌙", "🧘", "🏡", "✨", "🌞"][index]}
                  </span>
                  <strong>{item[language]}</strong>
                  <span className="tp-category-arrow">↗</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {!selectedArticle && page === "home" && (
          <section className="tp-section tp-soft-section">
            {sectionHeading(t.latest, language === "fr" ? "Les idées les plus récentes" : "Fresh ideas for you")}

            <div className="tp-article-grid">
              {latestArticles.slice(0, 3).map(articleCard)}
            </div>

            <div className="tp-centered">
              <button className="tp-secondary-button" onClick={() => changePage("articles")}>
                {t.allArticles} <span>→</span>
              </button>
            </div>
          </section>
        )}

        {!selectedArticle && page === "home" && (
          <section className="tp-quote-band">
            <span className="tp-quote-mark">“</span>
            <p>{language === "fr"
              ? "Tu n'as pas besoin de tout changer aujourd'hui. Commence par une petite chose."
              : "You do not need to change everything today. Start with one small thing."}</p>
            <span className="tp-quote-caption">— Trend Pulse</span>
          </section>
        )}
        
        {!selectedArticle && page === "articles" && (
          <section className="tp-page-section">
            {sectionHeading(
              t.articles,
              language === "fr" ? "Des idées pour ton quotidien" : "Ideas for everyday living",
              language === "fr" ? "Recherche un sujet ou choisis une catégorie." : "Search a topic or choose a category.",
            )}

            <div className="tp-search-panel">
              <label className="tp-search-box">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={t.search}
                  aria-label={t.search}
                />
                {search && (
                  <button onClick={() => setSearch("")} aria-label={t.close}>✕</button>
                )}
              </label>

              <label className="tp-filter-label">
                <span>{language === "fr" ? "Catégorie" : "Category"}</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  {CATEGORIES.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.id === "all" ? t.all : item[language]}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <p className="tp-results-count">
              {filteredArticles.length} {language === "fr" ? "article(s) trouvé(s)" : "article(s) found"}
            </p>

            {filteredArticles.length > 0 ? (
              <div className="tp-article-grid">
                {filteredArticles.map(articleCard)}
              </div>
            ) : (
              <div className="tp-empty-state">
                <span>🔎</span>
                <h3>{t.noResults}</h3>
                <button className="tp-secondary-button" onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}>
                  {language === "fr" ? "Effacer les filtres" : "Clear filters"}
                </button>
              </div>
            )}
          </section>
        )}
        
        {!selectedArticle && page === "trends" && (
          <section className="tp-page-section">
            {sectionHeading(
              t.trends,
              language === "fr" ? "Les thèmes à explorer" : "Topics worth exploring",
              language === "fr" ? "Des pistes pour découvrir de nouvelles idées et habitudes." : "Ideas for discovering new perspectives and habits.",
            )}

            <div className="tp-trend-layout">
              <button className="tp-trend-feature" onClick={() => openArticle(ARTICLES[0])}>
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85" alt="Moment de bien-être" loading="lazy" />
                <div className="tp-trend-overlay">
                  <span className="tp-pill">{language === "fr" ? "À découvrir" : "Explore"}</span>
                  <h3>{language === "fr" ? "Le bien-être au quotidien" : "Everyday wellness"}</h3>
                  <span>{t.read} ↗</span>
                </div>
              </button>

              <div className="tp-trend-list">
                {[
                  { icon: "🥬", titleFr: "Une alimentation variée", titleEn: "A varied diet", category: "nutrition" },
                  { icon: "🌙", titleFr: "Des soirées plus calmes", titleEn: "Calmer evenings", category: "sleep" },
                  { icon: "🚶", titleFr: "Bouger à son rythme", titleEn: "Move at your own pace", category: "fitness" },
                  { icon: "📓", titleFr: "De meilleures habitudes", titleEn: "Better habits", category: "habits" },
                ].map((item) => (
                  <button
                    className="tp-trend-row"
                    key={item.category}
                    onClick={() => {
                      setCategory(item.category);
                      changePage("articles");
                      setCategory(item.category);
                    }}
                  >
                    <span className="tp-trend-row-icon">{item.icon}</span>
                    <strong>{language === "fr" ? item.titleFr : item.titleEn}</strong>
                    <span>↗</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="tp-article-grid tp-trend-articles">
              {ARTICLES.slice(1, 4).map(articleCard)}
            </div>
          </section>
        )}
        
        {!selectedArticle && page === "tips" && (
          <section className="tp-page-section">
            {sectionHeading(
              t.tips,
              t.tipsTitle,
              language === "fr" ? "De petites actions, des progrès à ton rythme." : "Small actions, progress at your own pace.",
            )}

            <div className="tp-tips-grid">
              {[
                {
                  icon: "🌅",
                  fr: "Commence doucement",
                  en: "Start gently",
                  frText: "Choisis une petite action le matin plutôt que de vouloir tout accomplir immédiatement.",
                  enText: "Choose one small morning action instead of trying to do everything at once.",
                },
                {
                  icon: "💧",
                  fr: "Fais des pauses",
                  en: "Take breaks",
                  frText: "Éloigne-toi quelques instants de ton écran et pense à boire régulièrement.",
                  enText: "Step away from your screen briefly and remember to drink regularly.",
                },
                {
                  icon: "🥗",
                  fr: "Varie tes repas",
                  en: "Vary your meals",
                  frText: "Découvre différents aliments et privilégie la variété selon tes possibilités.",
                  enText: "Explore different foods and aim for variety within your means.",
                },
                {
                  icon: "🚶",
                  fr: "Bouge un peu",
                  en: "Move a little",
                  frText: "Une marche courte ou quelques mouvements peuvent être un bon début.",
                  enText: "A short walk or a few movements can be a good start.",
                },
                {
                  icon: "📵",
                  fr: "Accorde-toi une pause numérique",
                  en: "Take a digital break",
                  frText: "Choisis un moment pour poser ton téléphone et faire autre chose.",
                  enText: "Choose a moment to put your phone down and do something else.",
                },
                {
                  icon: "🌙",
                  fr: "Prépare ta soirée",
                  en: "Prepare your evening",
                  frText: "Organise une petite tâche à l'avance pour terminer la journée plus sereinement.",
                  enText: "Prepare one small task in advance to end the day more calmly.",
                },
              ].map((tip, index) => (
                <article className="tp-tip-card" key={tip.fr}>
                  <span className="tp-tip-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="tp-tip-icon">{tip.icon}</span>
                  <h3>{language === "fr" ? tip.fr : tip.en}</h3>
                  <p>{language === "fr" ? tip.frText : tip.enText}</p>
                </article>
              ))}
            </div>

            <div className="tp-tip-banner">
              <div>
                <span className="tp-eyebrow">{language === "fr" ? "À TON RYTHME" : "AT YOUR OWN PACE"}</span>
                <h3>{language === "fr" ? "Le progrès n'a pas besoin d'être parfait." : "Progress does not have to be perfect."}</h3>
                <p>{language === "fr" ? "Choisis un conseil et essaie-le aujourd'hui." : "Choose one tip and try it today."}</p>
              </div>
              <span className="tp-tip-banner-icon">🌱</span>
            </div>
          </section>
        )}
        
        {!selectedArticle && page === "videos" && (
          <section className="tp-page-section">
            {sectionHeading(
              t.videos,
              t.videosTitle,
              language === "fr" ? "Des idées visuelles pour apprendre et passer à l'action." : "Visual ideas to learn and take action.",
            )}

            <div className="tp-video-grid">
              {VIDEO_CARDS.map((video) => (
                <article className="tp-video-card" key={video.id}>
                  <div className="tp-video-image">
                    <img src={video.image} alt={video[language === "fr" ? "fr" : "en"]} loading="lazy" />
                    <span className="tp-play-icon">▶</span>
                  </div>
                  <div className="tp-video-copy">
                    <span className="tp-eyebrow">{categoryName(video.category)}</span>
                    <h3>{language === "fr" ? video.fr : video.en}</h3>
                    <p>{language === "fr"
                      ? "Explore ce thème avec une vidéo adaptée à tes intérêts."
                      : "Explore this topic with a video that matches your interests."}</p>
                    <button
                      className="tp-text-link"
                      onClick={() => {
                        setCategory(video.category);
                        changePage("articles");
                        setCategory(video.category);
                      }}
                    >
                      {t.discover} <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="tp-info-note">
              <span>💡</span>
              <p>{t.videoNote} {language === "fr"
                ? "Ces cartes sont des suggestions thématiques : ajoute les liens de tes propres vidéos pour les rendre cliquables."
                : "These cards are topic suggestions: add your own video links to make them playable."}</p>
            </div>
          </section>
        )}
        
        {!selectedArticle && page === "resources" && (
          <section className="tp-page-section">
            {sectionHeading(t.resources, t.resourcesTitle, t.resourceNote)}

            <div className="tp-resources-grid">
              {RESOURCES.map((resource) => (
                <article className="tp-resource-card" key={resource.fr}>
                  <span className="tp-resource-icon">{resource.icon}</span>
                  <h3>{language === "fr" ? resource.fr : resource.en}</h3>
                  <p>{language === "fr" ? resource.descFr : resource.descEn}</p>
                  <button
                    className="tp-text-link"
                    onClick={() => setNotice(language === "fr"
                      ? `Astuce : ${resource.descFr}`
                      : `Tip: ${resource.descEn}`)}
                  >
                    {t.readMore} →
                  </button>
                </article>
              ))}
            </div>

            {notice && (
              <div className="tp-info-note">
                <span>✦</span><p>{notice}</p>
                <button onClick={() => setNotice("")} aria-label={t.close}>✕</button>
              </div>
            )}
          </section>
        )}

        {!selectedArticle && page === "about" && (
          <section className="tp-page-section tp-about-section">
            <div className="tp-about-image">
              <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"
                alt={language === "fr" ? "Paysage paisible" : "Peaceful landscape"}
                loading="lazy"
              />
            </div>
            <div className="tp-about-copy">
              <span className="tp-eyebrow">{SITE_NAME}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
              <p>{language === "fr"
                ? "Notre objectif est de rendre les idées utiles plus faciles à découvrir, à comprendre et à appliquer au quotidien."
                : "Our goal is to make useful ideas easier to discover, understand, and apply in everyday life."}</p>
              <div className="tp-about-values">
                <span>🌿 {language === "fr" ? "Simplicité" : "Simplicity"}</span>
                <span>✨ {language === "fr" ? "Curiosité" : "Curiosity"}</span>
                <span>🌍 {language === "fr" ? "Accessibilité" : "Accessibility"}</span>
              </div>
            </div>
          </section>
        )}
        
        {selectedArticle && (
          <section className="tp-article-detail">
            <button className="tp-back-button" onClick={() => setSelectedArticle(null)}>
              ← {t.back}
            </button>

            <div className="tp-detail-heading">
              <span className="tp-pill">{categoryName(selectedArticle.category)}</span>
              <h1>{selectedArticle.title[language]}</h1>
              <p>{selectedArticle.excerpt[language]}</p>
              <div className="tp-meta">
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime} {t.minutes}</span>
              </div>
            </div>

            <img
              className="tp-detail-image"
              src={selectedArticle.image}
              alt={selectedArticle.title[language]}
            />

            <div className="tp-article-content">
              {selectedArticle.content[language].map((paragraph, index) => (
                <p key={`${selectedArticle.id}-${index}`}>{paragraph}</p>
              ))}             
              
              <div className="tp-ad-banner">
                <div id="container-c05378bff39c37075502e6d18a07b62a"></div>
              </div>
              <div className="tp-ad-banner tp-ad-banner-a">
  <div id="tp-adsterra-banner-a"></div>
</div>
              
<div className="tp-smartlink">
  <a
    href="https://www.profitableratecpmnetwork.com/tm1qnet015?key=398d120354b2f667241e758d9680427b"
    target="_blank"
    rel="nofollow sponsored noopener noreferrer"
  >
    {language === "fr" ? "Découvrir davantage" : "Discover more"}
  </a>
</div>
              

              <div className="tp-tags">
                {selectedArticle.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearch(tag);
                      setCategory("all");
                      setSelectedArticle(null);
                      setPage("articles");
                    }}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              <div className="tp-disclaimer">
                <span>ⓘ</span>
                <p>{t.disclaimer}</p>
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div className="tp-related-section">
                {sectionHeading(t.related, language === "fr" ? "Continue ta découverte" : "Keep exploring")}
                <div className="tp-article-grid">
                  {relatedArticles.map(articleCard)}
                </div>
              </div>
            )}
          </section>
        )}
        
        {!selectedArticle && (
          <section className="tp-newsletter">
            <div className="tp-newsletter-icon">✉</div>
            <span className="tp-eyebrow">{language === "fr" ? "RESTONS EN CONTACT" : "LET'S STAY IN TOUCH"}</span>
            <h2>{t.newsletter}</h2>
            <p>{t.newsletterText}</p>

            <form className="tp-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t.email}
                aria-label={t.email}
                required
              />
              <button className="tp-primary-button" type="submit">{t.subscribe} →</button>
            </form>
            {notice && <p className="tp-form-notice">{notice}</p>}
          </section>
        )}
      </main>

      <footer className="tp-footer">
        <div className="tp-footer-main">
          <button className="tp-brand tp-footer-brand" onClick={() => changePage("home")}>
            <span className="tp-brand-mark">T</span>
            <span><strong>Trend Pulse</strong><small>{t.tagline}</small></span>
          </button>
          <p>{t.footer}</p>
          <div className="tp-footer-links">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => changePage(item.id)}>
                {t[item.key]}
              </button>
            ))}
          </div>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap", margin: "20px 0" }}>
            <a href="https://www.facebook.com/share/14snJ1uWFZM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" style={{ color: "#1877F2", display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/></svg>
            </a>
            <a href="https://www.instagram.com/trendpulses2.0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" style={{ color: "#D94687", display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.tiktok.com/@trendpulses2.0" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" style={{ color: "var(--ink)", display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 7.1a6.3 6.3 0 0 1-4.1-1.5v8.1a5.7 5.7 0 1 1-5-5.6v3.1a2.7 2.7 0 1 0 2 2.6V2.5h3a6.2 6.2 0 0 0 4.1 4.6z"/></svg>
            </a>
            <a href="https://wa.me/22893328956" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" style={{ color: "#25D366", display: "flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.3 22l5.6-1.5A9.7 9.7 0 1 0 12 2zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3A8 8 0 1 1 12 19.7zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z"/></svg>
            </a>
          </div>
          
        </div>
        <div className="tp-footer-bottom">
          <span>© {new Date().getFullYear()} Trend Pulse</span>
          <span>{language === "fr" ? "Créé pour apprendre et progresser." : "Made for learning and growth."}</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            ↑ {language === "fr" ? "Haut de page" : "Back to top"}
          </button>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');
        :root{font-family:'DM Sans',sans-serif;color:#21332b;background:#fbfaf6;font-synthesis:none;text-rendering:optimizeLegibility}
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0}
        button,input,select{font:inherit}
        button{cursor:pointer}
        .tp-app{--bg:#fbfaf6;--surface:#fff;--ink:#21332b;--muted:#718077;--line:#e8e9df;--green:#2f654a;--mint:#e8f0e7;--accent:#d6e5c7;min-height:100vh;background:var(--bg);color:var(--ink);transition:background .3s,color .3s;overflow:hidden}
        .tp-dark{--bg:#15221b;--surface:#1e3026;--ink:#edf4ec;--muted:#b4c3b8;--line:#35483b;--green:#b7d9b6;--mint:#293f31;--accent:#334a38}
        .tp-announcement{display:flex;justify-content:center;align-items:center;gap:9px;padding:9px 16px;background:#234b38;color:#f5f7ed;font-size:11px;letter-spacing:.07em;text-align:center}
        .tp-pulse-dot{width:7px;height:7px;background:#b9db9c;border-radius:50%;box-shadow:0 0 0 4px #ffffff15;animation:tpPulse 2s infinite}
        .tp-header{max-width:1240px;margin:auto;padding:20px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px}
        .tp-brand{display:flex;align-items:center;gap:11px;text-align:left;background:none;border:0;color:var(--ink);padding:0;flex-shrink:0}
        .tp-brand-mark{display:grid;place-items:center;width:43px;height:43px;border-radius:15px;background:#2f654a;color:white;font-family:'Playfair Display',serif;font-size:27px}
        .tp-brand strong,.tp-brand small{display:block}
        .tp-brand strong{font-family:'Playfair Display',serif;font-size:21px;letter-spacing:-.5px}
        .tp-brand small{font-size:10px;color:var(--muted);margin-top:3px}
        .tp-nav{display:flex;align-items:center;justify-content:center;gap:5px;flex-wrap:wrap}
        .tp-nav-link{border:0;background:transparent;color:var(--muted);padding:9px 10px;border-radius:9px;font-size:12px;transition:all .2s}
        .tp-nav-link:hover,.tp-nav-link.active{background:var(--mint);color:var(--green)}
        .tp-header-actions{display:flex;align-items:center;gap:7px}
        .tp-icon-button,.tp-language-button{border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:11px;min-width:38px;height:38px}
        .tp-language-button{font-size:11px;font-weight:700}
        .tp-menu-toggle{display:none}
        .tp-hero{max-width:1240px;margin:18px auto 35px;padding:48px 28px 55px;display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;position:relative}
        .tp-hero-content{position:relative;z-index:1;animation:tpRise .7s both}
        .tp-eyebrow{display:block;color:#65906d;font-size:10px;letter-spacing:.17em;font-weight:700;text-transform:uppercase;margin-bottom:15px}
        .tp-hero h1,.tp-detail-heading h1{font-family:'Playfair Display',serif;font-weight:500;letter-spacing:-1.9px;font-size:clamp(38px,5vw,65px);line-height:1.1;margin:0 0 22px}
        .tp-hero h1 em{font-weight:500;color:#68916a}
        .tp-hero-content>p{font-size:15px;color:var(--muted);line-height:1.9;max-width:490px}
        .tp-hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:27px}
        .tp-primary-button,.tp-secondary-button{display:inline-flex;justify-content:center;align-items:center;gap:12px;border-radius:10px;padding:13px 18px;font-size:12px;font-weight:700;transition:transform .2s,box-shadow .2s}
        .tp-primary-button{border:1px solid #2f654a;background:#2f654a;color:white}
        .tp-secondary-button{border:1px solid var(--line);background:var(--surface);color:var(--ink)}
        .tp-primary-button:hover,.tp-secondary-button:hover{transform:translateY(-2px);box-shadow:0 8px 22px #21332b12}
        .tp-hero-note{margin-top:28px;color:var(--muted);font-size:11px;display:flex;align-items:center;gap:9px}
        .tp-hero-note span{color:#719a69;font-size:18px}
        .tp-hero-visual{position:relative;padding:0 15px 18px;animation:tpRise .8s .12s both}
        .tp-hero-visual>img{width:100%;height:460px;object-fit:cover;border-radius:48% 48% 22px 22px;display:block}
        .tp-floating-note{position:absolute;display:flex;align-items:center;gap:10px;background:var(--surface);padding:12px 15px;border-radius:14px;box-shadow:0 12px 35px #1e34241b;animation:tpFloat 5s ease-in-out infinite}
        .tp-floating-note>span{font-size:22px}
        .tp-floating-note strong,.tp-floating-note small{display:block}
        .tp-floating-note strong{font-size:11px}
        .tp-floating-note small{font-size:9px;color:var(--muted);margin-top:4px}
        .tp-floating-top{top:55px;left:-30px}
        .tp-floating-bottom{bottom:45px;right:-8px;animation-delay:1s}
        .tp-hero-orb{position:absolute;width:120px;height:120px;border-radius:50%;background:#dbe8c9;opacity:.55;top:4px;right:0;z-index:0;filter:blur(2px)}
        .tp-section,.tp-page-section,.tp-article-detail{max-width:1180px;margin:0 auto;padding:60px 28px}
        .tp-section-heading{margin-bottom:28px}
        .tp-section-heading h2,.tp-newsletter h2,.tp-about-copy h2{font-family:'Playfair Display',serif;font-size:clamp(28px,3.4vw,41px);font-weight:500;letter-spacing:-.8px;margin:0 0 10px;line-height:1.2}
        .tp-section-heading>p{color:var(--muted);font-size:13px;line-height:1.8;max-width:620px}
        .tp-featured-card{display:grid;grid-template-columns:1fr 1fr;background:var(--surface);border:1px solid var(--line);border-radius:22px;overflow:hidden}
        .tp-featured-card>img{width:100%;height:340px;object-fit:cover}
        .tp-featured-copy{padding:35px;align-self:center}
        .tp-featured-copy h3{font:500 30px/1.25 'Playfair Display',serif;margin:16px 0}
        .tp-featured-copy p{color:var(--muted);font-size:13px;line-height:1.8;margin-bottom:22px}
        .tp-pill,.tp-image-badge{display:inline-flex;background:var(--mint);color:var(--green);padding:7px 10px;border-radius:30px;font-size:10px;font-weight:700}
        .tp-category-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .tp-category-card{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:13px;padding:20px;background:var(--surface);border:1px solid var(--line);border-radius:16px;text-align:left;color:var(--ink);transition:transform .25s,border-color .25s}
        .tp-category-card:hover{transform:translateY(-5px);border-color:#91b49a}
        .tp-category-icon{display:grid;place-items:center;width:45px;height:45px;border-radius:14px;background:var(--mint);font-size:22px}
        .tp-category-card strong{font-size:12px}
        .tp-category-arrow{position:absolute;right:15px;bottom:18px;color:var(--muted)}
        .tp-soft-section{max-width:none;background:var(--mint);padding-left:max(28px,calc((100vw - 1124px)/2));padding-right:max(28px,calc((100vw - 1124px)/2))}
        .tp-article-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .tp-card{background:var(--surface);border:1px solid var(--line);border-radius:17px;overflow:hidden;transition:transform .25s,box-shadow .25s;min-width:0;animation:tpRise .45s both}
        .tp-card:hover{transform:translateY(-5px);box-shadow:0 14px 34px #152b1b12}
        .tp-card{will-change:transform;animation:tpCardEnter .6s both}
        .tp-article-grid .tp-card:nth-child(3n+1){animation-delay:.04s}
        .tp-article-grid .tp-card:nth-child(3n+2){animation-delay:.12s}
        .tp-article-grid .tp-card:nth-child(3n){animation-delay:.20s}
        .tp-card-image{filter:saturate(.94);transition:transform .65s cubic-bezier(.2,.7,.2,1),filter .45s}
        .tp-card:hover .tp-card-image{filter:saturate(1.12)}
        .tp-image-badge{transition:transform .25s,background .25s}
        .tp-card:hover .tp-image-badge{transform:translateY(-3px);background:#ffffff}
        .tp-section-heading h2{animation:tpRise .65s both}
        @keyframes tpCardEnter{
          from{opacity:0;transform:translateY(22px) scale(.99)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        .tp-image-button{width:100%;padding:0;border:0;background:none;position:relative;display:block;text-align:left}
        .tp-card-image{width:100%;height:215px;object-fit:cover;display:block;transition:transform .5s}
        .tp-card:hover .tp-card-image{transform:scale(1.035)}
        .tp-image-badge{position:absolute;bottom:12px;left:12px;background:#fffefaeb}
        .tp-card-body{padding:20px}
        .tp-meta{display:flex;gap:7px;align-items:center;color:var(--muted);font-size:10px}
        .tp-card h3{font:500 21px/1.35 'Playfair Display',serif;margin:13px 0 9px}
        .tp-card-body>p{font-size:12px;line-height:1.8;color:var(--muted);min-height:44px}
        .tp-text-link{display:inline-flex;align-items:center;gap:10px;margin-top:8px;padding:4px 0;border:0;background:none;color:var(--green);font-size:11px;font-weight:700}
        .tp-centered{text-align:center;margin-top:30px}
        .tp-quote-band{background:#244a37;color:#f5f7ef;text-align:center;padding:60px 25px}
        .tp-quote-mark{font:70px 'Playfair Display',serif;color:#b8d4a5;line-height:1}
        .tp-quote-band p{font:italic 25px/1.5 'Playfair Display',serif;max-width:680px;margin:10px auto 18px}
        .tp-quote-caption{font-size:10px;color:#c5d4c5}
        .tp-page-section{min-height:55vh;padding-top:55px;padding-bottom:75px}
        .tp-search-panel{display:flex;gap:14px;align-items:end;margin:25px 0}
        .tp-search-box{display:flex;align-items:center;gap:10px;flex:1;min-width:0;padding:0 15px;border:1px solid var(--line);border-radius:12px;background:var(--surface);color:var(--muted)}
        .tp-search-box>span{font-size:24px}
        .tp-search-box input{width:100%;height:48px;border:0;outline:0;background:transparent;color:var(--ink);font-size:12px}
        .tp-search-box button{border:0;background:none;color:var(--muted)}
        .tp-filter-label{display:flex;flex-direction:column;gap:7px;font-size:10px;color:var(--muted)}
        .tp-filter-label select{min-width:180px;height:48px;padding:0 12px;border:1px solid var(--line);border-radius:12px;background:var(--surface);color:var(--ink)}
        .tp-results-count{font-size:11px;color:var(--muted);margin:20px 0}
        .tp-empty-state{text-align:center;padding:55px 20px;border:1px dashed var(--line);border-radius:18px}
        .tp-empty-state>span{font-size:34px}
        .tp-empty-state h3{font:500 22px 'Playfair Display',serif}
        .tp-trend-layout{display:grid;grid-template-columns:1.1fr .9fr;gap:22px}
        .tp-trend-feature{position:relative;min-height:380px;border:0;border-radius:20px;overflow:hidden;padding:0;text-align:left;background:#223b2c;color:white}
        .tp-trend-feature img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover;transition:transform .5s}
        .tp-trend-feature:hover img{transform:scale(1.04)}
        .tp-trend-overlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;padding:28px;background:linear-gradient(transparent,#142a20d9)}
        .tp-trend-overlay h3{font:500 32px 'Playfair Display',serif;margin:12px 0}
        .tp-trend-overlay>span:last-child{font-size:11px}
        .tp-trend-list{display:flex;flex-direction:column;justify-content:center;gap:12px}
        .tp-trend-row{display:flex;align-items:center;gap:14px;padding:17px;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);text-align:left}
        .tp-trend-row strong{flex:1;font-size:12px}
        .tp-trend-row>span:last-child{color:var(--muted)}
        .tp-trend-row-icon{display:grid;place-items:center;width:43px;height:43px;border-radius:12px;background:var(--mint);font-size:21px}
        .tp-trend-articles{margin-top:40px}
        .tp-tips-grid,.tp-resources-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
        .tp-tip-card,.tp-resource-card{position:relative;padding:24px;background:var(--surface);border:1px solid var(--line);border-radius:17px}
        .tp-tip-number{position:absolute;right:18px;top:17px;font-size:11px;color:var(--muted)}
        .tp-tip-icon,.tp-resource-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:15px;background:var(--mint);font-size:23px;margin-bottom:19px}
        .tp-tip-card h3,.tp-resource-card h3{font:500 21px 'Playfair Display',serif;margin:0 0 10px}
        .tp-tip-card p,.tp-resource-card p{font-size:12px;line-height:1.85;color:var(--muted)}
        .tp-tip-banner{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:28px;padding:30px;background:var(--mint);border-radius:18px}
        .tp-tip-banner h3{font:500 26px 'Playfair Display',serif;margin:0 0 8px}
        .tp-tip-banner p{font-size:12px;color:var(--muted)}
        .tp-tip-banner-icon{font-size:55px}
        .tp-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .tp-video-card{background:var(--surface);border:1px solid var(--line);border-radius:17px;overflow:hidden}
        .tp-video-image{position:relative;height:220px;overflow:hidden}
        .tp-video-image img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
        .tp-video-card:hover img{transform:scale(1.05)}
        .tp-play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:#fff;color:#2f654a;box-shadow:0 5px 20px #0002}
        .tp-video-copy{padding:20px}
        .tp-video-copy h3{font:500 21px/1.35 'Playfair Display',serif;margin:8px 0}
        .tp-video-copy p{font-size:12px;line-height:1.8;color:var(--muted)}
        .tp-info-note{display:flex;align-items:flex-start;gap:12px;padding:16px;margin-top:25px;background:var(--mint);border-radius:12px;color:var(--muted);font-size:12px;line-height:1.7}
        .tp-info-note p{margin:0;flex:1}
        .tp-info-note button{border:0;background:none;color:var(--muted)}
        .tp-resource-card{padding:27px}
        .tp-about-section{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:55px}
        .tp-about-image img{width:100%;height:460px;object-fit:cover;border-radius:45% 45% 18px 18px}
        .tp-about-copy>p{font-size:13px;line-height:2;color:var(--muted)}
        .tp-about-values{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}
        .tp-about-values span{background:var(--mint);padding:10px 12px;border-radius:10px;font-size:11px}
        .tp-article-detail{max-width:900px;padding-top:35px}
        .tp-back-button{border:0;background:none;color:var(--green);font-size:12px;font-weight:700;padding:10px 0}
        .tp-detail-heading{max-width:750px;margin:30px auto;text-align:center}
        .tp-detail-heading h1{font-size:clamp(34px,5vw,54px);margin:20px 0}
        .tp-detail-heading>p{font-size:14px;line-height:1.8;color:var(--muted)}
        .tp-detail-heading .tp-meta{justify-content:center;margin-top:18px}
        .tp-detail-image{width:100%;max-height:490px;object-fit:cover;border-radius:20px}
        .tp-article-content{max-width:690px;margin:35px auto 60px}
        .tp-article-content>p{font-size:15px;line-height:2.05;color:var(--ink);margin:0 0 22px}
        .tp-tags{display:flex;gap:9px;flex-wrap:wrap;margin:30px 0}
        .tp-tags button{border:1px solid var(--line);border-radius:30px;background:var(--surface);color:var(--green);padding:8px 12px;font-size:10px}
        .tp-smartlink{margin:28px 0;text-align:center}
        .tp-smartlink a{display:inline-block;padding:12px 22px;border-radius:30px;background:var(--green);color:#fff;text-decoration:none;font-size:13px;font-weight:700;transition:opacity .2s}
        .tp-smartlink a:hover{opacity:.85}
        .tp-disclaimer{display:flex;gap:10px;padding:16px;background:var(--mint);border-radius:12px;color:var(--muted);font-size:11px;line-height:1.8}
        .tp-disclaimer p{margin:0}
        .tp-related-section{margin-top:45px}
        .tp-newsletter{padding:65px 24px;text-align:center;background:var(--mint)}
        .tp-newsletter-icon{display:grid;place-items:center;width:48px;height:48px;margin:0 auto 20px;background:var(--surface);border-radius:15px;font-size:21px}
        .tp-newsletter h2{max-width:560px;margin:0 auto 12px}
        .tp-newsletter>p{font-size:12px;color:var(--muted)}
        .tp-newsletter-form{display:flex;gap:9px;max-width:490px;margin:25px auto 0}
        .tp-newsletter-form input{flex:1;min-width:0;height:47px;padding:0 14px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--ink);outline-color:#86a98a;font-size:12px}
        .tp-form-notice{max-width:550px;margin:15px auto 0;font-size:12px;color:var(--green)}
        .tp-footer{max-width:1240px;margin:auto;padding:35px 28px 20px}
        .tp-footer-main{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-bottom:28px}
        .tp-footer-main>p{font-size:11px;color:var(--muted)}
        .tp-footer-links{display:flex;gap:13px;flex-wrap:wrap}
        .tp-footer-links button,.tp-footer-bottom button{border:0;background:none;color:var(--muted);font-size:10px}
        .tp-footer-bottom{border-top:1px solid var(--line);padding-top:20px;display:flex;justify-content:space-between;align-items:center;gap:15px;flex-wrap:wrap;color:var(--muted);font-size:10px}
        @keyframes tpRise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes tpFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes tpPulse{0%,100%{box-shadow:0 0 0 4px #ffffff15}50%{box-shadow:0 0 0 7px #ffffff08}}
        @media(min-width:1400px){.tp-hero{padding-top:65px;padding-bottom:75px}}
        @media(max-width:1050px){.tp-header{flex-wrap:wrap}.tp-nav{order:3;width:100%}.tp-hero{gap:25px}.tp-hero-visual>img{height:390px}.tp-category-grid{grid-template-columns:repeat(4,1fr)}.tp-card-image{height:185px}}
        @media(max-width:760px){.tp-header{padding:16px 18px;flex-wrap:nowrap}.tp-brand strong{font-size:19px}.tp-brand small{font-size:9px}.tp-menu-toggle{display:block;margin-left:auto;border:1px solid var(--line);background:var(--surface);color:var(--ink);width:39px;height:39px;border-radius:10px;font-size:18px}.tp-header-actions{gap:5px}.tp-nav{display:none;position:absolute;z-index:10;top:115px;left:12px;right:12px;width:auto;order:initial;padding:12px;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:0 12px 30px #0001;flex-direction:column;align-items:stretch}.tp-nav.tp-nav-open{display:flex}.tp-nav-link{text-align:left;padding:12px}.tp-hero{grid-template-columns:1fr;padding:30px 20px 45px;gap:28px;margin-top:0}.tp-hero h1{font-size:43px}.tp-hero-content>p{font-size:13px}.tp-hero-visual{padding:0 8px 10px}.tp-hero-visual>img{height:330px;border-radius:38% 38% 20px 20px}.tp-floating-top{left:-3px;top:35px}.tp-floating-bottom{right:-3px;bottom:28px}.tp-section,.tp-page-section,.tp-article-detail{padding:42px 18px}.tp-featured-card{grid-template-columns:1fr}.tp-featured-card>img{height:240px}.tp-featured-copy{padding:24px}.tp-category-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.tp-category-card{padding:15px}.tp-article-grid,.tp-video-grid,.tp-tips-grid,.tp-resources-grid{grid-template-columns:1fr}.tp-card-image{height:235px}.tp-soft-section{padding-left:18px;padding-right:18px}.tp-quote-band{padding:45px 22px}.tp-quote-band p{font-size:22px}.tp-search-panel{flex-direction:column;align-items:stretch}.tp-filter-label select{width:100%}.tp-trend-layout{grid-template-columns:1fr}.tp-trend-feature{min-height:300px}.tp-trend-row{padding:13px}.tp-tip-banner{padding:22px}.tp-tip-banner h3{font-size:22px}.tp-about-section{grid-template-columns:1fr;gap:28px}.tp-about-image img{height:300px}.tp-newsletter{padding:48px 18px}.tp-newsletter-form{flex-direction:column}.tp-newsletter-form .tp-primary-button{min-height:45px}.tp-footer{padding:28px 18px 18px}.tp-footer-main{align-items:flex-start;flex-direction:column}.tp-footer-links{gap:10px}.tp-footer-bottom{align-items:flex-start;flex-direction:column}.tp-detail-heading h1{letter-spacing:-1px}.tp-article-content>p{font-size:14px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}      `}</style>
    </div>
  );
}

export const TREND_PULSE_VERSION = "1.0.0";
