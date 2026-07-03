// --- CONFIGURATION ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxgsNwA0f-88MKAIYIBbPRDslU5CUuP4BOU3uBURRCcfLkRxjIYqi3dRh2XRh9RUOvsyw/exec"; 

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
            const turnstileElement = document.querySelector('[name="cf-turnstile-response"]');
            if (!turnstileElement || !turnstileElement.value) {
                alert("Iltimos, robot emasligingizni tasdiqlang (Captcha)!");
                return;
            }

            const submitBtn = document.getElementById('submitBtn');
            const originalBtnText = submitBtn.innerText;
            
            // Tugmani "Yuborilmoqda..." holatiga o'tkazish
            submitBtn.innerText = "Yuborilmoqda...";
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

            // Ma'lumotlarni yig'ish
            const currentFormData = {
                ism: document.getElementById('ism').value,
                familiya: document.getElementById('familiya').value,
                raqam: document.getElementById('raqam').value,
                xizmat: document.getElementById('xizmat').value,
                izoh: document.getElementById('izoh').value,
                xolat: "Yangi"
            };

            // GOOGLE SHEETS GA YUBORISH
            fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(currentFormData)
            })
            .then(() => {
                // Muvaffaqiyatli yuborilganda tugmani yashil rangga o'tkazish
                submitBtn.innerText = "✓ Arizangiz qabul qilindi!";
                submitBtn.classList.replace('bg-blue-600', 'bg-green-600');
                submitBtn.classList.replace('hover:bg-blue-500', 'hover:bg-green-500');
                submitBtn.classList.replace('shadow-blue-500/20', 'shadow-green-500/20');
                
                // 3 soniyadan so'ng formani va tugmani asli holiga qaytarish
                setTimeout(() => {
                    orderForm.reset();
                    if (typeof turnstile !== "undefined") turnstile.reset();
                    
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                    submitBtn.classList.replace('bg-green-600', 'bg-blue-600');
                    submitBtn.classList.replace('hover:bg-green-500', 'hover:bg-blue-500');
                    submitBtn.classList.replace('shadow-green-500/20', 'shadow-blue-500/20');
                }, 3000);
            })
            .catch(error => {
                console.error("Xatolik:", error);
                alert("Tizimda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                
                // Xatolik bo'lsa tugmani o'z holiga qaytarish
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
            });
        });
    }
});
