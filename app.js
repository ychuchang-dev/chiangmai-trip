// --- 資料區 (已根據您的 Google Sheet 整理) ---
const itineraryData = [
    {
        date: "2/16 (一)",
        weather: "晴時多雲 18-32°C", // 模擬天氣
        events: [
            { time: "07:20", title: "搭乘 BR257 飛往清邁", type: "transport", note: "10:35 抵達 CNX 機場" },
            { time: "12:00", title: "烤山尼曼 泰北咖哩麵", type: "food", location: "Khao Soi Nimman", tags: ["必吃美食", "米其林推薦"], nav: "Khao Soi Nimman" },
            { time: "14:00", title: "小藝術村 (Baan Kang Wat)", type: "spot", location: "Baan Kang Wat", tags: ["文青必逛", "拍照"], nav: "Baan Kang Wat" },
            { time: "16:00", title: "清邁夜間野生動物園", type: "spot", location: "Chiang Mai Night Safari", tags: ["親子推薦"], nav: "Chiang Mai Night Safari" },
            { time: "22:00", title: "入住：清邁易思庭譚飯店", type: "stay", location: "Eastin Tan Hotel Chiang Mai", nav: "Eastin Tan Hotel Chiang Mai" }
        ]
    },
    {
        date: "2/17 (二)",
        weather: "晴朗 19-33°C",
        events: [
            { time: "09:00", title: "飯店早餐 & 自由活動", type: "relax", note: "享受飯店設施" },
            { time: "11:00", title: "Neng's Clay Oven 脆皮豬", type: "food", location: "Neng Earthen Jar Roast Pork", tags: ["必吃脆皮豬", "在地人推薦"], nav: "Neng Earthen Jar Roast Pork" },
            { time: "13:00", title: "Big C Extra 採買", type: "shop", location: "Big C Extra Chiangmai 2", tags: ["伴手禮補給"], nav: "Big C Extra Chiangmai 2" },
            { time: "17:00", title: "清邁夫人私房菜", type: "food", location: "Baan Khun Nine Kitchen", tags: ["必點泰北菜"], nav: "Baan Khun Nine Kitchen" },
            { time: "19:00", title: "Maya 百貨 & 超市", type: "shop", location: "MAYA Lifestyle Shopping Center", tags: ["必買伴手禮"], nav: "MAYA Lifestyle Shopping Center" }
        ]
    },
    {
        date: "2/18 (三)",
        weather: "多雲 20-31°C",
        events: [
            { time: "13:00", title: "飯店接送 (大象行程)", type: "transport" },
            { time: "14:30", title: "Elfin Farm & Café 大象體驗", type: "spot", location: "Elfin Farm & Cafe", tags: ["親子必遊", "餵食大象", "拍照攻略: 穿亮色衣服"], nav: "Elfin Farm & Cafe" },
            { time: "20:30", title: "返回飯店休息", type: "stay", location: "Parc Borough City Resort", note: "更換飯店", nav: "Parc Borough City Resort" }
        ]
    },
    {
        date: "2/19 (四)",
        weather: "晴朗 19-34°C",
        events: [
            { time: "12:00", title: "小藝術村午餐", type: "food", location: "Baan Kang Wat", nav: "Baan Kang Wat" },
            { time: "14:00", title: "迪卡儂 清邁店", type: "shop", location: "Decathlon Chiang Mai", nav: "Decathlon Chiang Mai" },
            { time: "16:00", title: "Galangal 廚藝學校", type: "spot", location: "Galangal Cooking Studio", tags: ["親子體驗", "學做泰菜"], nav: "Galangal Cooking Studio" },
            { time: "18:00", title: "清邁大學夜市", type: "food", location: "Malin Plaza", tags: ["學生美食", "平價服飾"], nav: "Malin Plaza" }
        ]
    },
    {
        date: "2/20 (五)",
        weather: "晚間有雨 22-30°C",
        events: [
            { time: "19:00", title: "前往機場", type: "transport" },
            { time: "21:40", title: "搭乘 PG220 飛往曼谷", type: "transport", note: "轉機回台" }
        ]
    }
];

const infoData = {
    flights: ["BR257 TPE-CNX 07:20-10:35", "PG220 CNX-BKK 21:40-23:05", "BR206 BKK-TPE 02:15-06:50"],
    hotels: [
        { name: "Eastin Tan Hotel", address: "近尼曼路, Maya對面" },
        { name: "Parc Borough City Resort", address: "近機場, 度假風" }
    ],
    emergency: ["觀光警察: 1155", "救護車: 1669", "駐泰代表處: +66-2-119-3555"],
    tips: ["電壓 220V (插座通用)", "小費：按摩約 50-100 泰銖", "交通：Grab 最好用"]
};

// --- 邏輯區 ---

let currentDayIndex = 0;

function init() {
    renderDateSelector();
    renderItinerary(0);
}

