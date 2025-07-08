// Fonction pour changer le thème
document.addEventListener('DOMContentLoaded', () => {
    // Gestion du thème
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Vérifier le thème préféré du navigateur
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }

    // Écouter les changements de préférence de thème
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });

    // Changer le thème au clic
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        const themeIcon = themeToggle.querySelector('i');
        
        // Changer l'icône selon le thème
        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        // Ajouter la classe active pour l'animation
        themeToggle.classList.add('active');
        
        // Changer le thème
        body.setAttribute('data-theme', newTheme);
        
        // Retirer la classe active après l'animation
        setTimeout(() => {
            themeToggle.classList.remove('active');
        }, 300);
    });

    // Initialiser l'icône selon le thème par défaut
    const currentTheme = body.getAttribute('data-theme');
    const themeIcon = themeToggle.querySelector('i');
    if (currentTheme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Gestion du menu mobile
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-card, .project-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Ajouter les styles d'animation
    document.querySelectorAll('.skill-card, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    // Écouter le scroll
    window.addEventListener('scroll', animateOnScroll);
    // Appeler une fois au chargement
    animateOnScroll();

    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Ici vous pouvez ajouter la logique pour envoyer le formulaire
            // Pour l'instant, on affiche juste un message de succès
            alert('Message envoyé avec succès !');
            contactForm.reset();
        });
    }
});
