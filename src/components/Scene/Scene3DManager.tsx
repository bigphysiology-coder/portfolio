import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { Mesh, Vector3, Points, BufferGeometry, AdditiveBlending } from 'three'
import { ScrollTrigger } from '../../lib/gsap'

const SECTION_POSITIONS = [
  { x: 0, y: 0, z: 5 },
  { x: 1, y: -1, z: 6 },
  { x: -1, y: -2, z: 7 },
  { x: 0, y: -3, z: 5 },
  { x: 1, y: -4, z: 6 },
  { x: -1, y: -5, z: 7 },
  { x: 0, y: -6, z: 5 },
]

const COLORS = [
  '#00B4FF',
  '#7C3AED',
  '#10B981',
  '#06B6D4',
  '#3B82F6',
  '#8B5CF6',
  '#00B4FF',
]

function lerpColor(a: string, b: string, t: number): string {
  const ah = parseInt(a.slice(1), 16)
  const bh = parseInt(b.slice(1), 16)
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff
  const rr = Math.round(ar + (br - ar) * t)
  const rg = Math.round(ag + (bg - ag) * t)
  const rb = Math.round(ab + (bb - ab) * t)
  return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1)}`
}

const SECTION_PROPS = [
  { distort: 0.25, scale: 0.7, rotSpeed: 1 },
  { distort: 0.4, scale: 0.85, rotSpeed: 1.1 },
  { distort: 0.55, scale: 1.0, rotSpeed: 1.2 },
  { distort: 0.35, scale: 0.8, rotSpeed: 0.9 },
  { distort: 0.45, scale: 0.9, rotSpeed: 1.05 },
  { distort: 0.5, scale: 0.95, rotSpeed: 1.15 },
  { distort: 0.25, scale: 0.7, rotSpeed: 1 },
]

function TorusKnot({ scrollProgress }: { scrollProgress: { current: number } }) {
  const mesh = useRef<Mesh>(null!)
  const mouse = useRef(new Vector3(0, 0, 0))

  const mouseHandler = (e: { clientX: number; clientY: number }) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseHandler)
    return () => window.removeEventListener('mousemove', mouseHandler)
  }, [])

  useFrame((_state, delta) => {
    if (!mesh.current) return

    const progress = scrollProgress.current
    const total = SECTION_PROPS.length - 1
    const rawIndex = progress * total
    const i = Math.min(Math.floor(rawIndex), total)
    const frac = Math.min(rawIndex - i, 1)

    const a = SECTION_PROPS[i]
    const b = SECTION_PROPS[Math.min(i + 1, total)]

    const distort = a.distort + (b.distort - a.distort) * frac
    const scale = a.scale + (b.scale - a.scale) * frac
    const rotSpeed = a.rotSpeed + (b.rotSpeed - a.rotSpeed) * frac
    const color = lerpColor(COLORS[i], COLORS[Math.min(i + 1, total)], frac)

    mesh.current.rotation.x += delta * 0.15 * rotSpeed
    mesh.current.rotation.y += delta * 0.2 * rotSpeed
    mesh.current.position.x += (mouse.current.x * 0.3 - mesh.current.position.x) * 0.02
    mesh.current.position.y += (mouse.current.y * 0.3 - mesh.current.position.y) * 0.02
    mesh.current.scale.setScalar(scale)

    const mat = mesh.current.material
    if (mat && !Array.isArray(mat) && 'distort' in mat) {
      const m = mat as unknown as { color: { set: (c: string) => void }; emissive: { set: (c: string) => void }; distort: number }
      m.color.set(color)
      m.emissive.set(color)
      m.distort = distort
    }
  })

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[0.7, 0.25, 96, 12]} />
      <MeshDistortMaterial
        color="#00B4FF"
        emissive="#00B4FF"
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.8}
        distort={0.25}
        speed={2}
      />
    </mesh>
  )
}

function ParticleNetwork() {
  const points = useRef<Points>(null!)
  const mouse = useRef(new Vector3(0, 0, 0))
  const count = 120

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      vel[i * 3] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005
    }
    return [pos, vel]
  }, [])

  const mouseHandler = (e: { clientX: number; clientY: number }) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 6
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 6
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseHandler)
    return () => window.removeEventListener('mousemove', mouseHandler)
  }, [])

  useFrame(() => {
    if (!points.current) return
    const geom = points.current.geometry as BufferGeometry
    const pos = geom.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3] + Math.sin(Date.now() * 0.001 + i) * 0.001
      pos[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(Date.now() * 0.001 + i) * 0.001
      pos[i * 3 + 2] += velocities[i * 3 + 2]

      const dx = mouse.current.x - pos[i * 3]
      const dy = mouse.current.y - pos[i * 3 + 1]
      pos[i * 3] += dx * 0.0001
      pos[i * 3 + 1] += dy * 0.0001

      if (Math.abs(pos[i * 3]) > 6) velocities[i * 3] *= -1
      if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1
    }

    geom.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00B4FF"
        transparent
        opacity={0.6}
        blending={AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

function CameraController({ scrollProgress }: { scrollProgress: { current: number } }) {
  const { camera } = useThree()

  useFrame(() => {
    const progress = scrollProgress.current
    const totalSections = SECTION_POSITIONS.length - 1
    const rawIndex = progress * totalSections
    const i = Math.floor(rawIndex)
    const frac = rawIndex - i
    const a = SECTION_POSITIONS[Math.min(i, totalSections)]
    const b = SECTION_POSITIONS[Math.min(i + 1, totalSections)]

    camera.position.x += (a.x + (b.x - a.x) * frac - camera.position.x) * 0.03
    camera.position.y += (a.y + (b.y - a.y) * frac - camera.position.y) * 0.03
    camera.position.z += (a.z + (b.z - a.z) * frac - camera.position.z) * 0.03
    camera.lookAt(0, camera.position.y * 0.5, 0)
  })

  return null
}

function SceneContent({ scrollProgress }: { scrollProgress: { current: number } }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00B4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0066FF" />
      <TorusKnot scrollProgress={scrollProgress} />
      <ParticleNetwork />
      <CameraController scrollProgress={scrollProgress} />
    </>
  )
}

const codeFragments = [
  'const', '=>', '</>', '{}', '()', 'function',
  'let', 'return', 'import', 'export', 'async',
  'await', '() =>', '===', '&&', '||', '?.',
]

function CodeSyntaxOverlay() {
  const items = useMemo(() => {
    return codeFragments.map((fragment, i) => {
      const rand = seededRandom(i * 7 + 13)
      return {
        text: fragment,
        left: rand() * 100,
        top: rand() * 100,
        delay: rand() * 20,
        duration: 18 + rand() * 14,
        size: 10 + rand() * 8,
      }
    })
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute font-mono text-text-secondary/10"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            animation: `drift ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
            transform: 'translateZ(0)',
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export default function Scene3DManager() {
  const scrollProgress = useRef(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
    }

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        scrollProgress.current = self.progress
      },
    })

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => {
      st.kill()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent scrollProgress={scrollProgress} />
      </Canvas>
      <CodeSyntaxOverlay />
    </div>
  )
}
