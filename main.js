import './style.css'

const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')
const navLinks = document.querySelectorAll('.site-nav a')

menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open') ?? false
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? '關閉選單' : '開啟選單')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('is-open')
    menuToggle?.setAttribute('aria-expanded', 'false')
    menuToggle?.setAttribute('aria-label', '開啟選單')
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible')
  })
}, { threshold: 0.16 })

document.querySelectorAll('.reveal, .intro-grid, .program-card, .contact-grid').forEach((element) => observer.observe(element))

document.querySelectorAll('.program-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.program-card').forEach((item) => item.classList.remove('active'))
    card.classList.add('active')
  })
})
