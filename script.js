// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        "badge": "Available for work",
        "greeting": "Hello, I'm",
        "name": "Hussein Ahmed",
        "job-title": "Software Engineer • Java • Python • Kotlin",
        "stat-projects": "Projects",
        "stat-certificates": "Certificates",
        "stat-graduation": "Graduate",
        "btn-projects": "View Projects",
        "btn-contact": "Contact Me",
        "btn-download-cv": "Download CV",
        "about-title": "About Me",
        "about-text": "Software Engineering graduate from South Ural State University (2026). Skilled in Java, Python, Kotlin, SQL, C#. Experienced in developing web applications with Spring Boot, mobile applications on Android, and 1C configurations for business automation.",
        "skills-title": "Skills",
        "projects-title": "Projects",
        "project1-title": "E-commerce Store",
        "project1-desc": "Web application on Java + Spring Boot with MySQL, REST API, authentication, and admin panel.",
        "project2-title": "Bank Card Management",
        "project2-desc": "Backend on Java + Spring Boot with JWT, card management, transfers, and role model.",
        "project3-title": "1C Trade Automation",
        "project3-desc": "1C:Enterprise 8.3 configuration for automating purchases, sales, and warehouse.",
        "project4-title": "MathTrainerKids",
        "project4-desc": "Android app for teaching children counting. Implemented UI and task logic.",
        "project5-title": "Apriori Data Analysis",
        "project5-desc": "Market basket analysis using Apriori algorithm in Python.",
        "view-project": "View Project",
        "certificates-title": "Certificates",
        "cert-css": "CSS",
        "cert-js": "JavaScript",
        "cert-testing": "Functional Testing",
        "cert-html": "HTML",
        "cert-git": "Git",
        "cert-java": "Java",
        "cert-csharp": "C#",
        "contact-title": "Get In Touch",
        "contact-text": "I'm currently open to new opportunities in IT. Feel free to reach out!",
        "footer": "© 2026 Hussein Ahmed — Built with passion",
        "cv-modal-title": "Choose CV Language",
        "cv-modal-desc": "Select the language for your CV download"
    },
    ru: {
        "badge": "Открыт для работы",
        "greeting": "Привет, я",
        "name": "Хуссейн Ахмед",
        "job-title": "Инженер-программист • Java • Python • Kotlin",
        "stat-projects": "Проектов",
        "stat-certificates": "Сертификатов",
        "stat-graduation": "Выпуск",
        "btn-projects": "Проекты",
        "btn-contact": "Связаться",
        "btn-download-cv": "Скачать резюме",
        "about-title": "Обо мне",
        "about-text": "Выпускник ЮУрГУ по специальности «Программная инженерия» (2026). Владею Java, Python, Kotlin, SQL, C#. Имею опыт разработки веб-приложений на Spring Boot, мобильных приложений на Android и конфигураций 1С.",
        "skills-title": "Навыки",
        "projects-title": "Проекты",
        "project1-title": "Интернет-магазин",
        "project1-desc": "Веб-приложение на Java + Spring Boot с MySQL, REST API, аутентификацией и панелью администратора.",
        "project2-title": "Управление картами",
        "project2-desc": "Backend на Java + Spring Boot с JWT, управлением картами, переводами и ролевой моделью.",
        "project3-title": "Автоматизация 1С",
        "project3-desc": "Конфигурация 1С:Предприятие 8.3 для автоматизации закупок, продаж и склада.",
        "project4-title": "MathTrainerKids",
        "project4-desc": "Android-приложение для обучения детей счёту.",
        "project5-title": "Анализ данных Apriori",
        "project5-desc": "Анализ покупательских корзин с использованием алгоритма Apriori на Python.",
        "view-project": "Смотреть",
        "certificates-title": "Сертификаты",
        "cert-css": "CSS",
        "cert-js": "JavaScript",
        "cert-testing": "Функциональное тестирование",
        "cert-html": "HTML",
        "cert-git": "Git",
        "cert-java": "Java",
        "cert-csharp": "C#",
        "contact-title": "Связаться",
        "contact-text": "Открыт для новых возможностей в IT. Буду рад обратной связи!",
        "footer": "© 2026 Хуссейн Ахмед — Создано с душой",
        "cv-modal-title": "Выберите язык резюме",
        "cv-modal-desc": "Выберите язык для скачивания резюме"
    },
    ar: {
        "badge": "متاح للعمل",
        "greeting": "مرحباً، أنا",
        "name": "حسين أحمد",
        "job-title": "مهندس برمجيات • Java • Python • Kotlin",
        "stat-projects": "مشاريع",
        "stat-certificates": "شهادات",
        "stat-graduation": "تخرج",
        "btn-projects": "المشاريع",
        "btn-contact": "تواصل معي",
        "btn-download-cv": "تحميل السيرة الذاتية",
        "about-title": "نبذة عني",
        "about-text": "خريج هندسة البرمجيات من جامعة جنوب الأورال الحكومية (2026). أمتلك مهارات في Java، Python، Kotlin، SQL، C#. لدي خبرة في تطوير تطبيقات الويب باستخدام Spring Boot، وتطبيقات الأندرويد، وإعداد أنظمة 1C.",
        "skills-title": "المهارات",
        "projects-title": "المشاريع",
        "project1-title": "متجر إلكتروني",
        "project1-desc": "تطبيق ويب على Java + Spring Boot مع MySQL، REST API، نظام مصادقة، ولوحة تحكم.",
        "project2-title": "إدارة البطاقات",
        "project2-desc": "تطبيق Backend على Java + Spring Boot مع JWT، إدارة البطاقات، والتحويلات.",
        "project3-title": "أتمتة 1C",
        "project3-desc": "إعداد 1C:Enterprise 8.3 لأتمتة المشتريات والمبيعات والمستودعات.",
        "project4-title": "MathTrainerKids",
        "project4-desc": "تطبيق أندرويد لتعليم الأطفال العد.",
        "project5-title": "تحليل البيانات Apriori",
        "project5-desc": "تحليل سلة السوق باستخدام خوارزمية Apriori بلغة Python.",
        "view-project": "عرض المشروع",
        "certificates-title": "الشهادات",
        "cert-css": "CSS",
        "cert-js": "JavaScript",
        "cert-testing": "الاختبار الوظيفي",
        "cert-html": "HTML",
        "cert-git": "Git",
        "cert-java": "Java",
        "cert-csharp": "C#",
        "contact-title": "تواصل معي",
        "contact-text": "منفتح على فرص جديدة في مجال IT. سأكون سعيداً بتواصلكم!",
        "footer": "© 2026 حسين أحمد — صُنع بشغف",
        "cv-modal-title": "اختر لغة السيرة الذاتية",
        "cv-modal-desc": "حدد اللغة التي تريد تحميل السيرة الذاتية بها"
    }
};

