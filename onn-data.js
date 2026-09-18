// Oxford Newman Network — content + Supabase data layer.
// The DEFAULTS below are what the site shows before (or without) Supabase.
// Once Supabase is connected, anything saved in the admin page overrides them.

export const DEFAULTS = {
  home: {
    kicker: 'St John Henry Newman · 1801–1890',
    quote: '“I am a link in a chain, a bond of connexion between persons”',
    strapline: 'A network of scholars, students and friends of Newman in Oxford and beyond — meeting for termly seminars, marking the life he began here, and sharing what is new in Newman studies.'
  },
  term: 'Michaelmas Term 2026',
  seminars: [
    { week: 'Week 3', date: '22 Oct', title: 'Paper to be confirmed', speaker: 'Speaker to be announced', where: 'MacGregor Room, Oriel College, 5.30 pm' },
    { week: 'Week 5', date: '5 Nov', title: 'Paper to be confirmed', speaker: 'Speaker to be announced', where: 'MacGregor Room, Oriel College, 5.30 pm' },
    { week: 'Week 7', date: '19 Nov', title: 'Paper to be confirmed', speaker: 'Speaker to be announced', where: 'MacGregor Room, Oriel College, 5.30 pm' }
  ],
  pastTerms: [
    { term: 'Trinity Term 2026', note: 'Programme to be added.' },
    { term: 'Hilary Term 2026', note: 'Programme to be added.' },
    { term: 'Michaelmas Term 2025', note: 'Programme to be added.' }
  ],
  news: [
    {
      id: 'oriel', date: '4 Sept 2026', kind: 'Papal audience',
      title: 'Papal audience for the Provost, Fellows and members of Oriel College',
      body: 'On Friday 4 September Pope Leo XIV met with the Provost, Fellows and members of Oriel College, Oxford — the college where Newman was elected Fellow in 1822, the event he called the turning point of his life.',
      slot: 'news-oriel-delegation', photo: '', imageHint: 'Oriel delegation with Pope Leo',
      caption: 'The Oriel delegation with Pope Leo XIV, 4 September 2026.',
      extractLabel: 'Address of the Holy Father',
      extract: [
        'The text of the Pope\u2019s address to the delegation will be printed here in full, together with the statement made by the Provost of Oriel on the audience.',
        'Both are linked below until the texts are set out on this page.'
      ],
      href: 'https://www.oriel.ox.ac.uk/news/statement-from-the-provost-on-the-papal-audience/',
      linkLabel: 'Statement from the Provost'
    },
    {
      id: 'convergence', date: '29 March 2026', kind: 'Conference panel',
      title: 'Newman panel at the Convergence conference, ‘Seeds of New Hope’',
      body: 'A special panel on John Henry Newman took place at Corpus Christi College, Oxford, co-hosted by the Oxford Newman Network. Starting from Pope Leo\u2019s homily for the proclamation, the panel spoke about how Newman\u2019s thinking can help in ‘drawing new maps of hope’ to navigate the challenges of a wounded world.',
      slot: 'news-convergence-panel', photo: '', imageHint: 'Panel or exhibition photograph',
      caption: 'A Newman exhibition of twenty-six large panels was hosted alongside the conference.',
      extractLabel: 'Speakers',
      extract: [
        'Prof. Michael Hurley, Trinity College, Cambridge · Dr Rebekah Lamb, University of St Andrews · Dr Paul Shrimpton, Magdalen College School, Oxford.',
        'Chair: Prof. Giuseppe Pezzini, Corpus Christi College, Oxford. Recordings of the presentations are available from the conference site.'
      ],
      href: 'https://convergenceuk.org/drawing-maps-of-new-hope', linkLabel: 'Hear the recordings'
    },
    {
      id: 'doctor', date: '1 Nov 2025', kind: 'Proclamation',
      title: 'Newman proclaimed Doctor of the Universal Church',
      body: 'On the Solemnity of All Saints, Pope Leo XIV solemnly declared that, on account of his eminent teaching, St John Henry Newman was to be numbered among the Doctors of the Universal Church. Of the thirty-eight Doctors, the only other Englishman is Bede.',
      slot: 'news-doctor', photo: './assets/doctor-of-the-church.jpg', imageHint: 'Proclamation photograph',
      caption: 'The proclamation at Mass in St Peter\u2019s Square, 1 November 2025.',
      extractLabel: 'From the homily of Pope Leo XIV',
      extract: [
        '‘Newman\u2019s impressive spiritual and cultural stature will surely serve as an inspiration to new generations whose hearts thirst for the infinite, and who, through research and knowledge, are willing to undertake that journey which, as the ancients said, takes us per aspera ad astra, through difficulties to the stars.’',
        '‘The task of education is precisely to offer this Kindly Light to those who might otherwise remain imprisoned by the particularly insidious shadows of pessimism and fear. Let us disarm the false reasons for resignation and powerlessness, and let us share the great reasons for hope in today\u2019s world.’',
        '‘We can say, then, that from a Christian perspective education helps everyone to become saints. Nothing less will do.’'
      ],
      href: 'https://www.vatican.va/content/leo-xiv/en/homilies/2025/documents/20251101-messa-giubileo-formatori.html',
      linkLabel: 'Read the full homily'
    },
    {
      id: 'copatron', date: '27 Oct 2025', kind: 'Proclamation',
      title: 'Newman named Co-patron of the Church\u2019s educational mission',
      body: 'Pope Leo XIV declared the author of The Idea of a University co-patron of the Church\u2019s educational mission alongside St Thomas Aquinas, in the Apostolic Letter ‘Seeds of Hope’ — a fitting charge for the founder of a university and of a school.',
      slot: 'news-copatron', photo: './assets/copatron-education.jpg', imageHint: 'Portrait at St Peter\u2019s',
      caption: 'Newman\u2019s portrait hung from the loggia of St Peter\u2019s.',
      extractLabel: 'From ‘Seeds of Hope’',
      extract: [
        '‘Religious Truth is not only a portion, but a condition of general knowledge.’ These words of Saint John Henry Newman — whom, in the context of this Jubilee of the World of Education, I have the great joy of declaring co-patron of the Church\u2019s educational mission together with Saint Thomas Aquinas — are an invitation to renew our commitment to knowledge that is as intellectually responsible and rigorous as it is deeply human.',
        '‘Cor ad cor loquitur was Saint John Henry Newman\u2019s cardinal\u2019s motto, taken from a letter of Saint Francis de Sales: “Sincerity of heart, not abundance of words, touches the hearts of men”.’',
        '‘Following in the wake of the thought of Saint John Henry Newman, it goes against a strictly mercantilist approach that often forces education today to be measured in terms of functionality and practical utility.’'
      ],
      href: 'https://www.vatican.va/content/leo-xiv/en/apost_letters/documents/20251027-disegnare-nuove-mappe.html',
      linkLabel: 'Read the Apostolic Letter'
    }
  ],
  chronology: [
    { heading: 'Before Oxford', span: '1801–1816', items: [
      { year: '1801', what: 'Born in London, 21 February, the eldest child of John Newman, banker, and Jemima Fourdrinier.' },
      { year: '1808', what: 'Sent to Dr Nicholas\u2019s school at Ealing.' },
      { year: '1816', what: 'The failure of the family bank and a serious illness; the autumn of his first conversion, and of the conviction that it was the will of God he should lead a single life.' }
    ]},
    { heading: 'Trinity College', span: '1817–1822', items: [
      { year: '1817', what: 'Matriculates at Trinity College in June, aged sixteen; comes into residence and wins a scholarship the following year.' },
      { year: '1820', what: 'Overworked in the Schools, he takes a fourth class in Literae Humaniores.' },
      { year: '1821', what: 'Remains in Oxford reading for a fellowship, supported by his Trinity scholarship.' }
    ]},
    { heading: 'Fellow and tutor of Oriel', span: '1822–1832', items: [
      { year: '1822', what: 'Elected Fellow of Oriel College on 12 April — ‘the turning point of his life, and of a life not without turning points’.' },
      { year: '1824', what: 'Ordained deacon in Christ Church Cathedral; curate of St Clement\u2019s, Oxford.' },
      { year: '1825', what: 'Ordained priest; Vice-Principal of Alban Hall under Richard Whately.' },
      { year: '1826', what: 'Appointed tutor of Oriel; begins the friendship with Hurrell Froude and Robert Wilberforce.' },
      { year: '1828', what: 'Instituted Vicar of the University Church of St Mary the Virgin; the death of his sister Mary.' },
      { year: '1830', what: 'Deprived of his tutorship after a dispute with the Provost over the pastoral care of undergraduates.' },
      { year: '1831–32', what: 'Writes The Arians of the Fourth Century; preaches the parochial sermons that fill St Mary\u2019s on Sunday afternoons.' }
    ]},
    { heading: 'The Mediterranean and the Oxford Movement', span: '1832–1841', items: [
      { year: '1832', what: 'Sails for the Mediterranean with the Froudes in December.' },
      { year: '1833', what: 'Gravely ill in Sicily; writes ‘Lead, Kindly Light’ becalmed in the Straits of Bonifacio, June. Keble\u2019s Assize Sermon in July; Newman launches the Tracts for the Times in September.' },
      { year: '1834', what: 'The first volume of Parochial and Plain Sermons.' },
      { year: '1836', what: 'Death of Hurrell Froude; Newman becomes the acknowledged leader of the Movement.' },
      { year: '1837', what: 'Lectures on the Prophetical Office of the Church.' },
      { year: '1838', what: 'Editor of the British Critic.' },
      { year: '1841', what: 'Tract 90 published in February and censured by the Heads of Houses; the bishops\u2019 charges follow.' }
    ]},
    { heading: 'Littlemore and the parting of friends', span: '1842–1845', items: [
      { year: '1842', what: 'Retires to Littlemore with a small community; a life of study, fasting and prayer.' },
      { year: '1843', what: 'Retracts his hard words against Rome; resigns the living of St Mary\u2019s and preaches ‘The Parting of Friends’ at Littlemore in September.' },
      { year: '1845', what: 'Resigns his Oriel fellowship; received into the Catholic Church by Blessed Dominic Barberi at Littlemore on 9 October. Publishes An Essay on the Development of Christian Doctrine.' }
    ]},
    { heading: 'After Oxford', span: '1846–1890', items: [
      { year: '1847', what: 'Ordained a Catholic priest in Rome; joins the Oratory of St Philip Neri.' },
      { year: '1849', what: 'Founds the Birmingham Oratory.' },
      { year: '1852', what: 'Delivers the lectures published as The Idea of a University; Rector of the Catholic University of Ireland from 1854.' },
      { year: '1859', what: 'Founds the Oratory School at Edgbaston.' },
      { year: '1864', what: 'Writes the Apologia Pro Vita Sua.' },
      { year: '1870', what: 'An Essay in Aid of a Grammar of Assent.' },
      { year: '1878', what: 'Elected the first Honorary Fellow of Trinity College and returns to Oxford after thirty-two years.' },
      { year: '1879', what: 'Created Cardinal by Leo XIII, taking as his motto Cor ad cor loquitur.' },
      { year: '1890', what: 'Dies at Edgbaston on 11 August; buried at Rednal. ‘Ex umbris et imaginibus in veritatem.’' }
    ]},
    { heading: 'The cause', span: '1958–2025', items: [
      { year: '1958', what: 'The cause for his canonisation is opened.' },
      { year: '1991', what: 'Declared Venerable by John Paul II.' },
      { year: '2010', what: 'Beatified by Benedict XVI at Cofton Park, Birmingham, 19 September.' },
      { year: '2019', what: 'Canonised by Pope Francis in Rome, 13 October.' },
      { year: '2025', what: 'Proclaimed Doctor of the Universal Church and named co-patron of the Church\u2019s educational mission by Leo XIV.' }
    ]}
  ],
  conferences: [
    {
      when: '29 March 2026', place: 'Corpus Christi College, Oxford',
      title: '‘Drawing New Maps of Hope’: a panel on John Henry Newman',
      body: 'A special panel co-hosted by the Oxford Newman Network at the Convergence conference, ‘Seeds of New Hope’. Starting from Pope Leo\u2019s homily for the proclamation of Newman as Doctor of the Church, the speakers asked how his thinking can help in drawing new maps of hope for a wounded world. A Newman exhibition of twenty-six large panels was shown alongside the conference.',
      href: 'https://convergenceuk.org/drawing-maps-of-new-hope', linkLabel: 'Recordings of the presentations',
      listLabel: 'Speakers and chair',
      people: ['Prof. Michael Hurley — Trinity College, Cambridge', 'Dr Rebekah Lamb — University of St Andrews', 'Dr Paul Shrimpton — Magdalen College School, Oxford', 'Chair: Prof. Giuseppe Pezzini — Corpus Christi College, Oxford']
    },
    {
      when: 'To be announced', place: 'Oxford',
      title: 'A day conference on Newman and education',
      body: 'Following the naming of Newman as co-patron of the Church\u2019s educational mission, the Network is preparing a day conference on The Idea of a University and on his practice as a tutor and schoolmaster. Details will be announced here and in the newsletter.',
      href: 'mailto:Newmanseminars@gmail.com?subject=Newman%20and%20education%20conference', linkLabel: 'Ask to be kept informed',
      listLabel: 'In preparation',
      people: ['Call for papers — to follow', 'Venue and date — to be confirmed', 'Registration will open in the newsletter']
    }
  ],
  people: [
    { slot: 'person-1', photo: '', name: 'Name', role: 'Convenor', note: 'A short biography of two or three lines goes here.' },
    { slot: 'person-2', photo: '', name: 'Name', role: 'Seminar secretary', note: 'A short biography of two or three lines goes here.' },
    { slot: 'person-3', photo: '', name: 'Name', role: 'Member', note: 'A short biography of two or three lines goes here.' }
  ]
};

