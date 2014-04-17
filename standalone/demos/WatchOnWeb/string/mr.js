WatchOnSandbox( "STMS", function( m ) {
var STMS = m.STMS,
map = {
IDS_ST_BODY_VOLUME_M_SOUND_ABB: "व्हॉल्यूम",
IDS_SR_BODY_AIR_CONDITIONER: "एअर कंडिशनर",
IDS_SR_BODY_AUSTRIA_M_COUNTRYNAME: "ऑस्ट्रिया",
IDS_SR_BODY_BELGIUM_M_COUNTRYNAME: "बेल्जियम",
IDS_SR_BODY_CHINA_M_COUNTRYNAME: "चीन",
IDS_SR_BODY_DENMARK_M_COUNTRYNAME: "डेनमार्क",
IDS_SR_BODY_FAN_SPEED_DOWN: "पंख्याची गती कमी करा",
IDS_SR_BODY_FAN_SPEED_UP: "पंख्याची गती वाढवा",
IDS_SR_BODY_FINLAND_M_COUNTRYNAME: "फ़िनलँड",
IDS_SR_BODY_FRANCE_M_COUNTRYNAME: "फ्रांस",
IDS_SR_BODY_GERMANY_M_COUNTRYNAME: "जर्मनी",
IDS_SR_BODY_IRELAND_M_COUNTRYNAME: "आयरलँड",
IDS_SR_BODY_ITALY_M_COUNTRYNAME: "इटली",
IDS_SR_BODY_LUXEMBOURG_M_COUNTRYNAME: "लक्जेंबर्ग",
IDS_SR_BODY_MODE: "मोड",
IDS_SR_BODY_NORWAY_M_COUNTRYNAME: "नॉर्वे",
IDS_SR_BODY_POLAND_M_COUNTRYNAME: "पोलंड",
IDS_SR_BODY_PORTUGAL_M_COUNTRYNAME: "पोतुगाल",
IDS_SR_BODY_SET_UP: "सेट करा",
IDS_SR_BODY_SOUTH_KOREA_M_COUNTRYNAME: "दक्षिण कोरिया",
IDS_SR_BODY_SPAIN_M_COUNTRYNAME: "स्पेन",
IDS_SR_BODY_SWEDEN_M_COUNTRYNAME: "स्वीडन",
IDS_SR_BODY_SWITZERLAND_M_COUNTRYNAME: "स्विट्जरलैंड",
IDS_SR_BODY_UNITED_KINGDOM_M_COUNTRYNAME: "युनायटेड किंग्डम",
IDS_SR_BODY_UNITED_STATES_OF_AMERICA_M_COUNTRYNAME: "युनाइटेड स्टेट्स ऑफ अमेरीका",
IDS_SR_BUTTON_BACK: "मागे",
IDS_SR_BUTTON_CANCEL_ABB: "रद्द करा",
IDS_SR_BUTTON_DELETE: "हटवा",
IDS_SR_BUTTON_DONE: "झाले",
IDS_SR_BUTTON_EXIT: "बाहेर पडा",
IDS_SR_BUTTON_INFO: "माहिती",
IDS_SR_BUTTON_MENU: "मेनू",
IDS_SR_BUTTON_MUTE: "आवाज बंद",
IDS_SR_BUTTON_OK: "ठीक",
IDS_SR_BUTTON_POWER: "पॉवर",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY: "आपला देश निवडा",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY_REGION: "आपला देश/प्रदेश निवडा",
IDS_SR_BUTTON_SHOW_OTHER_BRANDS: "अन्‍य ब्रँड्स दर्शवा",
IDS_SR_BUTTON_SOURCE_T_SMART_REMOTE: "स्‍त्रोत",
IDS_SR_BUTTON_TEMP_DOWN_M_TEMPERATURE: "कमी तापमान",
IDS_SR_BUTTON_TEMP_UP_M_TEMPERATURE: "उच्‍च तापमान",
IDS_SR_BUTTON_TV: "TV",
IDS_SR_BUTTON_YES: "होय",
IDS_SR_HEADER_ALL_BRANDS: "सर्व ब्रँडस्",
IDS_SR_HEADER_DELETE_ABB: "हटवा",
IDS_SR_HEADER_RESET: "पुन्हा मांडणी करा",
IDS_SR_HEADER_WATCHON_M_APPLICATION: "WatchON",
IDS_SR_OPT_ADD_DEVICE_ABB: "उपकरण जोडा",
IDS_SR_OPT_STB_ABB: "STB",
IDS_YSM_POP_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "आपल्या उपकरणावर रिमोट नियंत्रण सेट करायचे?",
IDS_YSM_OPT_SHOW_ALL_BRANDS_ABB: "सर्व ब्रँडस दर्शवा",
IDS_YSM_BUTTON_VOL_UC: "व्हॉल्यूम",
IDS_YSM_BUTTON_CH: "चॅनल",
IDS_YSM_BUTTON_NO: "नाही",
IDS_SAPPS_BODY_NOTICE: "सूचना",
IDS_MSGF_HEADER_OPTION: "पर्याय",
IDS_MSGF_HEADER_OPTIONS: "पर्याय",
IDS_SSCHOL_HEADER_COMPLETED: "पूर्ण झाले",
IDS_YSM_HEADER_SET_UP_REMOTE_ABB: "रिमोट सेट करा",
IDS_YSM_BODY_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "आपल्या उपकरणावर रिमोट नियंत्रण सेट करायचे?",
IDS_YSM_BODY_LATIN_COUNTRIES_ABB: "लॅटिन देश",
IDS_YSM_BODY_POINT_YOUR_WATCH_TOWARDS_THE_PS_AND_TAP_THE_POWER_BUTTON: "आपले घड्याळ %s च्या दिशेने पॉइंट करा आणि पॉवर बटण टॅप करा.",
IDS_YSM_BODY_TAP_THE_BUTTON_ABB: "बटण टॅप करा.",
IDS_YSM_BODY_DID_IT_WORK_Q_ABB: "हे काम करते?",
IDS_YSM_HEADER_SETUP_COMPLETE_ABB: "सेटअप पूर्ण",
IDS_YSM_BODY_PS_REMOTE_CONTROL_SETUP_IS_COMPLETE: "%s रिमोट नियंत्रण सेटअप पूर्ण.",
IDS_YSM_BODY_THIS_MODEL_IS_NOT_SUPPORTED: "हा मॉडेल समर्थित नाही.",
IDS_YSM_BODY_THE_REMOTE_CONTROL_WILL_BE_REMOVED: "रिमोट नियंत्रण काढून टाकण्यात येईल.",
IDS_YSM_BODY_FAN_SPEED_ABB: "पंख्याची गती",
IDS_YSM_BODY_MODE_ABB2: "मोड",
IDS_YSM_OPT_AV_RECEIVER_ABB2: "AV प्राप्‍तकर्ता",
IDS_YSM_BODY_BLUE: "निळा",
IDS_YSM_BODY_CHANNEL_DOWN_ABB: "खालील चॅनल",
IDS_YSM_BODY_CHANNEL_LIST_ABB: "चॅनल यादी",
IDS_YSM_BODY_CHANNEL_UP_ABB: "वरील चॅनल",
IDS_YSM_BODY_DISK_MENU_ABB: "डिस्‍क मेनू",
IDS_YSM_BODY_DOWN: "खाली",
IDS_YSM_BODY_DVR: "DVR",
IDS_YSM_BODY_EJECT_ABB: "काढून टाका",
IDS_YSM_BODY_FAST_FORWARD_ABB: "जलद अग्रेषित",
IDS_YSM_BODY_FAVOURITE_ABB: "पसंत",
IDS_YSM_BODY_FORMAT_HASPECT_ABB: "स्‍वरूपण (स्थिती)",
IDS_YSM_BODY_GREEN_ABB: "हिरवा",
IDS_YSM_BODY_HDMI_PD_ABB: "HDMI %d",
IDS_YSM_BODY_INPUT_ABB: "निविष्ट",
IDS_YSM_BODY_LEFT: "डावी",
IDS_YSM_BODY_LIST: "यादी",
IDS_YSM_BODY_OTHER_COUNTRIES_ABB: "इतर देश",
IDS_YSM_BODY_PAUSE: "थांबवा",
IDS_YSM_BODY_PLAY: "चालू",
IDS_YSM_BODY_PREVIOUS: "मागील",
IDS_YSM_BODY_PRE_CHANNEL_ABB: "पूर्व चॅनेल",
IDS_YSM_BODY_RED: "लाल",
IDS_YSM_BODY_REWIND_ABB: "रिवाइंड",
IDS_YSM_BODY_RIGHT_ABB2: "उजवे",
IDS_YSM_BODY_SELECT: "निवडा",
IDS_YSM_BODY_SOUND_MODE_ABB: "ध्वनी मोड",
IDS_YSM_BODY_START_SETUP_OF_STB_REMOTE_CONTROL: "STB रिमोट नियंत्रणाचा सेटअप सुरू करा.",
IDS_YSM_BODY_STOP: "थांबा",
IDS_YSM_BODY_SUBTITLES_ABB2: "उपशीर्षके",
IDS_YSM_BODY_SUBWOOFER_ABB: "सबवूफर",
IDS_YSM_BODY_SURROUND_ABB: "सभोवताल",
IDS_YSM_BODY_TITLE_MENU_ABB: "शीर्षक मेनू",
IDS_YSM_BODY_UP: "वर",
IDS_YSM_BODY_YELLOW_ABB: "पिवळा",
IDS_YSM_BUTTON_CLEAR_HISTORY_ABB: "इतिहास साफ करा",
IDS_YSM_BUTTON_DONE: "झाले",
IDS_YSM_BUTTON_HISTORY: "हिस्ट्री",
IDS_YSM_BUTTON_MENU: "मेनू",
IDS_YSM_BUTTON_NEXT: "पुढे",
IDS_YSM_BUTTON_RETURN_UC: "परत या",
IDS_YSM_BUTTON_SMART_HUB: "स्मार्ट हब",
IDS_YSM_BUTTON_TOOLS_UC: "टूल्स",
IDS_YSM_BUTTON_VIDEO: "व्हिडि.",
IDS_YSM_BUTTON_VOD: "VOD",
IDS_YSM_HEADER_HELP: "मदत",
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
IDS_YSM_OPT_ENTER: "प्रविष्ट करा",
IDS_YSM_OPT_POWER: "पॉवर",
IDS_YSM_OPT_RECORD: "रेकॉर्ड करा",
IDS_YSM_OPT_VOLUME_DOWN: "निम्‍न आवाज",
IDS_YSM_OPT_VOLUME_UP: "उच्‍च आवाज",
IDS_YSM_TAB4_GUIDE: "मार्गदर्शक",
IDS_CHATON_BODY_INDIA_M_COUNTRYNAME: "भारत",
IDS_CHATON_BODY_NETHERLANDS_M_COUNTRYNAME: "नेदरलैंड्स",
IDS_WCL_BODY_RUSSIA_M_COUNTRYNAME: "रशिया",
IDS_CHATON_BODY_AUSTRALIA_M_COUNTRYNAME: "ऑस्ट्रेलिया",
IDS_CHATON_BODY_SAUDI_ARABIA_M_COUNTRYNAME: "सौदी अरब",
IDS_CHATON_BODY_CANADA_M_COUNTRYNAME: "कॅनडा",
IDS_CHATON_BODY_BRAZIL_M_COUNTRYNAME: "ब्राझील",
IDS_CHATON_BODY_MEXICO_M_COUNTRYNAME: "मेक्सिको",
IDS_CHATON_BODY_ARGENTINA_M_COUNTRYNAME: "अर्जेंटिना",
IDS_CHATON_BODY_CHILE_M_COUNTRYNAME: "चिली",
IDS_CHATON_BODY_PERU_M_COUNTRYNAME: "पेरू",
IDS_CHATON_BODY_COLOMBIA_M_COUNTRYNAME: "कोलंबिया",
IDS_COM_POP_TRY_AGAIN: "पुन्हा प्रयत्न करा.",
IDS_YSM_BODY_CHANGE_DEVICE_M_NOUN_ABB: "उपकरण बदला",
IDS_YSM_BODY_TEMP_M_TEMPERATURE_ABB: "तापमान",
IDS_MSGF_BODY_REMOTE: "रिमोट",
IDS_YSM_OPT_TEMP_DOWN_ABB: "कमी तापमान",
IDS_YSM_OPT_TEMP_UP_ABB: "उच्‍च तापमान",
IDS_YSM_OPT_TURBO_ABB: "टर्बो",
IDS_YSM_OPT_DISPLAY_ABB: "प्रदर्शित करा",
IDS_YSM_OPT_DELIMITER_ABB: "डेलिमीटर",
IDS_YSM_OPT_INTERNET_ABB: "इंटरनेट",
IDS_YSM_OPT_PIP: "PiP",
IDS_YSM_OPT_PIP_SWAP_ABB: "PiP स्‍वॅप",
IDS_YSM_OPT_PIP_CHANNEL_MINUS_ABB: "PiP चॅनेल -",
IDS_YSM_OPT_PIP_CHANNEL_PLUS_ABB: "PiP चॅनेल +",
IDS_YSM_OPT_PIP_MOVE_ABB: "PiP हलवा",
IDS_YSM_OPT_DTV: "DTV",
IDS_YSM_OPT_COMPONENT_PD_ABB: "भाग %d",
IDS_YSM_OPT_USB: "USB",
IDS_YSM_OPT_PICTURE_ABB2: "चित्र",
IDS_YSM_OPT_3D: "3d",
IDS_YSM_OPT_REPLAY_ABB: "उत्तर द्या",
IDS_YSM_OPT_DAY_MINUS: "दिवस -",
IDS_YSM_OPT_DAY_PLUS: "दिवस +",
IDS_YSM_OPT_RADIO: "रेडियो",
IDS_YSM_OPT_TV_RADIO_ABB: "TV/रेडिओ",
IDS_YSM_OPT_SWING_DOWN_ABB: "स्विंग खाली",
IDS_YSM_OPT_SWING_LEFT_ABB: "स्विंग डावीकडे",
IDS_YSM_OPT_SWING_RIGHT_ABB: "स्विंग उजवीकडे",
IDS_YSM_OPT_SWING_UP_ABB: "स्विंग वर",
IDS_YSM_OPT_PVR_MENU_ABB: "PVR मेनू",
IDS_YSM_OPT_RETURN_TO_LIVE_ABB: "थेट वर परत जा",
IDS_YSM_OPT_POWER_OFF_ABB2: "पॉवर बंद",
IDS_YSM_OPT_POWER_ON_ABB: "पॉवर चालू",
IDS_CHATON_BODY_JAPAN_M_COUNTRYNAME: "जापान",
IDS_YSM_BODY_VOL_M_VOLUME_ABB: "व्हॉल्यूम",
IDS_YSM_HEADER_TV_AND_STB_ABB: "TV आणि STB",
IDS_YSM_OPT_SLEEP_M_RESERVATION_ABB: "झोप"};
STMS.setStmsMap( map );
STMS.refreshAllStr();
});