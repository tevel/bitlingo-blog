/**
 * Word of the Day Database
 * Contains vocabulary words for each supported language with translations,
 * pronunciations, examples, and difficulty levels.
 */

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface WordEntry {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  exampleTranslation: string;
  level: CEFRLevel;
  category: string;
}

export interface LanguageWords {
  [key: string]: WordEntry[];
}

// Word database organized by target language
// Each language has words that English speakers would learn
export const wordDatabase: LanguageWords = {
  es: [
    { word: 'mariposa', pronunciation: 'mah-ree-POH-sah', partOfSpeech: 'noun', definition: 'butterfly', example: 'La mariposa vuela en el jardín.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'desayuno', pronunciation: 'deh-sah-YOO-noh', partOfSpeech: 'noun', definition: 'breakfast', example: 'El desayuno es la comida más importante.', exampleTranslation: 'Breakfast is the most important meal.', level: 'A1', category: 'food' },
    { word: 'aprovechar', pronunciation: 'ah-proh-beh-CHAR', partOfSpeech: 'verb', definition: 'to take advantage of, to make the most of', example: 'Hay que aprovechar el tiempo.', exampleTranslation: 'We must make the most of time.', level: 'B1', category: 'verbs' },
    { word: 'atardecer', pronunciation: 'ah-tar-deh-SER', partOfSpeech: 'noun', definition: 'sunset, dusk', example: 'El atardecer en la playa es hermoso.', exampleTranslation: 'The sunset at the beach is beautiful.', level: 'A2', category: 'nature' },
    { word: 'estrenar', pronunciation: 'ehs-treh-NAR', partOfSpeech: 'verb', definition: 'to wear/use for the first time', example: 'Voy a estrenar mis zapatos nuevos.', exampleTranslation: "I'm going to wear my new shoes for the first time.", level: 'B1', category: 'verbs' },
    { word: 'sobremesa', pronunciation: 'soh-breh-MEH-sah', partOfSpeech: 'noun', definition: 'after-meal conversation time', example: 'La sobremesa duró dos horas.', exampleTranslation: 'The after-meal chat lasted two hours.', level: 'B2', category: 'culture' },
    { word: 'madrugar', pronunciation: 'mah-droo-GAR', partOfSpeech: 'verb', definition: 'to wake up early', example: 'Tengo que madrugar mañana.', exampleTranslation: 'I have to wake up early tomorrow.', level: 'A2', category: 'verbs' },
  ],
  fr: [
    { word: 'papillon', pronunciation: 'pah-pee-YON', partOfSpeech: 'noun', definition: 'butterfly', example: 'Le papillon se pose sur la fleur.', exampleTranslation: 'The butterfly lands on the flower.', level: 'A1', category: 'nature' },
    { word: 'petit-déjeuner', pronunciation: 'puh-TEE day-zhuh-NAY', partOfSpeech: 'noun', definition: 'breakfast', example: 'Je prends mon petit-déjeuner à 8h.', exampleTranslation: 'I have my breakfast at 8am.', level: 'A1', category: 'food' },
    { word: 'dépaysement', pronunciation: 'day-pay-eez-MON', partOfSpeech: 'noun', definition: 'feeling of being in a foreign place', example: "J'adore le dépaysement des voyages.", exampleTranslation: 'I love the feeling of being abroad when traveling.', level: 'B2', category: 'culture' },
    { word: 'flâner', pronunciation: 'flah-NAY', partOfSpeech: 'verb', definition: 'to stroll leisurely', example: "J'aime flâner dans les rues de Paris.", exampleTranslation: 'I like to stroll through the streets of Paris.', level: 'B1', category: 'verbs' },
    { word: 'retrouvailles', pronunciation: 'ruh-troov-EYE', partOfSpeech: 'noun', definition: 'reunion (joyful)', example: 'Les retrouvailles étaient émouvantes.', exampleTranslation: 'The reunion was moving.', level: 'B2', category: 'emotions' },
    { word: 'bricolage', pronunciation: 'bree-koh-LAZH', partOfSpeech: 'noun', definition: 'DIY, tinkering', example: 'Le bricolage est son passe-temps préféré.', exampleTranslation: 'DIY is his favorite hobby.', level: 'A2', category: 'hobbies' },
    { word: 'épanouir', pronunciation: 'ay-pah-noo-EER', partOfSpeech: 'verb', definition: 'to flourish, bloom', example: "Elle s'épanouit dans son nouveau travail.", exampleTranslation: 'She is flourishing in her new job.', level: 'B1', category: 'verbs' },
  ],
  de: [
    { word: 'Schmetterling', pronunciation: 'SHMET-ter-ling', partOfSpeech: 'noun', definition: 'butterfly', example: 'Der Schmetterling fliegt im Garten.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'Frühstück', pronunciation: 'FROO-shtook', partOfSpeech: 'noun', definition: 'breakfast', example: 'Das Frühstück ist fertig.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'Fernweh', pronunciation: 'FERN-vay', partOfSpeech: 'noun', definition: 'longing for distant places', example: 'Ich habe Fernweh nach Japan.', exampleTranslation: 'I have a longing to travel to Japan.', level: 'B2', category: 'emotions' },
    { word: 'Gemütlichkeit', pronunciation: 'geh-MOOT-likh-kite', partOfSpeech: 'noun', definition: 'cozy comfort, warmth', example: 'Die Gemütlichkeit des Cafés war wunderbar.', exampleTranslation: 'The cozy atmosphere of the café was wonderful.', level: 'B1', category: 'culture' },
    { word: 'Schadenfreude', pronunciation: 'SHAH-den-froy-deh', partOfSpeech: 'noun', definition: 'pleasure from others misfortune', example: 'Schadenfreude ist keine gute Eigenschaft.', exampleTranslation: 'Taking pleasure in others misfortune is not a good trait.', level: 'B2', category: 'emotions' },
    { word: 'Zeitgeist', pronunciation: 'TSAIT-gaist', partOfSpeech: 'noun', definition: 'spirit of the times', example: 'Das Buch fängt den Zeitgeist ein.', exampleTranslation: 'The book captures the spirit of the times.', level: 'C1', category: 'culture' },
    { word: 'wandern', pronunciation: 'VAN-dern', partOfSpeech: 'verb', definition: 'to hike', example: 'Wir wandern jeden Sonntag.', exampleTranslation: 'We hike every Sunday.', level: 'A2', category: 'verbs' },
  ],
  it: [
    { word: 'farfalla', pronunciation: 'far-FAL-la', partOfSpeech: 'noun', definition: 'butterfly', example: 'La farfalla vola nel giardino.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'colazione', pronunciation: 'koh-lat-SYOH-neh', partOfSpeech: 'noun', definition: 'breakfast', example: 'La colazione italiana è leggera.', exampleTranslation: 'Italian breakfast is light.', level: 'A1', category: 'food' },
    { word: 'passeggiata', pronunciation: 'pas-sed-JAH-ta', partOfSpeech: 'noun', definition: 'leisurely walk/stroll', example: 'Facciamo una passeggiata serale.', exampleTranslation: "Let's take an evening stroll.", level: 'A2', category: 'culture' },
    { word: 'abbiocco', pronunciation: 'ab-BYOK-ko', partOfSpeech: 'noun', definition: 'drowsiness after a big meal', example: "Ho l'abbiocco dopo pranzo.", exampleTranslation: 'I feel drowsy after lunch.', level: 'B2', category: 'culture' },
    { word: 'sprezzatura', pronunciation: 'spret-sa-TOO-ra', partOfSpeech: 'noun', definition: 'studied carelessness, effortless elegance', example: 'Veste con sprezzatura.', exampleTranslation: 'He dresses with effortless elegance.', level: 'C1', category: 'culture' },
    { word: 'meriggiare', pronunciation: 'meh-rid-JAH-reh', partOfSpeech: 'verb', definition: 'to rest at noon', example: 'Mi piace meriggiare in estate.', exampleTranslation: 'I like to rest at noon in summer.', level: 'B2', category: 'verbs' },
    { word: 'sorriso', pronunciation: 'sor-REE-zo', partOfSpeech: 'noun', definition: 'smile', example: 'Il suo sorriso è contagioso.', exampleTranslation: 'Her smile is contagious.', level: 'A1', category: 'emotions' },
  ],
  pt: [
    { word: 'borboleta', pronunciation: 'bor-bo-LEH-ta', partOfSpeech: 'noun', definition: 'butterfly', example: 'A borboleta pousa na flor.', exampleTranslation: 'The butterfly lands on the flower.', level: 'A1', category: 'nature' },
    { word: 'café da manhã', pronunciation: 'ka-FEH da man-YAH', partOfSpeech: 'noun', definition: 'breakfast', example: 'O café da manhã está pronto.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'saudade', pronunciation: 'saw-DAH-jee', partOfSpeech: 'noun', definition: 'deep longing, nostalgic yearning', example: 'Tenho saudade de casa.', exampleTranslation: 'I miss home deeply.', level: 'B1', category: 'emotions' },
    { word: 'cafuné', pronunciation: 'ka-foo-NEH', partOfSpeech: 'noun', definition: 'running fingers through hair', example: 'Adoro receber cafuné.', exampleTranslation: 'I love having my hair stroked.', level: 'B2', category: 'culture' },
    { word: 'desenrascar', pronunciation: 'deh-zen-has-KAR', partOfSpeech: 'verb', definition: 'to improvise a solution', example: 'Vou me desenrascar de alguma forma.', exampleTranslation: "I'll figure something out somehow.", level: 'B1', category: 'verbs' },
    { word: 'apaixonado', pronunciation: 'a-pai-sho-NAH-do', partOfSpeech: 'adj', definition: 'passionate, in love', example: 'Estou apaixonado por música.', exampleTranslation: "I'm passionate about music.", level: 'A2', category: 'emotions' },
    { word: 'aconchego', pronunciation: 'a-kon-SHEH-go', partOfSpeech: 'noun', definition: 'warm embrace, cozy feeling', example: 'O aconchego do lar é especial.', exampleTranslation: 'The coziness of home is special.', level: 'B1', category: 'emotions' },
  ],
  ja: [
    { word: '木漏れ日', pronunciation: 'ko-mo-re-bi', partOfSpeech: 'noun', definition: 'sunlight filtering through trees', example: '木漏れ日が美しい。', exampleTranslation: 'The sunlight through the trees is beautiful.', level: 'B2', category: 'nature' },
    { word: '朝ごはん', pronunciation: 'a-sa-go-han', partOfSpeech: 'noun', definition: 'breakfast', example: '朝ごはんを食べました。', exampleTranslation: 'I ate breakfast.', level: 'A1', category: 'food' },
    { word: '懐かしい', pronunciation: 'na-tsu-ka-shi-i', partOfSpeech: 'adj', definition: 'nostalgic, fondly remembered', example: '懐かしい思い出です。', exampleTranslation: 'It is a nostalgic memory.', level: 'B1', category: 'emotions' },
    { word: 'わびさび', pronunciation: 'wa-bi-sa-bi', partOfSpeech: 'noun', definition: 'beauty in imperfection', example: 'わびさびの美学を感じる。', exampleTranslation: 'I feel the aesthetic of wabi-sabi.', level: 'C1', category: 'culture' },
    { word: '頑張る', pronunciation: 'gan-ba-ru', partOfSpeech: 'verb', definition: 'to do ones best, persevere', example: '今日も頑張ります。', exampleTranslation: "I'll do my best today too.", level: 'A2', category: 'verbs' },
    { word: 'おもてなし', pronunciation: 'o-mo-te-na-shi', partOfSpeech: 'noun', definition: 'wholehearted hospitality', example: '日本のおもてなしは有名です。', exampleTranslation: 'Japanese hospitality is famous.', level: 'B1', category: 'culture' },
    { word: '生きがい', pronunciation: 'i-ki-ga-i', partOfSpeech: 'noun', definition: 'reason for being, purpose', example: '仕事が私の生きがいです。', exampleTranslation: 'Work is my reason for living.', level: 'B2', category: 'culture' },
  ],
  ko: [
    { word: '나비', pronunciation: 'na-bi', partOfSpeech: 'noun', definition: 'butterfly', example: '나비가 날고 있어요.', exampleTranslation: 'The butterfly is flying.', level: 'A1', category: 'nature' },
    { word: '아침', pronunciation: 'a-chim', partOfSpeech: 'noun', definition: 'morning, breakfast', example: '아침을 먹었어요.', exampleTranslation: 'I ate breakfast.', level: 'A1', category: 'food' },
    { word: '정', pronunciation: 'jeong', partOfSpeech: 'noun', definition: 'deep emotional bond, affection', example: '정이 많은 사람이에요.', exampleTranslation: 'They are a very affectionate person.', level: 'B1', category: 'emotions' },
    { word: '화이팅', pronunciation: 'hwa-i-ting', partOfSpeech: 'interjection', definition: 'fighting! (encouragement)', example: '시험 화이팅!', exampleTranslation: 'Good luck on your exam!', level: 'A1', category: 'culture' },
    { word: '눈치', pronunciation: 'nun-chi', partOfSpeech: 'noun', definition: 'social awareness, reading the room', example: '눈치가 빨라요.', exampleTranslation: 'They are quick to read situations.', level: 'B2', category: 'culture' },
    { word: '한', pronunciation: 'han', partOfSpeech: 'noun', definition: 'deep sorrow, collective grief', example: '한이 서린 노래예요.', exampleTranslation: 'It is a song filled with deep sorrow.', level: 'C1', category: 'emotions' },
    { word: '사랑', pronunciation: 'sa-rang', partOfSpeech: 'noun', definition: 'love', example: '사랑해요.', exampleTranslation: 'I love you.', level: 'A1', category: 'emotions' },
  ],
  zh: [
    { word: '蝴蝶', pronunciation: 'hú dié', partOfSpeech: 'noun', definition: 'butterfly', example: '蝴蝶在花园里飞。', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: '早餐', pronunciation: 'zǎo cān', partOfSpeech: 'noun', definition: 'breakfast', example: '早餐很重要。', exampleTranslation: 'Breakfast is important.', level: 'A1', category: 'food' },
    { word: '缘分', pronunciation: 'yuán fèn', partOfSpeech: 'noun', definition: 'fate, destiny (especially in relationships)', example: '这是我们的缘分。', exampleTranslation: 'This is our destiny.', level: 'B1', category: 'culture' },
    { word: '加油', pronunciation: 'jiā yóu', partOfSpeech: 'interjection', definition: 'go for it! keep it up!', example: '加油！你能行！', exampleTranslation: 'Keep going! You can do it!', level: 'A1', category: 'culture' },
    { word: '面子', pronunciation: 'miàn zi', partOfSpeech: 'noun', definition: 'face, reputation, dignity', example: '要给他面子。', exampleTranslation: 'Give him face (respect).', level: 'B2', category: 'culture' },
    { word: '幸福', pronunciation: 'xìng fú', partOfSpeech: 'noun/adj', definition: 'happiness, blessed', example: '我很幸福。', exampleTranslation: 'I am very happy.', level: 'A2', category: 'emotions' },
    { word: '努力', pronunciation: 'nǔ lì', partOfSpeech: 'verb/noun', definition: 'to work hard, effort', example: '我会努力学习。', exampleTranslation: 'I will study hard.', level: 'A2', category: 'verbs' },
  ],
  ru: [
    { word: 'бабочка', pronunciation: 'BA-boch-ka', partOfSpeech: 'noun', definition: 'butterfly', example: 'Бабочка летает в саду.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'завтрак', pronunciation: 'ZAV-trak', partOfSpeech: 'noun', definition: 'breakfast', example: 'Завтрак готов.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'тоска', pronunciation: 'tas-KA', partOfSpeech: 'noun', definition: 'deep melancholy, yearning', example: 'Тоска по родине.', exampleTranslation: 'Longing for homeland.', level: 'B2', category: 'emotions' },
    { word: 'душа', pronunciation: 'du-SHA', partOfSpeech: 'noun', definition: 'soul', example: 'Он - душа компании.', exampleTranslation: 'He is the life of the party.', level: 'A2', category: 'culture' },
    { word: 'авось', pronunciation: 'a-VOS', partOfSpeech: 'particle', definition: 'maybe it will work out (hopeful uncertainty)', example: 'Авось получится.', exampleTranslation: 'Maybe it will work out.', level: 'B2', category: 'culture' },
    { word: 'любовь', pronunciation: 'lyu-BOV', partOfSpeech: 'noun', definition: 'love', example: 'Любовь прекрасна.', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'улыбаться', pronunciation: 'u-ly-BA-tsa', partOfSpeech: 'verb', definition: 'to smile', example: 'Она всегда улыбается.', exampleTranslation: 'She always smiles.', level: 'A2', category: 'verbs' },
  ],
  ar: [
    { word: 'فراشة', pronunciation: 'fa-RA-sha', partOfSpeech: 'noun', definition: 'butterfly', example: 'الفراشة جميلة.', exampleTranslation: 'The butterfly is beautiful.', level: 'A1', category: 'nature' },
    { word: 'فطور', pronunciation: 'fu-TOOR', partOfSpeech: 'noun', definition: 'breakfast', example: 'الفطور جاهز.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'طرب', pronunciation: 'TA-rab', partOfSpeech: 'noun', definition: 'musical ecstasy', example: 'أحس بالطرب.', exampleTranslation: 'I feel musical ecstasy.', level: 'B2', category: 'culture' },
    { word: 'صبر', pronunciation: 'SA-br', partOfSpeech: 'noun', definition: 'patience', example: 'الصبر مفتاح الفرج.', exampleTranslation: 'Patience is the key to relief.', level: 'A2', category: 'emotions' },
    { word: 'كرم', pronunciation: 'KA-ram', partOfSpeech: 'noun', definition: 'generosity, hospitality', example: 'الكرم من شيم العرب.', exampleTranslation: 'Generosity is an Arab trait.', level: 'B1', category: 'culture' },
    { word: 'حب', pronunciation: 'HUBB', partOfSpeech: 'noun', definition: 'love', example: 'الحب جميل.', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'سعادة', pronunciation: 'sa-A-da', partOfSpeech: 'noun', definition: 'happiness', example: 'السعادة في القلب.', exampleTranslation: 'Happiness is in the heart.', level: 'A2', category: 'emotions' },
  ],
  hi: [
    { word: 'तितली', pronunciation: 'tit-lee', partOfSpeech: 'noun', definition: 'butterfly', example: 'तितली उड़ रही है।', exampleTranslation: 'The butterfly is flying.', level: 'A1', category: 'nature' },
    { word: 'नाश्ता', pronunciation: 'naash-ta', partOfSpeech: 'noun', definition: 'breakfast', example: 'नाश्ता तैयार है।', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'जुगाड़', pronunciation: 'ju-gaad', partOfSpeech: 'noun', definition: 'creative improvisation, hack', example: 'यह एक अच्छा जुगाड़ है।', exampleTranslation: 'This is a good hack.', level: 'B1', category: 'culture' },
    { word: 'प्यार', pronunciation: 'pyaar', partOfSpeech: 'noun', definition: 'love', example: 'प्यार सुंदर है।', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'अतिथि देवो भव', pronunciation: 'a-ti-thi de-vo bha-va', partOfSpeech: 'phrase', definition: 'the guest is god', example: 'भारत में अतिथि देवो भव का पालन होता है।', exampleTranslation: 'In India, guests are treated as gods.', level: 'B2', category: 'culture' },
    { word: 'खुशी', pronunciation: 'khu-shee', partOfSpeech: 'noun', definition: 'happiness', example: 'खुशी बांटने से बढ़ती है।', exampleTranslation: 'Happiness increases by sharing.', level: 'A1', category: 'emotions' },
    { word: 'मेहनत', pronunciation: 'meh-nat', partOfSpeech: 'noun', definition: 'hard work', example: 'मेहनत का फल मीठा होता है।', exampleTranslation: 'The fruit of hard work is sweet.', level: 'A2', category: 'verbs' },
  ],
  tr: [
    { word: 'kelebek', pronunciation: 'ke-le-BEK', partOfSpeech: 'noun', definition: 'butterfly', example: 'Kelebek bahçede uçuyor.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'kahvaltı', pronunciation: 'kah-val-TI', partOfSpeech: 'noun', definition: 'breakfast', example: 'Kahvaltı hazır.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'keyif', pronunciation: 'KEY-if', partOfSpeech: 'noun', definition: 'pleasure, enjoyment, good mood', example: 'Keyifle kahve içiyorum.', exampleTranslation: 'I am enjoying my coffee with pleasure.', level: 'A2', category: 'emotions' },
    { word: 'misafirperverlik', pronunciation: 'mi-sa-fir-per-ver-LIK', partOfSpeech: 'noun', definition: 'hospitality', example: 'Türk misafirperverliği meşhurdur.', exampleTranslation: 'Turkish hospitality is famous.', level: 'B1', category: 'culture' },
    { word: 'hüzün', pronunciation: 'hu-ZUN', partOfSpeech: 'noun', definition: 'melancholy, bittersweet sadness', example: 'İstanbul hüzün şehridir.', exampleTranslation: 'Istanbul is a city of melancholy.', level: 'B2', category: 'emotions' },
    { word: 'sevgi', pronunciation: 'sev-GI', partOfSpeech: 'noun', definition: 'love', example: 'Sevgi güzeldir.', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'çalışmak', pronunciation: 'cha-lish-MAK', partOfSpeech: 'verb', definition: 'to work', example: 'Çok çalışıyorum.', exampleTranslation: 'I am working a lot.', level: 'A1', category: 'verbs' },
  ],
  pl: [
    { word: 'motyl', pronunciation: 'MO-til', partOfSpeech: 'noun', definition: 'butterfly', example: 'Motyl lata w ogrodzie.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'śniadanie', pronunciation: 'shnya-DA-nye', partOfSpeech: 'noun', definition: 'breakfast', example: 'Śniadanie jest gotowe.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'tęsknota', pronunciation: 'tensh-KNO-ta', partOfSpeech: 'noun', definition: 'longing, yearning', example: 'Czuję tęsknotę za domem.', exampleTranslation: 'I feel longing for home.', level: 'B1', category: 'emotions' },
    { word: 'kombinować', pronunciation: 'kom-bi-NO-vach', partOfSpeech: 'verb', definition: 'to scheme, figure out creatively', example: 'Muszę coś wykombinować.', exampleTranslation: 'I need to figure something out.', level: 'B1', category: 'verbs' },
    { word: 'miłość', pronunciation: 'MI-woshch', partOfSpeech: 'noun', definition: 'love', example: 'Miłość jest piękna.', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'gościnność', pronunciation: 'gosh-CHIN-noshch', partOfSpeech: 'noun', definition: 'hospitality', example: 'Polska gościnność jest znana.', exampleTranslation: 'Polish hospitality is well-known.', level: 'B1', category: 'culture' },
    { word: 'uśmiech', pronunciation: 'U-shmyekh', partOfSpeech: 'noun', definition: 'smile', example: 'Jej uśmiech jest piękny.', exampleTranslation: 'Her smile is beautiful.', level: 'A1', category: 'emotions' },
  ],
  uk: [
    { word: 'метелик', pronunciation: 'me-te-LYK', partOfSpeech: 'noun', definition: 'butterfly', example: 'Метелик літає в саду.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'сніданок', pronunciation: 'SNEE-da-nok', partOfSpeech: 'noun', definition: 'breakfast', example: 'Сніданок готовий.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'туга', pronunciation: 'TU-ha', partOfSpeech: 'noun', definition: 'yearning, sorrow', example: 'Я відчуваю тугу за батьківщиною.', exampleTranslation: 'I feel longing for my homeland.', level: 'B2', category: 'emotions' },
    { word: 'кохання', pronunciation: 'ko-KHAN-nya', partOfSpeech: 'noun', definition: 'love (romantic)', example: 'Кохання прекрасне.', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'гостинність', pronunciation: 'hos-TYN-nist', partOfSpeech: 'noun', definition: 'hospitality', example: 'Українська гостинність відома.', exampleTranslation: 'Ukrainian hospitality is famous.', level: 'B1', category: 'culture' },
    { word: 'щастя', pronunciation: 'SHCHAS-tya', partOfSpeech: 'noun', definition: 'happiness', example: 'Щастя в малому.', exampleTranslation: 'Happiness is in small things.', level: 'A1', category: 'emotions' },
    { word: 'посміхатися', pronunciation: 'pos-mi-KHA-ty-sya', partOfSpeech: 'verb', definition: 'to smile', example: 'Вона завжди посміхається.', exampleTranslation: 'She always smiles.', level: 'A2', category: 'verbs' },
  ],
  he: [
    { word: 'פרפר', pronunciation: 'par-PAR', partOfSpeech: 'noun', definition: 'butterfly', example: 'הפרפר עף בגן.', exampleTranslation: 'The butterfly flies in the garden.', level: 'A1', category: 'nature' },
    { word: 'ארוחת בוקר', pronunciation: 'a-ru-KHAT BO-ker', partOfSpeech: 'noun', definition: 'breakfast', example: 'ארוחת הבוקר מוכנה.', exampleTranslation: 'Breakfast is ready.', level: 'A1', category: 'food' },
    { word: 'געגוע', pronunciation: 'ga-a-GU-a', partOfSpeech: 'noun', definition: 'longing, yearning', example: 'יש לי געגוע לבית.', exampleTranslation: 'I have longing for home.', level: 'B1', category: 'emotions' },
    { word: 'חוצפה', pronunciation: 'KHUTZ-pa', partOfSpeech: 'noun', definition: 'audacity, guts', example: 'יש לו חוצפה.', exampleTranslation: 'He has audacity.', level: 'B1', category: 'culture' },
    { word: 'אהבה', pronunciation: 'a-ha-VA', partOfSpeech: 'noun', definition: 'love', example: 'האהבה יפה.', exampleTranslation: 'Love is beautiful.', level: 'A1', category: 'emotions' },
    { word: 'תקווה', pronunciation: 'tik-VA', partOfSpeech: 'noun', definition: 'hope', example: 'יש תקווה.', exampleTranslation: 'There is hope.', level: 'A2', category: 'emotions' },
    { word: 'לחייך', pronunciation: 'le-kha-YEKH', partOfSpeech: 'verb', definition: 'to smile', example: 'היא תמיד מחייכת.', exampleTranslation: 'She always smiles.', level: 'A2', category: 'verbs' },
  ],
};

/**
 * Get today's word for a specific language
 * Uses the day of year to cycle through words consistently
 */
export function getTodaysWord(lang: string): WordEntry | null {
  const words = wordDatabase[lang];
  if (!words || words.length === 0) return null;
  
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  return words[dayOfYear % words.length];
}

/**
 * Get a random word from a specific language
 */
export function getRandomWord(lang: string): WordEntry | null {
  const words = wordDatabase[lang];
  if (!words || words.length === 0) return null;
  return words[Math.floor(Math.random() * words.length)];
}

/**
 * Get words filtered by CEFR level
 */
export function getWordsByLevel(lang: string, level: CEFRLevel): WordEntry[] {
  const words = wordDatabase[lang];
  if (!words) return [];
  return words.filter(w => w.level === level);
}

/**
 * Get words filtered by category
 */
export function getWordsByCategory(lang: string, category: string): WordEntry[] {
  const words = wordDatabase[lang];
  if (!words) return [];
  return words.filter(w => w.category === category);
}

/**
 * Get level color for badges
 */
export function getLevelColor(level: CEFRLevel): string {
  const colors: Record<CEFRLevel, string> = {
    'A1': '#10b981', // green
    'A2': '#22c55e', // light green
    'B1': '#f59e0b', // amber
    'B2': '#f97316', // orange
    'C1': '#ef4444', // red
    'C2': '#dc2626', // dark red
  };
  return colors[level];
}

/**
 * Get level description
 */
export function getLevelDescription(level: CEFRLevel): string {
  const descriptions: Record<CEFRLevel, string> = {
    'A1': 'Beginner',
    'A2': 'Elementary',
    'B1': 'Intermediate',
    'B2': 'Upper Intermediate',
    'C1': 'Advanced',
    'C2': 'Mastery',
  };
  return descriptions[level];
}
