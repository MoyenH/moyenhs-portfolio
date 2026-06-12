import Navbar        from '@/components/Navbar'
import Particles     from '@/components/Particles'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import Skills        from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Education     from '@/components/Education'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import Divider       from '@/components/Divider'
import ScrollReveal  from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Certifications />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
