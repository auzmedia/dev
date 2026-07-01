// --- CONFIGURATION ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxgsNwA0f-88MKAIYIBbPRDslU5CUuP4BOU3uBURRCcfLkRxjIYqi3dRh2XRh9RUOvsyw/exec"; 

let currentFormData = null;

document.addEventListener("DOMContentLoaded", () => {
    // DARK / LIGHT THEME TOGGLE
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                themeIcon.className = 'fa-solid fa-sun';
            } else {
                themeIcon.className = 'fa-solid fa-moon';
            }
        });
    }

    // FORM SUBMISSION EVENT
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // CLOUDFLARE TURNSTILE CAPTCHA VALIDATION
            const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]').value;
            if (!turnstileResponse) {
                alert("Iltimos, robot emasligingizni tasdiqlang (Captcha)!");
                return;
            }
            
            // Ma'lumotlarni yig'ish
            currentFormData = {
                ism: document.getElementById('ism').value,
                familiya: document.getElementById('familiya').value,
                raqam: document.getElementById('raqam').value,
                xizmat: document.getElementById('xizmat').value,
                izoh: document.getElementById('izoh').value,
                xolat: "Kutilmoqda"
            };

            openModal();
        });
    }
});

// MODAL CONTROLS
function openModal() {
    document.getElementById('verifyModal').classList.remove('hidden');
    startVerificationChain();
}

function closeModal() {
    document.getElementById('verifyModal').classList.add('hidden');
    resetModal();
}

function resetModal() {
    document.getElementById('modalLoader').classList.remove('hidden');
    document.getElementById('codeAuthSection').classList.add('hidden');
    document.getElementById('modalTitle').innerText = "Raqamni tekshirish";
    document.getElementById('modalStatus').innerText = "Tizim aloqa kanallarini tekshirmoqda...";
    document.getElementById('verifyCode').value = "";
}

// KASKADLI TEKSHIRUV ZANJIRI (WhatsApp -> Telegram -> Sheets)
function startVerificationChain() {
    const statusText = document.getElementById('modalStatus');
    statusText.innerText = "WhatsApp tarmog'i tekshirilmoqda...";
    
    setTimeout(() => {
        let hasWhatsApp = Math.random() > 0.5; // API Simulyatsiya
        
        if (hasWhatsApp) {
            statusText.innerText = "WhatsApp aniqlandi! Tasdiqlash kodi yuborildi.";
            showCodeSection("WhatsApp");
        } else {
            statusText.innerText = "Raqamda WhatsApp topilmadi. Telegram tekshirilmoqda...";
            
            setTimeout(() => {
                let hasTelegram = Math.random() > 0.5; // API Simulyatsiya
                
                if (hasTelegram) {
                    statusText.innerText = "Telegram kanali aniqlandi! Tasdiqlash kodi yuborildi.";
                    showCodeSection("Telegram");
                } else {
                    statusText.innerText = "Aloqa kanallari topilmadi. Buyurtma to'g'ridan-to'g'ri yozilmoqda...";
                    currentFormData.xolat = "Avto-qabul (Aloqasiz)";
                    sendToGoogleSheets();
                }
            }, 2000);
        }
    }, 2000);
}

function showCodeSection(platform) {
    document.getElementById('modalLoader').classList.add('hidden');
    document.getElementById('codeAuthSection').classList.remove('hidden');
    document.getElementById('modalTitle').innerText = `${platform} orqali tasdiqlash`;
    
    document.getElementById('btnConfirmCode').onclick = function() {
        const inputCode = document.getElementById('verifyCode').value;
        if (inputCode === "7777") { // Statik test kodi
            document.getElementById('codeAuthSection').classList.add('hidden');
            document.getElementById('modalLoader').classList.remove('hidden');
            document.getElementById('modalStatus').innerText = "Kod tasdiqlandi! Google Sheets'ga yozilmoqda...";
            
            currentFormData.xolat = `Tasdiqlandi (${platform})`;
            sendToGoogleSheets();
        } else {
            alert("Xato kod kiritildi! Qayta urinib ko'ring.");
        }
    };
}

// MA'LUMOTLARNI GOOGLE PRINTS/SHEETS'GA POST QILISH
function sendToGoogleSheets() {
    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentFormData)
    })
    .then(() => {
        document.getElementById('modalLoader').classList.add('hidden');
        document.getElementById('modalStatus').innerHTML = "<span class='text-green-600 dark:text-green-400 font-bold'>✓ Buyurtma muvaffaqiyatli qabul qilindi!</span>";
        setTimeout(() => {
            closeModal();
            document.getElementById('orderForm').reset();
            if (typeof turnstile !== "undefined") turnstile.reset();
        }, 2500);
    })
    .catch(error => {
        console.error("Xatolik:", error);
        document.getElementById('modalStatus').innerText = "Tizimda xatolik. Qayta urinib ko'ring.";
    });
}
