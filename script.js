// Translation system
let currentLanguage = 'ru';
    
    const translations = {
        ru: {
            'nav.support': 'Поддержка',
        'nav.faq': 'FAQ',
        'nav.agreement': 'Соглашение',
        'nav.login': 'Войти',
        'nav.try': 'Попробовать',
        'hero.badge': 'Профессиональные игровые решения',
        'hero.title.line1': 'Незаметное преимущество',
        'hero.title.line2': 'в играх',
        'hero.description': 'Наши читы полностью не детектируются и оптимизированы для лучшего игрового опыта. Профессиональные инструменты с максимальной безопасностью и производительностью.',
        'hero.start': 'Начать сейчас',
        'hero.demo': 'Смотреть демо',
        'security.badge': 'Безопасность',
        'security.title.line1': 'Надежная безопасность',
        'security.title.line2': 'на всех платформах',
        'security.description': 'Надежная многослойная защита для безопасности игрового процесса',
        'security.stats.users': 'Активных пользователей',
        'security.stats.detection': 'Процент обнаружения',
        'security.stats.support': 'Поддержка доступна',
        'security.stats.guarantee': 'Гарантия безопасности',
        'features.badge': 'Возможности',
        'features.title.line1': 'Продвинутые игровые',
        'features.title.line2': 'технологии',
        'features.description': 'Профессиональные игровые технологии для максимального преимущества',
        'features.ai.title': 'Умные алгоритмы',
        'features.ai.description': 'ИИ-системы для адаптивного геймплея',
        'features.integration.title': 'Интеграция игр',
        'features.integration.description': 'Поддержка всех популярных игр',
        'features.automation.title': 'Автоматизация',
        'features.automation.description': 'Автоматические настройки и обновления',
        'products.badge': 'Продукты',
        'products.title.line1': 'Проверено командами,',
        'products.title.line2': 'любимо игроками',
        'products.description': 'Команды и игроки по всему миру доверяют нашим решениям',
        'products.badge.popular': 'Самый популярный',
        'products.status.undetected': 'Необнаружен',
        'products.status.updating': 'Обновляется',
        'products.status.development': 'В разработке',
        'products.cs2.title': 'Counter-Strike 2',
        'products.cs2.description': 'Профессиональный аимбот и ESP с расширенными функциями',
        'referral.badge': 'Партнерская программа',
        'referral.title.line1': 'Зарабатывайте с нами',
        'referral.title.line2': 'до 20% с каждого клиента',
        'referral.description': 'Приглашайте друзей и получайте стабильный пассивный доход от каждой покупки',
        'referral.button.partner': 'Стать партнером',
        'referral.button.learn': 'Узнать больше',
        'referral.stats.basic': 'Базовая комиссия',
        'referral.stats.exclusive': 'Эксклюзивным партнерам',
        'referral.stats.lifetime': 'Пожизненные выплаты',
        'referral.partnership.title': 'Эксклюзивное партнерство',
        'referral.partnership.badge': 'VIP',
        'referral.benefits.commission': 'Увеличенная комиссия до 20%',
        'referral.benefits.support': 'Приоритетная техподдержка',
        'referral.benefits.manager': 'Персональный менеджер',
        'referral.benefits.promo': 'Эксклюзивные промокоды',
        'referral.benefits.materials': 'Маркетинговые материалы',
        'referral.benefits.analytics': 'Детальная аналитика',
        'referral.stats.income': 'Средний доход в месяц',
        'faq.badge': 'Вопросы',
        'faq.title.line1': 'Часто задаваемые',
        'faq.title.line2': 'вопросы',
        'faq.description': 'Найдите ответы на популярные вопросы о наших продуктах',
        'cta.title.line1': 'Готовы доминировать',
        'cta.title.line2': 'над конкурентами?',
        'cta.description': 'Присоединяйтесь к сообществу профессиональных игроков и получите доступ к лучшим инструментам',
        'modal.title': 'Эксклюзивное партнерство',
        'modal.contact': 'Связаться с нами'
        },
        en: {
            'nav.support': 'Support',
        'nav.faq': 'FAQ',
        'nav.agreement': 'Agreement',
        'nav.login': 'Login',
        'nav.try': 'Try Now',
        'hero.badge': 'Professional Gaming Solutions',
        'hero.title.line1': 'Undetected Gaming',
        'hero.title.line2': 'Advantage',
        'hero.description': 'Our cheats are completely undetected and optimized for the best gaming experience. Professional tools with maximum security and performance.',
        'hero.start': 'Get Started',
        'hero.demo': 'Watch Demo',
        'security.badge': 'Security',
        'security.title.line1': 'Effortless Security',
        'security.title.line2': 'Across All Platforms',
        'security.description': 'Reliable multi-layer protection for secure gaming experience',
        'security.stats.users': 'Active Users',
        'security.stats.detection': 'Detection Rate',
        'security.stats.support': 'Support Available',
        'security.stats.guarantee': 'Security Guaranteed',
        'features.badge': 'Features',
        'features.title.line1': 'Advanced Gaming',
        'features.title.line2': 'Technologies',
        'features.description': 'Professional gaming technologies for maximum advantage',
        'features.ai.title': 'Smart Algorithms',
        'features.ai.description': 'AI systems for adaptive gameplay',
        'features.integration.title': 'Game Integration',
        'features.integration.description': 'Support for all popular games',
        'features.automation.title': 'Automation',
        'features.automation.description': 'Automatic settings and updates',
        'products.badge': 'Products',
        'products.title.line1': 'Trusted by Teams,',
        'products.title.line2': 'Loved by Users',
        'products.description': 'Teams and players worldwide trust our solutions',
        'products.badge.popular': 'Most Popular',
        'products.status.undetected': 'Undetected',
        'products.status.updating': 'Updating',
        'products.status.development': 'In Development',
        'products.cs2.title': 'Counter-Strike 2',
        'products.cs2.description': 'Professional aimbot & ESP with advanced features',
        'referral.badge': 'Referral Program',
        'referral.title.line1': 'Earn with us',
        'referral.title.line2': 'up to 20% per client',
        'referral.description': 'Invite friends and get stable passive income from every purchase',
        'referral.button.partner': 'Become Partner',
        'referral.button.learn': 'Learn More',
        'referral.stats.basic': 'Basic Commission',
        'referral.stats.exclusive': 'Exclusive Partners',
        'referral.stats.lifetime': 'Lifetime Payouts',
        'referral.partnership.title': 'Exclusive Partnership',
        'referral.partnership.badge': 'VIP',
        'referral.benefits.commission': 'Increased commission up to 20%',
        'referral.benefits.support': 'Priority tech support',
        'referral.benefits.manager': 'Personal manager',
        'referral.benefits.promo': 'Exclusive promo codes',
        'referral.benefits.materials': 'Marketing materials',
        'referral.benefits.analytics': 'Detailed analytics',
        'referral.stats.income': 'Average monthly income',
        'faq.badge': 'FAQ',
        'faq.title.line1': 'Frequently Asked',
        'faq.title.line2': 'Questions',
        'faq.description': 'Find answers to popular questions about our products',
        'cta.title.line1': 'Ready to Dominate',
        'cta.title.line2': 'Your Competition?',
        'cta.description': 'Join the community of professional players and get access to the best tools',
        'modal.title': 'Exclusive Partnership',
        'modal.contact': 'Contact Us'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeFAQ();
    initializeModal();
    updateTranslations();
});

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
}

function initializeModal() {
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('partnershipModal');
        if (event.target === modal) {
            closePartnershipModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePartnershipModal();
        }
    });
}

function openPartnershipModal() {
    const modal = document.getElementById('partnershipModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePartnershipModal() {
    const modal = document.getElementById('partnershipModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}
