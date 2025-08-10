document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle with persistence
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getCurrent = () => root.getAttribute('data-bs-theme') || 'light';
  const setTheme = (t) => { root.setAttribute('data-bs-theme', t); localStorage.setItem('theme', t); };
  if (storedTheme) setTheme(storedTheme); else if (prefersDark) setTheme('dark');
  if (themeToggle) themeToggle.addEventListener('click', () => setTheme(getCurrent() === 'light' ? 'dark' : 'light'));

  // ToTop button visibility
  const toTop = document.getElementById('toTop');
  const onScroll = () => {
    if (!toTop) return;
    if (window.scrollY > 240) toTop.classList.add('show'); else toTop.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Smooth internal nav for browsers not respecting CSS smooth (fallback)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      try {
        if (id && id.length > 1) {
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, '', id);
          }
        }
      } catch {}
    });
  });

  // Contact form (demo-only)
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      const email = data.get('email');
      const message = data.get('message');
      if (statusEl) { statusEl.textContent = 'Enviando…'; }
      // Simulación de envío. Para producción, integrar con un backend o servicio (Formspree, Netlify Forms, etc.).
      await new Promise(r => setTimeout(r, 600));
      if (statusEl) { statusEl.textContent = '¡Mensaje enviado! Te responderé pronto.'; }
      // Opcional: abrir mailto como fallback
      const subject = encodeURIComponent('Contacto desde portafolio');
      const body = encodeURIComponent(`Hola, soy ${name} (%3C${email}%3E).\n\n${message}`);
      window.open(`mailto:tu.email@dominio.com?subject=${subject}&body=${body}`, '_blank');
      form.reset();
    });
  }
});
