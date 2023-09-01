import HeroSection from '@/components/HeroSection'
import RegisterSection from '@/components/RegisterSection'
import ProjectsSection from '@/components/ProjectsSection'
import FirstStepsSection from '@/components/FirstStepsSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main className='p-10'>
      <HeroSection />
      <RegisterSection />
      <ProjectsSection />
      <FirstStepsSection />
      <AboutSection />
    </main>
  )
}
