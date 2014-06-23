WatchOnSandbox( "STMS", function( m ) {
var STMS = m.STMS,
map = {
IDS_ST_BODY_VOLUME_M_SOUND_ABB: "ವಾಲ್ಯೂಮ್",
IDS_SR_BODY_AIR_CONDITIONER: "ಏರ್ ಕಂಡೀಶನರ್",
IDS_SR_BODY_AUSTRIA_M_COUNTRYNAME: "ಆಸ್ಟ್ರಿಯಾ",
IDS_SR_BODY_BELGIUM_M_COUNTRYNAME: "ಬೆಲ್ಜಿಯಂ",
IDS_SR_BODY_CHINA_M_COUNTRYNAME: "ಚೀನಾ",
IDS_SR_BODY_DENMARK_M_COUNTRYNAME: "ಡೆನ್‍ಮಾರ್ಕ್",
IDS_SR_BODY_FAN_SPEED_DOWN: "ಫ್ಯಾನ್ ಸ್ಪೀಡ್ ಕಡಿಮೆ",
IDS_SR_BODY_FAN_SPEED_UP: "ಫ್ಯಾನ್ ಸ್ಪೀಡ್ ಹೆಚ್ಚು",
IDS_SR_BODY_FINLAND_M_COUNTRYNAME: "ಫಿನ್‌ಲ್ಯಾಂಡ್",
IDS_SR_BODY_FRANCE_M_COUNTRYNAME: "ಫ್ರಾನ್ಸ್",
IDS_SR_BODY_GERMANY_M_COUNTRYNAME: "ಜರ್ಮನಿ",
IDS_SR_BODY_IRELAND_M_COUNTRYNAME: "ಐರ್ಲ್ಯಾಂಡ್",
IDS_SR_BODY_ITALY_M_COUNTRYNAME: "ಇಟಲಿ",
IDS_SR_BODY_LUXEMBOURG_M_COUNTRYNAME: "ಲಕ್ಸ್oಬರ್ಗ್",
IDS_SR_BODY_MODE: "ಮೊಡ್",
IDS_SR_BODY_NORWAY_M_COUNTRYNAME: "ನಾರ್ವೆ",
IDS_SR_BODY_POLAND_M_COUNTRYNAME: "ಪೋಲ್ಯಾಂಡ್",
IDS_SR_BODY_PORTUGAL_M_COUNTRYNAME: "ಪೋರ್ಚುಗಲ್",
IDS_SR_BODY_SET_UP: "ಸೆಟಪ್",
IDS_SR_BODY_SOUTH_KOREA_M_COUNTRYNAME: "ಸೌತ್ ಕೊರಿಯಾ",
IDS_SR_BODY_SPAIN_M_COUNTRYNAME: "ಸ್ಪೇನ್",
IDS_SR_BODY_SWEDEN_M_COUNTRYNAME: "ಸ್ವೀಡನ್",
IDS_SR_BODY_SWITZERLAND_M_COUNTRYNAME: "ಸ್ವಿಟರ್ಜಲ್ಯಾಂಡ್",
IDS_SR_BODY_UNITED_KINGDOM_M_COUNTRYNAME: "ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್",
IDS_SR_BODY_UNITED_STATES_OF_AMERICA_M_COUNTRYNAME: "ಯುನೈಟೆಡ್ ಸ್ಟೇಟ್ಸ್ ಆಫ್ ಅಮೆರಿಕಾ",
IDS_SR_BUTTON_BACK: "ಹಿಂದೆ",
IDS_SR_BUTTON_CANCEL_ABB: "ರದ್ದು",
IDS_SR_BUTTON_DELETE: "ಅಳಿಸಿ",
IDS_SR_BUTTON_DONE: "ಮಾಡಿದೆ",
IDS_SR_BUTTON_EXIT: "ನಿರ್ಗಮನ",
IDS_SR_BUTTON_INFO: "ಮಾಹಿತಿ",
IDS_SR_BUTTON_MENU: "ಮೆನು",
IDS_SR_BUTTON_MUTE: "ಮ್ಯೂಟ್",
IDS_SR_BUTTON_OK: "ಓಕೆ",
IDS_SR_BUTTON_POWER: "ಪವರ್",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY: "ನಿಮ್ಮ ದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY_REGION: "ನಿಮ್ಮ ರಾಷ್ಟ್ರ/ಪ್ರಾಂತ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
IDS_SR_BUTTON_SHOW_OTHER_BRANDS: "ಬೇರೆ ಬ್ರಾಂಡ್‌‌ಗಳನ್ನು ತೋರಿಸಿ",
IDS_SR_BUTTON_SOURCE_T_SMART_REMOTE: "ಮೂಲ",
IDS_SR_BUTTON_TEMP_DOWN_M_TEMPERATURE: "ಉಷ್ಣತೆ ಕಡಿಮೆ",
IDS_SR_BUTTON_TEMP_UP_M_TEMPERATURE: "ಉಷ್ಣತೆ ಹೆಚ್ಚು",
IDS_SR_BUTTON_TV: "TV",
IDS_SR_BUTTON_YES: "ಹೌದು",
IDS_SR_HEADER_ALL_BRANDS: "ಎಲ್ಲಾ ಬ್ರಾಂಡ್‌ಗಳು",
IDS_SR_HEADER_DELETE_ABB: "ಅಳಿಸಿ",
IDS_SR_HEADER_RESET: "ರೀಸೆಟ್",
IDS_SR_HEADER_WATCHON_M_APPLICATION: "WatchON",
IDS_SR_OPT_ADD_DEVICE_ABB: "ಸಾಧನ ಸೇರಿಸಿ",
IDS_SR_OPT_STB_ABB: "STB",
IDS_YSM_POP_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ರಿಮೋಟ್‌ ಕಂಟ್ರೋಲ್ ಸೆಟ್ ಅಪ್ ಮಾಡುವುದೇ?",
IDS_YSM_OPT_SHOW_ALL_BRANDS_ABB: "ಎಲ್ಲ ಬ್ರಾಂಡ್‌‌ಗಳನ್ನು ತೋರಿಸಿ",
IDS_YSM_BUTTON_VOL_UC: "ವಾಲ್ಯೂಮ್",
IDS_YSM_BUTTON_CH: "ಚಾನೆಲ್",
IDS_YSM_BUTTON_NO: "ಇಲ್ಲ",
IDS_SAPPS_BODY_NOTICE: "ಪ್ರಕಟಣೆ",
IDS_MSGF_HEADER_OPTION: "ಆಯ್ಕೆ",
IDS_MSGF_HEADER_OPTIONS: "ಆಯ್ಕೆಗಳು",
IDS_SSCHOL_HEADER_COMPLETED: "ಪೂರ್ಣಗೊಂಡಿದೆ",
IDS_YSM_HEADER_SET_UP_REMOTE_ABB: "ಸೆಟ್ ಅಪ್ ರಿಮೋಟ್",
IDS_YSM_BODY_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ರಿಮೋಟ್‌ ಕಂಟ್ರೋಲ್ ಸೆಟ್ ಅಪ್ ಮಾಡುವುದೇ?",
IDS_YSM_BODY_LATIN_COUNTRIES_ABB: "ಲ್ಯಾಟಿನ್ ದೇಶಗಳು",
IDS_YSM_BODY_POINT_YOUR_WATCH_TOWARDS_THE_PS_AND_TAP_THE_POWER_BUTTON: "ನಿಮ್ಮ ವಾಚ್ ಅನ್ನು %s ನತ್ತ ಗುರಿ ಮಾಡಿ ಮತ್ತು ಪವರ್ ಬಟನ್ ತಟ್ಟಿ.",
IDS_YSM_BODY_TAP_THE_BUTTON_ABB: "ಬಟನ್ ತಟ್ಟಿ.",
IDS_YSM_BODY_DID_IT_WORK_Q_ABB: "ಅದು ಕಾರ್ಯನಿರ್ವಹಿಸಿತೇ?",
IDS_YSM_HEADER_SETUP_COMPLETE_ABB: "ಸೆಟಪ್ ಪೂರ್ಣಗೊಂಡಿದೆ",
IDS_YSM_BODY_PS_REMOTE_CONTROL_SETUP_IS_COMPLETE: "%s ರಿಮೋಟ್ ನಿಯಂತ್ರಣ ಸೆಟಪ್ ಪೂರ್ಣಗೊಂಡಿದೆ.",
IDS_YSM_BODY_THIS_MODEL_IS_NOT_SUPPORTED: "ಈ ಮಾಡೆಲ್ ಬೆಂಬಲಿಸಲ್ಪಟ್ಟಿಲ್ಲ.",
IDS_YSM_BODY_THE_REMOTE_CONTROL_WILL_BE_REMOVED: "ರಿಮೋಟ್ ನಿಯಂತ್ರಣವನ್ನು ತೆಗೆಯಲಾಗುತ್ತದೆ.",
IDS_YSM_BODY_FAN_SPEED_ABB: "ಫ್ಯಾನ್ ವೇಗ",
IDS_YSM_BODY_MODE_ABB2: "ಮೋಡ್",
IDS_YSM_OPT_AV_RECEIVER_ABB2: "AV ರಿಸೀವರ್",
IDS_YSM_BODY_BLUE: "ನೀಲಿ",
IDS_YSM_BODY_CHANNEL_DOWN_ABB: "ಚಾನೆಲ್ ಕಡಿಮೆ",
IDS_YSM_BODY_CHANNEL_LIST_ABB: "ಚಾನೆಲ್ ಪಟ್ಟಿ",
IDS_YSM_BODY_CHANNEL_UP_ABB: "ಚಾನೆಲ್ ಹೆಚ್ಚು",
IDS_YSM_BODY_DISK_MENU_ABB: "ಡಿಸ್ಕ್ ಮೆನು",
IDS_YSM_BODY_DOWN: "ಕೆಳಗೆ",
IDS_YSM_BODY_DVR: "DVR",
IDS_YSM_BODY_EJECT_ABB: "ಹೊರತೆಗೆ",
IDS_YSM_BODY_FAST_FORWARD_ABB: "ತ್ವರಿತ ಫಾರ್ವರ್ಡ್",
IDS_YSM_BODY_FAVOURITE_ABB: "ಮೆಚ್ಚಿನವು",
IDS_YSM_BODY_FORMAT_HASPECT_ABB: "ಸ್ವರೂಪ (ಆಸ್ಪೆಕ್ಟ್)",
IDS_YSM_BODY_GREEN_ABB: "ಹಸಿರು",
IDS_YSM_BODY_HDMI_PD_ABB: "HDMI %d",
IDS_YSM_BODY_INPUT_ABB: "ಇನ್‌ಪುಟ್",
IDS_YSM_BODY_LEFT: "ಎಡ",
IDS_YSM_BODY_LIST: "ಪಟ್ಟಿ",
IDS_YSM_BODY_OTHER_COUNTRIES_ABB: "ಇತರ ದೇಶಗಳು",
IDS_YSM_BODY_PAUSE: "ವಿರಾ.",
IDS_YSM_BODY_PLAY: "ಪ್ಲೇ",
IDS_YSM_BODY_PREVIOUS: "ಹಿಂದಿನ",
IDS_YSM_BODY_PRE_CHANNEL_ABB: "ಚಾನೆಲ್ ಪೂರ್ವ",
IDS_YSM_BODY_RED: "ಕೆಂಪು",
IDS_YSM_BODY_REWIND_ABB: "ರಿವೈಂಡ್",
IDS_YSM_BODY_RIGHT_ABB2: "ಬಲ",
IDS_YSM_BODY_SELECT: "ಆಯ್ಕೆ",
IDS_YSM_BODY_SOUND_MODE_ABB: "ಶಬ್ದ ಮೋಡ್",
IDS_YSM_BODY_START_SETUP_OF_STB_REMOTE_CONTROL: "STB ರಿಮೋಟ್ ನಿಯಂತ್ರಣದ ಸೆಟಪ್ ಪ್ರಾರಂಭಿಸಿ.",
IDS_YSM_BODY_STOP: "ನಿಲ್ಲಿಸು",
IDS_YSM_BODY_SUBTITLES_ABB2: "ಉಪಶೀರ್ಷಿಕೆಗಳು",
IDS_YSM_BODY_SUBWOOFER_ABB: "ಸಬ್‌ವೂಫರ್",
IDS_YSM_BODY_SURROUND_ABB: "ಸರೌಂಡ್",
IDS_YSM_BODY_TITLE_MENU_ABB: "ಶೀರ್ಷಿಕೆ ಮೆನು",
IDS_YSM_BODY_UP: "ಮೇಲೆ",
IDS_YSM_BODY_YELLOW_ABB: "ಹಳದಿ",
IDS_YSM_BUTTON_CLEAR_HISTORY_ABB: "ಇತಿಹಾಸ ತೆರವುಗೊಳಿಸಿ",
IDS_YSM_BUTTON_DONE: "ಮಾಡಿದೆ",
IDS_YSM_BUTTON_HISTORY: "ಇತಿಹಾಸ",
IDS_YSM_BUTTON_MENU: "ಮೆನು",
IDS_YSM_BUTTON_NEXT: "ಮುಂದಿನ",
IDS_YSM_BUTTON_RETURN_UC: "ಹಿಂತಿರುಗಿಸಿ",
IDS_YSM_BUTTON_SMART_HUB: "ಸ್ಮಾರ್ಟ್ ಹಬ್",
IDS_YSM_BUTTON_TOOLS_UC: "ಸಾಧನಗಳು",
IDS_YSM_BUTTON_VIDEO: "ವೀಡಿಯೊ",
IDS_YSM_BUTTON_VOD: "VOD",
IDS_YSM_HEADER_HELP: "ಸಹಾಯ",
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
IDS_YSM_OPT_ENTER: "ನಮೂದಿಸು",
IDS_YSM_OPT_POWER: "ಪವರ್",
IDS_YSM_OPT_RECORD: "ರೆಕಾರ್ಡ್",
IDS_YSM_OPT_VOLUME_DOWN: "ವಾಲ್ಯೂಮ್ ಕಡಿಮೆ",
IDS_YSM_OPT_VOLUME_UP: "ವಾಲ್ಯೂಮ್ ಹೆಚ್ಚು",
IDS_YSM_TAB4_GUIDE: "ಮಾರ್ಗದರ್ಶಿ",
IDS_CHATON_BODY_INDIA_M_COUNTRYNAME: "ಭಾರತ",
IDS_CHATON_BODY_NETHERLANDS_M_COUNTRYNAME: "ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್",
IDS_WCL_BODY_RUSSIA_M_COUNTRYNAME: "ರಷ್ಯಾ",
IDS_CHATON_BODY_AUSTRALIA_M_COUNTRYNAME: "ಆಸ್ಟ್ರೇಲಿಯಾ",
IDS_CHATON_BODY_SAUDI_ARABIA_M_COUNTRYNAME: "ಸೌದಿ ಅರೇಬಿಯಾ",
IDS_CHATON_BODY_CANADA_M_COUNTRYNAME: "ಕೆನಡಾ",
IDS_CHATON_BODY_BRAZIL_M_COUNTRYNAME: "ಬ್ರೇಜಿಲ್",
IDS_CHATON_BODY_MEXICO_M_COUNTRYNAME: "ಮೆಕ್ಸಿಕೊ",
IDS_CHATON_BODY_ARGENTINA_M_COUNTRYNAME: "ಅರ್ಜೆಂಟಿನಾ",
IDS_CHATON_BODY_CHILE_M_COUNTRYNAME: "ಚಿಲೀ",
IDS_CHATON_BODY_PERU_M_COUNTRYNAME: "ಪೆರು",
IDS_CHATON_BODY_COLOMBIA_M_COUNTRYNAME: "ಕೊಲಂಬಿಯಾ",
IDS_COM_POP_TRY_AGAIN: "ಪುನಃ ಪ್ರಯತ್ನಸಿ.",
IDS_YSM_BODY_CHANGE_DEVICE_M_NOUN_ABB: "ಸಾಧನ ಬದಲಾಯಿಸಿ",
IDS_YSM_BODY_TEMP_M_TEMPERATURE_ABB: "ಉಷ್ಣತೆ",
IDS_MSGF_BODY_REMOTE: "ರಿಮೋಟ್",
IDS_YSM_OPT_TEMP_DOWN_ABB: "ಉಷ್ಣತೆ ಕಡಿಮೆ",
IDS_YSM_OPT_TEMP_UP_ABB: "ಉಷ್ಣತೆ ಹೆಚ್ಚು",
IDS_YSM_OPT_TURBO_ABB: "ಟರ್ಬೋ",
IDS_YSM_OPT_DISPLAY_ABB: "ಪ್ರದರ್ಶನ",
IDS_YSM_OPT_DELIMITER_ABB: "ಡೆಲಿಮೀಟರ್",
IDS_YSM_OPT_INTERNET_ABB: "ಇಂಟರ್‌ನೆಟ್",
IDS_YSM_OPT_PIP: "PiP",
IDS_YSM_OPT_PIP_SWAP_ABB: "PiP ಸ್ವಾಪ್ ಮಾಡಿ",
IDS_YSM_OPT_PIP_CHANNEL_MINUS_ABB: "PiP ಚಾನಲ್ -",
IDS_YSM_OPT_PIP_CHANNEL_PLUS_ABB: "PiP ಚಾನಲ್ +",
IDS_YSM_OPT_PIP_MOVE_ABB: "PiP ಸರಿಸು",
IDS_YSM_OPT_DTV: "DTV",
IDS_YSM_OPT_COMPONENT_PD_ABB: "ಅವಯವ %d",
IDS_YSM_OPT_USB: "USB",
IDS_YSM_OPT_PICTURE_ABB2: "ಚಿತ್ರ",
IDS_YSM_OPT_3D: "3d",
IDS_YSM_OPT_REPLAY_ABB: "ರಿಪ್ಲೈ",
IDS_YSM_OPT_DAY_MINUS: "ದಿನ -",
IDS_YSM_OPT_DAY_PLUS: "ದಿನ +",
IDS_YSM_OPT_RADIO: "ರೇಡಿಯೊ",
IDS_YSM_OPT_TV_RADIO_ABB: "TV/ರೇಡಿಯೋ",
IDS_YSM_OPT_SWING_DOWN_ABB: "ಕೆಳಗೆ ಸ್ವಿಂಗ್ ಮಾಡು",
IDS_YSM_OPT_SWING_LEFT_ABB: "ಎಡಕ್ಕೆ ಸ್ವಿಂಗ್ ಮಾಡು",
IDS_YSM_OPT_SWING_RIGHT_ABB: "ಬಲಕ್ಕೆ ಸ್ವಿಂಗ್ ಮಾಡು",
IDS_YSM_OPT_SWING_UP_ABB: "ಮೇಲಕ್ಕೆ ಸ್ವಿಂಗ್ ಮಾಡು",
IDS_YSM_OPT_PVR_MENU_ABB: "PVR ಮೆನು",
IDS_YSM_OPT_RETURN_TO_LIVE_ABB: "ಲೈವ್‌ಗೆ ಹಿಂತಿರುಗಿ",
IDS_YSM_OPT_POWER_OFF_ABB2: "ಪವರ್ ಆಫ್‌",
IDS_YSM_OPT_POWER_ON_ABB: "ಪವರ್ ಆನ್",
IDS_CHATON_BODY_JAPAN_M_COUNTRYNAME: "ಜಪಾನ್",
IDS_YSM_BODY_VOL_M_VOLUME_ABB: "ಧ್ವನಿಮಟ್ಟ",
IDS_YSM_HEADER_TV_AND_STB_ABB: "TV ಮತ್ತು STB",
IDS_YSM_OPT_SLEEP_M_RESERVATION_ABB: "ನಿದ್ರೆ"};
STMS.setStmsMap( map );
STMS.refreshAllStr();
});