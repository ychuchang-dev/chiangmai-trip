document.addEventListener('DOMContentLoaded', () => {
    init();
});

// --- 資料區 ---
const itineraryData = [
    {
        date: "2/16 (一)",
        weather: "晴時多雲 18-32°C",
        events: [
            { 
                time: "07:20", title: "TPE-CNX 航班 BR257", type: "transport", 
                note: "10:35 抵達清邁機場", 
                desc: "飛行時間約 4 小時 15 分。抵達後請填寫入境卡(如需)，領取行李後出關。",
                gInfo: { rating: 4.2, reviews: "2,400", price: "交通", type: "國際機場", image: "./airport.jpg" },
                nav: "Chiang Mai International Airport" 
            },
            { 
                time: "11:00", title: "飯店寄放行李", type: "stay", 
                location: "Eastin Tan Hotel", note: "僅寄放行李，還不能進房", 
                desc: "位於尼曼路黃金地段，對面就是 Maya 百貨。",
                gInfo: { rating: 4.5, reviews: "1,800", price: "฿2,500+", type: "四星級飯店", image: "./hotel1.jpg" },
                nav: "Eastin Tan Hotel Chiang Mai" 
            },
            { 
                time: "12:00", title: "清邁夫人私房菜", type: "food", 
                location: "Baan Khun Nine Kitchen", tags: ["必吃泰北菜", "米其林推薦"], 
                desc: "環境舒適的玻璃屋餐廳，口味正宗且乾淨，非常適合長輩。",
                recommend: [
                    { name: "泰北杭勒咖哩", review: "肉燉得軟爛入味，帶點薑絲香氣，超級下飯。" },
                    { name: "泰北番茄肉醬", review: "酸甜開胃，像是泰式肉燥，配生菜吃很清爽。" },
                    { name: "炸魚餅", review: "口感Q彈，剛炸好熱騰騰的非常好吃。" }
                ],
                gInfo: { rating: 4.6, reviews: 324, price: "฿400-600", type: "家庭餐廳", image: "./food_mrs.jpg" },
                nav: "Baan Khun Nine Kitchen" 
            },
            { 
                time: "14:00", title: "自由行動", type: "relax", 
                note: "18:00 前自由安排", 
                desc: "推薦行程：\n1. Maya 百貨吹冷氣逛街\n2. 尼曼路按摩\n3. 飯店大廳休息",
                gInfo: { rating: 4.4, reviews: "21,000", price: "免費", type: "購物中心", image: "./shop_maya.jpg" },
                nav: "MAYA Lifestyle Shopping Center" 
            },
            { 
                time: "18:00", title: "清邁大學夜市", type: "food", 
                location: "Malin Plaza", tags: ["學生美食", "平價服飾"], 
                desc: "主要客群是大學生，物價比觀光夜市便宜。",
                recommend: [
                    { name: "日式可麗餅", review: "這裡的招牌，料多到滿出來，餅皮很脆。" },
                    { name: "10元壽司", review: "CP值超高，想吃什麼夾什麼。" },
                    { name: "泰式烤肉串", review: "一串10泰銖，醬汁甜甜辣辣很涮嘴。" }
                ],
                gInfo: { rating: 4.3, reviews: "1.2萬", price: "฿100-200", type: "夜市", image: "./nightmarket.jpg" },
                nav: "Malin Plaza" 
            },
            { time: "20:00", title: "自由行動 / 回飯店", type: "relax", desc: "可選擇繼續逛夜市，或先回飯店休息。" },
            { 
                time: "22:00", title: "入住：清邁易思庭譚飯店", type: "stay", 
                location: "Eastin Tan Hotel", 
                gInfo: { rating: 4.5, reviews: "1,800", price: "฿2,500+", type: "四星級飯店", image: "./hotel1.jpg" },
                nav: "Eastin Tan Hotel Chiang Mai",
                desc: "正式 Check-in 進房。飯店早餐評價很好。",
                nearby: [
                    { name: "One Nimman", type: "逛街", desc: "就在隔壁，歐式紅磚建築" },
                    { name: "Cheeva Spa", type: "按摩", desc: "高評價精油按摩" },
                    { name: "7-11", type: "便利商店", desc: "樓下轉角" }
                ]
            }
        ]
    },
    {
        date: "2/17 (二)",
        weather: "晴朗 19-33°C",
        events: [
            { time: "09:00", title: "飯店早餐 & 自由行動", type: "relax", desc: "Eastin Tan 早餐很豐盛，建議預留 1 小時慢慢享用。" },
            { time: "10:30", title: "飯店門口集合", type: "transport", note: "準備出發吃午餐", desc: "全員集合，請確認隨身物品。" },
            { 
                time: "11:00", title: "烤山尼曼 泰北咖哩麵", type: "food", 
                location: "Khao Soi Nimman", tags: ["必吃美食", "排隊名店"], 
                desc: "米其林必比登推薦，清邁最知名的咖哩麵專賣店。",
                recommend: [
                    { name: "炸雞腿咖哩麵", review: "雞腿燉到骨肉分離，濃郁湯頭配上炸酥的麵條口感很有層次。" },
                    { name: "泰北香腸", review: "香料味十足，口感紮實不油膩。" },
                    { name: "鮮蝦咖哩麵", review: "如果不愛吃肉，蝦子非常新鮮大隻。" }
                ],
                gInfo: { rating: 4.2, reviews: "5,800", price: "฿100-300", type: "泰北餐廳", image: "./food_khaosoi.jpg" },
                nav: "Khao Soi Nimman" 
            },
            { time: "13:00", title: "飯店接送", type: "transport", note: "13:30 準時發車", desc: "前往大象行程，車程約 1 小時。" },
            { 
                time: "14:30", title: "Elfin Farm & Café", type: "spot", 
                location: "Elfin Farm & Cafe", tags: ["親子必遊", "餵食大象"], 
                desc: "體驗大象自然生活，餵食香蕉、拍照。",
                gInfo: { rating: 4.8, reviews: 156, price: "行程", type: "大象體驗", image: "./elephant.jpg" },
                nav: "Elfin Farm & Cafe" 
            },
            { 
                time: "16:00", title: "清邁夜間野生動物園", type: "spot", 
                location: "Chiang Mai Night Safari", tags: ["親子推薦", "長頸鹿餵食"], 
                desc: "搭乘遊園車看動物，非常涼爽舒適。",
                gInfo: { rating: 4.3, reviews: "8,900", price: "門票", type: "動物園", image: "./zoo.jpg" },
                nav: "Chiang Mai Night Safari" 
            },
            { time: "20:30", title: "返回飯店", type: "transport", desc: "搭車返回 Eastin Tan Hotel。" },
            { time: "21:00", title: "自由行動", type: "relax", desc: "今日行程較豐富，建議早點休息。", location: "Eastin Tan Hotel" }
        ]
    },
    {
        date: "2/18 (三)",
        weather: "多雲 20-31°C",
        events: [
            { time: "09:00", title: "飯店早餐 & 自由行動", type: "relax", note: "11:30 要退房集合", desc: "最後享受一下 Eastin Tan 的設施，記得整理行李準備換飯店。" },
            { time: "11:30", title: "飯店門口集合", type: "transport", desc: "辦理退房，搭車前往下一間飯店寄放行李。" },
            { 
                time: "12:00", title: "午餐：小藝術村周邊", type: "food", 
                location: "Baan Kang Wat Area", 
                gInfo: { rating: 4.6, reviews: "1,200", price: "฿200-400", type: "藝術聚落", image: "./art.jpg" },
                nav: "Baan Kang Wat" 
            },
            { 
                time: "14:00", title: "小藝術村 (Baan Kang Wat)", type: "spot", 
                location: "Baan Kang Wat", tags: ["文青必逛", "手作市集"], 
                desc: "充滿綠意與藝術氣息的聚落，有很多手作小店。",
                recommend: [ { name: "手沖咖啡", review: "隨便找一家店坐下來，氣氛都很好。" }, { name: "手工陶瓷杯", review: "這裡的陶瓷都很有手作感，獨一無二。" } ],
                gInfo: { rating: 4.6, reviews: "1,200", price: "免費", type: "文創園區", image: "./art.jpg" },
                nav: "Baan Kang Wat" 
            },
            { 
                time: "17:00", title: "Adirak Pizza", type: "food", 
                location: "Adirak Pizza", tags: ["知名披薩", "特色晚餐"], 
                desc: "清邁評價極高的手工披薩店。",
                recommend: [ { name: "Pesto Ricotta Pizza", review: "青醬味道濃郁，Ricotta起司很清爽，餅皮又薄又脆。" }, { name: "Burrata Salad", review: "必點！切開起司球搭配番茄和羅勒，超級開胃。" } ],
                gInfo: { rating: 4.7, reviews: 890, price: "฿300-500", type: "披薩餐廳", image: "./food_pizza.jpg" },
                nav: "Adirak Pizza Chiang mai" 
            },
            { 
                time: "19:00", title: "Central Chiangmai Airport", type: "shop", 
                location: "Central Chiangmai Airport", tags: ["超市補貨", "伴手禮"], 
                desc: "離機場很近的大型商場，B1 Northern Village 專賣泰北特產。",
                recommend: [ { name: "皇家蜂蜜", review: "軟管包裝方便攜帶，送禮自用都很棒。" }, { name: "手標紅茶粉", review: "回家自己加煉乳，就是泰國的味道。" }, { name: "炸豬皮", review: "泰北特色零食，酥酥脆脆。" } ],
                gInfo: { rating: 4.4, reviews: "15,000", price: "฿฿", type: "購物中心", image: "./shop_central.jpg" },
                nav: "Central Chiangmai Airport" 
            },
            { 
                time: "21:00", title: "自由行動 & 入住", type: "stay", 
                location: "Parc Borough City Resort", 
                gInfo: { rating: 4.6, reviews: "950", price: "฿3,000+", type: "度假村", image: "./hotel2.jpg" },
                nav: "Parc Borough City Resort",
                desc: "入住第二間飯店。這間走度假村風格，比較安靜。",
                nearby: [ { name: "Caramellow Cafe", type: "咖啡", desc: "飯店旁玻璃屋咖啡廳" }, { name: "Sense Garden", type: "按摩", desc: "走路約 5-10 分鐘" }, { name: "Big C Hang Dong", type: "超市", desc: "車程約 5-8 分鐘" } ]
            }
        ]
    },
    {
        date: "2/19 (四)",
        weather: "晴朗 19-34°C",
        events: [
            { time: "09:00", title: "飯店早餐 & 自由行動", type: "relax", desc: "Parc Borough 的早餐評價也不錯。上午可以在飯店休息或游泳。" },
            { 
                time: "11:00", title: "Neng's 脆皮豬", type: "food", 
                location: "Neng Earthen Jar Roast Pork", tags: ["必吃脆皮豬", "在地推薦"], 
                desc: "用大甕烤出來的脆皮豬，皮超酥脆肉多汁。",
                recommend: [ { name: "脆皮豬飯", review: "脆皮豬一樣穩，該酥的酥、該嫩的嫩，咬下去卡滋卡滋。" }, { name: "烤雞", review: "陶甕烤雞也一定要點，肉嫩不柴，香氣整個到位。" }, { name: "酸辣湯", review: "微辣帶酸，配著肉吃剛好解膩。" } ],
                gInfo: { rating: 4.4, reviews: "2,100", price: "฿100-200", type: "泰式小吃", image: "./food_neng.jpg" },
                nav: "Neng Earthen Jar Roast Pork" 
            },
            { 
                time: "13:00", title: "迪卡儂 清邁店", type: "shop", 
                location: "Decathlon Chiang Mai", desc: "位於大賣場區，如有缺旅行裝備可在此補給。",
                gInfo: { rating: 4.5, reviews: "350", price: "฿฿", type: "運動用品", image: "./shop_decathlon.jpg" },
                nav: "Decathlon Chiang Mai" 
            },
            { 
                time: "14:00", title: "Big C Extra 2", type: "shop", 
                location: "Big C Extra Chiangmai 2", desc: "最後的大型採購機會！買零食、泡麵、藥妝。", tags: ["伴手禮採買"],
                recommend: [ { name: "Pocky", review: "香蕉口味、芒果口味是泰國限定，必掃貨。" }, { name: "Bento 魷魚片", review: "紅色包裝最經典，辣得很過癮。" }, { name: "小老闆海苔", review: "雖然台灣有賣，但這裡口味多又便宜。" } ],
                gInfo: { rating: 4.3, reviews: "4,200", price: "฿฿", type: "大賣場", image: "./shop_bigc.jpg" },
                nav: "Big C Extra Chiangmai 2" 
            },
            { time: "15:30", title: "等待接送", type: "transport", desc: "準備前往廚藝學校" },
            { 
                time: "16:00", title: "Galangal 廚藝學校", type: "spot", 
                location: "Galangal Cooking Studio", tags: ["親子體驗", "學做泰菜"], 
                desc: "參觀市場 + 親手做晚餐。包含：酸辣湯、泰式炒河粉、咖哩等。",
                gInfo: { rating: 4.9, reviews: "920", price: "行程", type: "廚藝學校", image: "./cooking.jpg" },
                nav: "Galangal Cooking Studio" 
            },
            { time: "20:30", title: "送回飯店休息", type: "transport", location: "Parc Borough City Resort", desc: "吃飽喝足回飯店。" },
            { time: "21:00", title: "自由行動", type: "relax", desc: "整理戰利品和行李，明天就要回程囉。" }
        ]
    },
    {
        date: "2/20 (五)",
        weather: "晴時多雲 22-30°C",
        events: [
            { time: "09:00", title: "全日自由行動", type: "relax", note: "19:00 出發去機場", desc: "今天沒有排特定行程。建議：\n1. 享受飯店設施\n2. Central Airport Plaza 最後逛逛\n3. 找個咖啡廳發呆" },
            { 
                time: "19:00", title: "前往機場", type: "transport", note: "建議提早 2.5 小時抵達機場", 
                desc: "帶著滿滿的回憶準備回家。",
                gInfo: { rating: 4.2, reviews: "2,400", price: "交通", type: "國際機場", image: "./airport.jpg" },
                nav: "Chiang Mai International Airport" 
            },
            { time: "21:40", title: "CNX-BKK 航班 PG220", type: "transport", note: "曼谷轉機", desc: "抵達曼谷 BKK 機場後，請循著 'Transfer' 指標走，不用領行李。" }
        ]
    },
    {
        date: "2/21 (六)",
        weather: "返台",
        events: [
            { time: "02:15", title: "BKK-TPE 航班 BR206", type: "transport" },
            { time: "06:50", title: "抵達桃園機場", type: "transport" }
        ]
    }
];

