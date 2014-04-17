WatchOnSandbox( "STMS", function( m ) {
var STMS = m.STMS,
map = {
IDS_ST_BODY_VOLUME_M_SOUND_ABB: "مستوى صوت",
IDS_SR_BODY_AIR_CONDITIONER: "مكيف الهواء",
IDS_SR_BODY_AUSTRIA_M_COUNTRYNAME: "النمسا",
IDS_SR_BODY_BELGIUM_M_COUNTRYNAME: "بلجيكا",
IDS_SR_BODY_CHINA_M_COUNTRYNAME: "الصين",
IDS_SR_BODY_DENMARK_M_COUNTRYNAME: "الدنمارك",
IDS_SR_BODY_FAN_SPEED_DOWN: "خفض سرعة المروحة",
IDS_SR_BODY_FAN_SPEED_UP: "تسريع المروحة",
IDS_SR_BODY_FINLAND_M_COUNTRYNAME: "فنلندا",
IDS_SR_BODY_FRANCE_M_COUNTRYNAME: "فرنسا",
IDS_SR_BODY_GERMANY_M_COUNTRYNAME: "ألمانيا",
IDS_SR_BODY_IRELAND_M_COUNTRYNAME: "أيرلندا",
IDS_SR_BODY_ITALY_M_COUNTRYNAME: "إيطاليا",
IDS_SR_BODY_LUXEMBOURG_M_COUNTRYNAME: "لوكسمبورج",
IDS_SR_BODY_MODE: "النمط",
IDS_SR_BODY_NORWAY_M_COUNTRYNAME: "النرويج",
IDS_SR_BODY_POLAND_M_COUNTRYNAME: "بولندا",
IDS_SR_BODY_PORTUGAL_M_COUNTRYNAME: "البرتغال",
IDS_SR_BODY_SET_UP: "إعداد",
IDS_SR_BODY_SOUTH_KOREA_M_COUNTRYNAME: "كوريا الجنوبية",
IDS_SR_BODY_SPAIN_M_COUNTRYNAME: "إسبانيا",
IDS_SR_BODY_SWEDEN_M_COUNTRYNAME: "السويد",
IDS_SR_BODY_SWITZERLAND_M_COUNTRYNAME: "سويسرا",
IDS_SR_BODY_UNITED_KINGDOM_M_COUNTRYNAME: "المملكة المتحدة",
IDS_SR_BODY_UNITED_STATES_OF_AMERICA_M_COUNTRYNAME: "الولايات المتحدة الأمريكية",
IDS_SR_BUTTON_BACK: "رجوع",
IDS_SR_BUTTON_CANCEL_ABB: "إلغاء",
IDS_SR_BUTTON_DELETE: "حذف",
IDS_SR_BUTTON_DONE: "تم",
IDS_SR_BUTTON_EXIT: "خروج",
IDS_SR_BUTTON_INFO: "معلومات",
IDS_SR_BUTTON_MENU: "قائمة",
IDS_SR_BUTTON_MUTE: "كتم",
IDS_SR_BUTTON_OK: "موافق",
IDS_SR_BUTTON_POWER: "الطاقة",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY: "حدد بلدك",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY_REGION: "تحديد البلد/المنطقة",
IDS_SR_BUTTON_SHOW_OTHER_BRANDS: "عرض علامات تجارية أخرى",
IDS_SR_BUTTON_SOURCE_T_SMART_REMOTE: "المصدر",
IDS_SR_BUTTON_TEMP_DOWN_M_TEMPERATURE: "درجة حرارة منخفضة",
IDS_SR_BUTTON_TEMP_UP_M_TEMPERATURE: "درجة حرارة عالية",
IDS_SR_BUTTON_TV: "التلفاز",
IDS_SR_BUTTON_YES: "نعم",
IDS_SR_HEADER_ALL_BRANDS: "جميع العلامات التجارية",
IDS_SR_HEADER_DELETE_ABB: "مسح",
IDS_SR_HEADER_RESET: "إعادة ضبط",
IDS_SR_HEADER_WATCHON_M_APPLICATION: "WatchON",
IDS_SR_OPT_ADD_DEVICE_ABB: "إضافة جهاز",
IDS_SR_OPT_STB_ABB: "STB",
IDS_YSM_POP_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "هل ترير اعداد التحكم عن بعد على جهازك؟",
IDS_YSM_OPT_SHOW_ALL_BRANDS_ABB: "إظهار كل العلامات التجارية",
IDS_YSM_BUTTON_VOL_UC: "مستوى الصوت",
IDS_YSM_BUTTON_CH: "قناة",
IDS_YSM_BUTTON_NO: "لا",
IDS_SAPPS_BODY_NOTICE: "إشعار",
IDS_MSGF_HEADER_OPTION: "الخيار",
IDS_MSGF_HEADER_OPTIONS: "خيارات",
IDS_SSCHOL_HEADER_COMPLETED: "تم",
IDS_YSM_HEADER_SET_UP_REMOTE_ABB: "إعداد وحدة التحكم عن بعد",
IDS_YSM_BODY_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "هل ترير اعداد التحكم عن بعد على جهازك؟",
IDS_YSM_BODY_LATIN_COUNTRIES_ABB: "البلدان اللاتينية",
IDS_YSM_BODY_POINT_YOUR_WATCH_TOWARDS_THE_PS_AND_TAP_THE_POWER_BUTTON: "قم بتوجيه الساعة باتجاه %s وانقر فوق زر الطاقة.",
IDS_YSM_BODY_TAP_THE_BUTTON_ABB: "انقر فوق الزر.",
IDS_YSM_BODY_DID_IT_WORK_Q_ABB: "هل يعمل؟",
IDS_YSM_HEADER_SETUP_COMPLETE_ABB: "اكتمل الإعداد",
IDS_YSM_BODY_PS_REMOTE_CONTROL_SETUP_IS_COMPLETE: "اكتمل إعداد وحدة التحكم عن بعد لـ %s.",
IDS_YSM_BODY_THIS_MODEL_IS_NOT_SUPPORTED: "هذا الطراز غير مدعوم.",
IDS_YSM_BODY_THE_REMOTE_CONTROL_WILL_BE_REMOVED: "ستتم إزالة التحكم عن بعد.",
IDS_YSM_BODY_FAN_SPEED_ABB: "سرعة المروحة",
IDS_YSM_BODY_MODE_ABB2: "الوضع",
IDS_YSM_OPT_AV_RECEIVER_ABB2: "جهاز استقبال الصوت والصورة",
IDS_YSM_BODY_BLUE: "أزرق",
IDS_YSM_BODY_CHANNEL_DOWN_ABB: "قناة لأسفل",
IDS_YSM_BODY_CHANNEL_LIST_ABB: "قائمة القنوات",
IDS_YSM_BODY_CHANNEL_UP_ABB: "قناة لأعلى",
IDS_YSM_BODY_DISK_MENU_ABB: "قائمة الأقراص",
IDS_YSM_BODY_DOWN: "أسفل",
IDS_YSM_BODY_DVR: "DVR",
IDS_YSM_BODY_EJECT_ABB: "إخراج",
IDS_YSM_BODY_FAST_FORWARD_ABB: "تقديم سريع",
IDS_YSM_BODY_FAVOURITE_ABB: "المفضلة",
IDS_YSM_BODY_FORMAT_HASPECT_ABB: "التنسيق (العرض إلى الارتفاع)",
IDS_YSM_BODY_GREEN_ABB: "أخضر",
IDS_YSM_BODY_HDMI_PD_ABB: "HDMI‏ %d",
IDS_YSM_BODY_INPUT_ABB: "إدخال",
IDS_YSM_BODY_LEFT: "يسار",
IDS_YSM_BODY_LIST: "اللائحة",
IDS_YSM_BODY_OTHER_COUNTRIES_ABB: "بلاد أخرى",
IDS_YSM_BODY_PAUSE: "إيقاف مؤقت",
IDS_YSM_BODY_PLAY: "تشغيل",
IDS_YSM_BODY_PREVIOUS: "سابق",
IDS_YSM_BODY_PRE_CHANNEL_ABB: "القناة السابقة",
IDS_YSM_BODY_RED: "أحمر",
IDS_YSM_BODY_REWIND_ABB: "إرجاع",
IDS_YSM_BODY_RIGHT_ABB2: "يمين",
IDS_YSM_BODY_SELECT: "اختيار",
IDS_YSM_BODY_SOUND_MODE_ABB: "وضع الصوت",
IDS_YSM_BODY_START_SETUP_OF_STB_REMOTE_CONTROL: "ابدأ إعداد وحدة التحكم عن بعد لـ STB.",
IDS_YSM_BODY_STOP: "إيقاف",
IDS_YSM_BODY_SUBTITLES_ABB2: "العناوين الفرعية",
IDS_YSM_BODY_SUBWOOFER_ABB: "مضخم الصوت",
IDS_YSM_BODY_SURROUND_ABB: "مجسم",
IDS_YSM_BODY_TITLE_MENU_ABB: "قائمة العناوين",
IDS_YSM_BODY_UP: "أعلى",
IDS_YSM_BODY_YELLOW_ABB: "أصفر",
IDS_YSM_BUTTON_CLEAR_HISTORY_ABB: "مسح المحفوظات",
IDS_YSM_BUTTON_DONE: "تم",
IDS_YSM_BUTTON_HISTORY: "محفوظات",
IDS_YSM_BUTTON_MENU: "قائمة",
IDS_YSM_BUTTON_NEXT: "التالي",
IDS_YSM_BUTTON_RETURN_UC: "رجوع",
IDS_YSM_BUTTON_SMART_HUB: "Smart Hub",
IDS_YSM_BUTTON_TOOLS_UC: "أدوات",
IDS_YSM_BUTTON_VIDEO: "فيديو",
IDS_YSM_BUTTON_VOD: "VOD",
IDS_YSM_HEADER_HELP: "مساعدة",
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
IDS_YSM_OPT_ENTER: "إدخال",
IDS_YSM_OPT_POWER: "تشغيل",
IDS_YSM_OPT_RECORD: "تسجيل",
IDS_YSM_OPT_VOLUME_DOWN: "خفض مستوى الصوت",
IDS_YSM_OPT_VOLUME_UP: "رفع مستوى الصوت",
IDS_YSM_TAB4_GUIDE: "الدليل",
IDS_CHATON_BODY_INDIA_M_COUNTRYNAME: "الهند",
IDS_CHATON_BODY_NETHERLANDS_M_COUNTRYNAME: "هولندا",
IDS_WCL_BODY_RUSSIA_M_COUNTRYNAME: "روسيا",
IDS_CHATON_BODY_AUSTRALIA_M_COUNTRYNAME: "أستراليا",
IDS_CHATON_BODY_SAUDI_ARABIA_M_COUNTRYNAME: "السعودية",
IDS_CHATON_BODY_CANADA_M_COUNTRYNAME: "كندا",
IDS_CHATON_BODY_BRAZIL_M_COUNTRYNAME: "البرازيل",
IDS_CHATON_BODY_MEXICO_M_COUNTRYNAME: "المكسيك",
IDS_CHATON_BODY_ARGENTINA_M_COUNTRYNAME: "الأرجنتين",
IDS_CHATON_BODY_CHILE_M_COUNTRYNAME: "تشيلي",
IDS_CHATON_BODY_PERU_M_COUNTRYNAME: "بيرو",
IDS_CHATON_BODY_COLOMBIA_M_COUNTRYNAME: "كولومبيا",
IDS_COM_POP_TRY_AGAIN: "حاول مرة أخرى.",
IDS_YSM_BODY_CHANGE_DEVICE_M_NOUN_ABB: "تغيير الجهاز",
IDS_YSM_BODY_TEMP_M_TEMPERATURE_ABB: "درجة الحرارة",
IDS_MSGF_BODY_REMOTE: "تحكم",
IDS_YSM_OPT_TEMP_DOWN_ABB: "خفض درجة الحرارة",
IDS_YSM_OPT_TEMP_UP_ABB: "زيادة درجة الحرارة",
IDS_YSM_OPT_TURBO_ABB: "سرعة قصوى",
IDS_YSM_OPT_DISPLAY_ABB: "الشاشة",
IDS_YSM_OPT_DELIMITER_ABB: "المحدد",
IDS_YSM_OPT_INTERNET_ABB: "الإنترنت",
IDS_YSM_OPT_PIP: "صورة داخل صورة",
IDS_YSM_OPT_PIP_SWAP_ABB: "تبديل صورة داخل صورة",
IDS_YSM_OPT_PIP_CHANNEL_MINUS_ABB: "قناة صورة داخل صورة -",
IDS_YSM_OPT_PIP_CHANNEL_PLUS_ABB: "قناة صورة داخل صورة +",
IDS_YSM_OPT_PIP_MOVE_ABB: "نقل صورة داخل صورة",
IDS_YSM_OPT_DTV: "تلفاز رقمي",
IDS_YSM_OPT_COMPONENT_PD_ABB: "المكون %d",
IDS_YSM_OPT_USB: "USB",
IDS_YSM_OPT_PICTURE_ABB2: "صورة",
IDS_YSM_OPT_3D: "3D",
IDS_YSM_OPT_REPLAY_ABB: "إعادة تشغيل",
IDS_YSM_OPT_DAY_MINUS: "اليوم -",
IDS_YSM_OPT_DAY_PLUS: "اليوم +",
IDS_YSM_OPT_RADIO: "Radio",
IDS_YSM_OPT_TV_RADIO_ABB: "تلفاز/راديو",
IDS_YSM_OPT_SWING_DOWN_ABB: "تأرجح لأسفل",
IDS_YSM_OPT_SWING_LEFT_ABB: "تأرجح لليسار",
IDS_YSM_OPT_SWING_RIGHT_ABB: "تأرجح لليمين",
IDS_YSM_OPT_SWING_UP_ABB: "تأرجح لأعلى",
IDS_YSM_OPT_PVR_MENU_ABB: "قائمة PVR",
IDS_YSM_OPT_RETURN_TO_LIVE_ABB: "العودة إلى البث المباشر",
IDS_YSM_OPT_POWER_OFF_ABB2: "إيقاف التشغيل",
IDS_YSM_OPT_POWER_ON_ABB: "تشغيل",
IDS_CHATON_BODY_JAPAN_M_COUNTRYNAME: "اليابان",
IDS_YSM_BODY_VOL_M_VOLUME_ABB: "مستوى الصوت",
IDS_YSM_HEADER_TV_AND_STB_ABB: "STB التلفاز و",
IDS_YSM_OPT_SLEEP_M_RESERVATION_ABB: "السكون"};
STMS.setStmsMap( map );
STMS.refreshAllStr();
});
