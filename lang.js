// --- MULTI-LANGUAGE TRANSLATION DICTIONARY ---
const langData = {
    uz: {
        nav_services: "Xizmatlar", nav_portfolio: "Portfolio", nav_pricing: "Narxlar", nav_faq: "FAQ", nav_order_btn: "Buyurtma berish",
        hero_badge: "Landing Pages & Business Automation", hero_title_1: "Biznesingiz uchun", hero_title_2: "raqamli sotuv tizimlari",
        hero_desc: "Biz mijoz jalb qiluvchi tezyurar Landing Pagelar yaratamiz, Instagram API va Telegram botlar orqali arizalarni avtomatlashtirib Google Jadvallarga ulaymiz va professional Target reklamalarini yoqib beramiz.",
        hero_btn_start: "Loyihani boshlash", hero_btn_portfolio: "Bajarilgan ishlar", stack_title: "Biz ishlatadigan professional asboblar",
        services_title: "Sizga qanday yechimlar kerak?", services_desc: "Biznesingizni yangi bosqichga olib chiquvchi yo'nalishlarimiz.",
        service_1_title: "Premium Landing Pages", service_1_desc: "Mijozlarni birinchi soniyadanoq jalb qiluvchi, ultra tez yuklanadigan, zamonaviy va mukammal bir sahifali veb-saytlar.",
        service_2_title: "Xabarlar va Bot Avtomatizatsiyasi", service_2_desc: "Instagram API orqali avtomat javoblar yuborish, saytni Telegram botga ulash, arizalarni real vaqtda Google Jadvallar va guruhlarga yuborish.",
        service_3_title: "Target Reklama (Meta Ads)", service_3_desc: "Yaratilgan saytingizga tayyor mijozlar oqimini olib kelish uchun Facebook va Instagram ijtimoiy tarmoqlarida professional target yoqib berish.",
        portfolio_title: "Real Loyihalarimiz", portfolio_desc: "Bizning mahoratimizni isbotlovchi amaldagi real keyslar.",
        p1_title: "Fast-Food Buyurtma Sahifasi", p1_desc: "Mijozlar taomlarni tanlab, buyurtma tugmasini bosganda, barcha ma'lumotlar avtomat ravishda kafe xodimlari Telegram guruhiga va Google Jadvallarga yetib boradigan tizim.",
        p2_title: "Klinika uchun Premium Landing", p2_desc: "Tibbiyot markazi uchun yaratilgan konversiyasi yuqori veb-sahifa. Unga professional target reklamasi sozlab berilgan, arizalar to'g'ridan-to'g'ri Google Sheet jadvallarida jamlanadi.",
        p3_title: "Onlayn Kitob Do'koni Vitrinasi", p3_desc: "Kitob mahsulotlarini chiroyli va qulay filtrlash imkoniyatiga ega katalog sayt. Har bir xarid arizasi Google Jadvallar bazasiga integratsiya qinenilgan.",
        p4_title: "An'anaviy Tapchan Galereya Sayti", p4_desc: "Milliy va zamonaviy tapchan dizaynlarining professional chizmalari hamda rasmlarini taqdim etuvchi, tez ishlaydigan interaktiv vitrina-sahifa.",
        pricing_title: "Shaffof Tariflar va Paketlar", pricing_desc: "Sizga kerakli xizmatlar ko'lamini tanlang.", form_title: "Keling, loyihangizni boshlaymiz",
        form_desc: "Formani to'ldiring. Biz biznesingiz uchun eng mukammal raqamli yechimni taklif qilamiz.", footer_text: "Biznesingizni avtomatlashtirish bo'yicha sizning professional raqamli hamkoringiz."
    },
    ru: {
        nav_services: "Услуги", nav_portfolio: "Портфолио", nav_pricing: "Цены", nav_faq: "FAQ", nav_order_btn: "Заказать",
        hero_badge: "Landing Pages & Business Automation", hero_title_1: "Цифровые системы продаж", hero_title_2: "для вашего бизнеса",
        hero_desc: "Мы создаем высококонверсионные целевые страницы, автоматизируем заявки через Instagram API и Telegram-ботов с интеграцией в Google Таблицы.",
        hero_btn_start: "Начать проект", hero_btn_portfolio: "Наши работы", stack_title: "Наши профессиональные инструменты",
        services_title: "Какие решения вам нужны?", services_desc: "Направления, которые выведут ваш бизнес на новый уровень.",
        service_1_title: "Premium Landing Pages", service_1_desc: "Современные одностраничные сайты, привлекающие клиентов с первой секунды.",
        service_2_title: "Автоматизация ботов", service_2_desc: "Автоответы в Instagram Direct, отправка лидов в Google Таблицы и Telegram в реальном времени.",
        service_3_title: "Таргетированная реклама", service_3_desc: "Настройка профессионального таргета в Facebook и Instagram для привлечения готовых клиентов.",
        portfolio_title: "Реальные проекты", portfolio_desc: "Кейсы, доказывающие наше мастерство.",
        p1_title: "Страница заказа фаст-фуда", p1_desc: "Интеграция меню с автоматической отправкой заказов в Telegram-группу сотрудников и Google Таблицы.",
        p2_title: "Премиум Лэндинг для клиники", p2_desc: "Медицинский одностраничник с высокой конверсией, настроенным таргетом и базой на Google Sheets.",
        p3_title: "Витрина книжного интернет-магазина", p3_desc: "Сайт-каталог книг с удобной фильтрацией. Каждая заявка автоматически уходит в базу.",
        p4_title: "Галерея традиционных тапчанов", p4_desc: "Интерактивная витрина с чертежами и 3D визуализациями национальных и современных тапчанов.",
        pricing_title: "Прозрачные тарифы", pricing_desc: "Выберите объем услуг, подходящий вашему бизнесу.", form_title: "Давайте начнем ваш проект",
        form_desc: "Заполните форму, и мы предложим идеальное цифровое решение для вашего бизнеса.", footer_text: "Ваш профессиональный цифровой партнер по автоматизации бизнеса."
    },
    kg: {
        nav_services: "Кызматтар", nav_portfolio: "Портфолио", nav_pricing: "Баалар", nav_faq: "FAQ", nav_order_btn: "Буйрутма берүү",
        hero_badge: "Landing Pages & Business Automation", hero_title_1: "Бизнесиңиз үчүн", hero_title_2: "сатуу тутумдары",
        hero_desc: "Биз кардарларды тартуучу Landing Page баракчаларын түзөбүз, Instagram API жана Telegram боттор аркылуу табыштамаларды автоматташтырып Google Sheets'ке туташтырабыз.",
        hero_btn_start: "Долбоорду баштоо", hero_btn_portfolio: "Аткарылган иштер", stack_title: "Биз колдонгон кесиптик куралдар",
        services_title: "Сизге кандай чечимдер керек?", services_desc: "Бизнесиңизди жаңы деңгээлге көтөрүүчү багыттарыбыз.",
        service_1_title: "Premium Landing Pages", service_1_desc: "Кардарди биринчи секунддан тарткан, өтө тез иштеген заманбап веб-сайттар.",
        service_2_title: "Бот Автоматташтыруу", service_2_desc: "Instagram Direct билдирүүлөрүнө автоматтык жооптор жана табыштамаларды түз Google Жабжактарга жөнөтүү.",
        service_3_title: "Таргет Жарнамасы", service_3_desc: "Даяр кардарларды тартуу үчүн Facebook жана Instagram тармактарында кесипкөй жарнама жөндөө.",
        portfolio_title: "Реалдуу Долбоорлор", portfolio_desc: "Биздин чеберчилигибизди далилдеген реалдуу кейстер.",
        p1_title: "Фаст-Фуд буйрутма баракчасы", p1_desc: "Буйрутмалар автоматтык түрдө кызматкерлердин Telegram группасына жана Google Таблицага түшкөн система.",
        p2_title: "Клиника үчүн Премиум Лэндинг", p2_desc: "Медициналык борбор үчүн түзүлгөн жогорку конверсиялуу баракча жана жарнама кызматы.",
        p3_title: "Онлайн Китеп Дүкөнү", p3_desc: "Китептерди оңой чыпкалоо мүмкүнчүлүгү бар каталог сайт. Ар бир өтүнмө Google Таблицага жазылат.",
        p4_title: "Салттуу Тапчан Галереясы", p4_desc: "Улуттук жана заманбап тапчандардын чиймелерин көрсөткөн интерактивдүү витрина-сайт.",
        pricing_title: "Ачык-айкын тарифтер", pricing_desc: "Бизнесиңизге ылайыктуу кызматтардын көлөмүн тандаңыз.", form_title: "Долбооруңузду баштайлы",
        form_desc: "Форманы толтуруңуз. Биз сиздин бизнесиңиз үчүн эң мыкты санариптик чечимди сунуштайбыз.", footer_text: "Бизнести автоматташтыруу боюнча сиздин кесипкөй санариптик өнөктөшүңүз."
    }
};

// LANGUAGE SWITCHER ENGINE
document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById('langSelect');
    
    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[lang] && langData[lang][key]) {
                el.innerText = langData[lang][key];
            }
        });
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
    }
});
