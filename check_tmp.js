
// ═══════════════════════════════════════════
// DONNÉES — 6 sedarim, 63 traités
// Chaque traité : { id, label, labelHeb, ico, cls, chapitres: [] }
// fiches contient à la fois les Michnayot et les daf de Guemara,
// distingués par leur icône (📜 Michna, 📖 Guemara)
// ═══════════════════════════════════════════
const data = {
  'zeraim': {
    label: 'Zeraïm', labelHeb: 'זרעים', color: '#7FB89C',
    traites: [
      { id: 'berakhot', label: 'Berakhot', labelHeb: 'ברכות', ico: '🙏', cls: 'ico-berakhot', chapitres: [
        { numero: 1, nom: 'De quand récite-t-on le Chema', fiches: [
          { name: 'Michna 1:1 — Depuis quand récite-t-on le Chema le soir ?', href: 'michna_Mishnah_Berakhot.1.1.html', type: 'michna' },
        ], qcms: [] },
      ] },
      { id: 'peah', label: 'Péah', labelHeb: 'פאה', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'demai', label: 'Demaï', labelHeb: 'דמאי', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'kilayim', label: 'Kilayim', labelHeb: 'כלאים', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'sheviit', label: 'Chevi\'it', labelHeb: 'שביעית', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'terumot', label: 'Teroumot', labelHeb: 'תרומות', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'maasrot', label: 'Ma\'assérot', labelHeb: 'מעשרות', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'maaser-sheni', label: 'Ma\'asser Chéni', labelHeb: 'מעשר שני', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'challah', label: 'Hala', labelHeb: 'חלה', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'orlah', label: 'Orla', labelHeb: 'ערלה', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
      { id: 'bikkurim', label: 'Bikourim', labelHeb: 'ביכורים', ico: '🌾', cls: 'ico-zeraim', chapitres: [] },
    ]
  },
  'moed': {
    label: 'Moëd', labelHeb: 'מועד', color: '#7F9CD4',
    traites: [
      { id: 'shabbat', label: 'Chabbat', labelHeb: 'שבת', ico: '🕯️', cls: 'ico-moed', chapitres: [] },
      { id: 'eruvin', label: 'Erouvin', labelHeb: 'עירובין', ico: '🏘️', cls: 'ico-moed', chapitres: [] },
      { id: 'pesachim', label: 'Pessahim', labelHeb: 'פסחים', ico: '🍞', cls: 'ico-moed', chapitres: [] },
      { id: 'shekalim', label: 'Chekalim', labelHeb: 'שקלים', ico: '🪙', cls: 'ico-moed', chapitres: [] },
      { id: 'yoma', label: 'Yoma', labelHeb: 'יומא', ico: '⚪', cls: 'ico-moed', chapitres: [] },
      { id: 'sukkah', label: 'Souka', labelHeb: 'סוכה', ico: '🌿', cls: 'ico-moed', chapitres: [
        { numero: 1, fiches: [
          { name: 'Daf 6 — Les mesures halakhiques et le nombre de parois de la souccah', href: 'guemara_Sukkah.6.html', type: 'guemara' },
          { name: 'Daf 7 — La forme de la porte, le soleil et la résidence permanente', href: 'guemara_Sukkah.7.html', type: 'guemara' },
        ], qcms: [
          { name: 'QCM Guemara Sukkah 6 (6a-6b)', href: 'qcm_guemara_Sukkah.6.html', nbQuestions: 9 },
          { name: 'QCM Guemara Sukkah 7 (7a-7b)', href: 'qcm_guemara_Sukkah.7.html', nbQuestions: 10 },
        ] },
      ] },
      { id: 'beitza', label: 'Beitsa', labelHeb: 'ביצה', ico: '🥚', cls: 'ico-moed', chapitres: [] },
      { id: 'rosh-hashanah', label: 'Roch Hachana', labelHeb: 'ראש השנה', ico: '🐏', cls: 'ico-moed', chapitres: [] },
      { id: 'taanit', label: 'Ta\'anit', labelHeb: 'תענית', ico: '🌧️', cls: 'ico-moed', chapitres: [] },
      { id: 'megillah', label: 'Meguila', labelHeb: 'מגילה', ico: '📜', cls: 'ico-moed', chapitres: [] },
      { id: 'moed-katan', label: 'Moëd Katan', labelHeb: 'מועד קטן', ico: '📅', cls: 'ico-moed', chapitres: [] },
      { id: 'chagigah', label: 'Haguiga', labelHeb: 'חגיגה', ico: '🎉', cls: 'ico-moed', chapitres: [] },
    ]
  },
  'nashim': {
    label: 'Nachim', labelHeb: 'נשים', color: '#D97F8D',
    traites: [
      { id: 'yevamot', label: 'Yevamot', labelHeb: 'יבמות', ico: '💍', cls: 'ico-nashim', chapitres: [] },
      { id: 'ketubot', label: 'Ketoubot', labelHeb: 'כתובות', ico: '📜', cls: 'ico-nashim', chapitres: [] },
      { id: 'nedarim', label: 'Nedarim', labelHeb: 'נדרים', ico: '🤝', cls: 'ico-nashim', chapitres: [] },
      { id: 'nazir', label: 'Nazir', labelHeb: 'נזיר', ico: '🙏', cls: 'ico-nashim', chapitres: [] },
      { id: 'sotah', label: 'Sota', labelHeb: 'סוטה', ico: '⚖️', cls: 'ico-nashim', chapitres: [] },
      { id: 'gittin', label: 'Guitin', labelHeb: 'גיטין', ico: '📜', cls: 'ico-nashim', chapitres: [] },
      { id: 'kiddushin', label: 'Kidouchin', labelHeb: 'קידושין', ico: '💍', cls: 'ico-nashim', chapitres: [] },
    ]
  },
  'nezikin': {
    label: 'Nezikin', labelHeb: 'נזיקין', color: '#C295D6',
    traites: [
      { id: 'bava-kamma', label: 'Bava Kama', labelHeb: 'בבא קמא', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
      { id: 'bava-metzia', label: 'Bava Metsia', labelHeb: 'בבא מציעא', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
      { id: 'bava-batra', label: 'Bava Batra', labelHeb: 'בבא בתרא', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
      { id: 'sanhedrin', label: 'Sanhédrin', labelHeb: 'סנהדרין', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
      { id: 'makkot', label: 'Makot', labelHeb: 'מכות', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
      { id: 'shevuot', label: 'Chevouot', labelHeb: 'שבועות', ico: '🤲', cls: 'ico-nezikin', chapitres: [] },
      { id: 'eduyot', label: 'Edouyot', labelHeb: 'עדויות', ico: '📜', cls: 'ico-nezikin', chapitres: [] },
      { id: 'avodah-zarah', label: 'Avoda Zara', labelHeb: 'עבודה זרה', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
      { id: 'avot', label: 'Avot', labelHeb: 'אבות', ico: '💭', cls: 'ico-nezikin', chapitres: [] },
      { id: 'horayot', label: 'Horayot', labelHeb: 'הוריות', ico: '⚖️', cls: 'ico-nezikin', chapitres: [] },
    ]
  },
  'kodashim': {
    label: 'Kodachim', labelHeb: 'קדשים', color: '#E8A87C',
    traites: [
      { id: 'zevachim', label: 'Zevahim', labelHeb: 'זבחים', ico: '🕊️', cls: 'ico-kodashim', chapitres: [] },
      { id: 'menachot', label: 'Menahot', labelHeb: 'מנחות', ico: '🕊️', cls: 'ico-kodashim', chapitres: [] },
      { id: 'chullin', label: 'Houlin', labelHeb: 'חולין', ico: '🕊️', cls: 'ico-kodashim', chapitres: [] },
      { id: 'bekhorot', label: 'Bekhorot', labelHeb: 'בכורות', ico: '🕊️', cls: 'ico-kodashim', chapitres: [
        { numero: 1, fiches: [
          { name: 'Mishna 1', href: 'michna_Mishnah_Bekhorot.1.1.html', type: 'michna' },
          { name: 'Mishna 2', href: 'michna_Mishnah_Bekhorot.1.2.html', type: 'michna' },
          { name: 'Mishna 3', href: 'michna_Mishnah_Bekhorot.1.3.html', type: 'michna' },
          { name: 'Mishna 4', href: 'michna_Mishnah_Bekhorot.1.4.html', type: 'michna' },
          { name: 'Mishna 5', href: 'michna_Mishnah_Bekhorot.1.5.html', type: 'michna' },
          { name: 'Mishna 6', href: 'michna_Mishnah_Bekhorot.1.6.html', type: 'michna' },
          { name: 'Mishna 7', href: 'michna_Mishnah_Bekhorot.1.7.html', type: 'michna' },
          { name: 'Mishna 8', href: 'michna_Mishnah_Bekhorot.1.8.html', type: 'michna' },
          { name: 'Daf 2 — L\'âne premier-né et la propriété d\'un non-Juif', href: 'guemara_Bekhorot.2.html', type: 'guemara' },
          { name: 'Daf 3 — La part minimale de propriété non-juive', href: 'guemara_Bekhorot.3.html', type: 'guemara' },
          { name: 'Daf 4 — Le rachat des premiers-nés au désert', href: 'guemara_Bekhorot.4.html', type: 'guemara' },
          { name: 'Daf 5 — Le rachat de l\'âne premier-né et l\'introduction du croisement d\'espèces', href: 'guemara_Bekhorot.5.html', type: 'guemara' },
          { name: 'Daf 6 — Les croisements d\'espèces et l\'interdiction du chameau', href: 'guemara_Bekhorot.6.html', type: 'guemara' },
          { name: 'Daf 7 — L\'urine, le miel et la Michna des poissons', href: 'guemara_Bekhorot.7.html', type: 'guemara' },
          { name: 'Daf 8 — Reproduction animale et la sagesse de Rabbi Yehochoua ben Hanania', href: 'guemara_Bekhorot.8.html', type: 'guemara' },
          { name: 'Daf 9 — Le profit tiré de l\'âne premier-né et son bris de nuque', href: 'guemara_Bekhorot.9.html', type: 'guemara' },
          { name: 'Daf 10 — Le bris de nuque et le montant minimal de rachat', href: 'guemara_Bekhorot.10.html', type: 'guemara' },
          { name: 'Daf 11 — Le montant du rachat, le vol de l\'âne et les dix ânes hérités', href: 'guemara_Bekhorot.11.html', type: 'guemara' },
          { name: 'Daf 12 — Les animaux exclus du rachat et l\'agneau qui meurt', href: 'guemara_Bekhorot.12.html', type: 'guemara' },
          { name: 'Daf 13 — L\'acquisition auprès d\'un non-Juif et les priorités entre mitsvot', href: 'guemara_Bekhorot.13.html', type: 'guemara' },
        ], qcms: [
          { name: 'QCM Michna Bekhorot 1:1', href: 'qcm_michna_Mishnah_Bekhorot.1.1.html', nbQuestions: 6 },
          { name: 'QCM Michna Bekhorot 1:2', href: 'qcm_michna_Mishnah_Bekhorot.1.2.html', nbQuestions: 5 },
          { name: 'QCM Michna Bekhorot 1:3', href: 'qcm_michna_Mishnah_Bekhorot.1.3.html', nbQuestions: 6 },
          { name: 'QCM Michna Bekhorot 1:4', href: 'qcm_michna_Mishnah_Bekhorot.1.4.html', nbQuestions: 4 },
          { name: 'QCM Michna Bekhorot 1:5', href: 'qcm_michna_Mishnah_Bekhorot.1.5.html', nbQuestions: 8 },
          { name: 'QCM Michna Bekhorot 1:6', href: 'qcm_michna_Mishnah_Bekhorot.1.6.html', nbQuestions: 5 },
          { name: 'QCM Michna Bekhorot 1:7', href: 'qcm_michna_Mishnah_Bekhorot.1.7.html', nbQuestions: 5 },
          { name: 'QCM Michna Bekhorot 1:8', href: 'qcm_michna_Mishnah_Bekhorot.1.8.html', nbQuestions: 6 },
          { name: 'QCM Guemara Bekhorot 2 (2a-2b)', href: 'qcm_guemara_Bekhorot.2.html', nbQuestions: 7 },
          { name: 'QCM Guemara Bekhorot 3 (3a-3b)', href: 'qcm_guemara_Bekhorot.3.html', nbQuestions: 8 },
          { name: 'QCM Guemara Bekhorot 4 (4a-4b)', href: 'qcm_guemara_Bekhorot.4.html', nbQuestions: 13 },
          { name: 'QCM Guemara Bekhorot 5 (5a-5b)', href: 'qcm_guemara_Bekhorot.5.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 6 (6a-6b)', href: 'qcm_guemara_Bekhorot.6.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 7 (7a-7b)', href: 'qcm_guemara_Bekhorot.7.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 8 (8a-8b)', href: 'qcm_guemara_Bekhorot.8.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 9 (9a-9b)', href: 'qcm_guemara_Bekhorot.9.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 10 (10a-10b)', href: 'qcm_guemara_Bekhorot.10.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 11 (11a-11b)', href: 'qcm_guemara_Bekhorot.11.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 12 (12a-12b)', href: 'qcm_guemara_Bekhorot.12.html', nbQuestions: 9 },
          { name: 'QCM Guemara Bekhorot 13 (13a-13b)', href: 'qcm_guemara_Bekhorot.13.html', nbQuestions: 10 },
        ] },
      
        { numero: 2, fiches: [
          { name: 'Mishna 1', href: 'michna_Mishnah_Bekhorot.2.1.html', type: 'michna' },
          { name: 'Mishna 2', href: 'michna_Mishnah_Bekhorot.2.2.html', type: 'michna' },
          { name: 'Daf 14 — Les animaux consacrés défectueux et l\'autel privé', href: 'guemara_Bekhorot.14.html', type: 'guemara' },
        ], qcms: [
          { name: 'QCM Michna Bekhorot 2:1', href: 'qcm_michna_Mishnah_Bekhorot.2.1.html', nbQuestions: 5 },
          { name: 'QCM Michna Bekhorot 2:2', href: 'qcm_michna_Mishnah_Bekhorot.2.2.html', nbQuestions: 7 },
          { name: 'QCM Guemara Bekhorot 14 (14a-14b)', href: 'qcm_guemara_Bekhorot.14.html', nbQuestions: 10 },
        ] },
      ] },
      { id: 'arakhin', label: 'Arakhin', labelHeb: 'ערכין', ico: '📜', cls: 'ico-kodashim', chapitres: [] },
      { id: 'temurah', label: 'Temoura', labelHeb: 'תמורה', ico: '🕊️', cls: 'ico-kodashim', chapitres: [] },
      { id: 'keritot', label: 'Keritot', labelHeb: 'כריתות', ico: '📜', cls: 'ico-kodashim', chapitres: [] },
      { id: 'meilah', label: 'Me\'ila', labelHeb: 'מעילה', ico: '📜', cls: 'ico-kodashim', chapitres: [] },
      { id: 'tamid', label: 'Tamid', labelHeb: 'תמיד', ico: '🕊️', cls: 'ico-kodashim', chapitres: [] },
      { id: 'middot', label: 'Midot', labelHeb: 'מדות', ico: '🏛️', cls: 'ico-kodashim', chapitres: [] },
      { id: 'kinnim', label: 'Kinim', labelHeb: 'קנים', ico: '🕊️', cls: 'ico-kodashim', chapitres: [] },
    ]
  },
  'tohorot': {
    label: 'Tohorot', labelHeb: 'טהרות', color: '#7FC4D4',
    traites: [
      { id: 'keilim', label: 'Kélim', labelHeb: 'כלים', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'oholot', label: 'Oholot', labelHeb: 'אהלות', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'negaim', label: 'Négaïm', labelHeb: 'נגעים', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'parah', label: 'Para', labelHeb: 'פרה', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'tohorot-massekhet', label: 'Tohorot', labelHeb: 'טהרות', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'mikvaot', label: 'Mikvaot', labelHeb: 'מקואות', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'niddah', label: 'Nida', labelHeb: 'נדה', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'makhshirin', label: 'Makhchirin', labelHeb: 'מכשירין', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'zavim', label: 'Zavim', labelHeb: 'זבים', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'tevul-yom', label: 'Tevoul Yom', labelHeb: 'טבול יום', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'yadayim', label: 'Yadaïm', labelHeb: 'ידים', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
      { id: 'uktzin', label: 'Oukatsin', labelHeb: 'עוקצין', ico: '💧', cls: 'ico-tohorot', chapitres: [] },
    ]
  },
};

const sedarimMeta = {
  'zeraim':   { emoji: '🌾', tileClass: 'tile-zeraim',   court: 'Zeraïm',   nom: 'Semences' },
  'moed':     { emoji: '📅', tileClass: 'tile-moed',     court: 'Moëd',     nom: 'Fêtes' },
  'nashim':   { emoji: '💍', tileClass: 'tile-nashim',   court: 'Nachim',   nom: 'Femmes' },
  'nezikin':  { emoji: '⚖️', tileClass: 'tile-nezikin',  court: 'Nezikin',  nom: 'Dommages' },
  'kodashim': { emoji: '🕊️', tileClass: 'tile-kodashim', court: 'Kodachim', nom: 'Sacrifices' },
  'tohorot':  { emoji: '💧', tileClass: 'tile-tohorot',  court: 'Tohorot',  nom: 'Puretés' },
};

const ordreSedarim = ['zeraim', 'moed', 'nashim', 'nezikin', 'kodashim', 'tohorot'];

function compterFiches(traite) {
  return (traite.chapitres || []).reduce((s, c) => s + (c.fiches || []).length, 0);
}
function compterQcms(traite) {
  return (traite.chapitres || []).reduce((s, c) => s + (c.qcms || []).length, 0);
}

function renderTiles() {
  const grid = document.getElementById('tiles-grid');
  if (!grid) return;

  const html = ordreSedarim.map(id => {
    const seder = data[id];
    const meta = sedarimMeta[id];
    if (!seder || !meta) return '';

    const totalFiches = seder.traites.reduce((s, t) => s + compterFiches(t), 0);
    const totalQcms = seder.traites.reduce((s, t) => s + compterQcms(t), 0);
    const badge = (totalFiches === 0 && totalQcms === 0)
      ? 'À venir'
      : totalQcms > 0
        ? `${totalFiches} fiche${totalFiches !== 1 ? 's' : ''} · ${totalQcms} QCM`
        : `${totalFiches} fiche${totalFiches !== 1 ? 's' : ''}`;

    const traitesAvecContenu = seder.traites.filter(t => compterFiches(t) > 0 || compterQcms(t) > 0);
    const pillsHtml = (traitesAvecContenu.length > 0 ? traitesAvecContenu : seder.traites.slice(0, 4))
      .map(t => `<span class="tile-pill">${t.label}</span>`)
      .join('');

    return `
    <div class="tile ${meta.tileClass}" onclick="openPanel('${id}')" id="tile-${id}">
      <div class="tile-badge">${badge}</div>
      <div class="tile-emoji">${meta.emoji}</div>
      <div class="tile-level">${meta.court}</div>
      <div class="tile-level-heb">${seder.labelHeb}</div>
      <div class="tile-name">${meta.nom} — ${seder.traites.length} traités</div>
      <div class="tile-pills">${pillsHtml}</div>
    </div>`;
  }).join('');

  grid.innerHTML = html;
}

renderTiles();

let current = null;

function openPanel(id) {
  const panel = document.getElementById('reveal-panel');
  document.querySelectorAll('.tile').forEach(t => t.classList.remove('active'));

  if (current === id) {
    current = null;
    panel.innerHTML = '';
    return;
  }

  current = id;
  document.getElementById('tile-' + id).classList.add('active');
  const d = data[id];

  const traitesHtml = d.traites.map(tr => {
    const chapitres = tr.chapitres || [];
    const totalFichesTraite = compterFiches(tr);
    const totalQcmsTraite = compterQcms(tr);

    const chapitresHtml = chapitres.length === 0
      ? `<div class="empty-msg">Pas encore de chapitres disponibles.</div>`
      : chapitres.map(ch => {
          const fiches = ch.fiches || [];
          const qcms = ch.qcms || [];

          const fichesHtml = fiches.length === 0
            ? `<div class="empty-msg">Pas encore de fiches disponibles.</div>`
            : fiches.map(f => {
                const ico = f.type === 'guemara' ? '📖' : '📜';
                return `<a class="fiche-link" href="${f.href}"><div class="fiche-ico">${ico}</div><div class="fiche-text">${f.name}</div></a>`;
              }).join('');

          const qcmsHtml = qcms.length === 0
            ? `<div class="empty-msg">Pas encore de QCM disponible.</div>`
            : qcms.map(q =>
                `<a class="fiche-link" href="${q.href}"><div class="fiche-ico">📝</div><div class="fiche-text">${q.name}${q.nbQuestions ? `<span class="qcm-nb-badge">${q.nbQuestions} questions</span>` : ''}</div></a>`
              ).join('');

          const chapId = `ch-${tr.id}-${ch.numero}`;
          return `
            <div class="chap-block" id="${chapId}">
              <div class="chap-block-header" onclick="toggleChap('${chapId}')">
                <span class="chap-block-title">Chapitre ${ch.numero}${ch.nom ? ` — ${ch.nom}` : ''}</span>
                <div class="mat-block-counts">
                  <span class="mat-block-count">${fiches.length} fiche${fiches.length !== 1 ? 's' : ''}</span>
                  <span class="mat-block-count">${qcms.length} QCM</span>
                </div>
                <span class="mat-block-arrow">▶</span>
              </div>
              <div class="chap-block-content">
                <div class="mat-columns">
                  <div class="mat-col-fiches">
                    <div class="mat-col-label">📚 Fiches (Michna / Guemara)</div>
                    ${fichesHtml}
                  </div>
                  <div class="mat-col-qcms">
                    <div class="mat-col-label">📝 QCM d'évaluation</div>
                    ${qcmsHtml}
                  </div>
                </div>
              </div>
            </div>`;
        }).join('');

    const badgeFiches = `${totalFichesTraite} fiche${totalFichesTraite !== 1 ? 's' : ''}`;
    const badgeQcms = `${totalQcmsTraite} QCM`;

    return `
      <div class="mat-block" id="mb-${tr.id}">
        <div class="mat-block-header" onclick="toggleMat('mb-${tr.id}')">
          <div class="mat-ico ${tr.cls}">${tr.ico}</div>
          <span class="mat-block-title">${tr.label}<span class="mat-block-title-heb">${tr.labelHeb}</span></span>
          <div class="mat-block-counts">
            <span class="mat-block-count">${badgeFiches}</span>
            <span class="mat-block-count">${badgeQcms}</span>
          </div>
          <span class="mat-block-arrow">▶</span>
        </div>
        <div class="mat-block-content">${chapitresHtml}</div>
      </div>`;
  }).join('');

  panel.innerHTML = `
    <div class="panel-inner">
      <div class="panel-header">
        <div class="panel-header-left">
          <div class="panel-dot" style="background:${d.color}"></div>
          <h3>${d.label} <span style="font-family:'Frank Ruhl Libre',serif;font-weight:500;color:var(--ink3);font-size:.85rem">${d.labelHeb}</span></h3>
        </div>
        <button class="panel-close" onclick="closePanel()">✕</button>
      </div>
      <div class="panel-matieres">${traitesHtml}</div>
    </div>`;

  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
}

function closePanel() {
  document.getElementById('reveal-panel').innerHTML = '';
  document.querySelectorAll('.tile').forEach(t => t.classList.remove('active'));
  current = null;
}

function toggleMat(id) {
  document.getElementById(id).classList.toggle('open');
}

function toggleChap(id) {
  document.getElementById(id).classList.toggle('open');
}

const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

function appliquerTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('tcs-theme', theme); } catch (e) {}
}

let themeInitial = 'light';
try {
  const sauvegarde = localStorage.getItem('tcs-theme');
  if (sauvegarde === 'dark' || sauvegarde === 'light') {
    themeInitial = sauvegarde;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeInitial = 'dark';
  }
} catch (e) {}
appliquerTheme(themeInitial);

themeToggle.addEventListener('click', () => {
  const actuel = htmlEl.getAttribute('data-theme');
  appliquerTheme(actuel === 'dark' ? 'light' : 'dark');
});