const infoData = {
    flights: ["2/16 BR257 TPE-CNX 07:20-10:35", "2/20 PG220 CNX-BKK 21:40-23:05", "2/21 BR206 BKK-TPE 02:15-06:50"],
    hotels: [
        { name: "Eastin Tan Hotel Chiang Mai", address: "171 Huay Kaew Rd, Suthep, Mueang Chiang Mai District, Chiang Mai 50200", image: "./hotel_eastin.jpg" },
        { name: "Parc Borough City Resort", address: "223 Mahidol Rd, Tambon Hai Ya, อ.เมือง, Chiang Mai 50100", image: "./hotel_parc.jpg" }
    ],
    emergency: ["觀光警察: 1155", "救護車: 1669", "駐泰代表處: +66-2-119-3555"],
    tips: ["換匯：Superrich (橘色/綠色) 匯率較佳", "交通：下載 Grab App 叫車最方便", "小費：按摩約 50-100 泰銖，床頭小費 20 泰銖", "電壓：220V (插座通用)"],
    links: [
        { title: "精靈農場 & 清邁夜間野生動物園", desc: "KKday 半日遊預約 | 已包含接送", url: "https://www.kkday.com/zh-tw/product/287771", image: "./kkday_safari.jpg" },
        { title: "Galangal 廚藝學校", desc: "KKday 泰菜課程預約 | 含市場導覽", url: "https://www.kkday.com/zh-tw/product/23087-galangal-cooking-studio-in-chiang-mai-thailand", image: "./kkday_cooking.jpg" },
        { title: "Baan Kang Wat 藝術村攻略", desc: "森林系手作藝術村 | 咖啡、雜貨、小吃", url: "https://www.travelerluxe.com/article/desc/230009060", image: "./article_art.jpg" }
    ]
};

