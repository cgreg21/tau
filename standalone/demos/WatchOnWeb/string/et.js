WatchOnSandbox( "STMS", function( m ) {
var STMS = m.STMS,
map = {
IDS_ST_BODY_VOLUME_M_SOUND_ABB: "Helitugevus",
IDS_SR_BODY_AIR_CONDITIONER: "Konditsioneer",
IDS_SR_BODY_AUSTRIA_M_COUNTRYNAME: "Austria",
IDS_SR_BODY_BELGIUM_M_COUNTRYNAME: "Belgia",
IDS_SR_BODY_CHINA_M_COUNTRYNAME: "Hiina",
IDS_SR_BODY_DENMARK_M_COUNTRYNAME: "Taani",
IDS_SR_BODY_FAN_SPEED_DOWN: "Ventilaatori aeglustamine",
IDS_SR_BODY_FAN_SPEED_UP: "Ventilaatori kiirendamine",
IDS_SR_BODY_FINLAND_M_COUNTRYNAME: "Soome",
IDS_SR_BODY_FRANCE_M_COUNTRYNAME: "Prantsusmaa",
IDS_SR_BODY_GERMANY_M_COUNTRYNAME: "Saksamaa",
IDS_SR_BODY_IRELAND_M_COUNTRYNAME: "Iirimaa",
IDS_SR_BODY_ITALY_M_COUNTRYNAME: "Itaalia",
IDS_SR_BODY_LUXEMBOURG_M_COUNTRYNAME: "Luksemburg",
IDS_SR_BODY_MODE: "Režiim",
IDS_SR_BODY_NORWAY_M_COUNTRYNAME: "Norra",
IDS_SR_BODY_POLAND_M_COUNTRYNAME: "Poola",
IDS_SR_BODY_PORTUGAL_M_COUNTRYNAME: "Portugal",
IDS_SR_BODY_SET_UP: "Seadista",
IDS_SR_BODY_SOUTH_KOREA_M_COUNTRYNAME: "Lõuna-Korea",
IDS_SR_BODY_SPAIN_M_COUNTRYNAME: "Hispaania",
IDS_SR_BODY_SWEDEN_M_COUNTRYNAME: "Rootsi",
IDS_SR_BODY_SWITZERLAND_M_COUNTRYNAME: "Šveits",
IDS_SR_BODY_UNITED_KINGDOM_M_COUNTRYNAME: "Suurbritannia",
IDS_SR_BODY_UNITED_STATES_OF_AMERICA_M_COUNTRYNAME: "Ameerika Ühendriigid",
IDS_SR_BUTTON_BACK: "Tagasi",
IDS_SR_BUTTON_CANCEL_ABB: "Tühista",
IDS_SR_BUTTON_DELETE: "Kust.",
IDS_SR_BUTTON_DONE: "Valmis",
IDS_SR_BUTTON_EXIT: "Välju",
IDS_SR_BUTTON_INFO: "Teave",
IDS_SR_BUTTON_MENU: "Menüü",
IDS_SR_BUTTON_MUTE: "Helitu",
IDS_SR_BUTTON_OK: "OK",
IDS_SR_BUTTON_POWER: "Toide",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY: "Valige oma riik",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY_REGION: "Valige riik/piirkond",
IDS_SR_BUTTON_SHOW_OTHER_BRANDS: "Näita teisi kaubamärke",
IDS_SR_BUTTON_SOURCE_T_SMART_REMOTE: "Allikas",
IDS_SR_BUTTON_TEMP_DOWN_M_TEMPERATURE: "Temp. alla",
IDS_SR_BUTTON_TEMP_UP_M_TEMPERATURE: "Temp. üles",
IDS_SR_BUTTON_TV: "Teler",
IDS_SR_BUTTON_YES: "Jah",
IDS_SR_HEADER_ALL_BRANDS: "Kõik kaubamärgid",
IDS_SR_HEADER_DELETE_ABB: "Kustuta",
IDS_SR_HEADER_RESET: "Lähtesta",
IDS_SR_HEADER_WATCHON_M_APPLICATION: "WatchON",
IDS_SR_OPT_ADD_DEVICE_ABB: "Lisa seade",
IDS_SR_OPT_STB_ABB: "STB",
IDS_YSM_POP_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "Kas seadistada kaugjuhtimispult teie seadmes?",
IDS_YSM_OPT_SHOW_ALL_BRANDS_ABB: "Näita kõiki kaubamärke",
IDS_YSM_BUTTON_VOL_UC: "HELITUGEVUS",
IDS_YSM_BUTTON_CH: "KAN",
IDS_YSM_BUTTON_NO: "Ei",
IDS_SAPPS_BODY_NOTICE: "Teavitus",
IDS_MSGF_HEADER_OPTION: "Valik",
IDS_MSGF_HEADER_OPTIONS: "Valikud",
IDS_SSCHOL_HEADER_COMPLETED: "Valmis",
IDS_YSM_HEADER_SET_UP_REMOTE_ABB: "Sead. kaugj.pult",
IDS_YSM_BODY_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "Kas seadistada kaugjuhtimispult teie seadmes?",
IDS_YSM_BODY_LATIN_COUNTRIES_ABB: "Ladina-Ameerika riigid",
IDS_YSM_BODY_POINT_YOUR_WATCH_TOWARDS_THE_PS_AND_TAP_THE_POWER_BUTTON: "Suunake oma kell seadme %s poole ja toksake toitenuppu.",
IDS_YSM_BODY_TAP_THE_BUTTON_ABB: "Toksake nuppu.",
IDS_YSM_BODY_DID_IT_WORK_Q_ABB: "Kas toimis?",
IDS_YSM_HEADER_SETUP_COMPLETE_ABB: "Seadistatud",
IDS_YSM_BODY_PS_REMOTE_CONTROL_SETUP_IS_COMPLETE: "Seadme %s kaugjuhtimispuldi seadistamine on lõpule viidud.",
IDS_YSM_BODY_THIS_MODEL_IS_NOT_SUPPORTED: "Seda mudelit ei toetata.",
IDS_YSM_BODY_THE_REMOTE_CONTROL_WILL_BE_REMOVED: "Kaugjuhtimispult eemaldatakse.",
IDS_YSM_BODY_FAN_SPEED_ABB: "Ven. kiir.",
IDS_YSM_BODY_MODE_ABB2: "Režiim",
IDS_YSM_OPT_AV_RECEIVER_ABB2: "AV-vastuvõtja",
IDS_YSM_BODY_BLUE: "Sinine",
IDS_YSM_BODY_CHANNEL_DOWN_ABB: "Kanal alla",
IDS_YSM_BODY_CHANNEL_LIST_ABB: "Kanaliloend",
IDS_YSM_BODY_CHANNEL_UP_ABB: "Kanal üles",
IDS_YSM_BODY_DISK_MENU_ABB: "Kettamenüü",
IDS_YSM_BODY_DOWN: "Alla",
IDS_YSM_BODY_DVR: "DVR",
IDS_YSM_BODY_EJECT_ABB: "Väljuta",
IDS_YSM_BODY_FAST_FORWARD_ABB: "Edasikerimine",
IDS_YSM_BODY_FAVOURITE_ABB: "Lemmik",
IDS_YSM_BODY_FORMAT_HASPECT_ABB: "Form. (aspekt)",
IDS_YSM_BODY_GREEN_ABB: "Roheline",
IDS_YSM_BODY_HDMI_PD_ABB: "HDMI %d",
IDS_YSM_BODY_INPUT_ABB: "Sisestus",
IDS_YSM_BODY_LEFT: "Vasakule",
IDS_YSM_BODY_LIST: "Loend",
IDS_YSM_BODY_OTHER_COUNTRIES_ABB: "Muud riigid",
IDS_YSM_BODY_PAUSE: "Paus",
IDS_YSM_BODY_PLAY: "Esita",
IDS_YSM_BODY_PREVIOUS: "Eelmine",
IDS_YSM_BODY_PRE_CHANNEL_ABB: "Eelmine kanal",
IDS_YSM_BODY_RED: "Punane",
IDS_YSM_BODY_REWIND_ABB: "Tagasikerimine",
IDS_YSM_BODY_RIGHT_ABB2: "Parem",
IDS_YSM_BODY_SELECT: "Vali",
IDS_YSM_BODY_SOUND_MODE_ABB: "Helirežiim",
IDS_YSM_BODY_START_SETUP_OF_STB_REMOTE_CONTROL: "Alustage STB kaugjuhtimispuldi seadistamist.",
IDS_YSM_BODY_STOP: "Peata",
IDS_YSM_BODY_SUBTITLES_ABB2: "Subtiitrid",
IDS_YSM_BODY_SUBWOOFER_ABB: "Bassikõlar",
IDS_YSM_BODY_SURROUND_ABB: "Ruumiline",
IDS_YSM_BODY_TITLE_MENU_ABB: "Pealkirjamenüü",
IDS_YSM_BODY_UP: "Üles",
IDS_YSM_BODY_YELLOW_ABB: "Kollane",
IDS_YSM_BUTTON_CLEAR_HISTORY_ABB: "Kustuta ajalugu",
IDS_YSM_BUTTON_DONE: "Valmis",
IDS_YSM_BUTTON_HISTORY: "Ajalugu",
IDS_YSM_BUTTON_MENU: "Menüü",
IDS_YSM_BUTTON_NEXT: "Järgmine",
IDS_YSM_BUTTON_RETURN_UC: "NAASE",
IDS_YSM_BUTTON_SMART_HUB: "Smart Hub",
IDS_YSM_BUTTON_TOOLS_UC: "TÖÖRIISTAD",
IDS_YSM_BUTTON_VIDEO: "Videokõne",
IDS_YSM_BUTTON_VOD: "VOD",
IDS_YSM_HEADER_HELP: "Spikker",
IDS_YSM_OPT_0: "0",
IDS_YSM_OPT_1: "1",
IDS_YSM_OPT_2: "2",
IDS_YSM_OPT_3: "3",
IDS_YSM_OPT_4: "4",
IDS_YSM_OPT_5: "5",
IDS_YSM_OPT_6: "6",
IDS_YSM_OPT_7: "7",
IDS_YSM_OPT_8: "8",
IDS_YSM_OPT_9: "9",
IDS_YSM_OPT_ENTER: "Sisesta",
IDS_YSM_OPT_POWER: "Toide",
IDS_YSM_OPT_RECORD: "Salvesta",
IDS_YSM_OPT_VOLUME_DOWN: "Helitugevus vaiksemaks",
IDS_YSM_OPT_VOLUME_UP: "Helitugevus suuremaks",
IDS_YSM_TAB4_GUIDE: "Kava",
IDS_CHATON_BODY_INDIA_M_COUNTRYNAME: "India",
IDS_CHATON_BODY_NETHERLANDS_M_COUNTRYNAME: "Holland",
IDS_WCL_BODY_RUSSIA_M_COUNTRYNAME: "Venemaa",
IDS_CHATON_BODY_AUSTRALIA_M_COUNTRYNAME: "Austraalia",
IDS_CHATON_BODY_SAUDI_ARABIA_M_COUNTRYNAME: "Saudi Araabia",
IDS_CHATON_BODY_CANADA_M_COUNTRYNAME: "Kanada",
IDS_CHATON_BODY_BRAZIL_M_COUNTRYNAME: "Brasiilia",
IDS_CHATON_BODY_MEXICO_M_COUNTRYNAME: "Mehhiko",
IDS_CHATON_BODY_ARGENTINA_M_COUNTRYNAME: "Argentina",
IDS_CHATON_BODY_CHILE_M_COUNTRYNAME: "Tšiili",
IDS_CHATON_BODY_PERU_M_COUNTRYNAME: "Peruu",
IDS_CHATON_BODY_COLOMBIA_M_COUNTRYNAME: "Kolumbia",
IDS_COM_POP_TRY_AGAIN: "Proovi uuesti.",
IDS_YSM_BODY_CHANGE_DEVICE_M_NOUN_ABB: "Vaheta seadet",
IDS_YSM_BODY_TEMP_M_TEMPERATURE_ABB: "Temp.",
IDS_MSGF_BODY_REMOTE: "Kauge",
IDS_YSM_OPT_TEMP_DOWN_ABB: "Temp. alla",
IDS_YSM_OPT_TEMP_UP_ABB: "Temp. üles",
IDS_YSM_OPT_TURBO_ABB: "Turbo",
IDS_YSM_OPT_DISPLAY_ABB: "Ekraan",
IDS_YSM_OPT_DELIMITER_ABB: "Eraldaja",
IDS_YSM_OPT_INTERNET_ABB: "Internet",
IDS_YSM_OPT_PIP: "PiP",
IDS_YSM_OPT_PIP_SWAP_ABB: "PiP-i vahetamine",
IDS_YSM_OPT_PIP_CHANNEL_MINUS_ABB: "PiP-kanal -",
IDS_YSM_OPT_PIP_CHANNEL_PLUS_ABB: "PiP-kanal +",
IDS_YSM_OPT_PIP_MOVE_ABB: "PiP-i liigut.",
IDS_YSM_OPT_DTV: "DTV",
IDS_YSM_OPT_COMPONENT_PD_ABB: "Komponent %d",
IDS_YSM_OPT_USB: "USB",
IDS_YSM_OPT_PICTURE_ABB2: "Pilt",
IDS_YSM_OPT_3D: "3D",
IDS_YSM_OPT_REPLAY_ABB: "Esita uuesti",
IDS_YSM_OPT_DAY_MINUS: "Päev -",
IDS_YSM_OPT_DAY_PLUS: "Päev +",
IDS_YSM_OPT_RADIO: "Raadio",
IDS_YSM_OPT_TV_RADIO_ABB: "Teler/raadio",
IDS_YSM_OPT_SWING_DOWN_ABB: "Liiguta alla",
IDS_YSM_OPT_SWING_LEFT_ABB: "Liiguta vasakule",
IDS_YSM_OPT_SWING_RIGHT_ABB: "Liiguta paremale",
IDS_YSM_OPT_SWING_UP_ABB: "Liiguta üles",
IDS_YSM_OPT_PVR_MENU_ABB: "PVR-menüü",
IDS_YSM_OPT_RETURN_TO_LIVE_ABB: "Otsesaated",
IDS_YSM_OPT_POWER_OFF_ABB2: "Toide välja",
IDS_YSM_OPT_POWER_ON_ABB: "Toide sisse",
IDS_CHATON_BODY_JAPAN_M_COUNTRYNAME: "Jaapan",
IDS_YSM_BODY_VOL_M_VOLUME_ABB: "Vol",
IDS_YSM_HEADER_TV_AND_STB_ABB: "TV ja STB",
IDS_YSM_OPT_SLEEP_M_RESERVATION_ABB: "Unetaimer"};
STMS.setStmsMap( map );
STMS.refreshAllStr();
});