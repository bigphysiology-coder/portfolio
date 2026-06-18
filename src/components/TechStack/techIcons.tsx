import type { ReactNode } from 'react'

function ReactIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="w-full h-full">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="inherit" fill="none" transform="rotate(0 12 12)" opacity="0.6" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="inherit" fill="none" transform="rotate(60 12 12)" opacity="0.6" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="inherit" fill="none" transform="rotate(120 12 12)" opacity="0.6" />
    </svg>
  )
}

function JavaScriptIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#F7DF1E" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
      <path d="M15 18.5c.5.4 1.2.7 2 .7.6 0 1-.2 1-.5 0-.3-.2-.5-.7-.7l-.7-.3c-1-.4-1.7-1-1.7-2 0-1 .8-1.8 2.2-1.8.8 0 1.5.2 2 .6l-.8 1.2c-.3-.2-.7-.4-1.2-.4-.5 0-.8.2-.8.5 0 .3.3.5.8.7l.6.2c1 .4 1.6 1 1.6 2 0 1.1-.9 1.9-2.4 1.9-.9 0-1.7-.3-2.2-.7l.8-1.2z" fill="#000" />
      <path d="M9 18.5c.3.3.7.5 1.2.5.5 0 .8-.2.8-.5v-4.5h1.5v4.5c0 1.2-.7 1.8-2 1.8-.8 0-1.5-.3-2-.7l.5-1.1z" fill="#000" />
    </svg>
  )
}

function TypeScriptIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#3178C6" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
      <path d="M9.5 11.5h-2v7h-1.5v-7h-2v-1.5h5.5v1.5z" fill="#fff" />
      <path d="M14.5 12.5c.5.3 1.2.5 2 .5.6 0 1-.1 1.3-.3.3-.2.5-.4.5-.7 0-.3-.2-.6-.7-.9-.4-.2-1-.5-1.7-.8-1-.4-1.7-1-2-1.6-.3-.6-.4-1.3-.3-2 .1-.7.4-1.3.9-1.7.5-.5 1.2-.8 2.1-1 .8-.1 1.7 0 2.6.4l-.5 1.3c-.6-.3-1.3-.5-2-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.2.6.7.9.4.2 1 .5 1.8.9.9.4 1.6.9 2 1.5.4.6.6 1.3.6 2.1 0 .8-.3 1.5-.8 2.1-.6.6-1.4 1-2.5 1.2-.8.2-1.8.1-2.8-.3l.5-1.4z" fill="#fff" />
    </svg>
  )
}

function TailwindIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 4c-3 0-4.9 1.5-5.7 4.5 1.1-1.5 2.4-2.1 3.9-1.7.9.2 1.5.8 2.2 1.5 1.1 1.1 2.4 2.4 5.3 2.4 3 0 4.9-1.5 5.7-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.9-.2-1.5-.8-2.2-1.5C15.9 4.8 14.6 4 12 4zM6.3 12C3.3 12 1.4 13.5.6 16.5c1.1-1.5 2.4-2.1 3.9-1.7.9.2 1.5.8 2.2 1.5 1.1 1.1 2.4 2.4 5.3 2.4 3 0 4.9-1.5 5.7-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.9-.2-1.5-.8-2.2-1.5-1.1-1.1-2.4-2.4-5.3-2.4z" fill="#38BDF8" />
    </svg>
  )
}

function NodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#339933" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#339933" />
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="none" stroke="#339933" strokeWidth="0.5" />
      <path d="M7.5 9.5l4.5-2.5 4.5 2.5v5l-4.5 2.5-4.5-2.5v-5z" fill="none" stroke="#fff" strokeWidth="0.8" />
    </svg>
  )
}

function ExpressIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#fff" className="w-full h-full">
      <path d="M12 3c-1.5 0-3 .3-4.4.9C5.8 4.5 4.6 5.5 3.8 6.8c-.8 1.3-1.2 2.7-1.2 4.2 0 1.5.4 2.9 1.2 4.2.8 1.3 2 2.3 3.8 3.1 1.8.8 3.6 1.2 5.6 1.2 2 0 3.8-.4 5.6-1.2 1.8-.8 3-1.8 3.8-3.1" />
      <path d="M12 3c2 0 3.8.4 5.6 1.2" stroke="#fff" strokeWidth="1.5" />
    </svg>
  )
}

function PostgresIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#336791" className="w-full h-full">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#336791" />
      <path d="M7.5 9.5h9M7.5 14.5h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#fff" />
    </svg>
  )
}

function GitIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#F05032" className="w-full h-full">
      <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#F05032" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
    </svg>
  )
}

function VercelIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#fff" className="w-full h-full">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  )
}

function CloudinaryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="9" stroke="#3448C5" strokeWidth="1.5" fill="none" />
      <path d="M8 13c0-2 1.5-3.5 3.5-3.5 1 0 1.8.4 2.5 1" stroke="#3448C5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="2" fill="#3448C5" opacity="0.6" />
    </svg>
  )
}

function PlaywrightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="#2EAD33" className="w-full h-full">
      <circle cx="10" cy="14" r="6" fill="#2EAD33" opacity="0.7" />
      <circle cx="16" cy="10" r="4" fill="#45BA4B" />
      <circle cx="10" cy="14" r="2" fill="#fff" />
    </svg>
  )
}

function TanStackIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="4" width="4" height="16" rx="1" fill="#FF4154" opacity="0.8" />
      <rect x="10" y="4" width="4" height="16" rx="1" fill="#FF4154" opacity="0.6" />
      <rect x="17" y="4" width="4" height="16" rx="1" fill="#FF4154" opacity="0.4" />
    </svg>
  )
}

function ZustandIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="8" cy="8" r="3" fill="#B45309" opacity="0.7" />
      <circle cx="16" cy="16" r="3" fill="#B45309" opacity="0.5" />
      <path d="M8 11l8 5" stroke="#B45309" strokeWidth="1.5" />
    </svg>
  )
}

function FramerMotionIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#0055FF" opacity="0.2" />
      <path d="M8 8h8v8H8z" fill="#0055FF" />
      <path d="M8 8l4 4-4 4" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

function DrizzleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#C5F74F" opacity="0.8" />
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="none" stroke="#C5F74F" strokeWidth="0.5" />
    </svg>
  )
}

function RenderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#46E3B7" opacity="0.7" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
    </svg>
  )
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 2L4 20h16L12 2z" fill="#646CFF" opacity="0.9" />
      <path d="M12 6l-4 10h8L12 6z" fill="#fff" opacity="0.8" />
    </svg>
  )
}

function GSAPIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="9" fill="#88CE02" opacity="0.25" />
      <path d="M7 15l5-8 5 8" stroke="#88CE02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M9 13h6" stroke="#88CE02" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ThreeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#000" />
      <path d="M7 17l5-10 5 10H7z" stroke="#fff" strokeWidth="1.2" fill="none" />
      <line x1="12" y1="7" x2="12" y2="17" stroke="#fff" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

const iconMap: Record<string, ReactNode> = {
  'JavaScript': <JavaScriptIcon />,
  'React': <ReactIcon />,
  'TypeScript': <TypeScriptIcon />,
  'Tailwind CSS': <TailwindIcon />,
  'Node.js': <NodeIcon />,
  'Express': <ExpressIcon />,
  'PostgreSQL': <PostgresIcon />,
  'Git': <GitIcon />,
  'Vercel': <VercelIcon />,
  'Cloudinary': <CloudinaryIcon />,
  'Playwright': <PlaywrightIcon />,
  'TanStack Query': <TanStackIcon />,
  'Zustand': <ZustandIcon />,
  'Framer Motion': <FramerMotionIcon />,
  'Drizzle ORM': <DrizzleIcon />,
  'Render': <RenderIcon />,
  'Vite': <ViteIcon />,
  'GSAP': <GSAPIcon />,
  'Three.js': <ThreeIcon />,
}

export function getTechIcon(name: string): ReactNode | null {
  return iconMap[name] || null
}

export { iconMap as techIcons }
