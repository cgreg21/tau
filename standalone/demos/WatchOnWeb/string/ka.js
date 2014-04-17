WatchOnSandbox( "STMS", function( m ) {
var STMS = m.STMS,
map = {
IDS_ST_BODY_VOLUME_M_SOUND_ABB: "ხმის სიმაღლე",
IDS_SR_BODY_AIR_CONDITIONER: "კონდიციონერი",
IDS_SR_BODY_AUSTRIA_M_COUNTRYNAME: "ავსტრია",
IDS_SR_BODY_BELGIUM_M_COUNTRYNAME: "ბელგია",
IDS_SR_BODY_CHINA_M_COUNTRYNAME: "ჩინეთი",
IDS_SR_BODY_DENMARK_M_COUNTRYNAME: "დანია",
IDS_SR_BODY_FAN_SPEED_DOWN: "ვენტილატორის სიჩქარის შემცირება",
IDS_SR_BODY_FAN_SPEED_UP: "ვენტილატორის სიჩქარის გაზრდა",
IDS_SR_BODY_FINLAND_M_COUNTRYNAME: "ფინეთი",
IDS_SR_BODY_FRANCE_M_COUNTRYNAME: "საფრანგეთი",
IDS_SR_BODY_GERMANY_M_COUNTRYNAME: "გერმანია",
IDS_SR_BODY_IRELAND_M_COUNTRYNAME: "ირლანდია",
IDS_SR_BODY_ITALY_M_COUNTRYNAME: "იტალია",
IDS_SR_BODY_LUXEMBOURG_M_COUNTRYNAME: "ლუქსემბურგი",
IDS_SR_BODY_MODE: "რეჟიმი",
IDS_SR_BODY_NORWAY_M_COUNTRYNAME: "ნორვეგია",
IDS_SR_BODY_POLAND_M_COUNTRYNAME: "პოლონეთი",
IDS_SR_BODY_PORTUGAL_M_COUNTRYNAME: "პორტუგალია",
IDS_SR_BODY_SET_UP: "მოწყობა",
IDS_SR_BODY_SOUTH_KOREA_M_COUNTRYNAME: "სამხრეთ კორეა",
IDS_SR_BODY_SPAIN_M_COUNTRYNAME: "ესპანეთი",
IDS_SR_BODY_SWEDEN_M_COUNTRYNAME: "შვედური",
IDS_SR_BODY_SWITZERLAND_M_COUNTRYNAME: "შვეიცარია",
IDS_SR_BODY_UNITED_KINGDOM_M_COUNTRYNAME: "გაერთიანებული სამეფო",
IDS_SR_BODY_UNITED_STATES_OF_AMERICA_M_COUNTRYNAME: "ამერიკის შეერთებული შტატები",
IDS_SR_BUTTON_BACK: "უკან",
IDS_SR_BUTTON_CANCEL_ABB: "გაუქმება",
IDS_SR_BUTTON_DELETE: "წაშლა",
IDS_SR_BUTTON_DONE: "შესრულდა",
IDS_SR_BUTTON_EXIT: "გამოსვ.",
IDS_SR_BUTTON_INFO: "ინფო",
IDS_SR_BUTTON_MENU: "მენიუ",
IDS_SR_BUTTON_MUTE: "ჩუმი",
IDS_SR_BUTTON_OK: "OK",
IDS_SR_BUTTON_POWER: "ენერგია",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY: "აირჩიეთ თქვენი ქვეყანა",
IDS_SR_BUTTON_SELECT_YOUR_COUNTRY_REGION: "აირჩიეთ ქვეყანა ან რეგიონი",
IDS_SR_BUTTON_SHOW_OTHER_BRANDS: "სხვა ბრენდების ჩვენება",
IDS_SR_BUTTON_SOURCE_T_SMART_REMOTE: "წყარო",
IDS_SR_BUTTON_TEMP_DOWN_M_TEMPERATURE: "შენელება",
IDS_SR_BUTTON_TEMP_UP_M_TEMPERATURE: "აჩქარება",
IDS_SR_BUTTON_TV: "ტელევიზ.",
IDS_SR_BUTTON_YES: "დიახ",
IDS_SR_HEADER_ALL_BRANDS: "ყველა ბრენდი",
IDS_SR_HEADER_DELETE_ABB: "წაშლა",
IDS_SR_HEADER_RESET: "გადატვირთვა",
IDS_SR_HEADER_WATCHON_M_APPLICATION: "WatchON",
IDS_SR_OPT_ADD_DEVICE_ABB: "აპარატის დამატება",
IDS_SR_OPT_STB_ABB: "STB",
IDS_YSM_POP_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "დააყენებთ დისტანციურ მართვას მოწყობილობაში?",
IDS_YSM_OPT_SHOW_ALL_BRANDS_ABB: "ყველა ბრენდის ჩვენება",
IDS_YSM_BUTTON_VOL_UC: "ხმის სიმაღლე",
IDS_YSM_BUTTON_CH: "არხ",
IDS_YSM_BUTTON_NO: "არა",
IDS_SAPPS_BODY_NOTICE: "შენიშვნა",
IDS_MSGF_HEADER_OPTION: "ოფცია",
IDS_MSGF_HEADER_OPTIONS: "ოფციები",
IDS_SSCHOL_HEADER_COMPLETED: "დასრულდა",
IDS_YSM_HEADER_SET_UP_REMOTE_ABB: "დისტანციური",
IDS_YSM_BODY_SET_UP_THE_REMOTE_CONTROL_ON_YOUR_DEVICE_Q: "დააყენებთ დისტანციურ მართვას მოწყობილობაში?",
IDS_YSM_BODY_LATIN_COUNTRIES_ABB: "ლათინური ქვეყნები",
IDS_YSM_BODY_POINT_YOUR_WATCH_TOWARDS_THE_PS_AND_TAP_THE_POWER_BUTTON: "მიმართეთ მეთვალყურე საათო %s-კენ და შეეხეთ ჩართვის ღილაკს.",
IDS_YSM_BODY_TAP_THE_BUTTON_ABB: "შეეხეთ ღილაკს.",
IDS_YSM_BODY_DID_IT_WORK_Q_ABB: "ამან იმოქმედა?",
IDS_YSM_HEADER_SETUP_COMPLETE_ABB: "დაინსტალირდა",
IDS_YSM_BODY_PS_REMOTE_CONTROL_SETUP_IS_COMPLETE: "%s დისტანციური მართვის დაყენება დასრულდა.",
IDS_YSM_BODY_THIS_MODEL_IS_NOT_SUPPORTED: "ეს მოდელი არ არის გათვალისწინებული.",
IDS_YSM_BODY_THE_REMOTE_CONTROL_WILL_BE_REMOVED: "დისტანციური მართვა მოცილდება.",
IDS_YSM_BODY_FAN_SPEED_ABB: "ვენტილაცია",
IDS_YSM_BODY_MODE_ABB2: "რეჟიმი",
IDS_YSM_OPT_AV_RECEIVER_ABB2: "AV მიმღები",
IDS_YSM_BODY_BLUE: "ცისფერი",
IDS_YSM_BODY_CHANNEL_DOWN_ABB: "შემდეგი არხი",
IDS_YSM_BODY_CHANNEL_LIST_ABB: "არხების სია",
IDS_YSM_BODY_CHANNEL_UP_ABB: "წინა არხი",
IDS_YSM_BODY_DISK_MENU_ABB: "დისკის მენიუ",
IDS_YSM_BODY_DOWN: "ქვემოთ",
IDS_YSM_BODY_DVR: "DVR",
IDS_YSM_BODY_EJECT_ABB: "ამოღება",
IDS_YSM_BODY_FAST_FORWARD_ABB: "წინ გადახვევა",
IDS_YSM_BODY_FAVOURITE_ABB: "ფავორიტი",
IDS_YSM_BODY_FORMAT_HASPECT_ABB: "ფორმატი (ფარდ.)",
IDS_YSM_BODY_GREEN_ABB: "მწვანე",
IDS_YSM_BODY_HDMI_PD_ABB: "HDMI %d",
IDS_YSM_BODY_INPUT_ABB: "ჩანაწერი",
IDS_YSM_BODY_LEFT: "მარცხენა",
IDS_YSM_BODY_LIST: "სია",
IDS_YSM_BODY_OTHER_COUNTRIES_ABB: "სხვა ქვეყნები",
IDS_YSM_BODY_PAUSE: "პაუზა",
IDS_YSM_BODY_PLAY: "დაკვრა",
IDS_YSM_BODY_PREVIOUS: "წინა",
IDS_YSM_BODY_PRE_CHANNEL_ABB: "წინასწარი არხი",
IDS_YSM_BODY_RED: "წითელი",
IDS_YSM_BODY_REWIND_ABB: "უკან გადახვევა",
IDS_YSM_BODY_RIGHT_ABB2: "მარჯვენა",
IDS_YSM_BODY_SELECT: "არჩევა",
IDS_YSM_BODY_SOUND_MODE_ABB: "ხმის რეჟიმი",
IDS_YSM_BODY_START_SETUP_OF_STB_REMOTE_CONTROL: "დაიწყეთ STB დისტანციური მართვის დაყენება.",
IDS_YSM_BODY_STOP: "შეჩერება",
IDS_YSM_BODY_SUBTITLES_ABB2: "სუბტიტრები",
IDS_YSM_BODY_SUBWOOFER_ABB: "დაბალსიხ.დნმკ.",
IDS_YSM_BODY_SURROUND_ABB: "გარემო",
IDS_YSM_BODY_TITLE_MENU_ABB: "სათაურთა მენიუ",
IDS_YSM_BODY_UP: "ზემოთ",
IDS_YSM_BODY_YELLOW_ABB: "ყვითელი",
IDS_YSM_BUTTON_CLEAR_HISTORY_ABB: "ისტორიის წაშლა",
IDS_YSM_BUTTON_DONE: "შესრულდა",
IDS_YSM_BUTTON_HISTORY: "ისტორია",
IDS_YSM_BUTTON_MENU: "მენიუ",
IDS_YSM_BUTTON_NEXT: "შემდეგი",
IDS_YSM_BUTTON_RETURN_UC: "დაბრუნება",
IDS_YSM_BUTTON_SMART_HUB: "Smart Hub",
IDS_YSM_BUTTON_TOOLS_UC: "ინსტრუმენტები",
IDS_YSM_BUTTON_VIDEO: "ვიდეო",
IDS_YSM_BUTTON_VOD: "VOD",
IDS_YSM_HEADER_HELP: "დახმარება",
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
IDS_YSM_OPT_ENTER: "შესვლა",
IDS_YSM_OPT_POWER: "ენერგია",
IDS_YSM_OPT_RECORD: "ჩაწერა",
IDS_YSM_OPT_VOLUME_DOWN: "ხმის დაწევა",
IDS_YSM_OPT_VOLUME_UP: "ხმის აწევა",
IDS_YSM_TAB4_GUIDE: "სახელმძღვანელო",
IDS_CHATON_BODY_INDIA_M_COUNTRYNAME: "ინდოეთი",
IDS_CHATON_BODY_NETHERLANDS_M_COUNTRYNAME: "ნიდერლანდები",
IDS_WCL_BODY_RUSSIA_M_COUNTRYNAME: "რუსეთი",
IDS_CHATON_BODY_AUSTRALIA_M_COUNTRYNAME: "ავსტრალია",
IDS_CHATON_BODY_SAUDI_ARABIA_M_COUNTRYNAME: "საუდის არაბეთი",
IDS_CHATON_BODY_CANADA_M_COUNTRYNAME: "კანადა",
IDS_CHATON_BODY_BRAZIL_M_COUNTRYNAME: "ბრაზილია",
IDS_CHATON_BODY_MEXICO_M_COUNTRYNAME: "მექსიკა",
IDS_CHATON_BODY_ARGENTINA_M_COUNTRYNAME: "არგენტინა",
IDS_CHATON_BODY_CHILE_M_COUNTRYNAME: "ჩილე",
IDS_CHATON_BODY_PERU_M_COUNTRYNAME: "პერუ",
IDS_CHATON_BODY_COLOMBIA_M_COUNTRYNAME: "კოლუმბია",
IDS_COM_POP_TRY_AGAIN: "თავიდან ცადეთ.",
IDS_YSM_BODY_CHANGE_DEVICE_M_NOUN_ABB: "სხვა აპარატი",
IDS_YSM_BODY_TEMP_M_TEMPERATURE_ABB: "ტემპერატ.",
IDS_MSGF_BODY_REMOTE: "დისტანციური",
IDS_YSM_OPT_TEMP_DOWN_ABB: "შენელება",
IDS_YSM_OPT_TEMP_UP_ABB: "აჩქარება",
IDS_YSM_OPT_TURBO_ABB: "ტურბო",
IDS_YSM_OPT_DISPLAY_ABB: "ჩვენება",
IDS_YSM_OPT_DELIMITER_ABB: "გამყოფი",
IDS_YSM_OPT_INTERNET_ABB: "ინტერნეტი",
IDS_YSM_OPT_PIP: "PiP",
IDS_YSM_OPT_PIP_SWAP_ABB: "PiP გადართვა",
IDS_YSM_OPT_PIP_CHANNEL_MINUS_ABB: "PiP არხი -",
IDS_YSM_OPT_PIP_CHANNEL_PLUS_ABB: "PiP არხი +",
IDS_YSM_OPT_PIP_MOVE_ABB: "PiP გადასვლა",
IDS_YSM_OPT_DTV: "DTV",
IDS_YSM_OPT_COMPONENT_PD_ABB: "კომპონენტი %d",
IDS_YSM_OPT_USB: "USB",
IDS_YSM_OPT_PICTURE_ABB2: "სურათი",
IDS_YSM_OPT_3D: "3d",
IDS_YSM_OPT_REPLAY_ABB: "გამეორება",
IDS_YSM_OPT_DAY_MINUS: "დღე -",
IDS_YSM_OPT_DAY_PLUS: "დღე +",
IDS_YSM_OPT_RADIO: "რადიო",
IDS_YSM_OPT_TV_RADIO_ABB: "ტელევიზორი/რადიო",
IDS_YSM_OPT_SWING_DOWN_ABB: "გადახარეთ ქვემოთ",
IDS_YSM_OPT_SWING_LEFT_ABB: "დახარეთ მარცხნივ",
IDS_YSM_OPT_SWING_RIGHT_ABB: "დახარეთ მარჯვნივ",
IDS_YSM_OPT_SWING_UP_ABB: "გადახარეთ ზემოთ",
IDS_YSM_OPT_PVR_MENU_ABB: "PVR მენიუ",
IDS_YSM_OPT_RETURN_TO_LIVE_ABB: "დაბრუნდი Live-ზე",
IDS_YSM_OPT_POWER_OFF_ABB2: "გამორთვა",
IDS_YSM_OPT_POWER_ON_ABB: "ჩართვა",
IDS_CHATON_BODY_JAPAN_M_COUNTRYNAME: "იაპონია",
IDS_YSM_BODY_VOL_M_VOLUME_ABB: "ხმა",
IDS_YSM_HEADER_TV_AND_STB_ABB: "TV და STB",
IDS_YSM_OPT_SLEEP_M_RESERVATION_ABB: "ძილი"};
STMS.setStmsMap( map );
STMS.refreshAllStr();
});