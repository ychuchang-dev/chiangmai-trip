document.addEventListener('DOMContentLoaded', () => {
    init();
});

// --- 資料區 (本地圖片版) ---
const itineraryData = [
    {
        date: "2/16 (一)",
        weather: "晴時多雲 18-32°C",
        events: [
            { 
                time: "07:20", 
                title: "TPE-CNX 航班 BR257", 
                type: "transport", 
                note: "10:35 抵達清邁機場", 
                desc: "飛行時間約 4 小時 15 分。抵達後請填寫入境卡(如需)，領取行李後出關。",
                gInfo: {
                    rating: 4.2,
                    reviews: "2,400",
                    price: "交通",
                    type: "國際機場",
                    image: "./airport.jpg" // 對應你上傳的檔名
                },
                nav: "Chiang Mai International Airport" 
            },
            { 
                time: "11:00", 
                title: "飯店寄放行李", 
                type: "stay", 
                location: "Eastin Tan Hotel", 
                note: "僅寄放行李，還不能進房", 
                desc: "位於尼曼路黃金地段，對面就是 Maya 百貨。",
                gInfo: {
                    rating: 4.5,
                    reviews: "1,800",
                    price: "฿2,500+",
                    type: "四星級飯店",
                    image: "./hotel1.jpg"
                },
                nav: "Eastin Tan Hotel Chiang Mai" 
            },
            { 
                time: "12:00", 
                title: "清邁夫人私房菜", 
                type: "food", 
                location: "Baan Khun Nine Kitchen", 
                tags: ["必吃泰北菜", "米其林推薦"], 
                desc: "環境舒適的玻璃屋餐廳，口味正宗且乾淨，非常適合長輩。",
                recommend: ["泰北杭勒咖哩", "泰北番茄肉醬", "炸魚餅"],
                gInfo: {
                    rating: 4.6,
                    reviews: 324,
                    price: "฿400-600",
                    type: "家庭餐廳",
                    image: "./food_mrs.jpg"
                },
                nav: "Baan Khun Nine Kitchen" 
            },
            { 
                time: "14:00", 
                title: "自由行動", 
                type: "relax", 
                note: "18:00 前自由安排",
                desc: "推薦行程：\n1. Maya 百貨吹冷氣逛街\n2. 尼曼路按摩\n3. 飯店大廳休息",
                gInfo: {
                    rating: 4.4,
                    reviews: "21,000",
                    price: "免費",
                    type: "購物中心",
                    image: "./shop_maya.jpg"
                },
                nav: "MAYA Lifestyle Shopping Center" 
            },
            { 
                time: "18:00", 
                title: "清邁大學夜市", 
                type: "food", 
                location: "Malin Plaza", 
                tags: ["學生美食", "平價服飾"], 
                desc: "主要客群是大學生，物價比觀光夜市便宜。",
                recommend: ["日式可麗餅", "10元壽司", "泰式烤肉串"],
                gInfo: {
                    rating: 4.3,
                    reviews: "1.2萬",
                    price: "฿100-200",
                    type: "夜市",
                    image: "./nightmarket.jpg"
                },
                nav: "Malin Plaza" 
            },
            { 
                time: "20:00", 
                title: "自由行動 / 回飯店", 
                type: "relax",
                desc: "可選擇繼續逛夜市，或先回飯店休息。"
            },
            { 
                time: "22:00", 
                title: "入住：清邁易思庭譚飯店", 
                type: "stay", 
                location: "Eastin Tan Hotel", 
                gInfo: {
                    rating: 4.5,
                    reviews: "1,800",
                    price: "฿2,500+",
                    type: "四星級飯店",
                    image: "./hotel1.jpg"
                },
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
            { 
                time: "09:00", 
                title: "飯店早餐 & 自由行動", 
                type: "relax", 
                desc: "Eastin Tan 早餐很豐盛，建議預留 1 小時慢慢享用。" 
            },
            { 
                time: "10:30", 
                title: "飯店門口集合", 
                type: "transport", 
                note: "準備出發吃午餐",
                desc: "全員集合，請確認隨身物品。"
            },
            { 
                time: "11:00", 
                title: "烤山尼曼 泰北咖哩麵", 
                type: "food", 
                location: "Khao Soi Nimman", 
                tags: ["必吃美食", "排隊名店"], 
                desc: "米其林必比登推薦，清邁最知名的咖哩麵專賣店。",
                recommend: ["炸雞腿咖哩麵", "泰北香腸", "鮮蝦咖哩麵"],
                gInfo: {
                    rating: 4.2,
                    reviews: "5,800",
                    price: "฿100-300",
                    type: "泰北餐廳",
                    image: "./food_khaosoi.jpg"
                },
                nav: "Khao Soi Nimman" 
            },
            { 
                time: "13:00", 
                title: "飯店接送", 
                type: "transport", 
                note: "13:30 準時發車",
                desc: "前往大象行程，車程約 1 小時。" 
            },
            { 
                time: "14:30", 
                title: "Elfin Farm & Café", 
                type: "spot", 
                location: "Elfin Farm & Cafe", 
                tags: ["親子必遊", "餵食大象"], 
                desc: "體驗大象自然生活，餵食香蕉、拍照。",
                gInfo: {
                    rating: 4.8,
                    reviews: 156,
                    price: "行程",
                    type: "大象體驗",
                    image: "./elephant.jpg"
                },
                nav: "Elfin Farm & Cafe" 
            },
            { 
                time: "16:00", 
                title: "清邁夜間野生動物園", 
                type: "spot", 
                location: "Chiang Mai Night Safari", 
                tags: ["親子推薦", "長頸鹿餵食"], 
                desc: "搭乘遊園車看動物，非常涼爽舒適。",
                gInfo: {
                    rating: 4.3,
                    reviews: "8,900",
                    price: "門票",
                    type: "動物園",
                    image: "./zoo.jpg"
                },
                nav: "Chiang Mai Night Safari" 
            },
            {
                time: "20:30",
                title: "返回飯店",
                type: "transport",
                desc: "搭車返回 Eastin Tan Hotel。"
            },
            {
                time: "21:00",
                title: "自由行動",
                type: "relax",
                desc: "今日行程較豐富，建議早點休息。",
                location: "Eastin Tan Hotel"
            }
        ]
    },
    {
        date: "2/18 (三)",
        weather: "多雲 20-31°C",
        events: [
            { 
                time: "09:00", 
                title: "飯店早餐 & 自由行動", 
                type: "relax", 
                note: "11:30 要退房集合",
                desc: "最後享受一下 Eastin Tan 的設施，記得整理行李準備換飯店。" 
            },
            { 
                time: "11:30", 
                title: "飯店門口集合", 
                type: "transport", 
                desc: "辦理退房，搭車前往下一間飯店寄放行李。" 
            },
            { 
                time: "12:00", 
                title: "午餐：小藝術村周邊", 
                type: "food", 
                location: "Baan Kang Wat Area", 
                gInfo: {
                    rating: 4.6,
                    reviews: "1,200",
                    price: "฿200-400",
                    type: "藝術聚落",
                    image: "./art.jpg"
                },
                nav: "Baan Kang Wat" 
            },
            { 
                time: "14:00", 
                title: "小藝術村 (Baan Kang Wat)", 
                type: "spot", 
                location: "Baan Kang Wat", 
                tags: ["文青必逛", "手作市集"], 
                desc: "充滿綠意與藝術氣息的聚落，有很多手作小店。",
                recommend: ["手沖咖啡", "手工陶瓷杯"],
                gInfo: {
                    rating: 4.6,
                    reviews: "1,200",
                    price: "免費",
                    type: "文創園區",
                    image: "./art.jpg"
                },
                nav: "Baan Kang Wat" 
            },
            { 
                time: "17:00", 
                title: "Adirak Pizza", 
                type: "food", 
                location: "Adirak Pizza", 
                tags: ["知名披薩", "特色晚餐"], 
                desc: "清邁評價極高的手工披薩店。",
                recommend: ["Pesto Ricotta Pizza", "Burrata Salad"],
                gInfo: {
                    rating: 4.7,
                    reviews: 890,
                    price: "฿300-500",
                    type: "披薩餐廳",
                    image: "./food_pizza.jpg"
                },
                nav: "Adirak Pizza Chiang mai" 
            },
            { 
                time: "19:00", 
                title: "Central Chiangmai Airport", 
                type: "shop", 
                location: "Central Chiangmai Airport", 
                tags: ["超市補貨", "伴手禮"], 
                desc: "離機場很近的大型商場 (Robinson)，B1 Northern Village 專賣泰北特產。",
                gInfo: {
                    rating: 4.4,
                    reviews: "15,000",
                    price: "฿฿",
                    type: "購物中心",
                    image: "./shop_central.jpg"
                },
                nav: "Central Chiangmai Airport" 
            },
            { 
                time: "21:00", 
                title: "自由行動 & 入住", 
                type: "stay", 
                location: "Parc Borough City Resort", 
                gInfo: {
                    rating: 4.6,
                    reviews: "950",
                    price: "฿3,000+",
                    type: "度假村",
                    image: "./hotel2.jpg"
                },
                nav: "Parc Borough City Resort",
                desc: "入住第二間飯店。這間走度假村風格，比較安靜。",
                nearby: [
                    { name: "Caramellow Cafe", type: "咖啡", desc: "飯店旁玻璃屋咖啡廳" },
                    { name: "Sense Garden", type: "按摩", desc: "走路約 5-10 分鐘" },
                    { name: "Big C Hang Dong", type: "超市", desc: "車程約 5-8 分鐘" }
                ]
            }
        ]
    },
    {
        date: "2/19 (四)",
        weather: "晴朗 19-34°C",
        events: [
            { 
                time: "09:00", 
                title: "飯店早餐 & 自由行動", 
                type: "relax", 
                desc: "Parc Borough 的早餐評價也不錯。上午可以在飯店休息或游泳。" 
            },
            { 
                time: "11:00", 
                title: "Neng's 脆皮豬", 
                type: "food", 
                location: "Neng Earthen Jar Roast Pork", 
                tags: ["必吃脆皮豬", "在地推薦"], 
                desc: "用大甕烤出來的脆皮豬，皮超酥脆肉多汁。",
                recommend: ["脆皮豬飯", "烤雞", "酸辣湯"],
                gInfo: {
                    rating: 4.4,
                    reviews: "2,100",
                    price: "฿100-200",
                    type: "泰式小吃",
                    image: "./food_neng.jpg"
                },
                nav: "Neng Earthen Jar Roast Pork" 
            },
            { 
                time: "13:00", 
                title: "迪卡儂 清邁店", 
                type: "shop", 
                location: "Decathlon Chiang Mai", 
                desc: "位於大賣場區，如有缺旅行裝備可在此補給。",
                gInfo: {
                    rating: 4.5,
                    reviews: "350",
                    price: "฿฿",
                    type: "運動用品",
                    image: "./shop_decathlon.jpg"
                },
                nav: "Decathlon Chiang Mai" 
            },
            { 
                time: "14:00", 
                title: "Big C Extra 2", 
                type: "shop", 
                location: "Big C Extra Chiangmai 2", 
                desc: "最後的大型採購機會！買零食、泡麵、藥妝。",
                tags: ["伴手禮採買"],
                gInfo: {
                    rating: 4.3,
                    reviews: "4,200",
                    price: "฿฿",
                    type: "大賣場",
                    image: "./shop_bigc.jpg"
                },
                nav: "Big C Extra Chiangmai 2" 
            },
            { 
                time: "15:30", 
                title: "等待接送", 
                type: "transport", 
                desc: "準備前往廚藝學校" 
            },
            { 
                time: "16:00", 
                title: "Galangal 廚藝學校", 
                type: "spot", 
                location: "Galangal Cooking Studio", 
                tags: ["親子體驗", "學做泰菜"], 
                desc: "參觀市場 + 親手做晚餐。包含：酸辣湯、泰式炒河粉、咖哩等。",
                gInfo: {
                    rating: 4.9,
                    reviews: "920",
                    price: "行程",
                    type: "廚藝學校",
                    image: "./cooking.jpg"
                },
                nav: "Galangal Cooking Studio" 
            },
            { 
                time: "20:30", 
                title: "送回飯店休息", 
                type: "transport", 
                location: "Parc Borough City Resort",
                desc: "吃飽喝足回飯店。"
            },
            { 
                time: "21:00", 
                title: "自由行動", 
                type: "relax", 
                desc: "整理戰利品和行李，明天就要回程囉。" 
            }
        ]
    },
    {
        date: "2/20 (五)",
        weather: "晴時多雲 22-30°C",
        events: [
            { 
                time: "09:00", 
                title: "全日自由行動", 
                type: "relax", 
                note: "19:00 出發去機場",
                desc: "今天沒有排特定行程。建議：\n1. 享受飯店設施\n2. Central Airport Plaza 最後逛逛\n3. 找個咖啡廳發呆" 
            },
            { 
                time: "19:00", 
                title: "前往機場", 
                type: "transport", 
                note: "建議提早 2.5 小時抵達機場", 
                desc: "帶著滿滿的回憶準備回家。",
                gInfo: {
                    rating: 4.2,
                    reviews: "2,400",
                    price: "交通",
                    type: "國際機場",
                    image: "./airport.jpg"
                },
                nav: "Chiang Mai International Airport" 
            },
            { 
                time: "21:40", 
                title: "CNX-BKK 航班 PG220", 
                type: "transport", 
                note: "曼谷轉機", 
                desc: "抵達曼谷 BKK 機場後，請循著 'Transfer' 指標走，不用領行李。" 
            }
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
        { name: "Eastin Tan Hotel", address: "Maya 百貨對面, 尼曼區", tel: "請查看訂房憑證" },
        { name: "Parc Borough City Resort", address: "近機場, Mahidol Rd", tel: "請查看訂房憑證" }
    ],
    emergency: ["觀光警察: 1155", "救護車: 1669", "駐泰代表處: +66-2-119-3555"],
    tips: [
        "換匯：Superrich (橘色/綠色) 匯率較佳",
        "交通：下載 Grab App 叫車最方便",
        "小費：按摩約 50-100 泰銖，床頭小費 20 泰銖",
        "電壓：220V (插座通用)"
    ]
};

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

        // 標籤
        const tagsHtml = event.tags ? 
            `<div class="mt-2 flex flex-wrap gap-1">
                ${event.tags.map(t => `<span class="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-md font-medium">${t}</span>`).join('')}
             </div>` : '';

        // 介紹
        const descHtml = event.desc ? 
            `<p class="text-sm text-gray-600 mt-2 leading-relaxed whitespace-pre-line">${event.desc}</p>` : '';

        // 注意事項
        const noteHtml = event.note ? 
            `<p class="text-xs text-red-500 mt-2 flex items-start gap-1"><span class="font-bold">!</span> ${event.note}</p>` : '';

        // 推薦清單
        const recommendHtml = event.recommend ? 
            `<div class="mt-3 bg-orange-50 p-3 rounded-lg border border-orange-100">
                <p class="text-xs text-orange-600 font-bold mb-1">👍 推薦必試</p>
                <div class="flex flex-wrap gap-2">
                    ${event.recommend.map(r => `<span class="text-xs text-gray-700 bg-white px-2 py-1 rounded border border-orange-100">${r}</span>`).join('')}
                </div>
             </div>` : '';
        
        // 飯店周邊
        const nearbyHtml = event.nearby ? 
            `<div class="mt-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <p class="text-xs text-gray-500 font-bold mb-2">🏨 飯店周邊</p>
                <div class="space-y-2">
                    ${event.nearby.map(n => `
                        <div class="flex items-start gap-2 text-sm">
                            <span class="text-xs bg-gray-200 px-1.5 py-0.5 rounded text-gray-600 whitespace-nowrap">${n.type}</span>
                            <div><span class="font-medium text-gray-800">${n.name}</span> <span class="text-xs text-gray-500">- ${n.desc}</span></div>
                        </div>
                    `).join('')}
                </div>
             </div>` : '';

        // 導航按鈕渲染邏輯 (強大容錯版：支援本地圖片 + 自動文字替代)
        let navHtml = '';
        if (event.nav) {
            const navLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.nav)}`;
            
            const info = event.gInfo || {
                rating: 4.5,
                reviews: "Google",
                price: "前往",
                type: "地標",
                image: "" 
            };

            // 如果沒有圖片(或讀取失敗)，會顯示這個文字替代圖片
            // 使用 encodeURIComponent 確保中文正常顯示
            const fallbackImage = `https://placehold.co/600x400/e5e7eb/374151?text=${encodeURIComponent(event.title)}`;

            navHtml = `
            <a href="${navLink}" target="_blank" class="block mt-4 no-underline group">
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white flex transition-transform transform active:scale-95 group-hover:shadow-md h-28">
                    <img 
                        src="${info.image}" 
                        class="w-1/3 h-full object-cover bg-gray-200" 
                        alt="${event.title}" 
                        onerror="this.onerror=null; this.src='${fallbackImage}'"
                    >
                    <div class="w-2/3 p-3 flex flex-col justify-between relative">
                        <div class="absolute top-2 right-2 text-red-500">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 text-sm truncate pr-6">${event.title}</h4>
                            <div class="flex items-center gap-1 mt-1 text-xs">
                                <span class="text-yellow-400 font-bold">${info.rating}</span>
                                <div class="flex text-yellow-400">★★★★<span class="text-gray-300">★</span></div>
                                <span class="text-gray-400">(${info.reviews})</span>
                            </div>
                            <div class="text-xs text-gray-500 mt-0.5">${info.type} · ${info.price}</div>
                        </div>
                        <div class="mt-auto text-xs font-bold text-blue-600 flex items-center gap-1">
                            <span>導航</span> 
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                    </div>
                </div>
            </a>`;
        }

        return `
            <div class="bg-white p-5 rounded-2xl card-shadow mb-4 border border-gray-50">
                <div class="flex items-start justify-between">
                    <div>
                        <span class="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded mb-1 font-mono">${event.time}</span>
                        <h3 class="text-lg font-bold text-gray-800 leading-tight">${event.title}</h3>
                        ${event.location ? `<p class="text-xs text-gray-400 mt-1 flex items-center gap-1">📍 ${event.location}</p>` : ''}
                    </div>
                    <div class="text-2xl opacity-80 pl-2">${icon}</div>
                </div>
                ${tagsHtml}
                ${descHtml}
                ${recommendHtml}
                ${nearbyHtml}
                ${noteHtml}
                ${navHtml}
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

window.switchView = function(view) {
    const container = document.getElementById('app-container');
    const tabItinerary = document.getElementById('tab-itinerary');
    const tabInfo = document.getElementById('tab-info');
    const header = document.querySelector('header');

    if (view === 'itinerary') {
        tabItinerary.classList.add('active-tab', 'text-gray-500');
        tabItinerary.classList.remove('text-gray-400');
        tabInfo.classList.remove('active-tab', 'text-gray-500');
        tabInfo.classList.add('text-gray-400');
        if(header) header.classList.remove('hidden');
        renderItinerary(currentDayIndex);
    } else {
        tabInfo.classList.add('active-tab', 'text-gray-500');
        tabInfo.classList.remove('text-gray-400');
        tabItinerary.classList.remove('active-tab', 'text-gray-500');
        tabItinerary.classList.add('text-gray-400');
        if(header) header.classList.add('hidden');
        
        container.innerHTML = `
            <div class="space-y-6 pt-4">
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">航班資訊</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2">
                        ${infoData.flights.map(f => `<div class="flex items-center gap-2"><span class="text-lg">✈️</span> ${f}</div>`).join('')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">住宿資訊</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-3">
                        ${infoData.hotels.map(h => `<div><div class="font-bold text-gray-800 text-base">${h.name}</div><div class="text-gray-500 text-xs mt-1">${h.address}</div></div>`).join('<hr class="my-2 border-gray-100">')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">緊急聯絡</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2 border-l-4 border-red-400">
                        ${infoData.emergency.map(e => `<div>${e}</div>`).join('')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">旅遊小貼士</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2">
                        ${infoData.tips.map(t => `<div class="flex items-start gap-2"><span class="text-yellow-500">💡</span> <span>${t}</span></div>`).join('')}
                    </div>
                </section>
            </div>
        `;
    }
}