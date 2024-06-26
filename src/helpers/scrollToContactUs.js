export const scrollToContactUs = () => {
  const contactUsSection = document.getElementById('contact-us')
  if (contactUsSection) {
    const offsetTop =
      contactUsSection.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = offsetTop - 100
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