// --- 新增：完整 30 項伴手禮資料 ---
const souvenirData = [
    // 零食類
    { id: "omi1", name: "Pretz（泰國限定）", category: "零食", desc: "打拋豬肉、泰式酸辣湯、綠咖哩和烤玉米等等，鹹香涮嘴、超適合當下酒菜。" },
    { id: "omi2", name: "Pocky（泰國限定）", category: "零食", desc: "芒果口味甜而不膩，香蕉口味香濃滑順，像在熱帶度假！" },
    { id: "omi3", name: "MAG MAG 還魂梅", category: "零食", desc: "酸酸甜甜，梅子的香氣濃郁得像回魂，解嘴饞又提神。" },
    { id: "omi4", name: "小熊餅乾（限定）", category: "零食", desc: "巧克力香蕉、鳳梨和芒果口味，包裝融入泰國風景超可愛。" },
    { id: "omi5", name: "樂事洋芋片", category: "零食", desc: "香烤魷魚、打拋葉、鹹蛋黃等特色口味，還有烤大頭蝦沾醬二合一版本。" },
    { id: "omi6", name: "Taro 鱈魚絲", category: "零食", desc: "口感紮實，帶有自然魚香和微微鹹味，味道相當有層次。" },
    { id: "omi7", name: "Doi Kham 果乾", category: "零食", desc: "皇家計畫農產品，低溫烘乾保留天然香氣，口感Q彈不黏牙。" },
    { id: "omi8", name: "手標泰奶茶茶葉", category: "零食", desc: "路邊攤最常用！紅色原味、金色加濃、綠色奶綠，茶香濃厚。" },
    { id: "omi9", name: "Bento 魷魚片", category: "零食", desc: "香辣過癮！藍色最不辣，紅色中辣，其他更辣，嚼勁十足。" },
    { id: "omi10", name: "小老闆海苔", category: "零食", desc: "油炸海苔香酥脆口，鹹蛋黃等限定口味必試，配飯當零食都好。" },
    { id: "omi11", name: "COCO Milk 芒果乾", category: "零食", desc: "芒果乾酸甜結合椰奶香甜，味道就像在吃芒果糯米飯！" },
    { id: "omi12", name: "Koh-Kae 堅果", category: "零食", desc: "大哥花生豆！泰式酸辣湯、芥末、BBQ等口味，下酒追劇神物。" },
    { id: "omi13", name: "The GoldGreen 山竹乾", category: "零食", desc: "隨時想吃就吃！解決新鮮山竹不能帶回國的遺憾。" },
    { id: "omi14", name: "椰子脆捲", category: "零食", desc: "酥脆不油，原味椰香自然，也有香蘭、榴槤口味，獨立包裝好分送。" },
    { id: "omi26", name: "Max Oceans 炸雞皮", category: "零食", desc: "乾爽不油膩，雖然比現炸硬一點，但作為下酒菜非常合適。" },
    { id: "omi27", name: "Oyawa 酥炸蝦下巴", category: "零食", desc: "人氣爆增！酸辣湯、麻辣BBQ口味，酥脆到一口接一口。" },
    { id: "omi28", name: "Hartbeat 心型糖", category: "零食", desc: "愛心造型超受歡迎，有草莓、荔枝、蛇皮果等特殊口味。" },
    
    // 藥妝 & 生活用品類
    { id: "omi15", name: "Dentiste 夜用牙膏", category: "藥妝", desc: "Lisa代言！含天然植物精華，預防口腔細菌，早上口氣清新。" },
    { id: "omi16", name: "ROJUKISS 面膜", category: "藥妝", desc: "精華液滿滿，主打深層保濕修護，泰國美妝控首選。" },
    { id: "omi17", name: "BIO 髮膜", category: "藥妝", desc: "泰國女生護髮秘訣，天然成分修護受損髮質，洗完超滑順。" },
    { id: "omi18", name: "Propoliz 蜂膠噴霧", category: "藥妝", desc: "喉嚨守護小物！天然蜂膠溫和護嗓，舒緩喉嚨不適。" },
    { id: "omi19", name: "蛇牌爽身粉/噴霧", category: "藥妝", desc: "經典涼感！炎熱天氣灑在身上瞬間乾爽，還有薰衣草等香味。" },
    { id: "omi20", name: "Soffell 驅蚊液", category: "藥妝", desc: "泰國驅蚊聖品，天然萃取成分，防蚊效果持久，有柑橘和玫瑰香。" },
    { id: "omi21", name: "凡士林美白乳液", category: "藥妝", desc: "泰國限定！含10倍美白成分，保濕效果好，讓皮膚變白更亮。" },
    { id: "omi22", name: "ele 晚安面膜", category: "藥妝", desc: "睡前敷一下，保水感不錯，早上起床皮膚水嫩。" },
    { id: "omi23", name: "皇家足貼", category: "藥妝", desc: "貼在腳底吸出濕氣，緩解疲勞，隔天撕下來會看到濕濕的。" },
    { id: "omi24", name: "雙頭薄荷吸鼻劑", category: "藥妝", desc: "開車想睡或鼻子不通時吸一下，瞬間提神醒腦，家家戶戶必備。" },
    { id: "omi25", name: "voodoo 黑蛇毒面膜", category: "藥妝", desc: "含有蛇毒血清蛋白成分，幫助收縮毛孔，緊緻膚質。" },
    { id: "omi29", name: "LA GLACE 腮黑膏", category: "藥妝", desc: "黑色膏體擦在臉上變粉色！隨體溫變色，打造光澤澎潤感。" },
    { id: "omi30", name: "LA GLACE 迷你遮瑕", category: "藥妝", desc: "網紅推薦！便利商店買得到的迷你彩妝，好用且新鮮。" }
];

