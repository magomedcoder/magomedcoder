window.addEventListener('load', function () {
    document.body.classList.remove('is-loading');
});

document.addEventListener('DOMContentLoaded', function () {
    const floatingElements = document.getElementById('floatingElements');
    const colors = ['#2563eb', '#3d2222', '#3b82f6', '#8c9821'];

    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';

        const size = Math.random() * 80 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;

        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.background = `linear-gradient(135deg, ${color}40, ${color}80)`;
        element.style.left = `${posX}%`;
        element.style.top = `${posY}%`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;

        floatingElements.appendChild(element);
    }

    const nameHighlight = document.querySelector('.name-highlight');
    nameHighlight.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    nameHighlight.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });

    const emailLink = document.querySelector('.email-link');
    emailLink.addEventListener('click', function (e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            const originalText = this.querySelector('.email-text').textContent;
            this.classList.add('copied');
            this.querySelector('.email-text').textContent = 'Скопировано!';

            setTimeout(() => {
                this.querySelector('.email-text').textContent = originalText;
                setTimeout(() => {
                    this.classList.remove('copied');
                }, 300);
            }, 2000);
        }).catch(() => {
            window.location.href = `mailto:${email}`;
        });
    });
});

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
    document.querySelectorAll('.floating-element').forEach(el => {
        el.style.animation = 'none';
    });

    document.querySelectorAll('.social-link i').forEach(icon => {
        icon.style.transition = 'none';
    });
}