// ============================================
// CHANGE LANGUAGE
// ============================================
function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + lang).classList.add('active');

    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }

    localStorage.setItem('preferredLanguage', lang);
}

// ============================================
// LOAD SAVED LANGUAGE
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});

// ============================================
// ANIMATED PARTICLE BACKGROUND
// ============================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.min(80, Math.floor(canvas.width / 20));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                const opacity = 1 - (distance / 120);
                ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener('resize', () => {
    initParticles();
});

// ============================================
// CV MODAL
// ============================================
function openCvModal() {
    document.getElementById('cv-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCvModal() {
    document.getElementById('cv-modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    const modal = document.getElementById('cv-modal');
    if (e.target === modal) closeCvModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCvModal();
});

// ============================================
// BUILD CV HTML TEMPLATE
// ============================================
function buildCvHtml(lang) {
    const data = cvData[lang];

    const skillsHtml = data.sections.skills.items.map(skill => `
        <div class="cv-skill-row">
            <span class="cv-skill-cat">${skill.category}:</span>
            <span class="cv-skill-list">${skill.list}</span>
        </div>
    `).join('');

    const projectsHtml = data.sections.projects.items.map((p, i) => `
        <div class="cv-project">
            <h3>${i + 1}. ${p.name}</h3>
            <p>${p.desc}</p>
            <span class="cv-tech">Tech: ${p.tech}</span>
        </div>
    `).join('');

    const certsHtml = data.sections.certificates.items.join('  •  ');

    const eduHtml = data.sections.education.items.map(e => `
        <div class="cv-edu-item">
            <div class="cv-edu-school">${e.school}</div>
            <div class="cv-edu-row">
                <span>${e.degree}</span>
                <span class="cv-edu-year">${e.year}</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="cv-template-inner">
            <div class="cv-header">
                <h1>${data.name}</h1>
                <div class="cv-job-title">${data.title}</div>
            </div>
            <div class="cv-contacts">
                ${data.contacts.email} &nbsp;•&nbsp; ${data.contacts.phone} &nbsp;•&nbsp; ${data.contacts.github} &nbsp;•&nbsp; ${data.contacts.telegram}
            </div>
            <div class="cv-body">
                <div class="cv-section">
                    <h2>${data.sections.summary.title}</h2>
                    <p>${data.sections.summary.text}</p>
                </div>
                <div class="cv-section">
                    <h2>${data.sections.skills.title}</h2>
                    ${skillsHtml}
                </div>
                <div class="cv-section">
                    <h2>${data.sections.projects.title}</h2>
                    ${projectsHtml}
                </div>
                <div class="cv-section">
                    <h2>${data.sections.certificates.title}</h2>
                    <div class="cv-certs">${certsHtml}</div>
                </div>
                <div class="cv-section">
                    <h2>${data.sections.education.title}</h2>
                    ${eduHtml}
                </div>
            </div>
            <div class="cv-footer">
                Generated from hussein-ahmed-604.github.io/my-resume
            </div>
        </div>
    `;
}

// ============================================
// GENERATE CV PDF
// ============================================
function generateCV(lang) {
    closeCvModal();

    const template = document.getElementById('cv-template');
    template.innerHTML = buildCvHtml(lang);
    template.classList.add('active');

    const element = template.querySelector('.cv-template-inner');

    // Wait for fonts and layout
    const waitFonts = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();

    waitFonts
        .then(() => new Promise(resolve => setTimeout(resolve, 400)))
        .then(() => {
            const options = {
                margin: 0,
                filename: `Hussein-Ahmed-CV-${lang.toUpperCase()}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    width: 794,
                    height: 1122,
                    windowWidth: 794,
                    windowHeight: 1122,
                    scrollX: 0,
                    scrollY: 0,
                    x: 0,
                    y: 0
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    compress: true
                },
                pagebreak: { mode: [] }
            };

            return html2pdf().set(options).from(element).save();
        })
        .then(() => {
            template.classList.remove('active');
            template.innerHTML = '';
        })
        .catch(err => {
            console.error('PDF generation error:', err);
            alert('خطأ: ' + (err && err.message ? err.message : err));
            template.classList.remove('active');
            template.innerHTML = '';
        });
}