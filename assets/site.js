/* OSS site: fixed header + theme + UI i18n (en default, uk, ru) */
(function () {
  var LANG_KEY = 'oss-lang';
  var THEME_KEY = 'oss-theme';
  var T = {
    en: {
      brandShort: 'OSS',
      brandFull: 'Operating System of Society',
      proto: 'Public Prototype',
      themeLight: 'Light',
      themeDark: 'Dark',
      nav_home: 'Home',
      nav_core: 'Core',
      nav_econ: 'Economy',
      nav_acc: 'Accountability',
      nav_civic: 'Civic layer',
      nav_open: 'Open questions',
      nav_join: 'Participate',
      nav_court: 'Court (demo)',
      nav_map: 'Mind map',
      nav_mem: 'Public memory',
      nav_rate: 'Ratings (figures & firms)',
      i_eye: 'Constitutional core + reference implementations',
      i_h1: 'Open rules. Working prototypes.',
      i_lead: 'OSS is not a state and not the “only answer”. It is an open core of eleven articles and working prototypes you can test, challenge, and branch.',
      i_plural: 'Geolibertarian economics is a deliberate choice among alternatives—the best the authors could align with the Core. If something better appears, or another Core-compatible model is needed—the path is a <strong>fork (Art. IX)</strong>, not capture of a single headquarters.',
      i_btn_core: 'Read the Core',
      i_btn_join: 'How to participate',
      i_btn_civic: 'Civic signal',
      i_enf: 'Enforcement',
      i_enf_sub: 'court · conscientious refusal',
      i_data: 'Data',
      i_data_sub: 'observation · scoring',
      i_fin: 'Finance',
      i_fin_sub: 'LVT · Fund · Dividend',
      i_cap: 'Art. VI · anti-concentration · no institute holds two spheres',
      i_p_h2: 'Four principles in plain language',
      i_p_sub: 'Arts. I, III, IV, VII — anchors for a reader without prior context.',
      i_p1_t: 'Your body and labor are yours',
      i_p1_p: 'Ban on aggression. Land via explicit LVT, not a hidden tax on work.',
      i_p3_t: 'Presumption of freedom',
      i_p3_p: 'What is not expressly forbidden is allowed. The burden of limits lies with power.',
      i_p4_t: 'No mandatory mobilization',
      i_p4_p: 'Defense and service are voluntary contract, not a body tax.',
      i_p7_t: 'Reciprocal transparency',
      i_p7_p: 'Power is observable. The citizen need not be a “naked profile”. Principle 5.0.',
      i_proof_h2: 'Verified, not only claimed',
      i_proof_sub: 'Prototypes passed a Gauntlet Loop. Simulations of logic, not production.',
      i_court_h: 'Court module',
      i_court_p: 'Cats. 1/2/3, SLA, lottery, Schelling, HUMAN_CONFIRMATION before publication.',
      i_civic_h: 'Civic layer',
      i_civic_p: 'Polis-style sentiment: ≤140, no reply, aggregates, threat model. Does not create a mandatory duty for officials.',
      i_econ_h: 'Economy',
      i_econ_p: 'LVT, Dividend, Fund — mechanics and a hypothetical “what I pay / receive” scenario.',
      i_open_proto: 'Open prototype →',
      i_econ_page: 'Economy page →',
      i_honest_h2: 'What we honestly do not treat as closed',
      i_honest_sub: 'Part of project good faith.',
      i_join_h2: 'How to participate',
      i_s1_t: 'Rights are already yours',
      i_s1_p: 'Arts. I–VII bind power whether or not you signed Genesis.',
      i_s2_t: 'Voice by consent',
      i_s2_p: 'Genesis (18+): explicit consent to the Core for votes and roles.',
      i_s3_t: 'Exit always',
      i_s3_p: 'Fork or relocate without confiscation of person or lawful assets.',
      i_join_more: 'More on participation',
      i_foot: 'OSS Public Prototype · not a production system · theme saved in the browser',
      c_eye: 'Constitutional core · OSS_Core_Articles',
      c_h1: 'Eleven articles',
      c_lead: 'Short form for a reader from the street. Canonical signing text is in Core Articles; here — meaning and why.',
      c_plural: 'The Core changes only by a super-strict procedure (Art. X). Economic overlay (LVT, etc.) is a deliberate choice; a fork with another model stays Core-compatible if it keeps I–XI.',
      e_eye: 'Economy · source section 3',
      e_h1: 'LVT, Dividend, Sovereign Fund',
      e_lead: 'The system’s only revenue is rent on common resources (LVT). No emission, no tax on labor or income.',
      e_plural: 'One deliberate economic choice among alternatives, not the only true answer—a fork with another model remains compatible with the same constitutional Core.',
      a_eye: 'Accountability · modules 5.x',
      a_h1: 'Observation, court, refusal',
      a_lead: 'Ratings and memory do not punish by themselves. A verdict is not published without a human. Conscientious refusal is design, not a bug.',
      a_plural: 'Observation, court and refusal are one deliberate accountability design among alternatives (Art. VI/VII) — a fork may implement the same Core with a different accountability mechanism.',
      j_eye: 'Participation · Arts. VIII–IX',
      j_h1: 'Enter, act, leave',
      j_lead: 'Without mandatory crypto jargon. Human rights are not “switched on” by a signature; voice and roles are.',
      j_plural: 'Genesis consent and the 18+ threshold are this fork’s deliberate choice within Art. VIII — another fork may set different role rules and stay Core-compatible.',
      o_eye: 'Registry · source sections 10–11',
      o_h1: 'What is settled, what is not — and why we show it',
      o_lead: 'Not hiding trade-offs is part of good faith, not an optional section.',
      polis_h1: 'Polis · civic layer (MVP)',
      polis_sub: 'Sentiment, not deliberation · ≤140 · no reply · aggregates only · explicit privacy threat model',
      i_art1: 'Article I →',
      i_art3: 'Article III →',
      i_art4: 'Article IV →',
      i_art7: 'Article VII →',
      i_pill_calc: 'calculator',
      i_risk1_t: 'METRIC_GAMING · 7.4.6',
      i_risk1_p: 'Influence spread across indicators while staying under each disclosure threshold.',
      i_risk2_t: 'CUSTODY · inheritance',
      i_risk2_p: 'Oral nominee arrangements are hard to catch with formal audit alone.',
      i_risk3_t: 'STANDARD DRIFT · 8.1',
      i_risk3_p: 'Quiet hegemony of one fork between audits.',
      i_registry: 'Open questions registry →',
      i_num1: 'ART. I',
      i_num3: 'ART. III',
      i_num4: 'ART. IV',
      i_num7: 'ART. VII',
      i_pill_mvp: 'STATE_LOCK · MVP',
      polis_tab_vote: 'Voting',
      polis_tab_cl: 'Clusters',
      polis_tab_add: 'Add',
      polis_tab_id: 'Identity'
    },
    ua: {
      brandShort: 'ОСС',
      brandFull: 'Операційна Система Суспільства',
      proto: 'Публічний прототип',
      themeLight: 'Світла',
      themeDark: 'Темна',
      nav_home: 'Головна',
      nav_core: 'Ядро',
      nav_econ: 'Економіка',
      nav_acc: 'Підзвітність',
      nav_civic: 'Громадянський шар',
      nav_open: 'Відкриті питання',
      nav_join: 'Участь',
      nav_court: 'Суд (демо)',
      nav_map: 'Карта',
      nav_mem: 'Публічна памʼять',
      nav_rate: 'Рейтинги (особи та фірми)',
      i_eye: 'Конституційне ядро + референсні реалізації',
      i_h1: 'Відкриті правила. Робочі прототипи.',
      i_lead: 'ОСС — не держава і не «єдина відповідь». Це відкрите ядро з одинадцяти статей і робочі прототипи, які можна перевірити, оскаржити й розгалузити.',
      i_plural: 'Геолібертаріанська економіка — свідомий вибір серед альтернатив. Якщо з’явиться краще — шлях: <strong>форк (Ст. IX)</strong>, а не захоплення єдиного штабу.',
      i_btn_core: 'Читати Ядро',
      i_btn_join: 'Як взяти участь',
      i_btn_civic: 'Громадянський сигнал',
      i_enf: 'Правозастосування',
      i_enf_sub: 'суд · відмова за совістю',
      i_data: 'Дані',
      i_data_sub: 'спостереження · оцінка',
      i_fin: 'Фінанси',
      i_fin_sub: 'LVT · Фонд · Дивіденд',
      i_cap: 'Ст. VI · анти-концентрація · жоден інститут не тримає дві сфери',
      i_p_h2: 'Чотири принципи простою мовою',
      i_p_sub: 'Ст. I, III, IV, VII — опори для читача без попереднього контексту.',
      i_p1_t: 'Твоє тіло і праця — твої',
      i_p1_p: 'Заборона агресії. Земля — через явний LVT, не прихований податок на працю.',
      i_p3_t: 'Презумпція свободи',
      i_p3_p: 'Що прямо не заборонено — дозволено. Тягар обмежень на боці влади.',
      i_p4_t: 'Жодної обов’язкової мобілізації',
      i_p4_p: 'Оборона і служба — добровільний контракт.',
      i_p7_t: 'Взаємна прозорість',
      i_p7_p: 'Влада спостережувана. Громадянин не зобов’язаний бути «голим профілем».',
      i_proof_h2: 'Перевірено, не лише заявлено',
      i_proof_sub: 'Прототипи пройшли Gauntlet Loop. Симуляції логіки, не бойовий контур.',
      i_court_h: 'Судовий модуль',
      i_court_p: 'Кат. 1/2/3, SLA, жереб, Schelling, людське підтвердження перед публікацією.',
      i_civic_h: 'Громадянський шар',
      i_civic_p: 'Опитування настроїв за мотивами Polis. Не створює обовʼязкової відповіді влади.',
      i_econ_h: 'Економіка',
      i_econ_p: 'LVT, Dividend, Fund — механіка й гіпотетичний сценарій.',
      i_open_proto: 'Відкрити прототип →',
      i_econ_page: 'Сторінка економіки →',
      i_honest_h2: 'Що ми чесно не вважаємо закритим',
      i_honest_sub: 'Частина добросовісності проєкту.',
      i_join_h2: 'Як взяти участь',
      i_s1_t: 'Права вже твої',
      i_s1_p: 'Ст. I–VII обмежують владу незалежно від підпису Генезис.',
      i_s2_t: 'Голос — за згодою',
      i_s2_p: 'Генезис (18+): явна згода з Ядром для голосу й ролей.',
      i_s3_t: 'Вихід завжди',
      i_s3_p: 'Форк або релокація без конфіскації особи й законних активів.',
      i_join_more: 'Детальніше про участь',
      i_foot: 'ОСС · публічний прототип · не production · тема зберігається в браузері',
      c_eye: 'Конституційне ядро · OSS_Core_Articles',
      c_h1: 'Одинадцять статей',
      c_lead: 'Стисло для читача «з вулиці». Канонічний текст для підпису — у Core Articles.',
      c_plural: 'Ядро змінюється лише надтвердою процедурою (Ст. X). Економічна надбудова — свідомий вибір.',
      e_eye: 'Економіка · розділ 3',
      e_h1: 'LVT, дивіденд, суверенний фонд',
      e_lead: 'Єдине джерело доходу — рента з спільних ресурсів (LVT). Без емісії й податку на працю.',
      e_plural: 'Свідомий економічний вибір серед альтернатив; форк з іншою моделлю сумісний з тим самим Ядром.',
      a_eye: 'Підзвітність · модулі 5.x',
      a_h1: 'Спостереження, суд, відмова',
      a_lead: 'Рейтинг не карає сам. Вердикт не публікується без людини. Відмова за совістю — частина дизайну.',
      a_plural: 'Спостереження, суд і відмова — свідомий вибір дизайну підзвітності серед альтернатив (Ст. VI/VII); інший форк може реалізувати те саме Ядро іншим механізмом.',
      j_eye: 'Участь · Ст. VIII–IX',
      j_h1: 'Увійти, діяти, вийти',
      j_lead: 'Без обов’язкового крипто-жаргону. Права не «вмикаються» підписом; голос і ролі — так.',
      j_plural: 'Згода Генезису і поріг 18+ — свідомий вибір цього форка в межах Ст. VIII; інший форк може мати інші правила ролей і лишатись сумісним з Ядром.',
      o_eye: 'Реєстр · розділи 10–11',
      o_h1: 'Що вирішено, що ні — і чому ми це показуємо',
      o_lead: 'Не ховати компроміси — частина добросовісності.',
      polis_h1: 'Polis · громадянський шар (MVP)',
      polis_sub: 'Настрій, не дискусія · ≤140 · без відповіді · лише агрегати · явна модель загроз приватності',
      i_art1: 'Стаття I →',
      i_art3: 'Стаття III →',
      i_art4: 'Стаття IV →',
      i_art7: 'Стаття VII →',
      i_pill_calc: 'калькулятор',
      i_risk1_t: 'ГРА МЕТРИКАМИ · 7.4.6',
      i_risk1_p: 'Розподіл впливу за індикаторами під порогом розкриття.',
      i_risk2_t: 'ОПІКА · спадщина',
      i_risk2_p: 'Усні номінальні конструкції погано ловляться формальним аудитом.',
      i_risk3_t: 'ЗСУВ СТАНДАРТУ · 8.1',
      i_risk3_p: 'Тиха гегемонія форка між аудитами.',
      i_registry: 'Реєстр відкритих питань →',
      i_num1: 'СТ. I',
      i_num3: 'СТ. III',
      i_num4: 'СТ. IV',
      i_num7: 'СТ. VII',
      i_pill_mvp: 'STATE_LOCK · MVP',
      polis_tab_vote: 'Голосування',
      polis_tab_cl: 'Кластери',
      polis_tab_add: 'Додати',
      polis_tab_id: 'Ідентичність'
    },
    ru: {
      brandShort: 'ОСО',
      brandFull: 'Операционная Система Общества',
      proto: 'Публичный прототип',
      themeLight: 'Светлая',
      themeDark: 'Тёмная',
      nav_home: 'Главная',
      nav_core: 'Ядро',
      nav_econ: 'Экономика',
      nav_acc: 'Подотчётность',
      nav_civic: 'Гражданский слой',
      nav_open: 'Открытые вопросы',
      nav_join: 'Участвовать',
      nav_court: 'Суд (демо)',
      nav_map: 'Карта',
      nav_mem: 'Публичная память',
      nav_rate: 'Рейтинги (фигуры и фирмы)',
      i_eye: 'Конституционное ядро + референсные реализации',
      i_h1: 'Открытые правила. Рабочие прототипы.',
      i_lead: 'ОСО — не государство и не «единственный ответ». Это открытое ядро из одиннадцати статей и работающие прототипы.',
      i_plural: 'Геолибертарианская экономика — осознанный выбор среди альтернатив. Путь улучшения: <strong>форк (Ст. IX)</strong>, не захват штаба.',
      i_btn_core: 'Читать Ядро',
      i_btn_join: 'Как поучаствовать',
      i_btn_civic: 'Гражданский сигнал',
      i_enf: 'Правоприменение',
      i_enf_sub: 'суд · отказ по совести',
      i_data: 'Данные',
      i_data_sub: 'наблюдение · оценка',
      i_fin: 'Финансы',
      i_fin_sub: 'LVT · Фонд · Дивиденд',
      i_cap: 'Ст. VI · анти-концентрация · ни один институт не держит две сферы',
      i_p_h2: 'Четыре принципа простым языком',
      i_p_sub: 'Ст. I, III, IV, VII — опоры для читателя без предварительного контекста.',
      i_p1_t: 'Твоё тело и труд — твои',
      i_p1_p: 'Запрет агрессии. Земля — через явный LVT, не скрытый налог на работу.',
      i_p3_t: 'Презумпция свободы',
      i_p3_p: 'Что не запрещено явно — дозволено. Бремя ограничений на стороне власти.',
      i_p4_t: 'Нет обязательной мобилизации',
      i_p4_p: 'Оборона и служба — добровольный контракт.',
      i_p7_t: 'Взаимная прозрачность',
      i_p7_p: 'Власть наблюдаема. Гражданин не обязан быть «голым профилем».',
      i_proof_h2: 'Проверено, не только заявлено',
      i_proof_sub: 'Прототипы прошли Gauntlet Loop. Симуляции логики, не боевой контур.',
      i_court_h: 'Судебный модуль',
      i_court_p: 'Кат. 1/2/3, SLA, жребий, Schelling, человеческое подтверждение перед публикацией.',
      i_civic_h: 'Гражданский слой',
      i_civic_p: 'Опрос настроений по мотивам Polis. Не создаёт обязательного ответа власти.',
      i_econ_h: 'Экономика',
      i_econ_p: 'LVT, дивиденд, фонд — механика и гипотетический сценарий.',
      i_open_proto: 'Открыть прототип →',
      i_econ_page: 'Страница экономики →',
      i_honest_h2: 'Что честно не считаем закрытым',
      i_honest_sub: 'Часть добросовестности проекта.',
      i_join_h2: 'Как поучаствовать',
      i_s1_t: 'Права уже твои',
      i_s1_p: 'Ст. I–VII ограничивают власть независимо от подписи Генезис.',
      i_s2_t: 'Голос — по согласию',
      i_s2_p: 'Генезис (18+): явное согласие с Ядром для голоса и ролей.',
      i_s3_t: 'Выход всегда',
      i_s3_p: 'Форк или релокация без конфискации личности и законных активов.',
      i_join_more: 'Подробнее об участии',
      i_foot: 'ОСО · публичный прототип · не production · тема сохраняется в браузере',
      c_eye: 'Конституционное ядро · статьи Core',
      c_h1: 'Одиннадцать статей',
      c_lead: 'Кратко для читателя с улицы. Канонический текст для подписи — в Core Articles.',
      c_plural: 'Ядро меняется только сверхжёсткой процедурой (Ст. X). Экономическая надстройка — осознанный выбор.',
      e_eye: 'Экономика · раздел 3',
      e_h1: 'LVT, дивиденд, суверенный фонд',
      e_lead: 'Единственный источник дохода — рента с общих ресурсов (LVT). Без эмиссии и налога на труд.',
      e_plural: 'Осознанный экономический выбор среди альтернатив; форк с другой моделью совместим с тем же Ядром.',
      a_eye: 'Подотчётность · модули 5.x',
      a_h1: 'Наблюдение, суд, отказ',
      a_lead: 'Рейтинг не наказывает сам. Вердикт не публикуется без человека. Отказ по совести — часть дизайна.',
      a_plural: 'Наблюдение, суд и отказ — один осознанный вариант дизайна подотчётности среди альтернатив (ст. VI/VII); другой форк может реализовать то же Ядро другим механизмом.',
      j_eye: 'Участие · Ст. VIII–IX',
      j_h1: 'Войти, действовать, уйти',
      j_lead: 'Без обязательного крипто-жаргона. Права не «включаются» подписью; голос и роли — да.',
      j_plural: 'Согласие Генезиса и порог 18+ — осознанный выбор этого форка в рамках Ст. VIII; другой форк может задать другие правила ролей и остаться совместимым с Ядром.',
      o_eye: 'Реестр · разделы 10–11',
      o_h1: 'Что решено, что нет — и почему мы это показываем',
      o_lead: 'Не скрывать компромиссы — часть добросовестности.',
      polis_h1: 'Polis · гражданский слой (MVP)',
      polis_sub: 'Настроение, не дискуссия · ≤140 · без ответа · только агрегаты · явная модель угроз приватности',
      i_art1: 'Статья I →',
      i_art3: 'Статья III →',
      i_art4: 'Статья IV →',
      i_art7: 'Статья VII →',
      i_pill_calc: 'калькулятор',
      i_risk1_t: 'ИГРА МЕТРИКАМИ · 7.4.6',
      i_risk1_p: 'Распределение влияния по индикаторам под порогом раскрытия.',
      i_risk2_t: 'ОПЕКА · наследство',
      i_risk2_p: 'Устные номинальные конструкции плохо ловятся формальным аудитом.',
      i_risk3_t: 'СДВИГ СТАНДАРТА · 8.1',
      i_risk3_p: 'Тихая гегемония форка между аудитами.',
      i_registry: 'Реестр открытых вопросов →',
      i_num1: 'СТ. I',
      i_num3: 'СТ. III',
      i_num4: 'СТ. IV',
      i_num7: 'СТ. VII',
      i_pill_mvp: 'STATE_LOCK · MVP',
      polis_tab_vote: 'Голосование',
      polis_tab_cl: 'Кластеры',
      polis_tab_add: 'Добавить',
      polis_tab_id: 'Идентичность'
    }
  };

  function lang() {
    var L = localStorage.getItem(LANG_KEY) || 'en';
    if (L === 'uk') L = 'ua';
    return T[L] ? L : 'en';
  }
  function t(key) {
    var L = T[lang()] || T.en;
    if (L[key] != null) return L[key];
    if (T.en[key] != null) return T.en[key];
    return key;
  }
  function pageId() {
    var f = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (f.indexOf('core') >= 0) return 'core';
    if (f.indexOf('economy') >= 0) return 'econ';
    if (f.indexOf('account') >= 0) return 'acc';
    if (f.indexOf('polis') >= 0) return 'civic';
    if (f.indexOf('open-question') >= 0) return 'open';
    if (f.indexOf('particip') >= 0) return 'join';
    if (f.indexOf('court') >= 0) return 'court';
    if (f.indexOf('mindmap') >= 0 || f.indexOf('mind-map') >= 0) return 'map';
    if (f.indexOf('memory') >= 0) return 'mem';
    if (f.indexOf('rating') >= 0) return 'rate';
    return 'home';
  }
  function injectHeader() {
    if (document.getElementById('oss-site-header')) return;
    var L = lang(), pid = pageId();
    var el = document.createElement('div');
    el.id = 'oss-site-header';
    el.innerHTML =
      '<div class="oss-head-inner"><div class="oss-row1"><div>' +
      '<a class="oss-brand" href="index.html">' + t('brandShort') + ' <span>· ' + t('brandFull') + '</span></a>' +
      '<span class="oss-proto">' + t('proto') + '</span></div><div class="oss-controls">' +
      '<div class="oss-lang" role="group" aria-label="Language">' +
      '<button type="button" data-lang="en" class="' + (L === 'en' ? 'on' : '') + '">EN</button>' +
      '<button type="button" data-lang="ua" class="' + (L === 'ua' ? 'on' : '') + '">UA</button>' +
      '<button type="button" data-lang="ru" class="' + (L === 'ru' ? 'on' : '') + '">RU</button></div>' +
      '<button type="button" class="oss-theme" id="ossThemeBtn">' +
      (document.documentElement.getAttribute('data-theme') === 'dark' ? t('themeLight') : t('themeDark')) +
      '</button></div></div><nav class="oss-nav">' +
      '<a href="index.html" class="' + (pid === 'home' ? 'on' : '') + '">' + t('nav_home') + '</a>' +
      '<a href="core.html" class="' + (pid === 'core' ? 'on' : '') + '">' + t('nav_core') + '</a>' +
      '<a href="economy.html" class="' + (pid === 'econ' ? 'on' : '') + '">' + t('nav_econ') + '</a>' +
      '<a href="accountability.html" class="' + (pid === 'acc' ? 'on' : '') + '">' + t('nav_acc') + '</a>' +
      '<a href="OSS_Polis_MVP_v3.html" class="' + (pid === 'civic' ? 'on' : '') + '">' + t('nav_civic') + '</a>' +
      '<a href="memory.html" class="' + (pid === 'mem' ? 'on' : '') + '">' + t('nav_mem') + '</a>' +
      '<a href="rating.html" class="' + (pid === 'rate' ? 'on' : '') + '">' + t('nav_rate') + '</a>' +
      '<a href="OSS_Court_MVP_v8.html" class="' + (pid === 'court' ? 'on' : '') + '">' + t('nav_court') + '</a>' +
      '<a href="mindmap.html" class="' + (pid === 'map' ? 'on' : '') + '">' + t('nav_map') + '</a>' +
      '<a href="open-questions.html" class="' + (pid === 'open' ? 'on' : '') + '">' + t('nav_open') + '</a>' +
      '<a href="participate.html" class="' + (pid === 'join' ? 'on' : '') + '">' + t('nav_join') + '</a>' +
      '</nav></div>';
    document.body.prepend(el);
    document.body.classList.add('oss-has-header');
    el.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem(LANG_KEY, btn.getAttribute('data-lang'));
        location.reload();
      });
    });
    var tb = el.querySelector('#ossThemeBtn');
    tb.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem(THEME_KEY, 'light'); }
      else { document.documentElement.setAttribute('data-theme', 'dark'); localStorage.setItem(THEME_KEY, 'dark'); }
      tb.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? t('themeLight') : t('themeDark');
    });
  }
  
  function syncHeaderHeight() {
    var h = document.getElementById('oss-site-header');
    if (!h) return;
    var px = Math.ceil(h.getBoundingClientRect().height);
    if (px > 0) document.documentElement.style.setProperty('--header-h', px + 'px');
  }
  window.syncHeaderHeight = syncHeaderHeight;

  function applyThemeEarly() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches))
      document.documentElement.setAttribute('data-theme', 'dark');
  }
  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      var val = t(key);
      if (node.getAttribute('data-i18n-html') === '1') node.innerHTML = val;
      else node.textContent = val;
    });
    var L = lang();
    document.querySelectorAll('[data-i18n-en]').forEach(function (node) {
      var v = node.getAttribute('data-i18n-' + L) || node.getAttribute('data-i18n-en');
      if (v == null) return;
      if (node.getAttribute('data-i18n-html') === '1') node.innerHTML = v;
      else node.textContent = v;
    });
    document.documentElement.lang = lang() === 'ua' ? 'ua' : (lang() === 'ru' ? 'ru' : 'en');
    var titles = {
      home: { en: 'OSS — Operating System of Society', ua: 'ОСС — Операційна Система Суспільства', ru: 'ОСО — Операционная Система Общества' },
      core: { en: 'Core — OSS', ua: 'Ядро — ОСС', ru: 'Ядро — ОСО' },
      econ: { en: 'Economy — OSS', ua: 'Економіка — ОСС', ru: 'Экономика — ОСО' },
      acc: { en: 'Accountability — OSS', ua: 'Підзвітність — ОСС', ru: 'Подотчётность — ОСО' },
      open: { en: 'Open questions — OSS', ua: 'Відкриті питання — ОСС', ru: 'Открытые вопросы — ОСО' },
      join: { en: 'Participate — OSS', ua: 'Участь — ОСС', ru: 'Участвовать — ОСО' },
      civic: { en: 'Civic layer — OSS', ua: 'Громадянський шар — ОСС', ru: 'Гражданский слой — ОСО' },
      court: { en: 'Court demo — OSS', ua: 'Суд (демо) — ОСС', ru: 'Суд (демо) — ОСО' },
      map: { en: 'Mind map — OSS', ua: 'Карта — ОСС', ru: 'Карта — ОСО' },
      mem: { en: 'Public memory — OSS', ua: 'Публічна памʼять — ОСС', ru: 'Публичная память — ОСО' },
      rate: { en: 'Rating system — OSS', ua: 'Рейтингова система — ОСС', ru: 'Рейтинговая система — ОСО' }
    };
    var pack = titles[pageId()] || titles.home;
    var titleEl = document.querySelector('title');
    if (titleEl && pack) titleEl.textContent = pack[lang()] || pack.en;
  }
  applyThemeEarly();
  function boot() { injectHeader(); applyI18n(); syncHeaderHeight(); requestAnimationFrame(syncHeaderHeight); setTimeout(syncHeaderHeight, 50); setTimeout(syncHeaderHeight, 200); window.addEventListener("resize", syncHeaderHeight); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
