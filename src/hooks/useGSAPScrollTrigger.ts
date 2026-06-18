import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

interface AnimationConfig {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  scrollTrigger?: gsap.plugins.ScrollTriggerInstanceVars
}

export function useGSAPScrollTrigger<T extends HTMLElement>(
  config: AnimationConfig,
  deps: unknown[] = [],
) {
  const ref = useRef<T>(null!)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      if (config.from && config.to) {
        gsap.fromTo(el, config.from, {
          ...config.to,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            ...config.scrollTrigger,
          },
        })
      } else if (config.from) {
        gsap.from(el, {
          ...config.from,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            ...config.scrollTrigger,
          },
        })
      }
    })

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