// --- 邏輯區 ---

let currentDayIndex = 0;

function init() {
    try {
        renderDateSelector();
        renderItinerary(0);
    } catch (e) {
        console.error("Error starting app:", e);
    }
}

// 顯示泰文手指卡
window.showThaiCard = function(thaiText, meaning) {
    alert(`${meaning}：\n\n${thaiText}`);
}

window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.textContent = "地址已複製！";
        toast.className = "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-lg z-50 transition-opacity duration-300";
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 2000);
    }).catch(err => {
        alert('複製失敗，請手動複製');
    });
}

function renderDateSelector() {
    const container = document.getElementById('date-selector');
    if (!container) return;
    container.innerHTML = itineraryData.map((day, index) => `
        <button onclick="renderItinerary(${index})" 
            class="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${index === 0 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'} date-btn" data-index="${index}">
            ${day.date.split(' ')[0]}
        </button>
    `).join('');
}

function renderItinerary(index) {
    currentDayIndex = index;
    document.querySelectorAll('.date-btn').forEach(btn => {
        if(parseInt(btn.dataset.index) === index) {
            btn.className = "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors bg-gray-800 text-white date-btn";
        } else {
            btn.className = "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-500 date-btn";
        }
    });

    const container = document.getElementById('app-container');
    if (!container) return;
    const day = itineraryData[index];

    let weatherHtml = '';
    if (day.weather !== "返台") {
        weatherHtml = `
            <div class="bg-blue-50 p-4 rounded-xl flex items-center justify-between mb-4 border border-blue-100">
                <div>
                    <p class="text-xs text-blue-500 font-bold tracking-wider">WEATHER</p>
                    <p class="text-lg font-medium text-gray-700">${day.weather}</p>
                </div>
                <div class="text-2xl">🌤️</div>
            </div>
        `;
    }

    let html = weatherHtml;
    html += day.events.map(event => {
        let icon = "📍";
        if(event.type === 'food') { icon = "🍜"; }
        else if(event.type === 'transport') { icon = "🚗"; }
        else if(event.type === 'stay') { icon = "🏨"; }
        else if(event.type === 'shop') { icon = "🛍️"; }
        else if(event.type === 'relax') { icon = "☕"; }

        const tagsHtml = event.tags ? `<div class="mt-2 flex flex-wrap gap-1">${event.tags.map(t => `<span class="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-md font-medium">${t}</span>`).join('')}</div>` : '';
        const descHtml = event.desc ? `<p class="text-sm text-gray-600 mt-2 leading-relaxed whitespace-pre-line">${event.desc}</p>` : '';
        const noteHtml = event.note ? `<p class="text-xs text-red-500 mt-2 flex items-start gap-1"><span class="font-bold">!</span> ${event.note}</p>` : '';
        
        const recommendHtml = event.recommend ? 
            `<div class="mt-3 bg-orange-50 p-3 rounded-lg border border-orange-100">
                <p class="text-xs text-orange-600 font-bold mb-2 flex items-center gap-1">👍 網友推薦必試</p>
                <div class="space-y-2">
                    ${event.recommend.map(r => `<div class="bg-white p-2 rounded border border-orange-100 shadow-sm"><div class="font-bold text-gray-800 text-sm">🍽️ ${r.name}</div><div class="text-xs text-gray-500 mt-1 leading-relaxed">"${r.review}"</div></div>`).join('')}
                </div>
             </div>` : '';
        
        const nearbyHtml = event.nearby ? 
            `<div class="mt-3 bg-gray-50 p-3 rounded-lg border border-gray-100"><p class="text-xs text-gray-500 font-bold mb-2">🏨 飯店周邊</p><div class="space-y-2">${event.nearby.map(n => `<div class="flex items-start gap-2 text-sm"><span class="text-xs bg-gray-200 px-1.5 py-0.5 rounded text-gray-600 whitespace-nowrap">${n.type}</span><div><span class="font-medium text-gray-800">${n.name}</span> <span class="text-xs text-gray-500">- ${n.desc}</span></div></div>`).join('')}</div></div>` : '';

        let navHtml = '';
        if (event.nav) {
            const navLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.nav)}`;
            const info = event.gInfo || { rating: 4.5, reviews: "Google", price: "前往", type: "地標", image: "" };
            const fallbackImage = `https://placehold.co/600x400/e5e7eb/374151?text=${encodeURIComponent(event.title)}`;
            navHtml = `
            <a href="${navLink}" target="_blank" class="block mt-4 no-underline group">
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white flex transition-transform transform active:scale-95 group-hover:shadow-md h-28">
                    <img src="${info.image}" class="w-1/3 h-full object-cover bg-gray-200" alt="${event.title}" onerror="this.onerror=null; this.src='${fallbackImage}'">
                    <div class="w-2/3 p-3 flex flex-col justify-between relative">
                        <div class="absolute top-2 right-2 text-red-500"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div>
                        <div>
                            <h4 class="font-bold text-gray-800 text-sm truncate pr-6">${event.title}</h4>
                            <div class="flex items-center gap-1 mt-1 text-xs"><span class="text-yellow-400 font-bold">${info.rating}</span><div class="flex text-yellow-400">★★★★<span class="text-gray-300">★</span></div><span class="text-gray-400">(${info.reviews})</span></div>
                            <div class="text-xs text-gray-500 mt-0.5">${info.type} · ${info.price}</div>
                        </div>
                        <div class="mt-auto text-xs font-bold text-blue-600 flex items-center gap-1"><span>導航</span> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                    </div>
                </div>
            </a>`;
        }

        return `
            <div class="bg-white p-5 rounded-2xl card-shadow mb-4 border border-gray-50">
                <div class="flex items-start justify-between">
                    <div><span class="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded mb-1 font-mono">${event.time}</span><h3 class="text-lg font-bold text-gray-800 leading-tight">${event.title}</h3>${event.location ? `<p class="text-xs text-gray-400 mt-1 flex items-center gap-1">📍 ${event.location}</p>` : ''}</div>
                    <div class="text-2xl opacity-80 pl-2">${icon}</div>
                </div>
                ${tagsHtml}${descHtml}${recommendHtml}${nearbyHtml}${noteHtml}${navHtml}
            </div>
        `;
    }).join('');
    container.innerHTML = html;
}

