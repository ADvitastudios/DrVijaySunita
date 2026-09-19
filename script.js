/* ==========================================================================
   46th Marriage Anniversary — Interactive Script
   Dr. Vijay Aggarwal & Dr. Sunita Aggarwal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initMobileNav();
    initScrollAnimations();
    initMilestoneCounters();
    initAudioSynth();
});

/* --------------------------------------------------------------------------
   1. Floating Rose Petals & Golden Sparkles Canvas
   -------------------------------------------------------------------------- */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            color: Math.random() > 0.5 ? 'rgba(212, 175, 55, ' : 'rgba(122, 28, 44, ',
            alpha: Math.random() * 0.5 + 0.2,
            vx: Math.random() * 0.8 - 0.4,
            vy: Math.random() * 1 + 0.3,
            rotation: Math.random() * Math.PI * 2,
            vr: Math.random() * 0.02 - 0.01
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.vr;

            if (p.y > height) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            if (p.x > width) p.x = 0;
            if (p.x < 0) p.x = width;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.beginPath();
            
            // Draw soft petal / sparkle shapes
            ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
            ctx.fill();
            ctx.restore();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* --------------------------------------------------------------------------
   2. Mobile Menu Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileBtn.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('open');
            });
        });
    }

    // Header scroll background change
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --------------------------------------------------------------------------
   3. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

/* --------------------------------------------------------------------------
   4. Milestone Counter Calculation
   -------------------------------------------------------------------------- */
function initMilestoneCounters() {
    const startDate = new Date('1983-09-19T00:00:00');
    const now = new Date();
    
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const daysEl = document.getElementById('daysCount');
    if (daysEl) {
        daysEl.textContent = diffDays.toLocaleString();
    }
}

/* --------------------------------------------------------------------------
   5. Gallery Lightbox Functions
   -------------------------------------------------------------------------- */
function openLightbox(title, desc, imgSrc) {
    const modal = document.getElementById('lightboxModal');
    const titleEl = document.getElementById('lightboxTitle');
    const descEl = document.getElementById('lightboxDesc');
    const imgEl = document.getElementById('lightboxImg');

    if (modal && titleEl && descEl) {
        titleEl.textContent = title;
        descEl.textContent = desc;
        if (imgEl) {
            if (imgSrc) {
                imgEl.src = imgSrc;
                imgEl.style.display = 'block';
            } else {
                imgEl.style.display = 'none';
            }
        }
        modal.classList.add('active');
    }
}

function closeLightbox(e) {
    if (e.target.id === 'lightboxModal') {
        closeLightboxDirect();
    }
}

function closeLightboxDirect() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.remove('active');
}

/* --------------------------------------------------------------------------
   6. Web Audio Ambient Synthesizer (Classical Melody)
   -------------------------------------------------------------------------- */
function initAudioSynth() {
    const musicBtn = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = musicBtn ? musicBtn.querySelector('.music-text') : null;

    let audioCtx = null;
    let isPlaying = false;
    let synthInterval = null;

    if (!musicBtn) return;

    // Gentle classical arpeggio notes (Pentatonic F Major / D Minor)
    const notes = [261.63, 329.63, 392.00, 440.00, 523.25, 659.25, 783.99];

    function playNote(freq) {
        if (!audioCtx) return;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 2.6);
    }

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }

            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            let index = 0;
            playNote(notes[0]);

            synthInterval = setInterval(() => {
                index = (index + 1) % notes.length;
                playNote(notes[index]);
            }, 600);

            isPlaying = true;
            musicBtn.classList.add('playing');
            if (musicText) musicText.textContent = 'Pause Music';
            if (musicIcon) musicIcon.textContent = '🎶';
        } else {
            clearInterval(synthInterval);
            isPlaying = false;
            musicBtn.classList.remove('playing');
            if (musicText) musicText.textContent = 'Play Music';
            if (musicIcon) musicIcon.textContent = '🎵';
        }
    });
}
