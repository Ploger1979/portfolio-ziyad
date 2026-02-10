document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initMobileMenu();
    initScrollAnimations();
});

/* Theme Handling */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logoImg = document.querySelector('.logo img');

    // Logos
    const logoDark = 'images/logo-dark.png';
    const logoLight = 'images/logo-light.png';

    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // Apply saved theme
    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
        body.classList.add('light-mode');
        if (logoImg) logoImg.src = logoLight;
    } else {
        if (logoImg) logoImg.src = logoDark;
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        // Switch Logo
        if (logoImg) {
            logoImg.src = isLight ? logoLight : logoDark;
        }
    });
}

/* Mobile Menu */
function initMobileMenu() {
    const hamburger = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

/* Scroll Animations */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
}

/* Language Handling */
const translations = {
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            contact: "Contact Me"
        },
        hero: {
            greeting: "Hello, I'm",
            subtitle: "Fachinformatiker Systemintegration",
            description: "Motivated IT Specialist for System Integration. Experienced in network basics, AV systems, and troubleshooting. Based in Mainz-Kastel, Germany.",
            contact: "Contact Me"
        },
        about: {
            title: "About Me",
            p1: "I am a motivated IT Support Technician based in <strong>Mainz-Kastel, Germany</strong>. I have successfully completed my training as Fachinformatiker for System Integration at Qvest GmbH.",
            p2: "I have hands-on experience with network configuration (IP, DNS, VLAN), AV-over-IP systems, and troubleshooting. I speak <strong>German, English, French, and Arabic</strong> fluent/business level.",
            stats: {
                languages: "Languages Spoken",
                experience: "Years Experience"
            }
        },
        skills: {
            title: "Technical Skills",
            networking: "Networking",
            systems: "Systems / Admin",
            av: "AV Technology",
            languages: "Languages"
        },
        experience: {
            title: "Experience",
            ongoing: "2021 - 2024",
            past: "Past",
            r1: {
                title: "IT Support / System Integration",
                company: "Qvest GmbH - Ausbildung",
                desc: "<li>Installation and assembly of professional display systems.</li><li>Network configuration (IP, DHCP, DNS, VLAN basics).</li><li>Troubleshooting hardware and software issues.</li>"
            },
            r2: {
                title: "Call Center Agent",
                company: "Morocco",
                desc: "<li>Customer support and communication in multiple languages.</li>"
            }
        },
        objective: {
            title: "Profile Summary",
            text: "Seeking a full-time position as an IT System Integration Specialist to build and maintain reliable IT infrastructures. My goal is to deliver high-quality support and scalable system solutions within a professional team, ensuring seamless operations and efficient architecture."
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Let's connect.",
            desc: "Feel free to reach out via WhatsApp or LinkedIn.",
            form: { name: "Name", email: "Email", message: "Message", send: "Send Message" }
        },
        footer: { back: "Back to Top" }
    },
    de: {
        nav: {
            about: "Über mich",
            skills: "Fähigkeiten",
            experience: "Erfahrung",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Hallo, ich bin",
            subtitle: "Fachinformatiker Systemintegration",
            description: "Motivierter Fachinformatiker für Systemintegration. Erfahrung in Netzwerkgrundlagen, AV-Systemen und Fehlerbehebung. Ansässig in Mainz-Kastel, Deutschland.",
            contact: "Kontaktieren"
        },
        about: {
            title: "Über Mich",
            p1: "Ich bin ein motivierter IT-Support-Techniker aus <strong>Mainz-Kastel, Deutschland</strong>. Ich habe meine Ausbildung zum Fachinformatiker für Systemintegration bei der Qvest GmbH erfolgreich abgeschlossen.",
            p2: "Ich verfüge über praktische Erfahrung in der Netzwerkkonfiguration (IP, DNS, VLAN), AV-over-IP-Systemen und Troubleshooting. Ich spreche fließend <strong>Deutsch, Englisch, Französisch und Arabisch</strong>.",
            stats: {
                languages: "Gesprochene Sprachen",
                experience: "Jahre Erfahrung"
            }
        },
        skills: {
            title: "Technische Skills",
            networking: "Netzwerk",
            systems: "Systeme / Admin",
            av: "AV-Technik",
            languages: "Sprachen"
        },
        experience: {
            title: "Erfahrung",
            ongoing: "2021 - 2024",
            past: "Vergangenheit",
            r1: {
                title: "IT-Support / Systemintegration",
                company: "Qvest GmbH - Ausbildung",
                desc: "<li>Installation und Montage von professionellen Displaysystemen.</li><li>Netzwerkkonfiguration (IP, DHCP, DNS, VLAN-Grundlagen).</li><li>Fehlerbehebung bei Hard- und Softwareproblemen.</li>"
            },
            r2: {
                title: "Call Center Agent",
                company: "Marokko",
                desc: "<li>Kundensupport und Kommunikation in mehreren Sprachen.</li>"
            }
        },
        objective: {
            title: "Profil Zusammenfassung",
            text: "Ich suche eine Vollzeitstelle als Fachinformatiker für Systemintegration, um professionelle IT-Infrastrukturen zu betreuen und effiziente Systemlösungen zu implementieren. Mein Fokus liegt darauf, in einem dynamischen Team durch hochwertigen Support und saubere Administration einen reibungslosen IT-Betrieb sicherzustellen."
        },
        contact: {
            title: "Kontakt",
            subtitle: "Lassen Sie uns verbinden.",
            desc: "Kontaktieren Sie mich gerne über WhatsApp oder LinkedIn.",
            form: { name: "Name", email: "E-Mail", message: "Nachricht", send: "Nachricht Senden" }
        },
        footer: { back: "Nach Oben" }
    },
    ar: {
        nav: {
            about: "عني",
            skills: "مهاراتي",
            experience: "الخبرة",
            contact: "اتصل بي"
        },
        hero: {
            greeting: "مرحباً، أنا",
            subtitle: "أخصائي تكامل أنظمة (System Integration)",
            description: "متخصص في تكنولوجيا المعلومات ومجال تكامل الأنظمة. لدي خبرة في أساسيات الشبكات، وأنظمة الصوت والفيديو (AV)، واستكشاف الأخطاء وإصلاحها. مقيم في ماينز-كاستل، ألمانيا.",
            contact: "تواصل معي"
        },
        about: {
            title: "نبذة عني",
            p1: "أنا فني دعم تكنولوجيا معلومات مقيم في <strong>ماينز-كاستل، ألمانيا</strong>. أتممت بنجاح تدريبي المهني (Ausbildung) كأخصائي في تكامل الأنظمة في شركة Qvest GmbH.",
            p2: "لدي خبرة عملية في إعداد الشبكات (IP، DNS، VLAN)، وأنظمة AV-over-IP، وحل المشكلات التقنية. أتحدث <strong>الألمانية، الإنجليزية، الفرنسية، والعربية</strong> بطلاقة.",
            stats: {
                languages: "لغات",
                experience: "سنوات خبرة"
            }
        },
        skills: {
            title: "المهارات التقنية",
            networking: "الشبكات",
            systems: "الأنظمة والإدارة",
            av: "تكنولوجيا الصوت/الفيديو",
            languages: "اللغات"
        },
        experience: {
            title: "الخبرة العملية",
            ongoing: "2021 - 2024",
            past: "سابقاً",
            r1: {
                title: "دعم فني / تكامل أنظمة",
                company: "Qvest GmbH - تدريب مهني",
                desc: "<li>تثبيت وتجميع أنظمة العرض الاحترافية.</li><li>إعداد الشبكات (IP, DHCP, DNS, أساسيات VLAN).</li><li>استكشاف أخطاء الأجهزة والبرامج وإصلاحها.</li>"
            },
            r2: {
                title: "وكيل مركز اتصال",
                company: "المغرب",
                desc: "<li>دعم العملاء والتواصل بلغات متعددة.</li>"
            }
        },
        objective: {
            title: "ملخص الملف الشخصي",
            text: "أبحث عن وظيفة بدوام كامل كأخصائي تكامل أنظمة (Fachinformatiker Systemintegration)، للمساهمة في بناء وإدارة بنية تحتية تقنية قوية. هدفي هو تقديم حلول أنظمة فعالة ودعم فني عالي الجودة لضمان استقرار العمليات التقنية وكفاءتها."
        },
        contact: {
            title: "تواصل معي",
            subtitle: "دعنا نتواصل.",
            desc: "لا تتردد في التواصل عبر واتساب أو لينكد إن.",
            form: { name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة", send: "إرسال الرسالة" }
        },
        footer: { back: "العودة للأعلى" }
    },
    fr: {
        nav: {
            about: "À propos",
            skills: "Compétences",
            experience: "Expérience",
            contact: "Contact"
        },
        hero: {
            greeting: "Bonjour, je suis",
            subtitle: "Fachinformatiker Systemintegration",
            description: "Spécialiste informatique motivé en intégration de systèmes. Expérience dans les bases de réseau, les systèmes AV et le dépannage. Basé à Mayence-Kastel, Allemagne.",
            contact: "Contactez-moi"
        },
        about: {
            title: "À propos de moi",
            p1: "Je suis un technicien de support informatique motivé basé à <strong>Mayence-Kastel, Allemagne</strong>. J'ai terminé avec succès ma formation de Fachinformatiker pour l'intégration de systèmes chez Qvest GmbH.",
            p2: "J'ai une expérience pratique de la configuration réseau (IP, DNS, VLAN), des systèmes AV sur IP et du dépannage. Je parle couramment <strong>l'allemand, l'anglais, le français et l'arabe</strong>.",
            stats: {
                languages: "Langues parlées",
                experience: "Années d'expérience"
            }
        },
        skills: {
            title: "Compétences Techniques",
            networking: "Réseaux",
            systems: "Systèmes / Admin",
            av: "Technologie AV",
            languages: "Langues"
        },
        experience: {
            title: "Expérience",
            ongoing: "2021 - 2024",
            past: "Passé",
            r1: {
                title: "Support IT / Intégration Système",
                company: "Qvest GmbH - Formation",
                desc: "<li>Installation et montage de systèmes d'affichage professionnels.</li><li>Configuration réseau (IP, DHCP, DNS, bases VLAN).</li><li>Dépannage matériel et logiciel.</li>"
            },
            r2: {
                title: "Agent de Centre d'Appel",
                company: "Maroc",
                desc: "<li>Support client et communication en plusieurs langues.</li>"
            }
        },
        objective: {
            title: "Résumé du Profil",
            text: "Je recherche un poste à temps plein en tant que spécialiste en intégration de systèmes pour mettre en œuvre des infrastructures IT fiables et performantes. Mon objectif est de fournir un support de qualité et d'assurer une administration système efficace au sein d'une équipe professionnelle."
        },
        contact: {
            title: "Contact",
            subtitle: "Connectons-nous.",
            desc: "N'hésitez pas à me contacter via WhatsApp ou LinkedIn.",
            form: { name: "Nom", email: "Email", message: "Message", send: "Envoyer" }
        },
        footer: { back: "Haut de page" }
    }
};

function initLanguage() {
    const selector = document.getElementById('language-selector');
    const savedLang = localStorage.getItem('lang') || 'de'; // Default to DE

    // Set initial value
    selector.value = savedLang;
    setLanguage(savedLang);

    // Listen for changes
    selector.addEventListener('change', (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    });
}

function setLanguage(lang) {
    const data = translations[lang];
    if (!data) return;

    // Handle RTL
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = lang;
    }

    // Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');

        let value = data;
        keys.forEach(k => {
            if (value) value = value[k];
        });

        if (value) {
            // Check if element contains HTML tags (like strong or li)
            if (el.tagName === 'UL' || key.includes('p1') || key.includes('p2') || key.includes('text')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        }
    });
}
