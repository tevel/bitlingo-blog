/**
 * Multilingual vocabulary data for interactive components
 * Supports all 16 languages in the BitLingo blog
 */

export interface VocabWord {
  id: string;
  word: string;
  pronunciation?: string;
  translation: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface LanguageData {
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
  words: VocabWord[];
}

export const LANGUAGE_DATA: Record<string, LanguageData> = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    words: [
      { id: 'en1', word: 'Hello', pronunciation: 'heh-LOH', translation: 'Greeting', category: 'greetings', difficulty: 'beginner' },
      { id: 'en2', word: 'Thank you', pronunciation: 'THANK yoo', translation: 'Expression of gratitude', category: 'expressions', difficulty: 'beginner' },
      { id: 'en3', word: 'Goodbye', pronunciation: 'good-BYE', translation: 'Farewell', category: 'greetings', difficulty: 'beginner' },
      { id: 'en4', word: 'Please', pronunciation: 'pleez', translation: 'Polite request', category: 'expressions', difficulty: 'beginner' },
      { id: 'en5', word: 'Yes', pronunciation: 'yes', translation: 'Affirmation', category: 'basics', difficulty: 'beginner' },
      { id: 'en6', word: 'No', pronunciation: 'noh', translation: 'Negation', category: 'basics', difficulty: 'beginner' },
      { id: 'en7', word: 'Water', pronunciation: 'WAH-ter', translation: 'H2O, drink', category: 'food', difficulty: 'beginner' },
      { id: 'en8', word: 'Food', pronunciation: 'food', translation: 'Something to eat', category: 'food', difficulty: 'beginner' },
      { id: 'en9', word: 'Friend', pronunciation: 'frend', translation: 'Close companion', category: 'people', difficulty: 'beginner' },
      { id: 'en10', word: 'Family', pronunciation: 'FAM-ih-lee', translation: 'Relatives', category: 'people', difficulty: 'beginner' },
      { id: 'en11', word: 'Beautiful', pronunciation: 'BYOO-tih-ful', translation: 'Pleasing to look at', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'en12', word: 'Journey', pronunciation: 'JUR-nee', translation: 'A trip or voyage', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    words: [
      { id: 'es1', word: 'Hola', pronunciation: 'OH-lah', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'es2', word: 'Gracias', pronunciation: 'GRAH-syahs', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'es3', word: 'Adiós', pronunciation: 'ah-DYOHS', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'es4', word: 'Por favor', pronunciation: 'por fah-VOR', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'es5', word: 'Sí', pronunciation: 'see', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'es6', word: 'No', pronunciation: 'noh', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'es7', word: 'Agua', pronunciation: 'AH-gwah', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'es8', word: 'Comida', pronunciation: 'koh-MEE-dah', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'es9', word: 'Amigo', pronunciation: 'ah-MEE-goh', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'es10', word: 'Familia', pronunciation: 'fah-MEE-lyah', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'es11', word: 'Hermoso', pronunciation: 'ehr-MOH-soh', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'es12', word: 'Viaje', pronunciation: 'VYAH-heh', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    words: [
      { id: 'fr1', word: 'Bonjour', pronunciation: 'bohn-ZHOOR', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'fr2', word: 'Merci', pronunciation: 'mehr-SEE', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'fr3', word: 'Au revoir', pronunciation: 'oh ruh-VWAHR', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'fr4', word: "S'il vous plaît", pronunciation: 'seel voo PLEH', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'fr5', word: 'Oui', pronunciation: 'wee', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'fr6', word: 'Non', pronunciation: 'nohn', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'fr7', word: 'Eau', pronunciation: 'oh', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'fr8', word: 'Nourriture', pronunciation: 'noo-ree-TOOR', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'fr9', word: 'Ami', pronunciation: 'ah-MEE', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'fr10', word: 'Famille', pronunciation: 'fah-MEE-yuh', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'fr11', word: 'Beau', pronunciation: 'boh', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'fr12', word: 'Voyage', pronunciation: 'vwah-YAHZH', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    words: [
      { id: 'de1', word: 'Hallo', pronunciation: 'HAH-loh', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'de2', word: 'Danke', pronunciation: 'DAHN-kuh', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'de3', word: 'Auf Wiedersehen', pronunciation: 'owf VEE-der-zay-en', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'de4', word: 'Bitte', pronunciation: 'BIH-tuh', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'de5', word: 'Ja', pronunciation: 'yah', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'de6', word: 'Nein', pronunciation: 'nine', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'de7', word: 'Wasser', pronunciation: 'VAH-ser', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'de8', word: 'Essen', pronunciation: 'EH-sen', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'de9', word: 'Freund', pronunciation: 'froynt', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'de10', word: 'Familie', pronunciation: 'fah-MEE-lyuh', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'de11', word: 'Schön', pronunciation: 'shurn', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'de12', word: 'Reise', pronunciation: 'RYE-zuh', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    words: [
      { id: 'it1', word: 'Ciao', pronunciation: 'CHOW', translation: 'Hello/Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'it2', word: 'Grazie', pronunciation: 'GRAHT-syeh', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'it3', word: 'Arrivederci', pronunciation: 'ah-ree-veh-DEHR-chee', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'it4', word: 'Per favore', pronunciation: 'pehr fah-VOH-reh', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'it5', word: 'Sì', pronunciation: 'see', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'it6', word: 'No', pronunciation: 'noh', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'it7', word: 'Acqua', pronunciation: 'AHK-kwah', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'it8', word: 'Cibo', pronunciation: 'CHEE-boh', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'it9', word: 'Amico', pronunciation: 'ah-MEE-koh', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'it10', word: 'Famiglia', pronunciation: 'fah-MEE-lyah', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'it11', word: 'Bello', pronunciation: 'BEH-loh', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'it12', word: 'Viaggio', pronunciation: 'VYAHD-joh', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    words: [
      { id: 'pt1', word: 'Olá', pronunciation: 'oh-LAH', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'pt2', word: 'Obrigado', pronunciation: 'oh-bree-GAH-doo', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'pt3', word: 'Adeus', pronunciation: 'ah-DEH-oosh', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'pt4', word: 'Por favor', pronunciation: 'por fah-VOR', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'pt5', word: 'Sim', pronunciation: 'seeng', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'pt6', word: 'Não', pronunciation: 'nowng', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'pt7', word: 'Água', pronunciation: 'AH-gwah', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'pt8', word: 'Comida', pronunciation: 'koh-MEE-dah', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'pt9', word: 'Amigo', pronunciation: 'ah-MEE-goo', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'pt10', word: 'Família', pronunciation: 'fah-MEE-lyah', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'pt11', word: 'Bonito', pronunciation: 'boh-NEE-too', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'pt12', word: 'Viagem', pronunciation: 'vyah-ZHENG', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    words: [
      { id: 'ru1', word: 'Привет', pronunciation: 'pree-VYET', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'ru2', word: 'Спасибо', pronunciation: 'spah-SEE-bah', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'ru3', word: 'До свидания', pronunciation: 'dah svee-DAH-nyah', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'ru4', word: 'Пожалуйста', pronunciation: 'pah-ZHAH-luh-stah', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'ru5', word: 'Да', pronunciation: 'dah', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'ru6', word: 'Нет', pronunciation: 'nyet', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'ru7', word: 'Вода', pronunciation: 'vah-DAH', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'ru8', word: 'Еда', pronunciation: 'yeh-DAH', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'ru9', word: 'Друг', pronunciation: 'drook', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'ru10', word: 'Семья', pronunciation: 'syem-YAH', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'ru11', word: 'Красивый', pronunciation: 'krah-SEE-viy', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'ru12', word: 'Путешествие', pronunciation: 'poo-teh-SHEST-vyeh', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    words: [
      { id: 'zh1', word: '你好', pronunciation: 'nǐ hǎo', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'zh2', word: '谢谢', pronunciation: 'xiè xiè', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'zh3', word: '再见', pronunciation: 'zài jiàn', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'zh4', word: '请', pronunciation: 'qǐng', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'zh5', word: '是', pronunciation: 'shì', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'zh6', word: '不', pronunciation: 'bù', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'zh7', word: '水', pronunciation: 'shuǐ', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'zh8', word: '食物', pronunciation: 'shí wù', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'zh9', word: '朋友', pronunciation: 'péng yǒu', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'zh10', word: '家庭', pronunciation: 'jiā tíng', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'zh11', word: '美丽', pronunciation: 'měi lì', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'zh12', word: '旅行', pronunciation: 'lǚ xíng', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    words: [
      { id: 'ja1', word: 'こんにちは', pronunciation: 'kon-ni-chi-wa', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'ja2', word: 'ありがとう', pronunciation: 'a-ri-ga-tō', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'ja3', word: 'さようなら', pronunciation: 'sa-yō-na-ra', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'ja4', word: 'お願いします', pronunciation: 'o-ne-gai-shi-mas', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'ja5', word: 'はい', pronunciation: 'hai', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'ja6', word: 'いいえ', pronunciation: 'i-i-e', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'ja7', word: '水', pronunciation: 'mi-zu', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'ja8', word: '食べ物', pronunciation: 'ta-be-mo-no', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'ja9', word: '友達', pronunciation: 'to-mo-da-chi', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'ja10', word: '家族', pronunciation: 'ka-zo-ku', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'ja11', word: '美しい', pronunciation: 'u-tsu-ku-shii', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'ja12', word: '旅', pronunciation: 'ta-bi', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    words: [
      { id: 'ko1', word: '안녕하세요', pronunciation: 'an-nyeong-ha-se-yo', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'ko2', word: '감사합니다', pronunciation: 'gam-sa-ham-ni-da', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'ko3', word: '안녕히 가세요', pronunciation: 'an-nyeong-hi ga-se-yo', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'ko4', word: '제발', pronunciation: 'je-bal', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'ko5', word: '네', pronunciation: 'ne', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'ko6', word: '아니요', pronunciation: 'a-ni-yo', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'ko7', word: '물', pronunciation: 'mul', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'ko8', word: '음식', pronunciation: 'eum-sik', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'ko9', word: '친구', pronunciation: 'chin-gu', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'ko10', word: '가족', pronunciation: 'ga-jok', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'ko11', word: '아름다운', pronunciation: 'a-reum-da-un', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'ko12', word: '여행', pronunciation: 'yeo-haeng', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    rtl: true,
    words: [
      { id: 'ar1', word: 'مرحبا', pronunciation: 'mar-ha-ba', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'ar2', word: 'شكراً', pronunciation: 'shuk-ran', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'ar3', word: 'مع السلامة', pronunciation: 'ma-a sa-la-ma', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'ar4', word: 'من فضلك', pronunciation: 'min fad-lak', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'ar5', word: 'نعم', pronunciation: 'na-am', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'ar6', word: 'لا', pronunciation: 'la', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'ar7', word: 'ماء', pronunciation: 'maa', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'ar8', word: 'طعام', pronunciation: 'ta-aam', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'ar9', word: 'صديق', pronunciation: 'sa-deeq', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'ar10', word: 'عائلة', pronunciation: 'aa-i-la', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'ar11', word: 'جميل', pronunciation: 'ja-meel', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'ar12', word: 'رحلة', pronunciation: 'rih-la', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    words: [
      { id: 'hi1', word: 'नमस्ते', pronunciation: 'na-mas-te', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'hi2', word: 'धन्यवाद', pronunciation: 'dhan-ya-vaad', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'hi3', word: 'अलविदा', pronunciation: 'al-vi-da', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'hi4', word: 'कृपया', pronunciation: 'kri-pa-ya', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'hi5', word: 'हाँ', pronunciation: 'haan', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'hi6', word: 'नहीं', pronunciation: 'na-heen', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'hi7', word: 'पानी', pronunciation: 'paa-ni', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'hi8', word: 'खाना', pronunciation: 'khaa-na', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'hi9', word: 'दोस्त', pronunciation: 'dost', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'hi10', word: 'परिवार', pronunciation: 'pa-ri-vaar', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'hi11', word: 'सुंदर', pronunciation: 'sun-dar', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'hi12', word: 'यात्रा', pronunciation: 'yaa-tra', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    words: [
      { id: 'tr1', word: 'Merhaba', pronunciation: 'mer-ha-ba', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'tr2', word: 'Teşekkürler', pronunciation: 'te-shek-kür-ler', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'tr3', word: 'Hoşça kal', pronunciation: 'hosh-cha kal', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'tr4', word: 'Lütfen', pronunciation: 'lüt-fen', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'tr5', word: 'Evet', pronunciation: 'e-vet', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'tr6', word: 'Hayır', pronunciation: 'ha-yır', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'tr7', word: 'Su', pronunciation: 'su', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'tr8', word: 'Yemek', pronunciation: 'ye-mek', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'tr9', word: 'Arkadaş', pronunciation: 'ar-ka-dash', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'tr10', word: 'Aile', pronunciation: 'ai-le', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'tr11', word: 'Güzel', pronunciation: 'gü-zel', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'tr12', word: 'Yolculuk', pronunciation: 'yol-ju-luk', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
    flag: '🇵🇱',
    words: [
      { id: 'pl1', word: 'Cześć', pronunciation: 'cheshch', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'pl2', word: 'Dziękuję', pronunciation: 'jen-koo-yeh', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'pl3', word: 'Do widzenia', pronunciation: 'do vee-dze-nya', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'pl4', word: 'Proszę', pronunciation: 'pro-sheh', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'pl5', word: 'Tak', pronunciation: 'tak', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'pl6', word: 'Nie', pronunciation: 'nyeh', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'pl7', word: 'Woda', pronunciation: 'vo-da', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'pl8', word: 'Jedzenie', pronunciation: 'ye-dze-nye', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'pl9', word: 'Przyjaciel', pronunciation: 'pshi-ya-chel', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'pl10', word: 'Rodzina', pronunciation: 'ro-jee-na', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'pl11', word: 'Piękny', pronunciation: 'pyenk-ny', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'pl12', word: 'Podróż', pronunciation: 'po-droosh', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'Українська',
    flag: '🇺🇦',
    words: [
      { id: 'uk1', word: 'Привіт', pronunciation: 'pry-veet', translation: 'Hello', category: 'greetings', difficulty: 'beginner' },
      { id: 'uk2', word: 'Дякую', pronunciation: 'dya-ku-yu', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'uk3', word: 'До побачення', pronunciation: 'do po-ba-chen-nya', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'uk4', word: 'Будь ласка', pronunciation: 'bud las-ka', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'uk5', word: 'Так', pronunciation: 'tak', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'uk6', word: 'Ні', pronunciation: 'ni', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'uk7', word: 'Вода', pronunciation: 'vo-da', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'uk8', word: 'Їжа', pronunciation: 'yi-zha', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'uk9', word: 'Друг', pronunciation: 'druh', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'uk10', word: 'Сім\'я', pronunciation: 'sim-ya', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'uk11', word: 'Гарний', pronunciation: 'har-nyy', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'uk12', word: 'Подорож', pronunciation: 'po-do-rozh', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
    flag: '🇮🇱',
    rtl: true,
    words: [
      { id: 'he1', word: 'שלום', pronunciation: 'sha-lom', translation: 'Hello/Peace', category: 'greetings', difficulty: 'beginner' },
      { id: 'he2', word: 'תודה', pronunciation: 'to-da', translation: 'Thank you', category: 'expressions', difficulty: 'beginner' },
      { id: 'he3', word: 'להתראות', pronunciation: 'le-hit-ra-ot', translation: 'Goodbye', category: 'greetings', difficulty: 'beginner' },
      { id: 'he4', word: 'בבקשה', pronunciation: 'be-va-ka-sha', translation: 'Please', category: 'expressions', difficulty: 'beginner' },
      { id: 'he5', word: 'כן', pronunciation: 'ken', translation: 'Yes', category: 'basics', difficulty: 'beginner' },
      { id: 'he6', word: 'לא', pronunciation: 'lo', translation: 'No', category: 'basics', difficulty: 'beginner' },
      { id: 'he7', word: 'מים', pronunciation: 'ma-yim', translation: 'Water', category: 'food', difficulty: 'beginner' },
      { id: 'he8', word: 'אוכל', pronunciation: 'o-khel', translation: 'Food', category: 'food', difficulty: 'beginner' },
      { id: 'he9', word: 'חבר', pronunciation: 'kha-ver', translation: 'Friend', category: 'people', difficulty: 'beginner' },
      { id: 'he10', word: 'משפחה', pronunciation: 'mish-pa-kha', translation: 'Family', category: 'people', difficulty: 'beginner' },
      { id: 'he11', word: 'יפה', pronunciation: 'ya-fe', translation: 'Beautiful', category: 'adjectives', difficulty: 'intermediate' },
      { id: 'he12', word: 'מסע', pronunciation: 'ma-sa', translation: 'Journey', category: 'travel', difficulty: 'intermediate' },
    ]
  },
};

// UI translations for interactive components
export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    quiz_title: 'Vocabulary Quiz',
    quiz_question: 'What does this word mean?',
    quiz_correct: 'Correct! 🎉',
    quiz_incorrect: 'Not quite. Try again!',
    quiz_score: 'Score',
    quiz_next: 'Next Question',
    quiz_restart: 'Play Again',
    quiz_complete: 'Quiz Complete!',
    flashcard_flip: 'Click to flip',
    flashcard_front: 'Front',
    flashcard_back: 'Back',
    flashcard_next: 'Next Card',
    flashcard_prev: 'Previous Card',
    matching_title: 'Match the Words',
    matching_instructions: 'Drag words to match translations',
    matching_complete: 'All matched! 🎉',
    matching_restart: 'Play Again',
    memory_title: 'Memory Game',
    memory_moves: 'Moves',
    memory_pairs: 'Pairs Found',
    memory_complete: 'Congratulations! 🎉',
    memory_restart: 'Play Again',
    daily_word: 'Word of the Day',
    daily_category: 'Category',
    daily_difficulty: 'Difficulty',
    poll_title: 'What language are you learning?',
    poll_vote: 'Vote',
    poll_results: 'Results',
    poll_total_votes: 'Total votes',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    select_language: 'Select Language',
    try_bitlingo: 'Try BitLingo App',
  },
  es: {
    quiz_title: 'Quiz de Vocabulario',
    quiz_question: '¿Qué significa esta palabra?',
    quiz_correct: '¡Correcto! 🎉',
    quiz_incorrect: 'No es correcto. ¡Inténtalo de nuevo!',
    quiz_score: 'Puntuación',
    quiz_next: 'Siguiente Pregunta',
    quiz_restart: 'Jugar de Nuevo',
    quiz_complete: '¡Quiz Completado!',
    flashcard_flip: 'Clic para voltear',
    flashcard_front: 'Frente',
    flashcard_back: 'Atrás',
    flashcard_next: 'Siguiente Tarjeta',
    flashcard_prev: 'Tarjeta Anterior',
    matching_title: 'Emparejar Palabras',
    matching_instructions: 'Arrastra las palabras para emparejar',
    matching_complete: '¡Todo emparejado! 🎉',
    matching_restart: 'Jugar de Nuevo',
    memory_title: 'Juego de Memoria',
    memory_moves: 'Movimientos',
    memory_pairs: 'Parejas Encontradas',
    memory_complete: '¡Felicitaciones! 🎉',
    memory_restart: 'Jugar de Nuevo',
    daily_word: 'Palabra del Día',
    daily_category: 'Categoría',
    daily_difficulty: 'Dificultad',
    poll_title: '¿Qué idioma estás aprendiendo?',
    poll_vote: 'Votar',
    poll_results: 'Resultados',
    poll_total_votes: 'Votos totales',
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    select_language: 'Seleccionar Idioma',
    try_bitlingo: 'Probar BitLingo',
  },
  fr: {
    quiz_title: 'Quiz de Vocabulaire',
    quiz_question: 'Que signifie ce mot?',
    quiz_correct: 'Correct! 🎉',
    quiz_incorrect: 'Pas tout à fait. Réessayez!',
    quiz_score: 'Score',
    quiz_next: 'Question Suivante',
    quiz_restart: 'Rejouer',
    quiz_complete: 'Quiz Terminé!',
    flashcard_flip: 'Cliquez pour retourner',
    flashcard_front: 'Recto',
    flashcard_back: 'Verso',
    flashcard_next: 'Carte Suivante',
    flashcard_prev: 'Carte Précédente',
    matching_title: 'Associer les Mots',
    matching_instructions: 'Faites glisser pour associer',
    matching_complete: 'Tout associé! 🎉',
    matching_restart: 'Rejouer',
    memory_title: 'Jeu de Mémoire',
    memory_moves: 'Coups',
    memory_pairs: 'Paires Trouvées',
    memory_complete: 'Félicitations! 🎉',
    memory_restart: 'Rejouer',
    daily_word: 'Mot du Jour',
    daily_category: 'Catégorie',
    daily_difficulty: 'Difficulté',
    poll_title: 'Quelle langue apprenez-vous?',
    poll_vote: 'Voter',
    poll_results: 'Résultats',
    poll_total_votes: 'Total des votes',
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé',
    select_language: 'Choisir la Langue',
    try_bitlingo: 'Essayer BitLingo',
  },
  de: {
    quiz_title: 'Vokabel-Quiz',
    quiz_question: 'Was bedeutet dieses Wort?',
    quiz_correct: 'Richtig! 🎉',
    quiz_incorrect: 'Nicht ganz. Versuche es noch einmal!',
    quiz_score: 'Punktzahl',
    quiz_next: 'Nächste Frage',
    quiz_restart: 'Nochmal Spielen',
    quiz_complete: 'Quiz Abgeschlossen!',
    flashcard_flip: 'Klicken zum Umdrehen',
    flashcard_front: 'Vorderseite',
    flashcard_back: 'Rückseite',
    flashcard_next: 'Nächste Karte',
    flashcard_prev: 'Vorherige Karte',
    matching_title: 'Wörter Zuordnen',
    matching_instructions: 'Ziehen zum Zuordnen',
    matching_complete: 'Alles zugeordnet! 🎉',
    matching_restart: 'Nochmal Spielen',
    memory_title: 'Gedächtnisspiel',
    memory_moves: 'Züge',
    memory_pairs: 'Paare Gefunden',
    memory_complete: 'Herzlichen Glückwunsch! 🎉',
    memory_restart: 'Nochmal Spielen',
    daily_word: 'Wort des Tages',
    daily_category: 'Kategorie',
    daily_difficulty: 'Schwierigkeit',
    poll_title: 'Welche Sprache lernst du?',
    poll_vote: 'Abstimmen',
    poll_results: 'Ergebnisse',
    poll_total_votes: 'Gesamtstimmen',
    beginner: 'Anfänger',
    intermediate: 'Mittelstufe',
    advanced: 'Fortgeschritten',
    select_language: 'Sprache Wählen',
    try_bitlingo: 'BitLingo Testen',
  },
};

// Helper function to get translations with fallback to English
export function getUITranslation(lang: string, key: string): string {
  return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS.en[key] || key;
}

// Helper function to get words for a specific language
export function getWordsForLanguage(lang: string): VocabWord[] {
  return LANGUAGE_DATA[lang]?.words || LANGUAGE_DATA.en.words;
}

// Helper function to get random words
export function getRandomWords(lang: string, count: number = 5): VocabWord[] {
  const words = getWordsForLanguage(lang);
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, words.length));
}

// Helper function to get daily word (deterministic based on date)
export function getDailyWord(lang: string): VocabWord {
  const words = getWordsForLanguage(lang);
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  return words[dayOfYear % words.length];
}