window.switchView = function(view) {
    const container = document.getElementById('app-container');
    const tabs = {
        itinerary: document.getElementById('tab-itinerary'),
        shopping: document.getElementById('tab-shopping'),
        info: document.getElementById('tab-info')
    };
    const header = document.querySelector('header');

    // 重置所有 tab 樣式
    Object.values(tabs).forEach(tab => {
        tab.classList.remove('active-tab', 'text-gray-500');
        tab.classList.add('text-gray-400');
    });

    // 設定當前 tab 樣式
    if (tabs[view]) {
        tabs[view].classList.add('active-tab', 'text-gray-500');
        tabs[view].classList.remove('text-gray-400');
    }

    if (view === 'itinerary') {
        header.classList.remove('hidden');
        renderItinerary(currentDayIndex);
    } else if (view === 'shopping') {
        header.classList.add('hidden');
        container.innerHTML = `
            <div class="pt-2 pb-6 space-y-6">
                <h2 class="text-xl font-bold text-gray-800 px-2 flex items-center gap-2">🛒 必買清單 <span class="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-1 rounded-full">共 ${souvenirData.length} 項</span></h2>
                
                <div class="mb-6">
                    <h3 class="px-2 text-sm font-bold text-orange-500 mb-3 uppercase tracking-wider">泰國限定零食</h3>
                    <div class="grid grid-cols-2 gap-3">
                        ${souvenirData.filter(i => i.category === '零食').map(item => `
                            <div class="bg-white rounded-xl card-shadow overflow-hidden flex flex-col">
                                <div class="h-32 bg-gray-100 overflow-hidden relative">
                                    <img src="./${item.id}.jpg" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/300x300?text=${encodeURIComponent(item.name)}'">
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <h4 class="font-bold text-gray-800 text-sm mb-1">${item.name}</h4>
                                    <p class="text-xs text-gray-500 line-clamp-3 leading-relaxed">${item.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <h3 class="px-2 text-sm font-bold text-blue-500 mb-3 uppercase tracking-wider">必掃藥妝 & 生活小物</h3>
                    <div class="grid grid-cols-2 gap-3">
                        ${souvenirData.filter(i => i.category === '藥妝').map(item => `
                            <div class="bg-white rounded-xl card-shadow overflow-hidden flex flex-col">
                                <div class="h-32 bg-gray-100 overflow-hidden relative">
                                    <img src="./${item.id}.jpg" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/300x300?text=${encodeURIComponent(item.name)}'">
                                </div>
                                <div class="p-3 flex-1 flex flex-col">
                                    <h4 class="font-bold text-gray-800 text-sm mb-1">${item.name}</h4>
                                    <p class="text-xs text-gray-500 line-clamp-3 leading-relaxed">${item.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    } else {
        header.classList.add('hidden');
        container.innerHTML = `
            <div class="space-y-6 pt-4">
                
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">🗣️ 點餐/求生手指卡</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="showThaiCard('ไม่เผ็ด (Mai Phet)', '不要辣')" class="bg-white p-3 rounded-xl card-shadow flex items-center gap-3 active:scale-95 transition-transform">
                            <div class="bg-red-100 text-2xl p-2 rounded-full">🌶️</div>
                            <div class="text-left">
                                <div class="font-bold text-gray-800">不要辣</div>
                                <div class="text-xs text-gray-400">Mai Phet</div>
                            </div>
                        </button>
                        <button onclick="showThaiCard('ห้องน้ำอยู่ที่ไหน (Hong Nam Yu Tee Nai)', '廁所在哪裡')" class="bg-white p-3 rounded-xl card-shadow flex items-center gap-3 active:scale-95 transition-transform">
                            <div class="bg-blue-100 text-2xl p-2 rounded-full">🚻</div>
                            <div class="text-left">
                                <div class="font-bold text-gray-800">廁所在哪</div>
                                <div class="text-xs text-gray-400">Hong Nam...</div>
                            </div>
                        </button>
                        <button onclick="showThaiCard('เท่าไหร่ (Tao Rai)', '多少錢')" class="bg-white p-3 rounded-xl card-shadow flex items-center gap-3 active:scale-95 transition-transform">
                            <div class="bg-yellow-100 text-2xl p-2 rounded-full">💸</div>
                            <div class="text-left">
                                <div class="font-bold text-gray-800">多少錢</div>
                                <div class="text-xs text-gray-400">Tao Rai</div>
                            </div>
                        </button>
                        <button onclick="showThaiCard('ขอบคุณ (Khob Khun)', '謝謝')" class="bg-white p-3 rounded-xl card-shadow flex items-center gap-3 active:scale-95 transition-transform">
                            <div class="bg-green-100 text-2xl p-2 rounded-full">🙏</div>
                            <div class="text-left">
                                <div class="font-bold text-gray-800">謝謝</div>
                                <div class="text-xs text-gray-400">Khob Khun</div>
                            </div>
                        </button>
                    </div>
                </section>

                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">📌 行程預約與攻略</h3>
                    <div class="space-y-3">
                        ${infoData.links.map(link => `
                            <a href="${link.url}" target="_blank" class="block bg-white rounded-xl card-shadow overflow-hidden group">
                                <div class="flex h-24">
                                    <img src="${link.image}" class="w-1/3 object-cover bg-gray-100" alt="${link.title}" onerror="this.src='https://placehold.co/200?text=Link'">
                                    <div class="w-2/3 p-3 flex flex-col justify-center">
                                        <h4 class="font-bold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">${link.title}</h4>
                                        <p class="text-xs text-gray-500 line-clamp-2">${link.desc}</p>
                                        <div class="mt-2 text-xs text-blue-500 flex items-center gap-1 font-medium">點擊查看 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></div>
                                    </div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </section>

                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">住宿資訊</h3>
                    <div class="space-y-4">
                        ${infoData.hotels.map(h => `
                            <div class="bg-white rounded-xl card-shadow overflow-hidden">
                                <img src="${h.image}" class="w-full h-32 object-cover" onerror="this.src='https://placehold.co/600x400?text=Hotel'">
                                <div class="p-4">
                                    <div class="font-bold text-gray-800 text-base mb-2">${h.name}</div>
                                    <div class="bg-gray-50 p-2 rounded text-xs text-gray-500 font-mono break-all mb-3">${h.address}</div>
                                    <button onclick="copyToClipboard('${h.address}')" class="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>複製地址 (Grab可用)</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">航班資訊</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2">${infoData.flights.map(f => `<div class="flex items-center gap-2"><span class="text-lg">✈️</span> ${f}</div>`).join('')}</div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">緊急聯絡</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2 border-l-4 border-red-400">${infoData.emergency.map(e => `<div>${e}</div>`).join('')}</div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">旅遊小貼士</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2">${infoData.tips.map(t => `<div class="flex items-start gap-2"><span class="text-yellow-500">💡</span> <span>${t}</span></div>`).join('')}</div>
                </section>
            </div>
        `;
    }
}