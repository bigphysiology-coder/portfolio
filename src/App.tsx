import { Component, lazy, Suspense, type ReactNode, type ErrorInfo } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingContactButton from './components/layout/FloatingContactButton'
import ScrollProgress from './components/layout/ScrollProgress'
import Scene3DManager from './components/Scene/Scene3DManager'

const Hero = lazy(() => import('./components/Hero/Hero'))
const TechStack = lazy(() => import('./components/TechStack/TechStack'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const About = lazy(() => import('./components/About/About'))
const Education = lazy(() => import('./components/Education/Education'))
const Certifications = lazy(() => import('./components/Certifications/Certifications'))
const Contact = lazy(() => import('./components/Contact/Contact'))

function LoadingSection() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-text-secondary mb-6">An unexpected error occurred. Please refresh the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-accent text-surface font-display font-semibold rounded-lg"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen text-text-primary">
        <Scene3DManager />
        <ScrollProgress />
        <Header />

        <main>
          <Suspense fallback={<LoadingSection />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <TechStack />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <About />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <Education />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <Certifications />
          </Suspense>

          <Suspense fallback={<LoadingSection />}>
            <Contact />
          </Suspense>
        </main>

        <Footer />
        <FloatingContactButton />
      </div>
    </ErrorBoundary>
  )
}
