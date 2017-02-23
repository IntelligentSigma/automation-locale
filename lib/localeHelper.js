var localeHelper = (function () {

    function localeHelper() {

        this.languages = [{
            name: "Afrikaans",
            locale: [],
            nameForm: [],
            browserCode: ["af"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Albanian",
            locale: ["sq"],
            nameForm: ["sq"],
            browserCode: ["sq"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Amharic",
            locale: [],
            nameForm: [],
            browserCode: ["am"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Arabic",
            locale: [],
            nameForm: [],
            browserCode: ["ar"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Aragonese",
            locale: [],
            nameForm: [],
            browserCode: ["an"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Armenian",
            locale: ["hy"],
            nameForm: ["hy", "hy-Latn"],
            browserCode: ["hy"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G5", "Booklet"]
        },
        {
            name: "Asturian",
            locale: [],
            nameForm: [],
            browserCode: ["ast"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Azerbaijani",
            locale: [],
            nameForm: [],
            browserCode: ["az"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Bangla",
            locale: [],
            nameForm: [],
            browserCode: ["bn"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Basque",
            locale: [],
            nameForm: [],
            browserCode: ["eu"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Belarusian",
            locale: [],
            nameForm: [],
            browserCode: ["be"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Bosnian",
            locale: [],
            nameForm: [],
            browserCode: ["bs"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Breton",
            locale: [],
            nameForm: [],
            browserCode: ["br"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Bulgarian",
            locale: ["bg"],
            nameForm: ["bg", "bg-Latn"],
            browserCode: ["bg"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G3", "Booklet"]
        },
        {
            name: "Catalan",
            locale: [],
            nameForm: [],
            browserCode: ["ca"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Central Kurdish",
            locale: [],
            nameForm: [],
            browserCode: ["ckb"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Chinese",
            locale: ["zh"],
            nameForm: ["zh-Hani", "zh-Latn"],
            browserCode: ["zh", "zh-HK", "zh-TW"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "core", "G2", "Booklet"]
        },
        {
            name: "Chinese (simplified)",
            locale: ["zh-hans"],
            nameForm: ["zh-Hani", "zh-Latn"],
            browserCode: ["zh-CN"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "G2", "Booklet"]
        },
        {
            name: "Corsican",
            locale: [],
            nameForm: [],
            browserCode: ["co"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Croatian",
            locale: ["hr"],
            nameForm: ["hr"],
            browserCode: ["hr"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Czech",
            locale: ["cs"],
            nameForm: ["cs"],
            browserCode: ["cs"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Danish",
            locale: ["da"],
            nameForm: ["da"],
            browserCode: ["da"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Dutch",
            locale: ["nl"],
            nameForm: ["nl"],
            browserCode: ["nl"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "English",
            locale: ["en"],
            nameForm: ["en"],
            browserCode: ["en", "en-AU", "en-CA", "en-IN", "en-NZ", "en-ZA", "en-GB", "en-US"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "EPFIGS", "core", "A", "Booklet"]
        },
        {
            name: "Esperanto",
            locale: ["eo"],
            nameForm: [],
            browserCode: ["eo"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Estonian",
            locale: ["et"],
            nameForm: ["et"],
            browserCode: ["et"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Faroese",
            locale: [],
            nameForm: [],
            browserCode: ["fo"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Fijian",
            locale: ["fj"],
            nameForm: ["fj"],
            browserCode: ["fj"],
            synotypic: false,
            transliteration: false,
            filters: ["firefox", "G1", "Booklet"]
        },
        {
            name: "Filipino",
            locale: [],
            nameForm: [],
            browserCode: ["fil"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Finnish",
            locale: ["fi"],
            nameForm: ["fi"],
            browserCode: ["fi"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "French",
            locale: ["fr"],
            nameForm: ["fr"],
            browserCode: ["fr", "fr-CA", "fr-FR", "fr-CH"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "EPFIGS", "core", "A", "Booklet"]
        },
        {
            name: "Galician",
            locale: [],
            nameForm: [],
            browserCode: ["gl"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Georgian",
            locale: [],
            nameForm: [],
            browserCode: ["ka"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "German",
            locale: ["de"],
            nameForm: ["de"],
            browserCode: ["de", "de-AT", "de-DE", "de-LI", "de-CH"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "EPFIGS", "core", "A", "Booklet"]
        },
        {
            name: "Greek",
            locale: ["el"],
            nameForm: ["el", "el-Latn"],
            browserCode: ["el"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G5", "Booklet"]
        },
        {
            name: "Guarani",
            locale: [],
            nameForm: [],
            browserCode: ["gn"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Gujarati",
            locale: [],
            nameForm: [],
            browserCode: ["gu"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Haitian",
            locale: ["ht"],
            nameForm: ["ht"],
            browserCode: ["ht"],
            synotypic: false,
            transliteration: false,
            filters: ["firefox", "G1", "Booklet"]
        },
        {
            name: "Hausa",
            locale: [],
            nameForm: [],
            browserCode: ["ha"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Hawaiian",
            locale: [],
            nameForm: [],
            browserCode: ["haw"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Hebrew",
            locale: [],
            nameForm: [],
            browserCode: ["he"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Hindi",
            locale: [],
            nameForm: [],
            browserCode: ["hi"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Hungarian",
            locale: ["hu"],
            nameForm: ["hu"],
            browserCode: ["hu"],
            synotypic: true,
            transliteration: false,
            filters: ["chrome", "firefox", "G4", "Booklet"]
        },
        {
            name: "Icelandic",
            locale: ["is"],
            nameForm: ["is", "is-simple"],
            browserCode: ["is"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G7", "Booklet"]
        },
        {
            name: "Indonesian",
            locale: ["id"],
            nameForm: ["id"],
            browserCode: ["id"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Interlingua",
            locale: [],
            nameForm: [],
            browserCode: ["ia"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Irish",
            locale: [],
            nameForm: [],
            browserCode: ["ga"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Italian",
            locale: ["it"],
            nameForm: ["it"],
            browserCode: ["it", "it-IT", "it-CH"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "EPFIGS", "core", "A", "Booklet"]
        },
        {
            name: "Japanese",
            locale: ["ja"],
            nameForm: ["ja", "ja-Hrkt", "ja-Latn"],
            browserCode: ["ja"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "core", "G2", "Booklet"]
        },
        {
            name: "Kannada",
            locale: [],
            nameForm: [],
            browserCode: ["kn"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Kazakh",
            locale: [],
            nameForm: [],
            browserCode: ["kk"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Khmer",
            locale: ["km"],
            nameForm: ["km", "km-Latn"],
            browserCode: ["km"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "G6", "Booklet"]
        },
        {
            name: "Korean",
            locale: ["ko"],
            nameForm: ["ko", "ko-Hang", "ko-Hani", "ko-Latn"],
            browserCode: ["ko"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "core", "G2", "Booklet"]
        },
        {
            name: "Kurdish",
            locale: [],
            nameForm: [],
            browserCode: ["ku"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Kyrgyz",
            locale: [],
            nameForm: [],
            browserCode: ["ky"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Lao",
            locale: [],
            nameForm: [],
            browserCode: ["lo"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Latin",
            locale: [],
            nameForm: [],
            browserCode: ["la"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Latvian",
            locale: ["lv"],
            nameForm: ["lv"],
            browserCode: ["lv"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Lingala",
            locale: [],
            nameForm: [],
            browserCode: ["ln"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Lithuanian",
            locale: ["lt"],
            nameForm: ["lt"],
            browserCode: ["lt"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Macedonian",
            locale: ["mk"],
            nameForm: ["mk", "mk-Latn"],
            browserCode: ["mk"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G3", "Booklet"]
        },
        {
            name: "Malay",
            locale: ["ms"],
            nameForm: ["ms"],
            browserCode: ["ms"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Malayalam",
            locale: [],
            nameForm: [],
            browserCode: ["ml"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Maltese",
            locale: [],
            nameForm: [],
            browserCode: ["mt"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Marathi",
            locale: [],
            nameForm: [],
            browserCode: ["mr"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Mongolian",
            locale: ["mn"],
            nameForm: ["mn-Cyrl", "mn-Latn"],
            browserCode: ["mn"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "G3", "Booklet"]
        },
        {
            name: "Nepali",
            locale: [],
            nameForm: [],
            browserCode: ["ne"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Norwegian",
            locale: ["no"],
            nameForm: ["no"],
            browserCode: ["no"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Norwegian Bokmål",
            locale: [],
            nameForm: [],
            browserCode: ["nb"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Norwegian Nynorsk",
            locale: [],
            nameForm: [],
            browserCode: ["nn"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Occitan",
            locale: [],
            nameForm: [],
            browserCode: ["oc"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Odia",
            locale: [],
            nameForm: [],
            browserCode: ["or"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Oromo",
            locale: [],
            nameForm: [],
            browserCode: ["om"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "other",
            locale: [],
            nameForm: ["und"],
            browserCode: [],
            synotypic: false,
            transliteration: false,
            filters: ["A"]
        },
        {
            name: "Pashto",
            locale: [],
            nameForm: [],
            browserCode: ["ps"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Persian",
            locale: [],
            nameForm: [],
            browserCode: ["fa"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Polish",
            locale: ["pl"],
            nameForm: ["pl"],
            browserCode: ["pl"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Portuguese",
            locale: ["pt"],
            nameForm: ["pt"],
            browserCode: ["pt", "pt-BR", "pt-PT"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "EPFIGS", "core", "A", "Booklet"]
        },
        {
            name: "Punjabi",
            locale: [],
            nameForm: [],
            browserCode: ["pa"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Quechua",
            locale: [],
            nameForm: [],
            browserCode: ["qu"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Romanian",
            locale: ["ro"],
            nameForm: ["ro"],
            browserCode: ["ro"],
            synotypic: true,
            transliteration: false,
            filters: ["chrome", "firefox", "G4", "Booklet"]
        },
        {
            name: "Romanian (Moldova)",
            locale: [],
            nameForm: [],
            browserCode: ["mo"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Romansh",
            locale: [],
            nameForm: [],
            browserCode: ["rm"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Russian",
            locale: ["ru"],
            nameForm: ["ru"],
            browserCode: ["ru"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "core", "G3", "Booklet"]
        },
        {
            name: "Samoan",
            locale: ["sm"],
            nameForm: ["sm"],
            browserCode: [],
            synotypic: false,
            transliteration: false,
            filters: ["G1", "Booklet"]
        },
        {
            name: "Scottish Gaelic",
            locale: [],
            nameForm: [],
            browserCode: ["gd"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Serbian",
            locale: ["sr"],
            nameForm: ["sr-Cryl", "sr-Latn"],
            browserCode: ["sr"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G3", "Booklet"]
        },
        {
            name: "Serbo",
            locale: [],
            nameForm: [],
            browserCode: ["sh"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Shona",
            locale: [],
            nameForm: [],
            browserCode: ["sn"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Sindhi",
            locale: [],
            nameForm: [],
            browserCode: ["sd"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Sinhala",
            locale: [],
            nameForm: [],
            browserCode: ["si"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Slovak",
            locale: ["sk"],
            nameForm: ["sk"],
            browserCode: ["sk"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Slovenian",
            locale: ["sl"],
            nameForm: ["sl"],
            browserCode: ["sl"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Somali",
            locale: [],
            nameForm: [],
            browserCode: ["so"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Southern Sotho",
            locale: [],
            nameForm: [],
            browserCode: ["st"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Spanish",
            locale: ["es"],
            nameForm: ["es"],
            browserCode: ["es", "es-AR", "es-419", "es-MX", "es-ES", "es-US"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "EPFIGS", "core", "A", "Booklet"]
        },
        {
            name: "Sundanese",
            locale: [],
            nameForm: [],
            browserCode: ["su"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Swahili",
            locale: [],
            nameForm: [],
            browserCode: ["sw"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Swedish",
            locale: ["sv"],
            nameForm: ["sv"],
            browserCode: ["sv"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "G1", "Booklet"]
        },
        {
            name: "Tajik",
            locale: [],
            nameForm: [],
            browserCode: ["tg"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Tamil",
            locale: [],
            nameForm: [],
            browserCode: ["ta"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Tatar",
            locale: [],
            nameForm: [],
            browserCode: ["tt"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Telugu",
            locale: [],
            nameForm: [],
            browserCode: ["te"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Thai",
            locale: ["th"],
            nameForm: ["th", "th-Latn"],
            browserCode: ["th"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G6", "Booklet"]
        },
        {
            name: "Tigrinya",
            locale: [],
            nameForm: [],
            browserCode: ["ti"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Tongan",
            locale: ["to"],
            nameForm: ["to"],
            browserCode: ["to"],
            synotypic: true,
            transliteration: false,
            filters: ["chrome", "firefox", "G4", "Booklet"]
        },
        {
            name: "Turkish",
            locale: ["tr"],
            nameForm: ["tr"],
            browserCode: ["tr"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox", "Booklet"]
        },
        {
            name: "Turkmen",
            locale: [],
            nameForm: [],
            browserCode: ["tk"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Twi",
            locale: [],
            nameForm: [],
            browserCode: ["tw"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Ukrainian",
            locale: ["uk"],
            nameForm: ["uk", "uk-Latn"],
            browserCode: ["uk"],
            synotypic: false,
            transliteration: true,
            filters: ["chrome", "firefox", "G3", "Booklet"]
        },
        {
            name: "Urdu",
            locale: [],
            nameForm: [],
            browserCode: ["ur"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Uyghur",
            locale: [],
            nameForm: [],
            browserCode: ["ug"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Uzbek",
            locale: [],
            nameForm: [],
            browserCode: ["uz"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Vietnamese",
            locale: ["vi"],
            nameForm: ["vi", "vi-Latn", "vi-simple"],
            browserCode: ["vi"],
            synotypic: true,
            transliteration: true,
            filters: ["chrome", "firefox", "G7", "Booklet"]
        },
        {
            name: "Walloon",
            locale: [],
            nameForm: [],
            browserCode: ["wa"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Welsh",
            locale: [],
            nameForm: [],
            browserCode: ["cy"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Western Frisian",
            locale: [],
            nameForm: [],
            browserCode: ["fy"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Xhosa",
            locale: [],
            nameForm: [],
            browserCode: ["xh"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Yiddish",
            locale: [],
            nameForm: [],
            browserCode: ["yi"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Yoruba",
            locale: [],
            nameForm: [],
            browserCode: ["yo"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        },
        {
            name: "Zulu",
            locale: [], 
            nameForm: [], 
            browserCode: ["zu"],
            synotypic: false,
            transliteration: false,
            filters: ["chrome", "firefox"]
        }]
    }

    localeHelper.prototype.getLanguages = function (query) {
        var filteredLanguages = this.languages;

        //Find languages for all filter items (filter1 || filter2 || filter3) and dedup list.
        if(query.filters) {
            var multifilters = [];
            for (var i = 0; i < query.filters.length; i++) {
                var array = this.findByFilter(query.filters[i]);
                multifilters = multifilters.concat(array);
            }
            filteredLanguages = multifilters.dedup();
        }

        //Apply locale filter to list.
        if(query.locale) {
            var multifilters = [];
            for (var i = 0; i < query.locale.length; i++) {
                var array = filteredLanguages.filter(function (el) {
                    return el.locale.contains(query.locale[i]);
                });
                multifilters = multifilters.concat(array);
            }
            filteredLanguages = multifilters.dedup();
        }

        //Apply nameForm filter to list.
        if(query.nameForm) {
            var multifilters = [];
            for (var i = 0; i < query.nameForm.length; i++) {
                var array = filteredLanguages.filter(function (el) {
                    return el.nameForm.contains(query.nameForm[i]);
                });
                multifilters = multifilters.concat(array);
            }
            filteredLanguages = multifilters.dedup();
        }

        //Apply browserCode filter to list.
        if(query.browserCode) {
            var multifilters = [];
            for (var i = 0; i < query.browserCode.length; i++) {
                var array = filteredLanguages.filter(function (el) {
                    return el.browserCode.contains(query.browserCode[i]);
                });
                multifilters = multifilters.concat(array);
            }
            filteredLanguages = multifilters.dedup();
        }

        //Apply synotypic filter to list.
        if(query.synotypic !== undefined) {
            filteredLanguages = filteredLanguages.filter(function(el) {
                return el.synotypic == query.synotypic;
            });
        }

        //Apply transliteration filter to list.
        if(query.transliteration !== undefined) {
            filteredLanguages = filteredLanguages.filter(function(el) {
                return el.transliteration == query.transliteration;
            });
        }

        return filteredLanguages;
    };

    //Filters for Languages that contain all arguments in filters (arg1 && arg2 && arg3)
    localeHelper.prototype.findByFilter = function (arg1, arg2) {
        var filteredLanguages = this.languages;

        for (var i = 0; i < arguments.length; i++) {
            var param = arguments[i];
            filteredLanguages = this.languages.filter(function(el) {
                return el.filters.contains(param);
            });
        }

        return filteredLanguages;
    };

    localeHelper.prototype.getSynotypic = function () {
        return this.languages.filter(function(el) {
            return el.synotypic == true;
        });
    };

    localeHelper.prototype.getTransliteration = function () {
        return this.languages.filter(function(el) {
            return el.transliteration == true;
        });
    };

    localeHelper.prototype.findByLocale = function (locale) {
        return this.languages.filter(function(el) {
            return el.locale.contains(locale);
        });
    };

    localeHelper.prototype.findByNameForm = function (nameForm) {
        return this.languages.filter(function(el) {
            return el.nameForm.contains(nameForm);
        });
    };

    localeHelper.prototype.findByBrowserCode = function (browserCode) {
        return this.languages.filter(function(el) {
            return el.browserCode.contains(browserCode);
        });
    };

    localeHelper.prototype.localeHasTransliteration = function (locale) {
        return this.findByLocale(locale)[0].transliteration;
    };

    localeHelper.prototype.localeIsSynotipic = function (locale) {
        return this.findByLocale(locale)[0].synotypic;
    };

    localeHelper.prototype.nameFormIsSynotipic = function (nameForm) {
        return this.findByNameForm(nameForm)[0].synotypic;
    };

return localeHelper;

})();

module.exports = localeHelper;

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

Array.prototype.dedup = function() {
    return this.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });
};