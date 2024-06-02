import { Layout } from './components/layout/Layout'
import { Main } from './components/main/Main'

function App() {
  const scrollToContactUs = () => {
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

  return (
    <>
      <Layout scrollToContactUs={scrollToContactUs}>
        <Main scrollToContactUs={scrollToContactUs} />
      </Layout>
    </>
  )
}

export default App
