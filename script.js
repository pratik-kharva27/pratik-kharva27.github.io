/* =============================================
   SPARROW — PORTFOLIO CARD · JavaScript
   ============================================= */

;(function () {
  'use strict'

  const wrapper   = document.getElementById('cardWrapper')
  const card      = document.getElementById('card')
  const highlight = document.getElementById('cardHighlight')
  const canvas    = document.getElementById('particles')
  const themeBtn  = document.getElementById('themeToggle')
  const ctx       = canvas.getContext('2d')

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isCoarse      = window.matchMedia('(pointer: coarse)').matches
  const isMobile      = isCoarse || 'ontouchstart' in window
  const isNarrow      = window.matchMedia('(max-width: 480px)').matches
  const saveData      = (navigator.connection && navigator.connection.saveData) || false
  const lowPower      = isNarrow || saveData

  // Shared mouse position (used by parallax + particles)
  let mx = window.innerWidth / 2
  let my = window.innerHeight / 2

  /* ────────────────────────────────────────────
     1. MOUSE TRACKING (parallax + particles)
     ──────────────────────────────────────────── */
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
  })

  document.addEventListener('touchstart', (e) => {
    const t = e.touches[0]
    mx = t.clientX
    my = t.clientY
  }, { passive: true })

  document.addEventListener('touchmove', (e) => {
    const t = e.touches[0]
    mx = t.clientX
    my = t.clientY
  }, { passive: true })

  /* ────────────────────────────────────────────
     2. 3D PARALLAX TILT + SPECULAR HIGHLIGHT
     ──────────────────────────────────────────── */
  const MAX_TILT   = 14   // degrees
  const LERP_SPEED = 0.08 // smoothing factor

  let currentRx = 0
  let currentRy = 0
  let targetRx  = 0
  let targetRy  = 0
  let hlX = 50, hlY = 0    // highlight position (%)
  let isHovering = false
  let tiltRAF = null

  function lerp (a, b, t) { return a + (b - a) * t }

  function isLightTheme () {
    return document.documentElement.getAttribute('data-theme') === 'light'
  }

  function updateTilt () {
    currentRx = lerp(currentRx, targetRx, LERP_SPEED)
    currentRy = lerp(currentRy, targetRy, LERP_SPEED)

    wrapper.style.transform =
      `rotateX(${currentRx.toFixed(2)}deg) rotateY(${currentRy.toFixed(2)}deg)`

    // Move specular highlight to follow the "light source" (cursor)
    const hlColor = isLightTheme()
      ? 'rgba(255,255,255,0.35)'
      : 'rgba(255,255,255,0.09)'
    highlight.style.background =
      `radial-gradient(ellipse 300px 200px at ${hlX.toFixed(1)}% ${hlY.toFixed(1)}%, ${hlColor}, transparent)`

    // Keep animating while values haven't settled
    if (Math.abs(currentRx - targetRx) > 0.01 || Math.abs(currentRy - targetRy) > 0.01) {
      tiltRAF = requestAnimationFrame(updateTilt)
    } else {
      tiltRAF = null
    }
  }

  function startTiltLoop () {
    if (!tiltRAF) tiltRAF = requestAnimationFrame(updateTilt)
  }

  if (!reducedMotion && !isMobile) {
    card.addEventListener('mouseenter', () => {
      isHovering = true
      wrapper.style.transition = 'none'
    })

    card.addEventListener('mousemove', (e) => {
      if (!isHovering) return
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const px = (e.clientX - cx) / (rect.width / 2)   // -1 to 1
      const py = (e.clientY - cy) / (rect.height / 2)   // -1 to 1

      targetRy =  px * MAX_TILT
      targetRx = -py * MAX_TILT

      // Highlight follows cursor position within card
      hlX = ((e.clientX - rect.left) / rect.width) * 100
      hlY = ((e.clientY - rect.top) / rect.height) * 100

      startTiltLoop()
    })

    card.addEventListener('mouseleave', () => {
      isHovering = false
      targetRx = 0
      targetRy = 0
      hlX = 50
      hlY = 0
      wrapper.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      startTiltLoop()
    })
  }

  /* ────────────────────────────────────
     3. ANIMATED COUNTERS
     ──────────────────────────────────── */
  document.querySelectorAll('[data-target]').forEach((el) => {
    const target = parseInt(el.dataset.target, 10)
    const duration = 1800
    let started = false

    function start () {
      if (started) return
      started = true

      if (reducedMotion) { el.textContent = target; return }

      const t0 = performance.now()
      function tick (now) {
        const p = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.round(eased * target)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    setTimeout(start, 1300)
  })

  /* ────────────────────────────────────
     4. PARTICLE BACKGROUND
     ──────────────────────────────────── */
  let particles = []
  const COUNT = lowPower ? 0 : (isMobile ? 26 : 60)

  function resize () {
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
  }

  function initParticles () {
    particles = []
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.4,
        o: Math.random() * 0.4 + 0.1
      })
    }
  }

  function draw () {
    if (reducedMotion || !particles.length) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const light = document.documentElement.getAttribute('data-theme') === 'light'
    const dotColor  = light ? '120, 95, 50'  : '220, 195, 150'
    const lineColor = light ? '130, 110, 70' : '165, 150, 115'

    // Draw connections (batched)
    ctx.lineWidth = 0.5
    ctx.strokeStyle = `rgba(${lineColor}, 0.06)`
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x, dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.globalAlpha = 0.6 * (1 - dist / 120)
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }
    ctx.globalAlpha = 1

    // Update + draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      const dx = mx - p.x, dy = my - p.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < 280) { p.vx += dx * 0.00002; p.vy += dy * 0.00002 }

      p.x += p.vx; p.y += p.vy
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${dotColor}, ${p.o})`
      ctx.fill()
    }

    requestAnimationFrame(draw)
  }

  /* ────────────────────────────────────
     5. FLOATING TECH CLOUD
     ──────────────────────────────────── */
  const techCloud = document.getElementById('techCloud')
  const techItems = [
    { name: 'JavaScript', type: 'lang' },
    { name: 'TypeScript', type: 'lang' },
    { name: 'Python',     type: 'lang' },
    { name: 'React',      type: 'lang' },
    { name: 'Node.js',    type: 'lang' },
    { name: 'HTML5',      type: 'lang' },
    { name: 'CSS3',       type: 'lang' },
    { name: 'PHP',        type: 'lang' },
    { name: 'Vue.js',     type: 'lang' },
    { name: 'Next.js',    type: 'lang' },
    { name: 'Express',    type: 'lang' },
    { name: 'Java',       type: 'lang' },
    { name: 'MongoDB',    type: 'db'   },
    { name: 'MySQL',      type: 'db'   },
    { name: 'PostgreSQL', type: 'db'   },
    { name: 'Redis',      type: 'db'   },
    { name: 'Firebase',   type: 'db'   },
    { name: 'Supabase',   type: 'db'   },
    { name: 'Git',        type: 'tool' },
    { name: 'Docker',     type: 'tool' },
    { name: 'AWS',        type: 'tool' },
    { name: 'Linux',      type: 'tool' },
    { name: 'REST API',   type: 'tool' },
    { name: 'GraphQL',    type: 'tool' },
    { name: 'Tailwind',   type: 'tool' },
    { name: 'Sass',       type: 'tool' },
    { name: 'Webpack',    type: 'tool' },
    { name: 'Figma',      type: 'tool' }
  ]

  const directions = [
    { anim: 'techFloatRL',     startPos: () => ({ top: rand(5, 90) + '%', right: '-180px', left: 'auto', bottom: 'auto' }) },
    { anim: 'techFloatLR',     startPos: () => ({ top: rand(5, 90) + '%', left: '-180px', right: 'auto', bottom: 'auto' }) },
    { anim: 'techFloatTB',     startPos: () => ({ left: rand(5, 90) + '%', top: '-50px', right: 'auto', bottom: 'auto' }) },
    { anim: 'techFloatBT',     startPos: () => ({ left: rand(5, 90) + '%', bottom: '-50px', top: 'auto', right: 'auto' }) },
    { anim: 'techFloatDiagDR', startPos: () => ({ top: rand(-5, 30) + '%', left: rand(-5, 10) + '%', right: 'auto', bottom: 'auto' }) },
    { anim: 'techFloatDiagUL', startPos: () => ({ bottom: rand(-5, 30) + '%', right: rand(-5, 10) + '%', top: 'auto', left: 'auto' }) },
    { anim: 'techFloatDiagUR', startPos: () => ({ bottom: rand(-5, 30) + '%', left: rand(-5, 10) + '%', top: 'auto', right: 'auto' }) },
    { anim: 'techFloatDiagDL', startPos: () => ({ top: rand(-5, 30) + '%', right: rand(-5, 10) + '%', bottom: 'auto', left: 'auto' }) }
  ]

  function rand (min, max) { return (Math.random() * (max - min) + min).toFixed(1) }

  function shuffle (arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function spawnTechTags () {
    if (reducedMotion || lowPower) return

    const shuffled = shuffle(techItems)
    const count = isMobile ? 10 : shuffled.length

    for (let i = 0; i < count; i++) {
      const item = shuffled[i % shuffled.length]
      const tag = document.createElement('span')
      tag.className = `tech-tag tech-tag--${item.type}`
      tag.textContent = item.name

      const dir = directions[Math.floor(Math.random() * directions.length)]
      const pos = dir.startPos()

      const fontSize = (Math.random() * 0.35 + 0.62).toFixed(2)
      const duration = (Math.random() * 28 + 22).toFixed(1)
      const delay    = (Math.random() * -40).toFixed(1)
      const opacity  = (Math.random() * 0.22 + 0.1).toFixed(2)
      const driftX   = (Math.random() * 80 - 40).toFixed(0)
      const driftY   = (Math.random() * 80 - 40).toFixed(0)
      const rotStart = (Math.random() * 12 - 6).toFixed(1)
      const rotEnd   = (Math.random() * 12 - 6).toFixed(1)

      tag.style.cssText = `
        top: ${pos.top};
        right: ${pos.right};
        bottom: ${pos.bottom};
        left: ${pos.left};
        font-size: ${fontSize}rem;
        --anim: ${dir.anim};
        --duration: ${duration}s;
        --delay: ${delay}s;
        --opacity: ${opacity};
        --drift-x: ${driftX}px;
        --drift-y: ${driftY}px;
        --rot-start: ${rotStart}deg;
        --rot-end: ${rotEnd}deg;
      `
      techCloud.appendChild(tag)
    }
  }

  /* ────────────────────────────────────
     6. INIT + RESIZE
     ──────────────────────────────────── */
  let resizeTimer
  window.addEventListener('resize', () => {
    resize()
    initParticles()
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      techCloud.innerHTML = ''
      spawnTechTags()
    }, 400)
  })

  resize()
  initParticles()
  if (!reducedMotion && particles.length) draw()
  spawnTechTags()

  /* ────────────────────────────────────
     7. THEME TOGGLE
     ──────────────────────────────────── */
  themeBtn.addEventListener('click', () => {
    const h = document.documentElement
    const next = h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    h.setAttribute('data-theme', next)
  })

})()

