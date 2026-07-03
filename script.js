document.addEventListener('DOMContentLoaded', () => {
    // --- TEMA (DARK/LIGHT MODE) ---
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Default holatni tekshirish (oldingi tashrifdan saqlangan bo'lsa)
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        htmlEl.classList.remove('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        if (htmlEl.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // --- TIL (I18N) ALMASHTIRISH ---
    const langSelect = document.getElementById('langSelect');
    
    // Saqlangan tilni olish
    const currentLang = localStorage.getItem('lang') || 'ru';
    langSelect.value = currentLang;

    function applyTranslation(lang) {
        if (!translations[lang]) return;
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }
    
    applyTranslation(currentLang);

    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('lang', selectedLang);
        applyTranslation(selectedLang);
    });

    // --- FORM YUBORISH (GOOGLE APPS SCRIPT + TURNSTILE) ---
    const orderForm = document.getElementById('orderForm');
    const submitBtn = document.getElementById('submitBtn');

    // O'ZINGIZNING GOOGLE APPS SCRIPT WEB APP LINKINGIZNI SHU YERGA QO'YING:
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzGYxKWAzh0b_siqyFegJyLf_HKVATneLRwxmzRijR6mBXVU6DmkrBnQmiH_etbqkQ78A/exec"; 

    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Turnstile Captcha tekshiruvi (agar html da qo'shilgan bo'lsa)
        const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]');
        if (turnstileResponse && !turnstileResponse.value) {
            alert("Iltimos, siz bot emassligingizni tasdiqlang!");
            return;
        }

        // Ma'lumotlarni yig'ish
        const formData = {
            ism: document.getElementById('ism').value,
            familiya: document.getElementById('familiya').value,
            raqam: document.getElementById('raqam').value,
            xizmat: document.getElementById('xizmat').value,
            izoh: document.getElementById('izoh').value || '-',
            // turnstile_token: turnstileResponse ? turnstileResponse.value : '' // Captcha tekshirish backendda qilinishi mumkin
        };

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Yuborilmoqda...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

        try {
            const response = await fetch(WEB_APP_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8", 
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.status === "success") {
                alert("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
                orderForm.reset();
                // Turnstile-ni qayta yuklash (kerak bo'lsa)
                if (typeof turnstile !== 'undefined') {
                    turnstile.reset();
                }
            } else {
                alert("Xatolik yuz berdi: " + result.message);
            }
        } catch (error) {
            console.error(error);
            alert("Tarmoqda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
    });
});
