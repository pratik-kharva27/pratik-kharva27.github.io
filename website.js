/* ═══════════════════════════════════════════════
   DIGITAL FORGE — Portfolio JavaScript
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Data ──

  const GITHUB_URL = 'https://github.com/pratik-kharva27';

  const PROJECTS = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'Full-stack employee management platform with role-based access control, authentication, and complete CRUD for employees, departments, and attendance.',
      tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
      category: 'Full Stack',
      color: '--cyan',
      liveUrl: '#',
      codeUrl: GITHUB_URL,
    },
    {
      id: 2,
      title: 'Shopify Partner Chrome Extension',
      description: 'Chrome extension and admin panel for managing Shopify Partner apps and stores — real-time webhook processing, audit logging, and secure session handling.',
      tech: ['React.js', 'Node.js', 'GraphQL', 'MySQL'],
      category: 'Full Stack',
      color: '--amber',
      liveUrl: '#',
      codeUrl: GITHUB_URL,
    },
    {
      id: 3,
      title: 'College Management System',
      description: 'Web application for college administration with intuitive UI and complete CRUD for student and staff modules — attendance, grades, and course scheduling.',
      tech: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
      category: 'Frontend',
      color: '--purple',
      liveUrl: '#',
      codeUrl: GITHUB_URL,
    },
    {
      id: 4,
      title: 'Login Authentication System',
      description: 'Secure Python-based authentication service with email/password login, server-side input validation, and hashed credential storage.',
      tech: ['Python', 'Flask', 'SQLite'],
      category: 'Backend',
      color: '--cyan',
      liveUrl: '#',
      codeUrl: GITHUB_URL,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'This very site — a responsive personal portfolio featuring a 3D parallax profile card, animated tech cloud, and a multi-section developer showcase.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
      category: 'Frontend',
      color: '--amber',
      liveUrl: './website.html',
      codeUrl: GITHUB_URL,
    },
    {
      id: 6,
      title: 'Webhook Processing Service',
      description: 'Backend service that ingests Shopify webhooks in real time, persists audit logs, and dispatches downstream events for monitoring and security.',
      tech: ['Node.js', 'Express', 'MySQL', 'GraphQL'],
      category: 'Backend',
      color: '--purple',
      liveUrl: '#',
      codeUrl: GITHUB_URL,
    },
  ];

  const SKILL_CATEGORIES = [
    {
      title: 'Frontend',
      iconClass: 'skills__3d-icon--cyan',
      iconSvg: '<svg viewBox="0 0 48 48" class="skills__3d-icon skills__3d-icon--cyan"><rect x="4" y="4" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 18l-6 6 6 6M32 18l6 6-6 6M22 34l4-20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      skills: [
        { name: 'HTML5', level: 92 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 82 },
        { name: 'jQuery', level: 80 },
      ],
    },
    {
      title: 'Backend',
      iconClass: 'skills__3d-icon--amber',
      iconSvg: '<svg viewBox="0 0 48 48" class="skills__3d-icon skills__3d-icon--amber"><path d="M24 4l18 10v20L24 44 6 34V14z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M24 4v20m0 0l18-10m-18 10L6 14" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 72 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Database',
      iconClass: 'skills__3d-icon--purple',
      iconSvg: '<svg viewBox="0 0 48 48" class="skills__3d-icon skills__3d-icon--purple"><ellipse cx="24" cy="12" rx="16" ry="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 24c0 3.3 7.2 6 16 6s16-2.7 16-6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL Queries', level: 82 },
        { name: 'Schema Design', level: 78 },
        { name: 'Data Modeling', level: 75 },
      ],
    },
    {
      title: 'Tools & DevOps',
      iconClass: 'skills__3d-icon--green',
      iconSvg: '<svg viewBox="0 0 48 48" class="skills__3d-icon skills__3d-icon--green"><circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M24 4v8M24 36v8M4 24h8M36 24h8M9.9 9.9l5.6 5.6M32.5 32.5l5.6 5.6M9.9 38.1l5.6-5.6M32.5 15.5l5.6-5.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 92 },
        { name: 'Postman', level: 85 },
        { name: 'Linux / CLI', level: 72 },
        { name: 'XAMPP', level: 80 },
      ],
    },
  ];

  // ── Navbar ──

  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar__link');
  const navLinksContainer = document.querySelector('.navbar__links');
  const burger = document.querySelector('.navbar__burger');
  const NAV_SECTIONS = ['hero', 'about', 'projects', 'case-studies', 'skills', 'blog', 'faq', 'contact'];

  function updateNavbar() {
    // Scrolled state
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Active section
    for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(NAV_SECTIONS[i]);
      if (el && el.getBoundingClientRect().top <= 150) {
        navLinks.forEach(link => {
          link.classList.remove('navbar__link--active');
          if (link.getAttribute('href') === '#' + NAV_SECTIONS[i]) {
            link.classList.add('navbar__link--active');
          }
        });
        break;
      }
    }
  }

  // Smooth scroll for all nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu
        navLinksContainer.classList.remove('navbar__links--open');
        burger.classList.remove('navbar__burger--open');
      }
    });
  });

  // Burger toggle
  burger.addEventListener('click', function () {
    burger.classList.toggle('navbar__burger--open');
    navLinksContainer.classList.toggle('navbar__links--open');
  });

  // ── Scroll Reveal ──

  function handleReveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;
    reveals.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  // ── Projects Filter ──

  const projectsGrid = document.querySelector('.projects__grid');
  const filterButtons = document.querySelectorAll('.projects__filter');
  let activeFilter = 'All';

  function renderProjects(filter) {
    const filtered = filter === 'All'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);

    const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
    const linkAttrs = (url) => {
      const safe = escape(url);
      const isExternal = /^https?:\/\//i.test(url);
      return isExternal
        ? 'href="' + safe + '" target="_blank" rel="noopener noreferrer"'
        : 'href="' + safe + '"';
    };

    projectsGrid.innerHTML = filtered.map((project, i) => {
      const delayClass = 'reveal-delay-' + Math.min(i + 1, 5);
      const titleId = 'project-' + project.id + '-title';
      const techTags = project.tech.map(t =>
        '<li class="projects__card-tag">' + escape(t) + '</li>'
      ).join('');

      return (
        '<article class="projects__card reveal ' + delayClass + '" aria-labelledby="' + titleId + '">' +
          '<div class="projects__card-content">' +
            '<div class="projects__card-top">' +
              '<span class="projects__card-category" style="color: var(' + project.color + ')">' +
                escape(project.category) +
              '</span>' +
              '<div class="projects__card-links">' +
                '<a ' + linkAttrs(project.codeUrl) + ' class="projects__card-link" aria-label="View source code for ' + escape(project.title) + '">' +
                  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
                    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>' +
                  '</svg>' +
                '</a>' +
                '<a ' + linkAttrs(project.liveUrl) + ' class="projects__card-link" aria-label="View live demo of ' + escape(project.title) + '">' +
                  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
                    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>' +
                  '</svg>' +
                '</a>' +
              '</div>' +
            '</div>' +
            '<h3 class="projects__card-title" id="' + titleId + '">' + escape(project.title) + '</h3>' +
            '<p class="projects__card-desc">' + escape(project.description) + '</p>' +
            '<ul class="projects__card-tech" aria-label="Technologies used">' + techTags + '</ul>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    // Re-trigger reveal for new cards
    handleReveal();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.textContent.trim();
      activeFilter = filter;
      filterButtons.forEach(b => b.classList.remove('projects__filter--active'));
      this.classList.add('projects__filter--active');
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('All');

  // ── Skills Tabs ──

  const skillTabs = document.querySelectorAll('.skills__tab');
  const barsWrap = document.querySelector('.skills__bars-wrap');
  let activeTab = 0;
  let barsVisible = false;

  function renderSkillBars(categoryIndex) {
    const category = SKILL_CATEGORIES[categoryIndex];
    barsWrap.innerHTML = category.skills.map((skill, i) => {
      const delay = (i * 0.1) + 's';
      const width = barsVisible ? skill.level + '%' : '0%';
      return (
        '<div class="skills__bar-item" style="--delay: ' + delay + '">' +
          '<div class="skills__bar-header">' +
            '<span class="skills__bar-name">' + skill.name + '</span>' +
            '<span class="skills__bar-pct">' + skill.level + '%</span>' +
          '</div>' +
          '<div class="skills__bar-track">' +
            '<div class="skills__bar-fill" style="width: ' + width + '; --delay: ' + delay + '"></div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  skillTabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      activeTab = i;
      skillTabs.forEach(t => t.classList.remove('skills__tab--active'));
      this.classList.add('skills__tab--active');
      renderSkillBars(i);
    });
  });

  // Initial render
  renderSkillBars(0);

  // IntersectionObserver for skill bars
  const skillsDetail = document.querySelector('.skills__detail');
  if (skillsDetail) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          barsVisible = true;
          // Animate existing bars
          var fills = barsWrap.querySelectorAll('.skills__bar-fill');
          var items = SKILL_CATEGORIES[activeTab].skills;
          fills.forEach(function (fill, idx) {
            if (items[idx]) {
              fill.style.width = items[idx].level + '%';
            }
          });
        }
      });
    }, { threshold: 0.3 });
    observer.observe(skillsDetail);
  }

  // ── Contact Form ──

  const contactForm = document.getElementById('contactForm');
  const contactFields = document.querySelectorAll('.contact__field');
  const submitBtn = contactForm.querySelector('.contact__submit');
  const submitBtnDefault = '<span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
  const submitBtnSending = '<span class="contact__spinner"></span><span>Sending...</span>';

  // Focus/blur for field styling
  contactFields.forEach(function (field) {
    var input = field.querySelector('.contact__input');
    if (input) {
      input.addEventListener('focus', function () {
        field.classList.add('contact__field--focused');
      });
      input.addEventListener('blur', function () {
        field.classList.remove('contact__field--focused');
        if (input.value) {
          field.classList.add('contact__field--filled');
        } else {
          field.classList.remove('contact__field--filled');
        }
      });
    }
  });

  const CONTACT_EMAIL = 'pratikkharva01@gmail.com';

  function openMailtoFallback(name, email, subject, message) {
    const body =
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n\n' +
      message;
    const href =
      'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject || 'Portfolio contact') +
      '&body=' + encodeURIComponent(body);
    window.location.href = href;
  }

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Remove old status
    var oldStatus = contactForm.querySelector('.contact__status');
    if (oldStatus) oldStatus.remove();

    submitBtn.innerHTML = submitBtnSending;
    submitBtn.disabled = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error('api-failed');

      contactForm.reset();
      contactFields.forEach(f => {
        f.classList.remove('contact__field--filled');
        f.classList.remove('contact__field--focused');
      });
      showStatus('success', "Message sent successfully! I'll get back to you soon.");
    } catch (err) {
      // No backend configured — hand off to the user's mail client.
      showStatus('info', 'Opening your email app to send this message directly…');
      openMailtoFallback(name, email, subject, message);
    }

    submitBtn.innerHTML = submitBtnDefault;
    submitBtn.disabled = false;
  });

  function showStatus(type, message) {
    var oldStatus = contactForm.querySelector('.contact__status');
    if (oldStatus) oldStatus.remove();

    var div = document.createElement('div');
    div.className = 'contact__status contact__status--' + type;
    div.textContent = message;
    contactForm.querySelector('.contact__form-body').appendChild(div);

    setTimeout(function () {
      if (div.parentNode) div.remove();
    }, 5000);
  }

  // ── Footer Year ──
  var yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Scroll Listeners ──

  window.addEventListener('scroll', function () {
    updateNavbar();
    handleReveal();
  }, { passive: true });

  // Initial calls
  handleReveal();
  updateNavbar();

})();
