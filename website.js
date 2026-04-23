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

  // Icon source: https://simpleicons.org — CDN returns a colored SVG per slug+hex.
  // `custom` is an inline fallback for non-brand concepts.
  const TERMINAL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>';
  const API_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  const SQL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>';
  const SCHEMA_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/></svg>';
  const MODEL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7 7.5 10.5 16.5"/><path d="M17 7.5 13.5 16.5"/><path d="M7 6h10"/></svg>';

  const SKILL_CATEGORIES = [
    {
      title: 'Frontend',
      color: 'cyan',
      skills: [
        { name: 'HTML5',      slug: 'html5',      color: 'E34F26' },
        { name: 'CSS',       slug: 'css',       color: '1572B6' },
        { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
        { name: 'React.js',   slug: 'react',      color: '61DAFB' },
        { name: 'jQuery',     slug: 'jquery',     color: '0769AD' },
      ],
    },
    {
      title: 'Backend',
      color: 'amber',
      skills: [
        { name: 'Node.js',    slug: 'nodedotjs', color: '339933' },
        { name: 'Express.js', slug: 'express',   color: 'ffffff' },
        { name: 'Python',     slug: 'python',    color: '3776AB' },
        { name: 'REST APIs',  custom: API_ICON,  tint: 'amber' },
        { name: 'GraphQL',    slug: 'graphql',   color: 'E10098' },
      ],
    },
    {
      title: 'Database',
      color: 'purple',
      skills: [
        { name: 'MySQL',         slug: 'mysql',   color: '4479A1' },
        { name: 'MongoDB',       slug: 'mongodb', color: '47A248' },
        { name: 'SQL Queries',   custom: SQL_ICON,    tint: 'purple' },
        { name: 'Schema Design', custom: SCHEMA_ICON, tint: 'purple' },
        { name: 'Data Modeling', custom: MODEL_ICON,  tint: 'purple' },
      ],
    },
    {
      title: 'Tools & DevOps',
      color: 'green',
      skills: [
        { name: 'Git & GitHub', slug: 'git',              color: 'F05032' },
        { name: 'VS Code',      slug: 'visualstudiocode', color: '007ACC' },
        { name: 'Postman',      slug: 'postman',          color: 'FF6C37' },
        { name: 'Linux / CLI',  custom: TERMINAL_ICON,    tint: 'green' },
        { name: 'XAMPP',        slug: 'xampp',            color: 'FB7A24' },
      ],
    },
  ];

  // ── Navbar ──

  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar__link');
  const navLinksContainer = document.querySelector('.navbar__links');
  const burger = document.querySelector('.navbar__burger');
  const NAV_SECTIONS = ['hero', 'about', 'experience', 'projects', 'case-studies', 'skills', 'education', 'blog', 'contact'];

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
  const skillPanel = document.querySelector('.skills__panel');
  const skillsDetail = document.querySelector('.skills__detail');
  let activeTab = 0;

  function renderSkillPanel(categoryIndex) {
    const category = SKILL_CATEGORIES[categoryIndex];
    const items = category.skills.map(function (skill, i) {
      const delay = (i * 60) + 'ms';
      const icon = skill.slug
        ? '<img class="skills__icon-img" src="https://cdn.simpleicons.org/' + skill.slug + '/' + skill.color + '" alt="" width="36" height="36" loading="lazy" decoding="async">'
        : '<span class="skills__icon-svg skills__icon-svg--' + (skill.tint || category.color) + '">' + skill.custom + '</span>';
      return (
        '<li class="skills__icon-item" style="--delay:' + delay + '">' +
          '<div class="skills__icon-wrap">' + icon + '</div>' +
          '<span class="skills__icon-name">' + skill.name + '</span>' +
        '</li>'
      );
    }).join('');
    skillPanel.setAttribute('data-active', String(categoryIndex));
    skillPanel.innerHTML = '<ul class="skills__icon-grid skills__icon-grid--' + category.color + '" role="list">' + items + '</ul>';
  }

  function activateTab(i) {
    if (i === activeTab) return;
    activeTab = i;
    skillTabs.forEach(function (t, idx) {
      const isActive = idx === i;
      t.classList.toggle('skills__tab--active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      t.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    if (skillsDetail) {
      skillsDetail.setAttribute('data-active-color', SKILL_CATEGORIES[i].color);
    }
    // Fade out, swap, fade in — keeps the panel feeling like one surface
    skillPanel.classList.add('skills__panel--leaving');
    window.setTimeout(function () {
      renderSkillPanel(i);
      skillPanel.classList.remove('skills__panel--leaving');
    }, 140);
  }

  // Hover = activate (desktop); click + keyboard still work everywhere.
  // Hover is cheap because we pre-render on activation, not on every mousemove.
  const prefersNoHover = window.matchMedia('(hover: none)').matches;

  skillTabs.forEach(function (tab, i) {
    tab.setAttribute('tabindex', i === 0 ? '0' : '-1');
    tab.addEventListener('click', function () { activateTab(i); });
    if (!prefersNoHover) {
      tab.addEventListener('mouseenter', function () { activateTab(i); });
      tab.addEventListener('focus', function () { activateTab(i); });
    }
    tab.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End') return;
      e.preventDefault();
      let next = i;
      if (e.key === 'ArrowRight') next = (i + 1) % skillTabs.length;
      else if (e.key === 'ArrowLeft') next = (i - 1 + skillTabs.length) % skillTabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = skillTabs.length - 1;
      skillTabs[next].focus();
      activateTab(next);
    });
  });

  // Initial render
  if (skillsDetail) {
    skillsDetail.setAttribute('data-active-color', SKILL_CATEGORIES[0].color);
  }
  renderSkillPanel(0);

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
