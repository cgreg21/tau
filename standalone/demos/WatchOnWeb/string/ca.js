WatchOnSandbox( "STMS", function( m ) {
var STMS = m.STMS,
map = {
IDS_ST_BODY_VOLUME_M_SOUND_ABB: "Volum",
IDS_SR_BODY_AIR_CONDITIONER: "Aire condicionat",
IDS_SR_BODY_AUSTRIA_M_COUNTRYNAME: "Àustria",
IDS_SR_BODY_BELGIUM_M_COUNTRYNAME: "Bèlgica",
IDS_SR_BODY_CHINA_M_COUNTRYNAME: "Xina",
IDS_SR_BODY_DENMARK_M_COUNTRYNAME: "Dinamarca",
IDS_SR_BODY_FAN_SPEED_DOWN: "Reduir velocitat del ventilador",
IDS_SR_BODY_FAN_SPEED_UP: "Accelerar ventilador",
IDS_SR_BODY_FINLAND_M_COUNTRYNAME: "Finlàndia",
IDS_SR_BODY_FRANCE_M_COUNTRYNAME: "França",
IDS_SR_BODY_GERMANY_M_COUNTRYNAME: "Alemanya",
IDS_SR_BODY_IRELAND_M_COUNTRYNAME: "Irlanda",
IDS_SR_BODY_ITALY_M_COUNTRYNAME: "Itàlia",
IDS_SR_BODY_LUXEMBOURG_M_COUNTRYNAME: "Luxemburg",
IDS_SR_BODY_MODE: "Mode",
IDS_SR_BODY_NORWAY_M_COUNTRYNAME: "Noruega",
IDS_SR_BODY_POLAND_M_COUNTRYNAME: "Polònia",
IDS_SR_BODY_PORTUGAL_M_COUNTRYNAME: "Portugal",
IDS_SR_BODY_SET_UP: "Configurar",
IDS_SR_BODY_SOUTH_KOREA_M_COUNTRYNAME: "Corea del Sud",
IDS_SR_BODY_SPAIN_M_COUNTRYNAME: "Espanya",
IDS_SR_BODY_SWEDEN_M_COUNTRYNAME: "Suècia",
IDS_SR_BODY_SWITZERLAND_M_COUNTRYNAME: "Suïssa",
IDS_SR_BODY_UNITED_KINGDOM_M_COUNTRYNAME: "Regne Unit",
IDS_SR_BODY_UNITED_STATES_OF_AMERICA_M_COUNTRYNAME: "Estats Units d'Amèrica",
IDS_SR_BUTTON_BACK: "Enrere",
IDS_SR_BUTTON_CANCEL_ABB: "Cancel·lar",
IDS_SR_BUTTON_DELETE: "Esborr",
IDS_SR_BUTTON_DONE: "Realit",
IDS_SR_BUTTON_EXIT: "Sortir",
IDS_SR_BUTTON_INFO: "Info",
IDS_SR_BUTTON_MENU: "Menú",
IDS_SR_BUTTON_MUTE: "Silenci",
IDS_SR_BUTTON_OK: "Acceptar",
IDS_SR_BUTTON_POWER: "Energia",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY: "Seleccioni el seu país",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY_REGION: "Seleccioni el seu país/regió",
IDS_SR_BUTTON_SHOW_OTHER_BRANDS: "Mostrar altres marques",
IDS_SR_BUTTON_SOURCE_T_SMART_REMOTE: "Font",
IDS_SR_BUTTON_TEMP_DOWN_M_TEMPERATURE: "Baix temp",
IDS_SR_BUTTON_TEMP_UP_M_TEMPERATURE: "Pujar temp",
IDS_SR_BUTTON_TV: "TV",
IDS_SR_BUTTON_YES: "Sí",
IDS_SR_HEADER_ALL_BRANDS: "Totes les marques",
IDS_SR_HEADER_DELETE_ABB: "Esborrar",
IDS_SR_HEADER_RESET: "Restablir",
IDS_SR_HEADER_WATCHON_M_APPLICATION: "WatchON",
IDS_SR_OPT_ADD_DEVICE_ABB: "Afegir dispositiu",
IDS_SR_OPT_STB_ABB: "Descod",
IDS_YSM_POP_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "Configurar el control remot al seu dispositiu?",
IDS_YSM_OPT_SHOW_ALL_BRANDS_ABB: "Mostrar totes les marques",
IDS_YSM_BUTTON_VOL_UC: "VOL",
IDS_YSM_BUTTON_CH: "Can",
IDS_YSM_BUTTON_NO: "No",
IDS_SAPPS_BODY_NOTICE: "Avís",
IDS_MSGF_HEADER_OPTION: "Opció",
IDS_MSGF_HEADER_OPTIONS: "Opcions",
IDS_SSCHOL_HEADER_COMPLETED: "Completat",
IDS_YSM_HEADER_SET_UP_REMOTE_ABB: "Configurar remot",
IDS_YSM_BODY_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "Configurar el control remot al seu dispositiu?",
IDS_YSM_BODY_LATIN_COUNTRIES_ABB: "Països llatins",
IDS_YSM_BODY_POINT_YOUR_WATCH_TOWARDS_THE_PS_AND_TAP_THE_POWER_BUTTON: "Apunti el rellotge cap a %s i toqui el botó d'alimentació.",
IDS_YSM_BODY_TAP_THE_BUTTON_ABB: "Toqui el botó.",
IDS_YSM_BODY_DID_IT_WORK_Q_ABB: "Ha funcionat?",
IDS_YSM_HEADER_SETUP_COMPLETE_ABB: "Config completa",
IDS_YSM_BODY_PS_REMOTE_CONTROL_SETUP_IS_COMPLETE: "S'ha completat la configuració del control remot %s.",
IDS_YSM_BODY_THIS_MODEL_IS_NOT_SUPPORTED: "Aquest model no és compatible.",
IDS_YSM_BODY_THE_REMOTE_CONTROL_WILL_BE_REMOVED: "S'eliminarà el control remot.",
IDS_YSM_BODY_FAN_SPEED_ABB: "Accel vent",
IDS_YSM_BODY_MODE_ABB2: "Mode",
IDS_YSM_OPT_AV_RECEIVER_ABB2: "Receptor AV",
IDS_YSM_BODY_BLUE: "Blau",
IDS_YSM_BODY_CHANNEL_DOWN_ABB: "Canal avall",
IDS_YSM_BODY_CHANNEL_LIST_ABB: "Llista canals",
IDS_YSM_BODY_CHANNEL_UP_ABB: "Canal amunt",
IDS_YSM_BODY_DISK_MENU_ABB: "Menú de disc",
IDS_YSM_BODY_DOWN: "Desc.",
IDS_YSM_BODY_DVR: "DVR",
IDS_YSM_BODY_EJECT_ABB: "Expulsar",
IDS_YSM_BODY_FAST_FORWARD_ABB: "Avanç ràpid",
IDS_YSM_BODY_FAVOURITE_ABB: "Preferit",
IDS_YSM_BODY_FORMAT_HASPECT_ABB: "Form (aspecte)",
IDS_YSM_BODY_GREEN_ABB: "Verd",
IDS_YSM_BODY_HDMI_PD_ABB: "HDMI %d",
IDS_YSM_BODY_INPUT_ABB: "Entrada",
IDS_YSM_BODY_LEFT: "Esquerra",
IDS_YSM_BODY_LIST: "Llista",
IDS_YSM_BODY_OTHER_COUNTRIES_ABB: "Altres països",
IDS_YSM_BODY_PAUSE: "Pausa",
IDS_YSM_BODY_PLAY: "Reproduir",
IDS_YSM_BODY_PREVIOUS: "Anterior",
IDS_YSM_BODY_PRE_CHANNEL_ABB: "Canal anterior",
IDS_YSM_BODY_RED: "Vermell",
IDS_YSM_BODY_REWIND_ABB: "Rebobinar",
IDS_YSM_BODY_RIGHT_ABB2: "Dreta",
IDS_YSM_BODY_SELECT: "Seleccionar",
IDS_YSM_BODY_SOUND_MODE_ABB: "Mode de so",
IDS_YSM_BODY_START_SETUP_OF_STB_REMOTE_CONTROL: "Iniciar la configuració del control remot del descodificador.",
IDS_YSM_BODY_STOP: "Aturar",
IDS_YSM_BODY_SUBTITLES_ABB2: "Subtítols",
IDS_YSM_BODY_SUBWOOFER_ABB: "Altaveu vib",
IDS_YSM_BODY_SURROUND_ABB: "Envoltant",
IDS_YSM_BODY_TITLE_MENU_ABB: "Menú de títol",
IDS_YSM_BODY_UP: "Amunt",
IDS_YSM_BODY_YELLOW_ABB: "Groc",
IDS_YSM_BUTTON_CLEAR_HISTORY_ABB: "Netejar l'historial",
IDS_YSM_BUTTON_DONE: "Realit",
IDS_YSM_BUTTON_HISTORY: "Historial",
IDS_YSM_BUTTON_MENU: "Menú",
IDS_YSM_BUTTON_NEXT: "Seg",
IDS_YSM_BUTTON_RETURN_UC: "TORNAR",
IDS_YSM_BUTTON_SMART_HUB: "Smart Hub",
IDS_YSM_BUTTON_TOOLS_UC: "EINES",
IDS_YSM_BUTTON_VIDEO: "Vídeo",
IDS_YSM_BUTTON_VOD: "VOD",
IDS_YSM_HEADER_HELP: "Ajuda",
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
IDS_YSM_OPT_ENTER: "Introduir",
IDS_YSM_OPT_POWER: "Energia",
IDS_YSM_OPT_RECORD: "Gravar",
IDS_YSM_OPT_VOLUME_DOWN: "Abaixar el volum",
IDS_YSM_OPT_VOLUME_UP: "Apujar el volum",
IDS_YSM_TAB4_GUIDE: "Guia",
IDS_CHATON_BODY_INDIA_M_COUNTRYNAME: "Índia",
IDS_CHATON_BODY_NETHERLANDS_M_COUNTRYNAME: "Països Baixos",
IDS_WCL_BODY_RUSSIA_M_COUNTRYNAME: "Rússia",
IDS_CHATON_BODY_AUSTRALIA_M_COUNTRYNAME: "Austràlia",
IDS_CHATON_BODY_SAUDI_ARABIA_M_COUNTRYNAME: "Aràbia Saudita",
IDS_CHATON_BODY_CANADA_M_COUNTRYNAME: "Canadà",
IDS_CHATON_BODY_BRAZIL_M_COUNTRYNAME: "Brasil",
IDS_CHATON_BODY_MEXICO_M_COUNTRYNAME: "Mèxic",
IDS_CHATON_BODY_ARGENTINA_M_COUNTRYNAME: "Argentina",
IDS_CHATON_BODY_CHILE_M_COUNTRYNAME: "Xile",
IDS_CHATON_BODY_PERU_M_COUNTRYNAME: "Perú",
IDS_CHATON_BODY_COLOMBIA_M_COUNTRYNAME: "Colòmbia",
IDS_COM_POP_TRY_AGAIN: "Tornar-ho a intentar",
IDS_YSM_BODY_CHANGE_DEVICE_M_NOUN_ABB: "Canv disposit",
IDS_YSM_BODY_TEMP_M_TEMPERATURE_ABB: "Temp.",
IDS_MSGF_BODY_REMOTE: "Remot",
IDS_YSM_OPT_TEMP_DOWN_ABB: "Baixar temperat",
IDS_YSM_OPT_TEMP_UP_ABB: "Pujar temperat",
IDS_YSM_OPT_TURBO_ABB: "Turbo",
IDS_YSM_OPT_DISPLAY_ABB: "Pantalla",
IDS_YSM_OPT_DELIMITER_ABB: "Delimitador",
IDS_YSM_OPT_INTERNET_ABB: "Internet",
IDS_YSM_OPT_PIP: "PiP",
IDS_YSM_OPT_PIP_SWAP_ABB: "Intercanvi PiP",
IDS_YSM_OPT_PIP_CHANNEL_MINUS_ABB: "Canal PiP -",
IDS_YSM_OPT_PIP_CHANNEL_PLUS_ABB: "Canal PiP +",
IDS_YSM_OPT_PIP_MOVE_ABB: "Moviment PiP",
IDS_YSM_OPT_DTV: "DTV",
IDS_YSM_OPT_COMPONENT_PD_ABB: "Component %d",
IDS_YSM_OPT_USB: "USB",
IDS_YSM_OPT_PICTURE_ABB2: "Foto",
IDS_YSM_OPT_3D: "3d",
IDS_YSM_OPT_REPLAY_ABB: "Repetir",
IDS_YSM_OPT_DAY_MINUS: "Dia -",
IDS_YSM_OPT_DAY_PLUS: "Dia +",
IDS_YSM_OPT_RADIO: "Ràdio",
IDS_YSM_OPT_TV_RADIO_ABB: "TV/ràdio",
IDS_YSM_OPT_SWING_DOWN_ABB: "Balanceig avall",
IDS_YSM_OPT_SWING_LEFT_ABB: "Balanceig esq",
IDS_YSM_OPT_SWING_RIGHT_ABB: "Balanceig dreta",
IDS_YSM_OPT_SWING_UP_ABB: "Balanceig amunt",
IDS_YSM_OPT_PVR_MENU_ABB: "Menú PVR",
IDS_YSM_OPT_RETURN_TO_LIVE_ABB: "Tornar a Directe",
IDS_YSM_OPT_POWER_OFF_ABB2: "Apagar",
IDS_YSM_OPT_POWER_ON_ABB: "Engegar",
IDS_CHATON_BODY_JAPAN_M_COUNTRYNAME: "Japó",
IDS_YSM_BODY_VOL_M_VOLUME_ABB: "Vol",
IDS_YSM_HEADER_TV_AND_STB_ABB: "TV i desc",
IDS_YSM_OPT_SLEEP_M_RESERVATION_ABB: "Repòs"};
STMS.setStmsMap( map );
STMS.refreshAllStr();
});