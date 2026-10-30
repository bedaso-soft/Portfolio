export const om = {
  nav: {
    home: "Fuula Dura",
    about: "Waa'ee Koo",
    projects: "Pirojektiiwwan",
    skills: "Dandeettiiwwan",
    contact: "Na Qunnamaa",
    resume: "Seenaa Hojii (CV)",
  },
  hero: {
    badge: "IJAARAA SOOFTIWEERII FULL-STACK / JAALLATAA AI",
    headlinePart1: "Rakkoolee qabatamaa kan furan",
    headlineHighlight1: "muuxannoo dijiitaalaa",
    headlinePart2: "ogummaan",
    headlineHighlight2: "nan saxaxa, nan ijaaras.",
    subheadline:
      "Ani Badaasoo Darsuu jedhama; Injineraa Sooftiweerii ta'uu koon, ijaarsa weebsaayitii ammayyaa (full-stack), Paayitanii fi beekumsa namtolchee (AI) irratti xiyyeeffadhee nan hojjedha. Ogummaa saxaxaa fi qulqullina injinariingii walitti fiduun bu'aawwan teeknolojii hiika qaban nan uuma.",
    ctaPrimary: "PIROJEKTIIWWAN KOO ILAALAA",
    ctaSecondary: "NA QUNNAMAA",
    scrollPrompt: "GAD HARKISAA ILAALAA",
    statusBadge: "Hojiiwwan Injinariingii Sooftiweeriif Qophii Dha",
    location: "Jimma / Bishooftuu, Itoophiyaa",
  },
  about: {
    label: "01 // WAA'EE BADAASOO",
    titlePart1: "Fedhiin baruu yaada maddisiisa;",
    titleHighlight: "Injinariingiin",
    titlePart2: "ammoo gara dhugaatti jijjiira.",
    paragraph1:
      "Injineraa Sooftiweerii ta'uu koon, koodiin qulqulluunii fi saxaxni ammayyaa walitti dhufanii rakkoolee qabatamaa hawaasaa akkamitti akka furan qorachuuf fedhii guddaa qaba. Xiyyeeffannaan koo inni guddaan ijaarsa weebsaayitii guutuu (Full-Stack), sirna duubaa (Backend) cimaafi beekumsa namtolchee (AI) hojiirra oolchuu irratti.",
    paragraph2:
      "Sirna oduu dijitaalaa saffisaa ijaaruu, sirna bulchiinsa hoteelaa ammayyeessuu, yookiin Paayitanii fi Machine Learning gargaaramuun deetaa qaaccessuu yoo ta'e; yeroo hunda qulqullina koodii, saffisa hojiifi salphinatti fayyadamuu danda'uuf dursa nan kenna.",
    paragraph3:
      "Koodii barreessuu caalaa, teeknooloojiin hawaasa tajaajiluu qaba jedheen amana—furmaatawwan salphaa, amansiisaafi bu'aa waaraa fidan uumuun karoora kooti.",
    stats: [
      { number: "08+", label: "Pirojektiiwwan Ijaarameef Maxxanfame" },
      { number: "Full-Stack", label: "Dandeettii Guutuu" },
      { number: "Injineraa Sooftiweerii", label: "Miseensa Ogeeyyii Piroodaaktii" },
      { number: "100%", label: "Koodii Qulqulluuf Amanamaa" },
    ],
  },
  projects: {
    label: "02 // HOJIIWWAN FILATAMAN",
    titlePart1: "Hojiiwwan fi Pirojektiiwwan",
    titleHighlight: "Ijaarsa Addaa",
    titlePart2: "qaban agarsiisuu.",
    counterTotal: "08+",
    viewProject: "KOODII / AGARSIISA ILAALAA",
    projectScope: "DAANGAA HOJICHAA",
    techStack: "TEEKNOLOJIIWWAN HOJIIRRA OOLAN",
    problemSolved: "RAKKOO FURAME FI FURMAATA",
    items: [
      {
        id: "bishoftu-news",
        number: "01",
        title: "Oduu Bishooftuu (Bishoftu News)",
        tagline: "Kuusaa Oduu Dijitaalaa fi Miidiyaa Naannoo",
        category: "Miseensa Weebsaayitii Guutuu / Miidiyaa",
        image: "/projects/bishoftu.jpeg",
        description:
          "Oduu naannoo, seenaawwan hawaasaa fi odeeffannoo ammayyaa saffisaan uummata biraan gahuuf kan ijaarame sirna miidiyaa dijitaalaati.",
        problem:
          "Miidiyaan naannoo sirna ammayyaa, saffisaa fi nageenyi isaa eegame kan qulqullinaan oduu itti qindeessan dhabee ture.",
        solution:
          "Next.js, MongoDB/Mongoose, Better-Auth fi Tailwind CSS fayyadamuun ijaarame. Gulaallii barruu, galmee suuraa fi fayyadama bilbilaatiif mijataa kan ta'edha.",
        technologies: ["Next.js", "MongoDB", "Mongoose", "Better-Auth", "Tailwind CSS"],
        link: "https://github.com/bedaso-soft/bishoftu-news",
      },
      {
        id: "hms",
        number: "02",
        title: "Sirna Bulchiinsa Hoteelaa (HMS)",
        tagline: "Sirna Qabannaa Kutaa fi Bulchiinsa Hoteelaa",
        category: "Sirna Tajaajila Hoteelaa",
        image: "/projects/hms.jpeg",
        description:
          "Kutaalee hoteelaa qindeessuu, keessummoota simachuu fi baasuu, kaffaltii fi qabannaa kallattii to'achuuf kan tajaajilu sirna guutuudha.",
        problem:
          "Hojii harkaan hojjetamu keessatti kutaan tokko keessummaa lamaaf qabamuu fi ragaan baduu rakkoo guddaa ture.",
        solution:
          "Next.js, Prisma ORM fi PostgreSQL gargaaramuun kan hojjetame yoo ta'u, hojjettootaaf daashboordii salphaafi ragaa yeroodhaa yerootti haaromsu qaba.",
        technologies: ["Next.js", "Prisma ORM", "PostgreSQL", "NextAuth", "Tailwind CSS"],
        link: "https://github.com/bedaso-soft/hms",
      },
      {
        id: "projecthub",
        number: "03",
        title: "PirojektHaab (ProjectHub)",
        tagline: "Sirna Hojii Gareefi Pirojektii Waloon To'achuu",
        category: "Sirna Hojii Waliinii Full-Stack",
        image: "/projects/projecthub.png",
        description:
          "Gareewwan hojii pirojektii isaanii, qoodinsa hojiifi sadarkaa irra jiran waloon akka to'atan kan dandeessisu sirna ammayyaati.",
        problem:
          "Gareewwan ijaarsa sooftiweerii hojii isaanii bifa qindeessaa ta'een hordofuuf maddeen salphaa dhabanii turan.",
        solution:
          "Laravel REST API fi React walitti qindeessuun kan ijaarame; kutaalee hojii, ergama hojjettootaa fi gabaasa qabatamaa kenna.",
        technologies: ["React", "Laravel REST API", "MySQL", "Tailwind CSS", "Vite"],
        link: "https://github.com/bedaso-soft/projecthub",
      },
      {
        id: "yaden-hotel",
        number: "04",
        title: "Agarsiisa Hoteela Yaadan (Yaden Hotel)",
        tagline: "Beeksisa Dijitaalaa fi Tajaajila Hoteelaa",
        category: "Muuxannoo Weebsaayitii Hoteelaa",
        image: "/projects/yaden.jpeg",
        description:
          "Daawwattoonni tajaajiloota hoteelichaa, qophii fi kutaalee akka salphaatti ilaalan kan dandeessisu weebsaayitii miidhagaadha.",
        problem:
          "Hoteelichi bifa ammayyaafi miidhagina qabuun tajaajila isaa daawwattootaaf ibsuu barbaada ture.",
        solution:
          "Vite fi React fayyadamuun kan ijaarame; galmee suuraa bal'aa, tarree tajaajilootaa fi qunnamtii kallattiitiif kan qophaa'edha.",
        technologies: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
        link: "https://github.com/bedaso-soft/hotel-system",
      },
    ],
  },
  skills: {
    label: "03 // DANDEETTIIWWAN FI MEESHAALEE",
    titlePart1: "Muummee Injinariingii fi",
    titleHighlight: "Meeshaalee Teeknolojii",
    titlePart2: "ani ittiin hojjedhu.",
    categories: [
      {
        name: "Ijaarsa Fuula Duraa (Frontend)",
        desc: "Weebsaayitii saffisaa, miidhagaa fi bilbilaaf mijataa ijaaruu.",
        skills: ["React", "Next.js", "JavaScript (ES6+)", "HTML5 & Semantic Web", "Tailwind CSS", "CSS Modules & UI Design"],
      },
      {
        name: "Sirna Duubaa (Backend)",
        desc: "Sirna APIs, looljika sarvariifi nageenya ragaa ijaaruu.",
        skills: ["Node.js", "Express.js", "Laravel (PHP)", "RESTful APIs", "Better-Auth / NextAuth", "Middleware Architecture"],
      },
      {
        name: "Kuusaa Deetaa (Databases)",
        desc: "Kuusaa deetaa walitti hidhamaniifi hin hidhamne qindeessuu.",
        skills: ["MongoDB & Mongoose", "Prisma ORM", "MySQL", "PostgreSQL", "Data Validation & Sanitization"],
      },
      {
        name: "Paayitanii fi AI (Machine Learning)",
        desc: "Saayinsii deetaa fi sirnoota ammayyaa uumuu.",
        skills: ["Python 3", "NumPy", "Pandas", "Scikit-Learn Fundamentals", "AI Model Integration", "Data Analysis"],
      },
      {
        name: "Meeshaalee Hojii fi Naannoo",
        desc: "To'annoo koodiifi adeemsa hojii saffisiisuu.",
        skills: ["Git & GitHub", "Linux CLI", "Vite & Turbopack", "Postman / API Testing", "npm / package management"],
      },
    ],
  },
  contact: {
    label: "04 // NA QUNNAMAA",
    titlePart1: "Yaada hojjetamuu qabu qabduu?",
    titleHighlight: "Waliin haa hojjennu",
    titlePart2: "gara hojiittis haa jijjiirru.",
    description:
      "Injineri koodii cimee hojjetu qacaruuf, pirojektii haaraa irratti waloon hojjechuuf yookiin carraawwan sooftiweerii mari'achuuf yoomiyyuu na qunnamuu dandeessu.",
    emailLabel: "ERGAAN KALLATTII (EMAIL)",
    email: "bedasodersu2@gmail.com",
    githubLabel: "FUULA GITHUB",
    github: "github.com/bedaso-soft",
    locationLabel: "BAKKA",
    location: "Jimma fi Bishooftuu, Itoophiyaa",
    form: {
      namePlaceholder: "Maqaa Guutuu *",
      emailPlaceholder: "Teessoo Imeelii *",
      subjectPlaceholder: "Mata Duree / Pirojektii *",
      messagePlaceholder: "Ergaa keessan asitti barreessaa... *",
      submitButton: "ERGAA ERGAA",
      sendingButton: "ERGUURRA JIRA...",
      successTitle: "Ergaan Keessan Milkaa'inaan Ergameera!",
      successMessage: "Nu qunnamuu keessaniif galatoomaa; Badaasoon ergaa keessan ilaalee saffisaan isiniif deebisa.",
      errorMessage: "Maaloo saanduqa hunda sirriitti guutaa!",
    },
  },
  footer: {
    rights: "Mirgi hundi seeraan eegamaadha.",
    tagline: "Badaasoo Darsuutiin Kan Saxaxamee fi Ijaarame.",
    backToTop: "GARA OLRRA DEEBI'AA",
  },
};