export const SECTIONS = ['home', 'term', 'seminars', 'pastTerms', 'news', 'chronology', 'conferences', 'people'];

function cfg() {
  const c = (typeof window !== 'undefined' && window.ONN_CONFIG) || {};
  return (c.url && c.anonKey) ? c : null;
}

export function isConfigured() { return !!cfg(); }

let clientPromise = null;
export function getClient() {
  const c = cfg();
  if (!c) return Promise.resolve(null);
  if (!clientPromise) {
    clientPromise = import('https://esm.sh/@supabase/supabase-js@2')
      .then((m) => m.createClient(c.url, c.anonKey))
      .catch(() => null);
  }
  return clientPromise;
}

// Reads every saved section and merges it over DEFAULTS. Never throws.
export async function loadContent() {
  const merged = JSON.parse(JSON.stringify(DEFAULTS));
  try {
    const sb = await getClient();
    if (!sb) return merged;
    const { data, error } = await sb.from('content').select('key, value');
    if (error || !data) return merged;
    data.forEach((row) => { if (row && row.key) merged[row.key] = row.value; });
  } catch (e) { /* offline or misconfigured — fall back to DEFAULTS */ }
  return merged;
}

export async function saveSection(key, value) {
  const sb = await getClient();
  if (!sb) throw new Error('Supabase is not configured yet.');
  const { error } = await sb.from('content').upsert({ key, value, updated_at: new Date().toISOString() });
  if (error) throw error;
  return true;
}

export async function signIn(email, password) {
  const sb = await getClient();
  if (!sb) throw new Error('Supabase is not configured yet.');
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

export async function signOut() {
  const sb = await getClient();
  if (sb) await sb.auth.signOut();
}

export async function currentUser() {
  try {
    const sb = await getClient();
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    return (data && data.session && data.session.user) || null;
  } catch (e) { return null; }
}

// Uploads a File to the public 'images' bucket and returns its URL.
export async function uploadImage(file) {
  const sb = await getClient();
  if (!sb) throw new Error('Supabase is not configured yet.');
  const safe = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '-').toLowerCase();
  const path = Date.now() + '-' + safe;
  const { error } = await sb.storage.from('images').upload(path, file, { cacheControl: '3600', upsert: false });
  if (error) throw error;
  const { data } = sb.storage.from('images').getPublicUrl(path);
  return data.publicUrl;
}