// 渲染日期選擇器
function renderDateSelector() {
    const container = document.getElementById('date-selector');
    container.innerHTML = itineraryData.map((day, index) => `
        <button onclick="renderItinerary(${index})" 
            class="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${index === 0 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'} date-btn" data-index="${index}">
            ${day.date.split(' ')[0]}
        </button>
    `).join('');
}

// 渲染當日行程
function renderItinerary(index) {
    currentDayIndex = index;
    
    // 更新日期按鈕樣式
    document.querySelectorAll('.date-btn').forEach(btn => {
        if(parseInt(btn.dataset.index) === index) {
            btn.className = "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors bg-gray-800 text-white date-btn";
        } else {
            btn.className = "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-500 date-btn";
        }
    });

    const container = document.getElementById('app-container');
    const day = itineraryData[index];

    // 天氣區塊
    let html = `
        <div class="bg-blue-50 p-4 rounded-xl flex items-center justify-between mb-4 border border-blue-100">
            <div>
                <p class="text-xs text-blue-500 font-bold tracking-wider">WEATHER</p>
                <p class="text-lg font-medium text-gray-700">${day.weather}</p>
            </div>
            <div class="text-2xl">🌤️</div>
        </div>
    `;

    // 行程卡片
    html += day.events.map(event => {
        // 分類顏色與圖示
        let typeColor = "bg-white";
        let icon = "📍";
        if(event.type === 'food') { icon = "🍜"; }
        else if(event.type === 'transport') { icon = "🚗"; }
        else if(event.type === 'stay') { icon = "🏨"; }
        else if(event.type === 'shop') { icon = "🛍️"; }

        // 標籤 HTML
        const tagsHtml = event.tags ? 
            `<div class="mt-2 flex flex-wrap gap-1">
                ${event.tags.map(t => `<span class="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-md font-medium">${t}</span>`).join('')}
             </div>` : '';

        // 導航按鈕
        const navHtml = event.nav ? 
            `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.nav)}" target="_blank" 
                class="mt-3 block w-full text-center bg-gray-800 text-white py-2 rounded-lg text-sm font-bold shadow-md active:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                導航前往
             </a>` : '';

        return `
            <div class="bg-white p-5 rounded-2xl card-shadow mb-4 border border-gray-50">
                <div class="flex items-start justify-between">
                    <div>
                        <span class="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded mb-1 font-mono">${event.time}</span>
                        <h3 class="text-lg font-bold text-gray-800">${event.title}</h3>
                        ${event.location ? `<p class="text-sm text-gray-400 mt-0.5 flex items-center gap-1"><span class="text-xs">📍</span> ${event.location}</p>` : ''}
                        ${event.note ? `<p class="text-sm text-gray-500 mt-2 italic border-l-2 border-gray-200 pl-2">${event.note}</p>` : ''}
                    </div>
                    <div class="text-2xl opacity-80">${icon}</div>
                </div>
                ${tagsHtml}
                ${navHtml}
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// 切換分頁
function switchView(view) {
    const container = document.getElementById('app-container');
    const tabItinerary = document.getElementById('tab-itinerary');
    const tabInfo = document.getElementById('tab-info');
    const header = document.querySelector('header');

    if (view === 'itinerary') {
        tabItinerary.classList.add('active-tab', 'text-gray-500');
        tabItinerary.classList.remove('text-gray-400');
        tabInfo.classList.remove('active-tab', 'text-gray-500');
        tabInfo.classList.add('text-gray-400');
        header.classList.remove('hidden');
        renderItinerary(currentDayIndex);
    } else {
        tabInfo.classList.add('active-tab', 'text-gray-500');
        tabInfo.classList.remove('text-gray-400');
        tabItinerary.classList.remove('active-tab', 'text-gray-500');
        tabItinerary.classList.add('text-gray-400');
        header.classList.add('hidden');
        
        // 渲染資訊頁
        container.innerHTML = `
            <div class="space-y-6 pt-4">
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">航班資訊</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2">
                        ${infoData.flights.map(f => `<div class="flex items-center gap-2">✈️ ${f}</div>`).join('')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">住宿資訊</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-3">
                        ${infoData.hotels.map(h => `<div><div class="font-bold text-gray-800">${h.name}</div><div class="text-gray-500 text-xs">${h.address}</div></div>`).join('')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">緊急聯絡</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2 border-l-4 border-red-400">
                        ${infoData.emergency.map(e => `<div>${e}</div>`).join('')}
                    </div>
                </section>
                <section>
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">貼心提醒</h3>
                    <div class="bg-white p-4 rounded-xl card-shadow text-sm space-y-2">
                        ${infoData.tips.map(t => `<div class="flex items-start gap-2"><span class="text-yellow-500">💡</span> ${t}</div>`).join('')}
                    </div>
                </section>
            </div>
        `;
    }
}

// 啟動
init();