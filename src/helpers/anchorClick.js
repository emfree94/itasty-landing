export const handleAnchorClick = (e, href) => {
  if (href.startsWith('#')) {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = offsetTop - 100
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }
}
